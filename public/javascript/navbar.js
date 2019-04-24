$(document).ready(function(){
 
    var isadmin,user,fname=""
    if (document.cookie != ""){
        var mycookies = document.cookie.split(";");
        isadmin = mycookies[0].split("=")[1];
        user = mycookies[1].split("=")[1];
        fname= mycookies[2].split("=")[1];
    }

    if (document.cookie == ""){
        $('#mynavbar').append('<li class="nav-item"> <a class="nav-link" href="/login">Login</a></li>');
    }
    else{
        $('#mynavbar').append('<li class="nav-item"> <button type="button" class="btn btn-secondary" id="logout">Logout</button></li>');
    }

    if(isadmin=="true"){
        $('#mynavbar').append('<li class="nav-item"> <a class="nav-link" href="/admin">Admin</a></li>');
    }


    $("#logout").click(function(){
        $.ajax({
            method: 'GET',
            url: "api/logout", 
            success: function(){
                window.location = "http://localhost:3000/";
            },
             error:function(){
                alert("Error Logging out" )
            }
      });
    });
});



