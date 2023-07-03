/*Login Form validation using OOP's*/
class LoginForm {
    constructor (email, password){
        this.email;
        this.password;
    }
    
} 

validate() {
    //variable declaration
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    //form validation conditions using if statements

   if (!this.email.includes("@")) {
    console.log("Enter Valid Email Address");
    return false
   }

  if (this.password.length <8){
    console.log("Password must be minimum of 8 Characters");
    return true
  }
// if username is above 3 characters and password is above 8 characters
  return true
}

//Submission



/*Filter search Function*/
$('.dropdown-toggle').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).closest('.search-dropdown').toggleClass('open');
});

$('.dropdown-menu > li > a').click(function(e) {
  e.preventDefault();
  var clicked = $(this);
  clicked.closest('.dropdown-menu').find('.menu-active').removeClass('menu-active');
  clicked.parent('li').addClass('menu-active');
  clicked.closest('.search-dropdown').find('.toggle-active').html(clicked.html());
});

$(document).click(function() {
  $('.search-dropdown.open').removeClass('open');
});





