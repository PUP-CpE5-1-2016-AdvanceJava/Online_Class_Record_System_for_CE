$(document).ready(function(e){
	var cols = ['PROFESSOR','SUBJECT','SECTION','DATE SUBMITTED'];
	var rows = [];
	var doc = new jsPDF('p','pt');
	var header = function (data) {
        doc.setFontSize(20);
        doc.setTextColor(40);
        doc.setFontStyle('bold');
        doc.text("TRACKER", data.settings.margin.left, 60);
    };
    var options = {
        beforePageContent: header,
        theme: 'striped',
        margin: {top: 80},
        styles:{
        	lineColor: 200,
        	lineWidth: 2,
        	overflow: 'linebreak'
        },
        headerStyles: {
            fillColor: [115, 11, 10],
            fontSize: 11,
            rowHeight: 22
        },
    };
	$('#pdf-button').on('click',function(e){
		$('div#home-panel').each(function(e){
			$prof = $(this).find('a#home-panel-label').contents().filter(function(e){
				return this.nodeType == 3;
			}).text();
			$ctr1 = 0;
			if(($(this).find('a#home-panel-sublabel')).length != 0){
				$(this).find('a#home-panel-sublabel').each(function(e){
					$ctr2 = 0;
					$subj = $(this).text();
					$(this).closest('div#home-panel-body').find('.list-group-item').each(function(e){
						$sec = $(this).contents().filter(function(e){return this.nodeType == 3;}).text();
						if(($(this).find('span')).length != 0) $subm = ($(this).find('span')).text();
						else $subm = "--";
						var rowin = [];
						if($ctr1 == 0) {
							rowin.push($prof);
							rowin.push($subj);
							rowin.push($sec);
							rowin.push($subm);
						}
						else if($ctr2 == 0){
							rowin.push(" ");
							rowin.push($subj);
							rowin.push($sec);
							rowin.push($subm);
						}
						else{
							rowin.push(" ");
							rowin.push(" ");
							rowin.push($sec);
							rowin.push($subm);
						}
						$ctr1++;
						$ctr2++;
						rows.push(rowin);
					});
				});	
			}else{
				var rowin = [];
				rowin.push($prof);
				rowin.push(" ");
				rowin.push(" ");
				rowin.push(" ");
				rows.push(rowin);				
			}
		});

		doc.autoTable(cols, rows,options);
		doc.save('table1.pdf');
	});
});