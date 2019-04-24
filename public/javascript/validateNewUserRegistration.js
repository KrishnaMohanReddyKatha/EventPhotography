function validateLogIn() {
    return true;
}
var users = [];
$(document).ready(function(){
    $.ajax({
        method: 'POST',
        url: '/checkUsername',
        data : {'username':$("#email").val()},
        success:function(result){
            users = result.users;
            },
        error:function(){
            return false;
        }
    });        
});

function validate() {
       var fnameError = false;
       var lnameError = false;
       var emailError = false;
       var pwdError = false;
       var cnfmPwdError = false;
       var termsAndConditions = false;
       var fError = $("<span class = 'error' id='userFNameError'>First Name field must contain only alphabetical characters</span>");
       var lError = $("<span class = 'error' id='userLNameError'>Last Name field must contain only alphabetical characters</span>");
       var eError = $("<span class = 'error' id='emailError'>Email should be of standard email form</span>");
       var pError = $("<span class = 'error' id='pError'>Password should be of length 6 atleast</span>");
       var cpError = $("<span class = 'error' id='cpError'>Both passwords doesnot match</span>");
       var acceptPolicy =  $("<span class = 'error' id='apError'>Accept Terms and Conditions</span>");
       var existError = $("<span class = 'error' id='emailExistsError'>UserName already exists</span>");
      //console.log("I am here");
      //alert("loaded");
       if($("#fname").val() == "" || validateUsername($("#fname").val()) == false) {
           fnameError = true;
           $("#fname").after(fError);
           $("#userFNameError").fadeIn(500);
       } else {
           $("#userFNameError").fadeOut(500);
       }


       if($("#lname").val() == "" || validateUsername($("#lname").val()) == false) {
           lnameError = true;
           $("#lname").after(lError);
           $("#userLNameError").fadeIn(500);
       } else {
           $("#userLNameError").fadeOut(500);
       }


       if(validateEmail($("#email").val()) == false) {
           emailError = true;
           $("#email").after(eError);
           $("#emailError").fadeIn(500);
       } else {
           $("#emailError").fadeOut(500);
       } 

       if($("#pwd").val().length < 6) {
           pwdError = true;
           $("#pwd").after(pError);
           $("#pError").fadeIn(500);
       } else if($("#cpwd").val().length < 6) {
           $("#pError").fadeOut(500);
           cnfmPwdError = true;
           $("#cpwd").afer(cpError);
           $("#cpError").fadeIn(500);
       } else {
           $("#pError").fadeOut(500);
           $("#cpError").fadeOut(500);
       }

       //console.log($("#acceptPolicy").val());
       if($("#acceptPolicy").prop("checked") == false) {
           termsAndConditions = true;
           //$("#acceptPolicy").after(acceptPolicy);
           //$("apError").fadeIn(500);
           $("#policy").show();
       } else {
        $("#policy").hide();
           //$("apError").fadeOut(500);
       }

       if(fnameError || lnameError || emailError || pwdError || cnfmPwdError || termsAndConditions) {
           return false;
       }
       //var finalError = false;
       console.log(users);
       if(!users.includes($("#email").val())) {
            return true;
       }

       $("#email").after(existError);
       $("#emailExistsError").fadeIn(500);
       return false;
}



function validateUsername(str){
    var filter = /^[a-zA-Z0-9]*$/;
    if(filter.test(str))
        return true;
    else 
        return false;
}
function validateEmail(str){
    var filter = /\@/;
    if(filter.test(str))
        return true;
    else
        return false;
}