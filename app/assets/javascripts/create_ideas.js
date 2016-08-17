$(document).ready(function() {
  $("#create-idea").on('click', function(){
    var ideaParams = { idea:{
                        title: $("#idea-title").val(),
                        body: $("#idea-body").val(),
                      }}
    $.ajax({
      type: 'POST',
      url: '/api/v1/ideas',
      data: ideaParams,
      success: function(newIdea) {
        var listItem = '<tr data-id=' + newIdea.id + ' id="each-idea">' + "<td>" + newIdea.title + "</td>" + "<td>" + truncateBody(newIdea.body) + "</td>" + "<td>" + newIdea.quality + "</td>" + '<td><input type="button" id="upvote-idea" value="Thumbs Up"><input type="button" id="downvote-idea" value="Thumbs Down"></td><td><input type="button" value="Delete" id="destroy-idea"></td>';
        $("#each-idea").prepend(listItem)
      }
    })
    $("#idea-title").val('')
    $("#idea-body").val('')
  })
})

function truncateBody(body){
  if (body.length > 100){
    // show the word closest to 100
  }
  return body
};
