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
                            <a id = "archives-panel-label" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Change Admin Password <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="list-group" >
                                <div class="list-group-item" id ="settings-panel-details">
                                    <form class="form-inline" id="admin-change-pw" name="<?=site_url('user/admin_settings/change_pw')?>">
                                        <div class="form-group" id = "settings-password-form">
                                            <input type="password" class="form-control" placeholder="Old Password" name="old_pw">
                                        </div>
                                        <div class="form-group" id = "settings-password-form">
                                            <input type="password" class="form-control" id="exampleInputEmail2" placeholder="New Password" name="new_pw">
                                        </div>
                                        <div class="form-group" id = "settings-password-form">
                                            <input type="password" class="form-control" id="exampleInputEmail2" placeholder="Confirm Password" name="conf_new_pw">
                                        </div>
                                        <button class="btn btn-success " id = "settings-password-form-button" type="submit"><i class="fa fa-check"></i> Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- PANEL 2 -CHANGEUN -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <a id = "archives-panel-label" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Change Admin Username <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
                            <div class="list-group" >
                                <div class="list-group-item" id ="settings-panel-details">
                                    <form class="form-inline" id="admin-change-un" name="<?=site_url('user/admin_settings/change_un')?>">
                                        <div class="form-group" id = "settings-password-form">
                                            <input type="username" class="form-control" placeholder="Old Username" name="old_un">
                                        </div>
                                        <div class="form-group" id = "settings-password-form">
                                            <input type="username" class="form-control" id="exampleInputEmail2" placeholder="New Username" name="new_un">
                                        </div>
                                        <button class="btn btn-success " id = "settings-password-form-button" type="submit"><i class="fa fa-check"></i> Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANEL 3 - CREATE FACCCT -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingThree">
                            <a id = "archives-panel-label" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Create Account <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div class="list-group" >
                                <div class="list-group-item" id = "settings-create-panel-details" >
                                    <form class="form-horizontal" id="register-acc" name="<?=site_url('user/admin_settings/create_acc')?>">
                                        <div class="form-group">
                                            <label for="Email" class="col-sm-2 control-label">Email</label>
                                            <div class="col-sm-10">
                                                <input type="username" class="form-control" id="Email" placeholder="Username" name="Username">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="Password" class="col-sm-2 control-label">Password</label>
                                            <div class="col-sm-10">
                                                <input type="password" class="form-control" id="Password" placeholder="Password" name="Password">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="Confirm" class="col-sm-2 control-label">Confirm Password</label>
                                            <div class="col-sm-10">
                                                <input type="password" class="form-control" id="Password" placeholder="Confirm Password" name="Confirm">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="Info" class="col-sm-2 control-label">Personal Info</label>
                                            <div class="col-sm-10">
                                                <textarea id = "Info" class="form-control" type = "text" rows="4" style = "height: 100px; resize:none;" placeholder="Personal Information"  name="PersonalInfo" required></textarea>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="Firstname" class="col-sm-2 control-label">Firstname</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="Firstname" placeholder="First Name" name="Fname">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="Middlename" class="col-sm-2 control-label">Middlename</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="Middlename" placeholder="Middle Name" name="Mname">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="Lastname" class="col-sm-2 control-label">Lastname</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" id="Lastname" placeholder="Last Name" name="Lname">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-sm-2 control-label" for="Usertype">User Type</label> 
                                            <div class="col-sm-10">
                                                <select class = "form-control" name="UserType" id = "Usertype" required>
                                                    <option disabled selected value="default_usertype">User Type</option>
                                                    <option value="Chairperson">Chairperson</option>
                                                    <option value="Faculty">Faculty</option>
                                                </select>
                                            </div>    
                                        </div>        

                                        <div class="form-group">
                                            <label class="col-sm-2 control-label" for="Userdepartment">User Department</label> 
                                            <div class="col-sm-10 " >        
                                                <select class = "form-control" name="UserDept" id = "Userdepartment" required>
                                                    <option disabled selected value="default_userdept">User Department</option>
                                                    <option >Civil Engineering</option>
                                                    <option >Computer Engineering</option>
                                                    <option >Electrical Engineering</option>
                                                    <option >Electronics and Communication Engineering</option>
                                                    <option >Industrial Engineering</option>
                                                    <option >Mechanical Engineering</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-offset-2 col-sm-10">
                                                <button class="btn btn-primary " id = "settings-createacct-form-button" type="submit"><i class="fa fa-plus"></i> Create Account</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>  

                    <!-- PANEL 4 - RESET FACPWD -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingFour">
                            <a id = "archives-panel-label" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Faculty Reset Password <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                            <div class="list-group" >
                                <div class="list-group-item" id = "settings-panel-details">
                                    <form class = "form-inline" id="reset-acc-pass" name="<?=site_url('user/admin_settings/fac_reset_pass')?>">
                                        <div class="form-group">
                                            <select class = "form-control" id = "settings-reset-select" placeholder = "Faculty Name" name="acc_name">
                                                <option selected value="1" disabled >Faculty Name</option>
                                                <?php
                                                    if(isset($users))
                                                    {
                                                        foreach($users as $username):
                                                        echo "<option value=".$username['Username'].">".$username['Username']."</option>";
                                                        endforeach;
                                                    }
                                                ?>
                                            </select>
                                        </div>
                                        <button class="btn btn-danger " id = "settings-resetpwd-form-button" type="submit"><i class="fa fa-refresh"></i> Reset Password</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div> <!-- row -->      
    </div> <!-- container -->

        <!-- FOOTER -->
     <div class = "container-fluid" id = "footer-wrapper">
        <div class = "container">
            <div class="row">
                <div class="col-lg-6 col-md-6" id = "footer-details">      
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logoce.png"> 
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logocpe.png">
                    <span><b>College of Engineering</b> | Online Class Record </span>      
                    <p><i class="fa fa-copyright"></i>All Rights Reserved</p>
                </div>
                <div class = "col-lg-5 col-md-5 pull-right" id = "footer-form">
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
    <script type="text/javascript" src="<?php base_url(); ?>/js/admin_settings.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/chosen.jquery.min.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/bootstrap.min.js"></script>

</body>

</html>