let dob = document.getElementById("dob");
let hobbies = document.getElementsByClassName("hobbies")[0];
let navigation = document.getElementsByClassName("navigation-list")[0];
let userCartsSearch = document.getElementsByClassName("user-carts-search")[0];
let headerInner = document.getElementsByClassName("header-inner")[0];
let hamnavigation = document.getElementsByClassName("navigation")[0];

let termscondition = document.getElementById("termscondition");
let hamBurger = document.getElementById("ham-burger");
let usergender;
let hobbiesArray = [];
let arrayofterms = [];
let formData = {};
let userInfo = document.getElementById("userInfo");

function togalburger() {
    hamnavigation.innerHTML = "";
    hamnavigation.innerHTML = `${navigation.innerHTML} ${userCartsSearch.innerHTML}`;
    hamnavigation.classList.remove("deactive")


    if (hamnavigation.style.display == "none") {
        hamnavigation.style.display = "flex";
    } else if (hamnavigation.style.display == "flex") {
        hamnavigation.style.display = "none";

        // hamnavigation.classList.add("deactive")
    }
}

function checkfirstLastName(value) {
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
    console.log("true checkfirstLastName");
    FirstNameError.innerText = ""

    return true;
}

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
    console.log("true checkfirstLastName");
    LastNameError.innerText = ""

    return true;
}


function phonenumber(num) {
    let phoneError = document.getElementById("phoneError")
    if (num == "") {
        phoneError.innerText = "Please Enter Your Number"
        return false;
    }
    if (num.length < 10) {
        phoneError.innerText = "Please Enter Valid Number"

        return false;
    }
    if (num.length > 10) {
        phoneError.innerText = "Please Enter Valid Number"

        return false;
    }
    let array = num.split("");
    // console.log(array);

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!array[i] < "9" || !array[i] > "0") {
            console.log("num ");
            phoneError.innerText = "Please Enter Valid Number"

            return false
        }
    }
    console.log("true phonenumber");
    phoneError.innerText = ""

    return true;
}

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
    console.log("true emailvalidation");
    EmailError.innerText = ""

    return true;
}

function getgender(gen) {
    let genderError = document.getElementById("genderError")
    for (let i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
            // console.log(gen[i].value);
            usergender = gen[i].value;
            console.log("true getgender");

            return true;
        }
    }
    genderError.innerText = "Please Select any Gender"
    return false;
}

function gethoobies(checkboxes) {
    let hobbiesError = document.getElementById("hobbiesError")
    console.log(checkboxes);
    checkboxes.forEach((element) => {
        // console.log("check boxes");
        if (!element.checked) {
            hobbiesArray.push(element.value);
            // console.log(element.value);
            console.log("true gethoobies");
            hobbiesError.innerText = "please Select Your Hobbies"
            return false;
        }
    });
    return true;
}

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
    console.log("true textareavalidation");

    return true;
}

function getterms(checkboxes) {
    let termsError = document.getElementById("termsError")
        // console.log(checkboxes);
    checkboxes.forEach((element) => {
        if (!element.checked) {
            arrayofterms.push(element.value);
            // console.log(element.value);
            console.log("true getterms");
            termsError.innerText = "Please Select Any Box"
            return false;
        }
    });
    return true;
}

userInfo.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let LastName = document.getElementById("LastName").value; // done
    let FirstName = document.getElementById("FirstName").value; // done
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gen = document.getElementsByName("gender");
    let userMessage = document.getElementById("userMessage").value;
    let checkboxes = hobbies.querySelectorAll("input[type='checkbox']");
    let termsconditionbox = termscondition.querySelectorAll(
        "input[type='checkbox']"
    );



    if (
        checkfirstLastName(FirstName) &&
        checkLastName(LastName) &&
        emailvalidation(email) &&
        phonenumber(phone) &&
        getgender(gen) &&
        gethoobies(checkboxes) &&
        textareavalidation(userMessage) &&
        getterms(termsconditionbox)
    ) {
        formData["First Name"] = FirstName;
        formData["Last Name"] = LastName;
        formData["Email"] = email;
        formData["Phone"] = phone;
        formData["Gender"] = "gemder";
        formData["Hobbies"] = hobbiesArray;
        formData["Text"] = userMessage;
        formData["terms_conditon"] = arrayofterms;
        console.log(formData);
        let stringfyuserData = JSON.stringify(formData);
        localStorage.setItem(email, stringfyuserData);
    }
});
console.log(formData, "oput od ");