
//Search Widget Calender
$('.input-daterange').datepicker({
  todayHighlight: true,
  startDate: new Date(),
  inputs: $('.range-start, .range-end'),
  numberOfMonths: 2
});

//Advance Option Arrow
$(".rtnFrmOtr").click(function() {
  $(".rtnFrmOtrForm").stop().slideToggle(500);
});
$(".prefferedAirs").click(function() {
  $(".prefferedAirSelect").stop().slideToggle(500);
});
// $(document).click(function (e) {
//   if (!$(e.target).hasClass(".rtnFrmOtr, .prefferedAirs") 
//       & $(e.target).parent().next(".rtnFrmOtrForm, .prefferedAirSelect").length === 0) 
//   {
//       $(".rtnFrmOtrForm, .prefferedAirSelect").hide(500);
//   }
// });

//Explore Air Box
$(".exploreAirPop, .exploreAirBoxClose").click(function() {
  $(".exploreAirBox").stop().slideToggle(500);
});





