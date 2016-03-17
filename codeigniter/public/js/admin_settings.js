$(document).ready(function(){
	//---Admin Change Password---//
	$('form#admin-change-pw').submit(function(){
		var link = $(this).attr('name');
		var data = $(event.target).serializeArray();
		$.post(link,data,function(response){
			if (response.status == "OK")
			{
				$('div#status_loc').prepend("\
				<div class='container'>\
                <div class='alert alert-info'>\
                  <a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>\
                  <strong>Change Password status:</strong> "+response.status+"\
                </div>\
                </div>");
				$('form#admin-change-pw').find('div>input').each(function(){
					$(this).val("");
				})
			}
			else
			{
				alert(response.status);
			}
		})
		return false;
	})

	//---Admin Change Username---//
	$('form#admin-change-un').submit(function(){
		var link = $(this).attr('name');
		var data = $(event.target).serializeArray();
		$.post(link,data,function(response){
			if (response.status == "OK")
			{
				$('div#status_loc').prepend("\
				<div class='container'>\
                <div class='alert alert-info'>\
                  <a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>\
                  <strong>Change Username status:</strong> "+response.status+" You may need to relog to update your username label\
                </div>\
                </div>");
				$('form#admin-change-un').find('div>input').each(function(){
					$(this).val("");
				})
			}
			else
			{
				alert(response.status);
			}
		})
		return false;
	})

	//---Create Account---//
	$('form#register-acc').submit(function(){
		var data = $(event.target).serializeArray();
		var link = $(this).attr('name');
		$.post(link,data,function(response){
			if (response.status == "OK")
			{
				$('div#status_loc').prepend("\
				<div class='container'>\
                <div class='alert alert-info'>\
                  <a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>\
                  <strong>Registration status:</strong> "+response.status+"\
                </div>\
                </div>");
				$('form#register-acc').find('input').each(function(){
					$(this).val("");
				})
				$('form#register-acc').find('select').each(function(){
					$(this).val("");
				})
				$('form#register-acc').find('#Info').each(function(){
					$(this).val("");
				})
			}
			else
			{
				alert(response.status);
			}
		})
		return false;
	})

	//---Reset Account Pass---//
	$('form#reset-acc-pass').submit(function(){
		var data = $('select#settings-reset-select').val();
		var link = $(this).attr('name');
		$.post(link,{'data':data},function(response){
			if (response.status = "OK")
			{
				$('div#status_loc').prepend("\
				<div class='container'>\
                <div class='alert alert-info'>\
                  <a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>\
                  <strong>Reset password status:</strong> "+response.status+", default pass will be '"+response.pass+"'\
                </div>\
                </div>");
			}
			else
			{
				alert(response.status);
			}
		})
		return false;
	})
})