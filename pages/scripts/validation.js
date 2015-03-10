$(document).ready(function() {
    $('#requestForm').validate({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            phone: {
                required: true,
                phoneUS: true
            },
            email: {
                required: true,
                phoneUS: true
            },
            date: {
                required: true
            },
            time: {
                required: true
            },
            specialty: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: " First name is required."
            },
            lastName: {
                required: " Last name is required."
            },
            phone: {
                required: " Phone number is required.",
                phoneUS: " Phone number is invalid."
            },
            email: {
                required: " Email is required.",
                email: " Email is invalid."
            },
            specialty: {
                required: " Specialty is required."
            },
            date: {
                required: " Date is required."
            },
            time: {
                required: " Time is required."
            }
        },
        focusCleanup: true
    });
});