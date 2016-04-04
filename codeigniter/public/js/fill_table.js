is_apache_updating();
function is_apache_updating()
{
	console.log('all is right in JS world');
}

function fillTable(response)
{
	var itemLength = 0;
	var fillItems = false;
	var startAfter = false;
	var itemCounter = 0;
	// set number of columns before filling
	if (Object.keys(response.Items).length > 0)
	{
		itemLength = Object.keys(response.Items).length;
		$('td').each(function(){
			if ($(this).html().toLowerCase() == "number of items")
			{
				startAfter = true;
			}
			
			if (startAfter)
			{
				if (fillItems)
				{
					$(this).html(response.Items[itemCounter].items);
					itemCounter++;
					if (itemCounter == itemLength)
					{
						startAfter = false;
					}
				}
				fillItems = true;
			}
		});		
		if (response['table_type'] == 'attendance_table')
		{
			var name_formats = [ 'mt_att','ft_att' ];
		}
		
		if (response.Class.ModuleType == 'Lec')
		{
			var name_formats = [ 'mt_cs_assign','mt_cs_sw','mt_cs_ex','mt_cs_rec','mt_qz_quiz','mt_qz_le',
									'ft_cs_assign','ft_cs_sw','ft_cs_ex','ft_cs_rec','ft_qz_quiz','ft_qz_le' ];
		}
		else if (response.Class.ModuleType == 'Lab')
		{
			var name_formats = [ 'mt_exer_lab','mt_prac_practical','mt_proj_project','ft_exer_lab','ft_prac_practical','ft_proj_project' ];
		}
		
		for (var a = 0; a < itemLength; a++)
		{
			
		}
	}
	
	// initialize variables for filling the table
	var startFilling = false;
	var gradeList = [];
	var studentCount = 0;
	var studentLimit = Object.keys(response.Student).length;
	for (var i = 0 ; i < studentLimit; i++)
	{
		gradeList[studentCount] = response.Student[studentCount]["grade"].split(";");
		studentCount++;
	}
	var count = 0;
	
	// account for the extra element after the last ';' in the json object
	var limitCount = gradeList[0].length-2;
	
	// reset
	studentCount = 0;
	$('td').each(function(){
		if ($(this).html() == response.Student[0]['full_name'])
		{
			startFilling = true;
		}
		
		if ($(this).html() == response.Student[studentCount]['full_name'] || $(this).html() == response.Student[studentCount]['stud_num'])
		{
			// do nothing
		}
		else
		{
			if (startFilling)
			{
				
				$(this).html(gradeList[studentCount][count]);
				if (count < limitCount)
				{	
					count++
				}
				else 
				{
					studentCount++;
					count = 0;
				}
			}
		}
	});
	
	response = '';
}

function modifyColumnNumber(term, codeWord)
{
	
}
