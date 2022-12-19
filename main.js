const SignupButton = document.getElementsByClassName('signup-button')[0]
const SigninButton = document.getElementsByClassName('signin-button')[0]
const formLogin = document.getElementsByClassName('form-login')[0]
const formRegister = document.getElementsByClassName('form-login')[1]
const formTitle = ["Login", "Register"]

SignupButton.addEventListener('click', () => {
    formLogin.classList.add('disable')
    formRegister.classList.remove('disable')
    document.getElementById("form-title").innerHTML = formTitle[1]
})
    
    SigninButton.addEventListener('click', () => {
        formLogin.classList.remove('disable')
        formRegister.classList.add('disable')
        document.getElementById("form-title").innerHTML = formTitle[0]
})