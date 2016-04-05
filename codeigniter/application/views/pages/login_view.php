<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>CE-OCR Login</title>
    
    <link type="text/css" href="<?php base_url(); ?>/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link type="text/css" href="<?php base_url(); ?>/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet">

    <link type="text/css" href="<?php base_url(); ?>/css/stylesheet.css" rel="stylesheet">
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/jquery-2.1.3.min.js"></script>
</head>
	
<body id = "login-body-wrapper">

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
		</div>	<!-- container -->	
	</div> <!-- container-fluid -->
	
	<div class = "container-fluid" id = "sub-header-wrapper"></div>

	<div class = "container" id= "login-content-wrapper">
		<div class = "row">
			<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 " id = "login-title-wrapper">
				<p id = "login-title-main"><span>Welcome to CE-OCR</p></span></p>
				<p id = "login-title-sub"><span>Serves as an Online Class Record <br> Exclusively for the College of Engineering faculty</span></p>
			</div>
					
			<div class="col-lg-4 col-md-4 col-sm-8 col-xs-10 col-lg-offset-0 col-md-offset-0 col-sm-offset-2 col-xs-offset-1" id = "login-form-wrapper">
		    	<form class="form-horizontal" id = "login-form-details" action="<?=site_url('user/login')?>" method="post">   
		    		<div id = "login-form-title"><span>Login to get started</span></div>
		      		<div class="input-group" id = "login-form-input">
						<span class="input-group-addon"><i class="fa fa-user"></i></span>
		      			<input type="text" class="form-control" name="login_username" placeholder="Username" required="" />
				  	</div>	
					<div class="input-group" id = "login-form-input">
						<span class="input-group-addon"><i class="fa fa-asterisk"></i></span>
		      			<input type="password" class="form-control" name="login_password" placeholder="Password" required=""/>      
					</div>
		      			<button class="btn btn-success" id = "login-form-button" type="submit">Login</button>   
		    	</form>
		  	</div>
		</div>
	</div>

	
		<?php if (isset($error))
		{	echo "<div class='container'>";
			echo "<div class='alert alert-info'>";
			echo    "<strong>Login Error:</strong>  ".$error;
		  	echo "</div>";
		  	echo "</div>";
		}
		?> 
	
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>