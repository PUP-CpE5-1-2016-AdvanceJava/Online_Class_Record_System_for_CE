var dateToday = new Date(),
		selectedDate = dateToday,
		monthToday = dateToday.getMonth(),
		yearToday = dateToday.getFullYear(),
		dayToday = dateToday.getDate(),
		monthView = monthToday,
		yearView = yearToday,
		mode = "month",
		month_name2 = ['January','February','March','April','May','June','July','August','September','October','November','December'];

$(document).ready(function(){
	//START PAGE
	$('#event-scroll').perfectScrollbar({
		suppressScrollX: true,
	});          
	setPage();
	
	$("#add-event-button").click(function(e){
		if($("#event-title .form-group").css('display') == "none"){
			$('#event-title .form-group').slideDown(300, function(e) {
				$('#event-scroll').css('height','calc(100% - '+$('div#event-title').outerHeight()+'px)');
			});;
		}else{
			$('#event-title .form-group').slideUp(300, function(e){
				$('#event-scroll').css('height','calc(100% - '+$('div#event-title').outerHeight()+'px)');
			});
		}
	});
	
	//Today Button
	$('#today-button').click(function(e){
		if(!$(this).hasClass('active')){
			$('.currentView').removeClass('currentView');
			$('#calendar-div-'+month_name2[monthToday]+'-'+yearToday).addClass('currentView');
			monthView =  monthToday;
			$('.selectedDate').removeClass('selectedDate');
			$('#td-'+month_name2[monthToday]+'-'+dayToday+'-'+yearToday).addClass('selectedDate');
			$(this).addClass('active');
			$("#current-event-date").text(month_name2[monthView]+' '+dayToday+', '+yearToday);
			$('#calendar-h2-month').text(month_name2[monthView] + " "+yearToday);
			$('.cal-event').not($('div#'+month_name2[monthView]+'-'+dayToday+'-'+yearToday)).slideUp(300);
			$('div#'+month_name2[monthView]+'-'+dayToday+'-'+yearToday).each(function(e){
				$(this).slideDown(300);
			});
		}
	});

	//NEXT BUTTON
	$('#next').click(function(e){
		if(!($(this).hasClass('disabled'))){
			if(mode == "month"){
				$('div#calendar-div-'+month_name2[monthView]+'-'+yearView+'.col-lg-12.col-md-12').removeClass('currentView');
				monthView = monthView+1;
				if(monthView > 11){
					monthView = 0;
					yearView = yearView+1;
				}
				$('div#calendar-div-'+month_name2[monthView]+'-'+yearView+'.col-lg-12.col-md-12').addClass('currentView');
				$('#calendar-h2-month').text(month_name2[monthView] + " "+yearView);
				if(monthView > 0 && yearView >= (yearToday-1)) $('#back').removeClass('disabled'); 
				if(monthView == 11 && yearView == (yearToday+1)) $('#next').addClass('disabled');
				todayButtonToggle();
			}else if(mode == "year"){
				yearView = yearView+1;
				$('#calendar-h2-month').text(yearView);
				for(var i = -1; i <2; i++){for(var j = 1; j<5; j++){
					if((yearToday+i) != yearView){
						$('#calendar-row-'+j+'-'+(yearToday+i)).css("display","none");
					}else{
						$('#calendar-row-'+j+'-'+(yearToday+i)).css("display","block");
					}
				}}
				if(yearView == yearToday+1) $('#next').addClass('disabled');
				if(yearView > yearToday-1) $('#back').removeClass('disabled');
				$('.cal-event').each(function(e){
					var $dates = ($(this).attr("id")).split("-");
					if(parseInt($dates[2])==yearView){
						$(this).slideDown(400);
					}else{
						$(this).slideUp(400);
					}
				});
			}
		}
	});

	//NEXT BUTTON
	$('#back').click(function(e){
		if(!($(this).hasClass('disabled'))){
			if(mode == "month"){
				$('div#calendar-div-'+month_name2[monthView]+'-'+yearView+'.col-lg-12.col-md-12').removeClass('currentView');
				monthView = monthView-1;
				if(monthView < 0){
					monthView = 11;
					yearView = yearView-1;
				}
				$('div#calendar-div-'+month_name2[monthView]+'-'+yearView+'.col-lg-12.col-md-12').addClass('currentView');
				$('#calendar-h2-month').text(month_name2[monthView] + " "+yearView);
				if(monthView < 11 && yearView <= (yearToday+1)) $('#next').removeClass('disabled'); 
				if(monthView == 0 && yearView == (yearToday-1)) $('#back').addClass('disabled');
				todayButtonToggle();
			}else if(mode == "year"){
				yearView = yearView-1;
				$('#calendar-h2-month').text(yearView);
				for(var i = -1; i <2; i++){for(var j = 1; j<5; j++){
					if((yearToday+i) != yearView){
						$('#calendar-row-'+j+'-'+(yearToday+i)).css("display","none");
					}else{
						$('#calendar-row-'+j+'-'+(yearToday+i)).css("display","block");
					}
				}}
				if(yearView == yearToday-1) $('#back').addClass('disabled');
				if(yearView < yearToday+1) $('#next').removeClass('disabled');
				$('.cal-event').each(function(e){
					var $dates = ($(this).attr("id")).split("-");
					if(parseInt($dates[2])==yearView){
						$(this).slideDown(400);
					}else{
						$(this).slideUp(400);
					}
				});
			}
		}
	});

	//MONTH CLICKED IN YEAR
	$('div[id^="calendar-div-Jan"], div[id^="calendar-div-Feb"], div[id^="calendar-div-Mar"], div[id^="calendar-div-Apr"], div[id^="calendar-div-May"], div[id^="calendar-div-Jun"], div[id^="calendar-div-Jul"], div[id^="calendar-div-Oct"], div[id^="calendar-div-Nov"], div[id^="calendar-div-Dec"]').on('click', function(e){
		if($('#calendar-div-wrapper').hasClass('yearview')){
			var passMonth = $(this).attr('id').split("-")
			for(var i=0; i < 12; i++){
				if(passMonth[2] == month_name2[i]){
					monthView = i;
					break;
				}
			}
			yearView = parseInt(passMonth[3]);
			$('#year-button').removeClass('active');
			$('#month-button').addClass('active');
			todayButtonToggle();
			monthMode();
		}
	});

	//YEAR BUTTON
	$('#year-button').click(function(e){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$('#month-button').removeClass('active');
			$('#event-title .form-group').slideUp(300, function(e){
				$('#event-scroll').css('height','calc(100% - '+$('div#event-title').outerHeight()+'px)');
			});
			yearMode();
		}
	});

	//MONTH BUTTON
	$('#month-button').click(function(e){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$('#year-button').removeClass('active');
			yearView = parseInt((($('.selectedDate').attr('id')).split("-"))[3]);
			for(var i=0; i < 12; i++){
				if((($('.selectedDate').attr('id')).split("-"))[1] == month_name2[i]){
					monthView = i;
					break;
				}
			}
			todayButtonToggle();
			monthMode();
		}
	});
});

function setPage(){
	$('#td-'+month_name2[monthToday]+'-'+dayToday+'-'+yearToday).addClass('current-date').addClass('selectedDate');
	todayButtonToggle();
	monthMode();
}


function yearMode(){
	mode = "year";
	$('#today-button').addClass('disabled');
	$('#calendar-div-wrapper').addClass('yearview');
	if(yearView == yearToday+1) $('#next').addClass('disabled');
	if(yearView < yearToday+1) $('#next').removeClass('disabled');
	if(yearView == yearToday-1) $('#back').addClass('disabled');
	if(yearView > yearToday-1) $('#back').removeClass('disabled');
	for (var i = 0; i<12;i++){
		for(var j=-1; j<2; j++){
			$('#calendar-div-'+month_name2[i]+'-'+(yearToday+j)).removeClass('col-lg-12').removeClass('col-md-12').addClass('col-lg-4').addClass('col-md-4');
		}
	}
	for(var i = -1; i <2; i++){
		for(var j = 1; j<5; j++){
			if((yearToday+i) != yearView){
				$('#calendar-row-'+j+'-'+(yearToday+i)).css("display","none");
			}else{
				$('#calendar-row-'+j+'-'+(yearToday+i)).css("display","block");
			}
		}
	}
	$('tr[id^="calendar-day"]').each(function(e){
		$(this).empty();
		$(this).append('<td>Su</td><td>Mo</td><td>Tu</td><td>We</td><td>Th</td><td>Fr</td><td>Sa</td>');
	});
	$('.currentView').removeClass('currentView');
	$('#calendar-h2-month').text(yearView);
	$('.cal-event').each(function(e){
		var $dates = ($(this).attr("id")).split("-");
		$(this).prepend("<h4>"+$dates[0]+" "+$dates[1]+"</h4>");
		$(this).find('span').clone().appendTo($(this).find('h4'));
		($(this).find('.col-xs-3')).css('display','none');
		($(this).find('.col-xs-9')).removeClass('col-xs-9').addClass('col-xs-12');
		if(parseInt($dates[2])==yearView){
			$(this).slideDown(400);
		}
	});
	$('[id^="calendar-tbody-row"] td').off('click');
	$('h4#current-event-date, #event-title h6').slideUp(300,function(e){
		$('#event-scroll').css('height','calc(100% - '+$('div#event-title').outerHeight()+'px)');
	});
}



function monthMode(){
	mode = "month";
	$('div[id^="calendar-row-"]').css('display','block');
	$('h4#current-event-date').slideDown(300);
	$('h4#current-event-date, #event-title h6').slideDown(300,function(e){
		$('#event-scroll').css('height','calc(100% - '+$('div#event-title').outerHeight()+'px)');
	});
	$('#back').removeClass('disabled');
	$('#next').removeClass('disabled');
	$('#today-button').removeClass('disabled');
	$('#calendar-div-wrapper').removeClass('yearview');
	if(monthView > 0 && yearView >= (yearToday-1)) $('#back').removeClass('disabled'); 
	if(monthView == 11 && yearView == (yearToday+1)) $('#next').addClass('disabled');
	if(monthView < 11 && yearView <= (yearToday+1)) $('#next').removeClass('disabled'); 
	if(monthView == 0 && yearView == (yearToday-1)) $('#back').addClass('disabled');
	
	for (var i = 0; i<12;i++){
		for(var j = -1; j < 2; j++){
			$('#calendar-div-'+month_name2[i]+'-'+(yearToday+j)).removeClass('col-lg-4').removeClass('col-md-4').addClass('col-lg-12').addClass('col-md-12');
		}
	}
	$('tr[id^="calendar-day"]').each(function(e){
		$(this).empty();
		$(this).append('<td>Sunday</td><td>Monday</td><td>Tuesday</td><td>Wednesday</td><td>Thursday</td><td>Friday</td><td>Saturday</td>');
	});
	$('#calendar-div-'+month_name2[monthView]+'-'+yearView).addClass('currentView');
	$('#calendar-h2-month').text(month_name2[monthView] + " "+yearView);

	///EVENT HIDE EXCEPT CURRENT
	var curDateID = ["","",""];
	try {
		curDateID[0] = (($('.selectedDate').attr('id')).split("-"))[1];
		curDateID[1] = (($('.selectedDate').attr('id')).split("-"))[2];
		curDateID[2] = (($('.selectedDate').attr('id')).split("-"))[3];
	}catch(e){
		curDateID[0] = month_name2[monthToday];
		curDateID[1] = dayToday;
		curDateID[2] = yearToday;
	}
	$("#current-event-date").text(curDateID[0]+" "+curDateID[1]+", "+curDateID[2]);

	$('.cal-event').each(function(e){
		if($(this).attr('id') != (curDateID[0]+'-'+curDateID[1]+'-'+curDateID[2])){
			$(this).slideUp(300);
			($(this).find('.col-xs-3')).css('display','block');
			($(this).find('.col-xs-12')).removeClass('col-xs-12').addClass('col-xs-9');
			$('.cal-event h4').remove();
		}else{
			if($(this).css('display')== 'none') $(this).css('display','block');
			else {
				$(this).find('h4').slideUp(300).remove();
				($(this).find('.col-xs-3')).css('display','block');
				($(this).find('.col-xs-12')).removeClass('col-xs-12').addClass('col-xs-9');
			}
		}
	});

	///CLICK HIGHLIGHT
	$('[id^="calendar-tbody-row"] td').on('click', function(e){
		if($(this).text() !== ""){
			$('.selectedDate').removeClass('selectedDate');
			$(this).addClass('selectedDate');
			var tempdate = ($(this).attr('id')).split('-');
			$('.cal-event').not($('#'+tempdate[1]+'-'+tempdate[2]+'-'+tempdate[3])).slideUp(300);
			$('#'+tempdate[1]+'-'+tempdate[2]+'-'+tempdate[3]+'.cal-event').each(function(e){
				$(this).slideDown(300);
			});
			$("#current-event-date").text(tempdate[1]+' '+tempdate[2]+', '+tempdate[3]);
		}
	});
}

function todayButtonToggle(){
	if(monthView != monthToday) $('#today-button').removeClass('active');
	else $('#today-button').addClass('active');
}