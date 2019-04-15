$('button').click(function() {
  var counter = $('input').attr('value');
  $('input').attr('value', ++counter);
});
