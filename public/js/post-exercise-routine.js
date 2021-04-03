$(document).ready(function() {

        $("[href*='/exercise/'").on('click', (event) => {
            // event.preventDefault();
            event.stopPropagation();
        });

        $(".addExercise").on('click', (event) => {
            

        const exId = $(event.currentTarget).data('exid');
        const routineId = $('#routineData').data('routineid');
        const data = {routine_id: routineId, exercise_id: exId};
        $.post(`/api/routine/${routineId}&${exId}`, data).then((response) => {
            window.location.reload();
         })
    });

        $(".removeExercise").on('click', (event) => {
        const exId = $(event.currentTarget).data('exid');
        const routineId = $('#routineData').data('routineid');
        $.ajax({
            url: `/api/routine/${routineId}&${exId}`,
            type: 'DELETE',
            success: ((result) => { 
                window.location.reload();
            })
        });
    });

})