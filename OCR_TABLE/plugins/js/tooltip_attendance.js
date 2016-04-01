$(document).ready(function() {
	$('table td').each(function(){
		if(!($(this).attr('data-toggle') == 'tooltip') && !$(this).is('.table-student-number') && !$(this).is('.table-student-name')){
			$(this).addClass("current-test");
			$parent = $(this).parent()
			$parent.addClass("current-test-parent");
			$studno = $parent.find('td:eq(0)').html();
			$studname = $parent.find('td:eq(1)').html();
			$index = $(".current-test-parent td").index($(".current-test"));
			if($(this).is('[class*="-attendance-mid"]')) $head = "MIDTERM ATTENDANCE "+ $("#table-module th:eq("+($index)+")").html();
			else if($(this).is('[class*="-attendance-finals"]')) $head = "FINALS ATTENDANCE " + $("#table-module th:eq("+($index)+")").html();
			else if($(this).is('[class*="-total-mid"]')) $head = "MIDTERMS TOTAL";
			else if($(this).is('[class*="-percent-mid"]')) $head = "MIDTERMS PERCENTAGE (" + $("#table-module th:eq("+($index)+")").html() +")";
			else if($(this).is('[class*="-total-finals"]')) $head = "FINALS TOTAL";
			else if($(this).is('[class*="-percent-finals"]')) $head = "FINALS PERCENTAGE (" + $("#table-module th:eq("+($index)+")").html() +")";		
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