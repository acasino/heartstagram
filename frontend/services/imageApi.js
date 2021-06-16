class imageApi {

    static url = `${baseUrl}/images`

    //fetch image posts


    //handle errors


    //handle submit
    static handleSubmit(e) {
        e.preventDefault()
        const data = {
            caption: caption().value
        }
        fetch(imageApi.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json => {
            let image = new Image(json)
            imageForm().reset()
            image.render()
        })
    }



    //handle update


    //handle delete

}