$(document).ready(function() {
	//-----------------------------delete event-----------------------------//
	$("span#delete-event-button").each(function(){
		$(this).click(function(){
			var date = $("div#event-title h4#current-event-date").html();
			var sibling = $(this).parent().prev();
			var name = $(sibling).find('p').html();
			var link = $(this).attr('href');
			$.post(link,{'event_date':date,'event_name':name},function(response){
				if(response.status == "OK")
				{
					$("div#"+response.event_date).find('p').each(function(){
						if($(this).html() == response.event_name) 
						{
							$(this).parent().parent().parent().remove();
						}
					})
					if($('div#event-list').find("div#"+response.event_date).length == 0)
					{
						var date_id = "td#td-" + response.event_date;
						$(date_id).empty();
						var arr = response.event_date.split('-');
						$(date_id).html(arr[1]);
					}
				}
			})
		})
	})
	//----------------------------------------------------------------------//

	//-----------------------------add event--------------------------------//
	$("form#add-event-form").submit(function(){
		var link = $(this).attr('href')
		var event_name = $("div#event-title div>form>textarea#add-event").val();
		var event_date = $("div#event-title h4#current-event-date").html();
		
		var data = {'event_name' : event_name, 'event_date' : event_date};
		$.post(link,data,function(response){
			if (response.status == "OK")
			{
				console.log("done");
				console.log(response);
				// to slide up and empty textarea
				$("div#event-title div>form>textarea#add-event").val('');
				$("#event-title .form-group").slideUp(300, function(e){
					$("#event-scroll").css('height','calc(100% - '+$('div#event-title').outerHeight()+'px)');
				});

				$("div#event-list").append("<div class='cal-event' id='"+response.event_date+"'>\
				                                <div class='row vertical-align'>\
				                                    <div class='col-xs-9'><p>"+response.event_name+"</p></div>\
				                                    <div class='col-xs-3'><span class='glyphicon glyphicon-remove' id='delete-button'></span></div>\
				                                </div>\
				                            </div>");
				
				
					var date_id = "td-" + response.event_date;
					var str = document.getElementById(date_id).innerHTML;
				if (str.indexOf("div") < 0)
				{
					var event_mark_top = document.createElement('div');
	            	event_mark_top.setAttribute("id", "event-mark-top");
	            	document.getElementById(date_id).appendChild(event_mark_top);


	            	var event_mark_bottom = document.createElement('div');
	            	event_mark_bottom.setAttribute("id", "event-mark-bottom");
	            	document.getElementById(date_id).appendChild(event_mark_bottom);
				}
				// to slide down the event name
				$("div#"+response.event_date).slideDown(300);
			}

		})
		return false;
	})
	//-----------------------------------------------------------------------//
})
