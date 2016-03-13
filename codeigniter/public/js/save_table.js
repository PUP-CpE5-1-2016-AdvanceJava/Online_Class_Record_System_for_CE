function getAllData(id)
{     
	// initialize necessary variables
	var colNames = ['studentNumber', 'name'];
	var tempContainer = [];
	var numOfItemsContainer = [];
	
	// collect all the innerHTML in the table e.g. 20xx-xxxxx-MN-0...
	// separate number of items from the grades
	var numberOfItems = document.getElementById('table-wrapper').tBodies[0].rows[4];
	var index = 0;
	$('td').each(function(){
		if (index < numberOfItems.cells.length)
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
	var students = {};
	
	var format = {};
	var num = 0;
	var numOfStudents = tempContainer.length / colNames.length;
	// associate the names with the data
	for (var i = 0; i < tempContainer.length; i = i + colNames.length)
	{
		var grades = {};
		var counter = 0;
		for (var j = 2; j < colNames.length; j++)
		{
			grades[colNames[j]+'_'+counter] = tempContainer[i+j];
			counter++;
		}
		
		students[num] = {	
			'id' : tempContainer[i],
			'name' : tempContainer[i+1],
			'grades' : grades
		};
		num++;
	}
	var toEncode = {
		'tableData' : students,
		'tableId' : id
	};
	
	var recursiveEncoded = $.param(toEncode);
	var recursiveDecoded = decodeURIComponent( $.param( students ) );
	
	$.post('collect_grades.php', recursiveEncoded)
		.done(function( result ) {
			$('#status').html(result);
	});
}
//~ console.log(document.getElementById('startFormatHere').parentNode.rowIndex);
