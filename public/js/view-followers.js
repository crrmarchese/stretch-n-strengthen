$(document).ready(function() {

    $("#browseFollowers").on('click', async (event) => {
        event.stopPropagation()
        const userID = $('#profile').data('userid')
        console.log(userID)
            window.location.assign(`/followers/${userID}`)
    })

})