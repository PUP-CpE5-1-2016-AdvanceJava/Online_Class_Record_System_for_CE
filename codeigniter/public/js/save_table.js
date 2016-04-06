function getAllData() {
    
    
var target = {};
var num_items_obj = {};
var return_object = {};

    /**********************************************
	 ** Subject - object prototype for a subject **
	 **********************************************

	 * Properties:
		- type: lecture o laboratory class?
		- students: array holding Student objects (student information)
		- records: number of items in a quiz, assignment, etc.
	*/
	function Subject ()
	{
		// reference of this, used on jQuery statements to avoid conflicts
		var self = this;


		// get type of class record (either "Lec" or "Lab") through a hidden input with ID tableType
		this.type = $('#tableType').val();

		this.students = [];

		// temp variable to store student information to be pushed to students[]
		var student = {};

		this.records = {};

        if ($('#sheetType').val() == "attendance_table")
        {
                
                $('table .stud-record').each(function() {

                    student = new Student();

                    student.name = $(this).find('.stud-name').html();
                    student.num = $(this).find('.stud-num').html();

                    student.records = new Attendance();
                    student.records.initialize('table .'+student.num, 'td', student);

                    self.students.push(student);
                });	
        }
            
		// if class record is of the "Lec" type
		else if (this.type == "Lec") {
                this.records = new Lecture();
            
                //  get number-of-items values from .num-items <tr>
                try
                {
                    this.records.initialize('table .num-items' , 'td', this);
                }    
                catch(err)
                {
                    alert(err);
                    return;
                }
                num_items_obj = self.records;
                
                // get student name, number, and raw scores from .stud-record <tr>
                $('table .stud-record').each(function() {

                    student = new Student();

                    student.name = $(this).find('.stud-name').html();
                    student.num = $(this).find('.stud-num').html();
                   
                    student.records = new Lecture();
                    
                    try
                    {
                        student.records.initialize('table .'+student.num, 'td', student); 
                    }
                    
                    catch(err)
                    {
                        alert(err);
                        return false;   
                    }

                    self.students.push(student);
                });	

		} 
        
        else if (this.type == "Lab") {
            
            this.records = new Laboratory();
            
            try
            {
                //  get number-of-items values from .num-items <tr>
			    this.records.initialize('table .num-items' , 'td', this);
            }
			
            catch(err)
            {
                alert(err);
                return;   
            }
            
			
			num_items_obj = self.records;

			$('table .stud-record').each(function() {

				student = new Student();

				student.name = $(this).find('.stud-name').html();
				student.num = $(this).find('.stud-num').html();

				student.records = new Laboratory();
                
                try 
                {
                    student.records.initialize('table .'+student.num, 'td', student);
                }
                
				catch(err)
                {
                    alert(err);
                    return false;   
                }

				self.students.push(student);
			});
		}
		return_object = {
			status:'OK',
			data: self
		};

	}

	/******************************************************
	 ** Lecture - object prototype for lecture raw score **
	 ******************************************************

	 * Properties:
		- midterm, final: two objects representing midterm and final grading
						  raw scores with properties:

			- assignment:   array holding assignment scores
			- seatwork:     "" seatwork scores
			- exercise:	  	" exercise scores
			- recitation:   "" recitation scores
			- quiz:		  	"" quiz scores
			- long_exam:	variable holding long exam score
			- term_exam (for midterm): midterm exam score
			- final_exam (for final): final exam score

	 * Methods:
		- initialize (mother, chlid, target):
			Get values to be assigned to 'target' Lecture object properties, based on 'mother' and 'child' values
			where 'mother' is the scope and 'child' is the element to inspect.

			+ Example: initialize('table .num-items td', this) searches <td>s on .num-items elements of <table> for relevant
					 Lecture property values, to be stored on the current object (this)
	*/
	function Lecture()
	{
		this.midterm = {
				att_percent: 0,
				assignment: [],
				seatwork: [],
				exercise: [],
				recitation: [],
				standing: 0,
				cs_percent: 0,
				quiz: [],
				long_exam: [],
				qzle_total: 0,
				qzle_percent: 0,
				term_exam: 0,
				exam_percent: 0,
				grade: 0,
				rating: 0
		};
        
		this.finals = {
		    	att_percent: 0,
			    assignment: [],
			    seatwork: [],
			    exercise: [],
			    recitation: [],
			    standing: 0,
			    cs_percent: 0,
			    quiz: [],
			    long_exam: [],
			    qzle_total: 0,
			    qzle_percent: 0,
			    term_exam: 0,
			    exam_percent: 0,
			    grade: 0,
			    rating: 0
		};
	}

	/** initialize method **/
	Lecture.prototype.initialize = function (mother, child, target) {
            var value = '';
            
            // process 'child' element on 'mother'
            $(mother).find(child).each(function() {
                
                
                // if current mother has a .table-items-assign-mid child
                if ($(this).hasClass('table-items-assign-mid')) {
                    value = $(this).html().replace('<br>', '');
                    
                    checkIfValid(value, mother, target, "midterm assignment", 0);
                    
                    // push cell value to 'assignment' array of 'items' object
                    target.records.midterm.assignment.push(value);
                }

                else if ($(this).hasClass('table-items-seatwork-mid')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "midterm seatwork", 0);
                    target.records.midterm.seatwork.push(value);
                }
                else if ($(this).hasClass('table-items-exercise-mid')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "midterm exercise", 0);
                    target.records.midterm.exercise.push(value);
                }
                else if ($(this).hasClass('table-items-recitation-mid')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "midterm recitation", 0);
                    target.records.midterm.recitation.push(value);
                }
                else if ($(this).hasClass('table-items-standing-total-mid') && !$(mother).hasClass('num-items')) {
                    var mid_standing_total = 0;
                    var total_cs_cols = num_items_obj.midterm.assignment.length + num_items_obj.midterm.seatwork.length;
                    total_cs_cols = total_cs_cols + num_items_obj.midterm.exercise.length + num_items_obj.midterm.recitation.length;

                    for (var i = 0; i < num_items_obj.midterm.assignment.length; i++) {
                        checkIfValid(target.records.midterm.assignment[i], mother, target, "midterm assignment", num_items_obj.midterm.assignment[i]);
                        mid_standing_total = mid_standing_total + (target.records.midterm.assignment[i]/num_items_obj.midterm.assignment[i]);
                    }

                    for (var i = 0; i < num_items_obj.midterm.seatwork.length; i++) {
                        checkIfValid(target.records.midterm.seatwork[i], mother, target, "midterm seatwork", num_items_obj.midterm.seatwork[i]);
                        mid_standing_total = mid_standing_total + (target.records.midterm.seatwork[i]/num_items_obj.midterm.seatwork[i]);
                    }

                    for (var i = 0; i < num_items_obj.midterm.exercise.length; i++) {
                        checkIfValid(target.records.midterm.exercise[i], mother, target, "midterm exercise", num_items_obj.midterm.exercise[i]);
                        mid_standing_total = mid_standing_total + (target.records.midterm.exercise[i]/num_items_obj.midterm.exercise[i]);
                    }

                    for (var i = 0; i < num_items_obj.midterm.recitation.length; i++) {
                        checkIfValid(target.records.midterm.recitation[i], mother, target, "midterm recitation", num_items_obj.midterm.recitation[i]);
                        mid_standing_total = mid_standing_total + (target.records.midterm.recitation[i]/num_items_obj.midterm.recitation[i]);
                    }

                    mid_standing_total = (mid_standing_total/total_cs_cols) * 100;
                    target.records.midterm.standing = mid_standing_total;
                    $(this).append("<td></td>").text(mid_standing_total);
                    
                }

                else if ($(this).hasClass('table-items-standing-percent-mid') && !$(mother).hasClass('num-items')) {
                    var cs_mid_percent = target.records.midterm.standing * 0.2;
                    target.records.midterm.cs_percent = cs_mid_percent;
                    $(this).append("<td></td>").text(cs_mid_percent + "%");
                }

                else if ($(this).hasClass('table-items-quiz-mid')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "midterm quiz", 0);
                    target.records.midterm.quiz.push(value);
                }
                else if ($(this).hasClass('table-items-longExam-mid')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "midterm LE", 0);
                    target.records.midterm.long_exam.push(value);
                }

                else if ($(this).hasClass('table-items-quiz-longExam-total-mid') && !$(mother).hasClass('num-items')) {
                    var mid_qzle_total = 0;
                    var total_qzle_cols = num_items_obj.midterm.quiz.length + num_items_obj.midterm.long_exam.length;

                    for (var i = 0; i < num_items_obj.midterm.quiz.length; i++) {
                        checkIfValid(target.records.midterm.quiz[i], mother, target, "midterm quiz", num_items_obj.midterm.quiz[i]);
                        mid_qzle_total = mid_qzle_total + (target.records.midterm.quiz[i] / num_items_obj.midterm.quiz[i]);
                    }

                    for (var i = 0; i < num_items_obj.midterm.long_exam.length; i++) {
                        checkIfValid(target.records.midterm.long_exam[i], mother, target, "midterm LE", num_items_obj.midterm.long_exam[i]);
                        mid_qzle_total = mid_qzle_total + (target.records.midterm.long_exam[i] / num_items_obj.midterm.long_exam[i]);
                    }

                    mid_qzle_total = (mid_qzle_total/total_qzle_cols) * 100;
                    target.records.midterm.qzle_total = mid_qzle_total;
                    $(this).append("<td></td>").text(mid_qzle_total);
                }

                else if ($(this).hasClass('table-items-quiz-longExam-percent-mid') && !$(mother).hasClass('num-items')) {
                    var qzle_mid_percent = target.records.midterm.qzle_total * 0.3;
                    target.records.midterm.qzle_percent = qzle_mid_percent;
                    $(this).append("<td></td>").text(qzle_mid_percent + "%");
                }

                else if ($(this).hasClass('table-items-midterm-score')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "midterm exam", 0);
                    target.records.midterm.term_exam = value;
                    num_items_obj.midterm.term_exam = value;
                }

                else if ($(this).hasClass('table-items-midterm-percent') && !$(mother).hasClass('num-items')) {
                    checkIfValid(target.records.midterm.term_exam, mother, target, "midterm exam", num_items_obj.midterm.term_exam);
                    var exam_percent = (target.records.midterm.term_exam / num_items_obj.midterm.term_exam) * 40;
                    target.records.midterm.exam_percent = exam_percent;
                    $(this).append("<td></td>").text(exam_percent + "%");
                }

                else if ($(this).hasClass('table-items-midterm-grade') && !$(mother).hasClass('num-items')) {
                    var midterm_grade = target.records.midterm.exam_percent + target.records.midterm.qzle_percent + target.records.midterm.cs_percent + target.records.midterm.att_percent;
                    target.records.midterm.grade = midterm_grade;
                    $(this).append("<td></td>").text(midterm_grade + "%");
                }

                else if ($(this).hasClass('table-items-midterm-rating') && !$(mother).hasClass('num-items')) {
                    var rating = 0;
                    if (97 <= target.records.midterm.grade && target.records.midterm.grade <= 100) {
                        rating = 1;
                    }	else if (94 <= target.records.midterm.grade && target.records.midterm.grade <= 96) {
                        rating = 1.25;
                    } else if (91 <= target.records.midterm.grade && target.records.midterm.grade <= 93) {
                        rating = 1.5;
                    } else if (88 <= target.records.midterm.grade && target.records.midterm.grade <= 90) {
                        rating = 1.75;
                    } else if (85 <= target.records.midterm.grade && target.records.midterm.grade <= 87) {
                        rating = 2.0;
                    } else if (82 <= target.records.midterm.grade && target.records.midterm.grade <= 84) {
                        rating = 2.25;
                    } else if (79 <= target.records.midterm.grade && target.records.midterm.grade <= 81) {
                        rating = 2.5;
                    } else if (76 <= target.records.midterm.grade && target.records.midterm.grade <= 78) {
                        rating = 2.75;
                    } else if (target.records.midterm.grade == 75) {
                        rating = 3.0;
                    } else if (target.records.midterm.grade <= 74) {
                        rating = 5.0;
                    }
                    target.records.midterm.rating = rating;
                    $(this).append("<td></td>").text(rating);
                }

                else if ($(this).hasClass('table-items-assign-finals')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "final quiz", 0);
                    target.records.finals.assignment.push(value);
                }
                else if ($(this).hasClass('table-items-seatwork-finals')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "final seatwork", 0);
                    target.records.finals.seatwork.push(value);
                }
                else if ($(this).hasClass('table-items-exercise-finals')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "final exercise", 0);
                    target.records.finals.exercise.push(value);
                }
                else if ($(this).hasClass('table-items-recitation-finals')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "final recitation", 0);
                    target.records.finals.recitation.push();
                }

                else if ($(this).hasClass('table-items-standing-total-finals') && !$(mother).hasClass('num-items')) {
                    var fin_standing_total = 0;
                    var total_cs_cols = num_items_obj.finals.assignment.length + num_items_obj.finals.seatwork.length;
                    total_cs_cols = total_cs_cols + num_items_obj.finals.exercise.length + num_items_obj.finals.recitation.length;

                    for (var i = 0; i < num_items_obj.finals.assignment.length; i++) {
                        checkIfValid(target.records.finals.assignment[i], mother, target, "final assignment", num_items_obj.finals.assignment[i]);
                        fin_standing_total = fin_standing_total + (target.records.finals.assignment[i]/num_items_obj.finals.assignment[i]);
                    }

                    for (var i = 0; i < num_items_obj.finals.seatwork.length; i++) {
                        checkIfValid(target.records.finals.seatwork[i], mother, target, "final seatwork", num_items_obj.finals.seatwork[i]);
                        fin_standing_total = fin_standing_total + (target.records.finals.seatwork[i]/num_items_obj.finals.seatwork[i]);
                    }

                    for (var i = 0; i < num_items_obj.finals.exercise.length; i++) {
                        checkIfValid(target.records.finals.exercise[i], mother, target, "final exercise", num_items_obj.finals.exercise[i]);
                        fin_standing_total = fin_standing_total + (target.records.finals.exercise[i]/num_items_obj.finals.exercise[i]);
                    }

                    for (var i = 0; i < num_items_obj.finals.recitation.length; i++) {
                        checkIfValid(target.records.finals.recitation[i], mother, target, "final recitation", num_items_obj.finals.recitation[i]);
                        fin_standing_total = fin_standing_total + (target.records.finals.recitation[i]/num_items_obj.finals.recitation[i]);
                    }

                    fin_standing_total = (fin_standing_total/total_cs_cols) * 100;
                    target.records.finals.standing = fin_standing_total;
                    $(this).append("<td></td>").text(fin_standing_total);
                }

                else if ($(this).hasClass('table-items-standing-percent-finals') && !$(mother).hasClass('num-items')) {
                    var cs_fin_percent = target.records.finals.standing * 0.2;
                    target.records.finals.cs_percent = cs_fin_percent;
                    $(this).append("<td></td>").text(cs_fin_percent + "%");
                }

                else if ($(this).hasClass('table-items-quiz-finals')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "final quiz", 0);
                    target.records.finals.quiz.push(value);
                }
                else if ($(this).hasClass('table-items-longExam-finals')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "final LE", 0);
                    target.records.finals.long_exam.push(value);
                }

                else if ($(this).hasClass('table-items-quiz-longExam-total-finals') && !$(mother).hasClass('num-items')) {
                    var fin_qzle_total = 0;
                    var total_qzle_cols = num_items_obj.finals.quiz.length + num_items_obj.finals.long_exam.length;

                    for (var i = 0; i < num_items_obj.finals.quiz.length; i++) {
                        checkIfValid(target.records.finals.quiz[i], mother, target, "final quiz", num_items_obj.finals.quiz[i]);
                        fin_qzle_total = fin_qzle_total + (target.records.finals.quiz[i] / num_items_obj.finals.quiz[i]);
                    }

                    for (var i = 0; i < num_items_obj.finals.long_exam.length; i++) {
                        checkIfValid(target.records.finals.long_exam[i], mother, target, "final LE", num_items_obj.finals.long_exam[i]);
                        fin_qzle_total = fin_qzle_total + (target.records.finals.long_exam[i] / num_items_obj.finals.long_exam[i]);
                    }

                    fin_qzle_total = (fin_qzle_total/total_qzle_cols) * 100;
                    target.records.finals.qzle_total = fin_qzle_total;
                    $(this).append("<td></td>").text(fin_qzle_total);
                }

                else if ($(this).hasClass('table-items-quiz-longExam-percent-finals') && !$(mother).hasClass('num-items')) {
                    var qzle_fin_percent = target.records.finals.qzle_total * 0.3;
                    target.records.finals.qzle_percent = qzle_fin_percent;
                    $(this).append("<td></td>").text(qzle_fin_percent + "%");
                }

                else if ($(this).hasClass('table-items-finals-score')) {
                    value = $(this).html().replace('<br>', '');
                    checkIfValid(value, mother, target, "final exam", 0);
                    target.records.finals.term_exam = value;
                }

                else if ($(this).hasClass('table-items-finals-percent') && !$(mother).hasClass('num-items')) {
                    checkIfValid(target.records.finals.term_exam, mother, target, "final exam", num_items_obj.finals.term_exam);
                    var exam_percent = (target.records.finals.term_exam/num_items_obj.finals.term_exam) * 40;
                    target.records.finals.exam_percent = exam_percent;
                    $(this).append("<td></td>").text(exam_percent + "%");
                }

                else if ($(this).hasClass('table-items-finals-grade') && !$(mother).hasClass('num-items')) {
                    var finals_grade = target.records.finals.exam_percent + target.records.finals.qzle_percent + target.records.finals.cs_percent + target.records.finals.att_percent;
                    target.records.finals.grade = finals_grade;
                    $(this).append("<td></td>").text(finals_grade + "%");
                }

                else if ($(this).hasClass('table-items-finals-rating') && !$(mother).hasClass('num-items')) {
                    var rating = 0;
                    if (97 <= target.records.finals.grade && target.records.finals.grade <= 100) {
                        rating = 1.0;
                    }	else if (94 <= target.records.finals.grade && target.records.finals.grade <= 96) {
                        rating = 1.25;
                    } else if (91 <= target.records.finals.grade && target.records.finals.grade <= 93) {
                        rating = 1.5;
                    } else if (88 <= target.records.finals.grade && target.records.finals.grade <= 90) {
                        rating = 1.75;
                    } else if (85 <= target.records.finals.grade && target.records.finals.grade <= 87) {
                        rating = 2.0;
                    } else if (82 <= target.records.finals.grade && target.records.finals.grade <= 84) {
                        rating = 2.25;
                    } else if (79 <= target.records.finals.grade && target.records.finals.grade <= 81) {
                        rating = 2.5;
                    } else if (76 <= target.records.finals.grade && target.records.finals.grade <= 78) {
                        rating = 2.75;
                    } else if (target.records.finals.grade == 75) {
                        rating = 3.0;
                    } else if (target.records.finals.grade <= 74) {
                        rating = 5.0;
                    }

                    target.records.finals.rating = rating;
                    $(this).append("<td></td>").text(rating);
                }

		    });
    };
    /*** END LECTURE INITIALIZE ***/
    

	/************************************************************
	 ** Laboratory - object prototype for laboratory raw score **
	 ************************************************************

	 * Properties:
		- midterm, final: two objects representing midterm and final grading
						raw scores with properties:

			- lab: 			array holding laboratory scores
			- practical: 	"" practical scores
			- project: 		"" project scores
	*/
	function Laboratory()
	{
		this.midterm = {
				lab: [],
				lab_total: 0,
				lab_percent: 0,
				practical: [],
				practical_total: 0,
				practical_percent:0,
				project: [],
				project_total: 0,
				project_percent: 0,
				grade: 0 ,
				rating: 0
		};
		this.finals = {
			lab: [],
			lab_total: 0,
			lab_percent: 0,
			practical: [],
			practical_total: 0,
			practical_percent:0,
			project: [],
			project_total: 0,
			project_percent: 0,
			grade: 0,
			rating: 0
		};
	}

	Laboratory.prototype.initialize = function (mother, child, target) {
        
        var value = '';
        
		$(mother).find(child).each(function() {
            
			if ($(this).hasClass('table-items-lab-mid')) {
                value = $(this).html().replace('<br>', '');
                checkIfValid(value, mother, target, "midterm laboratory", 0);
				target.records.midterm.lab.push(value);
			} 
            
            else if ($(this).hasClass('table-items-lab-total-mid') && !$(mother).hasClass('num-items')) {
				var lab_total = 0;
                
				for (var i = 0; i < target.records.midterm.lab.length; i++) {
                    checkIfValid(target.records.midterm.lab[i], mother, target, "midterm laboratory", num_items_obj.midterm.lab[i]);
					lab_total = lab_total + (target.records.midterm.lab[i] / num_items_obj.midterm.lab[i]);
				}
                
				lab_total = (lab_total / target.records.midterm.lab.length)  * 100; 
                
				target.records.midterm.lab_total = lab_total;
				$(this).append("<td></td>").text(lab_total);
			} 
            
            else if ($(this).hasClass('table-items-lab-percent-mid') && !$(mother).hasClass('num-items')) {
				var lab_percent = 0;
				lab_percent = target.records.midterm.lab_total * 0.45;
				target.records.midterm.lab_percent = lab_percent;
				$(this).append("<td></td>").text(lab_percent + "%");
			} 
            
            else if ($(this).hasClass('table-items-prac-mid')) {
                value = $(this).html().replace('<br>', '');
                checkIfValid(value, mother, target, "midterm practical", 0);
				target.records.midterm.practical.push(($(this).html()).replace('<br>', ''));
			} 
            
            else if ($(this).hasClass('table-items-prac-total-mid') && !$(mother).hasClass('num-items')) {
				var prac_total = 0;
				for (var i = 0; i < target.records.midterm.practical.length; i++) {
                    checkIfValid(target.records.midterm.practical[i], mother, target, "midterm practical", num_items_obj.midterm.practical[i]);
					prac_total = prac_total + (target.records.midterm.practical[i] / num_items_obj.midterm.practical[i]);
				}
                
				prac_total = (prac_total / target.records.midterm.practical.length) * 100;
                
				target.records.midterm.practical_total = prac_total;
				$(this).append("<td></td>").text(prac_total);
			} 
            
            else if ($(this).hasClass('table-items-prac-percent-mid') && !$(mother).hasClass('num-items')) {
				var prac_percent = target.records.midterm.practical_total * 0.25;
				target.records.midterm.practical_percent = prac_percent;
				$(this).append("<td></td>").text(prac_percent + "%");
			} 
            
            else if ($(this).hasClass('table-items-proj-mid')) {
                value = $(this).html().replace('<br>', '');
                checkIfValid(value, mother, target, "midterm project", 0);
				target.records.midterm.project.push(($(this).html()).replace('<br>', ''));
			} 
            
            else if ($(this).hasClass('table-items-proj-total-mid') && !$(mother).hasClass('num-items')) {
				var proj_total = 0;
				for (var i = 0; i < target.records.midterm.project.length; i++) {
                    checkIfValid(target.records.midterm.project[i], mother, target, "midterm project", num_items_obj.midterm.project[i]);
					proj_total = proj_total + (target.records.midterm.project[i] / num_items_obj.midterm.project[i]);
				}
                
				proj_total = (proj_total / target.records.midterm.project.length) * 100;
				target.records.midterm.project_total = proj_total;
				$(this).append("<td></td>").text(proj_total);
			} 
            
            else if ($(this).hasClass('table-items-proj-percent-mid') && !$(mother).hasClass('num-items')) {
				var proj_percent  = target.records.midterm.project_total * 0.3;
				target.records.midterm.project_percent = proj_percent;
				$(this).append("<td></td>").text(proj_percent + "%");
			} 
            
            else if ($(this).hasClass('table-items-midterm-grade') && !$(mother).hasClass('num-items')) {
				var grade = target.records.midterm.project_percent + target.records.midterm.practical_percent + target.records.midterm.lab_percent;
				target.records.midterm.grade = grade;
				$(this).append("<td></td>").text(grade + "%");
			} 
            
            else if ($(this).hasClass('table-items-midterm-rating') && !$(mother).hasClass('num-items')) {
				var rating = 0;
				if (97 <= target.records.midterm.grade && target.records.midterm.grade <= 100) {
					rating = 1;
				}	else if (94 <= target.records.midterm.grade && target.records.midterm.grade <= 96) {
					rating = 1.25;
				} else if (91 <= target.records.midterm.grade && target.records.midterm.grade <= 93) {
					rating = 1.5;
				} else if (88 <= target.records.midterm.grade && target.records.midterm.grade <= 90) {
					rating = 1.75;
				} else if (85 <= target.records.midterm.grade && target.records.midterm.grade <= 87) {
					rating = 2.0;
				} else if (82 <= target.records.midterm.grade && target.records.midterm.grade <= 84) {
					rating = 2.25;
				} else if (79 <= target.records.midterm.grade && target.records.midterm.grade <= 81) {
					rating = 2.5;
				} else if (76 <= target.records.midterm.grade && target.records.midterm.grade <= 78) {
					rating = 2.75;
				} else if (target.records.midterm.grade == 75) {
					rating = 3.0;
				} else if (target.records.midterm.grade <= 74) {
					rating = 5.0;
				}
				target.records.midterm.rating = rating;
				$(this).append("<td></td>").text(rating);
			}

			else if ($(this).hasClass('table-items-lab-finals')) {
                value = $(this).html().replace('<br>', '');
                checkIfValid(value, mother, target, "final laboratory", 0);
				target.records.finals.lab.push(value);
			} 
            
            else if ($(this).hasClass('table-items-lab-total-finals') && !$(mother).hasClass('num-items')) {
				var lab_total = 0;
				for (var i = 0; i < target.records.finals.lab.length; i++) {
                    checkIfValid(target.records.finals.lab[i], mother, target, "final laboratory", num_items_obj.finals.lab[i]);
					lab_total = lab_total + (target.records.finals.lab[i] / target.records.finals.lab[i]);
				}
				lab_total = (lab_total / target.records.finals.lab.length) * 100;
				target.records.finals.lab_total = lab_total;
				$(this).append("<td></td>").text(lab_total);
			} 
            
            else if ($(this).hasClass('table-items-lab-percent-finals') && !$(mother).hasClass('num-items')) {
				var lab_percent = 0;
				lab_percent = target.records.finals.lab_total * .45;
				target.records.finals.lab_percent = lab_percent;
				$(this).append("<td></td>").text(lab_percent + "%");
			} 
            
            else if ($(this).hasClass('table-items-prac-finals')) {
                value = $(this).html().replace('<br>', '');
                checkIfValid(value, mother, target, "final practical", 0);
				target.records.finals.practical.push(value);
			} 
            
            else if ($(this).hasClass('table-items-prac-total-finals') && !$(mother).hasClass('num-items')) {
				var prac_total = 0;
				for (var i = 0; i < target.records.finals.practical.length; i++) {
                    checkIfValid(target.records.finals.practical[i], mother, target, "final practical", num_items_obj.finals.practical[i]);
					prac_total = prac_total + (target.records.finals.practical[i] / target.records.finals.practical[i]);
				}
				prac_total = (prac_total / target.records.finals.practical.length) * 100;
				target.records.finals.practical_total = prac_total;
				$(this).append("<td></td>").text(prac_total);
			} 
            
            else if ($(this).hasClass('table-items-prac-percent-finals') && !$(mother).hasClass('num-items')) {
				var prac_percent = target.records.finals.practical_total * 0.25;
				target.records.finals.practical_percent = prac_percent;
				$(this).append("<td></td>").text(prac_percent + "%");
			} 
            
            else if ($(this).hasClass('table-items-proj-finals')) {
                value = $(this).html().replace('<br>', '');
                checkIfValid(value, mother, target, "final project", 0);
				target.records.finals.project.push(value);
			} 
            
            else if ($(this).hasClass('table-items-proj-total-finals') && !$(mother).hasClass('num-items')) {
				var proj_total = 0;
				for (var i = 0; i < target.records.finals.project.length; i++) {
                    checkIfValid(target.records.finals.project[i], mother, target, "final project", num_items_obj.finals.project[i]);
					proj_total = proj_total + (target.records.finals.project[i] / target.records.finals.project[i]);
				}
				proj_total = (proj_total/target.records.finals.project.length) * 100;
				target.records.finals.project_total = proj_total;
				$(this).append("<td></td>").text(proj_total);
			} 
            
            else if ($(this).hasClass('table-items-proj-percent-finals') && !$(mother).hasClass('num-items')) {
				var proj_percent  = target.records.finals.project_total * .3;
				target.records.finals.project_percent = proj_percent;
				$(this).append("<td></td>").text(proj_percent + "%");
			} 
            
            else if ($(this).hasClass('table-items-finals-grade') && !$(mother).hasClass('num-items')) {
				var grade = target.records.finals.project_percent + target.records.finals.practical_percent + target.records.finals.lab_percent;
				target.records.finals.grade = grade;
				$(this).append("<td></td>").text(grade + "%");
			} 
            
            else if ($(this).hasClass('table-items-finals-rating') && !$(mother).hasClass('num-items')) {
				var rating = 0;
				if (97 <= target.records.finals.grade && target.records.finals.grade <= 100) {
					rating = 1.0;
				}	else if (94 <= target.records.finals.grade && target.records.finals.grade <= 96) {
					rating = 1.25;
				} else if (91 <= target.records.finals.grade && target.records.finals.grade <= 93) {
					rating = 1.5;
				} else if (88 <= target.records.finals.grade && target.records.finals.grade <= 90) {
					rating = 1.75;
				} else if (85 <= target.records.finals.grade && target.records.finals.grade <= 87) {
					rating = 2.0;
				} else if (82 <= target.records.finals.grade && target.records.finals.grade <= 84) {
					rating = 2.25;
				} else if (79 <= target.records.finals.grade && target.records.finals.grade <= 81) {
					rating = 2.5;
				} else if (76 <= target.records.finals.grade && target.records.finals.grade <= 78) {
					rating = 2.75;
				} else if (target.records.finals.grade == 75) {
					rating = 3.0;
				} else if (target.records.finals.grade <= 74) {
					rating = 5.0;
				}

				target.records.finals.rating = rating;
				$(this).append("<td></td>").text(rating);
			}
		});
	};
    
    /********************************************************
	 ** Attendance - object prototype for attendance sheet **
	 ********************************************************
	 
	 *Properties:
	 
		- midterm, final: two objects representing midterm and final attandence
						with properties:
			- stat:			Present/Late/Absent
			- total:		total attendance grade depending on formula
	*/
   
	function Attendance()
	{	
		this.midterm = {
			stat: [],
			total: 0
		};
		
		this.finals = {
			stat: [],
			total: 0 
		};
	}
     
    Attendance.prototype.initialize = function (mother, child, target) {
		// process 'child' element on 'mother'
		$(mother).find(child).each(function() {

			// if current mother has a .stud-att-score-midterm child
			if ($(this).hasClass('stud-att-date-midterm')) {
				// push cell value to 'assignment' array of 'items' object
				target.records.midterm.stat.push($(this).html().replace('<br>', '').toUpperCase());
			}
			
			else if ($(this).hasClass('stud-att-date-finals')) {
				target.records.finals.stat.push($(this).html().replace('<br>', '').toUpperCase());
			}
			
			else if ($(this).hasClass('stud-att-total-midterm')) {
				for (var n = 0; n < target.records.midterm.stat.length; n++) {
					if (target.records.midterm.stat[n] == "P") {
						target.records.midterm.total += 1.0;
					}
					if (target.records.midterm.stat[n] == "L") {
						target.records.midterm.total += 0.667;
					}
					if (target.records.midterm.stat[n] == "A") {
						target.records.midterm.total += 0.0;
					}		
				}
				$(this).append("<td></td>").text(target.records.midterm.total);
			}
			
			else if ($(this).hasClass('stud-att-total-finals')) {
				
				for (var n = 0; n < target.records.finals.stat.length; n++) {
					
					if (target.records.finals.stat[n] == "P") {
							target.records.finals.total += 1.0;
						}
						if (target.records.finals.stat[n] == "L") {
							target.records.finals.total += 0.667;
						}
						if (target.records.finals.stat[n] == "A") {
							target.records.finals.total += 0.0;
						}		
					}
					
				$(this).append("<td></td>").text(target.records.finals.total);
			}
			
			else if ($(this).hasClass('stud-att-10p-midterm')) {
				var ten_p = (target.records.midterm.total / target.records.midterm.stat.length) * 10.0;
				$(this).append("<td></td>").text(ten_p);
			}
			
			else if ($(this).hasClass('stud-att-10p-finals')) {
				var ten_p = (target.records.finals.total / target.records.finals.stat.length) * 10.0;
				$(this).append("<td></td>").text(ten_p);
			}
			
		});
	};
    
	/********************************************************
	 ** Student - object prototype for student information **
	 ********************************************************

	 *Properties:
		- name: student name
		- number: student number
		- record: instance of Record object (raw score)
		- grade: final grade

	 *Methods:
		- initialize()
	*/
	function Student()
	{
		this.name = '';
		this.number = '';
		this.records = {};
		this.grade = 0;
	}


	var subject = new Subject();
	// alert("Global");
	//
	//  alert(subject.students[0].name);
	//  alert(subject.students[0].code);
	return return_object;
    
    
}

// error checking
function checkIfValid(value, mother, target, field, check)
{
    if (isNaN(value) || (value === ''))
    {
        if (mother === 'table .num-items')
        {
            throw "Invalid value on the number-of-items of a " + field + ".";                         
        }
                        
        else
        {
            throw "Invalid value on a " + field + " score of student " + target.name + ".";
        }                                          
     }
     
     else if ((check < value) && (check !== 0))
     {
         throw "The " + field + " of student " + target.name + " is much larger than its number-of-items.";
     }
}

function saveComputedData(id) {
	var computedData = getAllData();
	if (computedData.status == "OK") {
		alert(id);
	}
	console.log(computedData);
}