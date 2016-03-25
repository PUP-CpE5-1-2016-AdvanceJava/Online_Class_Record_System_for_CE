$(document).ready(function() {
	$('table td').each(function(){
		$(this).addClass("current-test");
		$parent = $(this).parent();
		$parent.addClass("current-test-parent");
		$studno = $parent.find('td:eq(0)').html();
		$studname = $parent.find('td:eq(1)').html();
		$index = $(".current-test-parent td").index($(".current-test"));
		if($(this).is('[id*="table-items"]')){
			$head = $("#table-module th:eq("+($index)+")").html();
		//console.log($("#table-module th:eq("+($index-1)+")").html());
		}else{
			$head = $("#table-module th:eq("+($index-1)+")").html();
		}
		$(this).attr({
			"data-toggle":"tooltip",
			"data-container":"body",
			"data-html":"true",
			"data-placement":"bottom",
			"title":$head +"<br>"+$studno+"<br>"+$studname
		})
		$(this).removeClass("current-test");
		$parent.removeClass("current-test-parent");
		// 
	});
	$('[data-toggle="tooltip"]').tooltip();
});