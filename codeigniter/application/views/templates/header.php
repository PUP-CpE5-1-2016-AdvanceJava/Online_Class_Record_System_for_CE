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
                <div class = "col-lg-12 col-md-12" id = "header-details">
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logoce.png"> 
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logocpe.png">
                    <span><b>College of Engineering</b> | Online Class Record </span>     
                </div> 
            </div>  
        </div>  <!-- container -->  
    </div> <!-- container-fluid -->

    <!-- NAVBAR -->
 <div class = "container-fluid" id = "navbar-wrapper">
    <div class = "container" >
        <div class = "row">
             <ul class = " nav pull-left" id= "navbar-maintabs">
                <li><a href = "<?=site_url('user/archives')?>">ARCHIVES</a></li>
                <li><a href = "<?=site_url('user/calendar')?>">CALENDAR</a></li>
                <?php if ($user['UserType'] == 'Faculty'): ?>
                    <li><a href="<?=site_url('user/settings')?>">SETTINGS</a></li>
                <?php endif; ?>
                <li><a href = "<?=site_url('user/home')?>">HOME</a></li>
            </ul>
            <ul class = " nav pull-right" id = "navbar-subtabs">
                <li><a href = "<?=site_url('user/logout')?>"><i class="fa fa-sign-out" id = "navbar-subtabs-logo"></i>Logout</a></li>
                <li><a>Hi <b><u><?php echo $user['Username'];?></u><b>!</a></li>
            </ul>
        </div>    
    </div> <!-- container -->
</div> <!-- container-fluid -->