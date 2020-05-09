var currentDateAndTime = Date(Date.now()); // exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)`
var currentHour = new Date().getHours(); //Current hour in military time
var savedBtn = $(".btn");

$("#currentDay").text(currentDateAndTime);

for (var i = 9; i < 18; i++) {
  var currentHourText = localStorage.getItem("hour"+i);
  
  if (currentHourText !== null) {
    $("#textArea"+i).val(currentHourText);
  }
  if (currentHour > i) {
    $("#hour-" + i).addClass("past");
  } else if (currentHour === i) {
    $("#hour-" + i)
      .removeClass("past")
      .addClass("present");
  } else {
    $("#hour-" + i)
      .removeClass("past")
      .removeClass("present")
      .addClass("future");
  }
}

savedBtn.on("click", function () {
  console.log($(this).val());
  var time = $(this).val();
  localStorage.setItem(
    "hour" + time,
    $("#textArea" + time)
      .val()
      .trim()
  );
});

