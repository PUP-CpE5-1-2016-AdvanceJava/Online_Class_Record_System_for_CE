$(document).ready(function() {
	$('table td').each(function(){
		if(!($(this).attr('data-toggle') == 'tooltip') && !$(this).is('#table-items') && !$(this).is('.table-student-number') && !$(this).is('.table-student-name')){
			$(this).addClass("current-test");
			$parent = $(this).parent()
			$parent.addClass("current-test-parent");
			$studno = $parent.find('td:eq(0)').html();
			$studname = $parent.find('td:eq(1)').html();
			$index = $(".current-test-parent td").index($(".current-test"));
			if($(this).is('[class*="-attendance-mid"]') || $(this).is('[class*="-attendance-finals"]')) $head = $('#attendance').html();
			else if($(this).is('[class*="-midterm-score"]')) $head = "ME " + $('.table-item-title2>#midterm:eq(0)').html();
			else if($(this).is('[class*="-midterm-percent"]')) $head = "ME PERCENTAGE (" + $('.table-item-title2>#midterm:eq(1)').html() +")";
			else if($(this).is('[class*="-midterm-grade"]')) $head = "MIDTERM GRADE (" + $('.table-item-title2>#midterm:eq(2)').html()+")";
			else if($(this).is('[class*="-midterm-rating"]'))  $head = "RATING"; // $head = $('.table-item-title2>#midterm:eq(3)').html();
			else if($(this).is('[class*="-finals-score"]')) $head = "FE " + $('.table-item-title2>#final:eq(0)').html();
			else if($(this).is('[class*="-finals-percent"]')) $head = "FE PERCENTAGE (" + $('.table-item-title2>#final:eq(1)').html()+")";
			else if($(this).is('[class*="-finals-grade"]')) $head = "FINAL GRADE (" + $('.table-item-title2>#final:eq(2)').html()+")";
			else if($(this).is('[class*="-finals-rating"]'))  $head = "RATING"; //$head = $('.table-item-title2>#final:eq(3)').html();
			else if($(this).is('[class*="table-items"]') && $(this).is('[class*="-finals"]') ) $head = $("#table-module th:eq("+($index-4)+")").html();
			else if($(this).is('[class*="table-items"]')) $head = $("#table-module th:eq("+($index)+")").html();
			else if($(this).is('[class*="-finals"]')) $head = $("#table-module th:eq("+($index-5)+")").html();
			else $head = $("#table-module th:eq("+($index-1)+")").html();
			$(this).attr({
				"data-toggle":"tooltip",
				"data-container":"body",
				"data-html":"true",
				"data-placement":"bottom",
				"title":$head +"<br>"+$studno+"<br>"+$studname
			})
			$(this).removeClass("current-test");
			$parent.removeClass("current-test-parent");
		}
	});
	$('[data-toggle="tooltip"]').tooltip();
});