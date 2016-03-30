/***
* This table.js is used for computing grades,saving and uploading table for lec or lab.
* The script will be called after clicking a class on sidebar. It will be called at 'sidebar.js'
***/

$(document).ready(function(){
	/*---SAVING TABLE DATA---*/
	// Capture data on table when button save is clicked.
	console.log("save clicked.")
	$('div>h3>span>button#table-save-button').click(function(){
		var assign_mid_num,sw_mid_num,ex_mid_num,rec_mid_num,quiz_mid_num,le_mid_num;
		var assign_final_num,sw_final_num,ex_final_num,rec_final_num,quiz_final_num,le_final_num;
		var lab_mid_num,prac_mid_num,proj_mid_num;
		var lab_final_num,prac_final_num,proj_final_num;
		var att_mid_num,att_final_num;

		var assign_mid_data = [],sw_mid_data = [],ex_mid_data = [],rec_mid_data = [],quiz_mid_data = [],le_mid_data = [];
		var cells = Array.prototype.slice.call(document.getElementById("table-wrapper").getElementsByTagName("td"));
		if (get_module_type() == "Lec")
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
				if (cells[i].id.indexOf("table-score-mid-assign") != -1) assign_mid_data[assign_mid_data.length] = cells[i].textContent;
				if (cells[i].id.indexOf("table-score-mid-sw") != -1) sw_mid_data[sw_mid_data.length] = cells[i].textContent;
				
			}
		}
		else if (get_module_type() == "Lab")
		{
			lab_mid_num = getModuleCounter("Lab","mid","val");
			prac_mid_num = getModuleCounter("Prac","mid","val");
			proj_mid_num = getModuleCounter("Proj","mid","val");
			lab_final_num = getModuleCounter("Lab","final","val");
			prac_final_num = getModuleCounter("Prac","final","val");
			proj_final_num = getModuleCounter("Proj","final","val");
		}
		else
		{
			att_mid_num = getModuleCounter("Att","mid","val");
			att_final_num = getModuleCounter("Att","final","val");
		}

		for (var i = 0; i < assign_mid_data.length; i+=2) {
			console.log(assign_mid_data[i] + "-----" + assign_mid_data[i+1]);
		};
		for (var i = 0; i < sw_mid_data.length; i+=2) {
			console.log(sw_mid_data[i] + "-----" + sw_mid_data[i+1]);
		};
	})
	// Send all data through ajax.
	// Return a status of completion
})