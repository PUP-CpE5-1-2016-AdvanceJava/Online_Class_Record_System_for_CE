/*INITIAL COUNTERS FOR TABLE*/
midtermCounter=0
finalsCounter=0
labCounter1=0;
labCounter2=0;
pracCounter1=0;
pracCounter2=0;
projCounter1=0;
projCounter2=0;
labAdd1=0;
pracAdd1=0;
projAdd1=0;
labAdd2=0;
pracAdd2=0;
projAdd2=0;

var modal = document.getElementById('table-alert-modal');

// Get the button that opens the modal
var btn1 = document.getElementById("table-lab1-button-del");
var btn2 = document.getElementById("table-prac1-button-del");
var btn3 = document.getElementById("table-proj1-button-del");
var btn4 = document.getElementById("table-lab2-button-del");
var btn5 = document.getElementById("table-prac2-button-del");
var btn6 = document.getElementById("table-proj2-button-del");


// Get the <span> element that closes the modal
var cancel = document.getElementById("table-cancel-btn");
var yes = document.getElementById("table-yes-btn");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

btn3.onclick = function() {
    modal.style.display = "block";
}

btn4.onclick = function() {
    modal.style.display = "block";
}
btn5.onclick = function() {
    modal.style.display = "block";
}

btn6.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cancel.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* ADD BUTTON LAB1*/
$('#table-lab1-button').click(function(){
	$('#table-lab1').each(function(){
		if ($(this).attr('colspan') != 12){
			labCounter1++;
		    var labSpan1=3+labCounter1;
		    labAdd1 = labSpan1-2;
		    $(this).attr('colspan',labSpan1);
		    $(this).val(labCounter1);
			
			$('#table-midterm').each(function(){
		    midtermCounter++;
		    var midtermSpan1=11+midtermCounter;
		    $(this).attr('colspan',midtermSpan1);
		    $(this).val(midtermCounter);
		});

		$('#table-lab1-button-del').css('display', 'inline-block');
		$('#table-lab1-total').before($("<th style='text-align:center'>Lab " + labAdd1 + "</th>"));
		$('#table-items-lab1').before($("<td class='table-items-lab-mid' contenteditable='true'></td>"));
		$('tr #table-name-lab1').before($("<td class='table-student-lab-mid' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
		}
	});
});
/*DEL BUTTON LAB1*/
$('#table-lab1-button-del').click(function(){
	yes.onclick = function() {
	modal.style.display = "none";
	$('#table-lab1').each(function(){
		if ($(this).attr('colspan') != 3){
		    labCounter1--;
		    var labSpan1=3+labCounter1;
		    $(this).attr('colspan',labSpan1);
		    $(this).val(labCounter1);
			    console.log($(this).attr('colspan'))
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var midtermSpan1=11+midtermCounter;
			    $(this).attr('colspan',midtermSpan1);
			    $(this).val(midtermCounter);
			});	

		$('#table-lab1-total').prev().remove();
		$('#table-items-lab1').prev().remove();
		$('tr #table-name-lab1').prev().remove();
		}

		if ($(this).attr('colspan') == 3){
			$('#table-lab1-button-del').css('display', 'none');			
		}
	});
}
});

/*ADD BUTTON PRAC1*/
$('#table-prac1-button').click(function(){
	$('#table-prac1').each(function(){
		if ($(this).attr('colspan') != 7){
			pracCounter1++;
		    var pracSpan1=3+pracCounter1;
		    pracAdd1 = pracSpan1-2;
		    $(this).attr('colspan',pracSpan1);
		    $(this).val(pracCounter1);
			
			$('#table-midterm').each(function(){
		    midtermCounter++;
		    var midtermSpan2=11+midtermCounter;
		    $(this).attr('colspan',midtermSpan2);
		    $(this).val(midtermCounter);
		});

		$('#table-prac1-button-del').css('display', 'inline-block');
		$('#table-prac1-total').before($("<th>Practical " + pracAdd1 + "</th>"));
		$('#table-items-prac1').before($("<td class='table-items-prac-mid' contenteditable='true'></td>"));
		$('tr #table-name-prac1').before($("<td class='table-student-prac-mid' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
		}
	});
});
/*DEL BUTTON PRAC1*/
$('#table-prac1-button-del').click(function(){
	yes.onclick = function() {
	modal.style.display = "none";
	$('#table-prac1').each(function(){
		if ($(this).attr('colspan') != 3){
		    pracCounter1--;
		    var pracSpan1=3+pracCounter1;
		    $(this).attr('colspan',pracSpan1);
		    $(this).val(pracCounter1);
			    console.log($(this).attr('colspan'))
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var midtermSpan2=11+midtermCounter;
			    $(this).attr('colspan',midtermSpan2);
			    $(this).val(midtermCounter);
			});	

		$('#table-prac1-total').prev().remove();
		$('#table-items-prac1').prev().remove();
		$('tr #table-name-prac1').prev().remove();
		}

		if ($(this).attr('colspan') == 3){
			$('#table-prac1-button-del').css('display', 'none');			
		}
	});
}
});

/*ADD BUTTON PROJ1*/
$('#table-proj1-button').click(function(){
	$('#table-proj1').each(function(){
		if ($(this).attr('colspan') != 4){
			projCounter1++;
		    var projSpan1=3+projCounter1;
		    projAdd1 = projSpan1-2;
		    $(this).attr('colspan',projSpan1);
		    $(this).val(projCounter1);
			
			$('#table-midterm').each(function(){
		    midtermCounter++;
		    var midtermSpan3=11+midtermCounter;
		    $(this).attr('colspan',midtermSpan3);
		    $(this).val(midtermCounter);
		});

		$('#table-proj1-button-del').css('display', 'inline-block');
		$('#table-proj1-total').before($("<th>Project " + projAdd1 + "</th>"));
		$('#table-items-proj1').before($("<td class='table-items-proj-mid' contenteditable='true'></td>"));
		$('tr #table-name-proj1').before($("<td class='table-student-proj-mid' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
		}
	});
});
/*DEL BUTTON PROJ1*/
$('#table-proj1-button-del').click(function(){
	yes.onclick = function() {
	modal.style.display = "none";
	$('#table-proj1').each(function(){
		if ($(this).attr('colspan') != 3){
		    projCounter1--;
		    var projSpan1=3+projCounter1;
		    $(this).attr('colspan',projSpan1);
		    $(this).val(projCounter1);
			    console.log($(this).attr('colspan'))
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var midtermSpan3=11+midtermCounter;
			    $(this).attr('colspan',midtermSpan3);
			    $(this).val(midtermCounter);
			});	

		$('#table-proj1-total').prev().remove();
		$('#table-items-proj1').prev().remove();
		$('tr #table-name-proj1').prev().remove();
		}

		if ($(this).attr('colspan') == 3){
			$('#table-proj1-button-del').css('display', 'none');			
		}
	});
}
});

/*--FINALS--*/
/* ADD BUTTON LAB1*/
$('#table-lab2-button').click(function(){
	$('#table-lab2').each(function(){
		if ($(this).attr('colspan') != 12){
			labCounter2++;
		    var labSpan2=3+labCounter2;
		    labAdd2 = labSpan2-2;
		    $(this).attr('colspan',labSpan2);
		    $(this).val(labCounter2);
			
			$('#table-finals').each(function(){
		    finalsCounter++;
		    var finalsSpan1=11+finalsCounter;
		    $(this).attr('colspan',finalsSpan1);
		    $(this).val(finalsCounter);
		});

		$('#table-lab2-button-del').css('display', 'inline-block');
		$('#table-lab2-total').before($("<th style='text-align:center'>Lab " + labAdd2 + "</th>"));
		$('#table-items-lab2').before($("<td class='table-items-lab-finals' contenteditable='true'></td>"));
		$('tr #table-name-lab2').before($("<td class='table-student-lab-finals' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
		}
	});
});
/*DEL BUTTON lab2*/
$('#table-lab2-button-del').click(function(){
	yes.onclick = function() {
	modal.style.display = "none";
	$('#table-lab2').each(function(){
		if ($(this).attr('colspan') != 3){
		    labCounter2--;
		    var labSpan2=3+labCounter2;
		    $(this).attr('colspan',labSpan2);
		    $(this).val(labCounter2);
			    console.log($(this).attr('colspan'))
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var finalsSpan4=11+finalsCounter;
			    $(this).attr('colspan',finalsSpan4);
			    $(this).val(finalsCounter);
			});	

		$('#table-lab2-total').prev().remove();
		$('#table-items-lab2').prev().remove();
		$('tr #table-name-lab2').prev().remove();
		}

		if ($(this).attr('colspan') == 3){
			$('#table-lab2-button-del').css('display', 'none');			
		}
	});
}
});

/*ADD BUTTON PRAC2*/
$('#table-prac2-button').click(function(){
	$('#table-prac2').each(function(){
		if ($(this).attr('colspan') != 7){
			pracCounter2++;
		    var pracSpan2=3+pracCounter2;
		    pracAdd2 = pracSpan2-2;
		    $(this).attr('colspan',pracSpan2);
		    $(this).val(pracCounter2);
			
			$('#table-finals').each(function(){
		    finalsCounter++;
		    var finalsSpan2=11+finalsCounter;
		    $(this).attr('colspan',finalsSpan2);
		    $(this).val(finalsCounter);
		});

		$('#table-prac2-button-del').css('display', 'inline-block');
		$('#table-prac2-total').before($("<th>Practical " + pracAdd2 + "</th>"));
		$('#table-items-prac2').before($("<td class='table-items-prac-finals' contenteditable='true'></td>"));
		$('tr #table-name-prac2').before($("<td class='table-student-prac-finals' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
		}
	});
});
/*DEL BUTTON PRAC2*/
$('#table-prac2-button-del').click(function(){
	yes.onclick = function() {
	modal.style.display = "none";
	$('#table-prac2').each(function(){
		if ($(this).attr('colspan') != 3){
		    pracCounter2--;
		    var pracSpan2=3+pracCounter2;
		    $(this).attr('colspan',pracSpan2);
		    $(this).val(pracCounter2);
			    console.log($(this).attr('colspan'))
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var finalsSpan2=11+finalsCounter;
			    $(this).attr('colspan',finalsSpan2);
			    $(this).val(finalsCounter);
			});	

		$('#table-prac2-total').prev().remove();
		$('#table-items-prac2').prev().remove();
		$('tr #table-name-prac2').prev().remove();
		}

		if ($(this).attr('colspan') == 3){
			$('#table-prac2-button-del').css('display', 'none');			
		}
	});
}
});

/*ADD BUTTON PROJ2*/
$('#table-proj2-button').click(function(){
	$('#table-proj2').each(function(){
		if ($(this).attr('colspan') != 4){
			projCounter2++;
		    var projSpan2=3+projCounter2;
		    projAdd2 = projSpan2-2;
		    $(this).attr('colspan',projSpan2);
		    $(this).val(projCounter2);
			
			$('#table-finals').each(function(){
		    finalsCounter++;
		    var finalsSpan3=11+finalsCounter;
		    $(this).attr('colspan',finalsSpan3);
		    $(this).val(finalsCounter);
		});

		$('#table-proj2-button-del').css('display', 'inline-block');
		$('#table-proj2-total').before($("<th>Project " + projAdd2 + "</th>"));
		$('#table-items-proj2').before($("<td class='table-items-proj-finals' contenteditable='true'></td>"));
		$('tr #table-name-proj2').before($("<td class='table-student-proj-finals' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
		}
	});
});
/*DEL BUTTON PROJ2*/
$('#table-proj2-button-del').click(function(){
	yes.onclick = function() {
	modal.style.display = "none";
	$('#table-proj2').each(function(){
		if ($(this).attr('colspan') != 3){
		    projCounter2--;
		    var projSpan2=3+projCounter2;
		    $(this).attr('colspan',projSpan2);
		    $(this).val(projCounter2);
			    console.log($(this).attr('colspan'))
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var finalsSpan3=11+finalsCounter;
			    $(this).attr('colspan',finalsSpan3);
			    $(this).val(finalsCounter);
			});	

		$('#table-proj2-total').prev().remove();
		$('#table-items-proj2').prev().remove();
		$('tr #table-name-proj2').prev().remove();
		}

		if ($(this).attr('colspan') == 3){
			$('#table-proj2-button-del').css('display', 'none');			
		}
	});
}
});