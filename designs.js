
function makeGrid() {

    
    var table = $("#pixel_canvas");
    var cols = $("#input_width").val();
    var rows = $("#input_height").val();
  
    table.children().remove();
    for (var i = 0; i < rows; i++) {
      table.append("<tr></tr>");
      for (var j = 0; j < cols; j++)
        table.children().last().append("<td></td>");
    }
  
    table.on("click", "td", function() {
      var color = $("input[type='color']").val();
    $(this).attr("bgcolor", color);
    });
  }
  
  $("input[type='submit']").click(function(e) {
    e.preventDefault();
    makeGrid();
  });
  