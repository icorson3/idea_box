$(document).ready(function() {

$("#each-idea").on('click', '.destroy-idea', function(){
  var $ideatr = $(this).parents('tr');
  var ideaId = $ideatr.data('id');
  $.ajax({
    type: 'DELETE',
    url: '/api/v1/ideas/' + ideaId,
    success: function() {
      $ideatr.remove();
      }
    });
  });
});
