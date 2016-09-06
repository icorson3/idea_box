$(document).ready(function() {
  var ideaArray = ['swill', 'plausible', 'genius'];

  $("#each-idea").on('blur', ".title-text" ,function(){
  var ideaId = $(this).parents('tr').data('id');
  var ideaParams = { idea: {
                      id: ideaId,
                      title: $(this).text()
                    }};
    $.ajax({
      type: 'PATCH',
      url: '/api/v1/ideas/' + ideaId,
      data: ideaParams
    });
  });

  $("#each-idea").on('blur', ".body-text" ,function(){
    var ideaId = $(this).parents('tr').data('id');
    var ideaParams = { idea: {
                        id: ideaId,
                        body: $(this).text()
                      }};
    $.ajax({
      type: 'PATCH',
      url: '/api/v1/ideas/' + ideaId,
      data: ideaParams
    });
  });

  $("#each-idea").on('click', '.upvote-idea', function(){
    var ideaId = $(this).parents('tr').data('id');
    var ideaRow = $(this).parents('tr');
    var currentQuality = $(this).closest('tr').children('.quality-text').text();
    var qualityIndex = ideaArray.indexOf(currentQuality);

    if(qualityIndex !== ideaArray.length - 1) {
      var newQuality = ideaArray[qualityIndex + 1];
      var ideaParams = {idea: {id: ideaId,
      quality: newQuality}};

      $.ajax({
        type: 'PATCH',
        url: '/api/v1/ideas/' + ideaId,
        data: ideaParams,
        success: function(){
          ideaRow.children('.quality-text').html(newQuality);
        }
      });
    }
  });

  $("#each-idea").on('click', '.downvote-idea', function(){
    var ideaId = $(this).parents('tr').data('id');
    var ideaRow = $(this).parents('tr');
    var currentQuality = $(this).closest('tr').children('.quality-text').text();
    var qualityIndex = ideaArray.indexOf(currentQuality);

    if(qualityIndex !== 0) {
      var newQuality = ideaArray[qualityIndex - 1];
      var ideaParams = {idea: {id: ideaId,
      quality: newQuality}};

      $.ajax({
        type: 'PATCH',
        url: '/api/v1/ideas/' + ideaId,
        data: ideaParams,
        success: function(){
          ideaRow.children('.quality-text').html(newQuality);
        }
      });
    }
  });
});
