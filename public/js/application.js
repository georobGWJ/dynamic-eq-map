$(document).ready(function () {
  // displayDefault();
  tabActivator();
});

var displayDefault = function() {
  // Find and display content of first (default) tab
  var start = $("li").first().children().first().attr("href");
    event.preventDefault();

    var onLoad = $.ajax({
      method: 'GET',
      url: start
      })

    onLoad.done(function(response) {
      $(".display-bottom").html(response);
      });
}

var tabActivator = function() {
  // Get tab id that is clicked on and make that <li> active
  $( ".tabs" ).click(function( event ) {
    // event.preventDefault();
    $(event.target).parent().addClass("active").siblings().removeClass("active");
  })
}


//     // AJAX CALLS SHOULD GO HERE!!!
//     tab_id = $(event.target).attr("href");
//     $tab_id = $( tab_id );
//
//     var showDataTab = function() {
//       var action = tab_id;
//
//       var showData = $.ajax({
//         method: 'GET',
//         url: action
//         })
//
//      showData.done(function(response) {
//        //console.log(response);
//        $(".display-bottom").html(response);
//        });
//   });
// }
// }
