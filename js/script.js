let dob = document.getElementById("dob");
let hobbies = document.getElementsByClassName("hobbies")[0];

let navigation = document.getElementsByClassName("navigation-list")[0];
let userCartsSearch = document.getElementsByClassName("user-carts-search")[0];
let headerInner = document.getElementsByClassName("header-inner")[0];
let hamnavigation = document.getElementsByClassName("navigation")[0];

let termscondition = document.getElementById("termscondition");
let hamBurger = document.getElementById("ham-burger");
// user Gender
let usergender;
// user hobbies
let hobbiesArray = [];
// term of user
let arrayofterms = [];

let userInfo = document.getElementById("userInfo");
// togal hanburger
function togalburger() {
    hamnavigation.innerHTML = `${navigation.innerHTML} ${userCartsSearch.innerHTML}`;

    if (hamnavigation.style.display === "none" || hamnavigation.style.display === "") {
        hamnavigation.style.display = "flex";
    } else {
        hamnavigation.style.display = "none";
    }
}

// first name vadidation
function checkFirstName(value) {
    const input = value;
    let FirstNameError = document.getElementById("FirstNameError")

    if (input == "") {
        FirstNameError.innerText = "please Enter valid Name"
        return false;
    }
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if ((charCode < 97 || charCode > 122) && (charCode < 65 || charCode > 90)) {
            FirstNameError.innerText = "please Enter valid Name"

            return false;
        }
    }
    if (input.length < 6) {
        FirstNameError.innerText = "Name is to short please Enter a valid name"

        return false;
    }
    FirstNameError.innerText = ""

    return true;
}
// last name vadidation

function checkLastName(value) {
    const input = value;
    let LastNameError = document.getElementById("LastNameError")

    if (input == "") {
        LastNameError.innerText = "please Enter valid Last Name"
        return false;
    }
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if ((charCode < 97 || charCode > 122) && (charCode < 65 || charCode > 90)) {
            LastNameError.innerText = "please Enter valid Last Name"

            return false;
        }
    }
    if (input.length < 6) {
        LastNameError.innerText = "Name is to short please Enter a valid Last Name"

        return false;
    }
    LastNameError.innerText = ""

    return true;
}


// Mobile number vadidation

function phonenumber(num) {
    let phoneError = document.getElementById("phoneError");

    if (num == "") {
        phoneError.innerText = "please Enter Your Number"
        return false
    }
    if (num.length < 10) {
        phoneError.innerText = "please Enter Your Number"
    }
    if (num.length !== 10 || isNaN(num)) {
        phoneError.innerText = "Please Enter a Valid 10-digit Number";
        return false;
    }
    phoneError.innerText = "";
    return true;
}
// user Hobbies vadidation

function getHobbies(checkboxes) {
    let hobbiesError = document.getElementById("hobbiesError");
    hobbiesArray = [];
    checkboxes.forEach((element) => {
        if (element.checked) {
            hobbiesArray.push(element.value);
        }
    });
    if (hobbiesArray.length === 0) {
        hobbiesError.innerText = "Please Select Your Hobbies";
        return false;
    }
    hobbiesError.innerText = "";
    return true;
}
// terms vadidation
function getTerms(checkboxes) {
    let termsError = document.getElementById("termsError");
    arrayofterms = [];
    checkboxes.forEach((element) => {
        if (element.checked) {
            arrayofterms.push(element.value);
        }
    });
    if (arrayofterms.length === 0) {
        termsError.innerText = "Please Accept Terms & Conditions";
        return false;
    }
    termsError.innerText = "";
    return true;
}
// Email vadidation

function emailvalidation(value) {
    let EmailError = document.getElementById("EmailError")
    if (value == "") {
        EmailError.innerText = "Please Enter Your Email Address"
        return false;
    }
    if (!value.includes("@")) {
        EmailError.innerText = "Please Enter An Invalid Email Address"

        return false;
    }
    if (!value.includes(".")) {
        EmailError.innerText = "Please Enter An Invalid Email Address"

        return false;
    }
    if (!value.includes("gmail.com")) {
        EmailError.innerText = "Please Enter An Invalid Email Address"

        return false;
    }
    if (value[0] == "@") {
        EmailError.innerText = "Please Enter An Invalid Email Address"

        return false;
    }
    if (typeof value[0] == "number") {
        EmailError.innerText = "Please Enter An Invalid Email Address"

        return false;
    }
    if (value[value.length - 1] === "@" || value[value.length - 1] === ".") {
        EmailError.innerText = "Please Enter An Invalid Email Address"

        return false;
    }
    const indexOfatsign = value.indexOf("@");
    const indexOfdot = value.indexOf(".");
    if (indexOfatsign > indexOfdot) {
        EmailError.innerText = "Please Enter An Invalid Email Address"

        return false;
    }
    EmailError.innerText = ""

    return true;
}
// gender vadidation

function getgender(gen) {
    let genderError = document.getElementById("genderError")
    for (let i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
            usergender = gen[i].value;

            return true;
        }
    }
    genderError.innerText = "Please Select any Gender"
    return false;
}
// message by user  vadidation

function textareavalidation(value) {
    let userMessageError = document.getElementById("userMessageError")
    if (value == "") {
        userMessageError.innerText = "Please Enter Your Message"
        return false;
    }
    let userMessagearr = value.split(" ");
    if (userMessagearr.length < 15) {
        userMessageError.innerText = "Message Is To Short"

        return false;
    }

    return true;
}
// date of birth vadidation

function validateDOB(dob) {
    const error = document.getElementById("DobError");

    if (!dob) {
        error.textContent = "Please select your date of birth.";
        return false;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    if (dobDate > today) {
        error.textContent = "DOB cannot be in the future.";
        return false;
    }

    const age = today.getFullYear() - dobDate.getFullYear();
    if (age < 18) {
        error.textContent = "You must be at least 18 years old.";
        return false;
    }

    error.textContent = "";
    return true
}
// form 
userInfo.addEventListener("submit", (ev) => {
    ev.preventDefault();

    let LastName = document.getElementById("LastName").value;
    let FirstName = document.getElementById("FirstName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let gen = document.getElementsByName("gender");
    let userMessage = document.getElementById("userMessage").value;
    let checkboxes = hobbies.querySelectorAll("input[type='checkbox']");
    let termsconditionbox = termscondition.querySelectorAll("input[type='checkbox']");
    // check all the function is true or not
    if (
        checkFirstName(FirstName) &&
        checkLastName(LastName) &&
        emailvalidation(email) &&
        phonenumber(phone) &&
        validateDOB(dob) &&
        getgender(gen) &&
        getHobbies(checkboxes) &&
        textareavalidation(userMessage) &&
        getTerms(termsconditionbox)
    ) {
        // object to store form data
        let formData = {
            "First Name": FirstName,
            "Last Name": LastName,
            "Email": email,
            "Phone": phone,
            "Gender": usergender,
            "Hobbies": hobbiesArray,
            "terms_condition": arrayofterms,
            "Text": userMessage,
        };

        console.log(formData);
        // convert data in stringify
        let stringifiedUserData = JSON.stringify(formData);
        if (!localStorage.getItem(email)) {
            // mstore in local Storage
            localStorage.setItem(email, stringifiedUserData);
            console.log(JSON.parse(localStorage.getItem(email)))
        } else {
            alert("This email is already registered.");
        }
    }
    // localStorage.setItem(email, stringfyuserData);
});