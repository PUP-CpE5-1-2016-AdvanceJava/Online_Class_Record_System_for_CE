/*INITIAL COUNTERS FOR TABLE*/
var module_type;
var type_of_table;
var classId;
var classBlock;
var classSubj;
var classSched;
var midtermCounter=0;
var finalsCounter=0;
//---variables for lab table---//
var labCounter1=1;
var labCounter2=1;
var pracCounter1=1;
var pracCounter2=1;
var projCounter1=1;
var projCounter2=1;
//---variables for lec table---//
    //--*Class Standing*--//
var assignCounter1=1;
var assignCounter2=1;
var swCounter1=1;
var swCounter2=1;
var exCounter1=1;
var exCounter2=1;
var recCounter1=1;
var recCounter2=1;
var csCounter1=0; //for midterm colspan only
var csCounter2=0; //for final colspan only
    //--*Quiz/Lexam*--//
var quizCounter1=1;
var quizCounter2=1;
var leCounter1=1;
var leCounter2=1;
var qlCounter1=0; //for midterm colspan only
var qlCounter2=0; //for final colspan only
//---variables for attendance table---//
var attCounter1=1;
var attCounter2=1;

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

$(document).on('click',"ul>li[name='sheet_submenu'] a",function() {
    get_class_table($(this).attr('id'));
    $("#sidebar-wrapper").removeClass("collapsed");
    $("#sidebar-wrapper").addClass("collapsed");
})

function get_class_table(link)
{
  $.get(link,{},function(response)
    {
      if (response.status == 'OK')
      {
        console.log(response);
        //--clear sidebars content ang table content first to avoid bugs--//
        $("ul>li[name='sheet_submenu']").empty();
        $("ul>li[name='module_submenu']").empty();
        $('div#table-content-wrapper').empty();
        $('tbody#stud_table').empty();
        /*INITIALIZE COUNTERS FOR TABLE*/
        //--inital values will be given by database e.g. if have Lab1-Lab3 labcounter=2--//
        module_type;
        //---variables for att table---//
        module_type = response['Class']['ModuleType'];
        classId = response['Class']['ClassId'];
        type_of_table = response['table_type'];
        classBlock = response['Class']['ClassBlock'];
        classSubj = response['Subject'];
        classSched = response['Class']['Schedule'];
        var table = $('div#table-content-wrapper');
        table.empty();
        if (response['table_type'] == "main_table")
        {
            if (response['Class']['ModuleType'] == "Lec")
            {
            // 'Lecture table' please edit classes for responsive //
            var midterm_cols = 9,mid_cs_cols = 2,mid_qle_cols = 2;

            var mid_assign_cols,mid_assign_header_str = "",mid_assign_items_str = "",mid_assign_score_str = [];
            var mid_sw_cols,mid_sw_header_str = "",mid_sw_items_str = "",mid_sw_score_str = [];
            var mid_ex_cols,mid_ex_header_str = "",mid_ex_items_str = "",mid_ex_score_str = [];
            var mid_rec_cols,mid_rec_header_str = "",mid_rec_items_str = "",mid_rec_score_str = [];
            var mid_quiz_cols,mid_quiz_header_str = "",mid_quiz_items_str = "",mid_quiz_score_str = [];
            var mid_le_cols,mid_le_header_str = "",mid_le_items_str = "",mid_le_score_str = [];

            var mid_mexam_items_str = "",mid_mexam_score_str = [];

            var final_cols = 9,final_cs_cols = 2,final_qle_cols = 2;

            var final_assign_cols,final_assign_header_str = "",final_assign_items_str = "",final_assign_score_str = [];
            var final_sw_cols,final_sw_header_str = "",final_sw_items_str = "",final_sw_score_str = [];
            var final_ex_cols,final_ex_header_str = "",final_ex_items_str = "",final_ex_score_str = [];
            var final_rec_cols,final_rec_header_str = "",final_rec_items_str = "",final_rec_score_str = [];
            var final_quiz_cols,final_quiz_header_str = "",final_quiz_items_str = "",final_quiz_score_str = [];
            var final_le_cols,final_le_header_str = "",final_le_items_str = "",final_le_score_str = [];

            var final_fexam_items_str = "",final_fexam_score_str = [];
            /*ASSIGN MIDTERM STRING INITIALIZATION*/
            if (response['assign_mid_num'] > 0)
            {
                midterm_cols += response['assign_mid_num'];
                mid_cs_cols += response['assign_mid_num'];
                mid_assign_cols = response['assign_mid_num'];
                assignCounter1 = response['assign_mid_num'];
            }
            else 
            {
                midterm_cols++;
                mid_cs_cols++;
                mid_assign_cols = 1;
                assignCounter1 = 1;
            }
            
            if (mid_assign_cols > 0)
            {
                for (var i = 0; i <  mid_assign_cols; i++) 
                {
                    mid_assign_header_str += "<th class='text-center' id='table-header-mid-assign"+(i+1)+"'>Assign "+(i+1)+" </th>";
                }
            }
            
            if (response['assign_mid_items'].length > 0)
            {
                for (var i = 0; i <  mid_assign_cols; i++) 
                {
                    mid_assign_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-assign"+(i+1)+"'>"+response['assign_mid_items'][i]+"</td>";
                }
            }
            else
            {
                mid_assign_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-assign1'></td>";
            }

            if (response['assign_mid_score'].length > 0)
            {
                var x_assign_mid = 0;
                response.assign_mid_score.forEach(function(assign){
                    for (var i = 0; i <  mid_assign_cols; i++) 
                    {
                        mid_assign_score_str[x_assign_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-assign"+(i+1)+"'>"+assign[i]+"</td>";
                    }
                    x_assign_mid++;
                });
            }
            else
            {
                var x_assign_mid = 0;
                response.Student.forEach(function(assign){
                    for (var i = 0; i <  mid_assign_cols; i++) 
                    {
                        mid_assign_score_str[x_assign_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-assign"+(i+1)+"'></td>";
                    }
                    x_assign_mid++;
                });
            }

            /*SW MIDTERM STRING INITIALIZATION*/
            if (response['sw_mid_num'] > 0)
            {
                midterm_cols += response['sw_mid_num'];
                mid_cs_cols += response['sw_mid_num'];
                mid_sw_cols = response['sw_mid_num'];
                swCounter1 = response['sw_mid_num'];
            }
            else 
            {
                midterm_cols++;
                mid_cs_cols++;
                mid_sw_cols = 1;
                swCounter1 = 1;
            }

            if (mid_sw_cols > 0)
            {
                for (var i = 0; i <  mid_sw_cols; i++) 
                {
                    mid_sw_header_str += "<th class='text-center' id='table-header-mid-sw"+(i+1)+"'>Sw "+(i+1)+" </th>";
                }
            }

            if (response['sw_mid_items'].length > 0)
            {
                for (var i = 0; i <  mid_sw_cols; i++) 
                {
                    mid_sw_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-sw"+(i+1)+"'>"+response['sw_mid_items'][i]+"</td>";
                }
            }
            else
            {
                mid_sw_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-sw1'></td>";
            }

            if (response['sw_mid_score'].length > 0)
            {
                var x_sw_mid = 0;
                response.sw_mid_score.forEach(function(sw){
                    for (var i = 0; i <  mid_sw_cols; i++) 
                    {
                        mid_sw_score_str[x_sw_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-sw"+(i+1)+"'>"+sw[i]+"</td>";
                    }
                    x_sw_mid++;
                });
            }
            else
            {
                var x_sw_mid = 0;
                response.Student.forEach(function(sw){
                    for (var i = 0; i <  mid_sw_cols; i++) 
                    {
                        mid_sw_score_str[x_sw_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-sw"+(i+1)+"'></td>";
                    }
                    x_sw_mid++;
                });
            }

            /*ex MIDTERM STRING INITIALIZATION*/
            if (response['ex_mid_num'] > 0)
            {
                midterm_cols += response['ex_mid_num'];
                mid_cs_cols += response['ex_mid_num'];
                mid_ex_cols = response['ex_mid_num'];
                exCounter1 = response['ex_mid_num'];
            }
            else 
            {
                midterm_cols++;
                mid_cs_cols++;
                mid_ex_cols = 1;
                exCounter1 = 1;
            }
            
            if (mid_ex_cols > 0)
            {
                for (var i = 0; i <  mid_ex_cols; i++) 
                {
                    mid_ex_header_str += "<th class='text-center' id='table-header-mid-ex"+(i+1)+"'>Ex "+(i+1)+" </th>";
                }
            }
            
            if (response['ex_mid_items'].length > 0)
            {
                for (var i = 0; i <  mid_ex_cols; i++) 
                {
                    mid_ex_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-ex"+(i+1)+"'>"+response['ex_mid_items'][i]+"</td>";
                }
            }
            else
            {
                mid_ex_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-ex1'></td>";
            }

            if (response['ex_mid_score'].length > 0)
            {
                var x_ex_mid = 0;
                response.ex_mid_score.forEach(function(ex){
                    for (var i = 0; i <  mid_ex_cols; i++) 
                    {
                        mid_ex_score_str[x_ex_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-ex"+(i+1)+"'>"+ex[i]+"</td>";
                    }
                    x_ex_mid++;
                });
            }
            else
            {
                var x_ex_mid = 0;
                response.Student.forEach(function(ex){
                    for (var i = 0; i <  mid_ex_cols; i++) 
                    {
                        mid_ex_score_str[x_ex_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-ex"+(i+1)+"'></td>";
                    }
                    x_ex_mid++;
                });
            }

            /*rec MIDTERM STRING INITIALIZATION*/
            if (response['rec_mid_num'] > 0)
            {
                midterm_cols += response['rec_mid_num'];
                mid_cs_cols += response['rec_mid_num'];
                mid_rec_cols = response['rec_mid_num'];
                recCounter1 = response['rec_mid_num'];
            }
            else 
            {
                midterm_cols++;
                mid_cs_cols++;
                mid_rec_cols = 1;
                recCounter1 = 1;
            }
            
            if (mid_rec_cols > 0)
            {
                for (var i = 0; i <  mid_rec_cols; i++) 
                {
                    mid_rec_header_str += "<th class='text-center' id='table-header-mid-rec"+(i+1)+"'>Rec "+(i+1)+" </th>";
                }
            }
            
            if (response['rec_mid_items'].length > 0)
            {
                for (var i = 0; i <  mid_rec_cols; i++) 
                {
                    mid_rec_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-rec"+(i+1)+"'>"+response['rec_mid_items'][i]+"</td>";
                }
            }
            else
            {
                mid_rec_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-rec1'></td>";
            }

            if (response['rec_mid_score'].length > 0)
            {
                var x_rec_mid = 0;
                response.rec_mid_score.forEach(function(rec){
                    for (var i = 0; i <  mid_rec_cols; i++) 
                    {
                        mid_rec_score_str[x_rec_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-rec"+(i+1)+"'>"+rec[i]+"</td>";
                    }
                    x_rec_mid++;
                });
            }
            else
            {
                var x_rec_mid = 0;
                response.Student.forEach(function(rec){
                    for (var i = 0; i <  mid_rec_cols; i++) 
                    {
                        mid_rec_score_str[x_rec_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-rec"+(i+1)+"'></td>";
                    }
                    x_rec_mid++;
                });
            }

            /*quiz MIDTERM STRING INITIALIZATION*/
            if (response['quiz_mid_num'] > 0)
            {
                midterm_cols += response['quiz_mid_num'];
                mid_qle_cols += response['quiz_mid_num'];
                mid_quiz_cols = response['quiz_mid_num'];
                quizCounter1 = response['quiz_mid_num'];
            }
            else 
            {
                midterm_cols++;
                mid_qle_cols++;
                mid_quiz_cols = 1;
                quizCounter1 = 1;
            }
            
            if (mid_quiz_cols > 0)
            {
                for (var i = 0; i <  mid_quiz_cols; i++) 
                {
                    mid_quiz_header_str += "<th class='text-center' id='table-header-mid-quiz"+(i+1)+"'>Quiz "+(i+1)+" </th>";
                }
            }
            
            if (response['quiz_mid_items'].length > 0)
            {
                for (var i = 0; i <  mid_quiz_cols; i++) 
                {
                    mid_quiz_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-quiz"+(i+1)+"'>"+response['quiz_mid_items'][i]+"</td>";
                }
            }
            else
            {
                mid_quiz_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-quiz1'></td>";
            }

            if (response['quiz_mid_score'].length > 0)
            {
                var x_quiz_mid = 0;
                response.quiz_mid_score.forEach(function(quiz){
                    for (var i = 0; i <  mid_quiz_cols; i++) 
                    {
                        mid_quiz_score_str[x_quiz_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-quiz"+(i+1)+"'>"+quiz[i]+"</td>";
                    }
                    x_quiz_mid++;
                });
            }
            else
            {
                var x_quiz_mid = 0;
                response.Student.forEach(function(quiz){
                    for (var i = 0; i <  mid_quiz_cols; i++) 
                    {
                        mid_quiz_score_str[x_quiz_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-quiz"+(i+1)+"'></td>";
                    }
                    x_quiz_mid++;
                });
            }

            /*le MIDTERM STRING INITIALIZATION*/
            if (response['le_mid_num'] > 0)
            {
                midterm_cols += response['le_mid_num'];
                mid_qle_cols += response['le_mid_num'];
                mid_le_cols = response['le_mid_num'];
                leCounter1 = response['le_mid_num'];
            }
            else 
            {
                midterm_cols++;
                mid_qle_cols++;
                mid_le_cols = 1;
                leCounter1 = 1;
            }
            
            if (mid_le_cols > 0)
            {
                for (var i = 0; i <  mid_le_cols; i++) 
                {
                    mid_le_header_str += "<th class='text-center' id='table-header-mid-le"+(i+1)+"'>Le "+(i+1)+" </th>";
                }
            }
            
            if (response['le_mid_items'].length > 0)
            {
                for (var i = 0; i <  mid_le_cols; i++) 
                {
                    mid_le_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-le"+(i+1)+"'>"+response['le_mid_items'][i]+"</td>";
                }
            }
            else
            {
                mid_le_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-le1'></td>";
            }

            if (response['le_mid_score'].length > 0)
            {
                var x_le_mid = 0;
                response.le_mid_score.forEach(function(le){
                    for (var i = 0; i <  mid_le_cols; i++) 
                    {
                        mid_le_score_str[x_le_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-le"+(i+1)+"'>"+le[i]+"</td>";
                    }
                    x_le_mid++;
                });
            }
            else
            {
                var x_le_mid = 0;
                response.Student.forEach(function(le){
                    for (var i = 0; i <  mid_le_cols; i++) 
                    {
                        mid_le_score_str[x_le_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-le"+(i+1)+"'></td>";
                    }
                    x_le_mid++;
                });
            }

            /*mexam MIDTERM STRING INITIALIZATION*/
            if (response['mexam_mid_items'].length > 0)
            {
                mid_mexam_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-mexam'>"+response['mexam_mid_items'][0]+"</td>";
            }
            else
            {
                mid_mexam_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-mexam'></td>";
            }

            if (response['mexam_mid_score'].length > 0)
            {
                var x_mexam_mid = 0;
                response.mexam_mid_score.forEach(function(mexam){
                    mid_mexam_score_str[x_mexam_mid] = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-mexam'>"+mexam+"</td>";
                    x_mexam_mid++;
                });
            }
            else
            {
                var x_mexam_mid = 0;
                response.Student.forEach(function(mexam){
                    mid_mexam_score_str[x_mexam_mid] = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-mexam'></td>";
                    x_mexam_mid++;
                });
            }





            /*ASSIGN FINALS STRING INITIALIZATION*/
            if (response['assign_final_num'] > 0)
            {
                final_cols += response['assign_final_num'];
                final_cs_cols += response['assign_final_num'];
                final_assign_cols = response['assign_final_num'];
                assignCounter2 = response['assign_final_num'];
            }
            else 
            {
                final_cols++;
                final_cs_cols++;
                final_assign_cols = 1;
                assignCounter2 = 1;
            }
            
            if (final_assign_cols > 0)
            {
                for (var i = 0; i <  final_assign_cols; i++) 
                {
                    final_assign_header_str += "<th class='text-center' id='table-header-final-assign"+(i+1)+"'>Assign "+(i+1)+" </th>";
                }
            }
            
            if (response['assign_final_items'].length > 0)
            {
                for (var i = 0; i <  final_assign_cols; i++) 
                {
                    final_assign_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-assign"+(i+1)+"'>"+response['assign_final_items'][i]+"</td>";
                }
            }
            else
            {
                final_assign_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-assign1'></td>";
            }

            if (response['assign_final_score'].length > 0)
            {
                var x_assign_final = 0;
                response.assign_final_score.forEach(function(assign){
                    for (var i = 0; i <  final_assign_cols; i++) 
                    {
                        final_assign_score_str[x_assign_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-assign"+(i+1)+"'>"+assign[i]+"</td>";
                    }
                    x_assign_final++;
                });
            }
            else
            {
                var x_assign_final = 0;
                response.Student.forEach(function(assign){
                    for (var i = 0; i <  final_assign_cols; i++) 
                    {
                        final_assign_score_str[x_assign_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-assign"+(i+1)+"'></td>";
                    }
                    x_assign_final++;
                });
            }

            /*SW finalTERM STRING INITIALIZATION*/
            if (response['sw_final_num'] > 0)
            {
                final_cols += response['sw_final_num'];
                final_cs_cols += response['sw_final_num'];
                final_sw_cols = response['sw_final_num'];
                swCounter2 = response['sw_final_num'];
            }
            else 
            {
                final_cols++;
                final_cs_cols++;
                final_sw_cols = 1;
                swCounter2 = 1;
            }

            if (final_sw_cols > 0)
            {
                for (var i = 0; i <  final_sw_cols; i++) 
                {
                    final_sw_header_str += "<th class='text-center' id='table-header-final-sw"+(i+1)+"'>Sw "+(i+1)+" </th>";
                }
            }

            if (response['sw_final_items'].length > 0)
            {
                for (var i = 0; i <  final_sw_cols; i++) 
                {
                    final_sw_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-sw"+(i+1)+"'>"+response['sw_final_items'][i]+"</td>";
                }
            }
            else
            {
                final_sw_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-sw1'></td>";
            }

            if (response['sw_final_score'].length > 0)
            {
                var x_sw_final = 0;
                response.sw_final_score.forEach(function(sw){
                    for (var i = 0; i <  final_sw_cols; i++) 
                    {
                        final_sw_score_str[x_sw_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-sw"+(i+1)+"'>"+sw[i]+"</td>";
                    }
                    x_sw_final++;
                });
            }
            else
            {
                var x_sw_final = 0;
                response.Student.forEach(function(sw){
                    for (var i = 0; i <  final_sw_cols; i++) 
                    {
                        final_sw_score_str[x_sw_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-sw"+(i+1)+"'></td>";
                    }
                    x_sw_final++;
                });
            }

            /*ex finalTERM STRING INITIALIZATION*/
            if (response['ex_final_num'] > 0)
            {
                final_cols += response['ex_final_num'];
                final_cs_cols += response['ex_final_num'];
                final_ex_cols = response['ex_final_num'];
                exCounter2 = response['ex_final_num'];
            }
            else 
            {
                final_cols++;
                final_cs_cols++;
                final_ex_cols = 1;
                exCounter2 = 1;
            }
            
            if (final_ex_cols > 0)
            {
                for (var i = 0; i <  final_ex_cols; i++) 
                {
                    final_ex_header_str += "<th class='text-center' id='table-header-final-ex"+(i+1)+"'>Ex "+(i+1)+" </th>";
                }
            }
            
            if (response['ex_final_items'].length > 0)
            {
                for (var i = 0; i <  final_ex_cols; i++) 
                {
                    final_ex_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-ex"+(i+1)+"'>"+response['ex_final_items'][i]+"</td>";
                }
            }
            else
            {
                final_ex_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-ex1'></td>";
            }

            if (response['ex_final_score'].length > 0)
            {
                var x_ex_final = 0;
                response.ex_final_score.forEach(function(ex){
                    for (var i = 0; i <  final_ex_cols; i++) 
                    {
                        final_ex_score_str[x_ex_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-ex"+(i+1)+"'>"+ex[i]+"</td>";
                    }
                    x_ex_final++;
                });
            }
            else
            {
                var x_ex_final = 0;
                response.Student.forEach(function(ex){
                    for (var i = 0; i <  final_ex_cols; i++) 
                    {
                        final_ex_score_str[x_ex_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-ex"+(i+1)+"'></td>";
                    }
                    x_ex_final++;
                });
            }

            /*rec finalTERM STRING INITIALIZATION*/
            if (response['rec_final_num'] > 0)
            {
                final_cols += response['rec_final_num'];
                final_cs_cols += response['rec_final_num'];
                final_rec_cols = response['rec_final_num'];
                recCounter2 = response['rec_final_num'];
            }
            else 
            {
                final_cols++;
                final_cs_cols++;
                final_rec_cols = 1;
                recCounter2 = 1;
            }
            
            if (final_rec_cols > 0)
            {
                for (var i = 0; i <  final_rec_cols; i++) 
                {
                    final_rec_header_str += "<th class='text-center' id='table-header-final-rec"+(i+1)+"'>Rec "+(i+1)+" </th>";
                }
            }
            
            if (response['rec_final_items'].length > 0)
            {
                for (var i = 0; i <  final_rec_cols; i++) 
                {
                    final_rec_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-rec"+(i+1)+"'>"+response['rec_final_items'][i]+"</td>";
                }
            }
            else
            {
                final_rec_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-rec1'></td>";
            }

            if (response['rec_final_score'].length > 0)
            {
                var x_rec_final = 0;
                response.rec_final_score.forEach(function(rec){
                    for (var i = 0; i <  final_rec_cols; i++) 
                    {
                        final_rec_score_str[x_rec_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-rec"+(i+1)+"'>"+rec[i]+"</td>";
                    }
                    x_rec_final++;
                });
            }
            else
            {
                var x_rec_final = 0;
                response.Student.forEach(function(rec){
                    for (var i = 0; i <  final_rec_cols; i++) 
                    {
                        final_rec_score_str[x_rec_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-rec"+(i+1)+"'></td>";
                    }
                    x_rec_final++;
                });
            }

            /*quiz finalTERM STRING INITIALIZATION*/
            if (response['quiz_final_num'] > 0)
            {
                final_cols += response['quiz_final_num'];
                final_qle_cols += response['quiz_final_num'];
                final_quiz_cols = response['quiz_final_num'];
                quizCounter2 = response['quiz_final_num'];
            }
            else 
            {
                final_cols++;
                final_qle_cols++;
                final_quiz_cols = 1;
                quizCounter2 = 1;
            }
            
            if (final_quiz_cols > 0)
            {
                for (var i = 0; i <  final_quiz_cols; i++) 
                {
                    final_quiz_header_str += "<th class='text-center' id='table-header-final-quiz"+(i+1)+"'>Quiz "+(i+1)+" </th>";
                }
            }
            
            if (response['quiz_final_items'].length > 0)
            {
                for (var i = 0; i <  final_quiz_cols; i++) 
                {
                    final_quiz_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-quiz"+(i+1)+"'>"+response['quiz_final_items'][i]+"</td>";
                }
            }
            else
            {
                final_quiz_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-quiz1'></td>";
            }

            if (response['quiz_final_score'].length > 0)
            {
                var x_quiz_final = 0;
                response.quiz_final_score.forEach(function(quiz){
                    for (var i = 0; i <  final_quiz_cols; i++) 
                    {
                        final_quiz_score_str[x_quiz_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-quiz"+(i+1)+"'>"+quiz[i]+"</td>";
                    }
                    x_quiz_final++;
                });
            }
            else
            {
                var x_quiz_final = 0;
                response.Student.forEach(function(quiz){
                    for (var i = 0; i <  final_quiz_cols; i++) 
                    {
                        final_quiz_score_str[x_quiz_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-quiz"+(i+1)+"'></td>";
                    }
                    x_quiz_final++;
                });
            }

            /*le finalTERM STRING INITIALIZATION*/
            if (response['le_final_num'] > 0)
            {
                final_cols += response['le_final_num'];
                final_qle_cols += response['le_final_num'];
                final_le_cols = response['le_final_num'];
                leCounter2 = response['le_final_num'];
            }
            else 
            {
                final_cols++;
                final_qle_cols++;
                final_le_cols = 1;
                leCounter2 = 1;
            }
            
            if (final_le_cols > 0)
            {
                for (var i = 0; i <  final_le_cols; i++) 
                {
                    final_le_header_str += "<th class='text-center' id='table-header-final-le"+(i+1)+"'>Le "+(i+1)+" </th>";
                }
            }
            
            if (response['le_final_items'].length > 0)
            {
                for (var i = 0; i <  final_le_cols; i++) 
                {
                    final_le_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-le"+(i+1)+"'>"+response['le_final_items'][i]+"</td>";
                }
            }
            else
            {
                final_le_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-le1'></td>";
            }

            if (response['le_final_score'].length > 0)
            {
                var x_le_final = 0;
                response.le_final_score.forEach(function(le){
                    for (var i = 0; i <  final_le_cols; i++) 
                    {
                        final_le_score_str[x_le_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-le"+(i+1)+"'>"+le[i]+"</td>";
                    }
                    x_le_final++;
                });
            }
            else
            {
                var x_le_final = 0;
                response.Student.forEach(function(le){
                    for (var i = 0; i <  final_le_cols; i++) 
                    {
                        final_le_score_str[x_le_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-le"+(i+1)+"'></td>";
                    }
                    x_le_final++;
                });
            }

            /*fexam finalTERM STRING INITIALIZATION*/
            if (response['fexam_final_items'].length > 0)
            {
                final_fexam_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-fexam'>"+response['fexam_final_items'][0]+"</td>";
            }
            else
            {
                final_fexam_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-fexam'></td>";
            }

            if (response['fexam_final_score'].length > 0)
            {
                var x_fexam_final = 0;
                response.fexam_final_score.forEach(function(fexam){
                    final_fexam_score_str[x_fexam_final] = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-fexam'>"+fexam+"</td>";
                    x_fexam_final++;
                });
            }
            else
            {
                var x_fexam_final = 0;
                response.Student.forEach(function(fexam){
                    final_fexam_score_str[x_fexam_final] = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-fexam'></td>";
                    x_fexam_final++;
                });
            }
            midtermCounter = response['assign_mid_num']+response['sw_mid_num']+response['ex_mid_num']+response['rec_mid_num']+response['quiz_mid_num']+response['le_mid_num'] - 6;
            finalsCounter = response['assign_final_num']+response['sw_final_num']+response['ex_final_num']+response['rec_final_num']+response['quiz_final_num']+response['le_final_num'] - 6;
            console.log("final_cs_cols:"+final_cs_cols);
            console.log("final_qle_cols:"+final_qle_cols);
            table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3 id='table-h3'>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"<span><button class='btn btn-success ' id = 'table-save-button' type='submit'><i class='fa fa-check'></i> Save</button>\
                          <button class='btn btn-info ' id = 'table-upload-button' type='submit'><i class='fa fa-check'></i> Export</button></span></h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid'>\
                                <div class='table-responsive'  id='table-lec'>\
                                    <table class='table table-striped table-bordered' id='table-wrapper'>\
                                        <thead>\
                                            <tr>\
                                                <th colspan='2' id='table-blank'></th>\
                                                <th colspan='"+midterm_cols+"' class='text-center' id='table-midterm'>Midterm</th>\
                                                <th colspan='"+final_cols+"' class='text-center' id='table-finals'>Finals</th>\
                                            </tr>\
                                            <tr>\
                                                <th class='text-center' id='table-student'>Student Number</th>\
                                                <th class='text-center' id='table-name'>Name</th>\
                                                <th rowspan='2' class='text-center' id='attendance'>ATTENDANCE</th>\
                                                <th colspan='"+mid_cs_cols+"' class='text-center' id='table-mid-class-standing'>CLASS STANDING (20%)</th>\
                                                <th colspan='"+mid_qle_cols+"' class='text-center' id='table-mid-quiz-le'>QUIZZES/LONG EXAM (30%)</th>\
                                                <th colspan='2' class='text-center'>MIDTERM EXAM (40%)</th>\
                                                <th colspan='2' class='text-center' id='border-bold'>MIDTERM GRADE</th>\
                                                <th rowspan='2' id='attendance'>ATTENDANCE</th>\
                                                <th colspan='"+final_cs_cols+"' class='text-center' id='table-final-class-standing'>CLASS STANDING (20%)</th>\
                                                <th colspan='"+final_qle_cols+"' class='text-center' id='table-final-quiz-le'>QUIZZES/LONG EXAM (30%)</th>\
                                                <th colspan='2' class='text-center'>FINAL EXAM (40%)</th>\
                                                <th colspan='2' class='text-center'>FINAL GRADE</th>\
                                            </tr>\
                                            <tr>\
                                                <th class='text-center' colspan='2' id='table-blank2'></th>\
                                                <th class='text-center' colspan='"+mid_assign_cols+"' id='table-mid-assign'>ASSIGNMENT<a class='btn' id='add-col-assign1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-assign-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='"+mid_sw_cols+"' id='table-mid-sw'>SEATWORK<a class='btn' id='add-col-sw1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-sw-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='"+mid_ex_cols+"' id='table-mid-ex'>EXERCISE<a class='btn' id='add-col-ex1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-ex-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='"+mid_rec_cols+"' id='table-mid-rec'>RECITATION<a class='btn' id='add-col-rec1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-rec-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th class='text-center' colspan='"+mid_quiz_cols+"' id='table-mid-quiz'>QUIZ<a class='btn' id='add-col-quiz1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-quiz-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='"+mid_le_cols+"' id='table-mid-le'>LONG EXAM<a class='btn' id='add-col-le1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-le-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th rowspan='2' class='text-center' id='table-header-mid-mexam'>SCORE</th>\
                                                <th rowspan='2' class='text-center' id='table-header-mid-mexam-rating'>40%</th>\
                                                <th rowspan='2' class='text-center' id='table-header-mid-overall-rating'>100%</th>\
                                                <th rowspan='2' class='text-center' id='table-header-mid-overall-grade'>RATING</th>\
                                                <th class='text-center' colspan='"+final_assign_cols+"' id='table-final-assign'>ASSIGNMENT<a class='btn' id='add-col-assign1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-assign-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='"+final_sw_cols+"' id='table-final-sw'>SEATWORK<a class='btn' id='add-col-sw1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-sw-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='"+final_ex_cols+"' id='table-final-ex'>EXERCISE<a class='btn' id='add-col-ex1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-ex-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='"+final_rec_cols+"' id='table-final-rec'>RECITATION<a class='btn' id='add-col-rec1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-rec-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th class='text-center' colspan='"+final_quiz_cols+"' id='table-final-quiz'>QUIZ<a class='btn' id='add-col-quiz2' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-quiz-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='"+final_le_cols+"' id='table-final-le'>LONG EXAM<a class='btn' id='add-col-le2' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-le-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th rowspan='2' class='text-center' id='table-header-final-fexam'>SCORE</th>\
                                                <th rowspan='2' class='text-center' id='table-header-final-fexam-rating'>40%</th>\
                                                <th rowspan='2' class='text-center' id='table-header-final-overall-rating'>100%</th>\
                                                <th rowspan='2' class='text-center' id='table-header-final-overall-grade'>RATING</th>\
                                            </tr>\
                                            <tr id='table-module'>\
                                                <th colspan='2' id='table-blank2'></th>\
                                                <th class='text-center' id='table-header-mid-att1'>10%</th>"+mid_assign_header_str+mid_sw_header_str+mid_ex_header_str+mid_rec_header_str+"\
                                                <th class='text-center' id='table-header-mid-cs-total'>Total</th>\
                                                <th class='text-center' id='table-header-mid-cs-rating'>20%</th>"+mid_quiz_header_str+mid_le_header_str+"\
                                                <th class='text-center' id='table-header-mid-ql-total'>Total</th>\
                                                <th class='text-center' id='table-header-mid-ql-rating'>30%</th>\
                                                <th class='text-center' id='table-header-final-att1'>10%</th>"+final_assign_header_str+final_sw_header_str+final_ex_header_str+final_rec_header_str+"\
                                                <th class='text-center' id='table-header-final-cs-total'>Total</th>\
                                                <th class='text-center' id='table-header-final-cs-rating'>20%</th>"+final_quiz_header_str+final_le_header_str+"\
                                                <th class='text-center' id='table-header-final-ql-total'>Total</th>\
                                                <th class='text-center' id='table-header-final-ql-rating'>30%</th>\
                                            </tr>\
                                        </thead>\
                                        <tbody>\
                                            <tr  id='table-items-wrapper' class='num-items'>\
                                                <td colspan='2' class='text-right' id='table-items'>Number of Items</td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-att1'></td>"+mid_assign_items_str+mid_sw_items_str+mid_ex_items_str+mid_rec_items_str+"\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-cs-total'></td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-cs-rating'></td>"+mid_quiz_items_str+mid_le_items_str+"\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-ql-total'></td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-ql-rating'></td>"+mid_mexam_items_str+"\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mexam-rating'></td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='border-bold'></td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-att1'></td>"+final_assign_items_str+final_sw_items_str+final_ex_items_str+final_rec_items_str+"\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-cs-total'></td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-cs-rating'></td>"+final_quiz_items_str+final_le_items_str+"\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-ql-total'></td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-ql-rating'></td>"+final_fexam_items_str+"\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-fexam-rating'></td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                                <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            </tr>\
                                        </tbody>\
                                    </table>\
                                </div>\
                            </div>\
                        </div>\
                      </div>");
            var ctr_module = 0;
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr><td id='table-stud-num' class='border-left' name='stud-num'>"+stud.stud_num+"</td>\
                                            <td id='border-bold' name='stud-name'>"+stud.full_name+"</td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-score-mid-att1'></td>"+mid_assign_score_str[ctr_module]+mid_sw_score_str[ctr_module]+mid_ex_score_str[ctr_module]+mid_rec_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>"+mid_quiz_score_str[ctr_module]+mid_le_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>"+mid_mexam_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='border-bold'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-score-final-att1'></td>"+final_assign_score_str[ctr_module]+final_sw_score_str[ctr_module]+final_ex_score_str[ctr_module]+final_rec_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>"+final_quiz_score_str[ctr_module]+final_le_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>"+final_fexam_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td></tr>");
                ctr_module++;
                });
                table.append("<script type='text/javascript' src='/js/tooltipMarci.js'></script>\
                                <script type='text/javascript' src='/js/table.js'></script>");
            }
            else
            {
            // 'Lab table' please edit classes for responsive //
            var midterm_cols = 8,mid_lab_cols = 3,mid_prac_cols = 3,mid_proj_cols = 3;

            var mid_lab_header_str = "",mid_lab_items_str = "",mid_lab_score_str = [];
            var mid_prac_header_str = "",mid_prac_items_str = "",mid_prac_score_str = [];
            var mid_proj_header_str = "",mid_proj_items_str = "",mid_proj_score_str = [];

            var finals_cols = 8,final_lab_cols = 3,final_prac_cols = 3,final_proj_cols = 3;
            var final_lab_header_str = "",final_lab_items_str = "",final_lab_score_str = [];
            var final_prac_header_str = "",final_prac_items_str = "",final_prac_score_str = [];
            var final_proj_header_str = "",final_proj_items_str = "",final_proj_score_str = [];

            /*lab MIDTERM STRING INITIALIZATION*/
            if (response['lab_mid_num'] > 0)
            {
                midterm_cols += response['lab_mid_num'];
                mid_lab_cols += response['lab_mid_num'] - 1;
                labCounter1 = response['lab_mid_num'];
            }
            else 
            {
                midterm_cols++;
                labCounter1 = 1;
            }
            
            for (var i = 0; i <  mid_lab_cols-2; i++) 
            {
                mid_lab_header_str += "<th class='text-center' id='table-header-mid-lab"+(i+1)+"'>Lab "+(i+1)+" </th>";
            }
            
            if (response['lab_mid_items'].length > 0)
            {
                for (var i = 0; i <  mid_lab_cols-2; i++) 
                {
                    mid_lab_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-lab"+(i+1)+"'>"+response['lab_mid_items'][i]+"</td>";
                }
            }
            else
            {
                mid_lab_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-lab1'></td>";
            }

            if (response['lab_mid_score'].length > 0)
            {
                var x_lab_mid = 0;
                response.lab_mid_score.forEach(function(lab){
                    for (var i = 0; i <  mid_lab_cols-2; i++) 
                    {
                        mid_lab_score_str[x_lab_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-lab"+(i+1)+"'>"+lab[i]+"</td>";
                    }
                    x_lab_mid++;
                });
            }
            else
            {
                var x_lab_mid = 0;
                response.Student.forEach(function(lab){
                    for (var i = 0; i <  mid_lab_cols-2; i++) 
                    {
                        mid_lab_score_str[x_lab_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-lab"+(i+1)+"'></td>";
                    }
                    x_lab_mid++;
                });
            }

            /*prac MIDTERM STRING INITIALIZATION*/
            if (response['prac_mid_num'] > 0)
            {
                midterm_cols += response['prac_mid_num'];
                mid_prac_cols += response['prac_mid_num'] - 1;
                pracCounter1 = response['prac_mid_num'];
            }
            else 
            {
                midterm_cols++;
                pracCounter1 = 1;
            }
            
            for (var i = 0; i <  mid_prac_cols-2; i++) 
            {
                mid_prac_header_str += "<th class='text-center' id='table-header-mid-prac"+(i+1)+"'>Prac "+(i+1)+" </th>";
            }
            
            if (response['prac_mid_items'].length > 0)
            {
                for (var i = 0; i <  mid_prac_cols-2; i++) 
                {
                    mid_prac_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-prac"+(i+1)+"'>"+response['prac_mid_items'][i]+"</td>";
                }
            }
            else
            {
                mid_prac_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-prac1'></td>";
            }

            if (response['prac_mid_score'].length > 0)
            {
                var x_prac_mid = 0;
                response.prac_mid_score.forEach(function(prac){
                    for (var i = 0; i <  mid_prac_cols-2; i++) 
                    {
                        mid_prac_score_str[x_prac_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-prac"+(i+1)+"'>"+prac[i]+"</td>";
                    }
                    x_prac_mid++;
                });
            }
            else
            {
                var x_prac_mid = 0;
                response.Student.forEach(function(prac){
                    for (var i = 0; i <  mid_prac_cols-2; i++) 
                    {
                        mid_prac_score_str[x_prac_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-prac"+(i+1)+"'></td>";
                    }
                    x_prac_mid++;
                });
            }

            /*proj MIDTERM STRING INITIALIZATION*/
            if (response['proj_mid_num'] > 0)
            {
                midterm_cols += response['proj_mid_num'];
                mid_proj_cols += response['proj_mid_num'] - 1;
                projCounter1 = response['proj_mid_num'];
            }
            else 
            {
                midterm_cols++;
                projCounter1 = 1;
            }
            
            for (var i = 0; i <  mid_proj_cols-2; i++) 
            {
                mid_proj_header_str += "<th class='text-center' id='table-header-mid-proj"+(i+1)+"'>Proj "+(i+1)+" </th>";
            }
            
            if (response['proj_mid_items'].length > 0)
            {
                for (var i = 0; i <  mid_proj_cols-2; i++) 
                {
                    mid_proj_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-proj"+(i+1)+"'>"+response['proj_mid_items'][i]+"</td>";
                }
            }
            else
            {
                mid_proj_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-proj1'></td>";
            }

            if (response['proj_mid_score'].length > 0)
            {
                var x_proj_mid = 0;
                response.proj_mid_score.forEach(function(proj){
                    for (var i = 0; i <  mid_proj_cols-2; i++) 
                    {
                        mid_proj_score_str[x_proj_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-mid-proj"+(i+1)+"'>"+proj[i]+"</td>";
                    }
                    x_proj_mid++;
                });
            }
            else
            {
                var x_proj_mid = 0;
                response.Student.forEach(function(proj){
                    for (var i = 0; i <  mid_proj_cols-2; i++) 
                    {
                        mid_proj_score_str[x_proj_mid] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-proj"+(i+1)+"'></td>";
                    }
                    x_proj_mid++;
                });
            }




            /*lab FINALS STRING INITIALIZATION*/
            if (response['lab_final_num'] > 0)
            {
                finals_cols += response['lab_final_num'];
                final_lab_cols += response['lab_final_num'] - 1;
                labCounter2 = response['lab_final_num'];
            }
            else 
            {
                finals_cols++;
                labCounter2 = 1;
            }
            
            for (var i = 0; i <  final_lab_cols-2; i++) 
            {
                final_lab_header_str += "<th class='text-center' id='table-header-final-lab"+(i+1)+"'>Lab "+(i+1)+" </th>";
            }
            
            if (response['lab_final_items'].length > 0)
            {
                for (var i = 0; i <  final_lab_cols-2; i++) 
                {
                    final_lab_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-lab"+(i+1)+"'>"+response['lab_final_items'][i]+"</td>";
                }
            }
            else
            {
                final_lab_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-lab1'></td>";
            }

            if (response['lab_final_score'].length > 0)
            {
                var x_lab_final = 0;
                response.lab_final_score.forEach(function(lab){
                    for (var i = 0; i <  final_lab_cols-2; i++) 
                    {
                        final_lab_score_str[x_lab_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-lab"+(i+1)+"'>"+lab[i]+"</td>";
                    }
                    x_lab_final++;
                });
            }
            else
            {
                var x_lab_final = 0;
                response.Student.forEach(function(lab){
                    for (var i = 0; i <  final_lab_cols-2; i++) 
                    {
                        final_lab_score_str[x_lab_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-lab"+(i+1)+"'></td>";
                    }
                    x_lab_final++;
                });
            }

            /*prac finalTERM STRING INITIALIZATION*/
            if (response['prac_final_num'] > 0)
            {
                finals_cols += response['prac_final_num'];
                final_prac_cols += response['prac_final_num'] - 1;
                pracCounter2 = response['prac_final_num'];
            }
            else 
            {
                finals_cols++;
                pracCounter2 = 1;
            }
            
            for (var i = 0; i <  final_prac_cols-2; i++) 
            {
                final_prac_header_str += "<th class='text-center' id='table-header-final-prac"+(i+1)+"'>Prac "+(i+1)+" </th>";
            }
            
            if (response['prac_final_items'].length > 0)
            {
                for (var i = 0; i <  final_prac_cols-2; i++) 
                {
                    final_prac_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-prac"+(i+1)+"'>"+response['prac_final_items'][i]+"</td>";
                }
            }
            else
            {
                final_prac_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-prac1'></td>";
            }

            if (response['prac_final_score'].length > 0)
            {
                var x_prac_final = 0;
                response.prac_final_score.forEach(function(prac){
                    for (var i = 0; i <  final_prac_cols-2; i++) 
                    {
                        final_prac_score_str[x_prac_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-prac"+(i+1)+"'>"+prac[i]+"</td>";
                    }
                    x_prac_final++;
                });
            }
            else
            {
                var x_prac_final = 0;
                response.Student.forEach(function(prac){
                    for (var i = 0; i <  final_prac_cols-2; i++) 
                    {
                        final_prac_score_str[x_prac_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-prac"+(i+1)+"'></td>";
                    }
                    x_prac_final++;
                });
            }

            /*proj finalTERM STRING INITIALIZATION*/
            if (response['proj_final_num'] > 0)
            {
                finals_cols += response['proj_final_num'];
                final_proj_cols += response['proj_final_num'] - 1;
                projCounter2 = response['proj_final_num'];
            }
            else 
            {
                finals_cols++;
                projCounter2 = 1;
            }
            
            for (var i = 0; i <  final_proj_cols-2; i++) 
            {
                final_proj_header_str += "<th class='text-center' id='table-header-final-proj"+(i+1)+"'>Proj "+(i+1)+" </th>";
            }
            
            if (response['proj_final_items'].length > 0)
            {
                for (var i = 0; i <  final_proj_cols-2; i++) 
                {
                    final_proj_items_str += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-proj"+(i+1)+"'>"+response['proj_final_items'][i]+"</td>";
                }
            }
            else
            {
                final_proj_items_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-proj1'></td>";
            }

            if (response['proj_final_score'].length > 0)
            {
                var x_proj_final = 0;
                response.proj_final_score.forEach(function(proj){
                    for (var i = 0; i <  final_proj_cols-2; i++) 
                    {
                        final_proj_score_str[x_proj_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-proj"+(i+1)+"'>"+proj[i]+"</td>";
                    }
                    x_proj_final++;
                });
            }
            else
            {
                var x_proj_final = 0;
                response.Student.forEach(function(proj){
                    for (var i = 0; i <  final_proj_cols-2; i++) 
                    {
                        final_proj_score_str[x_proj_final] += "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-score-final-proj"+(i+1)+"'></td>";
                    }
                    x_proj_final++;
                });
            }
            finalsCounter = response['lab_final_num'] + response['prac_final_num'] + response['proj_final_num'] - 3;
            midtermCounter = response['lab_mid_num'] + response['prac_mid_num'] + response['proj_mid_num'] - 3;
                // 'Lab table' please edit classes for responsive //
                table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3 id='table-h3'>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"<span><button class='btn btn-success ' id = 'table-save-button' type='submit'><i class='fa fa-check'></i> Save</button>\
                          <button class='btn btn-info ' id = 'table-upload-button' type='submit'><i class='fa fa-check'></i> Export</button></span></h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid'>\
                                <div class='table-responsive'  id='table-lab'>\
                                    <table class='table table-striped table-bordered' id='table-wrapper'>\
                                            <thead>\
                                                <tr>\
                                                    <th colspan='2' id='table-blank'></th>\
                                                    <th colspan='"+midterm_cols+"' id='table-midterm' class='text-center'>Midterms</th>\
                                                    <th colspan='"+finals_cols+"' id='table-finals' class='text-center'>Finals</th>\
                                                </tr>\
                                                <tr>\
                                                    <th class='text-center' id='table-student'>Student Number</th>\
                                                    <th class='text-center' id='table-name'>Name</th>\
                                                    <th colspan='"+mid_lab_cols+"' class='text-center' id='table-mid-lab'>LABORATORY EXERCISE/MACHINE PROBLEMS(45%)<a class='btn' id='table-lab1-button' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></a><a class='btn' id='table-mid-lab-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='"+mid_prac_cols+"' class='text-center' id='table-mid-prac'>PRACTICAL EXAM(25%)<a class='btn' id='table-prac1-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-mid-prac-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='"+mid_proj_cols+"' class='text-center' id='table-mid-proj'>PROJECT(30%)<a class='btn' id='table-proj1-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-mid-proj-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='2' class='text-center' id='border-bold'>MIDTERM GRADE</th>\
                                                    <th colspan='"+final_lab_cols+"' class='text-center' id='table-final-lab'>LABORATORY EXERCISE/MACHINE PROBLEMS(45%)<a class='btn' id='table-lab2-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-final-lab-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='"+final_prac_cols+"' class='text-center' id='table-final-prac'>PRACTICAL EXAM(25%)<a class='btn' id='table-prac2-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-final-prac-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='"+final_proj_cols+"' class='text-center' id='table-final-proj'>PROJECT(30%)<a class='btn' id='table-proj2-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-final-proj-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='2' class='text-center'>FINAL GRADE</th>\
                                                </tr>\
                                                <tr id='table-module'>\
                                                    <th colspan='2' id='table-blank2'></th>"+mid_lab_header_str+"\
                                                    <th class='text-center' id='table-header-mid-lab-total'>Total</th>\
                                                    <th class='text-center' id='table-header-mid-lab-rating'>45%</th>"+mid_prac_header_str+"\
                                                    <th class='text-center' id='table-header-mid-prac-total'>Total</th>\
                                                    <th class='text-center' id='table-header-mid-prac-rating'>25%</th>"+mid_proj_header_str+"\
                                                    <th class='text-center' id='table-header-mid-proj-total'>Total</th>\
                                                    <th class='text-center' id='table-header-mid-proj-rating'>30%</th>\
                                                    <th class='text-center' id='table-header-mid-overall-rating'>100%</th>\
                                                    <th id='table-header-mid-overall-grade' class='text-center'>Rating</th>"+final_lab_header_str+"\
                                                    <th class='text-center' id='table-header-final-lab-total'>Total</th>\
                                                    <th class='text-center' id='table-header-final-lab-rating'>45%</th>"+final_prac_header_str+"\
                                                    <th class='text-center' id='table-header-final-prac-total'>Total</th>\
                                                    <th class='text-center' id='table-header-final-prac-rating'>25%</th>"+final_proj_header_str+"\
                                                    <th class='text-center' id='table-header-final-proj-total'>Total</th>\
                                                    <th class='text-center' id='table-header-final-proj-rating'>30%</th>\
                                                    <th class='text-center' id='table-header-final-overall-rating'>100%</th>\
                                                    <th id='table-header-final-overall-grade' class='text-center'>Rating</th>\
                                                </tr>\
                                                </thead>\
                                                <tbody>\
                                                <tr id='table-items-wrapper'  class='table-student-num-name'>\
                                                    <td colspan='2' class='text-right' id='table-items'>Number of Items</td>"+mid_lab_items_str+"\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-lb-total'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-lb-rating'></td>"+mid_prac_items_str+"\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-prc-total'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-prc-rating'></td>"+mid_proj_items_str+"\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-prj-total'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-mid-prj-rating'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' id='border-bold' contenteditable='false'></td>"+final_lab_items_str+"\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-lb-total'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-lb-rating'></td>"+final_prac_items_str+"\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-prc-total'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-prc-rating'></td>"+final_proj_items_str+"\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-prj-total'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false' id='table-items-final-prj-rating'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                                    <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                                </tr>\
                                            </tbody>\
                                    </table>\
                                </div>\
                            </div>\
                        </div>\
                      </div>");
            var ctr_module = 0;
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr><td id='table-stud-num' class='border-left' name='stud-num'>"+stud.stud_num+"</td>\
                                            <td id='border-bold' name='stud-name'>"+stud.full_name+"</td>"+mid_lab_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>"+mid_prac_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>"+mid_proj_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' id='border-bold' contenteditable='false'></td>"+final_lab_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>"+final_prac_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>"+final_proj_score_str[ctr_module]+"\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td></tr>");
                ctr_module++;
            });
            
            table.append("<script type='text/javascript' src='/js/tooltipMarci.js'></script>\
                                <script type='text/javascript' src='/js/table.js'></script>");
            }
        }
        else if (response['table_type'] == "attendance_table")
        {
            // 'Attendance table' please edit classes for responsive //
            var midterm_cols = 2,final_cols = 2;
            var mid_att_header_str = "",mid_att_score_str = [];
            var final_att_header_str = "",final_att_score_str = [];

            /*lab MIDTERM STRING INITIALIZATION*/
            if (response['att_mid_num'] > 0)
            {
                midterm_cols += response['att_mid_num'];
                attCounter1 = response['att_mid_num'];
            }
            else 
            {
                midterm_cols++;
                attCounter1 = 1;
            }
            
            if (response['att_mid_items'].length > 0)
            {
                for (var i = 0; i <  midterm_cols-2; i++) 
                {
                    mid_att_header_str += "<th class='fixed-width' class='text-center' id='table-header-mid-att"+(i+1)+"' contenteditable='true'>"+response['att_mid_items'][i]+"</th>";
                }
            }
            else
            {
                mid_att_header_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-mid-att1'>Att 1</td>";
            }

            if (response['att_mid_score'].length > 0)
            {
                var x_att_mid = 0;
                response.att_mid_score.forEach(function(att){
                    for (var i = 0; i <  midterm_cols-2; i++) 
                    {
                        mid_att_score_str[x_att_mid] += "<td class='fixed-width' contenteditable='true' id='table-score-mid-att"+(i+1)+"'>"+att[i]+"</td>";
                    }
                    x_att_mid++;
                });
            }
            else
            {
                var x_att_mid = 0;
                response.Student.forEach(function(att){
                    for (var i = 0; i <  midterm_cols-2; i++) 
                    {
                        mid_att_score_str[x_att_mid] += "<td class='fixed-width' contenteditable='true' id='table-score-mid-att"+(i+1)+"'></td>";
                    }
                    x_att_mid++;
                });
            }

            /*lab Finals STRING INITIALIZATION*/
            if (response['att_mid_num'] > 0)
            {
                final_cols += response['att_mid_num'];
                attCounter2 = response['att_mid_num'];
            }
            else 
            {
                final_cols++;
                attCounter2 = 1;
            }
            
            if (response['att_final_items'].length > 0)
            {
                for (var i = 0; i <  final_cols-2; i++) 
                {
                    final_att_header_str += "<th class='fixed-width' class='text-center' id='table-header-final-att"+(i+1)+"' contenteditable='true'>"+response['att_final_items'][i]+"</th>";
                }
            }
            else
            {
                final_att_header_str = "<td data-container='body' data-html='true' data-placement='bottom' contenteditable='true' id='table-items-final-att1'>Att 1</td>";
            }

            if (response['att_final_score'].length > 0)
            {
                var x_att_final = 0;
                response.att_final_score.forEach(function(att){
                    for (var i = 0; i <  final_cols-2; i++) 
                    {
                        final_att_score_str[x_att_final] += "<td class='fixed-width' contenteditable='true' id='table-score-final-att"+(i+1)+"'>"+att[i]+"</td>";
                    }
                    x_att_final++;
                });
            }
            else
            {
                var x_att_final = 0;
                response.Student.forEach(function(att){
                    for (var i = 0; i <  final_cols-2; i++) 
                    {
                        final_att_score_str[x_att_final] += "<td class='fixed-width' contenteditable='true' id='table-score-final-att"+(i+1)+"'></td>";
                    }
                    x_att_final++;
                });
            }
            
            module_type = "attendance";
            table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3 id='table-h3'>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"<span><button class='btn btn-success ' id = 'table-save-button' type='submit'><i class='fa fa-check'></i> Save</button>\
                          <button class='btn btn-info ' id = 'table-upload-button' type='submit'><i class='fa fa-check'></i> Export</button></span></h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid'>\
                                    <div class='table-responsive'  id='table-attend'>\
                                        <table class='table table-striped table-bordered' id='table-wrapper'>\
                                            <thead>\
                                                <tr>\
                                                    <th colspan='2' id='border-bold' class='border-left'></th>\
                                                    <th colspan='"+midterm_cols+"' class='text-center' id='table-mid-att'>MIDTERMS<a class='btn' id='table-att1-button' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></a><a class='btn' id='table-mid-att-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='"+final_cols+"' class='text-center' id='table-final-att'>FINALS<a class='btn' id='table-att2-button' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-final-att-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                </tr>\
                                                <tr id='table-module'>\
                                                    <th class='text-center border-left'>Student Number</th>\
                                                    <th class='text-center' id='border-bold'>Name</th>"+mid_att_header_str+"\
                                                    <th class='text-center'>Total</th>\
                                                    <th class='text-center'>10%</th>"+final_att_header_str+"\
                                                    <th class='text-center'>Total</th>\
                                                    <th class='text-center'>10%</th>\
                                                </tr>\
                                            </thead>\
                                            <tbody>\
                                            </tbody>\
                                        </table>\
                                    </div>\
                                </div>\
                        </div>\
                      </div>");
            var ctr_module = 0;
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr><td id='table-stud-num' class='border-left' name='stud-num'>"+stud.stud_num+"</td>\
                                            <td id='border-bold' name='stud-name'>"+stud.full_name+"</td>"+mid_att_score_str[ctr_module]+"\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td>"+final_att_score_str[ctr_module]+"\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td></tr>");
            ctr_module++;
                });
            table.append("<script type='text/javascript' src='/js/table.js'></script>");
        }
        else if (response['table_type'] == "final_table")
        {
            // 'Final table' please edit classes for responsive //
            table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3 id='table-h3'>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"</h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid'>\
                                    <div class='table-responsive' id='table-final'>\
                                        <table class='table table-striped table-bordered' id='table-wrapper'>\
                                                <tr>\
                                                    <tr>\
                                                        <th class='text-center' id='table-final-num'>Student Number</th>\
                                                        <th class='text-center' id='table-final-name'>Name</th>\
                                                        <th class='text-center' id='table-final-mid'>Midterm Grade</th>\
                                                        <th class='text-center' id='table-final-final'>Final Grade</th>\
                                                        <th class='text-center' id='table-final-grade'>Grade</th>\
                                                    </tr>\
                                                </tr>\
                                        </table>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>");
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr><td id='border-left' name='stud-name'>"+stud.full_name+"</td>\
                                            <td id='border-bold' name='stud-num'>"+stud.stud_num+"</td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td>\
                                            <td data-container='body' data-html='true' data-placement='bottom' contenteditable='false'></td></tr>");
                });
        }

        $("ul>li[name='sheet_submenu']").html("<a id='get_class_table/main_table/"+response["Class"]["ClassId"]+"' class='accordion-section-title hideOverflow'>Main Grading Sheet<span class='arrow-left'></span></a>\
                                                <a id='get_class_table/final_table/"+response["Class"]["ClassId"]+"'class='accordion-section-title hideOverflow'>Final Grading Sheet<span class='arrow-left'></span></a>");

        if (response['Class']['ModuleType'] == "Lec")
        {
            $("ul>li[name='sheet_submenu']").prepend("<a id='get_class_table/attendance_table/"+response["Class"]["ClassId"]+"' class='accordion-section-title hideOverflow'>Attendance Sheet<span class='arrow-left'></span></a>");
          $("ul>li[name='module_submenu']").html("<a class='accordion-section-title hideOverflow'>Attendance - "+response.Module.Attendance+"%<span class='arrow-left'></span></a>\
                                                  <a class='accordion-section-title hideOverflow'>Class Standing - "+response.Module.ClassStanding+"%<span class='arrow-left'></span></a>\
                                                  <a class='accordion-section-title hideOverflow'>Quizzes/Long Exam - "+response.Module.QuizzesLExam+"%<span class='arrow-left'></span></a>\
                                                  <a class='accordion-section-title hideOverflow'>Major Exam - "+response.Module.MajorExam+"%<span class='arrow-left'></span></a>");
        }
        else
        {
          $("ul>li[name='module_submenu']").html("<a class='accordion-section-title hideOverflow'>Practical Exam - "+response.Module.PracExam+"%<span class='arrow-left'></span></a>\
                                                  <a class='accordion-section-title hideOverflow'>Project - "+response.Module.Project+"%<span class='arrow-left'></span></a>\
                                                  <a class='accordion-section-title hideOverflow'>Lab/Machine Exercises - "+response.Module.Lab_MachineEx+"%<span class='arrow-left'></span></a>");
        }
      }
      else
      {
        console.log(link);
      }
    })
  return false;
}

function getModuleCounter(label,term,type)
{
    if (type == "name")
    {
        if (term == "mid")
        {
            if (label == "Lab") return "labCounter1";
            else if (label == "Prac") return "pracCounter1";
            else if (label == "Proj") return "projCounter1";
            else if (label == "Assign") return "assignCounter1";
            else if (label == "Sw") return "swCounter1";
            else if (label == "Ex") return "exCounter1";
            else if (label == "Rec") return "recCounter1";
            else if (label == "class-standing") return "csCounter1";
            else if (label == "Quiz") return "quizCounter1";
            else if (label == "Le") return "leCounter1";
            else if (label == "quiz-le") return "qlCounter1";
            else if (label == "Att") return "attCounter1";
        } 
        else if (term == "final")
        {
            if (label == "Lab") return "labCounter2";
            else if (label == "Prac") return "pracCounter2";
            else if (label == "Proj") return "projCounter2";
            else if (label == "Assign") return "assignCounter2";
            else if (label == "Sw") return "swCounter2";
            else if (label == "Ex") return "exCounter2";
            else if (label == "Rec") return "recCounter2";
            else if (label == "class-standing") return "csCounter2";
            else if (label == "Quiz") return "quizCounter2";
            else if (label == "Le") return "leCounter2";
            else if (label == "quiz-le") return "qlCounter2";
            else if (label == "Att") return "attCounter2";
        }
    }
    else 
    {
        if (term == "mid")
        {
            if (label == "Lab") return labCounter1;
            else if (label == "Prac") return pracCounter1;
            else if (label == "Proj") return projCounter1;
            else if (label == "Assign") return assignCounter1;
            else if (label == "Sw") return swCounter1;
            else if (label == "Ex") return exCounter1;
            else if (label == "Rec") return recCounter1;
            else if (label == "class-standing") return csCounter1;
            else if (label == "Quiz") return quizCounter1;
            else if (label == "Le") return leCounter1;
            else if (label == "quiz-le") return qlCounter1;
            else if (label == "Att") return attCounter1;
        } 
        else if (term == "final")
        {
            if (label == "Lab") return labCounter2;
            else if (label == "Prac") return pracCounter2;
            else if (label == "Proj") return projCounter2;
            else if (label == "Assign") return assignCounter2;
            else if (label == "Sw") return swCounter2;
            else if (label == "Ex") return exCounter2;
            else if (label == "Rec") return recCounter2;
            else if (label == "class-standing") return csCounter2;
            else if (label == "Quiz") return quizCounter2;
            else if (label == "Le") return leCounter2;
            else if (label == "quiz-le") return qlCounter2;
            else if (label == "Att") return attCounter2;
        }
    }
    
}

function setModuleCounter(label,newCounter)
{
    if (label == "labCounter1") labCounter1 = newCounter;
    else if (label == "labCounter2") labCounter2 = newCounter;
    else if (label == "pracCounter1") pracCounter1 = newCounter;
    else if (label == "pracCounter2") pracCounter2 = newCounter;
    else if (label == "projCounter1") projCounter1 = newCounter;
    else if (label == "projCounter2") projCounter2 = newCounter;
    else if (label == "csCounter1") csCounter1 = newCounter;
    else if (label == "csCounter2") csCounter2 = newCounter;
    else if (label == "assignCounter1") assignCounter1 = newCounter;
    else if (label == "assignCounter2") assignCounter2 = newCounter;
    else if (label == "swCounter1") swCounter1 = newCounter;
    else if (label == "swCounter2") swCounter2 = newCounter;
    else if (label == "exCounter1") exCounter1 = newCounter;
    else if (label == "exCounter2") exCounter2 = newCounter;
    else if (label == "recCounter1") recCounter1 = newCounter;
    else if (label == "recCounter2") recCounter2 = newCounter;
    else if (label == "quizCounter1") quizCounter1 = newCounter;
    else if (label == "quizCounter2") quizCounter2 = newCounter;
    else if (label == "leCounter1") leCounter1 = newCounter;
    else if (label == "leCounter2") leCounter2 = newCounter;
    else if (label == "qlCounter1") qlCounter1 = newCounter;
    else if (label == "qlCounter2") qlCounter2 = newCounter;
    else if (label == "attCounter1") attCounter1 = newCounter;
    else if (label == "attCounter2") attCounter2 = newCounter;
}

function get_col_pos(label,term,type)
{
    if (type == "module_num")
    {
        if (term == "midterm")
        {
            if (label == "Assign") return "sw1-score-col";
            else if (label == "Sw") return "ex1-score-col";
            else if (label == "Ex") return "rec1-score-col";
            else if(label == "Rec") return "cs1-total-col";
            else if(label == "Quiz") return "le1-score-col";
            else if(label == "Le") return "ql1-total-col";
        } 
        else if (term == "finals")
        {
            if (label == "Assign") return "sw2-score-col";
            else if (label == "Sw") return "ex2-score-col";
            else if (label == "Ex") return "rec2-score-col";
            else if(label == "Rec") return "cs2-total-col";
            else if(label == "Quiz") return "le2-score-col";
            else if(label == "Le") return "ql2-total-col";
        }
    }
    else if (type == "module_items")
    {
        if (term == "midterm")
        {
            if (label == "Assign") return "table-items-sw1";
            else if (label == "Sw") return "table-items-ex1";
            else if (label == "Ex") return "table-items-rec1";
            else if(label == "Rec") return "table-items-cs1";
            else if(label == "Quiz") return "table-items-le1";
            else if(label == "Le") return "table-items-ql1";
        } 
        else if (term == "finals")
        {
            if (label == "Assign") return "table-items-sw2";
            else if (label == "Sw") return "table-items-ex2";
            else if (label == "Ex") return "table-items-rec2";
            else if(label == "Rec") return "table-items-cs2";
            else if(label == "Quiz") return "table-items-le2";
            else if(label == "Le") return "table-items-ql2";
        }
    }
}

function get_module_type()
{
    return module_type;
}

function get_class_id()
{
    return classId;
}

function get_class_block()
{
    return classBlock;
}

function get_class_subj()
{
    return classSubj;
}

function get_class_sched()
{
    return classSched;
}
var modal = document.getElementById('table-alert-modal');
// Get the <span> element that closes the modal
var cancel = document.getElementById("table-cancel-btn");
var yes = document.getElementById("table-yes-btn");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* ADD BUTTONS ALL SHEETS*/
function add_column(parent)
{
    var parentId = parent.attr('id')    //get parent id
    var parentTag = $("tr th#"+parentId) // get the parent tag or th of moodule

    var array = parentId.split('-');//{table,mid,assign}
    var module = array[2];
    var term = array[1]; //get the semester using id
    var label = module.charAt(0).toUpperCase() + module.slice(1);
    var header = array[0]+"-header-"+array[1]+"-"+module+getModuleCounter(label,term,"val");
    var items = array[0]+"-items-"+array[1]+"-"+module+getModuleCounter(label,term,"val"); // for getting items id
    var score = array[0]+"-score-"+array[1]+"-"+module+getModuleCounter(label,term,"val");
    
    var term_tag,label_num,newHeader,newItems,newScore;

    if (type_of_table == "attendance_table")
    {
        if ($(parentTag).attr('colspan') < 17)
        {
            parentTag.each(function(){
                var counter = getModuleCounter(label,term,"val");
                counter++;
                label_num = counter;
                var span=3+(counter-1);
                $(this).attr('colspan',span);
                setModuleCounter(getModuleCounter(label,term,"name"),counter);
                newHeader = array[0]+"-header-"+array[1]+"-"+module+counter;
                newScore = array[0]+"-score-"+array[1]+"-"+module+counter;
            });

            $("#"+parentId+"-button-del").css('display', 'inline-block');
            $("tr th#"+header).after($("<th style='text-align:center' id='"+newHeader+"' contenteditable='true'>"+ label +" "+ label_num + "</th>"));
            $("tr td#"+score).after($("<td data-container='body' data-html='true' data-placement='bottom'  id='"+newScore+"' contenteditable='true'></td>"));
        }
        else alert("Only 15 column is allowed on this table.");
        return;
    }

    if (module_type == "Lab")
    {
        if ($(parentTag).attr('colspan') != 12)
        {
            parentTag.each(function(){
                var counter = getModuleCounter(label,term,"val");
                counter++;
                var span=3+(counter-1);
                label_num = counter;
                $(this).attr('colspan',span);
                setModuleCounter(getModuleCounter(label,term,"name"),counter);
                newHeader = array[0]+"-header-"+array[1]+"-"+module+counter;
                newItems = array[0]+"-items-"+array[1]+"-"+module+counter;
                newScore = array[0]+"-score-"+array[1]+"-"+module+counter;
            });

            if (term == "mid")
            {
                term_tag = $('tr th#table-midterm');
                term_tag.each(function(){
                    midtermCounter++;
                    var term_span=11+midtermCounter;
                    $(this).attr('colspan',term_span);
                });
            }
            else if (term == "final")
            {
                term_tag = $('tr th#table-finals');
                term_tag.each(function(){
                    finalsCounter++;
                    var term_span=11+finalsCounter;
                    $(this).attr('colspan',term_span);
                });
            }
            console.log(midtermCounter);
            $("#"+parentId+"-button-del").css('display', 'inline-block');
            $("tr th#"+header).after($("<th style='text-align:center' id='"+newHeader+"'>"+ label +" "+ label_num + "</th>"));
            $("tr td#"+items).after($("<td data-container='body' data-html='true' data-placement='bottom' id='"+newItems+"' contenteditable='true'></td>"));
            $("tr td#"+score).after($("<td data-container='body' data-html='true' data-placement='bottom' id='"+newScore+"' contenteditable='true'></td>"));
        }
        else alert("Only 10 column is allowed on this table.");
    }

    else if (module_type == "Lec")
    {
        var upper_module,mod_id;
        if ($(parentTag).attr('colspan') != 10)
        {
            parentTag.each(function(){
                var counter = getModuleCounter(label,term,"val");
                counter++;
                var span=1+(counter-1);
                label_num = counter;
                $(this).attr('colspan',span);
                // $(this).val(counter);
                setModuleCounter(getModuleCounter(label,term,"name"),counter);
                newHeader = array[0]+"-header-"+array[1]+"-"+module+counter;
                newItems = array[0]+"-items-"+array[1]+"-"+module+counter;
                newScore = array[0]+"-score-"+array[1]+"-"+module+counter;
            });

            
            if (term == "mid")
            {
                var i;//colspan
                term_tag = $('tr>th#table-midterm');
                if (label == "Assign" || label == "Sw" || label == "Ex" || label == "Rec") 
                {
                    upper_module = $('tr th#table-mid-class-standing');
                    i = 6; 
                }
                else if (label == "Quiz" || label == "Le") 
                {
                    upper_module = $('tr th#table-mid-quiz-le');
                    i = 4;
                }
                mod_id = upper_module.attr('id');
                var arr = mod_id.split('-');
                var label2 = arr[2]+"-"+arr[3]
                upper_module.each(function(){
                    var counter2 = getModuleCounter(label2,term,"val");
                    counter2++;
                    var span2=i+counter2;
                    $(this).attr('colspan',span2);
                    setModuleCounter(getModuleCounter(label2,term,"name"),counter2);
                });
                term_tag.each(function(){
                    midtermCounter++;
                    var term_span=15+midtermCounter;
                    $(this).attr('colspan',term_span);
                });
            }
            else if (term == "final")
            {
                var i;
                term_tag = $('tr>th#table-finals');
                if (label == "Assign" || label == "Sw" || label == "Ex" || label == "Rec") 
                {
                    upper_module = $('tr th#table-final-class-standing');
                    i = 6;
                }
                else if (label == "Quiz" || label == "Le") 
                {
                    upper_module = $('tr th#table-final-quiz-le');
                    i = 4;
                }
                mod_id = upper_module.attr('id');
                var arr = mod_id.split('-');
                var label2 = arr[2]+"-"+arr[3]
                upper_module.each(function(){
                    var counter2 = getModuleCounter(label2,term,"val");
                    counter2++;
                    var span2=i+counter2;
                    $(this).attr('colspan',span2);
                    setModuleCounter(getModuleCounter(label2,term,"name"),counter2);
                });
                term_tag.each(function(){
                    finalsCounter++;
                    var term_span=15+finalsCounter;
                    $(this).attr('colspan',term_span);
                });
            }

            $("#"+parentId+"-button-del").css('display', 'inline-block');
            $("tr th#"+header).after($("<th style='text-align:center' id='"+newHeader+"'>"+ label +" "+ label_num + "</th>"));
            $("tr td#"+items).after($("<td data-container='body' data-html='true' data-placement='bottom' id='"+newItems+"' contenteditable='true'></td>"));
            $("tr td#"+score).after($("<td data-container='body' data-html='true' data-placement='bottom' id='"+newScore+"' contenteditable='true'></td>"));
        }
        else alert("Only 10 column is allowed on this table.");
    }
    //---to reinstantiate tooltip on added columns---//
    addTooltip();
    // $('table td').each(function(){
    //     $(this).addClass("current-test");
    //     $parent = $(this).parent();
    //     $parent.addClass("current-test-parent");
    //     $studno = $parent.find('td:eq(0)').html();
    //     $studname = $parent.find('td:eq(1)').html();
    //     $index = $(".current-test-parent td").index($(".current-test"));
    //     if($(this).is('[id*="table-items"]')){
    //         $head = $("#table-module th:eq("+($index)+")").html();
    //     //console.log($("#table-module th:eq("+($index-1)+")").html());
    //     }else{
    //         $head = $("#table-module th:eq("+($index-1)+")").html();
    //     }
    //     $(this).attr({
    //         "data-toggle":"tooltip",
    //         "data-container":"body",
    //         "data-html":"true",
    //         "data-placement":"bottom",
    //         "title":$head +"<br>"+$studno+"<br>"+$studname
    //     })
    //     $(this).removeClass("current-test");
    //     $parent.removeClass("current-test-parent");
    //     // 
    // });
    // $('[data-toggle="tooltip"]').tooltip();
}

/*DEL BUTTON*/
function del_column(parent)
{
    modal.style.display = "block";
    yes.onclick = function() 
    {
        modal.style.display = "none";
        var parentId = parent.attr('id')    //get parent id
        var parentTag = $("tr th#"+parentId) // get the parent tag or th of moodule

        var array = parentId.split('-');//{table,mid,assign}
        var module = array[2];
        var term = array[1]; //get the semester using id
        var label = module.charAt(0).toUpperCase() + module.slice(1);
        var header = array[0]+"-header-"+array[1]+"-"+module+getModuleCounter(label,term,"val");
        var items = array[0]+"-items-"+array[1]+"-"+module+getModuleCounter(label,term,"val"); // for getting items id
        var score = array[0]+"-score-"+array[1]+"-"+module+getModuleCounter(label,term,"val");

        var term_tag,newHeader,newItems,newScore;
        if (term == 'mid') term_tag = $('#table-midterm');
        else term_tag = $('#table-finals');

        if (type_of_table == "attendance_table")
        {
            if ($(parentTag).attr('colspan') > 3)
            {
                $(parentTag).attr('colspan',$(parentTag).attr('colspan')-1); //subtract one colspan to the module header
                var newCount = getModuleCounter(label,term,"val") - 1;
                setModuleCounter(getModuleCounter(label,term,"name"),newCount);

                $("tr th#"+header).remove();  //remove module names column e.g. lab3,quiz1 etc.
                $("tr td#"+score).remove(); //remove students column of that module
            }
            if ($(parentTag).attr('colspan') <= 3){
                $("#"+parentId+"-button-del").css('display', 'none');         
            }
            return;
        }

        if (module_type == "Lab")
        {
            if ($(parentTag).attr('colspan') > 3)
            {
                $(parentTag).attr('colspan',$(parentTag).attr('colspan')-1); //subtract one colspan to the module header
                var newCount = getModuleCounter(label,term,"val") - 1;
                setModuleCounter(getModuleCounter(label,term,"name"),newCount);

                $(term_tag).attr('colspan',$(term_tag).attr('colspan')-1);  //subtract one colspan to the midterm or finals header
                if (term == "midterm") midtermCounter--;
                else if (term == "finals") finalsCounter--;

                $("tr th#"+header).remove();  //remove module names column e.g. lab3,quiz1 etc.
                $("tr td#"+items).remove();
                $("tr td#"+score).remove(); //remove students column of that module
            }
            if ($(parentTag).attr('colspan') <= 3){
                $("#"+parentId+"-button-del").css('display', 'none');         
            }
        }
        else if (module_type == "Lec")
        {
            var upper_module,mod_id;
            if ($(parentTag).attr('colspan') > 1)
            {
                $(parentTag).attr('colspan',$(parentTag).attr('colspan')-1);
                var newCount = getModuleCounter(label,term,"val") - 1;
                setModuleCounter(getModuleCounter(label,term,"name"),newCount);

                if (term == "mid")
                {
                    if (label == "Assign" || label == "Sw" || label == "Ex" || label == "Rec") upper_module = $('#table-mid-class-standing');
                    else if (label == "Quiz" || label == "Le") upper_module = $('#table-mid-quiz-le');
                    mod_id = upper_module.attr('id');
                    var arr = mod_id.split('-');
                    var label2 = arr[2]+"-"+arr[3];
                    upper_module.attr('colspan',upper_module.attr('colspan')-1);
                    var newCount2 = getModuleCounter(label2,term,"val") - 1;
                    setModuleCounter(getModuleCounter(label2,term,"name"),newCount2);
                    term_tag.attr('colspan',term_tag.attr('colspan')-1);
                    midtermCounter--;
                }
                else if (term == "final")
                {
                    if (label == "Assign" || label == "Sw" || label == "Ex" || label == "Rec") upper_module = $('#table-final-class-standing');
                    else if (label == "Quiz" || label == "Le") upper_module = $('#table-final-quiz-le');
                    mod_id = upper_module.attr('id');
                    var arr = mod_id.split('-');
                    var label2 = arr[2]+"-"+arr[3];
                    upper_module.attr('colspan',upper_module.attr('colspan')-1);
                    var newCount2 = getModuleCounter(label2,term,"val") - 1;
                    setModuleCounter(getModuleCounter(label2,term,"name"),newCount2);
                    term_tag.attr('colspan',term_tag.attr('colspan')-1);
                    finalsCounter--;
                }

                $("tr th#"+header).remove();  //remove module names column e.g. lab3,quiz1 etc.
                $("tr td#"+items).remove(); //remove no of items
                $("tr td#"+score).remove(); //remove students column of that module

            }
            if ($(parentTag).attr('colspan') <= 1){
                $("#"+parentId+"-button-del").css('display', 'none');         
            }
        }
    }
    cancel.onclick = function() {
        modal.style.display = "none";
    }
}
