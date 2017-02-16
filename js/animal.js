$(document).ready(function() {


   $("#button").click(function(){
     var selection = $("input:radio[name=looks]:checked").val();
    //  var stripes = $("input:radio[#stripes]:checked").val();
    //  var scales =$("input:radio[#scales]:checked").val();
      if (selection === "spots") {
        $('.giraffe').show();
      } else if (selection === "stripes") {
        $('.zebra').show();
      } else {
        $('.armadillo').show();
      }
  event.preventDefault();
    });
});
