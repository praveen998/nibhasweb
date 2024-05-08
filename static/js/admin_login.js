$(document).ready(function(){
    $('#loginForm').submit(function(event){
        event.preventDefault();
        var formData = new FormData(); // Corrected initialization
        formData.append('username', $('#username').val());
        formData.append('password', $('#password').val());
        $.ajax({
            type: "POST",
            url: "https://8fbb-103-203-73-21.ngrok-free.app/admin_auth/",
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                var jsonResponse = JSON.stringify(response);
                var responseObject = JSON.parse(jsonResponse);
                var successValue = responseObject.name;
                document.cookie = "name=" + encodeURIComponent(successValue);
                alert(successValue);
                window.location.href = "https://praveen998.github.io/nibhasweb/adminpanel.html";
            },

            error: function(xhr, status, error) {
                alert('failed to login')
                console.error(xhr.responseText);
            },
        });
    });
});