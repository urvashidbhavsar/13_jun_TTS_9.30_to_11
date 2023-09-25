// click event validation 
function formValid() {
    let fn = document.getElementById("fname");
    if (fn.value == "" || fn.value == null) {
        document.getElementById("msg1").innerHTML = "Enter Firstname";
        fn.focus();
        return false;
    }
    let ln = document.getElementById("lname");
    if (ln.value == "" || ln.value == null) {
        document.getElementById("msg2").innerHTML = "Enter Lastname";
        ln.focus();
        return false;
    }
    let m = document.getElementById("male").checked;
    let f = document.getElementById("female").checked;
    if (m == false && f == false) {
        document.getElementById("msg3").innerHTML = "Select Gender"
        return false
    }
    let addr = document.getElementById("addr").value;
    if (addr == "" || addr == null) {
        document.getElementById("msg4").innerHTML = "Enter Address"
        return false
    }
    let city = document.getElementById("citylist").value;
    if (city == "-1") {
        document.getElementById("msg5").innerHTML = "Select City"
        return false
    }
}

// blur event validation
// create a parameterized / argument function 
function blankCheck(blank, msg) {
    if (blank.value == "" || blank.value == null) {
        document.getElementById(msg).innerHTML = "Please, Enter value!!!"
        return false;
    }
}
function checkButtons(checkval, msg) {
    if (checkval.checked == false) {
        document.getElementById(msg).innerHTML = "Please, Select Value !!!"
        return false
    }
}
function dropdown(selectval, msg) {
    if (selectval.value == "-1") {
        document.getElementById(msg).innerHTML = "Please, Select Value !!!"
        return false
    }
}


// keyboard event validation
// name validation
function checkName(exp, msg) {
    let nameEx = /^[a-zA-Z]*$/;
    if (!(nameEx.test(exp.value))) {
        document.getElementById(msg).innerHTML = "Invalid Name!! enter proper"
        return false;
    } else {
        document.getElementById(msg).innerHTML = ""
        return false;
    }
}
// for address 
function checkAdd(addlength, msg) {
    if (addlength.value.length < 35) {
        document.getElementById(msg).innerHTML = "Address must be more than 35 characters"
        return false
    } else {
        document.getElementById(msg).innerHTML = ""
        return false
    }
}