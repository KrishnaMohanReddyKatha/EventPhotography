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
        // $("#editaddservice").click(function(){ 
        //     var eventsList = [];
        //     var datesList = [];  
        //     console.log("sfsfsd");
        //     var eventsList = document.getElementById("sevents").value;
        //     var datesList = document.getElementById("reservedates").value;
        //     var file = $('input[type="file"]')[0].files[0]; 
        //     // console.log(image.name);
        //     var path = "images/234.jpg";
        //      file.mv(path,function(err){
        //          return console.log(err); 
        //      });
        //     console.log("sfsfsd");
        //      $.ajax({
        //         method: 'POST',
        //         url: myUrl+searchString, 
        //         data:{
        //             "fname":document.getElementById("fname").value ,
        //             "lname":document.getElementById("lname").value,
        //             "id": document.getElementById("pid").value ,
        //             "email":document.getElementById("email").value,
        //             "reservedDates":datesList,
        //             "specializedEvents":eventsList,
        //             "userrating": document.getElementById("userrating").value,
        //            // "pic" :  file
        //         },
        //         success: function(){
        //             window.location = "http://localhost:3000/services";
        //         },
        //          error:function(){
        //             alert("Error Caceling order out" )
        //         }
        //   });
        // });
    });