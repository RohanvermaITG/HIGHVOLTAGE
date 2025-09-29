let dob = document.getElementById("dob");
let hobbies = document.getElementsByClassName("hobbies")[0];
let termscondition = document.getElementById("termscondition");
let usergender;
let hobbiesArray = [];
let arrayofterms = [];
let formData = {}
let userInfo = document.getElementById("userInfo");

function checkfirstLastName(value) {
    const input = value;
    if (input == "") return false;

    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if ((charCode < 97 || charCode > 122) && (charCode < 65 || charCode > 90)) {
            return false;
        }
    }
    if (input.length < 6) {
        return false;
    }
    console.log("true checkfirstLastName");

    return true;
}

function phonenumber(num) {
    if (num == "") {
        return false;
    }
    if (num.length < 10) {
        return false;
    }
    if (num.length > 10) {
        return false;
    }
    let array = num.split("")
        // console.log(array);

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!array[i] < '9' || !array[i] > '0') {
            console.log("num ")
        }


    }
    console.log("true phonenumber");

    return true;
}

function emailvalidation(value) {
    if (value == "") {
        return false;
    }
    if (!value.includes("@")) {
        return false;
    }
    if (!value.includes(".")) {
        return false;
    }
    if (!value.includes("gmail.com")) {
        return false;
    }
    if (value[0] == "@") {
        return false;
    }
    if (typeof value[0] == "number") {
        return false;
    }
    if (value[value.length - 1] === "@" || value[value.length - 1] === ".") {
        return false;
    }
    const indexOfatsign = value.indexOf("@");
    const indexOfdot = value.indexOf(".");
    if (indexOfatsign > indexOfdot) {
        return false;
    }
    console.log("true emailvalidation");
    return true;
}


function getgender(gen) {
    for (let i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
            // console.log(gen[i].value);
            usergender = gen[i].value;
            console.log("true getgender");

            return true;
        }
    }
    return false;
}

function gethoobies(checkboxes) {
    console.log(checkboxes);
    checkboxes.forEach((element) => {
        // console.log("check boxes");
        if (!element.checked) {
            hobbiesArray.push(element.value);
            // console.log(element.value);
            console.log("true gethoobies");

            return false;
        }
    });
    return true;
}

function textareavalidation(value) {
    if (value == "") {
        return false;
    }
    let userMessagearr = value.split(" ");
    if (userMessagearr.length < 15) {
        return false
    }
    console.log("true textareavalidation");

    return true;
}



function getterms(checkboxes) {
    // console.log(checkboxes);
    checkboxes.forEach((element) => {
        if (!element.checked) {
            arrayofterms.push(element.value);
            // console.log(element.value);
            console.log("true getterms");
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
    let termsconditionbox = termscondition.querySelectorAll("input[type='checkbox']");

    if (checkfirstLastName(FirstName) &&
        checkfirstLastName(LastName) &&
        emailvalidation(email) &&
        phonenumber(phone) &&
        getgender(gen) &&
        gethoobies(checkboxes) &&
        textareavalidation(userMessage) &&
        getterms(termsconditionbox)) {


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
        localStorage.setItem(email, stringfyuserData)
    }

});
console.log(formData, "oput od ");