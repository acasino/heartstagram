//index.js

document.addEventListener('DOMContentLoaded', () => {
    createLoginForm()
    createSignupForm()
    // createImageFormListener()
    imageForm().addEventListener("submit", imageApi.handleSubmit)
})

let allImages = {}

//create login form
function createLoginForm() {
    let loginForm = document.createElement('section')
    loginForm.id = 'login-form'
    loginForm.classList.add("container")
    loginForm.innerHTML = `<h1>TESTING HEARSTAGRAM LOGIN</h1>`
    document.body.prepend(loginForm)

    let form = document.createElement('form')
    form.id = "login-form"
    form.innerHTML = `
        <label>E-mail: </label><br>
        <input type="text" name="email"><br>
        <label>Password: </label><br>
        <input type="password" name="password"><br>
        <input type="submit" name="login" value="Login"><br>
        <br>
        <a>No account?</a><br><a>Forgot password?</a>

    `
    loginForm.append(form)
    let btn = document.querySelector('input[name="login"]')
    btn.style.marginTop = '3%'
}

//create sign up form
function createSignupForm() {
    let signupForm = document.createElement('section')
    signupForm.id = 'signup-form'
    signupForm.classList.add("container")
    signupForm.innerHTML = `<h1>TESTING HEARSTAGRAM SIGNUP</h1>`
    document.body.prepend(signupForm)

    let form = document.createElement('form')
    form.id = "signup-form"
    form.innerHTML = `
        <label>E-mail: </label><br>
        <input type="text" name="email"><br>
        <label>Name: </label><br>
        <input type="text" name="username"><br>
        <label>Password: </label><br>
        <input type="password" name="password"><br>
        <input type="submit" name="signup" value="Sign up"><br>
    `
    signupForm.append(form)
    let btn = document.querySelector('input[name="signup"]')
    btn.style.marginTop = '3%'
}


//signin function for existing user
function handleSignIn() {

}

//handle sign up for new user
function handleSignUp() {
    let form = document.getElementById('signup-form')
    let btn = document.querySelector('input[name="signup"]')
    form.addEventListener('submit', user.createuser)

}


//Create a new image post
// function createImageFormListener() {
//     imagePost.addEventListener('click', (e) => {
//         e.preventDefault(); //might not need this if not submitting a form
//         //add function for create new image form
//     })
// }