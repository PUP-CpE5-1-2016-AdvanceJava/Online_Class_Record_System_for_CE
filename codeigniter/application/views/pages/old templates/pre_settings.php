<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>CE-Online Class Record</title>
    
    <link type="text/css" href="<?php base_url(); ?>/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/plugins/bootstrap/css/bootstrap-multiselect.css" rel="stylesheet">  
    <link type="text/css" href="<?php base_url(); ?>/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/css/prism.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/css/chosen.css" rel="stylesheet">

    <link type="text/css" href="<?php base_url(); ?>/css/stylesheet.css" rel="stylesheet">

</head>

<body id = "pre-setting-body-wrapper">

    <!-- HEADER -->
    <div class="container-fluid" id = "header-wrapper">
        <div class = "container">
            <div class="row">
                <div class = "col-md-10 col-sm-12 col-md-offset-2" id = "header-details">
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logoce.png"> 
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logocpe.png">
                    <span><b id = "header-details-title">College of Engineering</b><b id = "header-details-title-res">CE</b> | Online Class Record </span>     
                </div> 
            </div>  
        </div>  <!-- container -->  
    </div> <!-- container-fluid -->


    <div class="container-fluid" id = "navbar-wrapper">
        <div class = "container" >
        <div class = "row">
            <ul class = " nav pull-right" id = "navbar-subtabs">
                <li><a href = "<?=site_url('user/logout')?>"><i class="fa fa-sign-out" id = "navbar-subtabs-logo"></i>Logout</a></li>
            </ul>
        </div>    
    </div> <!-- container -->
    </div> <!-- SUBHEADER -->

    <!-- BODY -->
    <div class="container" id="body-wrapper">
        <div class = "row">
            <div class = "col-md-12" id="body-main-title">
                <span > ACCOUNT<wbr> SETTINGS</span>
            </div>
            <div class = "col-md-12" id="body-sub-title">
                <span >Before proceeding, answer the following:</span>
            </div>
        </div>
    </div> <!-- container -->

    <!-- FORM -->
    <div class="container">
        <div class="col-md-8 col-sm-10 col-xs-10 col-md-offset-2 col-sm-offset-1 col-xs-offset-1 form" id="form-main">
            <form id="settings" action="<?=site_url('user/view_fac_page')?>" method="post" >
                <!-- HANDLED SUBJECTS -->
                <div id="group">
                    <div class="current settings">
                        <p><b> No. of handled subjects: </b></p>
                        <select required id="numSub">
                            <option selected disabled>Please Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <p><b> Name of subjects: </b></p>
                        <ul id="textBox"></ul>
                    </div>

                    <!-- SECTION OF SUBJECTS -->
                    <div class="settings" id = "form-section">
                        <p><b> Class Blocks </b></p>
                        <ul id="subjGroup"></ul>
                    </div>

                    <!-- Module Percentages -->
                    <div class="settings">
                        <p><b> Module Percentages </b></p>
                        <ul id = "module_container">
                        </ul>
                    </div>

                    <!-- Grading System -->
                    <div class="settings">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <p><b> Grading System </b></p><br>
                            </div>
                        </div>
                        <div class="row" id="form-grading-system">
                            <div class = "col-md-6 col-sm-6 col-xs-12" id="form-grading-s1">
                                <section class="column">
                                    <label class="rateLabel">1.00</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">1.25</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">1.50</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">1.75</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">2.00</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">2.25</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">2.50</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">2.75</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">3.00</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly>
                                </section>
                            </div>
                            <div class = "col-md-6 col-sm-6 col-xs-12" id="form-grading-s2">
                                <section class="column">
                                    <label class="rateLabel">3.25</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">3.50</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">3.75</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">4.00</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">4.25</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">4.50</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">4.75</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly><br>
                                    <label class="rateLabel">5.00</label><input type="text" name="grade_system_min[]" class="gradeBoxMin" readonly><i class="to">to</i><input type="text" name="grade_system_max[]" class="gradeBoxMax" readonly>
                                </section>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "pre-setting-grade-slider-wrapper">
                                <label>Grade Slider</label>
                                <input type="range" id = "pre-setting-grade-slider" min="0" max="100" onchange="updateRange(this.value)" oninput="updateRange(this.value)">
                                <input type="text" id="sliderVal" value="49" readonly><br>
                                <label id="labelInterval">Grade Interval: </label><input type="text" id="gradeInterval" value="" readonly>
                            </div>
                        </div>
                    </div>

                    <!-- Submit Btn -->
                     <div class="settings">
                        <p><b> Submission </b></p>
                        <p>Go back to make any changes or Click the green button to save and proceed.</p> 
                        <button class="btn" id="form-submit-btn" type="submit"><i class="fa fa-check-circle"></i></button>
                    </div>
                </div>
                <!-- BUTTONS -->
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="button-wrapper">
                    <button class="btn" id="form-prev-btn"><i class="fa fa-chevron-circle-left"></i></button>   
                    <button class="btn" id="form-next-btn"><i class="fa fa-chevron-circle-right"></i></button>
                </div>
            </form>
        </div>
    </div>

    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/jquery-2.1.3.min.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/bootstrap-multiselect.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/script.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/chosen.jquery.min.js"></script>

</body>

</html>