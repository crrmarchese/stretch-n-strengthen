$(document).ready(function() {

    $("#newRoutine").on('click', async (event) => {
        event.preventDefault;
        const data = {
                        user_id: $('#profile').data("userid"),
                    };
        $.post("/api/routine", data).then((response) => { 
            window.location.assign(`/routine/${response.id}`)
         })

    });

})