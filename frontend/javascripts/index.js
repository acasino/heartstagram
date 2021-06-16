// List of variables
let navbar = document.getElementsByClassName('navbar')
let heartstagram = document.getElementById('heartstagram-logo')
let profile = document.getElementById('profile')
let feed = document.getElementById('feed')
let imageForm = document.getElementById('image-form')
let login = document.getElementById('login')
let likebutton = document.getElementById('likebutton')

document.addEventListener('DOMContentLoaded', () => {
    signUpOrLoginForm()
    createImageFormListener()
    imageForm().addEventListener("submit", imageApi.handleSubmit)
})

let allImages = {}

//signup and login form
function signUpOrLoginForm() {
    let signupLogin = document.createElement('section')
    signupLogin.id = 'signup-login-form'
    signupLogin.classList.add("container")
    signupLogin.innerHTML = `<h1>TESTING HEARSTAGRAM</h1>`
    document.body.prepend(signupLogin)

    let form = document.createElement('form')
    form.id = "login-form"
    form.innerHTML = `
        <label>E-mail: </label><br>
        <input type="text" name="email"><br>
        <label>Password: </label><br>
        <input type="password" name="password"><br>
        <input type="submit" name="login" value="Login"><br>
    `
    signupLogin.append(form)
}


//signin function for existing user
function handleSignIn() {

}

//handle sign up for new user
function handleSignUp() {

}


//Create a new image post
function createImageFormListener() {
    imagePost.addEventListener('click', (e) => {
        e.preventDefault(); //might not need this if not submitting a form
        //add function for create new image form
    })
}