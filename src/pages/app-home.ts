import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';
import { ProfileCard } from '../components/profile-card';
import { Relay } from 'nostr-tools';


import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';


@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome to my social media profile! Try installing to your homescreen!';

  static styles = [
    styles,
 ];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'My social media microclient',
        text: 'Try installing on your home screen!',
        url: 'https://miguelalmodo.com/',
      });
    }
  }

  profilePic = ''

  async connectedCallback(): Promise<void> {
    super.connectedCallback();;
    await this.fetchProfileMetadata()
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

  render() {
    return html`


<div class="master-container">
<app-header></app-header>
<div class="page-content-container">
<aside class="profile-sidebar">
<header>${this.userName ? html`<h1>${this.userName}</h1>`: html`<p>Loading Nostr Username...</p>`}</header>

<div class="profile-picture-container">


        ${this.profilePic
          ? html`<img class="profile-pic" src="${this.profilePic}" alt="Profile Picture">`
          : html`<p>Loading profile picture...</p>`}

          <p class="personal-msg"><b>":-)"</b></p>

          <ul class="gender-age">
            <li>Male</li>
            <li>30 years old</li>
            <li>Aguadilla,</li>
            <li>PUERTO RICO</li>
          </ul>

          <ul class="last-login">
            <li>Last Login:</li>
            <li>4/22/2006</li>
          </ul>

          <p class="pics-videos">View My: <a href="#"><b>Pics</b></a> | <a href="#"><b>Videos</b></a></p>
</div>

<!-- Contact Box -->
        <section class="contact-box">
          <h2>Contacting ${this.userName ? html`${this.userName}`: html`<p>Loading Nostr Username...</p>`}</h2>

          <figure class="contact-images">
            <img src="pictures/sendMailIcon.gif" alt="Send Message">
            <img src="pictures/forwardMailIcon.gif" alt="Forward to Friend">
            <img src="pictures/addFriendIcon.gif" alt="Add to Friends">
            <img src="pictures/addFavoritesIcon.gif" alt="Add to Favorites">
            <img src="pictures/messagefriend.gif" alt="Instant Message">
            <img src="pictures/blockUser.gif" alt="Block User">
            <img src="pictures/addToGroupIcon.gif" alt="Add to Group">
            <img src="pictures/rankUserIcon.gif" alt="Rank User">
          </figure>
        </section>

        <!-- MySpace URL -->
        <section class="nip05-address-box">
          <h3><b>Nostr Address:</b></h3>
          ${this.nip05addy
          ? html`<p class="nip05-address">${this.nip05addy}</p>`
          : html`<p>Loading Nostr Address...</p>`}
        </section>
        </aside>


<!-- Main Section -->
      <main>

        <section class="user-network">
          <header>
            <h2>${this.userName ? html`${this.userName}`: html`<p>Loading Nostr Username...</p>`} is in your extended network</h2>

          </header>
        </section>

        <section class="blog">
          <p><b>${this.userName ? html`${this.userName}`: html`<p>Loading Nostr Username...</p>`}'s Latest Blog Entries</b> </p>
          <p>MySpace Concert & Parties -Georgia, Orlando, Miami! (<a href="#">view more</a>) </p>
          <p>In Stores Today - MySpace Records Vol. 1 ! (<a href="#">view more</a>) </p>
          <p>MySpace Records - get more photos for your profile! (<a href="#">view more</a>) </p>
          <p>[<a href="${resolveRouterPath('blog')}">View All Blog Entries</a>]</p>

          </section>

        <section class="blurbs">
          <header class="main-section-header">
            <h2 class="main-section-h2">${this.userName ? html`${this.userName}`: html`<p>Loading Nostr Username...</p>`} Blurbs</h2>
          </header>

          <h3>About me:</h3>
          <p>I'm applying to the Voqal fellowship because I want to break up big tech by <b>empowering youth with a social media powered personal website</b>. Send a note if you have any
          questions about what I mean by this or what you're looking at here. <span class="info">Be sure to check out the <a href="${resolveRouterPath('about')}">FAQ</a> to see if
          your question has already been answered.</span></p>

          <p><strong>A website like this will short circuit the consent manufacturing machine!</strong></p>

          <p>The idea is to embed social media into existing web 2.0 infrastructure by helping youth-serving community based organizations
          set up a relay to form a resilient social network that youth can connect to with their websites, creating a grassroots social network
          where everyone has a role to play. Youth and their favorite program staff will participte in a summer long course to learn how to control their
          site with basic HTML, CSS, and JS.</p>

          <h3>My lived experience</h3>
          <p> I'm a '93 baby with early memories of an internet before it was colonized by big tech! The internet used
          to be a creative medium for people to show off their individuality, but is now a corporate wasteland full of
          advertisement and AI-generated content. I grew up tinkering with electronics like flashing custom firmware on
          game consoles to pirate games and flashing custom operating systems on smartphones to unlock non-corporate app
          stores.</p>
          <h3>Disrupting the Status Quo</h3>

          <h5>Ideological: A system of beliefs or ideas</h5>
<h5>Institutional: Using the laws, the legal system, the education system, public policy, media, political power, etc… to maintain ideology</h5>
<h5>Interpersonal: The idea that one group is better than another and has the right to dominate/control the other</h5>
<h5>Internalized The oppressor doesn’t have to exert any more pressure, because we now do it to ourselves and each other</h5>

        </section>


 </main>



      </div>
      </div>
    `;
  }
}
