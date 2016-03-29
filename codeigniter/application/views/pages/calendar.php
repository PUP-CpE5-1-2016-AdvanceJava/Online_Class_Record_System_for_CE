<!-- EVENTS AND CALENDAR -->
    <div class="container-fluid" id="calendar-content-wrapper">
        <div class="container" id="calendar-wrapper">
            <div class="row" id="calendar-wrapper-row">
                <!--EVENTS-->
                <div class="col-xs-3 col-lg-3 col-md-3" id="event-panel">
                    <div id="event-title">
                        <h2>EVENTS</h2>
                        <h4 id="current-event-date"></h4>
                        <?php if ($user['UserType'] == 'Administrator'): ?>
                        <h6 id="add-event-button"><span class="glyphicon glyphicon-plus"></span> ADD EVENT</h6>
                        <?php endif; ?>
                        <!--Input-->
                        <div class="form-group">
                            <form id="add-event-form" href="<?=site_url('user/calendar_add_event')?>">
                                <textarea name="form-control" rows="5" id="add-event"></textarea>
                                <input class="btn btn-default" type="submit" value="SUBMIT">
                            </form>
                        </div>
                    </div>
                    <div id="event-scroll">
                        <div id="event-list">

                            <!--Ilalagay dito ni backend lahat ng events-->
                            <!--id naming. Month-day-year Capital first letter at kapag 1 digit ay 1 lang. e.i. February-1 instead of February-01-->

                            <!--Sa admin ay ganitong format para may delete button-->
                            <?php
                                if (isset($info))
                                {
                                    foreach ($info as $data) :
                                        echo "<div class='cal-event' id='".$data['Date']."'>";
                                        echo "    <div class='row vertical-align'>";
                                        echo "        <div class='col-xs-9'><p>".$data['Event']."</p></div>";
                                        $link = "user/calendar_delete_event";
                                        echo "        <div class='col-xs-3'>";
                                        if ($user['UserType'] == "Administrator") echo "<span class='glyphicon glyphicon-remove' href='".site_url($link)."' id='delete-event-button'></span>";
                                        echo "            </div>";
                                        echo "    </div>";
                                        echo "</div>";
                                    endforeach;
                                }
                            ?>
                        </div>
                    </div>
                    <?php
                    if (isset($info))
                    {
                        echo "<script>";
                        echo "$(document).ready(function(){";
                        echo "$('#event-scroll').perfectScrollbar({";
                        echo "    suppressScrollX: true,";
                        echo "});});";
                        echo "</script>";
                    }
                    ?>

                </div>
                
                <!--MAIN CALENDAR-->
                <div class="col-xs-9 col-lg-9 col-md-9" id="calendar-div-wrapper">
                    <div class="row vertical-align" id="calendar-title">
                        <div class="col-lg-3 col-md-3 col-xs-4 text-left" id="button-group1">
                            <button type="button" id="back" class="btn btn-default"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span></button>
                            <button type="button" class="btn btn-default" id="next"><span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
                            <button type="button" class="btn btn-default btn-lg" id="today-button">Today</button>
                        </div>
                        <div class="col-lg-6 col-md-6 col-xs-4">
                            <h1 id="calendar-h2-month"></h1>
                        </div>
                        <div class="col-lg-3 col-md-3 col-xs-4 text-right" id="button-group2">
                            <button type="button" class="btn btn-default btn-lg active" id="month-button">Month</button>
                            <button type="button" class="btn btn-default btn-lg" id="year-button">Year</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- FOOTER -->
     <div class = "container-fluid" id = "footer-wrapper">
        <div class = "container">
            <div class="row">
                <div class="col-lg-6 col-md-6" id = "footer-details">      
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logoce.png"> 
                    <img alt="Brand" id = "header-logo"src="<?php base_url(); ?>/resources/img/logocpe.png">
                    <span><b>College of Engineering</b> | Online Class Record </span>      
                    <p><i class="fa fa-copyright"></i>All Rights Reserved</p>
                </div>
                <div class = "col-lg-5 col-md-5 pull-right" id = "footer-form">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Comments and Queries">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button"><i class = "fa fa-envelope"></i></button>
                        </span>
                    </div>
                </div>
            </div>
        </div> <!-- container -->
    </div> <!-- container-fluid -->
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/bootstrap-multiselect.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/script.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/chosen.jquery.min.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/calendar_arian.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/calendar_lara.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/js/calendar_marci.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="<?php base_url(); ?>/plugins/perfect-scrollbar/js/min/perfect-scrollbar.jquery.min.js"></script>
</body>

</html>