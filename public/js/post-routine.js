$(document).ready(function() {

    $("#newRoutine").on('click', async (event) => {
        event.preventDefault;
        const data = {
                        user_id: $('#profile').data("userid"),
                        name: "Default Routine Name!",
                        description: "Here the user will eventually be able to add a detailed description of their routine!"
                    };
        $.post("/api/routine", data).then((response) => { 
            window.location.assign(`/routine/${response.id}`)
         })

    });

})