(function(API){
    API.myText = function(txt, options, x, y) {
        options = options ||{};
        /* Use the options align property to specify desired text alignment
         * Param x will be ignored if desired text alignment is 'center'.
         * Usage of options can easily extend the function to apply different text 
         * styles and sizes 
        */
        if( options.align == "center" ){
            // Get current font size
            var fontSize = this.internal.getFontSize();

            // Get page width
            var pageWidth = this.internal.pageSize.width;

            // Get the actual text's width
            /* You multiply the unit width of your string by your font size and divide
             * by the internal scale factor. The division is necessary
             * for the case where you use units other than 'pt' in the constructor
             * of jsPDF.
            */
            txtWidth = this.getStringUnitWidth(txt)*fontSize/this.internal.scaleFactor;

            // Calculate text's x coordinate
            x = ( pageWidth - txtWidth ) / 2;
        }

        // Draw text at x,y
        this.text(txt,x,y);
    }
})(jsPDF.API);

$(document).ready(function(e){
	var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	var cols = ['PROFESSOR','SUBJECT','SECTION','DATE SUBMITTED'];
	var rows = [];
	var doc = new jsPDF('p','pt','letter');
	var header = function (data) {
        doc.setFontSize(11);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        doc.myText("Polytechnic University of the Philippines",{align: "center"},0,60);
        doc.myText("Online Class Record System",{align: "center"},0,75);
        doc.setFontSize(15);
        doc.setTextColor(40);
        doc.setFontStyle('bold');
        doc.text("Faculty Class Record / Grade Sheet Submission Tracker", data.settings.margin.left, 130);
    };
    var options = {
        beforePageContent: header,
        theme: 'striped',
        margin: {
        	top: 145,
        	left: 60,
        	right: 60,
        	bottom: 60
        },
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
						else $subm = "---";
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
		var d = new Date();
		var curr_date = d.getDate();
		var curr_month = d.getMonth();
		var curr_year = d.getFullYear();
		$filename = 'Tracker_'+curr_date + "-" + m_names[curr_month] + "-" + curr_year;
		doc.autoTable(cols, rows,options);
		doc.save($filename+'.pdf');
	});
});