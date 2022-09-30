
//sample login data
let loginData = {
    emailId: "user1@gmail.com",
    password: "thisispassword"
};

//get json object values in form of array
let data = Object.values(loginData)

//onclick login button
function loginFunction() {
    //regex format to check if the entered email id is valid 
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    //get value from mail input
    var mail = document.getElementById("emailAddress").value;
    //get value from password input 
    var pass = document.getElementById("userPassword").value;

    //assigning mail and password from data array 
    var dataEmail = data[0]
    var dataPass = data[1]

    //condition to check valid mail address
    if (mail.match(mailformat)) {

        //if mail is valid check if mail exists in database
        if (mail.match(dataEmail)) {
            //check pass if mail exists 
            if (pass.match(dataPass)) {

                //get dashboard if valid login details
                return window.location.href = "index.html";
            }
            //for wrong password
            else {
                alert("Wrong Password")
            }
        }
        //if mail is not in database  
        else {
            alert("Email address is not registered!")
        }
    }
    else {
        alert("You have entered an invalid email address!");
        return false;
    }
}
Footer
