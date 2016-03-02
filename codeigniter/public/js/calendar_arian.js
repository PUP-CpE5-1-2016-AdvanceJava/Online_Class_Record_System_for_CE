$(document).ready(function() {


	//-----------------------------delete event-----------------------------//
	$("span#delete-event-button").each(function(){
		$(this).click(function(){
			console.log("click");
			var date = $(this).parent().parent().parent().attr('id');
			var link = $(this).attr('href');
			$.post(link,{'event_date':date},function(response){
				if(response.status == "OK")
				{
					$("div#"+response.event_date).remove();
					var date_id = "td#td-" + response.event_date;
					$(date_id).empty();
					var arr = response.event_date.split('-');
					$(date_id).html(arr[1]);
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
				var event_mark_top = document.createElement('div');
            	event_mark_top.setAttribute("id", "event-mark-top");
            	document.getElementById(date_id).appendChild(event_mark_top);

            	var event_mark_bottom = document.createElement('div');
            	event_mark_bottom.setAttribute("id", "event-mark-bottom");
            	document.getElementById(date_id).appendChild(event_mark_bottom);

				// to slide down the event name
				$("div#"+response.event_date).slideDown(300);
			}

		})
		return false;
	})
	//-----------------------------------------------------------------------//
})

function event_marker()
	{
	    var everyChild = document.querySelectorAll("#event-list>div");
	    var event_id_array = [];
	    var unique_event_id = [];

	    if (everyChild.length != 0){
	        for (var i = 0; i < everyChild.length; i++){
	            event_id_array[i] = everyChild[i].id;
	        }

	        event_id_array.sort();
	        unique_event_id = get_unique_id(event_id_array);

	        for (var i = 0; i < unique_event_id.length; i++){
	            var event_id = unique_event_id[i];
	            var month = event_id.slice(0, event_id.search("-"));
	            var date = event_id.slice(event_id.search("-") + 1, event_id.search("-") + 3);
	            var year = event_id.slice(event_id.search("-") + date.length + 1, event_id.search("-") + date.length + 6);

	            if (date.search("-") == 1){
	                date = date.slice(0, 1);
	                year = event_id.slice(event_id.search("-") + date.length + 1, event_id.search("-") + date.length + 6);
	            }

	            date = Math.abs(date);
	            year = year.slice(1, 5);

	            var date_id = "td-" + month + "-" + date + "-" + year;

	            var event_mark_top = document.createElement('div');
	            event_mark_top.setAttribute("id", "event-mark-top");
	            document.getElementById(date_id).appendChild(event_mark_top);

	            var event_mark_bottom = document.createElement('div');
	            event_mark_bottom.setAttribute("id", "event-mark-bottom");
	            document.getElementById(date_id).appendChild(event_mark_bottom);
	        }
	    }
	}

	function get_unique_id(ids)
	{
	    var seen = {};
	    var out = [];
	    var len = ids.length;
	    var j = 0;
	    var ids_corrected_dates = [];

	    for(var i = 0; i < len; i++) {
	        var full_date = ids[i];
	        var month = full_date.slice(0, full_date.search("-"));
	        var date = full_date.slice(full_date.search("-") + 1, full_date.search("-") + 3);
	        var year = full_date.slice(full_date.search("-") + date.length + 1, full_date.search("-") + date.length + 6);

	        if (date.search("-") == 1){
	            date = date.slice(0, 1);
	            year = full_date.slice(full_date.search("-") + date.length + 1, full_date.search("-") + date.length + 6);
	        }

	        date = Math.abs(date);
	        year = year.slice(1, 5);
	        ids_corrected_dates[i] = month + "-" + date + "-" + year;
	    }

	    for(var i = 0; i < len; i++) {
	        var item = ids_corrected_dates[i];

	        if(seen[item] !== 1) {
	           seen[item] = 1;
	           out[j++] = item;
	        }
	    }

	    return out;
	}