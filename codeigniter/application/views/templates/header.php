<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>CE-Online Class Record</title>
    
    <link type="text/css" href="<?php base_url(); ?>/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/plugins/perfect-scrollbar/css/perfect-scrollbar.min.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/css/stylesheet.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/css/prism.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/css/chosen.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/plugins/bootstrap/css/bootstrap-multiselect.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/css/sidebar.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/css/table.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/css/calendar.css" rel="stylesheet">
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/jquery-2.1.3.min.js"></script>

</head>
<body>
	<!-- HEADER -->
    <div class="container-fluid" id = "header-wrapper">
        <div class = "container">
            <div class="row">
                <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "header-details">
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logoce.png"> 
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logocpe.png">
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
                <?php
                    if ($user['type'] != 'Faculty'):
                        ?>
                            <li><a href="<?=site_url('user/archives')?>" id="<?php if($user['ActiveHeader'] == 'archives') echo 'active';?>">ARCHIVES</a></li>
                        <?php
                    endif;
                ?>
                <li><a href = "<?=site_url('user/calendar')?>" id="<?php if($user['ActiveHeader'] == 'calendar') echo 'active';?>">CALENDAR</a></li>
                <li><a href = "<?=site_url('user/settings')?>" id="<?php if($user['ActiveHeader'] == 'settings') echo 'active';?>">SETTINGS</a></li>
                <li><a href = "<?=site_url('user/home')?>" id="<?php if($user['ActiveHeader'] == 'home') echo 'active';?>">HOME</a></li>
            </ul>
            
            <ul class = " nav pull-right" id = "navbar-subtabs">
                <li><a href = "<?=site_url('user/logout')?>"><i class="fa fa-sign-out"></i>Logout</a></li>
                <li><p class="navbar-text"><?php echo $user['Fullname'];?></p></li>
            </ul>
        </div>
        <div class = "row" id = "navbar-res">
            <ul class = " nav pull-left" id= "navbar-maintabs">
                 <?php
                    if ($user['type'] != 'Faculty'):
                        ?>
                            <li><a href="<?=site_url('user/archives')?>" id="<?php if($user['ActiveHeader'] == 'archives') echo 'active';?>"><i class = "fa fa-archive "></i></a></li>
                        <?php
                    endif;
                ?>
                <li><a href = "<?=site_url('user/calendar')?>" id="<?php if($user['ActiveHeader'] == 'calendar') echo 'active';?>"><i class = "fa fa-calendar "></i></a></li>
                <li><a href = "<?=site_url('user/settings')?>" id="<?php if($user['ActiveHeader'] == 'settings') echo 'active';?>"><i class = "fa fa-wrench "></i></a></li>
                <li><a href = "<?=site_url('user/home')?>" id="<?php if($user['ActiveHeader'] == 'home') echo 'active';?>"><i class = "fa fa-home "></i></a></li>
            </ul>
            
            <ul class = " nav pull-right" id = "navbar-subtabs">
                <li><a href = "<?=site_url('user/logout')?>"><i class="fa fa-sign-out"></i></a></li>
            </ul>
        </div>          
    </div> <!-- container -->
</div> <!-- container-fluid -->
