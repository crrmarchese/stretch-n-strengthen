$(document).ready(function() {

    $("#newRoutine").on('click', async (event) => {
        event.preventDefault;
        const data = {
                        user_id: $('#profile').data("userid"),
                        name: "test",
                        description: "testDescription"
                    };
        $.post("/api/routine", data).then((response) => { 
            window.location.assign(`/routine/${response.id}`)
         })

    });

})