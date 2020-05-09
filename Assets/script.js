
var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)`
var currentHour = new Date().getHours();//Current hour in military time

console.log("working");


$("#currentDay").text(currentDateAndTime);

function updateHours() {

    for (var i = 9; i < 18; i++) {
        if (currentHour > i) {
            $("#hour-" + i).addClass("past")
        }
        else if (currentHour === i) {
            $("#hour-" + i).removeClass("past").addClass("present")
        }
        else {
            $("#hour-" + i).removeClass("past").removeClass("present").addClass("future")
        }
        
    }
}

updateHours();

$(".btn").on("click", function(){
    var time = $(this).val();
    console.log(time);
    var storeInfo = $("#textArea" + time).val().trim()
    localStorage.setItem("storeInfo");
})

// function init() {
//     for
// }

//save btn to local storage