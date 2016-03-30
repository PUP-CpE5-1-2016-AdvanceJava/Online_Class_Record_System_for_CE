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
        //--clear sidebars content ang table content first to avoid bugs--//
        $("ul>li[name='sheet_submenu']").empty();
        $("ul>li[name='module_submenu']").empty();
        $('div#table-content-wrapper').empty();
        $('tbody#stud_table').empty();
        /*INITIALIZE COUNTERS FOR TABLE*/
        //--inital values will be given by database e.g. if have Lab1-Lab3 labcounter=2--//
        module_type;
        midtermCounter=0;
        finalsCounter=0;
        //---variables for lab table---//
        labCounter1=0;
        labCounter2=0;
        pracCounter1=0;
        pracCounter2=0;
        projCounter1=0;
        projCounter2=0;
        //---variables for lec table---//
        assignCounter1=0;
        assignCounter2=0;
        swCounter1=0;
        swCounter2=0;
        exCounter1=0;
        exCounter2=0;
        recCounter1=0;
        recCounter2=0;
        module_type = response['Class']['ModuleType'];
        type_of_table = response['table_type'];
        var table = $('div#table-content-wrapper');
        table.empty();
        if (response['table_type'] == "main_table")
        {
            if (response['Class']['ModuleType'] == "Lec")
            {
                // 'Lecture table' please edit classes for responsive //
                table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"</h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid'>\
                                <div class='table-responsive' id='table-lec'>\
                                    <table class='table table-striped table-bordered' id='table-wrapper'>\
                                        <thead>\
                                            <tr>\
                                                <th colspan='2' id='table-blank'></th>\
                                                <th colspan='15' class='text-center' id='table-midterm'>Midterm</th>\
                                                <th colspan='15' class='text-center' id='table-finals'>Finals</th>\
                                            </tr>\
                                            <tr>\
                                                <th class='text-center' id='table-student'>Student Number</th>\
                                                <th class='text-center' id='table-name'>Name</th>\
                                                <th rowspan='2' class='text-center' id='attendance'>ATTENDANCE</th>\
                                                <th colspan='6' class='text-center' id='table-class-standing1'>CLASS STANDING (20%)</th>\
                                                <th colspan='4' class='text-center' id='table-quiz-le1'>QUIZZES/LONG EXAM (30%)</th>\
                                                <th colspan='2' class='text-center'>MIDTERM EXAM (40%)</th>\
                                                <th colspan='2' class='text-center' id='border-bold'>MIDTERM GRADE</th>\
                                                <th rowspan='2' id='attendance'>ATTENDANCE</th>\
                                                <th colspan='6' class='text-center' id='table-class-standing2'>CLASS STANDING (20%)</th>\
                                                <th colspan='4' class='text-center' id='table-quiz-le2'>QUIZZES/LONG EXAM (30%)</th>\
                                                <th colspan='2' class='text-center'>FINAL EXAM (40%)</th>\
                                                <th colspan='2' class='text-center'>FINAL GRADE</th>\
                                            </tr>\
                                            <tr>\
                                                <th class='text-center' colspan='2' id='table-blank2'></th>\
                                                <th class='text-center' id='table-assign1'>ASSIGNMENT<a class='btn' id='add-col-assign1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-assign1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='table-sw1'>SEATWORK<a class='btn' id='add-col-sw1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-sw1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='table-ex1'>EXERCISE<a class='btn' id='add-col-ex1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-ex1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='table-rec1'>RECITATION<a class='btn' id='add-col-rec1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-rec1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th class='text-center' id='table-quiz1'>QUIZ<a class='btn' id='add-col-quiz1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-quiz1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='table-le1'>LONG EXAM<a class='btn' id='add-col-le1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-le1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th rowspan='2' class='text-center' id='midterm'>SCORE</th>\
                                                <th rowspan='2' class='text-center' id='midterm'>40%</th>\
                                                <th rowspan='2' class='text-center' id='midterm'>100%</th>\
                                                <th rowspan='2' class='text-center' id='border-bold'>RATING</th>\
                                                <th class='text-center' id='table-assign2'>ASSIGNMENT<a class='btn' id='add-col-assign1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-assign2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='table-sw2'>SEATWORK<a class='btn' id='add-col-sw1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-sw2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='table-ex2'>EXERCISE<a class='btn' id='add-col-ex1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-ex2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='table-rec2'>RECITATION<a class='btn' id='add-col-rec1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-rec2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th class='text-center' id='table-quiz2'>QUIZ<a class='btn' id='add-col-quiz2' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-quiz2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='table-le2'>LONG EXAM<a class='btn' id='add-col-le2' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-le2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th rowspan='2' class='text-center' id='final'>SCORE</th>\
                                                <th rowspan='2' class='text-center' id='final'>40%</th>\
                                                <th rowspan='2' class='text-center' id='final'>100%</th>\
                                                <th rowspan='2' class='text-center' id='final'>RATING</th>\
                                            </tr>\
                                            <tr id='table-module'>\
                                                <th colspan='2' id='table-blank2'></th>\
                                                <th class='text-center'>10%</th>\
                                                <th class='text-center' id='assign1-score-col'>Assign 1 </th>\
                                                <th class='text-center' id='sw1-score-col'>Sw 1</th>\
                                                <th class='text-center' id='ex1-score-col'>Ex 1</th>\
                                                <th class='text-center' id='rec1-score-col'>Rec 1</th>\
                                                <th class='text-center' id='cs1-total-col'>Total</th>\
                                                <th class='text-center'>20%</th>\
                                                <th class='text-center' id='quiz1-score-col'>Quiz 1</th>\
                                                <th class='text-center' id='le1-score-col'>Le 1</th>\
                                                <th class='text-center' id='ql1-total-col'>Total</th>\
                                                <th class='text-center'>30%</th>\
                                                <th class='text-center'>10%</th>\
                                                <th class='text-center' id='assign-score-col'>Assign 1 </th>\
                                                <th class='text-center' id='sw2-score-col'>Sw 1</th>\
                                                <th class='text-center' id='ex2-score-col'>Ex 1</th>\
                                                <th class='text-center' id='rec2-score-col'>Rec 1</th>\
                                                <th class='text-center' id='cs2-total-col'>Total</th>\
                                                <th class='text-center'>20%</th>\
                                                <th class='text-center' id='quiz1-score-col'>Quiz 1</th>\
                                                <th class='text-center' id='le2-score-col'>Le 1</th>\
                                                <th class='text-center' id='ql2-total-col'>Total</th>\
                                                <th class='text-center'>30%</th>\
                                            </tr>\
                                        </thead>\
                                        <tbody>\
                                            <tr>\
                                                <td colspan='2' class='text-right' id='table-items'>Number of Items</td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true' id='table-items-assign1'></td>\
                                                <td contenteditable='true' id='table-items-sw1'></td>\
                                                <td contenteditable='true' id='table-items-ex1'></td>\
                                                <td contenteditable='true' id='table-items-rec1'></td>\
                                                <td contenteditable='false' id='table-items-cs1'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true' id='table-items-quiz1'></td>\
                                                <td contenteditable='true' id='table-items-le1'></td>\
                                                <td contenteditable='false' id='table-items-ql1'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false' id='border-bold'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true' id='table-items-assign2'></td>\
                                                <td contenteditable='true' id='table-items-sw2'></td>\
                                                <td contenteditable='true' id='table-items-ex2'></td>\
                                                <td contenteditable='true' id='table-items-rec2'></td>\
                                                <td contenteditable='false' id='table-items-cs2'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true' id='table-items-quiz2'></td>\
                                                <td contenteditable='true' id='table-items-le2'></td>\
                                                <td contenteditable='false' id='table-items-ql2'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false'></td>\
                                            </tr>\
                                        </tbody>\
                                    </table>\
                                </div>\
                                <script type='text/javascript' src='/js/tooltip_lec.js'></script>\
                            </div>\
                        </div>\
                      </div>");
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr><td class='table-student-number' id='border-left' name='stud-num'>"+stud.stud_num+"</td>\
                                            <td class='table-student-name' id='border-bold' name='stud-name'>"+stud.full_name+"</td>\
                                            <td class='table-student-attendance-mid' contenteditable='false'></td>\
                                            <td class='table-student-assign-mid' contenteditable='true'></td>\
                                            <td class='table-student-seatwork-mid' contenteditable='true' id='table-name-assign1'></td>\
                                            <td class='table-student-exercise-mid' contenteditable='true' id='table-name-sw1'></td>\
                                            <td class='table-student-recitation-mid' contenteditable='true' id='table-name-ex1'></td>\
                                            <td class='table-student-standing-total-mid' contenteditable='false' id='table-name-rec1'></td>\
                                            <td class='table-student-standing-percent-mid' contenteditable='false'></td>\
                                            <td class='table-student-quiz-mid' contenteditable='true'></td>\
                                            <td class='table-student-longExam-mid' contenteditable='true' id='table-name-quiz1'></td>\
                                            <td class='table-student-quiz-longExam-total-mid' contenteditable='false' id='table-name-le1'></td>\
                                            <td class='table-student-quiz-longExam-percent-mid' contenteditable='false'></td>\
                                            <td class='table-student-midterm-score' contenteditable='true'></td>\
                                            <td class='table-student-midterm-percent' contenteditable='false'></td>\
                                            <td class='table-student-midterm-grade' contenteditable='false'></td>\
                                            <td class='table-student-midterm-rating' contenteditable='false' id='border-bold'></td>\
                                            <td class='table-student-attendance-finals' contenteditable='false'></td>\
                                            <td class='table-student-assign-finals' contenteditable='true'></td>\
                                            <td class='table-student-seatwork-finals' contenteditable='true' id='table-name-assign2'></td>\
                                            <td class='table-student-exercise-finals' contenteditable='true' id='table-name-sw2'></td>\
                                            <td class='table-student-recitation-finals' contenteditable='true' id='table-name-ex2'></td>\
                                            <td class='table-student-standing-total-finals' contenteditable='false' id='table-name-rec2'></td>\
                                            <td class='table-student-standing-percent-finals' contenteditable='false'></td>\
                                            <td class='table-student-quiz-finals' contenteditable='true'></td>\
                                            <td class='table-student-longExam-finals' contenteditable='true' id='table-name-quiz2'></td>\
                                            <td class='table-student-quiz-longExam-total-finals' contenteditable='false' id='table-name-le2'></td>\
                                            <td class='table-student-quiz-longExam-percent-finals' contenteditable='false'></td>\
                                            <td class='table-student-finals-score' contenteditable='true'></td>\
                                            <td class='table-student-finals-percent' contenteditable='false'></td>\
                                            <td class='table-student-finals-grade' contenteditable='false'></td>\
                                            <td class='table-student-finals-rating' contenteditable='false'></td></tr>");
                });
            $('div#include_tooltip').append("<script type='text/javascript' src='/js/tooltip_lec.js'></script>");
            }
            else
            {
                // 'Lab table' please edit classes for responsive //
                table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"</h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid' id='outer'>\
                                <div class='table-responsive' id='table-lab'>\
                                    <table class='table table-striped table-bordered' id='table-wrapper'>\
                                        <input type='hidden'></input>\
                                            <thead>\
                                                <tr>\
                                                    <th colspan='2' id='table-blank'></th>\
                                                    <th colspan='11' id='table-midterm' class='text-center'>Midterms</th>\
                                                    <th colspan='11' id='table-finals' class='text-center'>Finals</th>\
                                                </tr>\
                                                <tr>\
                                                    <th class='text-center' id='table-student'>Student Number</th>\
                                                    <th class='text-center' id='table-name'>Name</th>\
                                                    <th colspan='3' class='text-center' id='table-lab1'>LABORATORY EXERCISE/MACHINE PROBLEMS(45%)<a class='btn' id='table-lab1-button' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></a><a class='btn' id='table-lab1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-prac1'>PRACTICAL EXAM(25%)<a class='btn' id='table-prac1-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-prac1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-proj1'>PROJECT(30%)<a class='btn' id='table-proj1-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-proj1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='2' class='text-center' id='border-bold'>MIDTERM GRADE</th>\
                                                    <th colspan='3' class='text-center' id='table-lab2'>LABORATORY EXERCISE/MACHINE PROBLEMS(45%)<a class='btn' id='table-lab2-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-lab2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-prac2'>PRACTICAL EXAM(25%)<a class='btn' id='table-prac2-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-prac2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-proj2'>PROJECT(30%)<a class='btn' id='table-proj2-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-proj2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='2' class='text-center'>FINAL GRADE</th>\
                                                </tr>\
                                                <tr id='table-module'>\
                                                    <th colspan='2' id='table-blank2'></th>\
                                                    <th class='text-center'>Lab 1</th>\
                                                    <th class='text-center' id='table-lab1-total'>Total</th>\
                                                    <th class='text-center'>45%</th>\
                                                    <th class='text-center'>Prac 1</th>\
                                                    <th class='text-center' id='table-prac1-total'>Total</th>\
                                                    <th class='text-center'>25%</th>\
                                                    <th class='text-center'>Proj 1</th>\
                                                    <th class='text-center' id='table-proj1-total'>Total</th>\
                                                    <th class='text-center'>30%</th>\
                                                    <th class='text-center'>100%</th>\
                                                    <th id='border-bold' class='text-center'>Rating</th>\
                                                    <th class='text-center'>Lab 1</th>\
                                                    <th class='text-center' id='table-lab2-total'>Total</th>\
                                                    <th class='text-center'>45%</th>\
                                                    <th class='text-center'>Prac 1</th>\
                                                    <th class='text-center' id='table-prac2-total'>Total</th>\
                                                    <th class='text-center'>25%</th>\
                                                    <th class='text-center'>Proj 1</th>\
                                                    <th class='text-center' id='table-proj2-total'>Total</th>\
                                                    <th class='text-center'>30%</th>\
                                                    <th class='text-center'>100%</th>\
                                                    <th class='text-center'>Rating</th>\
                                                </tr>\
                                                </thead>\
                                                <tbody>\
                                                <tr id='table-items-wrapper' class='table-student-num-name'>\
                                                    <td colspan='2' class='text-right' id='table-items'>Number of Items</td>\
                                                    <td contenteditable='true' id='table-items-lab1'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='true' id='table-items-prac1'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='true' id='table-items-proj1'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td id='border-bold' contenteditable='false'></td>\
                                                    <td contenteditable='true' id='table-items-lab2'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='true' id='table-items-prac2'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='true' id='table-items-proj2'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                </tr>\
                                            </tbody>\
                                    </table>\
                                </div>\
                                <script type='text/javascript' src='/js/tooltip_lab.js'></script>\
                            </div>\
                        </div>\
                      </div>");
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr><td class='table-student-number' id='border-left' name='stud-num'>"+stud.stud_num+"</td>\
                                            <td class='table-student-name' id='border-bold' name='stud-name'>"+stud.full_name+"</td>\
                                            <td class='table-student-lab-mid' contenteditable='true' name='score[]'></td>\
                                            <td class='table-student-lab-total-mid' contenteditable='false' id='table-name-lab1'></td>\
                                            <td class='table-student-lab-percent-mid' contenteditable='false'></td>\
                                            <td class='table-student-prac-mid' contenteditable='true'></td>\
                                            <td class='table-student-prac-total-mid' contenteditable='false' id='table-name-prac1'></td>\
                                            <td class='table-student-prac-percent-mid' contenteditable='false'></td>\
                                            <td class='table-student-proj-mid' contenteditable='true'></td>\
                                            <td class='table-student-proj-total-mid' contenteditable='false' id='table-name-proj1'></td>\
                                            <td class='table-student-proj-percent-mid' contenteditable='false'></td>\
                                            <td class='table-student-midterm-grade' contenteditable='false'></td>\
                                            <td class='table-student-midterm-rating' id='border-bold' contenteditable='false'></td>\
                                            <td class='table-student-lab-finals' contenteditable='true' name='score[]'></td>\
                                            <td class='table-student-lab-total-finals' contenteditable='false' id='table-name-lab2'></td>\
                                            <td class='table-student-lab-percent-finals' contenteditable='false'></td>\
                                            <td class='table-student-prac-finals' contenteditable='true'></td>\
                                            <td class='table-student-prac-total-finals' contenteditable='false' id='table-name-prac2'></td>\
                                            <td class='table-student-prac-percent-finals' contenteditable='false'></td>\
                                            <td class='table-student-proj-finals' contenteditable='true'></td>\
                                            <td class='table-student-proj-total-finals' contenteditable='false' id='table-name-proj2'></td>\
                                            <td class='table-student-proj-percent-finals' contenteditable='false'></td>\
                                            <td class='table-student-finals-grade' contenteditable='false'></td>\
                                            <td class='table-student-finals-rating' contenteditable='false'></td></tr>");
                });
            $('div#include_tooltip').append("<script type='text/javascript' src='/js/tooltip_lab.js'></script>");
            }
        }
        else if (response['table_type'] == "attendance_table")
        {
            // 'Attendance table' please edit classes for responsive //
            table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"</h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid'>\
                                    <div class='table-responsive' id='table-attend'>\
                                        <table class='table table-striped table-bordered' id='table-wrapper'>\
                                        <input type=hidden></input>\
                                            <thead>\
                                                <tr>\
                                                    <th colspan='2' id='border-both'></th>\
                                                    <th colspan='3' class='text-center' id='table-att1'>MIDTERMS<a class='btn' id='table-att1-button' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></a><a class='btn' id='table-att1-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-att2'>FINALS<a class='btn' id='table-att2-button' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-att2-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                </tr>\
                                                <tr id='table-module'>\
                                                    <th class='text-center' id='border-left'>Student Number</th>\
                                                    <th class='text-center' id='border-bold'>Name</th>\
                                                    <th class='fixed-width' class='text-center' contenteditable='true'></th>\
                                                    <th class='text-center' id='table-att1-total'>Total</th>\
                                                    <th class='text-center'>10%</th>\
                                                    <th class='fixed-width' class='text-center' contenteditable='true'></th>\
                                                    <th class='text-center' id='table-att2-total'>Total</th>\
                                                    <th class='text-center'>10%</th>\
                                                </tr>\
                                            </thead>\
                                            <tbody>\
                                            </tbody>\
                                        </table>\
                                    </div>\
                                    <script type='text/javascript' src='/js/tooltip_attendance.js'></script>\
                                </div>\
                        </div>\
                      </div>");
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr><td class='table-student-number' id='border-left' name='stud-num'>"+stud.stud_num+"</td>\
                                            <td class='table-student-name' id='border-bold' name='stud-name'>"+stud.full_name+"</td>\
                                            <td class='table-student-attendance-mid' class='fixed-width' contenteditable='true' name='score[]'></td>\
                                                        <td class='table-student-total-mid' contenteditable='false' id='table-name-att1'></td>\
                                                        <td class='table-student-percent-mid' contenteditable='false'></td>\
                                                        <td class='table-student-attendance-finals' class='fixed-width' contenteditable='true' name='score[]'></td>\
                                                        <td class='table-student-total-finals' contenteditable='false' id='table-name-att2'></td>\
                                                        <td class='table-student-percent-finals' contenteditable='false'></td></tr>");
                });
                $('div#include_tooltip').append("<script type='text/javascript' src='/js/tooltip_attendance.js'></script>");
        }
        else if (response['table_type'] == "final_table")
        {
            // 'Final table' please edit classes for responsive //
            table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"</h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid'>\
                                    <div class='table-responsive' id='table-final'>\
                                        <table class='table table-striped table-bordered' id='table-wrapper'>\
                                            <input type='hidden'></input>\
                                                <tr>\
                                                    <tr>\
                                                        <th class='text-center' id='border-left'>Student Number</th>\
                                                        <th class='text-center' id='border-bold'>Name</th>\
                                                        <th class='text-center'>Midterm Grade</th>\
                                                        <th class='text-center'>Final Grade</th>\
                                                        <th class='text-center'>Grade</th>\
                                                    </tr>\
                                                </tr>\
                                            </table>\
                                    </div>\
                                </div>\
                        </div>\
                      </div>");
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr><td class='table-student-number' id='border-left' name='stud-num'>"+stud.stud_num+"</td>\
                                            <td class='table-student-name' id='border-bold' name='stud-name'>"+stud.full_name+"</td>\
                                            <td class='table-student-midterm' contenteditable='false'></td>\
                                            <td class='table-student-finals' contenteditable='false'></td>\
                                            <td class='table-student-grade' contenteditable='false'></td></tr>");
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

/*INITIAL COUNTERS FOR TABLE*/
var module_type;
var type_of_table;
var midtermCounter=0;
var finalsCounter=0;
//---variables for lab table---//
var labCounter1=0;
var labCounter2=0;
var pracCounter1=0;
var pracCounter2=0;
var projCounter1=0;
var projCounter2=0;
//---variables for lec table---//
    //--*Class Standing*--//
var assignCounter1=0;
var assignCounter2=0;
var swCounter1=0;
var swCounter2=0;
var exCounter1=0;
var exCounter2=0;
var recCounter1=0;
var recCounter2=0;
var csCounter1=0;
var csCounter2=0;
    //--*Quiz/Lexam*--//
var quizCounter1=0;
var quizCounter2=0;
var leCounter1=0;
var leCounter2=0;
var qlCounter1=0;
var qlCounter2=0;
//---variables for attendance table---//
var attCounter1=0;
var attCounter2=0;

function getModuleCounter(label,term,type)
{
    if (type == "name")
    {
        if (term == "midterm")
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
        else if (term == "finals")
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
        if (term == "midterm")
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
        else if (term == "finals")
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

    var array = parentId.split('-');
    var module = array[1].slice(0,-1);
    label = module.charAt(0).toUpperCase() + module.slice(1);
    var items = array[0]+"-items-"+array[1]; // for getting items id
    var name = array[0]+"-name-"+array[1]; // for getting name id
    var td_class_name,stud_col_class,term_tag,term,label_num;

    console.log(items);
    console.log(name);
    //---know if module under midterm or finals
    if (parent.attr('id').slice(-1) == '1') 
    {
        term_tag = $('#table-midterm');
        term = "midterm";
        stud_col_class = array[0]+"-student-"+module+"-mid";
    }
    else 
    {
        term_tag = $('#table-finals');
        term = "finals";
        stud_col_class = array[0]+"-student-"+module+"-finals";
    }

    if (type_of_table == "attendance_table")
    {
        if ($(parentTag).attr('colspan') < 17){
            parentTag.each(function(){
                var counter = getModuleCounter(label,term,"val");
                counter++;
                var span=3+counter;
                $(this).attr('colspan',span);
                $(this).val(counter);
                setModuleCounter(getModuleCounter(label,term,"name"),counter);
            });

            $("#"+parentId+"-button-del").css('display', 'inline-block');
            $("#"+parentId+"-total").before($("<td class='table-items-date-mid fixed-width' contenteditable='true'></td>"));
            $("tr td#"+name).before($("<td class='table-student-attendance-mid fixed-width' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
        }
        else alert("Only 15 column is allowed on this table.");
        console.log("label: "+label);
        console.log("counter:"+ getModuleCounter(label,term,"val"));
        console.log(term);
        return;
    }

    if (module_type == "Lab")
    {
        if ($(parentTag).attr('colspan') != 12)
        {
            parentTag.each(function(){
                var counter = getModuleCounter(label,term,"val");
                counter++;
                var span=3+counter;
                label_num = span-2;
                $(this).attr('colspan',span);
                $(this).val(counter);
                setModuleCounter(getModuleCounter(label,term,"name"),counter);
            });

            if (term == "midterm")
            {
                term_tag.each(function(){
                    midtermCounter++;
                    var term_span=11+midtermCounter;
                    $(this).attr('colspan',term_span);
                    $(this).val(midtermCounter);
                });
                td_class_name = items+"-mid"
            }
            else if (term == "finals")
            {
                term_tag.each(function(){
                    finalsCounter++;
                    var term_span=11+finalsCounter;
                    $(this).attr('colspan',term_span);
                    $(this).val(finalsCounter);
                });
                td_class_name = items+"-finals"
            }
            $("#"+parentId+"-button-del").css('display', 'inline-block');
            $("#"+parentId+"-total").before($("<th style='text-align:center'>"+ label +" "+ label_num + "</th>"));
            $("#"+items).after($("<td class='"+td_class_name+"' id='"+array[0]+"-items-"+ module + label_num + "' contenteditable='true'></td>"));
            $("tr td#"+name).before($("<td class='"+stud_col_class+"' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
        }
        else alert("Only 10 column is allowed on this table.");
    }

    else if (module_type == "Lec")
    {
        var upper_module,mod_id;
        if ($(parentTag).attr('colspan') != 10)
        {
            parentTag.each(function(){
                console.log("id: "+parentTag.attr('id'));
                var counter = getModuleCounter(label,term,"val");
                counter++;
                var span=1+counter;
                label_num = span;
                $(this).attr('colspan',span);
                $(this).val(counter);
                setModuleCounter(getModuleCounter(label,term,"name"),counter);
            });

            
            if (term == "midterm")
            {
                var i;
                if (label == "Assign" || label == "Sw" || label == "Ex" || label == "Rec") 
                {
                    upper_module = $('#table-class-standing1');
                    i = 6;
                }
                else if (label == "Quiz" || label == "Le") 
                {
                    upper_module = $('#table-quiz-le1');
                    i = 4;
                }
                mod_id = upper_module.attr('id');
                var arr = mod_id.split('-');
                var label2 = arr[1]+"-"+arr[2].slice(0,-1);
                console.log(label2);
                upper_module.each(function(){
                    var counter2 = getModuleCounter(label2,term,"val");
                    counter2++;
                    var span2=i+counter2;
                    $(this).attr('colspan',span2);
                    $(this).val(counter2);
                    console.log("cs: "+span2);
                    setModuleCounter(getModuleCounter(label2,term,"name"),counter2);
                });
                term_tag.each(function(){
                    midtermCounter++;
                    var term_span=15+midtermCounter;
                    $(this).attr('colspan',term_span);
                    $(this).val(midtermCounter);
                    console.log("mterm: "+term_span);
                    td_class_name = items+"-mid"
                });
            }
            else if (term == "finals")
            {
                var i;
                if (label == "Assign" || label == "Sw" || label == "Ex" || label == "Rec") 
                {
                    upper_module = $('#table-class-standing2');
                    i = 6;
                }
                else if (label == "Quiz" || label == "Le") 
                {
                    upper_module = $('#table-quiz-le2');
                    i = 4;
                }
                mod_id = upper_module.attr('id');
                var arr = mod_id.split('-');
                var label2 = arr[1]+"-"+arr[2].slice(0,-1);
                console.log(label2);
                upper_module.each(function(){
                    var counter2 = getModuleCounter(label2,term,"val");
                    counter2++;
                    var span2=i+counter2;
                    $(this).attr('colspan',span2);
                    $(this).val(counter2);
                    setModuleCounter(getModuleCounter(label2,term,"name"),counter2);
                });
                term_tag.each(function(){
                    finalsCounter++;
                    var term_span=15+finalsCounter;
                    $(this).attr('colspan',term_span);
                    $(this).val(finalsCounter);
                    td_class_name = items+"-finals"
                });
            }

            $("#"+parentId+"-button-del").css('display', 'inline-block');
            console.log("MODULE total: "+array[1]+"-score-col");
            console.log("MODULE items: "+items);

            console.log("label_num: "+label_num);
            // $("#"+array[1]+"-score-col").after($("<th style='text-align:center'>"+ label +" "+ label_num + "</th>"));
            $("#"+array[1]+"-score-col").after($("<th style='text-align:center'>"+ label +" "+ label_num + "</th>"));
            $("#"+items).after($("<td class='"+td_class_name+"' id='"+array[0]+"-items-"+ module + label_num + "' contenteditable='true'></td>"));
            $("tr td#"+name).before($("<td class='"+stud_col_class+"' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
            console.log("par id: "+parentId);
            console.log("name: "+name);
        }
        else alert("Only 10 column is allowed on this table.");
    }
    $('table td').each(function(){
        $(this).addClass("current-test");
        $parent = $(this).parent();
        $parent.addClass("current-test-parent");
        $studno = $parent.find('td:eq(0)').html();
        $studname = $parent.find('td:eq(1)').html();
        $index = $(".current-test-parent td").index($(".current-test"));
        if($(this).is('[class*="table-items"]')){
            $head = $("#table-module th:eq("+($index)+")").html();
        //console.log($("#table-module th:eq("+($index-1)+")").html());
        }else{
            $head = $("#table-module th:eq("+($index-1)+")").html();
        }
        $(this).attr({
            "data-toggle":"tooltip",
            "data-container":"body",
            "data-html":"true",
            "data-placement":"bottom",
            "title":$head +"<br>"+$studno+"<br>"+$studname
        })
        $(this).removeClass("current-test");
        $parent.removeClass("current-test-parent");
        // 
    });
    $('[data-toggle="tooltip"]').tooltip();
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

        var array = parent.attr('id').split('-'); //process of getting label
        var module = array[1].slice(0,-1);
        label = module.charAt(0).toUpperCase() + module.slice(1); // uppercase 1st letter
        var items = array[0]+"-items-"+array[1]; // for getting items id
        var name = array[0]+"-name-"+array[1]; // for getting name id
        var term_tag,term;
        if (parent.attr('id').slice(-1) == '1') 
        {
            term_tag = $('#table-midterm');
            term = "midterm";
        }
        else 
        {
            term_tag = $('#table-finals');
            term = "finals";
        }

        if (type_of_table == "attendance_table")
        {
            if ($(parentTag).attr('colspan') > 3)
            {
                $(parentTag).attr('colspan',$(parentTag).attr('colspan')-1); //subtract one colspan to the module header
                var newCount = getModuleCounter(label,term,"val") - 1;
                setModuleCounter(getModuleCounter(label,term,"name"),newCount);
                
                $("#"+parentId+"-total").prev().remove();  //remove module names column e.g. lab3,quiz1 etc.
                $("#"+items).prev().remove(); //remove the items column
                $("tr td#"+name).prev().remove(); //remove students column of that module
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

                $("#"+parentId+"-total").prev().remove();  //remove module names column e.g. lab3,quiz1 etc.
                $("#"+items).prev().remove(); //remove the items column
                $("tr td#"+name).prev().remove(); //remove students column of that module
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

                if (term == "midterm")
                {
                    if (label == "Assign" || label == "Sw" || label == "Ex" || label == "Rec") upper_module = $('#table-class-standing1');
                    else if (label == "Quiz" || label == "Le") upper_module = $('#table-quiz-le1');
                    mod_id = upper_module.attr('id');
                    var arr = mod_id.split('-');
                    var label2 = arr[1]+"-"+arr[2].slice(0,-1);
                    var newCount2 = getModuleCounter(label2,term,"val") - 1;
                    setModuleCounter(getModuleCounter(label2,term,"name"),newCount2);
                    midtermCounter--;
                }
                else if (term == "finals")
                {
                    if (label == "Assign" || label == "Sw" || label == "Ex" || label == "Rec") upper_module = $('#table-class-standing2');
                    else if (label == "Quiz" || label == "Le") upper_module = $('#table-quiz-le2');
                    mod_id = upper_module.attr('id');
                    var arr = mod_id.split('-');
                    var label2 = arr[1]+"-"+arr[2].slice(0,-1);
                    var newCount2 = getModuleCounter(label2,term,"val") - 1;
                    setModuleCounter(getModuleCounter(label2,term,"name"),newCount2);
                    finalsCounter--;
                }

                $("#"+get_col_pos(label,term,"module_num")).prev().remove();
                $("#"+get_col_pos(label,term,"module_items")).prev().remove();
                $("tr td#"+name).prev().remove();

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
