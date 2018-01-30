
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
  $("#error2").hide();
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
  $("#error3").hide();
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
          //wrong2.innerHTML = "Passwords do not match."
          $("#wrong2").text( "password does not match" ).show();
          //alert("Passwords do not match.");
          return false;
         }
         return true;
       });
   });
   $("#pswrd2").focusin(function(){
     $("#wrong2").hide();
   });

//to hide the error msgs
   $("#mobile-number").focusin(function(){
     $("#error5").hide();
   });
   $("#address").focusin(function(){
     $("#error6").hide();
   });
   $("#datepicker").focusin(function(){
     $("#error7").hide();
   });
    /*.focus(function() {
      		$('#wrong2').show();
      	}).blur(function() {
      		$('#wrong2').hide();
      	});*/

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

    //date Validation
    $( function() {
     $( "#datepicker" ).datepicker();
    });

 // After Form Submitted Validation
     $("#btnSubmit").on('click',function(){

      var myId = $("#emailId").val();
      var myPassword = $("#pswrd").val();
      var myPhone = $("#mobile-number").val();
      var myAdd = $("#address").val();
      var myDate = $("#datepicker").val();

      if(myId ==  "" || myId ==  undefined )
      {
        $("#error2").text( "this field is required" ).show();
        return false;
      }
      if(myPassword ==  undefined || myPassword =="")
      {
        $("#error3").text( "this field is required" ).show();
        //alert("please fill the email");
        return false;
      }
      if(myAdd ==  undefined || myAdd =="")
      {
        $("#error6").text( "this field is required" ).show();
        //alert("please fill the email");
        return false;
      }
      if(myPhone ==  undefined || myPhone =="")
      {
        $( "#error5").text( "this field is required" ).show();
        //alert("please fill the email");
        return false;
      }
      if(myDate ==  undefined || myDate =="")
      {
        $( "#error7").text( "this field is required" ).show();
        //alert("please fill the email");
        return false;
      }

    });

     $("#btnSubmit").on('click',function(){
     });
});
