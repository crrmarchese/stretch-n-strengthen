$(document).ready(function () {

    $(".removeRoutineButton").on('click', (event) => {
        event.stopPropagation();
        const routineId = $(event.currentTarget).data('routineid');
        console.log(routineId)
        $.ajax({
            url: `/api/routine/${routineId}`,
            type: 'DELETE',
            success: ((result) => {
                window.location.reload();
            })
        });
    });
});