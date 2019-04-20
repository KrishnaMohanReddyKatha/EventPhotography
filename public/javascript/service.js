$(function(){
    $.ajax({
        method: 'GET',
        url: 'api/services',
        success:function(services){
            $.each(services,function(i,service){
                $('#row').append('<div class="col-sm-4"><a href="/gallery?id='+service.servicename +'"><img src="images/'+(service.servicename).replace(/ /g,"")+'.jpg" alt="'+service.servicename+'"></a> <p>'+service.servicename+'</p> </div>');
            });
        },
        error:function(){
            alert("Error loadingv ideos" )
        }
    });
});


