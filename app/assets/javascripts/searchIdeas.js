$( document ).ready(function() {
  $("#search-bar").on("keyup", function (){
    var currentSearch = this.value.toLowerCase();
    $('.idea').each(function (_index, idea) {
      $idea = $(idea);
      if ( $idea.children(".title-text").text().toLowerCase().indexOf(currentSearch) !== -1 ) {
        $idea.show();
      } else if ( $idea.children(".body-text").text().toLowerCase().indexOf(currentSearch) !== -1 ){
        $idea.show();
      }
      else {
        $idea.hide();
      }
    });
  });

});
