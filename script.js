'use-strict';

const signInBtn = document.querySelector('.sign-in');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('aside');

hamburger.addEventListener('click', function () {
  this.classList.toggle('shifted-right');
  this.classList.toggle('rotate-burger-right');
  sideMenu.classList.toggle('shifted-left');
});

signInBtn.addEventListener('click', renderForm);

window.addEventListener('click', e => {
  if (e.target.classList.contains('overlay')) {
    removeForm();
  }
});
window.addEventListener('click', e => {
  if (e.target.classList.contains('btn-form')) {
    e.preventDefault();
    removeForm();
  }
});

function removeForm() {
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('fade-out-modal');
  setTimeout(() => {
    overlay.remove();
  }, 500);
}
function renderForm() {
  const html = `<div class="overlay fade-in-modal">
   <div class="form-wrapper">
     <form>
       <h2 class="form-h2">Sign In</h2>
       <div class="username elements">
         <label for="username">Username</label>
         <input
           type="text"
           id="user-input"
           placeholder="Enter username..."
         />
         <!-- <p class="error username-error">
           *Must be > 3 and < 16 characters long
         </p> -->
       </div>
       <div class="email elements">
         <label for="email">Email</label>
         <input type="text" id="email-input" placeholder="Enter email..." />
         <!-- <p class="error email-error">*Wrong email address</p> -->
       </div>
       <div class="password elements">
         <label for="password">Password</label>
         <input
           type="password"
           id="password-input"
           placeholder="Enter password..."
         />
         <!-- <p class="error password-error">*Must have at least 6 characters</p> -->
       </div>
       <div class="password elements">
         <label for="password2">Confirm Password</label>
         <input
           type="password"
           id="password2-input"
           placeholder="Retype password..."
         />
         <!-- <p class="error password2-error">*Password doesn't match</p> -->
       </div>
       <button type="submit" class="btn-form">Submit</button>
       <!-- <button type="reset" class="reset-btn">Reset Fields</button> -->
     </form>
   </div>
 </div>`;

  body.insertAdjacentHTML('beforeend', html);
}
