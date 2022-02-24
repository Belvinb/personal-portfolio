
$(function(){
  // $("#name-error").hide();
  // $("#email-error").hide();
  // $("#subject_error_message").hide();
  // $ ("#message_error_message").hide();

  var error_name = false;
  var error_email = false;
  var error_subject = false;
  var error_message =false;

  $("#name").focusout(function(){
      check_name();
    });
    

  $("#form_email").focusout(function(){
      check_email();
  });
  $("#message").focusout(function(){
    check_message();
});


function check_name(){
  var pattern= /^[a-zA-Z]*$/;
  var name = $("#name").val()
  if(pattern.test(name) && name !== ''){
      // $("#name-error").hide();
      $("#name").css("border-bottom","2px solid #34F458");
      $("#name-error").html(" ");

  }
  else{
      $("#name-error").html("Name should contain only characters");
      $("#name-error").show();
      $("#name").css("border-bottom","2px solid #F90A0A");
      error_name=true;
  }
}

function check_message(){
 
  var message = $("#message").val()
  if(message[0] != ' '){
      // $("#name-error").hide();
      $("#message").css("border-bottom","2px solid #34F458");
      $("#message-error").html(" ");

  }
  else{
      $("#message-error").html("please write your message");
      $("#message-error").show();
      $("#message").css("border-bottom","2px solid #F90A0A");
      error_message=true;
  }
}

// function check_email(){
//   var pattern= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   var name = $("#email").val()
//   if(pattern.test(email) && email !== ''){
//       $("#email-error").hide();
//       $("#email").css("border-bottom","2px solid #34F458");

//   }
//   else{
//       $("#email-error").html("Invalid Email");
//       $("#email-error").show();
//       $("#email").css("border-bottom","2px solid #F90A0A");
//       error_email=true;
//   }
// }



$(function(){
  // $("#name-error").hide();
  // $("#email-error").hide();
  // $("#subject_error_message").hide();
  // $ ("#message_error_message").hide();

  var error_name = false;
  var error_email = false;
  var error_subject = false;
  var error_message =false;

  $("#name").focusout(function(){
      check_name();
    });
    

  $("#email").focusout(function(){
      check_email();
  });
  $("#message").focusout(function(){
    check_message();
});


function check_name(){
  var pattern= /^[a-zA-Z]*$/;
  var name = $("#name").val()
  if(pattern.test(name) && name !== ''){
      // $("#name-error").hide();
      $("#name").css("border-bottom","2px solid #34F458");
      $("#name-error").html(" ");

  }
  else{
      $("#name-error").html("Name should contain only characters");
      $("#name-error").show();
      $("#name").css("border-bottom","2px solid #F90A0A");
      error_name=true;
  }
}

function check_message(){
 
  var message = $("#message").val()
  if(message[0] != ' '){
      // $("#name-error").hide();
      $("#message").css("border-bottom","2px solid #34F458");
      $("#message-error").html(" ");

  }
  else{
      $("#message-error").html("please write your message");
      $("#message-error").show();
      $("#message").css("border-bottom","2px solid #F90A0A");
      error_message=true;
  }
}

// function check_email(){
//   var pattern= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   var name = $("#email").val()
//   if(pattern.test(email) && email !== ''){
//       $("#email-error").hide();
//       $("#email").css("border-bottom","2px solid #34F458");

//   }
//   else{
//       $("#email-error").html("Invalid Email");
//       $("#email-error").show();
//       $("#email").css("border-bottom","2px solid #F90A0A");
//       error_email=false;
//   }
// }

$("#ajax-contact").submit(function()
{
  error_name=false;
  error_email=false;
  error_subject=false;
  error_message=false;
  check_name();
  check_email();
  if(error_name===false && error_email === false && error_message === false )
  {
      alert("Registration succesful");
      return true;
  }
  else{
      alert("please fill the form");
      return false;
  }
});
});
});
