//image class
class Image {
    static all = []

    constructor(image, caption) {
        debugger
        this.image = image
        this.caption = caption
        Image.all.push(this)
    }

    static getAll() {
        return this.all
    }

    //render
    render() {
        const li = document.createElement("li")
        li.innerHTML = `
        <span class="caption">${this.caption}</span>
        `
        document.appendChild(li)
    }

}

// t.text "image"
// t.bigint "user_id", null: false
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.string "caption"