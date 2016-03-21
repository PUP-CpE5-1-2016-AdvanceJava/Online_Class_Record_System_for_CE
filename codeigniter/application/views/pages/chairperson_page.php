    <div class = "container" id = "home-wrapper">
        <div class "row">
            <div class = "col-md-12" id = "home-wrapper-title">
                <span>UPDATES</span> 
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
                                echo         "<a id = 'home-panel-label' class='collapsed' role='button' data-toggle='collapse' data-parent='#accordion' href='#collapse_".$k."' aria-expanded='false' aria-controls='collapseOne'>".$names[$j]."<span class='badge '>".$upload_count[$k]."</span></a>";
                                echo     "</div>";
                                echo     "<div id='collapse_".$k."' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingTwo'>";
                                    $j++;
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
                                                    if ($class['c_isUploaded'] == true) echo "<span class='label label-success'>Submitted</span>";
                                                    echo               "</a>";
                                        }            
                                        echo                     "</div>";
                                        echo                 "</div>";
                                        echo             "</div>";
                                        echo         "</div>";
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