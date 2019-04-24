var myUrl ='api/services/';
var searchString="";
var urlParms = new URLSearchParams(location.search);
if(urlParms.get('id') != null)
    searchString=urlParms.get('id');
console.log("Adding the serice");

$(document).ready(function(){
    if (searchString!= ""){
    $.ajax({
        method: 'GET',
        url: myUrl+searchString,
        success:function(services){

            $.each(services,function(i,service){

            document.getElementById("servicename").value = service.servicename;
            document.getElementById("servicedescription").value = service.description;
        });

        },
        error:function(){
            alert("Error loadingv ideos" )
        }
    });
    }
    $("#editaddservice").click(function(){
        var nameValue1 = document.getElementById("servicename").value;
        var nameValue2 = document.getElementById("servicedescription").value;
        $.ajax({
            method: 'POST',
            url: myUrl+searchString, 
            data:{
                "servicename":nameValue1,
                "description":nameValue2
            },
            success: function(){
                window.location = "http://localhost:3000/services";
            },
             error:function(){
                alert("Error Caceling order out" )
            }
      });
    });
});