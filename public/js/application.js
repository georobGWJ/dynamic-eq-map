$(document).ready(function () {
  displayDefault();
  tabListener();
  // event.preventDefault();

  // Hide all of the tabs and then show ONLY the one that you clicked on
  // $(".tab-content").hide();
  // $tab_id.show();
});

var displayDefault = function() {
  // Find and display content of first (default) tab
  var start = $("li").first().children().first().attr("href");
  $( start ).show();
}

var tabListener = function() {
  // Get tab id that is clicked on and make that <li> active
  $( ".tabs" ).click(function( event ) {
    event.preventDefault();
    $(event.target).parent().addClass("active").siblings().removeClass("active");

    // AJAX CALLS SHOULD GO HERE!!!
    tab_id = $(event.target).attr("href");
    $tab_id = $( tab_id );
  });
}
