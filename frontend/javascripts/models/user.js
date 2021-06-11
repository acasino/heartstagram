//user class
class User {
    constructor(user) {
        this.name = user.name
        this.id = user.id
        this.email = user.email
        User.currentUser = this
    }

    static currentUser = ''

    //fetch for getting username

}