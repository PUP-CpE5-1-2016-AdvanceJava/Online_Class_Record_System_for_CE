<!-- SETTINGS -->
<div class = "container" id = "settings-wrapper">
    <div class = "col-md-12" id = "settings-title">
        <span> SETTINGS </span> 
    </div>
    <div class = "row">
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="panel" id = "settings-panel">
                <div class="panel-heading" role="tab" id="headingOne">
                    <a id = "archives-panel-label" >Change Password</a>
                </div>
                <div class="list-group" id="status_loc">
                    <div class="list-group-item" id ="settings-panel-details">
                        <form class="form-inline" name="<?=site_url('user/admin_settings/change_pw')?>" id='settings-change-pw'>
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
    </div> <!-- row -->      
</div> <!-- container -->

    <script type="text/javascript" src="<?php base_url(); ?>/js/script.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/settings.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/chosen.jquery.min.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/bootstrap.min.js"></script>

</body>

</html>