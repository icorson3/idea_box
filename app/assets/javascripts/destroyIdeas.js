$(document).ready(function() {
})
function destroyIdea(id){
  $('.table').on('click', "#destroy-idea", function(){
    var ideaId = $("#idea-id").val()
    $.ajax({
      type: 'DELETE',
      url: '/api/v1/ideas/' + ideaId,
      success: function() {
        
      }
    })
}

})
