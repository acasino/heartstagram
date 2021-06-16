//image class
class Image {
    static all = []

    constructor(image, caption) {
        this.image = image
        this.caption = caption
        Image.all.push(this)
    }

    static getAll() {
        return this.all
    }

}

// t.text "image"
// t.bigint "user_id", null: false
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
// t.string "caption"