$(document).ready(function(){
	//---Admin Change Password---//
	$('form#settings-change-pw').submit(function(){
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
				$('form#settings-change-pw').find('div>input').each(function(){
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
})