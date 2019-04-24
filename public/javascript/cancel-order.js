var myUrl ='api/orders/';
var searchString="";
var urlParms = new URLSearchParams(location.search);
if(urlParms.get('id') != null)
    searchString=urlParms.get('id');
$(document).ready(function(){
    $("#yes").click(function(){
        $.ajax({
            method: 'POST',
            url: myUrl+searchString, 
            success: function(){
                window.location = "http://localhost:3000/order";
            },
             error:function(){
                alert("Error Caceling order out" )
            }
      });
    });

    $("#no").click(function(){
        window.location = "http://localhost:3000/order";
    });


});