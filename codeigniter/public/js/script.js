// TRANSITION
function updateDiv(a)
{
    var $div = $('#group').children();
    var $current = $div.filter('.current');
    var index = $current.index();
    var newIndex = index+a;
    // Range check the new index
    newIndex = (newIndex < 0) ? 0 : ((newIndex > $div.length) ? $div.length : newIndex); 
    if (newIndex != index){
        $current.removeClass('current');
        $current = $div.eq(newIndex).addClass('current');
        // Hide/show the next/prev
        $("#form-prev-btn").toggle(!$current.is($div.first()));    
        $("#form-next-btn").toggle(!$current.is($div.last())); 
    }
}

function updateRange(b)
{
    $('#sliderVal').attr("value",b);
    var interval = ((100-b)/17).toFixed(2);
    var val = 100 - interval;
    $('#gradeInterval').attr("value", interval)

    $('input.gradeBoxMin').each(function() {
        $(this).attr("value",val);
        val = val - interval;
    });
    var counter = 0;
    val = 100;
    $('input.gradeBoxMax').each(function() {
        $(this).attr("value",val);
        counter++;
        if (counter == 1)
        {
            val = val - interval - 1
        }
        else 
        {
            val = val - interval;
        }
    });
}

var gotModule = false;
function getModulePerSubj()
{
  if (gotModule == false)
  {
    $("ul#textBox").find('select').each(function(){
      if($(this).val() != "")
      {
        var id = getNewId($(this).val())
        $("ul#module_container").append("<div id='"+id+"_module_collection' class='module_collection'>\
          <label id = 'module-title'>"+$(this).val()+"</label><br>\
          <div type = 'button' class = 'btn btn-danger' id = 'module-button'>Reset <label id='"+id+"_hundred' class='hundred badge'>100</label></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Attendance</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Long Exam</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Quizzes</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Assignment</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Seatwork</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Recitation</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Lab Activity</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Exercises</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Midterm Exam</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          <div class = 'form-inline' id = 'module-form-input'><label class='module_label'>Final Exam</label><input type='number' class='module_perc form-control' min='0' max='100' value='0' name='"+id+"_module[]'></div>\
          </div>");
      }
    });
    gotModule = true;
  }
}

var gotClass = false;
function getClassPerSubj()
{   
    if (gotClass == false)
    {
        $("ul#textBox").find('select').each(function(){
          if($(this).val() != "")
          {
            var id = getNewId($(this).val())
            $("ul#subjGroup").append("<div class='blocksPerSub'>\
                <label>"+$(this).val()+"</label><br>\
                <select name='"+id+"_class[]' multiple='multiple' class='subj'>\
                    <optgroup label='1st Yr'>\
                        <option value='1-1'>BS CpE 1 - 1</option>\
                        <option value='1-2'>BS CpE 1 - 2</option>\
                        <option value='1-3'>BS CpE 1 - 3</option>\
                        <option value='1-4'>BS CpE 1 - 4</option>\
                        <option value='1-5'>BS CpE 1 - 5</option>\
                    </optgroup>\
                    <optgroup label='2nd Yr'>\
                        <option value='2-1'>BS CpE 2 - 1</option>\
                        <option value='2-2'>BS CpE 2 - 2</option>\
                        <option value='2-3'>BS CpE 2 - 3</option>\
                        <option value='2-4'>BS CpE 2 - 4</option>\
                        <option value='2-5'>BS CpE 2 - 5</option>\
                    </optgroup>\
                    <optgroup label='3rd Yr'>\
                        <option value='3-1'>BS CpE 3 - 1</option>\
                        <option value='3-2'>BS CpE 3 - 2</option>\
                        <option value='3-3'>BS CpE 3 - 3</option>\
                        <option value='3-4'>BS CpE 3 - 4</option>\
                        <option value='3-5'>BS CpE 3 - 5</option>\
                    </optgroup>\
                    <optgroup label='4th Yr'>\
                        <option value='4-1'>BS CpE 4 - 1</option>\
                        <option value='4-2'>BS CpE 4 - 2</option>\
                        <option value='4-3'>BS CpE 4 - 3</option>\
                        <option value='4-4'>BS CpE 4 - 4</option>\
                        <option value='4-5'>BS CpE 4 - 5</option>\
                    </optgroup>\
                    <optgroup label='5th Yr'>\
                        <option value='5-1'>BS CpE 5 - 1</option>\
                        <option value='5-2'>BS CpE 5 - 2</option>\
                        <option value='5-3'>BS CpE 5 - 3</option>\
                        <option value='5-4'>BS CpE 5 - 4</option>\
                        <option value='5-5'>BS CpE 5 - 5</option>\
                    </optgroup>\
                </select>\
            </div>");
          }
        });
        gotClass = true;
    }
}

// function isCheckedBox () 
// {
//   $('div#module_collection').find('input[type=checkbox]').click(function(){
//     if($(this).is(':checked') == true) 
//     {
//       $(this).next().next().css('background','#fff');
//       $(this).next().next().attr('readonly',false)

//     }
//     else
//     {
//       $(this).next().next().css('background','#EEE9E9');
//       $(this).next().next().attr('readonly',true)
//       $(this).next().next().val('0');
//     }
//   })
// }
function calculateTotal(c,d,e)
{
  console.log("---calculateTotal----");
  var total = 0;
  var pressedKey = d-48;
  var hundred = 100;
  // console.log("c: "+c+"  press: " + pressedKey);
  var subtractor = c+pressedKey;
  if (c == "")
  {
    subtractor = parseInt(subtractor) + calculatePointsPerSubj(e)
  }
  else
  {
    subtractor = parseInt(subtractor) + calculatePointsPerSubj(e) - parseInt(c);
  }

  if (d == 8)
  {
    if (c.substr(0,c.length-1) == "")
    {
      // console.log("-1-");
      subtractor = 0 + calculatePointsPerSubj(e) - parseInt(c);
    }
    else
    {
      // console.log("-2-");
      // console.log("error: "+c.substr(0,c.length-1));
      subtractor = parseInt(c.substr(0,c.length-1)) + calculatePointsPerSubj(e) - parseInt(c);
    }
  }
  console.log("subtractor: "+subtractor);
  total = (hundred-subtractor);
  console.log(total);
  if (total < 0)
  {
    console.log("no points left.");
    return false;
  }
  else
  {
    $('label#'+e+'_hundred').html(total);
  }
}

function calculatePointsPerSubj(f)
{
  var total = 0;
  $('div#'+f+'_module_collection').find('input[type=number]').each(function(){
    if ($(this).val() != "") total += parseInt($(this).val());
  })
  console.log("total: "+total);
  return total;
}

function isModuleNull()
{
  $('div#module_collection').find('input[type=number]').change(function(){
    if($(this).val() == "") 
    {
      $(this).val('0');
    }
  })
}

function getNewId(g)
{
    var $slug = '';
    var trimmed = $.trim(g);
    $slug = trimmed.replace(/[^a-z0-9-]/gi, '-').
    replace(/-+/g, '-').
    replace(/^-|-$/g, '');
    return $slug.toLowerCase();
}

function resetModule(h)
{
  var id = h;
  $('div#'+id+'_module_collection').find('input[type=number]').each(function(){
    $(this).val(0);
  })
  $('label#'+id+'_hundred').html("100");
}

$(document).ready(function(){
//SUBJECTS
    $("select#numSub").change(function() {
        var selVal = $(this).val();
        $("ul#textBox").html('');
        if(selVal > 0) {
            for(var i = 1; i<= selVal; i++) {
                $("ul#textBox").append("<select data-placeholder='Enter the subject name' name='subject_title[]' class='chosen-select ' tabindex='5'>\
            <option value=></option>\
            <optgroup label=' '>\
            </optgroup>\
            <optgroup label='Computer Engineering'>\
              <option>COEN 3322 Computer Fundamentals and Programming</option>\
              <option>COEN 3313 Discrete Mathematics</option>\
              <option>COEN 3332 Computer Hardware and Fundamentals</option>\
              <option>COEN 3054 Data Structures and Algorithm Analysis</option>\
              <option>COEN 3064 Circuits 1</option>\
              <option>COEN 3351 Computer Engineering Drafting and Design</option>\
              <option>COEN 3114 Computer System Organization with Assembly Language</option>\
              <option>COEN 3344 Electronics Devices and Circuits</option>\
              <option>COEN 3363 Advanced Engineering Mathematics for Computer Engineering</option>\
              <option>COEN 3094 Circuits 2</option>\
              <option>COEN 3374 Electronics Circuits Analysis and Design</option>\
              <option>COEN 3134 Logic Circuits and Switching Theory</option>\
              <option>COEN 3493 Numerical Methods for Engineering with Programming Applications</option>\
              <option>COEN 4012 Practicum 1</option>\
              <option>COEN 3174 Advanced Logic Circuits Design</option>\
              <option>COEN 3382 Computer Engineering Safety Management</option>\
              <option>COEN 3164 Control System</option>\
              <option>COEN 3204 Digital Signal Processing</option>\
              <option>COEN 4153 Methods of Engineering Research</option>\
              <option>COEN 3394 Microprocessor Systems</option>\
              <option>COEN 3153 Principle of Communication</option>\
              <option>BSCOE-ELEC1 BSCOE ELECTIVE 1</option>\
              <option>COEN 3404 Computer Systems Architecture</option>\
              <option>COEN 3193 Data Communications</option>\
              <option>COEN 3253 Design Project 1</option>\
              <option>COEN 3414 Operating Systems</option>\
              <option>COEN 4022 Practicum 2</option>\
              <option>BSCOE-ELEC2 BSCOE ELECTIVE 2</option>\
              <option>COEN 3453 Computer Project Management</option>\
              <option>COEN 3423 Computer Systems Administration</option>\
              <option>COEN 3273 Design Project 2</option>\
              <option>COEN 3444 Object Oriented Programming</option>\
              <option>COEN 3433 Systems Analysis and Design</option>\
              <option>BSCOE-ELEC3 BSCOE ELECTIVE 3</option>\
              <option>BSCOE-ELEC4 BSCOE ELECTIVE 4</option>\
              <option>COEN 3212 Computer Engineering Ethics and Computer Laws</option>\
              <option>COEN 3284 Computer Networks</option>\
              <option>COEN 3291 Computer Seminar and Field Trips</option>\
              <option>COEN 3473 Computer Technopreneurship</option>\
              <option>COEN 3463 Software Engineering</option>\
              <option>COEN 3483 Total Quality Management in Computer Engineering</option>\
              </optgroup>\
            <optgroup label='Civil Engineering'>\
              <option>CIEN 2022 Civil Engineering Fundamentals 1</option>\
              <option>CIEN 2032 Civil Engineering Fundamentals 2</option>\
              <option>CIEN 3053 Elementary Surveying</option>\
              <option>CIEN 3063 Methods of Engineering Research</option>\
              <option>CIEN 3342 Construction Estimating</option>\
              <option>CIEN 3073 Engineering Geology and Rock Mechanics</option>\
              <option>CIEN 3353 Advanced Engineering Mathematics in Civil Engineering</option>\
              <option>CIEN 3364 Higher Surveying</option>\
              <option>CIEN 3373 Safety Engineering and Management</option>\
              <option>CIEN 3093 Construction Material and Testing/option>\
              <option>CIEN 3382 Construction Methods and Equipment</option>\
              <option>CIEN 3392 Advanced CAD</option>\
              <option>CIEN 4012 Civil Engineering Practicum 1</option>\
              <option>CIEN 3123 Construction Project Management/option>\
              <option>CIEN 3134 Soil Mechanics</option>\
              <option>CIEN 3144 Structural Theory 1</option>\
              <option>CIEN 3153 Fluid Mechanics</option>\
              <option>CIEN 3164 Route Surveying and Earthworks</option>\
              <option>CIEN 3402 Building Design 1</option>\
              <option>CIEN 3173 Highway Engineering/option>\
              <option>CIEN 3183 Hydrology</option>\
              <option>CIEN 3194 Structural Theory 2</option>\
              <option>CIEN 3203 Hydraulics</option>\
              <option>CIEN 3222 Urban and Regional Transportation Planning</option>\
              <option>CIEN 3282 Civil Engineering Project 1</option>\
              <option>CIEN 3422 Structural Matrix Analysi<soption>\
              <option>CIEN 3432 Geotechnical Engineering (Introduction to Foundation Engineering)</option>\
              <option>CIEN 3442 Building Design 2</option>\
              <option>CIEN 4022 Civil Engineering Practicum 2</option>\
              <option>CIEN 3103 Computer Application in Civil Engineering</option>\
              <option>CIEN 3234 Steel Design</option>\
              <option>CIEN 3242 Timber Design</option>\
              <option>CIEN 3262 Earthquake Engineering</option>\
              <option>CIEN 3322 Civil Engineering Project 2</option>\
              <option>CIEN 3454 Principles of Concrete Design</option>\
              <option>CIEN 3463 Transportation Engineering</option>\
              <option>CIEN 4122 Traffic Engineering (ELECTIVE 3)</option>\
              <option>CIEN 3293 Reinforced Concrete Design</option>\
              <option>CIEN 3303 Foundation Engineering</option>\
              <option>CIEN 3312 Site Inspection and Seminar</option>\
              <option>CIEN 3333 Civil Engineering Law, Contracts, Specifications andProfessional Ethics</option>\
              <option>CIEN 3473 Water Resource Management</option>\
              <option>CIEN 3482 Total Quality Management in Engineering</option>\
              <option>BSCE-ELEC1 BSCE ELECTIVE 1</option>\
              <option>BSCE-ELEC2 BSCE ELECTIVE 2</option>\
              <option>BSCE-ELEC3 BSCE ELECTIVE 3</option>\
              <option>BSCE-ELEC4 BSCE ELECTIVE 4</option>\
              <option>BSCE - ELEC5 BSCE ELECTIVE 5</option>\
              <option>BSCE - ELEC6 BSCE ELECTIVE 6</option>\
            </optgroup>\
            <optgroup label='Electronics and Communication Engineering'>\
              <option>ECEN 3282 Basic Electronics 1</option>\
              <option>ECEN 3292 Basic Electronics 2</option>\
              <option>ECEN 3304 Electronics Devices and Circuits</option>\
              <option>ECEN 3054 Circuits 1</option>\
              <option>ECEN 3313 Discrete Math, Algorithms and Combinational Electronic Circuits</option>\
              <option>ECEN 3323 Methods of Engineering Research</option>\
              <option>ECEN 3073 Vector Analysis</option>\
              <option>ECEN 3334 Electronic Circuits Analysis and Design</option>\
              <option>ECEN 3104 Circuits 2</option>\
              <option>ECEN 3124 Logic Circuits and Switching Theory</option>\
              <option>ECEN 3343 Advanced Engineering Mathematics for ECE</option>\
              <option>ECEN 3093 Electromagnetics/option>\
              <option>ECEN 4072 ECE Practice in Electronics Industries</option>\
              <option>ECEN 3134 Signals, Spectra, Signal Processing</option>\
              <option>ECEN 3144 Principles of Communications</option>\
              <option>ECEN 3354 Microporcessor Systems and Controls</option>\
              <option>ECEN 3364 Industrial Electronics and PLC Applications</option>\
              <option>ECEN 3373 Fundamentals of Material Science and Engineering</option>\
              <option>ECEN 3382 Advanced CAD and Softwares for ECE</option>\
              <option>ECE Elective 1</option>\
              <option>ECEN 3394 ECE Numerical Analysis With Computer Application</option>\
              <option>ECEN 3184 Digital Communication</option>\
              <option>ECEN 3194 Feedback and Control Systems</option>\
              <option>ECEN 3204 Energy Conservation</option>\
              <option>ECEN 4012 Thesis 1</option>\
              <option>ECE Elective 2</option>\
              <option>ECE Elective 3</option>\
              <option>ECEN 4092 ECE Practice in Communications Industries</option>\
              <option>ECEN 3214 Transmission Media and Antenna Systems</option>\
              <option>ECEN 3403 MicroElectronics and Advanced Solid State Favrication, Packaging and Failure Analysis</option>\
              <option>ECEN 3224 Data Communications</option>\
              <option>ECEN 4032 Thesis 2</option>\
              <option>ECE Elective 4</option>\
              <option>ECE Elective 5</option>\
              <option>ECEN 3233 ECE Laws, Contact and Ethicsoption>\
              <option>ECEN 3422 Network Communications Engineering and Systems Applications</option>\
              <option>ECEN 3431 ECE Field Trips and Seminars</option>\
              <option>ECEN 3443 Wireless Communication Systems</option>\
              <option>ECEN 3453 Safety Engineering and Management</option>\
              <option>ECEN 3463 Total Quality Management in Electronics Engineering</option>\
              <option>ECE Elective 6</option>\
              <option>ECE Elective 7</option>\
              <option>ECEN 4103 Electro Navigational Aids and Control</option>\
              <option>ECEN 4113 Medical and Biomedical Electronics</option>\
              <option>ECEN 4123 Instrumentation and Control</option>\
              <option>ECEN 4133 Graphics Animation and Film Engineering</option>\
              <option>ECEN 4143 Emerging Electronic Systems, Design and Applications</option>\
              <option>ECEN 4153 Electroncis Quality Assurance Software and Testing Principles</option>\
              <option>ECEN 4163 Advacned Electronics in Weather, Volcanology and Seismology Applications</option>\
              <option>ECEN 4173 Programmable Logic Control , Robotics and Mechatronics Applications</option>\
              <option>ECEN 4183 Advacned Space and Deep Sea Electronics Applications</option>\
              <option>ECEN 4193 NanoTechnology</option>\
              <option>ECEN 4203 Power Electronics</option>\
              <option>ECEN 4213 Integrative Course</option>\
            </optgroup>\
            <optgroup label='Engineering Science'>\
              <option>ENSC 2012 Engineering Drawing 1</option>\
              <option>ENSC 2022 Computer Aided Drafting</option>\
              <option>ENSC 2163 Basic Mechanical Engineering</option>\
              <option>ENSC 2143 Basic Electrical Engineering</option>\
              <option>ENSC 2063 Engineering Economy</option>\
              <option>ENSC 2193 Computer Fundamentals and Programming</option>\
              <option>ENSC 2112 Environmental Engineering</option>\
              <option>ENSC 2105 Mechanics of Deformable Bodies</option>\
              <option>ENSC 2073 Engineering Management/option>\
              <option>ENSC 2113 Environmental Engineering</option>\
              <option>ENSC 2192 Computer Fundamentals and Programming</option>\
              <option>ENSC 2043 Static of Rigid Bodies</option>\
              <option>ENSC 2132 Thermodynamics</option>\
              <option>ENSC 2082 Dynamics of Rigid Bodies</option>\
              <option>ENSC 2103 Mechanics of Deformable Bodies</option>\
              <option>ENSC 2032 Engineering Drawing 2 with CAD</option>\
            </optgroup>\
          </select>");
            }
        var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
      }
        for (var selector in config) {
          $(selector).chosen(config[selector]);
        }
      }
    });

// Do you really want to submit this?
  // $('form#settings').submit(function() {
  //   console.log("submit");
  //   var c = confirm("Do you really want to save this settings?");
  //   return c;
  // });

//CLASS PER SUBJ
    $("#form-next-btn").click(function () {
        updateDiv(1);
        getClassPerSubj();
        getModulePerSubj();
        $("ul#module_container").find('input[type=number]').each(function(){
          $(this).keydown(function(){
            var id = $(this).parent().parent().attr('id');
            var subjName = id.replace("_module_collection","");
            return (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 8) && calculateTotal($(this).val(),event.keyCode,subjName)
          });
        });
        //reset btn
        $('div#module-button').click(function()
        {
          var id = $(this).parent().attr('id');
          id = id.replace("_module_collection","");
          resetModule(id);
        })

        $('select.subj').multiselect({
            maxHeight: 200,
            enableClickableOptGroups: true
        });
        return false;
    });

    $("#form-prev-btn").click(function () {
        updateDiv(-1);
        return false;
    });

//MODULE NULL CHECKER
  isModuleNull();

//INITIALIZE SLIDER
  updateRange(49);
})

