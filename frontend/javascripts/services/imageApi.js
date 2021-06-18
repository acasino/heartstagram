class imageApi {

    static url = `${baseUrl}/images/`


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

        //handle submit v3
         static handleSubmit(e) {
            e.preventDefault()
            let formData = new FormData()

            console.log(image().files) 
            console.log(caption().value)   

            formData.append("image", image().files[0])
            formData.append("caption", caption().value)
            debugger
            //need to figure out where to post to
            fetch(imageApi.url, {
                method: 'POST',
                body: formData
            }).catch(console.error)
        }
        
    
        // Object.keys(formObj).forEach((key, value) => {
        //     data.append(key, formObj[key])
        //     }
        




    //handle update


    //handle delete

}