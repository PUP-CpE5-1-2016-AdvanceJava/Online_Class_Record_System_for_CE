    <div class = "container" id = "home-wrapper">
        <div class "row">
            <div class = "col-md-2" id = "home-wrapper-title">
                <span>UPDATES</span> 
            </div>
            <div class = "col-md-10" id = "home-wrapper-title">
                <button class="btn btn-default" id="pdf-button">SAVE AS PDF</button>
            </div>
        </div>

        <div class = "row">
            <div class="col-md-12">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <?php
                        if (isset($info))
                        {
                            $names = array();
                            $i = 0;
                            foreach ($info as $data => $value)
                            {
                                $names[$i] = $data;
                                $i++;
                            }
                            $j = 0;
                            $k = 0;
                            foreach ($info as $data)
                            {
                                echo "<div class='panel' id = 'home-panel'>";
                                echo     "<div class='panel-heading' role='tab' id='headingOne'>";
                                if (isset($upload_count[$k])) echo "<a id = 'home-panel-label' class='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapse_".$k."' aria-expanded='false' aria-controls='collapseOne'>".$names[$j]."<span class='badge '>".$upload_count[$k]."</span></a>";
                                else echo "<a id = 'home-panel-label' class='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapse_".$k."' aria-expanded='false' aria-controls='collapseOne'>".$names[$j]."<span class='badge '>0</span></a>";
                                echo     "</div>";
                                echo     "<div id='collapse_".$k."' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingTwo'>";
                                    $j++;
                                    if (isset($data))
                                    {
                                        foreach ($data as $data2)
                                        {
                                            echo         "<div class='panel-body' id = 'home-panel-body'>";
                                            echo             "<div role='tab' id='headingTwo'>";
                                            echo                 "<a id = 'home-panel-sublabel'>".$data2["title"]."</a>";
                                            echo             "</div>";
                                            echo             "<div id='collapseTwo' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingTwo'>";
                                            echo                 "<div class='panel-body' id = 'home-panel-body'>";
                                            echo                     "<div class='list-group' id = 'home-panel-links'>";
                                            foreach ($data2["class"] as $class)
                                            {
                                                        echo               "<a href='#' class='list-group-item list-group-item-success'>".$class['c_block'];
                                                        if ($class['c_isUploaded'] == true) 
                                                        {
                                                            echo "<span class='label label-success'>";
                                                            echo $class['c_dateUploaded'];
                                                            echo"</span>";
                                                        }
                                                        echo               "</a>";
                                            }            
                                            echo                     "</div>";
                                            echo                 "</div>";
                                            echo             "</div>";
                                            echo         "</div>";
                                        }
                                    }
                                echo     "</div>";
                                echo "</div>";
                                $k++;
                            }
                        }
                    ?>
                </div>
            </div>
        </div> 
    </div>

    <script type="text/javascript" src="<?php base_url(); ?>/plugins/jsPDF/jspdf.min.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/jsPDF/faker.min.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/jsPDF/jspdf.plugin.autotable.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/report-pdf.js"></script>