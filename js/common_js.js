function goBack() {
    window.history.back();
}

/* 사이드메뉴 토글 */
function sideShow() {
    $('body').css('overflow', 'hidden');
    $('#side_menu1').show();
}
function sideHide() {
    $('body').css('overflow', 'auto');
    $('#side_menu1').hide();
}
function sideShow2() {
    sideHide();
    $('#side_menu2').show();
}
function sideHide2() {
    sideShow();
    $('#side_menu2').hide();
}
function chkAll() {
    $('.alarm_row').addClass('alarm_read');
}

$('.category_nav').on('mousewheel',function(e){
    var wheelDelta = e.originalEvent.wheelDelta;
    if(wheelDelta > 0) {
        console.log("up");
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }else {
        console.log("down");
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
    }
});

var todayDate = new Date();
var td_year = todayDate.getFullYear();
var td_month = todayDate.getMonth() + 1;
var td_day = todayDate.getDate();
$('#calendar_choose').attr('value', td_year+'년 '+('0'+td_month).slice(-2)+'월 '+('0'+td_day).slice(-2)+'일'+' 하루종일');


function alarmShow() {
    $('body').css('overflow', 'hidden');
    $('.alarm_setting_whole').show();
}
function alarmHide() {
    $('body').css('overflow', 'auto');
    $('.alarm_setting_whole').hide();
}
function alarmOk() {
    alarmHide();
    var ths_chked = $('input[type="radio"]:checked').val();
    $('#alarm_choose').attr('value', ths_chked);
}

function calendarShow() {
    $('body').css('overflow', 'hidden');
    $('.calendar_setting_whole').show();
    calendarLoad();
}
function calendarHide() {
    $('body').css('overflow', 'auto');
    $('.calendar_setting_whole').hide();
}
function calendarOk() {
    calendarHide();
}
function calTypeChange(ths) {
    var ths_id = ths.dataset.id;
    $('#now_type').attr('value', ths_id);
    if(ths_id == 'btn_start') {
        $('.start_end_btn').removeClass('btn_on');
        $('.btn_start').addClass('btn_on');
    }else {
        $('.start_end_btn').removeClass('btn_on');
        $('.btn_end').addClass('btn_on');
    }
}


function commentChk() {
    var comment_val = $('#comment_val').val();
    if(comment_val != '') {
        $('#comment_send_btn').prop('disabled', false);
    }else {
        $('#comment_send_btn').prop('disabled', true);
    }
}

function readHover(ths) {
    var ths_id = ths.dataset.id;
    $('#'+ths_id).next('.sticky_sub_menu').show();
}
function readHie() {
    $('.sticky_sub_menu').hide();
}

function recommentWarningShow(ths) {
    var ths_id = ths.dataset.id;
    $('body').css('overflow', 'hidden');
    $('.recomment_warning_whole1').show();
    var ths_nick = $('#'+ths_id).parents('.display_flex').next('.commu_info_flex').find('.user_nick_txt').text();
    var ths_comment = $('#'+ths_id).parents('.display_flex').find('.user_comment').text();
    $('#warning_name').text(ths_nick);
    $('#warning_content').text(ths_comment);
}
function recommentWarningHide() {
    $('body').css('overflow', 'auto');
    $('.recomment_warning_whole').hide();
    document.getElementById('recomment_txt_box').value = null;
}
function warningSend() {
    recommentWarningHide();
    alertShow();
    $('.alert_box p').text('신고가 완료되었습니다!');
}
function recommentKeyup() {
    var txt_val = $('#recomment_txt_box').val();
    var txt_val2 = $('#recomment_txt_box2').val();
    if(txt_val != '' || txt_val2 != '') {
        $('#warning_send_btn').prop('disabled', false);
        $('#warning_send_btn2').prop('disabled', false);
    }else {
        $('#warning_send_btn').prop('disabled', true);
        $('#warning_send_btn2').prop('disabled', true);
    }
}

function deletePopup(ths) {
    var ths_id = ths.dataset.id;
    $('body').css('overflow', 'hidden');
    $('.recomment_warning_whole1').show();
    $('#warning_send_btn').attr('data-id', ths_id);
}
function deleteOk(ths) {
    var ths_id = ths.dataset.id;
    $('body').css('overflow', 'auto');
    $('.recomment_warning_whole').hide();
    alertShow();
    $('.alert_box p').text('삭제가 완료되었습니다!');
    $('#'+ths_id).remove();
    
    var row_num1 = $('.commu_comment_main').length;
    var row_num2 = $('.commu_recomment_row').length;
    console.log(row_num1);
    console.log(row_num2);
    if(row_num1 == '0' && row_num2 == '0') {
        $('.no_data_txt').show()
    }else {
        $('.no_data_txt').hide()
    }
}

function userCutOffShow(ths) {
    confirmShow();
    var ths_id = ths.dataset.id;
    var ths_name = $('#'+ths_id).parents('.display_flex').next('.commu_info_flex').find('.user_nick_txt').text();
    $('#cut_warning_name').text(ths_name);
}
function confirmOk() {
    confirmHide();
    alertShow();
    $('.alert_box p').text('차단이 완료되었습니다!');
}
function confirmShow() {
    $('body').css('overflow', 'hidden');
    $('.confirm_whole').show();
    $('.confirm_title').text('차단하시겠습니까?');
}
function confirmHide() {
    $('body').css('overflow', 'auto');
    $('.confirm_whole').hide();
}

function alertShow() {
    $('body').css('overflow', 'hidden');
    $('.alert_whole').show();
    $('.alert_box p').text('신고가 완료되었습니다!');
}
function alertHide() {
    $('body').css('overflow', 'auto');
    $('.alert_whole').hide();
}

function heartOnOff(ths) {
    var ths_id = ths.dataset.id;
    var ths_src = $('#'+ths_id).attr('src');
    var ths_num = $('#'+ths_id).next('p').text();
    var ths_num2 = Number(ths_num);

    if(ths_src == './img/heart_gr.png') {
        $('#'+ths_id).attr('src', './img/heart_pu.png');
        $('#'+ths_id).next('p').text(ths_num2+1);
        $('#'+ths_id).next('p').css('color', '#5D1663');
    }else {
        $('#'+ths_id).attr('src', './img/heart_gr.png');
        $('#'+ths_id).next('p').text(ths_num2-1);
        $('#'+ths_id).next('p').css('color', '#999999');
    }
}
function heartOnOff2(ths) {
    var ths_id = ths.dataset.id;
    var ths_src = $('#'+ths_id).attr('src');
    var ths_num = $('#'+ths_id).next('p').text();
    var ths_num2 = Number(ths_num);

    if(ths_src == './img/heart_light_pu.svg') {
        $('#'+ths_id).attr('src', './img/heart_light_wh.svg');
        $('#'+ths_id).next('p').text(ths_num2+1);
        $('#'+ths_id).next('p').css('color', '#5D1663');
    }else {
        $('#'+ths_id).attr('src', './img/heart_light_pu.svg');
        $('#'+ths_id).next('p').text(ths_num2-1);
        $('#'+ths_id).next('p').css('color', '#999999');
    }
}
function heartToggleShow() {
    $('.icon_more_box').show();
}
function heartToggleHide() {
    $('.icon_more_box').hide();
}


function recommentWarningShow2() {
    $('body').css('overflow', 'hidden');
    $('.recomment_warning_whole2').show();
    var ths_nick = $('#commu_wrote_user').text();
    var ths_comment = $('.commu_content p').text();
    $('#warning_name2').text(ths_nick);
    $('#warning_content2').text(ths_comment);
}
function userCutOffShow2() {
    confirmShow();
    var ths_nick = $('#commu_wrote_user').text();
    $('#cut_warning_name').text(ths_nick);
}

function pageLinkCopy() {
    var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);

    alertShow();
    $('.alert_box p').text('카피가 완료되었습니다!');
}

function pwWrite() {
    var pw_input1 = $('#pw_input1').val();
    var pw_input2 = $('#pw_input2').val();
    if(pw_input1 != '' && pw_input2 != '' && pw_input1 == pw_input2) {
        $('#pw_chk_txt').hide();
    }else {
        $('#pw_chk_txt').show();
    }
}

function fileChange(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      document.getElementById('preview').src = "";
    }
}

function listToggle(ths) {
    var ths_id = ths.dataset.id;
    $('#'+ths_id).find('.list_toggle').toggle();
}