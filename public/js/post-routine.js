const { Exercise, Equipment, Routine } = require('../../models');

$(document).ready(function() {
    $("#newRoutine").on('click', () => {
        // event.preventDefault;
        const data = {
                        "user_id": $('#profile').data(userID),
                        "name": "test",
                        "description": "testDescription"
                    };
        $.post("/api/routine", data).then((response) => { console.log( response ) })
    });
})