$(document).ready(function () {

    $(".addExerciseButton").on('click', (event) => {
        event.stopPropagation();
        const exId = $(event.currentTarget).data('exid');
        const routineId = $('#routineData').data('routineid');
        // const codeBlock = $(`.addExercise [data-exid=${exId}]`);
        const data = { routine_id: routineId, exercise_id: exId };
        $.post(`/api/routine/${routineId}&${exId}`, data).then((response) => {
            window.location.reload();
        })
    });

    $(".removeExerciseButton").on('click', (event) => {
        event.stopPropagation();
        const exId = $(event.currentTarget).data('exid');
        const routineId = $('#routineData').data('routineid');
        console.log(exId)
        console.log(routineId)
        // const codeBlock = $(`.removeExercise [data-exid=${exId}]`);
        $.ajax({
            url: `/api/routine/${routineId}&${exId}`,
            type: 'DELETE',
            success: ((result) => {
                window.location.reload();
            })
        });
    });

})