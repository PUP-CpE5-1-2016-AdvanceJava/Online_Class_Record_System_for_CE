//For Computation
$(document).ready(function() {
	var modulePercentage = 0.1;
	compute();
	$('hr').width($("#TEMPORARY h4 span").innerWidth());
	$('td').focusin(function(e) {
		compute(modulePercentage);
	});
	$('td').focusout(function(e) {
		compute(modulePercentage);
	});
	$('.ModPer',this).html(modulePercentage*100);
});

function compute(modulePercentage){
	$('tr').each(function(e){
		var totalItems1 = parseInt($('tr:first-child .tableTotal1').text());
		var totalItems2 = parseInt($('tr:first-child .tableTotal2').text());
		var sum1 = 0;
		$(this).find('.tableNum1').each(function(){
			var tableNum1 = $(this).text();
			if(!isNaN(tableNum1) && tableNum1.length !== 0){
				sum1 += parseInt(tableNum1);
			}
		});
		var compute1 = sum1/totalItems1 * 100* modulePercentage;
		if(isNaN(compute1)) compute1 = 0;
		$('.tableMod1', this).html(Math.round(compute1*100)/100);
		$('.tableTotal1', this).html(sum1);

		var sum2 = 0;
		$(this).find('.tableNum2').each(function(){
			var tableNum2 = $(this).text();
			if(!isNaN(tableNum2) && tableNum2.length !== 0){
				sum2 += parseInt(tableNum2);
			}
		});
		var compute2 = sum2/totalItems2 * 100 * modulePercentage;
		if(isNaN(compute2)) compute2 = 0;
		$('.tableMod2', this).html(Math.round(compute2*100)/100);
		$('.tableTotal2', this).html(sum2);
	});
}

//For Table Testing
// $('#irow').click(function(){

//         $('#mtable tbody').append($("#mtable tbody tr:last").clone());
//         $('#mtable tbody tr:last :checkbox').attr('checked',false);
//         $('#mtable tbody tr:last td:first').html($('#row').val());
   
// });
// $('#icol').click(function(){
    
//         $('#mtable tr').append($("<td>"));
//         $('#mtable thead tr>td:last').html($('#col').val());
//         $('#mtable tbody tr').each(function(){$(this).children('td:last').attr('contenteditable','true');});
  
// });