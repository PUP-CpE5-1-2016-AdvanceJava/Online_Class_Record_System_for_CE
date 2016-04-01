function getAllData(id)
{
	$('#status').html("");
	
	// initialize necessary variables
	var colNames = ['number', 'name'];
	var tempContainer = [];
	var numOfItemsContainer = [];
	var type = $('#tableType').val();
	var sheet = $('#sheetType').val();
	var gradingPeriod = [ 'mt', 'ft' ];
	var index = 0;
	
	
	// collect all the innerHTML in the table e.g. 20xx-xxxxx-MN-0...
	// separate number of items from the grades
	if (sheet == 'attendance_table')
	{
		// overwrite type for the format object later
		type = sheet;
		$('td').each(function(){
			tempContainer.push($(this).text());
		});
		
		// get the rows for the headers
		var gradeHeaderRow = document.getElementById('table-wrapper').tHead.rows[1];
		for (var headerIndex = 2; headerIndex < gradeHeaderRow.cells.length; headerIndex++)
		{
			if (gradeHeaderRow.cells[headerIndex].innerHTML !== '')
			colNames.push(gradeHeaderRow.cells[headerIndex].innerHTML.toLowerCase());
		}
		
		var format = [
			'att',
			'mt',
			'att',
			'ft'
		];
		
		var limitCount = 3;
	}
	else if (type == 'Lec')
	{
		var numberOfItems = document.getElementById('table-wrapper').tBodies[0].rows[5];
		// cell length or the number of columns is different from lec and lab
		$('td').each(function(){
			
			// this condition separates num of items row from grade data
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
		
		// remove "Number of Items"
		numOfItemsContainer.shift();
		
		// get the rows for the headers
		//~ var gradeHeaderRow = document.getElementById('table-wrapper').tBodies[0].rows[4];
		//~ var gradeHeaderRowAbove = document.getElementById('table-wrapper').tBodies[0].rows[3];
		var gradeHeaderRow = document.getElementById('table-wrapper').tHead.rows[3];
		var gradeHeaderRowAbove = document.getElementById('table-wrapper').tHead.rows[2];
		var endOfTermHeader = [];
		
		// get the vital headers in the row above; score, rating
		for (var headerIndex = 1; headerIndex < gradeHeaderRowAbove.cells.length; headerIndex++)
		{
			if (gradeHeaderRowAbove.cells[headerIndex].innerHTML.toLowerCase() == 'rating')
			{
				// gets the rating and the three headers before it
				endOfTermHeader.push(gradeHeaderRowAbove.cells[headerIndex-3].innerHTML.toLowerCase());
				endOfTermHeader.push(gradeHeaderRowAbove.cells[headerIndex-2].innerHTML.toLowerCase());
				endOfTermHeader.push(gradeHeaderRowAbove.cells[headerIndex-1].innerHTML.toLowerCase());
				endOfTermHeader.push(gradeHeaderRowAbove.cells[headerIndex].innerHTML.toLowerCase());
			}
		}
		
		// collect headers in the class standings etc
		var endOfTerm = false;
		for (var headerIndex = 1; headerIndex < gradeHeaderRow.cells.length; headerIndex++)
		{
			// put the end of term headers in place
			if (gradeHeaderRow.cells[headerIndex].innerHTML == '10%' && endOfTerm)
			{
				colNames.push(endOfTermHeader[0],endOfTermHeader[1],endOfTermHeader[2],endOfTermHeader[3]);
			}
			colNames.push(gradeHeaderRow.cells[headerIndex].innerHTML.toLowerCase());
			endOfTerm = true;
		}
		
		// put the end of term headers in place
		colNames.push(endOfTermHeader[4],endOfTermHeader[5],endOfTermHeader[6],endOfTermHeader[7]);
		
		// for good formatting
		var format = [
			'att',
			'cs',
			'qz',
			'exam'
		];
		var limitCount = 3;
	}
	else if (type == 'Lab')
	{
		var numberOfItems = document.getElementById('table-wrapper').tBodies[0].rows[5];
		// note the '-1' difference from Lec
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
		
		// remove "Number of Items"
		numOfItemsContainer.shift();
		
		// same process as Lec but simpler
		//~ var gradeHeaderRow = document.getElementById('table-wrapper').tBodies[0].rows[3];
		var gradeHeaderRow = document.getElementById('table-wrapper').tHead.rows[2];
		console.log('apache wtf');		
		for (var headerIndex = 1; headerIndex < gradeHeaderRow.cells.length; headerIndex++)
		{
			colNames.push(gradeHeaderRow.cells[headerIndex].innerHTML.toLowerCase());
		}
		
		var format = [
			'exer',
			'prac',
			'proj'
		];
		
		var limitCount = 2;
	}
	
	// clear table session first 
	$.get('/user/clear_table_session', {})
		.done(function( result ) {
			if (result != 'OK')
			{
				$('#status').html("Operation not finished. Abort");
				return false;
			}
		});
	
	
	// initialize some 
	var num = 0;
	var name = '';
	var keyName = '';
	var keyFormat = [];
	var isKeying = true;
	var maxNumOfStudents = tempContainer.length / colNames.length;
	var numOfStudents = 0;
	
	
	// associate the names with the data
	for (var i = 0; i < tempContainer.length; i = i + colNames.length)
	{
		// create javascript object for serialization
		var grades = {};
		var count = 0;
		var periodCount = 0;
		for (var j = 2; j < colNames.length; j++)
		{
			// elaborate loop for placing the names together and make a sensible system
			name = colNames[j].split(' ').join('_');
			name = name.replace('%', 'per');
			
			// remove numbers from rating for php
			if (name.match(/per/g) != null)
			{
				name = name.replace(/[0-9]/g, '');
			}
			
			// rework some stuff for php
			if (name.match(/total/g) != null && type == 'attendance_table')
			{
				count++;
			}
			
			// can't explain myself, it worked in my head
			if (count > limitCount)
			{
				keyName = gradingPeriod[periodCount]+'_'+gradingPeriod[periodCount]+'_'+name;
			}
			else keyName = gradingPeriod[periodCount]+'_'+format[count]+'_'+name;
			
			// append the object to place within an object
			grades[keyName] = tempContainer[i+j];
			
			// record the format only once
			if (isKeying)
			{
				keyFormat.push(keyName);
			}
			
			// advance the format array everytime there is a % or per
			if (name.match(/per/g) != null)
			{
				count++;
				if (type == 'attendance_table') periodCount++;
				
			}
			
			// advance the gradingPeriod array everytime it enconters a rating and reset the format array as well
			if (colNames[j] === 'rating' )
			{		
				periodCount++;
				count = 0;
			}
		}
		
		// disable recording keys after the first
		isKeying = false;
		numOfStudents++;
		// create a student object and place the grades object to place into another object
		var students = {	
			'number' : tempContainer[i],
			'name' : tempContainer[i+1],
			'grades' : grades,
			'num_stud' : numOfStudents
		};
		num++;
		
		// encode to JSON then send one student's records
		var recursiveEncoded = $.param(students);
		$.post('/user/set_table_session', recursiveEncoded).done(function(response){
		});
	}
	console.log(numOfStudents);
	// make object for JSON
	var toEncode = {
		'tableId' : id,
		'tableType' : type,
		'tableFormat' : keyFormat,
		'tableItems' : numOfItemsContainer,
		'numOfStudents' : maxNumOfStudents
	};
	
	// encode to JSON and set into session variable
	recursiveEncoded = $.param(toEncode);
	console.log(toEncode);
	console.log(numOfStudents);
	var tryAgain = true;
	//~ $.post('/user/set_global_table_session', recursiveEncoded)
		//~ .done(function( result ) {
			//~ if (result != 'OK')
			//~ {
				//~ tryAgain = true;
			//~ }
		//~ });
	
	var timesToTry = 3;
	while (tryAgain && timesToTry > 0)
	{
		$.post('/user/set_global_table_session', recursiveEncoded)
			.done(function( result ) {
				if (result != 'OK')
				{
					tryAgain = true;
				}
				else tryAgain = false;
			});
			timesToTry--;
	}
	if (tryAgain)
		$('status').html('Error');
	
	// save into DB
	//~ console.log ('set session done');
		//~ $.post('/user/set_table_data', {})
			//~ .done(function( result ) {
				//~ $('#status').append(" "+result);
		//~ });

	return false;
}
