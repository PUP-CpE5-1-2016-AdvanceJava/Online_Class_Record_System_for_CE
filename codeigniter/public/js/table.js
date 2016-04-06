/***
* This table.js is used for computing grades,saving and uploading table for lec or lab.
* The script will be called after clicking a class on sidebar. It will be called at 'sidebar.js'
***/

$(document).ready(function(){
	/*---SAVING TABLE DATA---*/
	// Capture data on table when button save is clicked.
	$('div>h3>span>button#table-save-button').click(function(){
		var assign_mid_num,sw_mid_num,ex_mid_num,rec_mid_num,quiz_mid_num,le_mid_num;
		var assign_final_num,sw_final_num,ex_final_num,rec_final_num,quiz_final_num,le_final_num;
		var lab_mid_num,prac_mid_num,proj_mid_num;
		var lab_final_num,prac_final_num,proj_final_num;
		var att_mid_num,att_final_num;

		var mexam_mid_data = [], fexam_final_data = [];

		var assign_mid_data = [],sw_mid_data = [],ex_mid_data = [],rec_mid_data = [],quiz_mid_data = [],le_mid_data = [];
		var assign_final_data = [],sw_final_data = [],ex_final_data = [],rec_final_data = [],quiz_final_data = [],le_final_data = [];

		var lab_mid_data = [],prac_mid_data = [],proj_mid_data = [];
		var lab_final_data = [],prac_final_data = [],proj_final_data = [];

		var att_mid_data = [], att_final_data = [];

		var cells = Array.prototype.slice.call(document.getElementById("table-wrapper").getElementsByTagName("td"));
		var module = get_module_type();
		var classId = get_class_id();
		if (module == "Lec")
		{
			// Midterm
			assign_mid_num = getModuleCounter("Assign","mid","val");
			sw_mid_num = getModuleCounter("Sw","mid","val");
			ex_mid_num = getModuleCounter("Ex","mid","val");
			rec_mid_num = getModuleCounter("Rec","mid","val");
			quiz_mid_num = getModuleCounter("Quiz","mid","val");
			le_mid_num = getModuleCounter("Le","mid","val");
			// Finals
			assign_final_num = getModuleCounter("Assign","final","val");
			sw_final_num = getModuleCounter("Sw","final","val");
			ex_final_num = getModuleCounter("Ex","final","val");
			rec_final_num = getModuleCounter("Rec","final","val");
			quiz_final_num = getModuleCounter("Quiz","final","val");
			le_final_num = getModuleCounter("Le","final","val");

			for(var i in cells)
			{
				if (cells[i].id.indexOf("table-score-mid-assign") != -1 || cells[i].id.indexOf("table-items-mid-assign") != -1) assign_mid_data[assign_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-mid-sw") != -1 || cells[i].id.indexOf("table-items-mid-sw") != -1) sw_mid_data[sw_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-mid-ex") != -1 || cells[i].id.indexOf("table-items-mid-ex") != -1) ex_mid_data[ex_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-mid-rec") != -1 || cells[i].id.indexOf("table-items-mid-rec") != -1) rec_mid_data[rec_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-mid-quiz") != -1 || cells[i].id.indexOf("table-items-mid-quiz") != -1) quiz_mid_data[quiz_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-mid-le") != -1 || cells[i].id.indexOf("table-items-mid-le") != -1) le_mid_data[le_mid_data.length] = cells[i].textContent;

				if (cells[i].id.indexOf("table-score-final-assign") != -1 || cells[i].id.indexOf("table-items-final-assign") != -1) assign_final_data[assign_final_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-final-sw") != -1 || cells[i].id.indexOf("table-items-final-sw") != -1) sw_final_data[sw_final_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-final-ex") != -1 || cells[i].id.indexOf("table-items-final-ex") != -1) ex_final_data[ex_final_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-final-rec") != -1 || cells[i].id.indexOf("table-items-final-rec") != -1) rec_final_data[rec_final_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-final-quiz") != -1 || cells[i].id.indexOf("table-items-final-quiz") != -1) quiz_final_data[quiz_final_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-final-le") != -1 || cells[i].id.indexOf("table-items-final-le") != -1) le_final_data[le_final_data.length] = cells[i].textContent;

				if (cells[i].id.indexOf("table-score-mid-mexam") != -1 || cells[i].id.indexOf("table-items-mid-mexam") != -1) mexam_mid_data[mexam_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-final-fexam") != -1 || cells[i].id.indexOf("table-items-final-fexam") != -1) fexam_final_data[fexam_final_data.length] = cells[i].textContent;
			}
			var data = {
				'classId':classId,
				'module':module,
				//---put all datas in a dictionary---//
				'assign_mid_data':assign_mid_data.join("-"),
				'sw_mid_data':sw_mid_data.join("-"),
				'ex_mid_data':ex_mid_data.join("-"),
				'rec_mid_data':rec_mid_data.join("-"),
				'quiz_mid_data':quiz_mid_data.join("-"),
				'le_mid_data':le_mid_data.join("-"),
				'assign_final_data':assign_final_data.join("-"),
				'sw_final_data':sw_final_data.join("-"),
				'ex_final_data':ex_final_data.join("-"),
				'rec_final_data':rec_final_data.join("-"),
				'quiz_final_data':quiz_final_data.join("-"),
				'le_final_data':le_final_data.join("-"),
				'mexam_mid_data':mexam_mid_data.join("-"),
				'fexam_final_data':fexam_final_data.join("-"),
				//---put also the number of modules---//
				'assign_mid_num':assign_mid_num,
				'sw_mid_num':sw_mid_num,
				'ex_mid_num':ex_mid_num,
				'rec_mid_num':rec_mid_num,
				'quiz_mid_num':quiz_mid_num,
				'le_mid_num':le_mid_num,
				'assign_final_num':assign_final_num,
				'sw_final_num':sw_final_num,
				'ex_final_num':ex_final_num,
				'rec_final_num':rec_final_num,
				'quiz_final_num':quiz_final_num,
				'le_final_num':le_final_num,
			}
		}
		else if (module == "Lab")
		{
			lab_mid_num = getModuleCounter("Lab","mid","val");
			prac_mid_num = getModuleCounter("Prac","mid","val");
			proj_mid_num = getModuleCounter("Proj","mid","val");
			lab_final_num = getModuleCounter("Lab","final","val");
			prac_final_num = getModuleCounter("Prac","final","val");
			proj_final_num = getModuleCounter("Proj","final","val");
			
			for(var i in cells)
			{
				if (cells[i].id.indexOf("table-score-mid-lab") != -1 || cells[i].id.indexOf("table-items-mid-lab") != -1) lab_mid_data[lab_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-mid-prac") != -1 || cells[i].id.indexOf("table-items-mid-prac") != -1) prac_mid_data[prac_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-mid-proj") != -1 || cells[i].id.indexOf("table-items-mid-proj") != -1) proj_mid_data[proj_mid_data.length] = cells[i].textContent;
				
				if (cells[i].id.indexOf("table-score-final-lab") != -1 || cells[i].id.indexOf("table-items-final-lab") != -1) lab_final_data[lab_final_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-final-prac") != -1 || cells[i].id.indexOf("table-items-final-prac") != -1) prac_final_data[prac_final_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-final-proj") != -1 || cells[i].id.indexOf("table-items-final-proj") != -1) proj_final_data[proj_final_data.length] = cells[i].textContent;
			}

			var data = {
				'classId':classId,
				'module':module,
				//---put all datas in a dictionary---//
				'lab_mid_data':lab_mid_data.join("-"),
				'prac_mid_data':prac_mid_data.join("-"),
				'proj_mid_data':proj_mid_data.join("-"),
				'lab_final_data':lab_final_data.join("-"),
				'prac_final_data':prac_final_data.join("-"),
				'proj_final_data':proj_final_data.join("-"),
				//---put also the number of modules---//
				'lab_mid_num':lab_mid_num,
				'prac_mid_num':prac_mid_num,
				'proj_mid_num':proj_mid_num,
				'lab_final_num':lab_final_num,
				'prac_final_num':prac_final_num,
				'proj_final_num':proj_final_num,
			}
		}
		else
		{
			att_mid_num = getModuleCounter("Att","mid","val");
			att_final_num = getModuleCounter("Att","final","val");
			//---get also th for attendance to get the header values---//
			var thcells = Array.prototype.slice.call(document.getElementById("table-wrapper").getElementsByTagName("th"));
			for(var k in thcells)
			{
				if (thcells[k].id.indexOf("table-header-mid-att") != -1) att_mid_data[att_mid_data.length] = thcells[k].textContent;
				if (thcells[k].id.indexOf("table-header-final-att") != -1) att_final_data[att_final_data.length] = thcells[k].textContent;
			}

			for(var i in cells)
			{
				if (cells[i].id.indexOf("table-score-mid-att") != -1) att_mid_data[att_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-final-att") != -1) att_final_data[att_final_data.length] = cells[i].textContent;
			}
			var data = {
				'classId':classId,
				'module':module,
				//---put all datas in a dictionary---//
				'att_mid_data':att_mid_data.join("-"),
				'att_final_data':att_final_data.join("-"),
				//---put also the number of modules---//
				'att_mid_num':att_mid_num,
				'att_final_num':att_final_num,
			}
		}
		console.log(data);
		$.ajax({
			url: 'save_table',
			type: "POST",
			dataType: 'json',
			data: data,
			cache: false,
    		// contentType: "application/jsonrequest; charset=utf-8",
			success: function(res) {
				console.log(res);
				alert("Table has been saved.")
			}
		})
	})

    $('div h3 span button#table-upload-button').click(function(e){
    	console.log("upload pdf");
	    //getting values of current time for generating the file name
	    var classId = get_class_id();
	    var classBlock = get_class_block();
		var classSubj = get_class_subj();
		var classSched = get_class_sched();
		var module = get_module_type();
	    var dt = new Date();
	    var day = dt.getDate();
	    var month = dt.getMonth() + 1;
	    var year = dt.getFullYear();
	    var hour = dt.getHours();
	    var mins = dt.getMinutes();
	    var postfix = day + "." + month + "." + year + "_" + hour + "." + mins;
	    //creating a temporary HTML link element (they support setting file names)
	    var a = document.createElement('a');
	    //getting data from our div that contains the HTML table
	    var data_type = 'data:application/vnd.ms-excel;charset=utf-8';
	    
	    var table_html = $('table#table-wrapper')[0].outerHTML;
	    table_html = table_html.replace(/<tfoot[\s\S.]*tfoot>/gmi, '');
	    
	    var css_html = '<style>td {border: 0.5pt solid #c0c0c0} .tRight { text-align:right} .tLeft { text-align:left} </style>';
		var header = "<h2>"+classBlock+"</h2><h6>"+classSched+"</h6><hr><h3>"+classSubj+"("+module+")"+"</h3>"
		var data = '<html><head>' + css_html + '</' + "head><body>"+ header + table_html + '</body></html>'
	    var encoded = encodeURIComponent(data);
	    a.href = data_type + ',' + encoded;
	    var link = classSubj+'__'+classBlock +'__'+ classId +'__'+ postfix + '.xls';
	    //setting the file name
	    a.download = link;
	    // triggering the function
	    a.click();
	    alert(res['status']);
	    // just in case, prevent default behaviour
	    e.preventDefault();


    })
	// Send all data through ajax.
	// Return a status of completion
})