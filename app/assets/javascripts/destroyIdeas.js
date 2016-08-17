$(document).ready(function() {

$("#destroy-idea").on('click', function(){
  var ideaId = $(this).closest('tr').data()
  $.ajax({
    type: 'DELETE',
    url: '/api/v1/ideas/' + ideaId.id,
    success: function() {

      }
    })
  })
})
