var principal = $('.principal').val();
var reserved = $('.reserved').val();
var max_result = $('.max_result').val();

var main = function() {
  $('.principal').keyup(function() {
    reserved = principal / 10;
    alert(principal);
  });

  $('.btn').click(function() {
    var principal = $('.principal').val();
    alert(principal);
  });
}
