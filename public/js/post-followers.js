$(document).ready(function() {

        $(".addUser").on('click', (event) => {
        const leadId = $(event.currentTarget).data('userid');
        const userId = $('#profile').data('userid');
        const data = {follow_id: userId, lead_id: leadId};
        $.post(`/api/followers/${userId}&${leadId}`, data).then((response) => {
            window.location.reload();
         })
    });

        $(".removeUser").on('click', (event) => {
        const followId = $(event.currentTarget).data('userid');
        const userId = $('#profile').data('userid');
        $.ajax({
            url: `/api/followers/${userId}&${followId}`,
            type: 'DELETE',
            success: ((result) => { 
                window.location.reload();
            })
        });
    });
})