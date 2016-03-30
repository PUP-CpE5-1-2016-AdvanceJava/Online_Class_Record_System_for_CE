<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>CE-Online Class Record</title>
    
    <link type="text/css" href="plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link type="text/css" href="plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link type="text/css" href="plugins/css/stylesheet.css" rel="stylesheet">
    <link type="text/css" href="plugins/css/sidebar.css" rel="stylesheet">
    <link type="text/css" href="plugins/css/table.css" rel="stylesheet">
    <link type="text/css" href="plugins/icomoon/icon.css" rel="stylesheet">


</head>

<body>

    <!-- HEADER -->
    <div class="container-fluid" id = "header-wrapper">
        <div class = "container">
            <div class="row">
                <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "header-details">
                    <img alt="Brand" id = "header-logo"src="resources/img/logoce.png"> 
                    <img alt="Brand" id = "header-logo"src="resources/img/logocpe.png">
                    <span><b id = "header-details-title">College of Engineering</b><b id = "header-details-title-res">CE</b> | Online Class Record </span>     
                </div> 
            </div>  
        </div>  <!-- container -->  
    </div> <!-- container-fluid -->
     
    <!-- NAVBAR -->
     <div class = "container-fluid" id = "navbar-wrapper">
        <div class = "container">
            <div class = "row" id = "navbar-normal">
                <ul class = " nav pull-left" id= "navbar-maintabs">
                    <li><a href="#" id = "active">ARCHIVES</a></li>
                    <li><a href = "#">CALENDAR</a></li>
                    <li><a href = "#">SETTINGS</a></li>
                    <li><a href = "#">HOME</a></li>
                </ul>
                
                <ul class = " nav pull-right" id = "navbar-subtabs">
                    <li><a href = "#"><i class="fa fa-sign-out"></i>Logout</a></li>
                    <li><p class="navbar-text">Hi, Engr. Julius Cansino</p></li>
                </ul>
            </div>
            <div class = "row" id = "navbar-res">
                <ul class = " nav pull-left" id= "navbar-maintabs">
                    <li><a href="#" id = "active"><i class = "fa fa-archive "></i></a></li>
                    <li><a href = "#"><i class = "fa fa-calendar "></i></a></li>
                    <li><a href = "#"><i class = "fa fa-wrench "></i></a></li>
                    <li><a href = "#"><i class = "fa fa-home "></i></a></li>
                </ul>
                
                <ul class = " nav pull-right" id = "navbar-subtabs">
                    <li><a href = "#"><i class="fa fa-sign-out"></i></a></li>
                </ul>
            </div>          
        </div> <!-- container -->
    </div> <!-- container-fluid -->

    <!--SIDEBAR & CONTENT-->
    <div class="container-fluid" id="main-content-wrapper">
        <div class="row" id="main-col-wrapper">
            <div class="container"id="sidebar-wrapper">
                <div class="sidebar-nav">
                    <ul class="accordion">
                        <div id="sidebar-menu">
                            <i class="icon-class-record"></i><span>Record</span>
                        </div>
                        <li id="sidebar-subMenu" class="accordion-section">
                            <a class="accordion-section-title hideOverflow" href="#accordion-1">Computer Networks<span class="arrow-left"></span></a>
                            <div id="accordion-1" class="accordion-section-content">
                                <div id="sidebar-item"><a>BSCpE 5-1<span class="arrow-left"></span></a></div>
                                <div id="sidebar-item"><a>BSCpE 5-2<span class="arrow-left"></span></a></div>
                                <div id="sidebar-item"><a>BSCpE 5-3<span class="arrow-left"></span></a></div>
                            </div>
                        </li>
                        <li id="sidebar-subMenu" class="accordion-section">
                            <a class="accordion-section-title hideOverflow" href="#accordion-2">Software Engineering<span class="arrow-left"></span></a>
                            <div id="accordion-2" class="accordion-section-content">
                                <div id="sidebar-item"><a>BSCpE 5-1<span class="arrow-left"></span></a></div>
                                <div id="sidebar-item"><a>BSCpE 5-3<span class="arrow-left"></span></a></div>
                                <div id="sidebar-item"><a>BSCpE 5-5<span class="arrow-left"></span></a></div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <div id="sidebar-menu" class="toggle-sidebar">
                            <i class="icon-modules"></i><span>Modules</span>
                        </div>
                       
                        <li id="sidebar-subMenu" class="accordion-section">
                            <a class="module-item  hideOverflow">CLass Record<span class="arrow-left"></span></a>    
                        </li>
                        <li id="sidebar-subMenu" class="accordion-section">
                            <a class="module-item  hideOverflow">Final Grading Sheet<span class="arrow-left"></span></a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- TABLE CONTENT WRAPPER -->
            <div class = "container" id = "table-content-wrapper">
                <div class="row">
                    <h2>BSCPE 5-1</h2>
                    <hr></hr>
                    <h4><span>OBJECT ORIENTED PROGRAMMING</span></h4>
                </div>
                <div class="row">
                    <h2>LECTURE</h2>
                </div>
        
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="container-fluid">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered" id="table-wrapper">
                                <input type="hidden"></input>
                                    <thead>
                                        <tr>
                                            <th colspan="2" class="fixed-column-cells" id="table-blank"></th>
                                            <th colspan="15" class="text-center" id="table-midterm">Midterm</th>
                                            <th colspan="15" class="text-center" id="table-finals">Finals</th>                
                                        </tr>
                                        <tr>
                                            <th class="text-center fixed-column-cells" id="table-student">Student Number</th>
                                            <th class="text-center fixed-column-cells" id="table-name">Name</th>
                                            
                                            <!-- MIDTERM -->
                                            <th rowspan='2' class="text-center" id="attendance">ATTENDANCE</th>
                                            <th colspan="6" class="text-center" id="table-classStanding">CLASS STANDING (20%)</th>
                                            <th colspan="4" class="text-center" id="table-quizLE">QUIZZES/LONG EXAM (30%)</th>
                                            <th colspan="2" class="text-center">MIDTERM EXAM (40%)</th>
                                            <th colspan="2" class="text-center" id='border-bold'>MIDTERM GRADE</th>

                                            <!-- FINALS -->
                                            <th rowspan="2" id="attendance">ATTENDANCE</th>
                                            <th colspan="6" class="text-center" id="table-classStandingFinals">CLASS STANDING (20%)</th>
                                            <th colspan="4" class="text-center" id="table-quizLEFinals">QUIZZES/LONG EXAM (30%)</th>
                                            <th colspan="2" class="text-center">FINAL EXAM (40%)</th>
                                            <th colspan="2" class="text-center">FINAL GRADE</th>
                                        </tr>
                                        <tr>
                                            <!-- MIDTERM -->
                                            <th class="text-center fixed-column-cells" colspan='2' id="table-blank2"></th>
                                            <th class="text-center" id='assignment'>ASSIGNMENT
                                                <a class="btn" id="add-col-assign1">
                                                    <acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym>
                                                </a> 
                                                <a class="btn" id="delete-col-assign1">
                                                    <acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym>
                                                </a>
                                            </th>
                                            <th class="text-center" id='seatwork'>SEATWORK<a class="btn" id="add-col-sw1"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-sw1"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th class="text-center" id='exercise'>EXERCISE<a class="btn" id="add-col-ex1"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-ex1"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th class="text-center" id='recitation'>RECITATION<a class="btn" id="add-col-rec1"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-rec1"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th></th>
                                            <th></th>
                                            <th class="text-center" id='quiz'>QUIZ<a class="btn" id="add-col-quiz1"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-quiz1"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th class="text-center" id='longexam'>LONG EXAM<a class="btn" id="add-col-le1"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-le1"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th></th>
                                            <th></th>
                                            <th rowspan="2" class="text-center" id="midterm">SCORE</th>
                                            <th rowspan="2" class="text-center" id="midterm">40%</th>
                                            <th rowspan="2" class="text-center" id="midterm">100%</th>
                                            <th rowspan="2" class="text-center" id='border-bold'>RATING</th>
                                            <!-- FINALS -->
                                            <th class="text-center" id='assignmentFinals'>ASSIGNMENT<a class="btn" id="add-col-assign2"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-assign2"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th class="text-center" id='seatworkFinals'>SEATWORK<a class="btn" id="add-col-sw2"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-sw2"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th class="text-center" id='exerciseFinals'>EXERCISE<a class="btn" id="add-col-ex2"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-ex2"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th class="text-center" id='recitationFinals'>RECITATION<a class="btn" id="add-col-rec2"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-rec2"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th></th>
                                            <th></th>
                                            <th class="text-center" id='quizFinals'>QUIZ<a class="btn" id="add-col-quiz2"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-quiz2"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th class="text-center" id='longexamFinals'>LONG EXAM<a class="btn" id="add-col-le2"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></acronym></a> <a class="btn" id="delete-col-le2"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                            <th></th>
                                            <th></th>
                                            <th rowspan="2" class="text-center" id="final">SCORE</th>
                                            <th rowspan="2" class="text-center" id="final">40%</th>
                                            <th rowspan="2" class="text-center" id="final">100%</th>
                                            <th rowspan="2" class="text-center" id="final">RATING</th>
                                        </tr>   
                                        <tr id="table-module">
                                            <!-- MIDTERM -->
                                            <th colspan="2" class="fixed-column-cells" id="table-blank2"></th>
                                            <th class="text-center">10%</th>
                                            <th class="text-center">ASSIGN 1 </th>
                                            <th class="text-center" id="sideseatwork">SW 1</th>
                                            <th class="text-center" id="sideexercise">EX 1</th>
                                            <th class="text-center" id="siderecitation">REC 1</th>
                                            <th class="text-center" id="sidetotal">Total</th>
                                            <th class="text-center">20%</th>
                                            <th class="text-center">QUIZ 1</th>
                                            <th class="text-center" id='sideLE'>LE 1</th>
                                            <th class="text-center" id='sidetotal2'>Total</th>
                                            <th class="text-center">30%</th>
                                            <!-- FINALS -->
                                            <th class="text-center">10%</th>
                                            <th class="text-center">ASSIGN 1 </th>
                                            <th class="text-center" id="sideseatworkFinals">SW 1</th>
                                            <th class="text-center" id="sideexerciseFinals">EX 1</th>
                                            <th class="text-center" id="siderecitationFinals">REC 1</th>
                                            <th class="text-center" id="sidetotalFinals">Total</th>
                                            <th class="text-center">20%</th>
                                            <th class="text-center">QUIZ 1</th>
                                            <th class="text-center" id='sideLEFinals'>LE 1</th>
                                            <th class="text-center" id='sidetotal2Finals'>Total</th>
                                            <th class="text-center">30%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="2" class="text-right fixed-column-cells" id="table-items">Number of Items</td>
                                            <td class='table-items-attendance-mid' contenteditable='false'></td>
                                            <td class='table-items-assign-mid' contenteditable='true'></td>
                                            <td class='table-items-seatwork-mid' contenteditable='true' id="table-items-seatwork1"></td>
                                            <td class='table-items-exercise-mid' contenteditable='true' id="table-items-ex1"></td>
                                            <td class='table-items-recitation-mid' contenteditable='true' id="table-items-rec1"></td>
                                            <td class='table-items-standing-total-mid' contenteditable='false' id="table-items-classStanding1"></td>
                                            <td class='table-items-standing-percent-mid' contenteditable='false'></td>
                                            <td class='table-items-quiz-mid' contenteditable='true'></td>
                                            <td class='table-items-longExam-mid' contenteditable='true' id="table-items-le1"></td>
                                            <td class='table-items-quiz-longExam-total-mid' contenteditable='false' id="table-items-quizLong1"></td>
                                            <td class='table-items-quiz-longExam-percent-mid' contenteditable='false'></td>
                                            <td class='table-items-midterm-score' contenteditable='true'></td>
                                            <td class='table-items-midterm-percent' contenteditable='false'></td>
                                            <td class='table-items-midterm-grade' contenteditable='false'></td>
                                            <td class='table-items-midterm-rating' contenteditable='false' id='border-bold'></td>
                                            <td class='table-items-attendance-finals' contenteditable='false'></td>
                                            <td class='table-items-assign-finals' contenteditable='true'></td>
                                            <td class='table-items-seatwork-finals' contenteditable='true' id="table-items-seatwork2"></td>
                                            <td class='table-items-exercise-finals' contenteditable='true' id="table-items-ex2"></td>
                                            <td class='table-items-recitation-finals' contenteditable='true' id="table-items-rec2"></td>
                                            <td class='table-items-standing-total-finals' contenteditable='false' id="table-items-classStanding2"></td>
                                            <td class='table-items-standing-percent-finals' contenteditable='false'></td>
                                            <td class='table-items-quiz-finals' contenteditable='true'></td>
                                            <td class='table-items-longExam-finals' contenteditable='true' id="table-items-le2"></td>
                                            <td class='table-items-quiz-longExam-total-finals' contenteditable='false' id="table-items-quizLong2"></td>
                                            <td class='table-items-quiz-longExam-percent-finals' contenteditable='false'></td>
                                            <td class='table-items-finals-score' contenteditable='true'></td>
                                            <td class='table-items-finals-percent' contenteditable='false'></td>
                                            <td class='table-items-finals-grade' contenteditable='false'></td>
                                            <td class='table-items-finals-rating' contenteditable='false'></td>
                                        </tr>
                                        <tr> 
                                            <?php
                                            for ($a = 0; $a<50; $a++) 
                                            {
                                                echo "<tr>";
                                                echo "<input type='hidden' name='id[]' value='".$a."'/>"; 
                                                echo "<td class='table-student-number fixed-column-cells' id='border-left'>2011-00090-MN-0</td>";
                                                echo "<td class='table-student-name fixed-column-cells' id='border-bold'>J.C. Flores</td>";
                                                // MIDTERM
                                                echo "<td class='table-student-attendance-mid' contenteditable='false'></td>";
                                                echo "<td class='table-student-assign-mid' contenteditable='true'></td>";
                                                echo "<td class='table-student-seatwork-mid'contenteditable='true' id='table-seatwork-classStanding1'></td>";
                                                echo "<td class='table-student-exercise-mid' contenteditable='true' id='table-exercise-classStanding1'></td>";
                                                echo "<td class='table-student-recitation-mid' contenteditable='true' id='table-rec-classStanding1'></td>";
                                                echo "<td class='table-student-standing-total-mid' contenteditable='false' id='table-total-classStanding1'></td>";
                                                echo "<td class='table-student-standing-percent-mid' contenteditable='false'></td>";
                                                echo "<td class='table-student-quiz-mid' contenteditable='true'></td>";
                                                echo "<td class='table-student-longExam-mid' contenteditable='true' id='table-le-quizLong1'></td>";
                                                echo "<td class='table-student-quiz-longExam-total-mid' contenteditable='false' id='table-total-quizLong1'></td>";
                                                echo "<td class='table-student-quiz-longExam-percent-mid' contenteditable='false'></td>";
                                                echo "<td class='table-student-midterm-score' contenteditable='true'></td>";
                                                echo "<td class='table-student-midterm-percent' contenteditable='false'></td>";
                                                echo "<td class='table-student-midterm-grade' contenteditable='false'></td>";
                                                echo "<td class='table-student-midterm-rating' contenteditable='false' id='border-bold'></td>";
                                                // FINALS
                                                echo "<td class='table-student-attendance-finals' contenteditable='false'></td>";
                                                echo "<td class='table-student-assign-finals' contenteditable='true'></td>";
                                                echo "<td class='table-student-seatwork-finals' contenteditable='true' id='table-seatwork-classStanding2'></td>";
                                                echo "<td class='table-student-exercise-finals' contenteditable='true' id='table-exercise-classStanding2'></td>";
                                                echo "<td class='table-student-recitation-finals' contenteditable='true' id='table-rec-classStanding2'></td>";
                                                echo "<td class='table-student-standing-total-finals' contenteditable='false' id='table-total-classStanding2'></td>";
                                                echo "<td class='table-student-standing-percent-finals' contenteditable='false'></td>";
                                                echo "<td class='table-student-quiz-finals' contenteditable='true'></td>";
                                                echo "<td class='table-student-longExam-finals' contenteditable='true' id='table-le-quizLong2'></td>";
                                                echo "<td class='table-student-quiz-longExam-total-finals' contenteditable='false' id='table-total-quizLong2'></td>";
                                                echo "<td class='table-student-quiz-longExam-percent-finals' contenteditable='false'></td>";
                                                echo "<td class='table-student-finals-score' contenteditable='true'></td>";
                                                echo "<td class='table-student-finals-percent' contenteditable='false'></td>";
                                                echo "<td class='table-student-finals-grade' contenteditable='false'></td>";
                                                echo "<td class='table-student-finals-rating' contenteditable='false'></td>";
                       
                                                echo "</tr>"; 
                                            }
                                            ?>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                
                <!-- The Modal -->
             
                <div id="table-alert-modal" class="modal">

                  <!-- Modal content -->
                  <div class="modal-text" id="modal-text">
                    <h4><b>Are you sure you want to delete column?</b></h4>
                        <div id="table-modal-buttons"> 
                            <button id="table-yes-btn">YES</button>
                            <button id="table-cancel-btn">CANCEL</button>
                        </div>
                  </div>
                </div>

            </div> <!-- end of table-content-wrapper -->
        </div> <!-- end of main-col-wrapper -->
    </div> <!-- end of main-content-wrapper -->

    <!-- FOOTER -->
     <div class = "container-fluid" id = "footer-wrapper">
        <div class = "container">
            <div class="row" id = "footer-details-wrapper">
                <div class="col-lg-6 col-md-7 col-sm-12 col-xs-12" id = "footer-details">      
                    <img alt="Brand" id = "footer-logo"src="resources/img/logoce.png"> 
                    <img alt="Brand" id = "footer-logo"src="resources/img/logocpe.png">
                    <span><b>College of Engineering</b><wbr> | Online Class Record </span>      
                    <p><i class="fa fa-copyright"></i>All Rights Reserved</p>
                </div>
                <div class = "col-lg-5 col-md-5  com-sm-12 col-xs-12" id = "footer-form">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Comments and Queries">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button"><i class = "fa fa-envelope"></i></button>
                        </span>
                    </div>
                </div>
            </div>
        </div> <!-- container -->
    </div> <!-- container-fluid -->

<script type="text/javascript" src="plugins/js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="plugins/js/jquery-1.11.3.js"></script>
<script type="text/javascript" src="plugins/js/sidebar.js"></script>
<script type="text/javascript" src="plugins/js/table.js"></script>
<script type="text/javascript" src="plugins/js/tooltip_lec.js"></script>
<script type="text/javascript" src="plugins/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="plugins/js/script_lec.js"></script>


</body>