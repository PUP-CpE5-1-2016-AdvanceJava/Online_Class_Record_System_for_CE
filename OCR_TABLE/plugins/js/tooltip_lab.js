$(document).ready(function() {
	$('table td').each(function(){
		if(!($(this).attr('data-toggle') == 'tooltip') && !$(this).is('#table-items') && !$(this).is('.table-student-number') && !$(this).is('.table-student-name')){
			$(this).addClass("current-test");
			$parent = $(this).parent()
			$parent.addClass("current-test-parent");
			$studno = $parent.find('td:eq(0)').html();
			$studname = $parent.find('td:eq(1)').html();
			$index = $(".current-test-parent td").index($(".current-test"));
			//ID or CLASS METHOD
			////MT
			if($(this).is('[class*="-lab-percent-mid"]')) $head = $('#table-lab1').text();
			else if($(this).is('[class*="-prac-percent-mid"]')) $head = $('#table-prac1').text();
			else if($(this).is('[class*="-proj-percent-mid"]')) $head = $('#table-proj1').text();
			else if($(this).is('[class*="-midterm-grade"]') && $(this).is('[class*="table-items"]')) $head = "MIDTERM GRADE (" + $("#table-module th:eq("+($index)+")").html()+")";
			else if($(this).is('[class*="-midterm-grade"]')) $head = "MIDTERM GRADE (" + $("#table-module th:eq("+($index-1)+")").html()+")";
			////FINALS
			else if($(this).is('[class*="-lab-percent-finals"]')) $head = $('#table-lab2').text();
			else if($(this).is('[class*="-prac-percent-finals"]')) $head = $('#table-prac2').text();
			else if($(this).is('[class*="-proj-percent-finals"]')) $head = $('#table-proj2').text();
			else if($(this).is('[class*="-finals-grade"]') && $(this).is('[class*="table-items"]')) $head = "FINAL GRADE (" + $("#table-module th:eq("+($index)+")").html()+")";
			else if($(this).is('[class*="-finals-grade"]')) $head = "FINAL GRADE (" + $("#table-module th:eq("+($index-1)+")").html()+")";
			//ROW N COL METHOD
			else if($(this).is('[class*="table-items"]')) $head = $("#table-module th:eq("+($index)+")").html();
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