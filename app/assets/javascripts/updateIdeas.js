$(document).ready(function() {
  var ideaArray = ['swill', 'plausible', 'genius']

$(".title-text").on('blur', function(){
  var ideaId = $(this).parents('tr').data('id')
  var ideaParams = { idea: {
                      id: ideaId,
                      title: $(this).text()
                    }}
  $.ajax({
    type: 'PATCH',
    url: '/api/v1/ideas/' + ideaId,
    data: ideaParams
    })
  })

  $(".body-text").on('blur', function(){
    var ideaId = $(this).parents('tr').data('id')
    var ideaParams = { idea: {
                        id: ideaId,
                        body: $(this).text()
                      }}
    $.ajax({
      type: 'PATCH',
      url: '/api/v1/ideas/' + ideaId,
      data: ideaParams
      })
    })

    $("#each-idea").on('click', '.upvote-idea', function(){
      var ideaId = $(this).parents('tr').data('id')
      var currentQuality = $(this).closest('tr').children('.quality-text').text()
      var qualityIndex = ideaArray.indexOf(currentQuality)
      if(qualityIndex !== ideaArray.length - 1) {
        var newQuality = ideaArray[qualityIndex + 1]
        var ideaParams = {idea: {id: ideaId,
        quality: newQuality}}
        $.ajax({
          type: 'PATCH',
          url: '/api/v1/ideas/' + ideaId,
          data: ideaParams,
          success: function(newQuality){
            debugger
            $(this).closest('tr').children('.quality-text').text(data.quality)
          }
          })
        }
        })
})
