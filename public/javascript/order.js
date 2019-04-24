$(function(){

    var isadmin,user,fname=""
    if (document.cookie != ""){
        var mycookies = document.cookie.split(";");
        isadmin = mycookies[0].split("=")[1];
        user = mycookies[1].split("=")[1];
        fname= mycookies[2].split("=")[1];
    }

    if (document.cookie == "")
        window.location = "http://localhost:3000/login";

    var myUrl ='api/orders/';
    if (isadmin != "true")
        myUrl=myUrl+user;

    var myUrl ='api/orders/';
    var mystring = "?";
    var photographer="";
    var myserice=""
    var urlParms = new URLSearchParams(location.search);
    if(urlParms.get('photographer') != null){
        mystring=mystring+"photographer="+urlParms.get('photographer');
    }
    if(urlParms.get('serice') != null)
        mystring=mystring+"serice="+urlParms.get('serice');
    alert(myUrl+mystring);
    $.ajax({
        method: 'GET',
        url: myUrl+mystring,
        success:function(orders){
            $.each(orders,function(i,order){
                var myString ="";
                myString= myString+'<td>'+order._id+'</td>';
                myString= myString+'<td>'+order.service+'</td>';
                myString= myString+'<td>'+order.photographer+'</td>';
                myString= myString+'<td>'+order.date+'</td>';
                myString= myString+'<td>'+order.time+'</td>';
                var dateSplit = (order.date).split("-");
                var date = new Date(parseInt(dateSplit[0]),parseInt(dateSplit[1])-1,parseInt(dateSplit[2]));
                var currentDate = new Date;
                if (date<currentDate && order.status == "active"){
                    myString= myString+'<td>Completed</td>';
                }
                else{
                    myString= myString+'<td>'+order.status+'</td>';
                }
                if (date>=currentDate && order.status == "active"){
                    myString= myString+'<td><a href="/cancelOrder?id='+order._id +'"> Cancel </a></td>';
                }
                else{
                    myString= myString+'<td></td>';
                }
                
                $('#myrow').append('<tr>'+myString+'</tr>');
                });
        },
        error:function(){
            alert("Error loadingv ideos" )
        }
    });
 
    $.ajax({
       
        method: 'GET',
        url: 'api/services',
        success:function(services){
            $.each(services,function(i,service){
                //alert("calling");
                $('#serviceIn').append('<option value="'+service.servicename +'">'+service.servicename+ '</option>');
            });
        },
        error:function(){
            alert("Error loadingv ideos" )
        }
    });

    $("#buttonClick").click(function(){   
        var myUrl1 = "http://localhost:3000/order?photographer="+document.getElementById("searchId").value 
        alert(myUrl1);
        window.location = myUrl1;
    });

});