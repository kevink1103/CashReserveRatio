var principal = $('.principal').val();
var reserved = $('.reserved').val();
var max_result = $('.max_result').val();

var main = function() {
  $('.principal').keyup(function() {
    var principal = $('.principal').val();
    var reserved = $('.reserved').val();
    var max_result = $('.max_result').val();

    reserved = principal / 10;
    $('.reserved').text(reserved);
  });

  $('.btn').click(function() {
    var principal = $('.principal').val();
    var reserved = $('.reserved').val();
    var max_result = $('.max_result').val();
    alert(principal);
    alert(reserved);
    alert(max_result);
  });
};

$(document).ready(main);
