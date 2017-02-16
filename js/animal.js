$(document).ready(function() {


   $("#button").click(function(){
     var selection = $("input:radio[name=looks]:checked").val();
    //  var stripes = $("input:radio[#stripes]:checked").val();
    //  var scales =$("input:radio[#scales]:checked").val();
      if (selection === "spots") {
        $('.zebra').hide();
        $('.armadillo').hide();
        $('.giraffe').show();
      } else if (selection === "stripes") {
        $('.giraffe').hide();
        $('.armadillo').hide();
        $('.zebra').show();
      } else {
        $('.giraffe').hide();
        $('.zebra').hide();
        $('.armadillo').show();
      }
  event.preventDefault();
    });
});
