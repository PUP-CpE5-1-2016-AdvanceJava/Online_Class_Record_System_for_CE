<!--SIDEBAR & CONTENT-->
<div class="container-fluid" id="main-content-wrapper">
    <div class="row" id="main-col-wrapper">
        <div class="container"id="sidebar-wrapper">
            <div class="sidebar-nav">
                <ul class="accordion">
                    <div id="sidebar-menu">
                        <i class="icon-class-record"></i><span>Record</span>
                    </div>
                    <?php
                        if (isset($subj))
                        {
                            $hrefId = 0;
                            foreach ($subj as $data) :
                                $hrefId++;
                                echo "<li id='sidebar-subMenu' class='accordion-section'>";
                                echo   "<a class='accordion-section-title hideOverflow' href='#accordion-".$hrefId."'>".$data['title']."<span class='arrow-left'></span></a>";
                                echo    "<div id='accordion-".$hrefId."' class='accordion-section-content'>";
                                if (isset($data['class']))
                                {
                                    foreach ($data['class'] as $class) :
                                        $link = "user/get_class_table/main_table/".$class['c_id'];
                                        echo "<div id='sidebar-item'><a onclick='return get_class_table(this.href);' href='".site_url($link)."'>".$class['c_block']."<span class='arrow-left'></span></a></div>";
                                    endforeach;
                                }
                                echo    "</div>";
                                echo"</li>";
                            endforeach;
                        }
                    ?>
                </ul>
                <ul class="accordion">
                    <div id="sidebar-menu" class="toggle-sidebar">
                        <i class="icon-class-record"></i><span>Sheets</span>
                    </div>
                    <li id="sidebar-subMenu" class="accordion-section" name="sheet_submenu">
                    </li>
                </ul>
                <ul class="accordion">
                    <div id="sidebar-menu" class="toggle-sidebar">
                        <i class="icon-modules"></i><span>Modules</span>
                    </div>
                    <li id="sidebar-subMenu" class="accordion-section" name="module_submenu">
                    </li>
                </ul>
            </div>
        </div>

    <!-- TABLE CONTENT WRAPPER -->
    <div id = "table-content-wrapper">
        <!-- <div class="row">
            <h2>BSCPE 5-1</h2>
            <hr>
            <h4><span>SOFTWARE ENGINEERING</span></h4>
        </div> -->
        <div class="row">
            <h1 style="color:rgba(65,105,225,0.5)"><b>Please select a class to display the table...<b></h1>
        </div>

    </div>
    <div id="include_tooltip">
    </div>
    
    <!-- ALERT MODAL -->
    <div id="table-alert-modal" class="modal">

      <!-- MODAL CONTENT -->
      <div class="modal-text" id="modal-text">
        <h4><b>Are you sure you want to delete column?</b></h4>
            <div id="table-modal-buttons"> 
            <button id="table-yes-btn">YES</button>
            <button id="table-cancel-btn">CANCEL</button>
        </div>
      </div>

    </div>
</div>
