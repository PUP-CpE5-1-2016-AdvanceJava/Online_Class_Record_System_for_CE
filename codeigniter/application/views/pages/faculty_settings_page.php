<!-- SETTINGS -->
    <div class = "container" id = "settings-wrapper">
        <div class = "col-md-12" id = "settings-title">
            <span> SETTINGS </span> 
        </div>
        <div class = "row">
            <div class="col-md-12 col-sm-12 col-xs-12" id="status_loc">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <!-- PANEL 1 -CHANGEPWD -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <a id = "archives-panel-label" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Change Password <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="list-group">
                                <div class="list-group-item" id ="settings-panel-details">
                                    <form class="form-inline" name="<?=site_url('user/admin_settings/change_pw')?>" id="settings-change-pw">
                                        <div class="form-group" id = "settings-password-form">
                                            <input type="password" class="form-control" placeholder="Old Password" name="old_pw">
                                        </div>
                                        <div class="form-group" id = "settings-password-form">
                                            <input type="password" class="form-control" id="exampleInputEmail2" placeholder="New Password" name="new_pw">
                                        </div>
                                        <button class="btn btn-success " id = "settings-password-form-button" type="submit"><i class="fa fa-check"></i> Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANEL 2 -ADD STUDENT -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <a id = "archives-panel-label" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Add Student <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div class="list-group" >
                                <div class="list-group-item" id = "settings-create-panel-details" >
                                    <form class="form-horizontal" name="<?=site_url('user/add_student')?>" id="settings-add-student">
                                        <div class="form-group">
                                            <label for="Name" class="col-sm-2 control-label">First Name</label>
                                            <div class="col-sm-10">
                                                <input type="name" class="form-control" id="Name" placeholder="First Name" name="fname">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="Name" class="col-sm-2 control-label">Middle Name</label>
                                            <div class="col-sm-10">
                                                <input type="name" class="form-control" id="Name" placeholder="Middle Name" name="mname">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="Name" class="col-sm-2 control-label">Last Name</label>
                                            <div class="col-sm-10">
                                                <input type="name" class="form-control" id="Name" placeholder="Last Name" name="lname">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="studentnum" class="col-sm-2 control-label">Student Number</label>
                                            <div class="col-sm-10">
                                                <input  class="form-control" id="studentnum" placeholder="Student Number" name="stud_num">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-sm-2 control-label" for="Subject">Subject</label> 
                                            <div class="col-sm-10">
                                                <select class = "form-control" name="subject" id = "Subject" required>
                                                    <option disabled selected value="default_subject">Subject</option>
                                                    <?php
                                                        if (isset($subjs))
                                                        {
                                                            foreach ($subjs as $subj)
                                                            {
                                                                echo "<option value='".$subj['SubjectTitle']."'>".$subj['SubjectTitle']."</option>";
                                                            }
                                                        }
                                                    ?>
                                                </select>
                                            </div>    
                                        </div>        

                                        <div class="form-group">
                                            <label class="col-sm-2 control-label" for="Userdepartment">Year & Section</label> 
                                            <div class="col-sm-10 " >        
                                                <select class = "form-control" name="section" id = "Userdepartment" required>
                                                    <option disabled selected value="default_section">Year & Section</option>
                                                    <?php
                                                        if (isset($sections))
                                                        {
                                                            foreach ($sections as $section)
                                                            {
                                                                echo "<option value='".$section['ClassBlock']."'>".$section['ClassBlock']."</option>";
                                                            }
                                                        }
                                                    ?>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="col-sm-offset-2 col-sm-10">
                                                <button class="btn btn-primary " id = "settings-createacct-form-button" type="submit"><i class="fa fa-plus"></i>  Add Student</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <!-- PANEL 3 -GRADE -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingThree">
                            <a id = "archives-panel-label" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Class PDF <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div class="list-group" >
                                <div class="list-group-item" id = "settings-panel-details">
                                    <form class="form-inline" id = "settings-upload-form" enctype="multipart/form-data" action="<?=site_url('user/upload_pdf')?>" method="POST">
                                        <!-- Name of input element determines name in $_FILES array -->
                                        
                                        <input id="settings-choose-file-button" name="classlist" type="file" />
                                        <label for="settings-choose-file-button" class="btn btn-primary" id = "settings-choose-file-button"><b> Choose File...</b></label>
                                        <label class="file-upload-filename" id="file-upload-filename">No File Selected</label>
                                        <input id="settings-upload-button-input" name="classlist" type="submit" />
                                        <button for="settings-upload-button" type="submit" class="btn btn-primary" id = "settings-upload-button"/> <i class = "fa fa-upload"></i>Upload</button>
                                        
                                        <span><b> Module Type: </b></span>
                                        <select class = "form-control" id = "settings-adding-select" name="module_type" required>
                                            <option selected disabled>Please Select</option>
                                            <option value="Lec">Lecture</option>
                                            <option value="Lab">Laboratory</option>
                                        </select>
                                    </form>     
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <?php if (isset($status))
            {   
                echo "<div class='container'>";
                echo "<div class='alert alert-info'>";
                echo    "<a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
                echo    "<strong>Upload pdf status:</strong>  ".$status;
                echo "</div>";
                echo "</div>";
            }
            ?>
        </div> <!-- row -->      
    </div> <!-- container -->


    <!-- FOOTER -->
     <div class = "container-fluid" id = "footer-wrapper">
        <div class = "container">
            <div class="row" id = "footer-details-wrapper">
                <div class="col-lg-6 col-md-7 col-sm-12 col-xs-12" id = "footer-details">      
                    <img alt="Brand" id = "footer-logo"src="<?php base_url(); ?>/resources/img/logoce.png"> 
                    <img alt="Brand" id = "footer-logo"src="<?php base_url(); ?>/resources/img/logocpe.png">
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
    
    <script type="text/javascript" src="<?php base_url(); ?>/js/script.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/settings.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/chosen.jquery.min.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/bootstrap.min.js"></script>


</body>
