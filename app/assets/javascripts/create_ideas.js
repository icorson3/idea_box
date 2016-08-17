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
        var listItem = "</br><td>" + newIdea.title + "</td>" + "<td>" + newIdea.body + "</td>" + "<td>" + newIdea.quality + "</td>" + '<td><button id="destroy-idea">Delete</button></td>';
        $("#each-idea").prepend(listItem)
      }
    })
  })
})
