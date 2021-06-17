class imageApi {

    static url = `${baseUrl}/images`

    //fetch image posts


    //handle errors


    //handle submit
    // static handleSubmit(e) {
    //     e.preventDefault()
    //     const data = {
    //         caption: caption().value
    //     }
    //     fetch(imageApi.url, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         let image = new Image(data.caption)
    //         imageForm().reset()
    //         image.render()
    //     })
    //     debugger
    // }

    //handle submit v2
        static handleSubmit(e) {
        e.preventDefault()
        let data = new FormData()
        Object.keys(formObj).forEach((key, value) => { data.append(key, formObj[key])
        })
        debugger
    }
        
    
        // Object.keys(formObj).forEach((key, value) => {
        //     data.append(key, formObj[key])
        //     }
        




    //handle update


    //handle delete

}