
$(document).ready(function () {
  $("#btnall").click(function () {
    removeAll();
    showAll();
    
  });
  $("#btnkhakra").click(function () {
    removeAll();
    $(".khakra").show(2500);
  });


  $("#btndietpuff").click(function () {
    removeAll();
    $(".DP").show(2500);

  });
  $("#btnnamkeen").click(function () {
    removeAll();
    $(".NAMKEEN").show(2500);
  });


  $("#btnsweettooth").click(function () {
    removeAll();
    $(".ST").show(2500);
  });
  $("#btnnachoos").click(function () {
    removeAll();
    $(".nachoos").show(2500);
  });

  $("#btnothers").click(function () {
    removeAll();
    $(".others").show(2500);
  });

 
function removeAll()
{

$(".ST").hide(1000);
$(".khakra").hide(1000);
$(".DP").hide(1000);
$(".NAMKEEN").hide(1000);
$(".nachoos").hide(1000);
$(".others").hide(1000);
}

function showAll()
{

$(".ST").show(1000);
$(".khakra").show(1000);
$(".DP").show(1000);
$(".NAMKEEN").show(1000);
$(".nachoos").show(1000);
$(".others").show(1000);
}
});



