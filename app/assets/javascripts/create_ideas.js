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
        var listItem = "<h2>" + newIdea.title + "</h2>" + "<li>" + newIdea.body + "</li>" + "<li>" + newIdea.quality + "</li>";
        $("#each-idea").append(listItem)
      }
    })
  })
})
