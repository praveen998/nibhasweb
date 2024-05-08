
$(document).ready(function(){
    // Open modal when button is clicked
    $("#open-modal").click(function(){
        $("#popup-form").modal();
    });
 
    // Handle form submission
    $("#my-form").submit(function(e){
        e.preventDefault(); // Prevent default form submission
        var formData = new FormData();
        formData.append('question_name', $('#question_name').val());
        formData.append('question', $('#question').val());
        formData.append('age', $('#age').val());
        formData.append('question_image', $('#question_image')[0].files[0]);
        formData.append('a', $('#a')[0].files[0]);
        formData.append('b', $('#b')[0].files[0]);
        formData.append('c', $('#c')[0].files[0]);
        formData.append('d', $('#d')[0].files[0]);
        formData.append('answer', $('#answer').val());

        // Perform AJAX request to submit form data
        $.ajax({
            type: "POST",
            url: "https://8fbb-103-203-73-21.ngrok-free.app/add_pattern/", // Replace with the actual URL to submit form data
            data: formData,
            processData: false, // Prevent jQuery from automatically processing the data
            contentType: false, 
            success: function(response){
                // Close the modal
                $("#popup-form").modal('close');
                
                // Show success alert
                alert("Success");

                // Redirect to previous page
                window.location.href = document.referrer;
            },
            error: function(xhr, status, error){
                // Handle errors if any
                console.error(xhr.responseText);
            }
        });
    });
});

    // Open modal when button is clicked
    $("#open-modal1").click(function(){
        $("#popup-form1").modal();
    });
 
    // Handle form submission
    $("#my-form1").submit(function(e){
        e.preventDefault(); // Prevent default form submission
        var formData = new FormData();
        formData.append('n_question_name', $('#n_question_name').val());
        formData.append('n_question', $('#n_question').val());
        formData.append('n_age', $('#n_age').val());
        formData.append('n_a', $('#n_a').val());
        formData.append('n_b', $('#n_b').val());
        formData.append('n_c', $('#n_c').val());
        formData.append('n_d', $('#n_d').val());
        formData.append('n_answer', $('#n_answer').val());
   
        // Perform AJAX request to submit form data
        $.ajax({
            type: "POST",
            url: "https://8fbb-103-203-73-21.ngrok-free.app/add_normal/", // Replace with the actual URL to submit form data
            data: formData,
            processData: false, // Prevent jQuery from automatically processing the data
            contentType: false, 
          
            success: function(response){
                // Close the modal
                $("#popup-form1").modal('close');
                
                // Show success alert
                alert("Success");

                // Redirect to previous page
                window.location.href = document.referrer;
            },
            error: function(xhr, status, error){
                // Handle errors if any
                console.error(xhr.responseText);
            }
        });
        $("#logout").click(function(){

        $.ajax({
            type:GET,
            url:"https://8fbb-103-203-73-21.ngrok-free.app/logout/",
            dataType: "json",
            success: function(response) {
            // Handle successful response
            window.location.href="https://praveen998.github.io/nibhasweb/admin_login.html"
        
        },
        });

      })
    });

