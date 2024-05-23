const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confPassword = document.querySelector("#conf-password");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateInputs();
});

const setError = (element,message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");

}

const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const isValidEmail = (emailValue) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(emailValue).toLowerCase());
}

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = confPassword.value.trim();

    if(usernameValue === ""){
        setError(username,"Username is required");
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ""){
        setError(email,"Email is required");
    } else if(!isValidEmail(emailValue)){
        setError(email,"Provide a valid email address");
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ""){
        setError(password,"Password is required");
    } else if(passwordValue.length < 8){
        setError(password,"Password must be atleast 8 characters.");
    }
    else {
        setSuccess(password);
    }

    if(password2Value === ""){
        setError(confPassword,"Please confirm your password");
    } else if(password2Value !== passwordValue){
        setError(confPassword,"Passwords must be same");
    }
    else{
        setSuccess(confPassword);
    }
}
