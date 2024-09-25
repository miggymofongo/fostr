import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';
import '../styles/global.css'

import '@shoelace-style/shoelace/dist/components/button/button.js';
import { styles } from '../styles/shared-styles';
@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'fostr';

  @property({ type: Boolean}) enableBack: boolean = false;

  static styles = [
    styles,
    css`
    /*
========================================
Main Header
========================================
*/
.main-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 151px;
  background-color: rgb(0, 51, 153);
  color: #ffffff;
}

.main-header ul {
  list-style-type: none;
}

.main-header a:link {
  color: #ffffff;
  font-weight: normal;
}

.main-header a:visited {
  color: #ffffff;
}



    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }
    }
      /*

========================================
Search Bar
========================================
*/
.search-bar {
  display: grid;
  grid-template-columns: .25fr 1fr .25fr;
}

.search-bar form {
  justify-self: center;
  margin: 0;
}

.search-bar form [type="text"] {
  width: 160px;
}

.search-bar form [type="radio"] {
  margin-right: .33rem;
}

.search-bar ul {
  display: flex;
}

.submit-btn {
  margin: 8px;
  border: 1px solid black;
  padding: 2px 7px;
  background-color: #E0FFFF;
  font-size: 10px;
  border-color: rgb(186, 186, 186);
}

.topnav {
  padding: 0;
  margin: 8px;
}

.topnav li:first-child::after {
  content: '|';
  margin: .33rem;
}

.home {
  justify-self: start;
}

.signup {
  justify-self: end;
}

/*
========================================
Navigation Bar
========================================
*/
.navbar {
  display: flex;
  align-items: center;
  margin-top: auto;
  background-color: rgb(102, 153, 204);
  height: 26px;
}

.navbar ul {
  display: flex;
  margin: 0 auto;
  padding: 0;
}

.navbar li::after {
  content: '|';
  margin: .33rem;
  color: black;
}

.navbar li:last-child::after {
  content: '';
}

.navbar a:hover {
  color: #003399;
}
  #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
  `];

  render() {
    return html`

    <header class="main-header">
      <nav class="search-bar">

        <div id="back-button-block">
          ${this.enableBack ? html`<sl-button size="small" href="${resolveRouterPath()}">
            Back
          </sl-button>` : null}

          <h1>${this.title}</h1>
        </div>

        <form>
          <label>
            The Web
            <input type="radio" name="search-type" value="the-web">
          </label>

          <label>
            MySpace
            <input type="radio" name="search-type" value="myspace">
          </label>

          <label>
            <input type="text" name="search">
          </label>

          <input class="submit-btn" type="submit" name="submit-button" value="Search">
        </form>

        <ul class="topnav signup">
          <li><a href="#">Help</a></li>
          <li><a href="#">SignUp</a></li>
        </ul>
      </nav>

      <nav class="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Invite</a></li>
          <li><a href="#">Film</a></li>
          <li><a href="#">Mail</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Favorites</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Groups</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Classifieds</a></li>
        </ul>
      </nav>

    </header>


    `;
  }
}
