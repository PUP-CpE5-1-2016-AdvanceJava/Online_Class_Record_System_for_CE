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

                <?php
                    if(isset($info))
                    {
                        $ctr = 1;
                        foreach ($info as $year => $data) 
                        {
                            $heading = 'heading'.$ctr;
                            $collapse = 'collapse'.$ctr;
                            echo "<div class='panel' id = 'archives-panel'>";
                            echo "<div class='panel-heading' role='tab' id='".$heading."'>";
                            echo    "<a id = 'archives-panel-label' role='button' data-toggle='collapse' data-parent='#accordion' href='#".$collapse."' aria-expanded='true' aria-controls='".$collapse."'>".$year."<i class = 'fa fa-caret-down'></i></a>";
                            echo "</div>";
                            echo "<div id='".$collapse."' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='".$heading."'>";
                            echo "<div class='list-group' id ='archives-panel-links'>";
                            foreach ($data as $file) 
                            {
                                echo "<a href='".$file['filepath']."' class='list-group-item'>".$file['filename']."</a>";  
                            }
                            echo "</div></div></div>";
                            $ctr++;
                        }
                        
                    }
                ?>
                </div>
            </div>
        </div> 
	</div>