<div id="content" class="container">
	<div id="register_form">
		<h1>Sign Up</h1>
		<form action="<?=site_url('user/do_register')?>" method="post">
			<div>
			<label for="Username">User Name</label>
			<input type="text" name="Username" value="<?=set_value('Username') ?>"/>
			<label for="Password">Password</label>
			<input type="password" name="Password"/>
			<br><br><div><label for="PersonalInfo">Personal Info</label>
			</div></div>
			<textarea type="text" name="PersonalInfo" value="<?=set_value('PersonalInfo') ?>" style="margin-bottom:20px"></textarea>
			<div><label for="Fname">First Name: </label><input type="text" name="Fname"></div>
			<div><label for="Mname">Middle Name: </label><input type="text" name="Mname"></div>
			<div><label for="Lname">Last Name: </label><input type="text" name="Lname"></div>
			<div><label for="UserType">User Type: </label><select name="UserType">
				<option selected disabled>Please Select</option>
                <option value="Administrator">Administrator</option>
                <option value="Chairperson">Chairperson</option>
                <option value="Faculty">Faculty</option>
			</select></div>
			<div><label for="UserDept">User Department: </label><select name="UserDept">
				<option selected disabled>Please Select</option>
                <option value="CpE">Computer Engineering</option>
                <option value="CE">Civil Engineering</option>
                <option value="ECE">Electronics and Communication Engineering</option>
                <option value="EE">Electrical Engineering</option>
                <option value="IE">Industrial Engineering</option>
			</select></div>
			<input type="submit" value="Sign up" name="register"/>
		</form>
	</div>
</div>

<div class="error">
	<?php echo validation_errors(); ?>
</div>
