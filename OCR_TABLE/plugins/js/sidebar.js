$(document).ready(function() {
    
    //$("#sidebar-subMenu").css("width",$("#sidebar-menu").outerWidth()+"px");
    //$(".accordion-section-content").css("width",$("#sidebar-menu").outerWidth()+"px");
    //$(".accordion-section-title").css("width",$("#sidebar-menu").outerWidth()+"px");

    //Section Clicked
    $('[id^=sidebar-item]').click(function(e){
      if($(this).find('.arrow-left').css("display") == 'none'){
        $('[id^=sidebar-item]').find('.arrow-left').css("display","none");
        $(this).find('.arrow-left').css("display","block");
        $('[id^=sidebar-item]').css("background-color","#61605e");
        $(this).css("background-color","#9f9e9c");
      }});
 
    //DropdownFunction
    function close_accordion_section(e) {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
    $('.accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('href');
        if($(e.target).is('.active')) {
            close_accordion_section(e.target);
        }else {
            close_accordion_section(e.target);
            $(this).addClass('active');
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
        e.preventDefault();
    });

    $("#sidebar-wrapper").hover(function(e){
      if($("#sidebar-wrapper").hasClass("collapsed")){
        $(".accordion-section").slideDown(100);
        $("#sidebar-wrapper").removeClass("collapsed");
        // setTimeout(function(){
        //   $(".accordion-section").css("display","block");
        //   },300);
      }
      else{
        $(".accordion-section").slideUp(100);
        $("#sidebar-wrapper").addClass("collapsed");
                // setTimeout(function(){
        //   $(".accordion-section").css("display","none");
        //   },300);
      }
    });

    $("#sidebar-wrapper").addClass("collapsed");
    $("#sidebar-wrapper").css("opacity",1);
    $(".accordion-section").css("display","none");
    if($("#sidebar-wrapper").css("opacity") == 1){
      $("#sidebar-wrapper").css("transition","all 0.5s ease");
      $("#sidebar-wrapper.collapsed").css("transition","all 0.5s ease");
    }

    $('[class^=module-item]').click(function(e){
        console.log("hello")
        $('[class^=module-item]').css("background-color","#444243");
        $(this).css("background-color","#9f9e9c");
    });
});

//Sidebar-resizing
$(window).on('resize', function(){
  //$("#module-subMenu").css("width",$("#sidebar-menu").outerWidth()+"px");
  //$(".accordion-section-title").css("width",$("#sidebar-menu").outerWidth()+"px");
  //$(".accordion-section-content").css("width",$("#sidebar-menu").outerWidth()+"px");
});
