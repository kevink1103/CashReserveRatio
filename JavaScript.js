var main = function() {
  $('.principal').keyup(function() {
    var principal = $('.principal').val();
    var reserve_ratio = $('.reserve_ratio').val();
    var reserved = $('.reserved').val();
    var max_result = $('.max_result').val();

    reserved = principal / reserve_ratio;

    $('.reserved').text(reserved);

    // clear
    if(principal.length == 0 || reserve_ratio.length == 0) {
      $('.reserved').text("0");
      $('.max_result').text("0");
    }
  });

  $('.reserve_ratio').keyup(function() {
    var principal = $('.principal').val();
    var reserve_ratio = $('.reserve_ratio').val();
    var reserved = $('.reserved').val();
    var max_result = $('.max_result').val();

    reserved = principal / reserve_ratio;

    $('.reserved').text(reserved);

    var money_lendable = principal - reserved;
    max_result = money_lendable;


    if(money_lendable >= 0) {
      if(money_lendable >= 0) {
        principal = money_lendable;
        reserved = principal / reserve_ratio;
        money_lendable = principal - reserved;
        max_result += money_lendable;
      }

      
      $('.max_result').text(max_result);
    }

    // clear
    if(principal.length == 0 || reserve_ratio.length == 0) {
      $('.reserved').text("0");
      $('.max_result').text("0");
    }
  });

  $('.btn').click(function() {
    var principal = $('.principal').val();
    var reserve_ratio = $('.reserve_ratio').val();
    var reserved = $('.reserved').val();
    var max_result = $('.max_result').val();
    alert(principal);
    alert(reserve_ratio);
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
