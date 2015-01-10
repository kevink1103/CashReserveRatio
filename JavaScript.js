var principal = $('.principal').val();
var reserve_ratio = $('.reserve_ratio').val();
var reserved = $('.reserved').val();
var max_result = $('.max_result').val();

var main = function() {
  $('.principal').keyup(function() {
    var principal = $('.principal').val();
    var reserve_ratio = $('.reserve_ratio').val();
    var reserved = $('.reserved').val();
    var max_result = $('.max_result').val();

    reserved = principal / reserve_ratio;
    $('.reserved').text(reserved);
  });

  $('.reserve_ratio').keyup(function() {
    var principal = $('.principal').val();
    var reserve_ratio = $('.reserve_ratio').val();
    var reserved = $('.reserved').val();
    var max_result = $('.max_result').val();

    reserved = principal / reserve_ratio;
    $('.reserved').text(reserved);
  });

  $('.btn').click(function() {
    var principal = $('.principal').val();
    var reserve_ratio = $('.reserve_ratio').val();
    var reserved = $('.reserved').val();
    var max_result = $('.max_result').val();
    alert(principal);
    alert(reserved);
    alert(max_result);
  });

  // Alphabet input ignorer
  $('textarea').keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
      return;
    }

    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  });
};

$(document).ready(main);
