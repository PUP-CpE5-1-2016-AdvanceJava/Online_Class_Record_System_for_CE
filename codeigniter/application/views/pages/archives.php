<div class = "container" id = "archives-wrapper">
        <div class "row">
            <div class = "col-md-12">
                <span> ARCHIVES </span> 
                <ol class="breadcrumb" id = "archives-breadcrumbs">
                    <li><a href="#">Semester</a></li>
                    <li><a href="#">Course</a></li>
                    <li><a href="#">Subject</a></li>
                    <li class="active">Year</li>
                </ol>
            </div>
        </div>
        <div class = "row">
            <div class="col-md-12">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel" id = "archives-panel">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <a id = "archives-panel-label" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">2016 <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div class="list-group" id ="archives-panel-links">
                                <?php
                                    if (isset($info))
                                    {
                                        $hrefId = 0;
                                        foreach ($info as $data => $path) :
                                            echo "<a href='".$path."' class='list-group-item'>".$data."</a>";
                                        endforeach;
                                    }
                                ?>
                            </div>
                        </div>
                    </div>

                    <div class="panel" id = "archives-panel">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <a id = "archives-panel-label" class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">2015 <i class = "fa fa-caret-down"></i></a>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                            <div class="list-group" id = "archives-panel-links">
                                <a href="#" class="list-group-item">BSCpE 4-1 Digital Signal Processing_Final001.pdf</a>
                                <a href="#" class="list-group-item">BSCpE 4-1 Design Project1_Final001.pdf</a>
                                <a href="#" class="list-group-item">BSCpE 4-1 Design Project1_Draft001.pdf</a>
                                <a href="#" class="list-group-item">BSCpE 4-1 Digital Signal Processing_Draft001.pdf</a>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div> 
	</div>