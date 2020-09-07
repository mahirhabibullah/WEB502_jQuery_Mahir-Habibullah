  $(document).ready(function(){
      $("button").click(function(){
        var boxWidth = $("#boxDiv").width();
        var boxHeight = $("#boxDiv").height();
        $("#width").html("Width: " + boxWidth + ", " + "Height: " + boxHeight);
        boxWidth = $("#boxDiv").innerWidth();
        boxHeight = $("#boxDiv").innerHeight();
        $("#innerwidth").html("Inner Width: " + boxWidth + ", " + "Inner Height: " + boxHeight);
        boxWidth = $("#boxDiv").outerWidth();
        boxHeight = $("#boxDiv").outerHeight();
        $("#outerwidth").html("Outer Width: " + boxWidth + ", " + "Outer Height: " + boxHeight);
        boxWidth = $("#boxDiv").outerWidth(true);
        boxHeight = $("#boxDiv").outerHeight(true);
        $("#outerwidthtrue").html("Outer Width(true): " + boxWidth + ", " + "Outer Height(true): " + boxHeight);
      });
  });
