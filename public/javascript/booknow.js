$(document).ready(function(){
    var isadmin,user,fname=""
    if (document.cookie != ""){
        var mycookies = document.cookie.split(";");
        isadmin = mycookies[0].split("=")[1];
        user = mycookies[1].split("=")[1];
        fname= mycookies[2].split("=")[1];
    }
    if (document.cookie  == "")
        window.location = "http://localhost:3000/login";

        var list = document.getElementById("eventType");
        var data = []; 
        data.push("Wedding Event"); data.push("Corporate Party Event"); 
        data.push("BirthDay Event"); data.push("Baby Shower Event"); 
        for (var i = 0; i < data.length; i++){                  
            var li = document.createElement("li");
            var link = document.createElement("a");             
            var text = document.createTextNode(data[i]);
            link.appendChild(text);
            link.href = "#";
            li.appendChild(link);
            list.appendChild(li);
          }

        $('.dropdown-menu a').on('click', function(){    
        $('.dropdown-toggle').html($(this).html());    
    	});
    	 $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4',
            minDate: new Date()
        });
	$("#getPhotographers").click(function(){
		/*console.log("in click event handler");
		alert($("#eventType").innerHTML);*/
		var eventType = $(".dropdown-toggle").html();
		var date = $('#datepicker').val();
		/*if(eventType == "Select Event Type") {
			
		}*/
		console.log(eventType);
		console.log(date);
		$.ajax({
        method: 'GET',
        data:{"eventType" : eventType, "date":date},
        url: '/getAvailablePhotographers',
        success:function(photographers){
            console.log(photographers);
            $('#photographerList').empty();	
            $.each(photographers,function(i,photographer){
            	if(photographer != null) {
	                $('#photographerList').append('<div class="col-sm-8" style="padding-bottom:10px"><img src="images/photographers/'+(photographer.id)+'.jpg" alt="'+photographer.id+'" style="width:200px;height:200px"> <span>'+photographer.fname+" "+photographer.lname+" Rating:"+photographer.userRating+'<a href="/reserve?photographerId='+photographer.id+'&date='+date+'"><button>Reserve</button></a></span></div>');
        		}    
        	});
        },
        error:function(){
            alert("Error loading photographers" )
        }
    });

	});
});