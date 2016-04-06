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
});

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
        labCounter1=1;
        labCounter2=1;
        pracCounter1=1;
        pracCounter2=1;
        projCounter1=1;
        projCounter2=1;
        //---variables for lec table---//
        assignCounter1=1;
        assignCounter2=1;
        swCounter1=1;
        swCounter2=1;
        exCounter1=1;
        exCounter2=1;
        recCounter1=1;
        recCounter2=1;
        //---variables for att table---//
        attCounter1=1;
        attCounter2=1;
        module_type = response['Class']['ModuleType'];
        type_of_table = response['table_type'];
        var table = $('div#table-content-wrapper');
        table.empty();
        if (response['table_type'] == "main_table")
        {
            if (response['Class']['ModuleType'] == "Lec")
            {
                // 'Lecture table' please edit classes for responsive //
                table.html("<input type='hidden' id='tableType' value='Lec'>\
						  <div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"<span style='float:right'><button class='btn btn-success ' type='submit' onclick='getAllData()'><i class='fa fa-check'></i> Save</button>\
                          <button class='btn btn-info ' id = 'table-upload-button' type='submit'><i class='fa fa-check'></i> Upload</button></span></h3>\
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
                                                <th colspan='6' class='text-center' id='table-mid-class-standing'>CLASS STANDING (20%)</th>\
                                                <th colspan='4' class='text-center' id='table-mid-quiz-le'>QUIZZES/LONG EXAM (30%)</th>\
                                                <th colspan='2' class='text-center'>MIDTERM EXAM (40%)</th>\
                                                <th colspan='2' class='text-center' id='border-bold'>MIDTERM GRADE</th>\
                                                <th rowspan='2' id='attendance'>ATTENDANCE</th>\
                                                <th colspan='6' class='text-center' id='table-final-class-standing'>CLASS STANDING (20%)</th>\
                                                <th colspan='4' class='text-center' id='table-final-quiz-le'>QUIZZES/LONG EXAM (30%)</th>\
                                                <th colspan='2' class='text-center'>FINAL EXAM (40%)</th>\
                                                <th colspan='2' class='text-center'>FINAL GRADE</th>\
                                            </tr>\
                                            <tr>\
                                                <th class='text-center' colspan='2' id='table-blank2'></th>\
                                                <th class='text-center' colspan='1' id='table-mid-assign'>ASSIGNMENT<a class='btn' id='add-col-assign1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-assign-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='1' id='table-mid-sw'>SEATWORK<a class='btn' id='add-col-sw1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-sw-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='1' id='table-mid-ex'>EXERCISE<a class='btn' id='add-col-ex1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-ex-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='1' id='table-mid-rec'>RECITATION<a class='btn' id='add-col-rec1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-rec-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th class='text-center' colspan='1' id='table-mid-quiz'>QUIZ<a class='btn' id='add-col-quiz1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-quiz-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='1' id='table-mid-le'>LONG EXAM<a class='btn' id='add-col-le1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-mid-le-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th rowspan='2' class='text-center' id='table-header-mid-mexam'>SCORE</th>\
                                                <th rowspan='2' class='text-center' id='table-header-mid-mexam-rating'>40%</th>\
                                                <th rowspan='2' class='text-center' id='table-header-mid-overall-rating'>100%</th>\
                                                <th rowspan='2' class='text-center' id='table-header-mid-overall-grade'>RATING</th>\
                                                <th class='text-center' colspan='1' id='table-final-assign'>ASSIGNMENT<a class='btn' id='add-col-assign1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-assign-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='1' id='table-final-sw'>SEATWORK<a class='btn' id='add-col-sw1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-sw-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='1' id='table-final-ex'>EXERCISE<a class='btn' id='add-col-ex1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-ex-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='1' id='table-final-rec'>RECITATION<a class='btn' id='add-col-rec1' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-rec-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN' onclick='del_column($(this).parent());'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th class='text-center' colspan='1' id='table-final-quiz'>QUIZ<a class='btn' id='add-col-quiz2' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-quiz-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th class='text-center' colspan='1' id='table-final-le'>LONG EXAM<a class='btn' id='add-col-le2' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a> <a class='btn' id='table-final-le-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                <th></th>\
                                                <th></th>\
                                                <th rowspan='2' class='text-center' id='table-header-final-fexam'>SCORE</th>\
                                                <th rowspan='2' class='text-center' id='table-header-final-fexam-rating'>40%</th>\
                                                <th rowspan='2' class='text-center' id='table-header-final-overall-rating'>100%</th>\
                                                <th rowspan='2' class='text-center' id='table-header-final-overall-grade'>RATING</th>\
                                            </tr>\
                                            <tr id='table-module'>\
                                                <th colspan='2' id='table-blank2'></th>\
                                                <th class='text-center' id='table-header-mid-att1'>10%</th>\
                                                <th class='text-center' id='table-header-mid-assign1'>Assign 1 </th>\
                                                <th class='text-center' id='table-header-mid-sw1'>Sw 1</th>\
                                                <th class='text-center' id='table-header-mid-ex1'>Ex 1</th>\
                                                <th class='text-center' id='table-header-mid-rec1'>Rec 1</th>\
                                                <th class='text-center' id='table-header-mid-cs-total'>Total</th>\
                                                <th class='text-center' id='table-header-mid-cs-rating'>20%</th>\
                                                <th class='text-center' id='table-header-mid-quiz1'>Quiz 1</th>\
                                                <th class='text-center' id='table-header-mid-le1'>Le 1</th>\
                                                <th class='text-center' id='table-header-mid-ql-total'>Total</th>\
                                                <th class='text-center' id='table-header-mid-ql-rating'>30%</th>\
                                                <th class='text-center' id='table-header-final-att1'>10%</th>\
                                                <th class='text-center' id='table-header-final-assign1'>Assign 1 </th>\
                                                <th class='text-center' id='table-header-final-sw1'>Sw 1</th>\
                                                <th class='text-center' id='table-header-final-ex1'>Ex 1</th>\
                                                <th class='text-center' id='table-header-final-rec1'>Rec 1</th>\
                                                <th class='text-center' id='table-header-final-cs-total'>Total</th>\
                                                <th class='text-center' id='table-header-final-cs-rating'>20%</th>\
                                                <th class='text-center' id='table-header-final-quiz1'>Quiz 1</th>\
                                                <th class='text-center' id='table-header-final-le1'>Le 1</th>\
                                                <th class='text-center' id='table-header-final-ql-total'>Total</th>\
                                                <th class='text-center' id='table-header-final-ql-rating'>30%</th>\
                                            </tr>\
                                            <tr class='num-items'>\
                                                <td colspan='2' class='text-right' id='table-items'>Number of Items</td>\
                                                <td contenteditable='false' class='table-items-att-mid' id='table-items-mid-att1'></td>\
                                                <td contenteditable='true' class='table-items-assign-mid' id='table-items-mid-assign1'></td>\
                                                <td contenteditable='true' class='table-items-seatwork-mid' id='table-items-mid-sw1'></td>\
                                                <td contenteditable='true' class='table-items-exercise-mid' id='table-items-mid-ex1'></td>\
                                                <td contenteditable='true' class='table-items-recitation-mid' id='table-items-mid-rec1'></td>\
                                                <td contenteditable='false' class='table-items-standing-total-mid' id='table-items-mid-cs-total'></td>\
                                                <td contenteditable='false' class='table-items-standing-percent-mid' id='table-items-mid-cs-rating'></td>\
                                                <td contenteditable='true' class='table-items-quiz-mid' id='table-items-mid-quiz1'></td>\
                                                <td contenteditable='true' class='table-items-longExam-mid' id='table-items-mid-le1'></td>\
                                                <td contenteditable='false' class='table-items-quiz-longExam-total-mid' id='table-items-mid-ql-total'></td>\
                                                <td contenteditable='false' class='table-items-quiz-longExam-percent-mid' id='table-items-mid-ql-rating'></td>\
                                                <td contenteditable='true' class='table-items-midterm-grade' id='table-items-mid-mexam'></td>\
                                                <td contenteditable='false' class='table-items-midterm-rating' id='table-items-mid-mexam-rating'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false' id='border-bold'></td>\
                                                <td contenteditable='false' class='table-items-att-finals' id='table-items-final-att1'></td>\
                                                <td contenteditable='true' class='table-items-assign-finals' id='table-items-final-assign1'></td>\
                                                <td contenteditable='true' class='table-items-seatwork-finals' id='table-items-final-sw1'></td>\
                                                <td contenteditable='true' class='table-items-exercise-finals' id='table-items-final-ex1'></td>\
                                                <td contenteditable='true' class='table-items-recitation-finals' id='table-items-final-rec1'></td>\
                                                <td contenteditable='false' class='table-items-standing-total-finals' id='table-items-final-cs-total'></td>\
                                                <td contenteditable='false' class='table-items-standing-percent-finals' id='table-items-final-cs-rating'></td>\
                                                <td contenteditable='true' class='table-items-quiz-finals' id='table-items-final-quiz1'></td>\
                                                <td contenteditable='true' class='table-items-longExam-finals' id='table-items-final-le1'></td>\
                                                <td contenteditable='false' class='table-items-quiz-longExam-total-finals' id='table-items-final-ql-total'></td>\
                                                <td contenteditable='false' class='table-items-quiz-longExam-percent-finals' id='table-items-final-ql-rating'></td>\
                                                <td contenteditable='true' class='table-items-finals-score' id='table-items-final-mexam'></td>\
                                                <td contenteditable='false' class='table-items-finals-percent' id='table-items-final-mexam-rating'></td>\
                                                <td contenteditable='false'></td>\
                                                <td contenteditable='false'></td>\
                                            </tr>\
                                        </tr>\
                                    </table>\
                                </div>\
                                <script type='text/javascript' src='/js/tooltipMarci.js'></script>\
                                <script type='text/javascript' src='/js/table.js'></script>\
                                <script type='text/javascript' src='/js/save_table.js'></script>\
                            </div>\
                        </div>\
                      </div>");
                      
                 
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr class='stud-record "+stud.stud_num+"'><td id='border-left' name='stud-num' class='stud-num'>"+stud.stud_num+"</td>\
                                            <td id='border-bold' name='stud-name' class='stud-name'>"+stud.full_name+"</td>\
                                            <td contenteditable='false' class='table-items-att-mid' id='table-score-mid-att1'></td>\
                                            <td contenteditable='true' class='table-items-assign-mid' id='table-score-mid-assign1'></td>\
                                            <td contenteditable='true' class='table-items-seatwork-mid' id='table-score-mid-sw1'></td>\
                                            <td contenteditable='true' class='table-items-exercise-mid' id='table-score-mid-ex1'></td>\
                                            <td contenteditable='true' class='table-items-recitation-mid' id='table-score-mid-rec1'></td>\
                                            <td contenteditable='false' class='table-items-standing-total-mid' ></td>\
                                            <td contenteditable='false' class='table-items-standing-percent-mid'></td>\
                                            <td contenteditable='true' class='table-items-quiz-mid' id='table-score-mid-quiz1'></td>\
                                            <td contenteditable='true' class='table-items-longExam-mid' id='table-score-mid-le1'></td>\
                                            <td contenteditable='false' class='table-items-quiz-longExam-total-mid'></td>\
                                            <td contenteditable='false' class='table-items-quiz-longExam-percent-mid' ></td>\
                                            <td contenteditable='true' class='table-items-midterm-score' id='table-score-mid-mexam'></td>\
                                            <td contenteditable='false' class='table-items-midterm-percent' ></td>\
                                            <td contenteditable='false' class='table-items-midterm-grade'></td>\
                                            <td contenteditable='false' id='border-bold' class='table-items-midterm-rating'></td>\
                                            <td contenteditable='false' class='table-items-att-finals' id='table-score-final-att1'></td>\
                                            <td contenteditable='true' class='table-items-assign-finals' id='table-score-final-assign1'></td>\
                                            <td contenteditable='true' class='table-items-seatwork-finals' id='table-score-final-sw1'></td>\
                                            <td contenteditable='true' class='table-items-exercise-finals' id='table-score-final-ex1'></td>\
                                            <td contenteditable='true' class='table-items-recitation-finals' id='table-score-final-rec1'></td>\
                                            <td contenteditable='false' class='table-items-standing-total-finals' ></td>\
                                            <td contenteditable='false' class='table-items-standing-percent-finals'></td>\
                                            <td contenteditable='true' class='table-items-quiz-finals' id='table-score-final-quiz1'></td>\
                                            <td contenteditable='true' class='table-items-longExam-finals' id='table-score-final-le1'></td>\
                                            <td contenteditable='false' class='table-items-quiz-longExam-total-finals'></td>\
                                            <td contenteditable='false' class='table-items-quiz-longExam-percent-finals' ></td>\
                                            <td contenteditable='true' class='table-items-finals-score' id='table-score-final-mexam'></td>\
                                            <td contenteditable='false' class='table-items-finals-percent' ></td>\
                                            <td contenteditable='false' class='table-items-finals-grade'></td>\
                                            <td contenteditable='false' class='table-items-finals-rating'></td></tr>");
                });
            $('div#include_tooltip').append("<script type='text/javascript' src='/js/tooltipMarci.js'></script>");
            }
            else
            {
                // 'Lab table' please edit classes for responsive //
                table.html(" <input type='hidden' id='tableType' value='Lab'>\
                          <div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"<span style='float:right'><button class='btn btn-success ' id = 'table-save-button' type='submit' onclick='getAllData()'><i class='fa fa-check'></i> Save</button>\
                          <button class='btn btn-info ' id = 'table-upload-button' type='submit'><i class='fa fa-check'></i> Upload</button></span></h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid' id='outer'>\
                                <div class='table-responsive' id='inner'>\
                                    <table class='table table-striped table-bordered' id='table-wrapper'>\
                                            <tr>\
                                                <tr>\
                                                    <th colspan='2' id='table-blank'></th>\
                                                    <th colspan='11' id='table-midterm' class='text-center'>Midterms</th>\
                                                    <th colspan='11' id='table-finals' class='text-center'>Finals</th>\
                                                </tr>\
                                                <tr>\
                                                    <th class='text-center' id='table-student'>Student Number</th>\
                                                    <th class='text-center' id='table-name'>Name</th>\
                                                    <th colspan='3' class='text-center' id='table-mid-lab'>LABORATORY EXERCISE/MACHINE PROBLEMS(45%)<a class='btn' id='table-lab1-button' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></a><a class='btn' id='table-mid-lab-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-mid-prac'>PRACTICAL EXAM(25%)<a class='btn' id='table-prac1-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-mid-prac-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-mid-proj'>PROJECT(30%)<a class='btn' id='table-proj1-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-mid-proj-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='2' class='text-center' id='border-bold'>MIDTERM GRADE</th>\
                                                    <th colspan='3' class='text-center' id='table-final-lab'>LABORATORY EXERCISE/MACHINE PROBLEMS(45%)<a class='btn' id='table-lab2-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-final-lab-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-final-prac'>PRACTICAL EXAM(25%)<a class='btn' id='table-prac2-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-final-prac-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-final-proj'>PROJECT(30%)<a class='btn' id='table-proj2-button' onclick='add_column($(this).parent());'><acronym title='ADD'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-final-proj-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='2' class='text-center'>FINAL GRADE</th>\
                                                </tr>\
                                                <tr id='table-module'>\
                                                    <th colspan='2' id='table-blank2'></th>\
                                                    <th class='text-center' id='table-header-mid-lab1'>Lab 1</th>\
                                                    <th class='text-center' id='table-header-mid-lab-total'>Total</th>\
                                                    <th class='text-center' id='table-header-mid-lab-rating'>45%</th>\
                                                    <th class='text-center' id='table-header-mid-prac1'>Prac 1</th>\
                                                    <th class='text-center' id='table-header-mid-prac-total'>Total</th>\
                                                    <th class='text-center' id='table-header-mid-prac-rating'>25%</th>\
                                                    <th class='text-center' id='table-header-mid-proj1'>Proj 1</th>\
                                                    <th class='text-center' id='table-header-mid-proj-total'>Total</th>\
                                                    <th class='text-center' id='table-header-mid-proj-rating'>30%</th>\
                                                    <th class='text-center' class='table-items-midterm-grade' id='table-header-mid-overall-rating'>100%</th>\
                                                    <th id='border-bold' class='table-items-midterm-rating' id='table-header-mid-overall-grade' class='text-center'>Rating</th>\
                                                    <th class='text-center' id='table-header-final-lab1'>Lab 1</th>\
                                                    <th class='text-center' id='table-header-final-lab-total'>Total</th>\
                                                    <th class='text-center' id='table-header-final-lab-rating'>45%</th>\
                                                    <th class='text-center' id='table-header-final-prac1'>Prac 1</th>\
                                                    <th class='text-center' id='table-header-final-prac-total'>Total</th>\
                                                    <th class='text-center' id='table-header-final-prac-rating'>25%</th>\
                                                    <th class='text-center' id='table-header-final-proj1'>Proj 1</th>\
                                                    <th class='text-center' id='table-header-final-proj-total'>Total</th>\
                                                    <th class='text-center' id='table-header-final-proj-rating'>30%</th>\
                                                    <th class='text-center' class='table-items-finals-grade' id='table-header-final-overall-rating'>100%</th>\
                                                    <th id='border-bold' class='table-items-finals-rating' id='table-header-final-overall-grade' class='text-center'>Rating</th>\
                                                </tr>\
                                                <tr id='table-items-wrapper' class='fixed-width num-items'>\
                                                    <td colspan='2' class='text-right' id='table-items'>Number of Items</td>\
                                                    <td contenteditable='true' class='table-items-lab-mid' id='table-items-mid-lab1'></td>\
                                                    <td contenteditable='false' class='table-items-lab-total-mid' id='table-items-mid-lab-total'></td>\
                                                    <td contenteditable='false' class='table-items-lab-percent-mid' id='table-items-mid-lab-rating'></td>\
                                                    <td contenteditable='true' class='table-items-prac-mid' id='table-items-mid-prac1'></td>\
                                                    <td contenteditable='false' class='table-items-prac-total-mid' id='table-items-mid-prac-total'></td>\
                                                    <td contenteditable='false' class='table-items-prac-percent-mid' id='table-items-mid-prac-rating'></td>\
                                                    <td contenteditable='true' class='table-items-proj-mid' id='table-items-mid-proj1'></td>\
                                                    <td contenteditable='false' class='table-items-proj-total-mid' id='table-items-mid-proj-total'></td>\
                                                    <td contenteditable='false' class='table-items-proj-percent-mid' id='table-items-mid-proj-rating'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td id='border-bold' contenteditable='false'></td>\
                                                    <td contenteditable='true' class='table-items-lab-finals' id='table-items-final-lab1'></td>\
                                                    <td contenteditable='false' class='table-items-lab-total-finals' id='table-items-final-lab-total'></td>\
                                                    <td contenteditable='false' class='table-items-lab-percent-finals' id='table-items-final-lab-rating'></td>\
                                                    <td contenteditable='true' class='table-items-prac-finals' id='table-items-finals-prac1'></td>\
                                                    <td contenteditable='false' class='table-items-prac-total-finals' id='table-items-final-prac-total'></td>\
                                                    <td contenteditable='false' class='table-items-prac-percent-finals' id='table-items-final-prac-rating'></td>\
                                                    <td contenteditable='true' class='table-items-proj-finals' id='table-items-final-proj1'></td>\
                                                    <td contenteditable='false' class='table-items-proj-total-finals' id='table-items-final-proj-total'></td>\
                                                    <td contenteditable='false' class='table-items-proj-percent-finals' id='table-items-final-proj-rating'></td>\
                                                    <td contenteditable='false'></td>\
                                                    <td contenteditable='false'></td>\
                                                </tr>\
                                            </tr>\
                                    </table>\
                                </div>\
                                <script type='text/javascript' src='/js/tooltipMarci.js'></script>\
                                <script type='text/javascript' src='/js/table.js'></script>\
                            </div>\
                        </div>\
                      </div>");
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr class='stud-record "+stud.stud_num+"'><td id='border-left' name='stud-num' class='stud-num'>"+stud.stud_num+"</td>\
                                            <td id='border-bold' name='stud-name' class='stud-name'>"+stud.full_name+"</td>\
                                            <td contenteditable='true' class='table-items-lab-mid' id='table-score-mid-lab1'></td>\
                                            <td contenteditable='false' class='table-items-lab-total-mid'></td>\
                                            <td contenteditable='false' class='table-items-lab-percent-mid'></td>\
                                            <td contenteditable='true' class='table-items-prac-mid' id='table-score-mid-prac1'></td>\
                                            <td contenteditable='false' class='table-items-prac-total-mid'></td>\
                                            <td contenteditable='false' class='table-items-prac-percent-mid'></td>\
                                            <td contenteditable='true' class='table-items-proj-mid' id='table-score-mid-proj1'></td>\
                                            <td contenteditable='false' class='table-items-proj-total-mid'></td>\
                                            <td contenteditable='false' class='table-items-proj-percent-mid'></td>\
                                            <td contenteditable='false' class='table-items-midterm-grade'></td>\
                                            <td id='border-bold' contenteditable='false' class='table-items-midterm-rating'></td>\
                                            <td contenteditable='true' class='table-items-lab-finals' id='table-score-final-lab1'></td>\
                                            <td contenteditable='false' class='table-items-lab-total-finals'></td>\
                                            <td contenteditable='false' class='table-items-lab-percent-finals'></td>\
                                            <td contenteditable='true' class='table-items-prac-finals' id='table-score-final-prac1'></td>\
                                            <td contenteditable='false' class='table-items-prac-total-finals'></td>\
                                            <td contenteditable='false' class='table-items-prac-percent-finals'></td>\
                                            <td contenteditable='true' class='table-items-proj-finals' id='table-score-final-proj1'></td>\
                                            <td contenteditable='false' class='table-items-proj-total-finals'></td>\
                                            <td contenteditable='false' class='table-items-proj-percent-finals'></td>\
                                            <td contenteditable='false' class='table-items-finals-grade'></td>\
                                            <td contenteditable='false' class='table-items-finals-rating'></td></tr>");
                });
            $('div#include_tooltip').append("<script type='text/javascript' src='/js/tooltipMarci.js'></script>");
            }
        }
        else if (response['table_type'] == "attendance_table")
        {
            // 'Attendance table' please edit classes for responsive //
            table.html(" <input type='hidden' id='sheetType' value='attendance_table'>\
                         <div class='row'>\
                          <h2>"+response['Class']['ClassBlock']+"</h2>\
                          <h6>"+response['Class']['Schedule']+"</h6><hr>\
                          <h3>"+response['Subject']+"("+response['Class']['ModuleType']+")"+"<span style='float:right'><button class='btn btn-success ' id = 'table-save-button' type='submit' onclick='getAllData()'><i class='fa fa-check'></i> Save</button>\
                          <button class='btn btn-info ' id = 'table-upload-button' type='submit'><i class='fa fa-check'></i> Upload</button></span></h3>\
                        </div><br>\
                        <div class='row'>\
                            <div class='col-lg-12 col-md-12'>\
                                <div class='container-fluid'>\
                                    <div class='table-responsive'>\
                                        <table class='table table-striped table-bordered' id='table-wrapper'>\
                                            <tr>\
                                                <tr>\
                                                    <th colspan='2' id='border-bold'></th>\
                                                    <th colspan='3' class='text-center' id='table-mid-att'>MIDTERMS<a class='btn' id='table-att1-button' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></a><a class='btn' id='table-mid-att-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                    <th colspan='3' class='text-center' id='table-final-att'>FINALS<a class='btn' id='table-att2-button' onclick='add_column($(this).parent());'><acronym title='ADD COLUMN'><i class='fa fa-plus-circle'></i></acronym></a><a class='btn' id='table-final-att-button-del' onclick='del_column($(this).parent());'><acronym title='DELETE COLUMN'><i class='fa fa-minus-circle'></i></acronym></a></th>\
                                                </tr>\
                                                <tr id='table-module'>\
                                                    <th class='text-center' >Name</th>\
                                                    <th class='text-center' id='border-bold'>Student Number</th>\
                                                    <th class='fixed-width' class='stud-att-date-midterm' id='table-header-mid-att1' contenteditable='true'>Att 1</th>\
                                                    <th class='text-center' class='stud-att-total-midterm'>Total</th>\
                                                    <th class='text-center' class='stud-att-10p-midterm'>10%</th>\
                                                    <th class='fixed-width' class='stud-att-date-finals' id='table-header-final-att1' contenteditable='true'>Att 1</th>\
                                                    <th class='text-center' class='stud-att-total-finals'>Total</th>\
                                                    <th class='text-center' class='stud-att-10p-finals'>10%</th>\
                                                </tr>\
                                            </tr>\
                                        </table>\
                                    </div>\
                                    <script type='text/javascript' src='/js/tooltipMarci.js'></script>\
                                </div>\
                        </div>\
                      </div>");
            response.Student.forEach(function(stud){
              $('table tbody').append("  <tr class='stud-record "+stud.stud_num+"'><td id='border-left' name='stud-num' class='stud-num'>"+stud.stud_num+"</td>\
                                            <td id='border-bold' name='stud-name' class='stud-name'>"+stud.full_name+"</td>\
                                            <td contenteditable='true' class='stud-att-date-midterm' id='table-score-mid-att1'></td>\
                                            <td contenteditable='false' class='stud-att-total-midterm'></td>\
                                            <td contenteditable='false' class='stud-att-10p-midterm'></td>\
                                            <td contenteditable='true' class='stud-att-date-finals' id='table-score-final-att1'></td>\
                                            <td contenteditable='false' class='stud-att-total-finals'></td>\
                                            <td contenteditable='false' class='stud-att-10p-finals'></td></tr>");
                });
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
                                <div class=container-fluid>\
                                    <div class=table-responsive>\
                                        <table class='table table-striped table-bordered' id='table-wrapper'>\
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
                                    <script type='text/javascript' src='/js/tooltipMarci.js'></script>\
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

function get_class_name(label,label_num,term)
{
    if (term == "mid")
    {
        if (label == "Assign") return "table-items-assign-mid";
        else if (label == "Sw") return "table-items-seatwork-mid";
        else if (label == "Ex") return "table-items-exercise-mid";
        else if(label == "Rec") return "table-items-recitation-mid";
        else if(label == "Quiz") return "table-items-quiz-mid";
        else if(label == "Le") return "table-items-longExam-mid";
        else if (label == "Lab") return "table-items-lab-mid";
        else if (label == "Prac") return "table-items-prac-mid";
        else if (label == "Proj") return "table-items-proj-mid";
        else if (label == "Att") return "stud-att-date-midterm"
    } 
    else if (term == "final")
    {
        if (label == "Assign") return "table-items-assign-finals";
        else if (label == "Sw") return "table-items-seatwork-finals";
        else if (label == "Ex") return "table-items-exercise-finals";
        else if(label == "Rec") return "table-items-recitation-finals";
        else if(label == "Quiz") return "table-items-quiz-finals";
        else if(label == "Le") return "table-items-longExam-finals";
        else if (label == "Lab") return "table-items-lab-finals";
        else if (label == "Prac") return "table-items-prac-finals";
        else if (label == "Proj") return "table-items-proj-finals";
        else if (label == "Att") return "stud-att-date-finals"
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

            var class_name = get_class_name(label,label_num,term);

            $("#"+parentId+"-button-del").css('display', 'inline-block');
            $("tr th#"+header).after($("<th style='text-align:center' id='"+newHeader+"' class='"+class_name+"' contenteditable='true'>"+ label +" "+ label_num + "</th>"));
            $("tr td#"+score).after($("<td id='"+newScore+"' class='"+class_name+"' contenteditable='true'></td>"));
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
                term_tag = $('tr>th#table-midterm');
                term_tag.each(function(){
                    midtermCounter++;
                    var term_span=11+midtermCounter;
                    $(this).attr('colspan',term_span);
                });
            }
            else if (term == "final")
            {
                term_tag = $('tr>th#table-finals');
                term_tag.each(function(){
                    finalsCounter++;
                    var term_span=11+finalsCounter;
                    $(this).attr('colspan',term_span);
                });
            }

            var class_name = get_class_name(label,label_num,term);

            $("#"+parentId+"-button-del").css('display', 'inline-block');
            $("tr th#"+header).after($("<th style='text-align:center' id='"+newHeader+"'>"+ label +" "+ label_num + "</th>"));
            $("tr td#"+items).after($("<td id='"+newItems+"' class='"+class_name+"' contenteditable='true'></td>"));
            $("tr td#"+score).after($("<td id='"+newScore+"' class='"+class_name+"' contenteditable='true'></td>"));
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

            var class_name = get_class_name(label,label_num,term);

            $("#"+parentId+"-button-del").css('display', 'inline-block');
            $("tr th#"+header).after($("<th style='text-align:center' id='"+newHeader+"'>"+ label +" "+ label_num + "</th>"));
            $("tr td#"+items).after($("<td id='"+newItems+"' class='"+class_name+"' contenteditable='true'></td>"));
            $("tr td#"+score).after($("<td id='"+newScore+"' class='"+class_name+"' contenteditable='true'></td>"));
        }
        else alert("Only 10 column is allowed on this table.");
    }
    //---to reinstantiate tooltip on added columns---//
    $('table td').each(function(){
        $(this).addClass("current-test");
        $parent = $(this).parent();
        $parent.addClass("current-test-parent");
        $studno = $parent.find('td:eq(0)').html();
        $studname = $parent.find('td:eq(1)').html();
        $index = $(".current-test-parent td").index($(".current-test"));
        if($(this).is('[id*="table-items"]')){
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