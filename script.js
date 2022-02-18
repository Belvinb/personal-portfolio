function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    var spaces=  /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    else if(x.match(spaces)){
        alert("Invalid");
        return false;

    }else{
        return true;
    }
  } 