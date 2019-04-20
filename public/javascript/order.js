var user = "";

user = "11";

if (user == "")
    window.location = "../views/login.html";

var myUrl ='api/orders/';
if (user != "1")
    myUrl=myUrl+user;

$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: myUrl,
        success:function(orders){
            $.each(orders,function(i,order){
                var myString ="";
                myString= myString+'<td>'+order.user_id+'</td>';
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
                    myString= myString+'<td>Cancel</td>';
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