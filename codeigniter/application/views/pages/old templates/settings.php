    <div class = "row" id = "navbar-res">
                <ul class = " nav pull-left" id= "navbar-maintabs">
                    <li><a href="#"><i class = "fa fa-archive "></i></a></li>
                    <li><a href = "#"><i class = "fa fa-calendar "></i></a></li>
                    <li><a href = "#"><i class = "fa fa-wrench "></i></a></li>
                    <li><a href = "#"><i class = "fa fa-home "></i></a></li>
                </ul>
                
                <ul class = " nav pull-right" id = "navbar-subtabs">
                    <li><a href = "#"><i class="fa fa-sign-out"></i></a></li>
                </ul>
            </div>			
        </div> <!-- container -->
    </div> <!-- container-fluid -->

    <!-- SETTINGS -->
    <div class = "container" id = "settings-wrapper">
        <div class = "col-md-12" id = "settings-title">
            <span> SETTINGS </span> 
        </div>
        <div class = "row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <!-- PANEL 1 -CHANGEPWD -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <a id = "archives-panel-label" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Change Password <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="list-group" >
                                <div class="list-group-item" id ="settings-panel-details">
                                    <form class="form-inline">
                                        <div class="form-group" id = "settings-password-form">
                                            <input type="password" class="form-control" placeholder="Old Password">
                                        </div>
                                        <div class="form-group" id = "settings-password-form">
                                            <input type="password" class="form-control" id="exampleInputEmail2" placeholder="New Password">
                                        </div>
                                        <button class="btn btn-success " id = "settings-password-form-button" type="submit"><i class="fa fa-check"></i> Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- PANEL 2 -GRADE -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <a id = "archives-panel-label" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Grading System <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div class="list-group" >
                                <div class="list-group-item" id = "settings-panel-details">
                                    <div class = "row" id = "settings-grade-wrapper">
                                        <div class = "col-md-4 col-sm-4 col-xs-12">
                                            <form class="form-horizontal" id = "settings-grade-form-wrapper">
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>1.00</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>1.25</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>1.50</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                 <div class="form-inline" id = "settings-grade-form">
                                                    <label>1.75</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>2.00</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>2.25</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                            </form>
                                        </div>
                                        <div class = "col-md-4 col-sm-4 col-xs-12">
                                            <form class="form-horizontal">
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>2.50</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>2.75</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div> 
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>3.00</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>3.25</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>                                                
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>3.50</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>3.75</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>  
                                            </form>
                                        </div>
                                        <div class = "col-md-4 col-sm-4 col-xs-12">
                                            <form class="form-horizontal" >
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>4.00</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>4.25</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>                                                
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>4.50</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>4.75</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div> 
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label>5.00</label> <input type="text" class="form-control input-sm" readonly>
                                                    <em class="to">to</em> <input type="text" class="form-control input-sm" readonly>
                                                </div>
                                                <div class="form-inline" id = "settings-grade-form">
                                                    <label id =  "settings-grade-form-gradeint" >Grade Interval</label> <input type="text" class="form-control input-sm" readonly>
                                                </div>   
                                            </form>
                                        </div>
                                    </div>
                                    <div class = "row">
                                        <div class = "col-md-12 col-sm-12 col-xs-12">
                                            <input type="range" min="0" max="100" onchange="updateRange(this.value)" oninput="updateRange(this.value)" id = "settings-grade-slider">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- PANEL 3 -ADDSJT -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingThree">
                            <a id = "archives-panel-label" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Adding Subject <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                            <div class="list-group" >
                                <div class="list-group-item" id = "settings-panel-details">
                                    <span><b> Add Subjects: </b></span>
                                    <select class = "form-control" id = "settings-adding-select">
                                        <option value="1">1</option>
                                        <option selected value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <form class = "form-horizontal" id = "settings-adding-input">
                                        <input type="text" class="form-control" placeholder="Subject">
                                        <input type="text" class="form-control" placeholder="Subject">

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>     
                    <!-- PANEL 4 -UPLOADCL -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingFour">
                            <a id = "archives-panel-label" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Update Class List <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                            <div class="list-group" >
                                <div class="list-group-item" id = "settings-panel-details">
                                    <form class="form-inline" id = "settings-upload-form">
                                        <span>BSCpE 4-1</span>
                                        <button type="submit" class="btn btn-primary btn-sm" id = "settings-upload-button"><i class = "fa fa-upload"></i> Upload</button>
                                    </form> 
                                    <form class="form-inline" id = "settings-upload-form">
                                        <span>BSCpE 5-1</span>
                                        <button type="submit" class="btn btn-primary btn-sm" id = "settings-upload-button"><i class = "fa fa-upload"></i> Upload</button>
                                    </form>        
                                </div>
                            </div>
                        </div>
                    </div>
                     <!-- PANEL 5 -Class PDF -->
                    <div class="panel" id = "settings-panel">
                        <div class="panel-heading" role="tab" id="headingFive">
                            <a id = "archives-panel-label" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Class PDF<i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                            <div class="list-group" >
                                <div class="list-group-item" id = "settings-panel-details">
                                    <form class="form-inline" enctype="multipart/form-data" action="<?=site_url('user/upload_pdf')?>" method="POST">
                                        <!-- Name of input element determines name in $_FILES array -->
                                        <input name="classlist" type="file" />
                                        <input type="submit" value="Upload" />
                                        <span><b> Module Type: </b></span>
                                        <select class = "form-control" id = "settings-adding-select" name="module_type" required>
                                            <option selected disabled>Please Select</option>
                                            <option value="Lec">Lecture</option>
                                            <option value="Lab">Laboratory</option>
                                        </select>
                                    </form> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <?php if (isset($status))
                {   
                    echo "<div class='container'>";
                    echo "<div class='alert alert-info'>";
                    echo    "<a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
                    echo    "<strong>Upload pdf status:</strong>  ".$status;
                    echo "</div>";
                    echo "</div>";
                }
                ?>
            </div>
        </div> <!-- row -->      
    </div> <!-- container -->