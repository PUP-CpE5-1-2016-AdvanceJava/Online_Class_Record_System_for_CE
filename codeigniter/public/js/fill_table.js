is_apache_updating();
function is_apache_updating()
{
	console.log('all is right in JS world');
}

function fillTable(sent_table_data)
{
	var startFilling = false;
	var gradeList = [];
	var studentCount = 0;
	var studentLimit = Object.keys(sent_table_data.Student).length;
	for (var i = 0 ; i < studentLimit; i++)
	{
		gradeList[studentCount] = sent_table_data.Student[studentCount]["grade"].split(";");
		studentCount++;
	}
	var count = 0;
	
	// account for the extra element after the last ';' in the json object
	var limitCount = gradeList[0].length-2;
	
	// reset
	studentCount = 0;
	$('td').each(function(){
		if ($(this).html() == sent_table_data.Student[0]['full_name'])
		{
			startFilling = true;
		}
		//~ 
		if ($(this).html() == sent_table_data.Student[studentCount]['full_name'] || $(this).html() == sent_table_data.Student[studentCount]['stud_num'])
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
	
	sent_table_data = '';
}

function modifyColumnNumber(term, codeWord)
{
	
}
