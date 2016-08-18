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
        var listItem = "<tr data-id=" + newIdea.id + " id='idea'>" + "<td contenteditable='true' class='title-text'>" + newIdea.title + "</td>" + "<td contenteditable='true' class='body-text'>" + truncateBody(newIdea.body) + "</td>" + "<td class='quality-text'>" + newIdea.quality + "</td>" + "<td><input type='button' class='upvote-idea' value='Thumbs Up'><input type='button' class='downvote-idea' value='Thumbs Down'></td><td><input type='button' value='Delete' class='destroy-idea'></td></tr>";
        $("#each-idea").prepend(listItem)
        $("#idea-title").val("")
        $("#idea-body").val("")
      }
    })
  })
})

function truncateBody(body){
  body
  return body
};
