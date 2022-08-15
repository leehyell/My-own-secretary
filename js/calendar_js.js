
function calendarMake() {
    calendarMaker($("#calendarForm"), new Date());
};calendarMake();
var nowDate = new Date();
var todayDate = new Date();
var td_year = todayDate.getFullYear();
var td_month = todayDate.getMonth() + 1;
var td_day = todayDate.getDate();
$('#today_txt').text(td_year+'년 '+('0'+td_month).slice(-2)+'월 '+('0'+td_day).slice(-2)+'일');
$('.schedule'+td_year+('0'+td_month).slice(-2)+('0'+td_day).slice(-2)).show();
console.log('schedule'+td_year+('0'+td_month).slice(-2)+('0'+td_day).slice(-2));
function calendarMaker(target, date, date2) {
    if (date == null || date == undefined) {
        date = new Date();
    }
    if (date2 == null || date2 == undefined) {
        date2 = new Date();
    }
    nowDate = date;
    todayDate = date2;
    if ($(target).length > 0) {
        var year = nowDate.getFullYear();
        var year2 = todayDate.getFullYear();
        var month = nowDate.getMonth() + 1;
        var month2 = todayDate.getMonth() + 1;
        var day = todayDate.getDate();
        $(target).empty().append(assembly(year, month));
    } else {
        console.error("custom_calendar Target is empty!!!");
        return;
    }
    var thisMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1);
    var thisLastDay = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0);
    var tag = "<tr>";
    var cnt = 0;
    //빈 공백 만들어주기
    for (i = 0; i < thisMonth.getDay(); i++) {
        tag += "<td></td>";
        cnt++;
    }

    //날짜 채우기
    for (i = 1; i <= thisLastDay.getDate(); i++) {
        if (cnt % 7 == 0) { tag += "<tr>"; }
        if(year + '' + ('0'+month).slice(-2) + '' + ('0'+i).slice(-2) == year2 + ('0'+month2).slice(-2) + ('0'+day).slice(-2)) {//오늘 날짜
            tag += "<td id="+ (year+ '' + ('0'+month).slice(-2) + '' + ('0'+i).slice(-2)) +" class='calendar_td td_today'>" + ('0'+i).slice(-2) + "</td>";
        }else {
            tag += "<td id="+ (year+ '' + ('0'+month).slice(-2) + '' + ('0'+i).slice(-2)) +" class='calendar_td'>" + ('0'+i).slice(-2) + "</td>";
        }
        cnt++;
        if (cnt % 7 == 0) {
            tag += "</tr>";
        }
    }
    $(target).find("#custom_set_date").append(tag);
    calMoveEvtFn();

    function assembly(year, month) {
        var calendar_html_code =
            "<table class='custom_calendar_table'>" +
            "<thead class='cal_date'>" +
            "<th><button type='button' class='prev'><img src='./img/calendar_before.svg' alt=''></button></th>" +
            "<th colspan='5' class='date_title'><p><span>" + year + "</span>년 <span>" + ('0'+month).slice(-2) + "</span>월</p></th>" +
            "<th><button type='button' class='next'><img src='./img/calendar_after.svg' alt=''></button></th>" +
            "</thead>" +
            "<thead  class='cal_week'>" +
            "<th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th>" +
            "</thead>" +
            "<tbody id='custom_set_date'>" +
            "</tbody>" +
            "</table>";
        return calendar_html_code;
    }
    function calMoveEvtFn() {
        //전달 클릭
        $(".custom_calendar_table").on("click", ".prev", function () {
            nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() - 1, nowDate.getDate());
            calendarMaker($(target), nowDate);

            $('#today_txt').text(td_year + '년 ' + ('0'+td_month).slice(-2) + '월 ' + ('0'+td_day).slice(-2) + '일');
            $('.pic_row_a').show();
            $('.no_data_txt').hide();
        });
        //다음날 클릭
        $(".custom_calendar_table").on("click", ".next", function () {
            nowDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, nowDate.getDate());
            calendarMaker($(target), nowDate);
            
            $('#today_txt').text(td_year + '년 ' + ('0'+td_month).slice(-2) + '월 ' + ('0'+td_day).slice(-2) + '일');
            $('.pic_row_a').show();
            $('.no_data_txt').hide();
        });
        //일자 선택 클릭
        $(".custom_calendar_table").on("click", "td", function () {
            if($(this).hasClass('select_day') == true) {
                $(".custom_calendar_table .select_day").removeClass("select_day");
                $(this).removeClass("select_day").addClass("select_day");
            }else {
                $(".custom_calendar_table .select_day").removeClass("select_day");
                $('#today_txt').text(td_year + '년 ' + ('0'+td_month).slice(-2) + '월 ' + ('0'+td_day).slice(-2) + '일');
                $('.pic_row_a').show();
                $('.no_data_txt').hide();
            }
        });
    }
    $('#20220805').append('<span class="work_in work_end"></span>');
    
    $('.calendar_td ').on('click', function() {
        var ths_td_id = $(this).attr('id');
        $('#today_txt').text($('.date_title p').text() + ' '+ $(this).text() + '일');
        $('.pic_row_a').hide();
        if($(this).find('span').hasClass('work_in') == true) {
            $('.schedule'+ths_td_id).show();
            $('.no_data_txt').hide();
        }else {
            $('.schedule_detail_row').hide();
            $('.no_data_txt').show();
        };
        $(this).toggleClass("select_day");
    });
}