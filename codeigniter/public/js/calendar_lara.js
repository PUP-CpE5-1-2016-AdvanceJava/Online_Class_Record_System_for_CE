$(document).ready(function(){
    var d = new Date();

    // Get references for 1yr before
    var year_past = d.getFullYear() - 1;
    var start_past = new Date(year_past, 0, 1)
    var first_day_past = start_past.getDay();

    // Get references for present year
    var year_present = d.getFullYear();
    var start_present = new Date(year_present, 0, 1)
    var first_day_present = start_present.getDay();

    // Get references for 1yr after
    var year_future = d.getFullYear() + 1;
    var start_future = new Date(year_future, 0, 1)
    var first_day_future = start_future.getDay();

    // Generate calendars Year - 1, Year, Year + 1 (1yr before, present yr, 1yr after);
    create_calendar(year_past, first_day_past);
    create_calendar(year_present, first_day_present);
    create_calendar(year_future, first_day_future);
    event_marker();
})

function create_calendar(year, first_day){
    var day_name = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var last_day = 0;
    var row_count = 1;

    var d = new Date();
    var day = day_name[first_day];

    for (var month_count = 1; month_count <= 12  ; month_count++){
        var month_end = new Date(2016, month_count, 0).getDate();            
        var month = month_name[month_count - 1];

        if (month_count == 2){
            if (new Date(year, month_count - 1, 29).getDate() != 29){
                month_end = month_end - 1;
            }
        }

        // Creating a new row per 3 months
        if (month_count == 1 || month_count == 4 || month_count == 7 || month_count == 10){
            var div_row = document.createElement('div');
            div_row.setAttribute("class", "row");
            div_row.setAttribute("id", "calendar-row-" + row_count + "-" + year);

            var div_table = document.createElement('div');
            div_table.setAttribute("class", "col-lg-12 col-md-12 table-responsive");
            div_table.setAttribute("id", "calendar-div-" + month + "-" + year);
            div_row.appendChild(div_table);

            var h3_month = document.createElement('h3');
            h3_month.setAttribute("id", "calendar-h3-month-" + month + "-" + year);
            h3_month.innerHTML = month;
            div_table.appendChild(h3_month);

            var table = document.createElement('table');
            table.setAttribute("class", "table table-bordered");
            table.setAttribute("id", "calendar-table");
            div_table.appendChild(table);

            var thead = document.createElement('thead');
            thead.setAttribute("id", "calendar-thead");
            table.appendChild(thead);

            var thead_tr = document.createElement('tr');
            thead_tr.setAttribute("id", "calendar-days");
            thead.appendChild(thead_tr);

            var tbody = document.createElement('tbody');
            tbody.setAttribute("id", "calendar-tbody");
            table.appendChild(tbody);

            for (var day_count = 0; day_count <= 6; day_count++){
                var thead_td = document.createElement('td');
                thead_td.innerHTML = day_name[day_count];
                thead_tr.appendChild(thead_td);
            }

            var date_enumerator = 1;

            if (last_day != 6){
                var tbody_tr = document.createElement('tr');
                tbody_tr.setAttribute("id", "calendar-tbody-row1");
                tbody.appendChild(tbody_tr);

                for (var initial_week_count = 0; initial_week_count <= 6; initial_week_count++){
                    var tbody_td = document.createElement('td');
                    if (initial_week_count < first_day){                
                        tbody_td.innerHTML = "";
                    } else{
                        tbody_td.innerHTML = date_enumerator;
                        tbody_td.setAttribute("id", "td-" + month + "-" + date_enumerator + "-" + year);

                        if (month_count - 1 == d.getMonth() && date_enumerator == d.getDate() && year == d.getFullYear()){                            
                            tbody_td.style.border = "3px solid #DD9715";
                            tbody_td.style.backgroundColor = "#730b0a";
                            tbody_td.style.color = "white";
                            tbody_td.style.fontWeight = "bold";
                        }
                        date_enumerator++;
                    }
                    tbody_tr.appendChild(tbody_td);
                }
            }        

            for (var week_count = 2; week_count <= 6; week_count++){
                var tbody_tr = document.createElement('tr');
                tbody_tr.setAttribute("id", "calendar-tbody-row" + week_count);
                tbody.appendChild(tbody_tr);

                for (var date_count = 0; date_count <= 6; date_count++){                
                    if (date_enumerator <= month_end){
                        var tbody_td = document.createElement('td');
                        tbody_td.innerHTML = date_enumerator;
                        tbody_td.setAttribute("id", "td-" + month + "-" + date_enumerator + "-" + year);

                        if (month_count - 1 == d.getMonth() && date_enumerator == d.getDate() && year == d.getFullYear()){
                            tbody_td.style.border = "3px solid #DD9715";
                            tbody_td.style.backgroundColor = "#730b0a";
                            tbody_td.style.color = "white";
                            tbody_td.style.fontWeight = "bold";
                        }

                        tbody_tr.appendChild(tbody_td);
                        date_enumerator++;
                        last_day = date_count;
                    }
                }
            }
            first_day = last_day + 1;

            document.getElementById("calendar-div-wrapper").appendChild(div_row);
            row_count += 1;
        } else{
            var div_table = document.createElement('div');
            div_table.setAttribute("class", "col-lg-12 col-md-12 table-responsive");
            div_table.setAttribute("id", "calendar-div-" + month + "-" + year);

            var h3_month = document.createElement('h3');
            h3_month.setAttribute("id", "calendar-h3-month-" + month + "-" + year);
            h3_month.innerHTML = month;
            div_table.appendChild(h3_month);

            var table = document.createElement('table');
            table.setAttribute("class", "table table-bordered");
            table.setAttribute("id", "calendar-table");
            div_table.appendChild(table);

            var thead = document.createElement('thead');
            thead.setAttribute("id", "calendar-thead");
            table.appendChild(thead);

            var thead_tr = document.createElement('tr');
            thead_tr.setAttribute("id", "calendar-days");
            thead.appendChild(thead_tr);

            var tbody = document.createElement('tbody');
            tbody.setAttribute("id", "calendar-tbody");
            table.appendChild(tbody);

            for (var day_count = 0; day_count <= 6; day_count++){
                var thead_td = document.createElement('td');
                thead_td.innerHTML = day_name[day_count];
                thead_tr.appendChild(thead_td);
            }

            var date_enumerator = 1;

            if (last_day != 6){
                var tbody_tr = document.createElement('tr');
                tbody_tr.setAttribute("id", "calendar-tbody-row1");
                tbody.appendChild(tbody_tr);

                for (var initial_week_count = 0; initial_week_count <= 6; initial_week_count++){
                    var tbody_td = document.createElement('td');
                    if (initial_week_count < first_day){                
                        tbody_td.innerHTML = "";
                    } else{
                        tbody_td.innerHTML = date_enumerator;
                        tbody_td.setAttribute("id", "td-" + month + "-" + date_enumerator + "-" + year);

                        if (month_count - 1 == d.getMonth() && date_enumerator == d.getDate() && year == d.getFullYear()){
                            tbody_td.style.border = "3px solid #DD9715";
                            tbody_td.style.backgroundColor = "#730b0a";
                            tbody_td.style.color = "white";
                            tbody_td.style.fontWeight = "bold";
                        }
                        date_enumerator++;
                    }
                    tbody_tr.appendChild(tbody_td);
                }
            }        

            for (var week_count = 2; week_count <= 6; week_count++){
                var tbody_tr = document.createElement('tr');
                tbody_tr.setAttribute("id", "calendar-tbody-row" + week_count);
                tbody.appendChild(tbody_tr);

                for (var date_count = 0; date_count <= 6; date_count++){                
                    if (date_enumerator <= month_end){
                        var tbody_td = document.createElement('td');
                        tbody_td.innerHTML = date_enumerator;
                        tbody_td.setAttribute("id", "td-" + month + "-" + date_enumerator + "-" + year);

                        if (month_count - 1 == d.getMonth() && date_enumerator == d.getDate() && year == d.getFullYear()){
                            tbody_td.style.border = "3px solid #DD9715";
                            tbody_td.style.backgroundColor = "#730b0a";
                            tbody_td.style.color = "white";
                            tbody_td.style.fontWeight = "bold";
                        }

                        tbody_tr.appendChild(tbody_td);
                        date_enumerator++;
                        last_day = date_count;
                    }
                }
            }
            first_day = last_day + 1;
            div_row.appendChild(div_table);
        }
    }
}

function event_marker(){
    var everyChild = document.querySelectorAll("#event-list>div");
    var event_id_array = [];
    var unique_event_id = [];

    if (everyChild.length != 0){
        for (var i = 0; i < everyChild.length; i++){
            event_id_array[i] = everyChild[i].id;
        }

        event_id_array.sort();
        unique_event_id = get_unique_id(event_id_array);

        for (var i = 0; i < unique_event_id.length; i++){
            var event_id = unique_event_id[i];
            var month = event_id.slice(0, event_id.search("-"));
            var date = event_id.slice(event_id.search("-") + 1, event_id.search("-") + 3);
            var year = event_id.slice(event_id.search("-") + date.length + 1, event_id.search("-") + date.length + 6);

            if (date.search("-") == 1){
                date = date.slice(0, 1);
                year = event_id.slice(event_id.search("-") + date.length + 1, event_id.search("-") + date.length + 6);
            }

            date = Math.abs(date);
            year = year.slice(1, 5);

            var date_id = "td-" + month + "-" + date + "-" + year;

            var event_mark_top = document.createElement('div');
            event_mark_top.setAttribute("id", "event-mark-top");
            document.getElementById(date_id).appendChild(event_mark_top);

            var event_mark_bottom = document.createElement('div');
            event_mark_bottom.setAttribute("id", "event-mark-bottom");
            document.getElementById(date_id).appendChild(event_mark_bottom);
        }
    }
}

function get_unique_id(ids){
    var seen = {};
    var out = [];
    var len = ids.length;
    var j = 0;
    var ids_corrected_dates = [];

    for(var i = 0; i < len; i++) {
        var full_date = ids[i];
        var month = full_date.slice(0, full_date.search("-"));
        var date = full_date.slice(full_date.search("-") + 1, full_date.search("-") + 3);
        var year = full_date.slice(full_date.search("-") + date.length + 1, full_date.search("-") + date.length + 6);

        if (date.search("-") == 1){
            date = date.slice(0, 1);
            year = full_date.slice(full_date.search("-") + date.length + 1, full_date.search("-") + date.length + 6);
        }

        date = Math.abs(date);
        year = year.slice(1, 5);
        ids_corrected_dates[i] = month + "-" + date + "-" + year;
    }

    for(var i = 0; i < len; i++) {
        var item = ids_corrected_dates[i];

        if(seen[item] !== 1) {
           seen[item] = 1;
           out[j++] = item;
        }
    }

    return out;
}