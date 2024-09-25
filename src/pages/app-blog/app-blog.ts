import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component

import { styles as sharedStyles, styles } from '../../styles/shared-styles';
import { Relay } from 'nostr-tools'

import '@shoelace-style/shoelace/dist/components/card/card.js';




@customElement('app-blog')

export class BlogNote extends LitElement {
  @property({ type: String }) userName = '';
  @property({ type: String }) profilePic = '';
  @property({ type: String }) nip05addy = '';
  @property({ type: Array }) blogs = []

  static styles = [
    styles
 ];

  // Declare blogs as a reactive property to store the fetched blog posts

  // Fetch long-form notes after component is first rendered
  async firstUpdated() {
    await this.fetchLongFormNotes();
    await this.fetchProfileMetadata();
  }


  async fetchProfileMetadata() {
    const relay = await Relay.connect('wss://notes.miguelalmodo.com');
    console.log(`connected to ${relay.url}`);
    const pubkey = "ec965405e11a6a6186b27fa451a2ffc1396ede7883d2ea11c32fbd2c63996966";

    const sub = relay.subscribe([
      {kinds: [0],
        authors: [pubkey],
      }
    ], {
      onevent: (event) => {
        const profileData = JSON.parse(event.content);
        this.profilePic = profileData.picture || '';
        this.nip05addy = profileData.nip05;
        this.userName = profileData.name;
        this.requestUpdate();
        console.log(profileData)
      },
      oneose: () => {
        sub.close();
      }
    });
  }



async fetchLongFormNotes() {
  const relay = await Relay.connect('wss://notes.miguelalmodo.com');
  console.log(`connected to ${relay.url}`);

  const pubkey = 'ec965405e11a6a6186b27fa451a2ffc1396ede7883d2ea11c32fbd2c63996966';
  const blogs: string[] = []; // Specify the type as string[]

  const sub = relay.subscribe([

    {
          kinds: [30023], // Nostr kind for long notes
          authors: [pubkey], // Filter by your pubkey
          limit: 5 // Fetch the last 10 notes
      }
  ], {
    onevent: (event) => {
      const noteContent = event.content;

      let noteTitle = 'Untitled Blog'; // Default title if not found
      let noteBody = noteContent; // Default body is raw content (HTML or markup)

      // Check if content is valid JSON
      try {
        const parsedContent = JSON.parse(noteContent);

        // If successfully parsed, use title and body from JSON
        noteTitle = parsedContent.title || 'Untitled Blog';
        noteBody = parsedContent.body || noteContent;
console.log(parsedContent)
      } catch (error) {
        console.log(noteContent);
        console.warn("Note content is not valid JSON. Treating as raw markup:", noteContent);
      }

      const noteBodyHTML = marked(noteBody);
      // Add the blog note to the blogs array
      blogs.push({ title: noteTitle, content: noteBodyHTML });
      this.requestUpdate(); // Trigger re-render
      console.log(noteTitle, noteBodyHTML); // Log the title and body for debugging
    },
    oneose: () => {
      sub.close();
      this.blogs = blogs; // Update the component's blogs property
      this.requestUpdate();
    }
  });
}

  render() {
    return html`
    <div class="master-container">

    <app-header ?enableBack="${true}"></app-header>
<div class="page-content-container">
<section class="blog">
          <p><b>${this.userName ? html`${this.userName}`: html`<p>Loading Nostr Username...</p>`}'s Latest Blog Entries</b> </p>
          ${this.blogs.length > 0
            ? html`${this.blogs.map(blog => html`
              <div>
                <h3>${blog.title}</h3>
                <div>${unsafeHTML(blog.content)}</div>
              </div>`)}`
            : html`<p>Loading Blogs...</p>`
          }

          </section>
      </div></div>

    `;
  }
}
