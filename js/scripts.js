
$(document).ready(function(){

    $('[data-toggle="popover"]').popover({

        placement : 'top',

        trigger : 'hover'

})

var letters = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
$("#emailId").focusout(function() {
  if (!emailId.value.match(letters)) { // not email
    emailId.classList.add('invalid');
    error.innerHTML = 'Please enter a correct email.'
  }
});

$("#emailId").focusin(function() {
  if (this.classList.contains('invalid')) {
    // remove the "elowerCaseLettersrror" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
});

//password

var numbers = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
$("#pswrd").focusout(function() {
  if (!pswrd.value.match(numbers)) { // not email
    pswrd.classList.add('invalid');
    wrong.innerHTML = 'Please enter a correct password.'
  }
});

$("#pswrd").focusin(function() {
  if (this.classList.contains('invalid')) {
    // remove the "error" indication, because the user wants to re-enter something
    this.classList.remove('invalid');
    wrong.innerHTML = "";
  }
});

$(function () {
     $("#pswrd2").focusout(function () {
         var password = $("#pswrd").val();
         var confirmPassword = $("#pswrd2").val();
         if (password != confirmPassword) {
          wrong2.innerHTML = "Passwords do not match."
          //alert("Passwords do not match.");
          return false;
         }
         return true;
     });

/*$('input[name=password]').keyup(function () {
    'use strict';

    if ($('input[name=password2]').val() === $(this).val()) {
        $('#wrong2').html('match');
        this.setCustomValidity('');
    } else {
        $('#wrong2').html('mismatch');
        this.setCustomValidity('Passwords must match');
    }
});*/

});

//for autocomplete places
var autocomplete = new google.maps.places.Autocomplete($("#address")[0], {});

            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                console.log(place.address_components);
            });
//phoneNumber
$("#mobile-number").intlTelInput();
$(":input").inputmask();
$("#mobile-number").inputmask({"mask": "(999) 999-9999"});

});


    //   $('#signUp')
    //     .find('[name="phoneNumber"]')
    //         .intlTelInput({
    //             utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.7/js/utils.js',
    //             autoPlaceholder: true,
    //             preferredCountries: ['fr', 'us', 'gb']
    //         });
    //
    // $('#signUp')
    //     .formValidation({
    //         framework: 'bootstrap',
    //         icon: {
    //             valid: 'glyphicon glyphicon-ok',
    //             invalid: 'glyphicon glyphicon-remove',
    //             validating: 'glyphicon glyphicon-refresh'
    //         },
    //         fields: {
    //             phoneNumber: {
    //                 validators: {
    //                     callback: {
    //                         message: 'The phone number is not valid',
    //                         callback: function(value, validator, $field) {
    //                             return value === '' || $field.intlTelInput('isValidNumber');
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     })
    //     // Revalidate the number when changing the country
    //     .on('click', '.country-list', function() {
    //         $('#contactForm').formValidation('revalidateField', 'phoneNumber');
    //     });


//   $.validator.addMethod('strongPassword',function(value, element){
//     return this.optional(element)
//     || value.length >=12 && /\d/.test(value) && /[a-z]/i.test(value);
//   },'password must contain atleast 12 char long, one number & one char\'.')
//
//   $("#signUp").validate({
//     rules: {
//       email: {
//         required: true,
//         email: true
//       },
//       password: {
//         required: true,
//         strongPassword: true
//       },
//         password2:{
//           required: true,
//           equalTo: "#password"
//         }
//       },
//     messages: {
//       email: {
//         required: "enter an email address.",
//         email: "please enter a valid email."
//       }
//     }
//   });
//
