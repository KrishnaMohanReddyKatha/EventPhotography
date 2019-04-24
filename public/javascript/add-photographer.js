var myUrl ='api/photographers/';
var searchString="";
var urlParms = new URLSearchParams(location.search);
if(urlParms.get('id') != null)
    searchString=urlParms.get('id');

    $(document).ready(function(){
        if (searchString!= ""){
        $.ajax({
            method: 'GET',
            url: myUrl+searchString,
            success:function(photographers){
    
                $.each(photographers,function(i,photographer){
    
                document.getElementById("fname").value = photographer.fname;
                document.getElementById("lname").value = photographer.lname;
                document.getElementById("pid").value = photographer.id;
                document.getElementById("email").value = photographer.email;
                var myString = "";
                
                document.getElementById("reservedates").value = photographer.reservedDates;
                document.getElementById("sevents").value = photographer.specializedEvents;
                document.getElementById("userrating").value = photographer.userrating;
            });
    
            },
            error:function(){
                alert("Error loading photograhers" )
            }
        });
        }
        $("#editaddservice").click(function(){   
            var eventsList = document.getElementById("sevents").value.split(",") ;
            var datesList = document.getElementById("reservedates").value.split(","); 
             $.ajax({
                method: 'POST',
                url: myUrl+searchString, 
                data:{
                    "fname":document.getElementById("fname").value ,
                    "lname":document.getElementById("lname").value,
                    "id": document.getElementById("pid").value ,
                    "email":document.getElementById("email").value,
                    "reservedDates":datesList,
                    "specializedEvents":eventsList,
                    "userrating": document.getElementById("userrating").value 
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