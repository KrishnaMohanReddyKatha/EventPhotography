$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: 'api/services',
        success:function(services){
            $.each(services,function(i,service){
                var myString="";
                myString = myString+'<div class="col-sm-4">'+service.servicename;
                myString= myString+'<p><a href="/editService?id='+service._id +'"> Edit </a></p>';
                myString= myString+'<p><a href="/deleteService?id='+service._id +'"> Delete </a></p></div>';
                $('#adminservicerow').append(myString);
                });
        },
        error:function(){
            alert("Error loadingv ideos" )
        }
    });

    $.ajax({
        method: 'GET',
        url: 'api/photographers',
        success:function(services){
            $.each(services,function(i,service){
                var myString="";
                myString = myString+'<div class="col-sm-4">'+service.fname;
                myString= myString+'<p><a href="/editPhotographer?id='+service._id +'"> Edit </a></p>';
                myString= myString+'<p><a href="/editPhotographer?id='+service._id +'"> Delete </a></p></div>';
                $('#adminphotographerrow').append(myString);
                });
        },
        error:function(){
            alert("Error loadingv ideos" )
        }
    });
});
