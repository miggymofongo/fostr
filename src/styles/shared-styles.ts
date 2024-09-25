import { css } from 'lit';

// these styles can be imported from any component
// for an example of how to use this, check /pages/about-about.ts
export const styles = css`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

/*
========================================
Master Container
========================================
*/
.master-container {
 display: flex;
  flex-direction: column;
margin: auto;
  width: 800px;
  background-color: white;
  color: black;
}

/*
========================================
Page Content Container
========================================
*/
.page-content-container {
  display: grid;

  grid-template-columns: 325px 453px;
  grid-column-gap: 20px;
  grid-template-areas: "sidebar main";
}

/*
========================================
Profile Sidebar Column
========================================
*/
.profile-sidebar {
grid-area: sidebar;
  margin-left: 27px;
  width: 300px;

}

h1 {
  font-size: 12.25pt;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 0px;
}

.profile-sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/*
========================================
Profile Picture Container
========================================
*/
.profile-picture-container {
  display: grid;
  grid-template-columns: 170px 115px;
  grid-template-rows: 176px;
  grid-column-gap: 15px;
  margin-bottom: 12px;
}

.profile-picture-container p {
  margin: 0;
}

.profile-pic {
  width: 100px; /* Reduce the image width by 50% */
  height: auto; /* Keep the aspect ratio */
  grid-area: 1/1;
  margin-top: 10px;
  margin-bottom: 10px;
  object-fit: cover; /* Ensures the image maintains its aspect ratio and doesn't distort */
  border-radius: 50%; /* Optional: for a circular profile image */
}


.personal-msg {
  grid-area: 1/2;
  margin: 0;
}

.gender-age {
  grid-area: 1/2;
}

.gender-age li:first-child {
  margin-top: 28px;
}

.last-login {
  grid-area: 1/2;
  align-self: end;
}

.last-login li:last-child {
  margin-bottom: 15px;
}

.pics-videos {
  grid-area: 1/1;
  justify-self: center;
  align-self: end;
}

/*
========================================
Contact Box
========================================
*/
.contact-box {
  border: 2px solid rgb(102, 153, 204);
  height: 149px;
  width: 300px;
  margin-bottom: 24px;
}

.contact-box h2 {
  color: white;
  background-color: rgb(102, 153, 204);
  height: 17px;
  padding-left: 10px;
}

.contact-images {
  display: grid;
  grid-template-columns: 150px 150px;
  margin: 0;
  margin-top: 5px;
  margin-left: 10px;
}

/*
========================================
NIP-05 Address
========================================
*/
.nip05-address-box {
  border: 1px solid rgb(102, 153, 204);
  height: 26px;
  margin-bottom: 24px;
}

.nip05-address-box h3,
.myspace-url-box p {
  margin: 0;
  padding: 0;
}

.nip05-address-box h3 {
  font-size: 8pt;
  padding-left: 2px;
}

.nip05-address-box p {
  padding-left: 6px;
  ;
}

/*
========================================
Sidebar Table Class
========================================
*/
.sidebar-table {
  border: 2px solid rgb(102, 153, 204);
  display: table;
  border-collapse: separate;
  border-spacing: 3px;
}

.sidebar-table-h2 {
  background-color: rgb(102, 153, 204);
  color: white;
  text-align: left;
  height: 17px;
  padding-left: 15px;
  padding-top: 2px;
}

.sidebar-table-header {
  vertical-align: top;
  text-align: left;
  width: 107px;
  background-color: rgb(177, 208, 240);
  color: #336699;
  padding: 3px;
  font-weight: bold;
  font-size: 8pt;
}

.sidebar-table-data {
  width: 184px;
  background-color: rgb(213, 232, 251);
  padding: 3px;
}

/*
========================================
Interests
========================================
*/
.interests p {
  margin-top: 0;
}

.interests p:only-child,
.interests p:last-child {
  margin-bottom: 0;
}

.interests table {
  margin-bottom: 13px;
}

/*
========================================
Details
========================================
*/
.details table {
  margin-bottom: 22px;
}

/*
========================================
Schools
========================================
*/
.schools .sidebar-table-header {
  width: 228px;
  color: black;
  font-weight: normal;
}

.schools .sidebar-table-data {
  width: 63px;
  text-align: center;
  vertical-align: top;
}

.schools ul {
  margin-bottom: 2em;
}

/*
========================================
Main Column
========================================
*/
main {
  grid-area: main;
}

/*
========================================
User Network
========================================
*/
.user-network {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 433px;
  margin: auto;
  height: 75px;
  border: 2px solid black;
  margin-top: 13px;
}

.user-network h2 {
  font-size: 12pt;
}

/*
========================================
Blog
========================================
*/
.blog {
  display: grid;
  grid-auto-rows: 29px;
  flex-direction: column;
  margin-top: 13px;
  margin-left: 12px;
  margin-bottom: 16px;
}

.blog p {
  margin-top: 3px;
}

/*
========================================
Blurbs
========================================
*/
.main-section-header {
  background-color: #ffcc99;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 8px;
}

.main-section-h2 {
  color: #FF6600;
  margin-left: 20px;
}

.blurbs h3 {
  margin: 0;
  color: #FF6600;
  font-size: 9pt;
  margin-left: 15px;
}

.blurbs p:nth-of-type(5) {
  margin-bottom: 2em;
}

.blurbs p {
  margin: 0 10px 15px 15px;
}

.blurbs h5 {
  margin: 0 10px 15px 15px;
}

.info {
  color: green;
  font-weight: bold;
}

/*
========================================
Friend Space
========================================
*/
.friends header {
  margin-bottom: 6px;
}

.friends p:nth-of-type(1) {
  margin-top: 0;
  margin-left: 15px;
}

.focus-highlight {
  color: #cc0000;
  font-weight: normal;
  font-size: 10pt;
}

.friend-pic-container {
  display: grid;
  grid-template-columns: repeat(4, 109px);
  grid-template-rows: 160px 193px;
}

.friend-pic-container figure {
  margin: 0;
}

.friend-pic-container figcaption {
  text-align: center;
}

.friend-pic-container img {
  display: block;
  margin: auto;
}

.friends-list-link {
  display: flex;
  justify-content: flex-end;
}

.friends-list-link {
  margin-top: 7px;
  margin-right: 8px;
  margin-bottom: 30px;
}

.friends-list-link a {
  color: #cc0000;
}

/*
========================================
Comment Wall
========================================
*/
.comment-wall .main-section-header {
  margin-bottom: 3px;
}

.comment-wall .main-section-h2 {
  margin-bottom: 0;
}

#comment-counter {
  margin-top: 0;
  margin-left: 15px;
  margin-bottom: 3px;
}

.comment-wall table {
  margin: auto;
  margin-bottom: 5px;
}

.comment-wall th {
  background-color: rgb(255, 153, 51);
  width: 158px;
  padding: 3px;
  vertical-align: top;
}

.comment-wall td {
  vertical-align: top;
  background-color: rgb(249, 214, 180);
  width: 269px;
  padding: 3px;
}

.comment-wall figcaption,
.comment-wall figure {
  margin: 0;
}

.comment-wall figcaption {
  margin-bottom: 1em;
}

.comment-wall figure {
  margin-bottom: 49.33px;
}

.comment-wall h3 {
  font-size: 10pt;
  margin: 0;
  margin-bottom: 1em;
}

.comment-wall p {
  font-weight: normal;
  text-align: left;
  margin: 0;
}

#add-comment {
  text-align: right;
  margin-right: 10px;
  margin-bottom: 5px;
}

/*
========================================
Footer
========================================
*/
footer {
  display: grid;
  grid-template-rows: 16px 39px;
  background-color: #e5e5e5;
  padding-top: 10px;
  height: 65px;
}

footer a {
  text-decoration: underline;
  font-weight: normal;
  font-size: 8pt;
}

footer ul {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

footer li:after {
  content: ' | ';
  font-weight: normal;
}

#last:after {
  content: none;
}

footer small {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  font-size: 8pt;
  font-weight: normal;
}

`;