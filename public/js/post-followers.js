$(document).ready(function () {

    $(".addUserButton").on('click', (event) => {
        event.stopPropagation();
        const leadId = $(event.currentTarget).data('userid');
        const userId = $('#profile').data('userid');
        console.log(leadId)
        console.log(userId)
        const data = { follow_id: userId, lead_id: leadId };
        $.post(`/api/followers/${userId}&${leadId}`, data).then((response) => {
            window.location.reload();
        })
    });

    $(".removeUserButton").on('click', (event) => {
        event.stopPropagation();
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
});