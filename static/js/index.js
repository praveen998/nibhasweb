 
$(document).ready(function()
{
//first function------------------------------------------------------         
    $("#textField").on("input",function(){
        var inputvalue= $(this).val();
        $.ajax({
            type:"POST",
            url:"https://1a84-103-203-73-129.ngrok-free.app/checktext/",
            data:{
                q: inputvalue    
            },
            success: function(response){
                var jsonResponse = JSON.stringify(response);
                var responseObject = JSON.parse(jsonResponse);
                $("#response1").text("response:"+responseObject.success);
            },
   
        });
    });
    
//function end -------------------------------------------------------------------
    $("#loginid").click(function(){
        window.location.href = "admin_login.html";
    });
//second function--------------------------------------------------------------
    $("#question").click(function(){
        $.ajax({
            type:"GET",
            url:"https://1a84-103-203-73-129.ngrok-free.app/question",
            success:function(response){
                var jsonResponse = JSON.stringify(response);
                var responseObject = JSON.parse(jsonResponse);
                $("#response").text("question:"+responseObject.data[0]);
            },

            error:function(xhr,status,error){
                $("#response").text("Error:");
            }
        });
    });
//function end-------------------------------------------------------------------
});
