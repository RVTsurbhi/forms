$(document).ready(function(){

    $('[data-toggle="popover"]').popover({

        placement : 'top',

        trigger : 'hover'

    });

var letters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
email.onblur = function() {
  if (!email.value.match(letters)) { // not email
    email.classList.add('invalid');
    error.innerHTML = 'Please enter a correct email.'
  }
};

email.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // remove the "elowerCaseLettersrror" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};


//confirm password
$(function () {
       $("#btnSubmit").click(function () {
           var password = $("#pswrd").val();
           var confirmPassword = $("#confirmpswrd").val();
           if (password != confirmPassword) {
               alert("Passwords do not match.");
               return false;
           }
           return true;
       });
   });

});
