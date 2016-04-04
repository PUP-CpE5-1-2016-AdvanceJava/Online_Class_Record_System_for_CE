$(document).ready(function(e){
	var cols = ['prof','subject','section','status'];
	var rows = [];
	$('#pdf-button').on('click',function(e){
		$('div#home-panel').each(function(e){
			//
			$prof = $(this).find('a#home-panel-label').text();
			//console.log($prof);
			//rowin.push($prof);
			$ctr1 = 0;
			$(this).find('a#home-panel-sublabel').each(function(e){
				$ctr2 = 0;
				$subj = $(this).text();
				//console.log($(this).text());
				$(this).closest('div#home-panel-body').find('.list-group-item').each(function(e){
					var rowin = [];
					if($ctr1 == 0) {
						rowin.push($prof);
						rowin.push($subj);
						rowin.push($(this).text());
					}
					else if($ctr2 == 0){
						rowin.push(" ");
						rowin.push($subj);
						rowin.push($(this).text());
					}
					else{
						rowin.push(" ");
						rowin.push(" ");
						rowin.push($(this).text());
					}
					$ctr1++;
					$ctr2++;
					rows.push(rowin);
					//console.log($(this).text());
				});
				//rowin.push($(this).text());
				
			});
		});
		$.each(rows, function(index, value){
			$.each(value, function(index, value1){
				console.log(value1);
			});
		});
		// var wows = [
	 //    	[1, "Shaw", "Tanzania", " "],
	 //    	[2, "Nelson", "Kazakhstan", " "],
	 //    	[3, "Garcia", "Madagascar", " "],
		// ];
		var doc = new jsPDF('p','pt');
		doc.autoTable(cols, rows);
		doc.save('table1.pdf');
	});
});