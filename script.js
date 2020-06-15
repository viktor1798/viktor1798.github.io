menu.onclick= function myFunction(){
    let x =document.getElementById('myTopnav');

    if (x.className==="topnav"){
        x.className+="  responsive";
    }else{
        x.className = "topnav";
    }
}
jQuery(document).ready(function($){
$(document).ready(function(){
    $("#menu1").on("click","a", function(event){
        event.preventDefout();
        var id = $(this).affr('href'),
            top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
    });
});
});