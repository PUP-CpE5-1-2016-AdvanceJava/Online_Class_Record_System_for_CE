$(document).ready(function() {
	addTooltip();
});

function addTooltip(){
	// var start = new Date().getTime();
	// $flag1 =0;
	// $flag2=0;
	if($('.table-responsive').is('[id*="-lec"]')){
		$('table td:not(#table-items):not([name="stud-name"]):not([name="stud-num"]):not([data-toggle="tooltip"])').each(function(){
			$studno = $(this).parent().find('td:eq(0)').html();
			$studname = $(this).parent().find('td:eq(1)').html();
			$index = $(this).index();
			if($(this).is('[id*="-final"]')) $index = $index-4;
			if($(this).is('[id*="-att"]')) $head = 'ATTENDACE';
			else if($(this).is('[id$="-mid-mexam"]')){ $head = "MIDTERM EXAM SCORE"; $flag1 = $index}
			else if($(this).is('[id*="-mexam-rating"]')) $head = "MIDTERM EXAM PERCENTAGE";
			else if($(this).is('[id$="-final-fexam"]')){ $head = "FINAL EXAM SCORE"; $flag2 = $index} 
			else if($(this).is('[id*="-fexam-rating"]')) $head = "FINAL EXAM PERCENTAGE";
			else if($(this).closest('#table-items-wrapper').length>0) $head = $("#table-module th:eq("+($index)+")").html();
			else $head = $("#table-module th:eq("+($index-1)+")").html();
			$(this).attr({
				"data-toggle":"tooltip",
				// "data-container":"body",
				// "data-html":"true",
				// "data-placement":"bottom",
				"title":$head +"<br>"+$studno+"<br>"+$studname
			})
			$(this).tooltip();
		});
	}else{
		$('table td:not(#table-items):not([name="stud-name"]):not([name="stud-num"]):not([data-toggle="tooltip"])').each(function(){
			$studno = $(this).parent().find('td:eq(0)').html();
			$studname = $(this).parent().find('td:eq(1)').html();
			$index = $(this).index();
			// if($(this).is('[id*="-final"]')) $index = $index-4;
			// if($(this).is('[id*="-att"]')) $head = 'ATTENDACE';
			// else if($(this).is('[id$="-mid-mexam"]')){ $head = "MIDTERM EXAM SCORE"; $flag1 = $index}
			// else if($(this).is('[id*="-mexam-rating"]')) $head = "MIDTERM EXAM PERCENTAGE";
			// else if($(this).is('[id$="-final-fexam"]')){ $head = "FINAL EXAM SCORE"; $flag2 = $index} 
			// else if($(this).is('[id*="-fexam-rating"]')) $head = "FINAL EXAM PERCENTAGE";
			if($(this).closest('#table-items-wrapper').length>0) $head = $("#table-module th:eq("+($index)+")").html();
			else $head = $("#table-module th:eq("+($index-1)+")").html();
			$(this).attr({
				"data-toggle":"tooltip",
				// "data-container":"body",
				// "data-html":"true",
				// "data-placement":"bottom",
				"title":$head +"<br>"+$studno+"<br>"+$studname
			})
			$(this).tooltip();
		});		
	}
	// var end = new Date().getTime();
	// var time = end - start;
	// console.log('All: ' + time);
}