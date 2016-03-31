$(document).ready(function(){
	//---Faculty and Chairperson Change Password---//
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

	//---Faculty add student---//
	$('form#settings-add-student').submit(function(){
		var link = $(this).attr('name');
		var data = $(event.target).serializeArray();
		$.post(link,data,function(response){
			if (response.status == "OK")
			{
				$('div#status_loc').prepend("\
				<div class='container'>\
                <div class='alert alert-info'>\
                  <a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>\
                  <strong>Add Student status:</strong> "+response.status+"\
                </div>\
                </div>");
				$('form#settings-add-student').find('div>input').each(function(){
					$(this).val("");
				})

				$('form#settings-add-student').find("select[name='subject']").each(function(){
					$(this).val("default_subject");
				})

				$('form#settings-add-student').find("select[name='section']").each(function(){
					$(this).val("default_section");
				})
			}
			else
			{
				alert(response.status);
			}
		})
		return false;
	})
	
	$("#settings-choose-file-button").change(function () {
        var fileName = $(this).val().replace('C:\\fakepath\\', '');
        $("#file-upload-filename").html(fileName);
	});


})
