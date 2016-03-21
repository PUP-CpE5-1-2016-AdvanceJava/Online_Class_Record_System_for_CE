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

$(document).on('click',"ul>li[name='sheet_submenu'] a",function() {
    console.log($(this).attr('id'));
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
        $('div#TEMPORARY').empty();
        $('tbody#stud_table').empty();

        var table = $('div#TEMPORARY');
        table.empty();
        if (response['table_type'] == "main_table")
        {
            if (response['Class']['ModuleType'] == "Lec")
            {
                table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"</h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid' id='outer'>\
                                <div class='table-responsive' id='inner'>\
                                    <table class='table table-striped table-bordered' id='table-wrapper'>\
                                        <tr>\
                                            <tr>\
                                                <th colspan='2' id='table-blank'></th>\
                                                <th colspan='15' class='text-center' id='table-midterm'>Midterm</th>\
                                                <th colspan='15' class='text-center' id='table-finals'>Finals</th>\
                                            </tr>\
                                            <tr>\
                                                <th class='text-center' id='table-student'>Student Number</th>\
                                                <th class='text-center' id='table-name'>Name</th>\
                                                <th rowspan='2' class='text-center' id='attendance'>ATTENDANCE</th>\
                                                <th colspan='6' class='text-center' id='table-classStanding'>CLASS STANDING (20%)</th>\
                                                <th colspan='4' class='text-center' id='table-quizLE'>QUIZZES/LONG EXAM (30%)</th>\
                                                <th colspan='2' class='text-center'>MIDTERM EXAM (40%)</th>\
                                                <th colspan='2' class='text-center' id='border-bold'>MIDTERM GRADE</th>\
                                                <th rowspan='2' id='attendance'>ATTENDANCE</th>\
                                                <th colspan='6' class='text-center' id='table-classStandingFinals'>CLASS STANDING (20%)</th>\
                                                <th colspan='4' class='text-center' id='table-quizLEFinals'>QUIZZES/LONG EXAM (30%)</th>\
                                                <th colspan='2' class='text-center'>FINAL EXAM (40%)</th>\
                                                <th colspan='2' class='text-center'>FINAL GRADE</th>\
                                            </tr>\
                                            <tr>\
                                                <th class='text-center' colspan='2' id='table-blank2'></th>\
                                                <th class='text-center' id='assignment'>ASSIGNMENT<a class='btn' id='add-col-assign1'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-assign1'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='seatwork'>SEATWORK<a class='btn' id='add-col-sw1'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-sw1'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='exercise'>EXERCISE<a class='btn' id='add-col-ex1'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-ex1'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='recitation'>RECITATION<a class='btn' id='add-col-rec1'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-rec1'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th class='text-center' id='quiz'>QUIZ<a class='btn' id='add-col-quiz1'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-quiz1'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='longexam'>LONG EXAM<a class='btn' id='add-col-le1'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-le1'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th rowspan='2' class='text-center' id='midterm'>SCORE</th>\
                                                <th rowspan='2' class='text-center' id='midterm'>40%</th>\
                                                <th rowspan='2' class='text-center' id='midterm'>100%</th>\
                                                <th rowspan='2' class='text-center' id='border-bold'>RATING</th>\
                                                <th class='text-center' id='assignmentFinals'>ASSIGNMENT<a class='btn' id='add-col-assign2'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-assign2'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='seatworkFinals'>SEATWORK<a class='btn' id='add-col-sw2'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-sw2'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='exerciseFinals'>EXERCISE<a class='btn' id='add-col-ex2'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-ex2'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='recitationFinals'>RECITATION<a class='btn' id='add-col-rec2'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-rec2'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th class='text-center' id='quizFinals'>QUIZ<a class='btn' id='add-col-quiz2'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-quiz2'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' id='longexamFinals'>LONG EXAM<a class='btn' id='add-col-le2'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='delete-col-le2'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
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
                                                <th class='text-center'>ASSIGN 1 </th>\
                                                <th class='text-center' id='sideseatwork'>SW 1</th>\
                                                <th class='text-center' id='sideexercise'>EX 1</th>\
                                                <th class='text-center' id='siderecitation'>REC 1</th>\
                                                <th class='text-center' id='sidetotal'>Total</th>\
                                                <th class='text-center'>20%</th>\
                                                <th class='text-center'>QUIZ 1</th>\
                                                <th class='text-center' id='sideLE'>LE 1</th>\
                                                <th class='text-center' id='sidetotal2'>Total</th>\
                                                <th class='text-center'>30%</th>\
                                                <th class='text-center'>10%</th>\
                                                <th class='text-center'>ASSIGN 1 </th>\
                                                <th class='text-center' id='sideseatworkFinals'>SW 1</th>\
                                                <th class='text-center' id='sideexerciseFinals'>EX 1</th>\
                                                <th class='text-center' id='siderecitationFinals'>REC 1</th>\
                                                <th class='text-center' id='sidetotalFinals'>Total</th>\
                                                <th class='text-center'>20%</th>\
                                                <th class='text-center'>QUIZ 1</th>\
                                                <th class='text-center' id='sideLEFinals'>LE 1</th>\
                                                <th class='text-center' id='sidetotal2Finals'>Total</th>\
                                                <th class='text-center'>30%</th>\
                                            </tr>\
                                            <tr>\
                                                <td colspan='2' class='text-right' id='table-items'>Number of Items</td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true'></td>\
                                                <td contenteditable='true' id='table-items-seatwork1'></td>\
                                                <td contenteditable='true' id='table-items-ex1'></td>\
                                                <td contenteditable='true' id='table-items-rec1'></td>\
                                                <td contenteditable='false' id='table-items-classStanding1'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true'></td>\
                                                <td contenteditable='true' id='table-items-le1'></td>\
                                                <td contenteditable='false' id='table-items-quizLong1'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false' id='border-bold'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true'></td>\
                                                <td contenteditable='true' id='table-items-seatwork2'></td>\
                                                <td contenteditable='true' id='table-items-ex2'></td>\
                                                <td contenteditable='true' id='table-items-rec2'></td>\
                                                <td contenteditable='false' id='table-items-classStanding2'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true'></td>\
                                                <td contenteditable='true' id='table-items-le2'></td>\
                                                <td contenteditable='false' id='table-items-quizLong2'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='true'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false'></td>\
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
                                            <td contenteditable='false'>100</td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='true' id='table-seatwork-classStanding1'></td>\
                                            <td contenteditable='true' id='table-exercise-classStanding1'></td>\
                                            <td contenteditable='true' id='table-rec-classStanding1'></td>\
                                            <td contenteditable='false' id='table-total-classStanding1'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='true' id='table-le-quizLong1'></td>\
                                            <td contenteditable='false' id='table-total-quizLong1'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false' id='border-bold'>75</td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='true' id='table-seatwork-classStanding2'></td>\
                                            <td contenteditable='true' id='table-exercise-classStanding2'></td>\
                                            <td contenteditable='true' id='table-rec-classStanding2'></td>\
                                            <td contenteditable='false' id='table-total-classStanding2'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='true' id='table-le-quizLong2'></td>\
                                            <td contenteditable='false' id='table-total-quizLong2'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td></tr>");
                });
            }
            else
            {
                table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"</h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid' id='outer'>\
                                <div class='table-responsive' id='inner'>\
                                    <table class='table table-striped table-bordered' id='table-wrapper'>\
                                        <input type='hidden'></input>\
                                            <tr>\
                                                <tr>\
                                                    <th colspan='2' id='table-blank'></th>\
                                                    <th colspan='11' id='table-midterm' class='text-center'>Midterms</th>\
                                                    <th colspan='11' id='table-finals' class='text-center'>Finals</th>\
                                                </tr>\
                                                <tr>\
                                                    <th class='text-center' id='table-student'>Student Number</th>\
                                                    <th class='text-center' id='table-name'>Name</th>\
                                                    <th colspan='3' class='text-center' id='table-lab1'>LABORATORY EXERCISE/MACHINE PROBLEMS(45%)<a class='btn' id='table-lab1-button'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></a><a class='btn' id='table-lab1-button-del'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-prac1'>PRACTICAL EXAM(25%)<a class='btn' id='table-prac1-button'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-prac1-button-del'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-proj1'>PROJECT(30%)<a class='btn' id='table-proj1-button'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-proj1-button-del'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='2' class='text-center' id='border-bold'>MIDTERM GRADE</th>\
                                                    <th colspan='3' class='text-center' id='table-lab2'>LABORATORY EXERCISE/MACHINE PROBLEMS(45%)<a class='btn' id='table-lab2-button'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-lab2-button-del'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-prac2'>PRACTICAL EXAM(25%)<a class='btn' id='table-prac2-button'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-prac2-button-del'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-proj2'>PROJECT(30%)<a class='btn' id='table-proj2-button'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-proj2-button-del'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='2' class='text-center'>FINAL GRADE</th>\
                                                </tr>\
                                                <tr id='table-module'>\
                                                    <th colspan='2' id='table-blank2'></th>\
                                                    <th class='text-center'>Lab 1</th>\
                                                    <th class='text-center' id='table-lab1-total'>Total</th>\
                                                    <th class='text-center'>45%</th>\
                                                    <th class='text-center'>Practical 1</th>\
                                                    <th class='text-center' id='table-prac1-total'>Total</th>\
                                                    <th class='text-center'>25%</th>\
                                                    <th class='text-center'>Project 1</th>\
                                                    <th class='text-center' id='table-proj1-total'>Total</th>\
                                                    <th class='text-center'>30%</th>\
                                                    <th class='text-center'>100%</th>\
                                                    <th id='border-bold' class='text-center'>Rating</th>\
                                                    <th class='text-center'>Lab 1</th>\
                                                    <th class='text-center' id='table-lab2-total'>Total</th>\
                                                    <th class='text-center'>45%</th>\
                                                    <th class='text-center'>Practical 1</th>\
                                                    <th class='text-center' id='table-prac2-total'>Total</th>\
                                                    <th class='text-center'>25%</th>\
                                                    <th class='text-center'>Project 1</th>\
                                                    <th class='text-center' id='table-proj2-total'>Total</th>\
                                                    <th class='text-center'>30%</th>\
                                                    <th class='text-center'>100%</th>\
                                                    <th class='text-center'>Rating</th>\
                                                </tr>\
                                                <tr id='table-items-wrapper' class='fixed-width'>\
                                                    <td colspan='2' class='text-right' id='table-items'>Number of Items</td>\
                                                    <td contenteditable='true'></td>\
                                                    <td contenteditable='false' id='table-items-lab1'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='true'></td>\
                                                    <td contenteditable='false' id='table-items-prac1'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='true'></td>\
                                                    <td contenteditable='false' id='table-items-proj1'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td id='border-bold' contenteditable='false'></td>\
                                                    <td contenteditable='true'></td>\
                                                    <td contenteditable='false' id='table-items-lab2'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='true'></td>\
                                                    <td contenteditable='false' id='table-items-prac2'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='true'></td>\
                                                    <td contenteditable='false' id='table-items-proj2'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
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
                                            <td contenteditable='true' name='score[]'></td>\
                                            <td contenteditable='false' id='table-name-lab1'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='false' id='table-name-prac1'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='false' id='table-name-proj1'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td>\
                                            <td id='border-bold' contenteditable='false'></td>\
                                            <td contenteditable='true' name='score[]'></td>\
                                            <td contenteditable='false' id='table-name-lab2'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='false' id='table-name-prac2'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='true'></td>\
                                            <td contenteditable='false' id='table-name-proj2'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td></tr>");
                });
            }
        }
        else if (response['table_type'] == "attendance_table")
        {
            table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"</h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class=container-fluid>\
                                    <div class=table-responsive>\
                                        <table class=table table-striped table-bordered id=table-wrapper>\
                                        <input type=hidden></input>\
                                            <tr>\
                                                <tr>\
                                                    <th colspan=2 ></th>\
                                                    <th colspan=3 class=text-center id=table-att1>MIDTERMS<a class=btn id=table-att1-button><acronym title=ADD COLUMN><i class=fa fa-plus-circle></i></a><a class=btn id=table-att1-button-del><acronym title=DELETE COLUMN><i class=fa fa-minus-circle></i></acronym></a></th>\
                                                    <th colspan=3 class=text-center id=table-att2>FINALS<a class=btn id=table-att2-button><acronym title=ADD><i class=fa fa-plus-circle></i></acronym></a><a class=btn id=table-att2-button-del><acronym title=DELETE COLUMN><i class=fa fa-minus-circle></i></acronym></a></th>\
                                                </tr>\
                                                <tr id=table-module>\
                                                    <th class=text-center >Student Number</th>\
                                                    <th class=text-center >Name</th>\
                                                    <th class='fixed-width' class=text-center contenteditable='true'></th>\
                                                    <th class=text-center id=table-att1-total>Total</th>\
                                                    <th class=text-center>10%</th>\
                                                    <th class='fixed-width' class=text-center contenteditable='true'></th>\
                                                    <th class=text-center id=table-att2-total>Total</th>\
                                                    <th class=text-center>10%</th>\
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
                                            <td class='fixed-width' contenteditable='true' name='score[]'></td>\
                                                        <td contenteditable='false' id='table-name-att1'></td>\
                                                        <td contenteditable='false'></td>\
                                                        <td class='fixed-width' contenteditable='true' name='score[]'></td>\
                                                        <td contenteditable='false' id='table-name-att2'></td>\
                                                        <td contenteditable='false'></td></tr>");
                });
        }
        else if (response['table_type'] == "final_table")
        {
                        table.html("<div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"</h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class=container-fluid>\
                                    <div class=table-responsive>\
                                        <table class='table table-striped table-bordered' id='table-wrapper'>\
                                            <input type='hidden'></input>\
                                                <tr>\
                                                    <tr>\
                                                        <th class='text-center'>Student Number</th>\
                                                        <th class='text-center'>Name</th>\
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
              $('table tbody').append("  <tr><td id='border-left' name='stud-name'>"+stud.full_name+"</td>\
                                            <td id='border-bold' name='stud-num'>"+stud.stud_num+"</td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td>\
                                            <td contenteditable='false'></td></tr>");
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
        console.log("done");
        
        // append compute and save buttons
        table.append("<button type='button' id='compute-button' name='compute-button'>Compute</button>\
					<button type='button' id='save-button' onclick='return getAllData("+ response.class_id +");'  name='save-button'>Save</button>\
					<input type='hidden' id='tableType' name='tableType' value='"+ response['Class']['ModuleType']+"'></input>\
					<input type='hidden' id='sheetType' name='sheetType' value='"+ response['table_type']+"'></input>\
					<p id='status'></p>");
      }
      else
      {
        console.log("no");
        console.log(link);
      }
    })
  return false;
}



