function clearErrors(){
  errors=document.getElementsByClassName('formerror');
  for(let item of errors){
    item.innerHTML=" ";
  }
}

function seterror(id,error){
  //sets an error inside the id tag
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML=error;

}


function validateForm(){
  //for validation purpose
  var returnval = true;
  clearErrors();

  var name = document.forms['myForm']["fname"].value;
  if(name.length==0){
    seterror("name","Name cannot be empty");
    returnval = false;
  }

  var email= document.forms['myForm']["femail"].value;
  if(email.length>25){
    seterror("email","email length is too long");
    returnval = false;
  }

  var phone= document.forms['myForm']["fphone"].value;
  if(phone.length!=10){
    seterror("phone","Phone number should be 10 digits long");
    returnval = false;
  }

  

  return returnval;


}