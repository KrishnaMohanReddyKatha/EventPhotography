var myUrl ='api/gallery/';
var searchString="";
var urlParms = new URLSearchParams(location.search);
if(urlParms.get('id') != null)
    searchString=urlParms.get('id');
$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: myUrl+searchString,
        success:function(images){
            $.each(images,function(i,image){
                $('#row1').append('<div class="col-lg-3 col-md-4 col-6"> <img class="img-fluid img-thumbnail" src="images/'+ image.name+'.jpg" alt="'+image.name +'"></div>')
            });
        },
        error:function(){
            alert("Error loadingv ideos" )
        }
    });
});

