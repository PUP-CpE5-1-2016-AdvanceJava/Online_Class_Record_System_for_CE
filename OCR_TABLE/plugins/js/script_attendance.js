/*INITIAL COUNTERS FOR TABLE*/
midtermCounter=0
finalsCounter=0
attCounter1=0;
attCounter2=0;
attAdd1=0;
attAdd2=0;

var modal = document.getElementById('table-alert-modal');

// Get the button that opens the modal
var btn1 = document.getElementById("table-att1-button-del");
var btn2 = document.getElementById("table-att2-button-del");

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

/* ADD BUTTON ATT1*/
$('#table-att1-button').click(function(){
	$('#table-att1').each(function(){
		if ($(this).attr('colspan') != 17){
			attCounter1++;
		    var attSpan1=3+attCounter1;
		    attAdd1 = attSpan1-2;
		    $(this).attr('colspan',attSpan1);
		    $(this).val(attCounter1);
			
			$('#table-midterm').each(function(){
		    midtermCounter++;
		    var midtermSpan1=17+midtermCounter;
		    $(this).attr('colspan',midtermSpan1);
		    $(this).val(midtermCounter);
		});

		$('#table-att1-button-del').css('display', 'inline-block');
		$('#table-att1-total').before($("<td class='table-items-date-mid fixed-width' contenteditable='true'></td>"));
		$('tr #table-name-att1').before($("<td class='table-student-attendance-mid fixed-width' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
		}
	});
});
/*DEL BUTTON ATT1*/
$('#table-att1-button-del').click(function(){
	yes.onclick = function() {

	modal.style.display = "none";
	$('#table-att1').each(function(){
		if ($(this).attr('colspan') != 3){
		    attCounter1--;
		    var attSpan1=3+attCounter1;
		    $(this).attr('colspan',attSpan1);
		    $(this).val(attCounter1);
			    console.log($(this).attr('colspan'))
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var midtermSpan1=12+midtermCounter;
			    $(this).attr('colspan',midtermSpan1);
			    $(this).val(midtermCounter);
			});	

		$('#table-att1-total').prev().remove();
		
		$('tr #table-name-att1').prev().remove();
		}

		if ($(this).attr('colspan') == 3){
			$('#table-att1-button-del').css('display', 'none');			
		}


	});
}
});



/*--FINALS--*/
/* ADD BUTTON ATT1*/
$('#table-att2-button').click(function(){
	$('#table-att2').each(function(){
		if ($(this).attr('colspan') != 17){
			attCounter2++;
		    var attSpan2=3+attCounter2;
		    attAdd2 = attSpan2-2;
		    $(this).attr('colspan',attSpan2);
		    $(this).val(attCounter2);
			
			$('#table-finals').each(function(){
		    finalsCounter++;
		    var finalsSpan1=12+finalsCounter;
		    $(this).attr('colspan',finalsSpan1);
		    $(this).val(finalsCounter);
		});

		$('#table-att2-button-del').css('display', 'inline-block');
		$('#table-att2-total').before($("<td class='table-items-date-finals fixed-width' contenteditable='true'></td>"));
		$('tr #table-name-att2').before($("<td class= 'table-student-attendance-finals fixed-width' contenteditable='true'></td>")); // ADD NEW COLUMNS FOR ALL DUMMY ACCOUNT
		}
	});
});
/*DEL BUTTON ATT2*/
$('#table-att2-button-del').click(function(){
	yes.onclick = function() {
	modal.style.display = "none";
	$('#table-att2').each(function(){
		if ($(this).attr('colspan') != 3){
		    attCounter2--;
		    var labSpan2=3+attCounter2;
		    $(this).attr('colspan',labSpan2);
		    $(this).val(attCounter2);
			    console.log($(this).attr('colspan'))
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var finalsSpan4=12+finalsCounter;
			    $(this).attr('colspan',finalsSpan4);
			    $(this).val(finalsCounter);
			});	

		$('#table-att2-total').prev().remove();
		
		$('tr #table-name-att2').prev().remove();
		}

		if ($(this).attr('colspan') == 3){
			$('#table-att2-button-del').css('display', 'none');			
		}
	});
}
});

