a=0;
b=0;
c=0;
d=0;
e=0;
f=0;
g=0;
h=0;
i=0;
j=0;
k=0;
l=0;


midtermCounter=0;
finalsCounter=0;

classCounter=0;
classCounterFinals=0;

qleCounter=0;
qleCounterFinals=0;

assignCounter=0;
swCounter=0;
exCounter=0;
recCounter=0;
quizCounter=0;
leCounter=0;

assignCounterFinals=0;
swCounterFinals=0;
exCounterFinals=0;
recCounterFinals=0;
quizCounterFinals=0;
leCounterFinals=0;


increAssign=0;
increSw=0;
increEx=0;
increRec=0;
increQuiz=0;
increLE=0;

increAssignFinals=0;
increSwFinals=0;
increExFinals=0;
increRecFinals=0;
increQuizFinals=0;
increLEFinals=0;


var modal = document.getElementById('table-alert-modal');

// Get the button that opens the modal
var btn1 = document.getElementById("delete-col-assign1");
var btn2 = document.getElementById("delete-col-sw1");
var btn3 = document.getElementById("delete-col-ex1");
var btn4 = document.getElementById("delete-col-rec1");
var btn5 = document.getElementById("delete-col-le1");
var btn6 = document.getElementById("delete-col-quiz1");
var btn7 = document.getElementById("delete-col-assign2");
var btn8 = document.getElementById("delete-col-sw2");
var btn9 = document.getElementById("delete-col-ex2");
var btn10 = document.getElementById("delete-col-rec2");
var btn11 = document.getElementById("delete-col-le2");
var btn12 = document.getElementById("delete-col-quiz2");

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
btn7.onclick = function() {
    modal.style.display = "block";
}

btn8.onclick = function() {
    modal.style.display = "block";
}
btn9.onclick = function() {
    modal.style.display = "block";
}

btn10.onclick = function() {
    modal.style.display = "block";
}
btn11.onclick = function() {
    modal.style.display = "block";
}

btn12.onclick = function() {
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

//MIDTERM

//ASSIGNMENT
$('#add-col-assign1').click(function(){
	if ($('#assignment').attr('colspan') != 10){
		$('#table-classStanding').each(function(){
		    a++;
		    var newID1=6+a;
		    increAssign = newID1-5;
		    $(this).attr('colspan',newID1);
		    $(this).val(a);
		});
		$('#assignment').each(function(){
		    assignCounter++;
		    var newCol=1+assignCounter;
		    $(this).attr('colspan',newCol);
		    $(this).val(assignCounter);
		});
		$('#table-classStanding').each(function(){
		    classCounter++;
		    var newClass=6+classCounter;
		    $(this).attr('colspan',newClass);
		    $(this).val(classCounter);
		});
		$('#table-midterm').each(function(){
		    midtermCounter++;
		    var newClassMidterm=15+midtermCounter;
		    $(this).attr('colspan',newClassMidterm);
		    $(this).val(midtermCounter);
		});

		$('#delete-col-assign1').css('display', 'inline-block');
		$('#sideseatwork').before($("<th class='text-center'>ASSIGN " + increAssign + "</th>"));
		$('#table-items-seatwork1').before($("<td class='table-items-assign-mid' contenteditable='true'></td>"));
		$('tr #table-seatwork-classStanding1').before($("<td class='table-student-assign-mid' contenteditable='true'></td>"));
	}
});
//DELETE ASSIGNMENT
$('#delete-col-assign1').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#assignment').attr('colspan') != 11){
			$('#table-classStanding').each(function(){
			    a--;
			    var newID1=6+a;
			    increAssign = newID1-5;
			    $(this).attr('colspan',newID1);
			    $(this).val(a);
			});
			$('#assignment').each(function(){
			    assignCounter--;
			    var newCol=1+assignCounter;
			    $(this).attr('colspan',newCol);
			    $(this).val(assignCounter);
			});
			$('#table-classStanding').each(function(){
			    classCounter--;
			    var newClass=6+classCounter;
			    $(this).attr('colspan',newClass);
			    $(this).val(classCounter);
			});
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var newClassMidterm=15+midtermCounter;
			    $(this).attr('colspan',newClassMidterm);
			    $(this).val(midtermCounter);
			});

			$('#sideseatwork').prev().remove();
			$('#table-items-seatwork1').prev().remove();
			$('tr #table-seatwork-classStanding1').prev().remove();
		}
		if ($('#assignment').attr('colspan') == 1){
			$('#delete-col-assign1').css('display', 'none');
		}
	}
});


//SEATWORk
$('#add-col-sw1').click(function(){
	if ($('#seatwork').attr('colspan') != 10){
		$('#table-classStanding').each(function(){
		    b++;
		    var newID2=6+b;
		    increSw = newID2-5;
		    $(this).attr('colspan',newID2);
		    $(this).val(b);
		});
		$('#seatwork').each(function(){
		    swCounter++;
		    var newCol2=1+swCounter;
		    $(this).attr('colspan',newCol2);
		    $(this).val(swCounter);
		});
		$('#table-classStanding').each(function(){
		    classCounter++;
		    var newClass=6+classCounter;
		    $(this).attr('colspan',newClass);
		    $(this).val(classCounter);
		});
		$('#table-midterm').each(function(){
		    midtermCounter++;
		    var newClassMidterm=15+midtermCounter;
		    $(this).attr('colspan',newClassMidterm);
		    $(this).val(midtermCounter);
		});

		$('#delete-col-sw1').css('display', 'inline-block');
		$('#sideexercise').before($("<th class='text-center'>SW " + increSw + "</th>"));
		$('#table-items-ex1').before($("<td class='table-items-seatwork-mid' contenteditable='true'></td>"));
		$('tr #table-exercise-classStanding1').before($("<td class='table-student-seatwork-mid' contenteditable='true'></td>"));
	}
});
//DELETE SEATWORK
$('#delete-col-sw1').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#seatwork').attr('colspan') != 11){
			$('#table-classStanding').each(function(){
			    b--;
			    var newID2=6+b;
			    increSw = newID2-5;
			    $(this).attr('colspan',newID2);
			    $(this).val(b);
			});
			$('#seatwork').each(function(){
			    swCounter--;
			    var newCol2=1+swCounter;
			    $(this).attr('colspan',newCol2);
			    $(this).val(swCounter);
			});
			$('#table-classStanding').each(function(){
			    classCounter--;
			    var newClass=6+classCounter;
			    $(this).attr('colspan',newClass);
			    $(this).val(classCounter);
			});
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var newClassMidterm=15+midtermCounter;
			    $(this).attr('colspan',newClassMidterm);
			    $(this).val(midtermCounter);
			});

			$('#sideexercise').prev().remove();
			$('#table-items-ex1').prev().remove();
			$('tr #table-exercise-classStanding1').prev().remove();
		}
		if ($('#seatwork').attr('colspan') == 1){
			$('#delete-col-sw1').css('display', 'none');
		}
	}
});

//EXERCISE
$('#add-col-ex1').click(function(){
	if ($('#exercise').attr('colspan') != 10){
		$('#table-classStanding').each(function(){
		   c++;
		    var newID3=6+c;
		    increEx = newID3-5;
		    $(this).attr('colspan',newID3);
		    $(this).val(c);
		});
		$('#exercise').each(function(){
		    exCounter++;
		    var newCol3=1+exCounter;
		    $(this).attr('colspan',newCol3);
		    $(this).val(exCounter);
		});
		$('#table-classStanding').each(function(){
		    classCounter++;
		    var newClass=6+classCounter;
		    $(this).attr('colspan',newClass);
		    $(this).val(classCounter);
		});
		$('#table-midterm').each(function(){
		    midtermCounter++;
		    var newClassMidterm=15+midtermCounter;
		    $(this).attr('colspan',newClassMidterm);
		    $(this).val(midtermCounter);
		});

		$('#delete-col-ex1').css('display', 'inline-block');
		$('#siderecitation').before($("<th class='text-center'>EX " + increEx + "</th>"));
		$('#table-items-rec1').before($("<td class='table-items-exercise-mid' contenteditable='true'></td>"));
		$('tr #table-rec-classStanding1').before($("<td class='table-student-exercise-mid' contenteditable='true'></td>"));
	}
});
//DELETE EXERCISE
$('#delete-col-ex1').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#exercise').attr('colspan') != 11){
			$('#table-classStanding').each(function(){
			   c--;
			    var newID3=6+c;
			    increEx = newID3-5;
			    $(this).attr('colspan',newID3);
			    $(this).val(c);
			});
			$('#exercise').each(function(){
			    exCounter--;
			    var newCol3=1+exCounter;
			    $(this).attr('colspan',newCol3);
			    $(this).val(exCounter);
			});
			$('#table-classStanding').each(function(){
			    classCounter--;
			    var newClass=6+classCounter;
			    $(this).attr('colspan',newClass);
			    $(this).val(classCounter);
			});
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var newClassMidterm=15+midtermCounter;
			    $(this).attr('colspan',newClassMidterm);
			    $(this).val(midtermCounter);
			});

			$('#siderecitation').prev().remove();
			$('#table-items-rec1').prev().remove();
			$('tr #table-rec-classStanding1').prev().remove();
		}
		if ($('#exercise').attr('colspan') == 1){
			$('#delete-col-ex1').css('display', 'none');
		}
}	
});


//RECITATION
$('#add-col-rec1').click(function(){
	if ($('#recitation').attr('colspan') != 10){
		$('#table-classStanding').each(function(){
		   d++;
		    var newID4=6+d;
		    increRec = newID4-5;
		    $(this).attr('colspan',newID4);
		    $(this).val(d);
		});
		$('#recitation').each(function(){
		    recCounter++;
		    var newCol4=1+recCounter;
		    $(this).attr('colspan',newCol4);
		    $(this).val(recCounter);
		});
		$('#table-classStanding').each(function(){
		    classCounter++;
		    var newClass=6+classCounter;
		    $(this).attr('colspan',newClass);
		    $(this).val(classCounter);
		});
		$('#table-midterm').each(function(){
		    midtermCounter++;
		    var newClassMidterm=15+midtermCounter;
		    $(this).attr('colspan',newClassMidterm);
		    $(this).val(midtermCounter);
		});

		$('#delete-col-rec1').css('display', 'inline-block');
		$('#sidetotal').before($("<th class='text-center'>REC " + increRec + "</th>"));
		$('#table-items-classStanding1').before($("<td class='table-items-recitation-mid' contenteditable='true'></td>"));
		$('tr #table-total-classStanding1').before($("<td class='table-student-recitation-mid' contenteditable='true'></td>"));
	}
});
//DELETE RECITATION
$('#delete-col-rec1').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#recitation').attr('colspan') != 11){
			$('#table-classStanding').each(function(){
			   d--;
			    var newID4=6+d;
			    increRec = newID4-5;
			    $(this).attr('colspan',newID4);
			    $(this).val(d);
			});
			$('#recitation').each(function(){
			    recCounter--;
			    var newCol4=1+recCounter;
			    $(this).attr('colspan',newCol4);
			    $(this).val(recCounter);
			});
			$('#table-classStanding').each(function(){
			    classCounter--;
			    var newClass=6+classCounter;
			    $(this).attr('colspan',newClass);
			    $(this).val(classCounter);
			});
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var newClassMidterm=15+midtermCounter;
			    $(this).attr('colspan',newClassMidterm);
			    $(this).val(midtermCounter);
			});

			$('#sidetotal').prev().remove()
			$('#table-items-classStanding1').prev().remove()
			$('tr #table-total-classStanding1').prev().remove()
		}
		if ($('#recitation').attr('colspan') == 1){
			$('#delete-col-rec1').css('display', 'none');
		}
	}
});

//QUIZZES
$('#add-col-quiz1').click(function(){
	if ($('#quiz').attr('colspan') != 10){
		$('#table-quizLE').each(function(){
		   e++;
		    var newID5=4+e;
		    increQuiz = newID5-3;
		    $(this).attr('colspan',newID5);
		    $(this).val(e);
		});
		$('#quiz').each(function(){
		    quizCounter++;
		    var newCol5=1+quizCounter;
		    $(this).attr('colspan',newCol5);
		    $(this).val(quizCounter);
		});
		$('#table-quizLE').each(function(){
		    qleCounter++;
		    var newClass=4+qleCounter;
		    $(this).attr('colspan',newClass);
		    $(this).val(qleCounter);
		});
		$('#table-midterm').each(function(){
		    midtermCounter++;
		    var newClassMidterm=15+midtermCounter;
		    $(this).attr('colspan',newClassMidterm);
		    $(this).val(midtermCounter);
		});

		$('#delete-col-quiz1').css('display', 'inline-block');
		$('#sideLE').before($("<th class='text-center'>QUIZ " + increQuiz + "</th>"));
		$('#table-items-le1').before($("<td class='table-items-quiz-mid' contenteditable='true'></td>"));
		$('tr #table-le-quizLong1').before($("<td class='table-student-quiz-mid' contenteditable='true'></td>"));
	}
});
//DELETE QUIZZES
$('#delete-col-quiz1').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#quiz').attr('colspan') != 11){
			$('#table-quizLE').each(function(){
			   e--;
			    var newID5=4+e;
			    increQuiz = newID5-3;
			    $(this).attr('colspan',newID5);
			    $(this).val(e);
			});
			$('#quiz').each(function(){
			    quizCounter--;
			    var newCol5=1+quizCounter;
			    $(this).attr('colspan',newCol5);
			    $(this).val(quizCounter);
			});
			$('#table-quizLE').each(function(){
			    qleCounter--;
			    var newClass=4+qleCounter;
			    $(this).attr('colspan',newClass);
			    $(this).val(qleCounter);
			});
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var newClassMidterm=15+midtermCounter;
			    $(this).attr('colspan',newClassMidterm);
			    $(this).val(midtermCounter);
			});

			$('#sideLE').prev().remove()
			$('#table-items-le1').prev().remove()
			$('tr #table-le-quizLong1').prev().remove()
		}
		if ($('#quiz').attr('colspan') == 1){
			$('#delete-col-quiz1').css('display', 'none');
		}
	}
});

//LONGEXAM
$('#add-col-le1').click(function(){
	if ($('#longexam').attr('colspan') != 5){
		$('#table-quizLE').each(function(){
		   f++;
		    var newID6=4+f;
		    increLE = newID6-3;
		    $(this).attr('colspan',newID6);
		    $(this).val(f);
		});
		$('#longexam').each(function(){
		    leCounter++;
		    var newCol6=1+leCounter;
		    $(this).attr('colspan',newCol6);
		    $(this).val(leCounter);
		});
		$('#table-quizLE').each(function(){
		    qleCounter++;
		    var newClass=4+qleCounter;
		    $(this).attr('colspan',newClass);
		    $(this).val(qleCounter);
		});
		$('#table-midterm').each(function(){
		    midtermCounter++;
		    var newClassMidterm=15+midtermCounter;
		    $(this).attr('colspan',newClassMidterm);
		    $(this).val(midtermCounter);
		});

		$('#delete-col-le1').css('display', 'inline-block');
		$('#sidetotal2').before($("<th class='text-center'>LE " + increLE + "</th>"));
		$('#table-items-quizLong1').before($("<td class='table-items-longExam-mid' contenteditable='true'></td>"));
		$('tr #table-total-quizLong1').before($("<td class='table-student-longExam-mid' contenteditable='true'></td>"));
	}
});
//DELETE LONG EXAM
$('#delete-col-le1').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#longexam').attr('colspan') != 6){
			$('#table-quizLE').each(function(){
			   f--;
			    var newID6=4+f;
			    increLE = newID6-3;
			    $(this).attr('colspan',newID6);
			    $(this).val(f);
			});
			$('#longexam').each(function(){
			    leCounter--;
			    var newCol6=1+leCounter;
			    $(this).attr('colspan',newCol6);
			    $(this).val(leCounter);
			});
			$('#table-quizLE').each(function(){
			    qleCounter--;
			    var newClass=4+qleCounter;
			    $(this).attr('colspan',newClass);
			    $(this).val(qleCounter);
			});
			$('#table-midterm').each(function(){
			    midtermCounter--;
			    var newClassMidterm=15+midtermCounter;
			    $(this).attr('colspan',newClassMidterm);
			    $(this).val(midtermCounter);
			});

			$('#sidetotal2').prev().remove()
			$('#table-items-quizLong1').prev().remove()
			$('tr #table-total-quizLong1').prev().remove()
		}
		if ($('#longexam').attr('colspan') == 1){
			$('#delete-col-le1').css('display', 'none');
		}
	}
});


//FINALS
//ASSIGNMENT
$('#add-col-assign2').click(function(){
	if ($('#assignmentFinals').attr('colspan') != 10){
		$('#table-classStandingFinals').each(function(){
		    g++;
		    var newID7=6+g;
		    increAssignFinals = newID7-5;
		    $(this).attr('colspan',newID7);
		    $(this).val(g);
		});
		$('#assignmentFinals').each(function(){
		    assignCounterFinals++;
		    var newCol7=1+assignCounterFinals;
		    $(this).attr('colspan',newCol7);
		    $(this).val(assignCounterFinals);
		});
		$('#table-classStandingFinals').each(function(){
		    classCounterFinals++;
		    var newClassF=6+classCounterFinals;
		    $(this).attr('colspan',newClassF);
		    $(this).val(classCounterFinals);
		});
		$('#table-finals').each(function(){
		    finalsCounter++;
		    var newClassFinals=15+finalsCounter;
		    $(this).attr('colspan',newClassFinals);
		    $(this).val(finalsCounter);
		});

		$('#delete-col-assign2').css('display', 'inline-block');
		$('#sideseatworkFinals').before($("<th class='text-center'>ASSIGN " + increAssignFinals + "</th>"));
		$('#table-items-seatwork2').before($("<td class='table-items-assign-finals' contenteditable='true'></td>"));
		$('tr #table-seatwork-classStanding2').before($("<td class='table-student-assign-finals' contenteditable='true'></td>"));
	}
});
//DELETE ASSIGNMENT
$('#delete-col-assign2').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#assignmentFinals').attr('colspan') != 11){
			$('#table-classStandingFinals').each(function(){
			    g--;
			    var newID7=6+g;
			    increAssignFinals = newID7-5;
			    $(this).attr('colspan',newID7);
			    $(this).val(g);
			});
			$('#assignmentFinals').each(function(){
			    assignCounterFinals--;
			    var newCol7=1+assignCounterFinals;
			    $(this).attr('colspan',newCol7);
			    $(this).val(assignCounterFinals);
			});
			$('#table-classStandingFinals').each(function(){
			    classCounterFinals--;
			    var newClassF=6+classCounterFinals;
			    $(this).attr('colspan',newClassF);
			    $(this).val(classCounterFinals);
			});
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var newClassFinals=15+finalsCounter;
			    $(this).attr('colspan',newClassFinals);
			    $(this).val(finalsCounter);
			});

			$('#sideseatworkFinals').prev().remove()
			$('#table-items-seatwork2').prev().remove()
			$('tr #table-seatwork-classStanding2').prev().remove()
		}
		if ($('#assignmentFinals').attr('colspan') == 1){
			$('#delete-col-assign2').css('display', 'none');
		}
	}
});

//SEATWORk
$('#add-col-sw2').click(function(){
	if ($('#seatworkFinals').attr('colspan') != 10){
		$('#table-classStandingFinals').each(function(){
		    h++;
		    var newID8=6+h;
		    increSwFinals = newID8-5;
		    $(this).attr('colspan',newID8);
		    $(this).val(h);
		});
		$('#seatworkFinals').each(function(){
		    swCounterFinals++;
		    var newCol8=1+swCounterFinals;
		    $(this).attr('colspan',newCol8);
		    $(this).val(swCounterFinals);
		});
		$('#table-classStandingFinals').each(function(){
		    classCounterFinals++;
		    var newClassF=6+classCounterFinals;
		    $(this).attr('colspan',newClassF);
		    $(this).val(classCounterFinals);
		});
		$('#table-finals').each(function(){
		    finalsCounter++;
		    var newClassFinals=15+finalsCounter;
		    $(this).attr('colspan',newClassFinals);
		    $(this).val(finalsCounter);
		});

		$('#delete-col-sw2').css('display', 'inline-block');
		$('#sideexerciseFinals').before($("<th class='text-center'>SW " + increSwFinals + "</th>"));
		$('#table-items-ex2').before($("<td class='table-items-seatwork-finals' contenteditable='true'></td>"));
		$('tr #table-exercise-classStanding2').before($("<td class='table-student-seatwork-finals' contenteditable='true'></td>"));
	}
});
//DELETE SEATWORK
$('#delete-col-sw2').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#seatworkFinals').attr('colspan') != 11){
			$('#table-classStandingFinals').each(function(){
			    h--;
			    var newID8=6+h;
			    increSwFinals = newID8-5;
			    $(this).attr('colspan',newID8);
			    $(this).val(h);
			});
			$('#seatworkFinals').each(function(){
			    swCounterFinals--;
			    var newCol8=1+swCounterFinals;
			    $(this).attr('colspan',newCol8);
			    $(this).val(swCounterFinals);
			});
			$('#table-classStandingFinals').each(function(){
			    classCounterFinals--;
			    var newClassF=6+classCounterFinals;
			    $(this).attr('colspan',newClassF);
			    $(this).val(classCounterFinals);
			});
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var newClassFinals=15+finalsCounter;
			    $(this).attr('colspan',newClassFinals);
			    $(this).val(finalsCounter);
			});

			$('#sideexerciseFinals').prev().remove();
			$('#table-items-ex2').prev().remove();
			$('tr #table-exercise-classStanding2').prev().remove();
		}
		if ($('#seatworkFinals').attr('colspan') == 1){
			$('#delete-col-sw2').css('display', 'none');
		}
	}
});

//EXERCISE
$('#add-col-ex2').click(function(){
	if ($('#exerciseFinals').attr('colspan') != 10){
		$('#table-classStandingFinals').each(function(){
		   i++;
		    var newID9=6+i;
		    increExFinals = newID9-5;
		    $(this).attr('colspan',newID9);
		    $(this).val(i);
		});
		$('#exerciseFinals').each(function(){
		    exCounterFinals++;
		    var newCol9=1+exCounterFinals;
		    $(this).attr('colspan',newCol9);
		    $(this).val(exCounterFinals);
		});
		$('#table-classStandingFinals').each(function(){
		    classCounterFinals++;
		    var newClassF=6+classCounterFinals;
		    $(this).attr('colspan',newClassF);
		    $(this).val(classCounterFinals);
		});
		$('#table-finals').each(function(){
		    finalsCounter++;
		    var newClassFinals=15+finalsCounter;
		    $(this).attr('colspan',newClassFinals);
		    $(this).val(finalsCounter);
		});

		$('#delete-col-ex2').css('display', 'inline-block');
		$('#siderecitationFinals').before($("<th class='text-center'>EX " + increExFinals + "</th>"));
		$('#table-items-rec2').before($("<td class='table-items-exercise-finals' contenteditable='true'></td>"));
		$('tr #table-rec-classStanding2').before($("<td class='table-student-exercise-finals' contenteditable='true'></td>"));
	}
});
//DELETE EXERCISE
$('#delete-col-ex2').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#exerciseFinals').attr('colspan') != 11){
			$('#table-classStandingFinals').each(function(){
			   i--;
			    var newID9=6+i;
			    increExFinals = newID9-5;
			    $(this).attr('colspan',newID9);
			    $(this).val(i);
			});
			$('#exerciseFinals').each(function(){
			    exCounterFinals--;
			    var newCol9=1+exCounterFinals;
			    $(this).attr('colspan',newCol9);
			    $(this).val(exCounterFinals);
			});
			$('#table-classStandingFinals').each(function(){
			    classCounterFinals--;
			    var newClassF=6+classCounterFinals;
			    $(this).attr('colspan',newClassF);
			    $(this).val(classCounterFinals);
			});
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var newClassFinals=15+finalsCounter;
			    $(this).attr('colspan',newClassFinals);
			    $(this).val(finalsCounter);
			});
			
			$('#siderecitationFinals').prev().remove()
			$('#table-items-rec2').prev().remove()
			$('tr #table-rec-classStanding2').prev().remove()
		}
		if ($('#exerciseFinals').attr('colspan') == 1){
			$('#delete-col-ex2').css('display', 'none');
		}
	}
});

//RECITATION
$('#add-col-rec2').click(function(){
	if ($('#recitationFinals').attr('colspan') != 10){
		$('#table-classStandingFinals').each(function(){
		   j++;
		    var newID10=6+j;
		    increRecFinals = newID10-5;
		    $(this).attr('colspan',newID10);
		    $(this).val(j);
		});
		$('#recitationFinals').each(function(){
		    recCounterFinals++;
		    var newCol10=1+recCounterFinals;
		    $(this).attr('colspan',newCol10);
		    $(this).val(recCounterFinals);
		});
		$('#table-classStandingFinals').each(function(){
		    classCounterFinals++;
		    var newClassF=6+classCounterFinals;
		    $(this).attr('colspan',newClassF);
		    $(this).val(classCounterFinals);
		});
		$('#table-finals').each(function(){
		    finalsCounter++;
		    var newClassFinals=15+finalsCounter;
		    $(this).attr('colspan',newClassFinals);
		    $(this).val(finalsCounter);
		});

		$('#delete-col-rec2').css('display', 'inline-block');
		$('#sidetotalFinals').before($("<th class='text-center'>REC " + increRecFinals + "</th>"));
		$('#table-items-classStanding2').before($("<td class='table-items-recitation-finals' contenteditable='true'></td>"));
		$('tr #table-total-classStanding2').before($("<td class='table-student-recitation-finals' contenteditable='true'></td>"));
	}
});
//DELETE RECITATION
$('#delete-col-rec2').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#recitationFinals').attr('colspan') != 11){
			$('#table-classStandingFinals').each(function(){
			   j--;
			    var newID10=6+j;
			    increRecFinals = newID10-5;
			    $(this).attr('colspan',newID10);
			    $(this).val(j);
			});
			$('#recitationFinals').each(function(){
			    recCounterFinals--;
			    var newCol10=1+recCounterFinals;
			    $(this).attr('colspan',newCol10);
			    $(this).val(recCounterFinals);
			});
			$('#table-classStandingFinals').each(function(){
			    classCounterFinals--;
			    var newClassF=6+classCounterFinals;
			    $(this).attr('colspan',newClassF);
			    $(this).val(classCounterFinals);
			});
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var newClassFinals=15+finalsCounter;
			    $(this).attr('colspan',newClassFinals);
			    $(this).val(finalsCounter);
			});

			$('#sidetotalFinals').prev().remove();
			$('#table-items-classStanding2').prev().remove();
			$('tr #table-total-classStanding2').prev().remove();
		}
		if ($('#recitationFinals').attr('colspan') == 1){
			$('#delete-col-rec2').css('display', 'none');
		}
	}
});

//QUIZZES
$('#add-col-quiz2').click(function(){
	if ($('#quizFinals').attr('colspan') != 10){
		$('#table-quizLEFinals').each(function(){
		   k++;
		    var newID11=4+k;
		    increQuizFinals = newID11-3;
		    $(this).attr('colspan',newID11);
		    $(this).val(k);
		});
		$('#quizFinals').each(function(){
		    quizCounterFinals++;
		    var newCol11=1+quizCounterFinals;
		    $(this).attr('colspan',newCol11);
		    $(this).val(quizCounterFinals);
		});
		$('#table-quizLEFinals').each(function(){
		    qleCounterFinals++;
		    var newClassF=4+qleCounterFinals;
		    $(this).attr('colspan',newClassF);
		    $(this).val(qleCounterFinals);
		});
		$('#table-finals').each(function(){
		    finalsCounter++;
		    var newClassFinals=15+finalsCounter;
		    $(this).attr('colspan',newClassFinals);
		    $(this).val(finalsCounter);
		});

		$('#delete-col-quiz2').css('display', 'inline-block');
		$('#sideLEFinals').before($("<th class='text-center'>QUIZ " + increQuizFinals + "</th>"));
		$('#table-items-le2').before($("<td class='table-items-quiz-finals' contenteditable='true'></td>"));
		$('tr #table-le-quizLong2').before($("<td class='table-student-quiz-finals' contenteditable='true'></td>"));
	}
});
//DELETE QUIZZES
$('#delete-col-quiz2').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#quizFinals').attr('colspan') != 11){
			$('#table-quizLEFinals').each(function(){
			   k--;
			    var newID11=4+k;
			    increQuizFinals = newID11-3;
			    $(this).attr('colspan',newID11);
			    $(this).val(k);
			});
			$('#quizFinals').each(function(){
			    quizCounterFinals--;
			    var newCol11=1+quizCounterFinals;
			    $(this).attr('colspan',newCol11);
			    $(this).val(quizCounterFinals);
			});
			$('#table-quizLEFinals').each(function(){
			    qleCounterFinals--;
			    var newClassF=4+qleCounterFinals;
			    $(this).attr('colspan',newClassF);
			    $(this).val(qleCounterFinals);
			});
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var newClassFinals=15+finalsCounter;
			    $(this).attr('colspan',newClassFinals);
			    $(this).val(finalsCounter);
			});
			
			$('#sideLEFinals').prev().remove();
			$('#table-items-le2').prev().remove();
			$('tr #table-le-quizLong2').prev().remove();
		}
		if ($('#quizFinals').attr('colspan') == 1){
			$('#delete-col-quiz2').css('display', 'none');
		}
	}
});

//LONGEXAM
$('#add-col-le2').click(function(){
	if ($('#longexamFinals').attr('colspan') != 5){
		$('#table-quizLEFinals').each(function(){
		   l++;
		    var newID12=4+l;
		    increLEFinals = newID12-3;
		    $(this).attr('colspan',newID12);
		    $(this).val(l);
		});
		$('#longexamFinals').each(function(){
		    leCounterFinals++;
		    var newCol12=1+leCounterFinals;
		    $(this).attr('colspan',newCol12);
		    $(this).val(leCounterFinals);
		});
		$('#table-quizLEFinals').each(function(){
		    qleCounterFinals++;
		    var newClassF=4+qleCounterFinals;
		    $(this).attr('colspan',newClassF);
		    $(this).val(qleCounterFinals);
		});
		$('#table-finals').each(function(){
		    finalsCounter++;
		    var newClassFinals=15+finalsCounter;
		    $(this).attr('colspan',newClassFinals);
		    $(this).val(finalsCounter);
		});

		$('#delete-col-le2').css('display', 'inline-block');
		$('#sidetotal2Finals').before($("<th class='text-center'>LE " + increLEFinals + "</th>"));
		$('#table-items-quizLong2').before($("<td class='table-items-longExam-finals' contenteditable='true'></td>"));
		$('tr #table-total-quizLong2').before($("<td class='table-student-longExams-finals' contenteditable='true'></td>"));
	}
});
//DELETE LONG EXAM
$('#delete-col-le2').click(function(){
	yes.onclick = function() {
		modal.style.display = "none";
		if ($('#longexamFinals').attr('colspan') != 6){
			$('#table-quizLEFinals').each(function(){
			   l--;
			    var newID12=4+l;
			    increLEFinals = newID12-3;
			    $(this).attr('colspan',newID12);
			    $(this).val(l);
			});
			$('#longexamFinals').each(function(){
			    leCounterFinals--;
			    var newCol12=1+leCounterFinals;
			    $(this).attr('colspan',newCol12);
			    $(this).val(leCounterFinals);
			});
			$('#table-quizLEFinals').each(function(){
			    qleCounterFinals--;
			    var newClassF=4+qleCounterFinals;
			    $(this).attr('colspan',newClassF);
			    $(this).val(qleCounterFinals);
			});
			$('#table-finals').each(function(){
			    finalsCounter--;
			    var newClassFinals=15+finalsCounter;
			    $(this).attr('colspan',newClassFinals);
			    $(this).val(finalsCounter);
			});

			$('#sidetotal2Finals').prev().remove();
			$('#table-items-quizLong2').prev().remove();
			$('tr #table-total-quizLong2').prev().remove();
		}
		if ($('#longexamFinals').attr('colspan') == 1){
			$('#delete-col-le2').css('display', 'none');
		}
	}
});