//user class
class User {
    constructor(user) {
        this.name = user.name
        this.id = user.id
        this.email = user.email
        User.currentUser = this
    }

    static currentUser = ''

    //fetch for getting user
    static createUser() {
        const newUser = username().value 
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name: newUser})
        })
        .then(resp => resp.json())
        .then(r => {
            new User(r)
        })
        .catch((error) => {
            console.log(error)
        })
        //
        console.log("Login worked")
    }

}