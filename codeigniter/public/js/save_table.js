function getAllData(id)
{     
	// initialize necessary variables
	var colNames = ['studentNumber', 'name'];
	var tempContainer = [];
	var numOfItemsContainer = [];
	var type = $('#tableType').val();
	var gradingPeriod = [ 'mt', 'ft' ];
	var formatLec = [
		'lab_exer',
		'practical',
		'project'
	];
	var formatLab = [
		'exer',
		'prac',
		'proj'
	];
	
	// collect all the innerHTML in the table e.g. 20xx-xxxxx-MN-0...
	// separate number of items from the grades
	var numberOfItems = document.getElementById('table-wrapper').tBodies[0].rows[5];
	var index = 0;
	$('td').each(function(){
		if (index < (numberOfItems.cells.length-1))
		{
			numOfItemsContainer.push($(this).text());
			index++;
		}
		else
		{
			tempContainer.push($(this).text());
		}
	});
	
	// collect all the grade headers e.g. Lab 1, Total...
	var gradeHeaderRow = document.getElementById('table-wrapper').tBodies[0].rows[3];
	for (var headerIndex = 1; headerIndex < gradeHeaderRow.cells.length; headerIndex++)
	{
		colNames.push(gradeHeaderRow.cells[headerIndex].innerHTML);
	}
	
	// create javascript object for serialization
	
	var format = {};
	var num = 0;
	var name = '';
	var keyName = '';
	var numOfStudents = tempContainer.length / colNames.length;
	
	// associate the names with the data
	for (var i = 0; i < tempContainer.length; i = i + colNames.length)
	{
		var students = {};
		var grades = {};
		var count = 0;
		var periodCount = 0;
		for (var j = 2; j < colNames.length; j++)
		{
			name = colNames[j].split(' ').join('_');
			name = name.replace('%', 'per');
			if (count > 2)
			{
				keyName = gradingPeriod[periodCount]+'_'+gradingPeriod[periodCount]+'_'+name;
			}
			else keyName = gradingPeriod[periodCount]+'_'+formatLab[count]+'_'+name;
			grades[keyName] = tempContainer[i+j];
			if (name.match(/per/g) != null)
			{
				count++;
			}
			if (colNames[j] === 'Rating')
			{		
				periodCount++;
				count = 0;
			}
		}
		students['student'] = {	
			'name' : tempContainer[i],
			'id' : tempContainer[i+1],
			'grades' : grades
		};
		num++;
		
		var toEncode = {
			'tableData' : students,
			'tableId' : id,
			'tableType' : type
		};
	
		var recursiveEncoded = $.param(toEncode);
		$.post('/user/get_table_data', recursiveEncoded)
			.done(function( result ) {
				$('#status').html(result);
		});
	}
	
	//~ var recursiveDecoded = decodeURIComponent( $.param( students ) );
}
