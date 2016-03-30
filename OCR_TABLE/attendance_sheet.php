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
        <div class = "container" >
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
                            <a class="module-item  hideOverflow">Attendance<span class="arrow-left"></span></a>    
                        </li>
                        <li id="sidebar-subMenu" class="accordion-section">
                            <a class="module-item  hideOverflow">Class Record<span class="arrow-left"></span></a>    
                        </li>
                        <li id="sidebar-subMenu" class="accordion-section">
                            <a class="module-item  hideOverflow">Final Grading Sheet<span class="arrow-left"></span></a>                          
                        </li>
                    </ul>
                </div>
            </div>

            <!-- TABLE CONTENT WRAPPER -->
            <div class ="container" id ="table-content-wrapper">
                <div class="row">
                    <h2>BSCPE 5-1</h2>
                    <hr></hr>
                    <h4><span>OBJECT ORIENTED PROGRAMMING</span></h4>
                </div>
                <div class="row">
                    <h2>ATTENDANCE SHEET</h2>            
                </div>
        
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="container-fluid">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered" id="table-wrapper">
                                        <thead>
                                            <tr>
                                                <th colspan="2" ></th>
                                                <th colspan="3" class="text-center" id="table-att1">MIDTERMS<a class="btn" id="table-att1-button"><acronym title="ADD COLUMN"><i class="fa fa-plus-circle"></i></a><a class="btn" id="table-att1-button-del"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>
                                                <th colspan="3" class="text-center" id="table-att2">FINALS<a class="btn" id="table-att2-button"><acronym title="ADD"><i class="fa fa-plus-circle"></i></acronym></a><a class="btn" id="table-att2-button-del"><acronym title="DELETE COLUMN"><i class="fa fa-minus-circle"></i></acronym></a></th>                   
                                            </tr>
                                            
                                            <tr id="table-module">
                                                <th class="text-center" >Student Number</th>
                                                <th class="text-center" >Name</th>
                                                <th class='table-attendance-date-mid fixed-width' class="text-center" contenteditable='true'></th>
                                                <th class="text-center" id="table-att1-total">Total</th>
                                                <th class="text-center">10%</th>

                                                <th class='table-attendance-date-finals fixed-width' class="text-center" contenteditable='true'></th>
                                                <th class="text-center" id="table-att2-total">Total</th>
                                                <th class="text-center">10%</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="table-data-wrapper"> 

                                                <?php
                                                for ($a = 0; $a<50; $a++) 
                                                {
                                                    echo "<tr>";  
                                                    echo "<td class='table-student-number'>2011-00090-MN-0</td>";
                                                    echo "<td class='table-student-name'>J.C. Flores</td>";
                                        
                                                    echo "<td class='table-student-attendance-mid' class='fixed-width' contenteditable='true' name='score[]'></td>";
                                                    echo "<td class='table-student-total-mid' contenteditable='false' id='table-name-att1'></td>";
                                                    echo "<td class='table-student-percent-mid' contenteditable='false'></td>";
                                                   
                                                    echo "<td class='table-student-attendance-finals' class='fixed-width' contenteditable='true' name='score[]'></td>";
                                                    echo "<td class='table-student-total-finals' contenteditable='false' id='table-name-att2'></td>";
                                                    echo "<td class='table-student-percent-finals' contenteditable='false'></td>";
                                                    
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

                    <!-- ALERT MODAL -->
                    <div id="table-alert-modal" class="modal">

                      <!-- MODAL CONTENT -->
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
<script type="text/javascript" src="plugins/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="plugins/js/tooltip_attendance.js"></script>
<script type="text/javascript" src="plugins/js/script_attendance.js"></script>


</body>