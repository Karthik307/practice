/*Homepage validation*/
function validate() {
    var mailid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.forms["details"]["email"].value.match(mailid) && document.forms["details"]["passw"].value != "") {
        location.href = '../home.html';
        return false;
    }
    else {
        alert('Invalid Try again!');
        location.href = '../login.html';
        return false;
    }
}
/*Login page validation*/
function validatelogin() {
    var mailid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.forms["details"]["email"].value.match(mailid) && document.forms["details"]["passw"].value != "") {
        location.href = '../home.html';
        return false;
    }
    else {
        if (document.forms["details"]["email"].value == "") {
            document.getElementById("emailerror").innerHTML = "The email or mobile number you entered isn't connected to an account. Find your account and log in.";
            return false;
        }
        if (document.forms["details"]["passw"].value == "") {
            document.getElementById("passerror").innerHTML = "Password can't be empty.";
            return false;
        }
        location.href = '../login.html';
        return false;
    }
}
