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
    $.ajax({
        method: 'GET',
        url: myUrl,
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
});