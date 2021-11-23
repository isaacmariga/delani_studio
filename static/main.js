let what = (department) =>
    $("#" + department + "_items").click(function() {
        $("#" + department + "_text").toggle()
        $("#" + department + "_img").toggle()

    });

what("design");
what("development");
what("product");


//Portfolio images
var function1 = function(number) {
    $("#work" + number + "_items").hover(function() { enterFun(number) }, () => { leaveFun(number) });
}

var enterFun = (number) => {
    $("#work" + number + "_text").fadeIn(1000)
    console.log("Entered the hover state")
    $("#work" + number + "_img").stop().animate({ "opacity": " 0.5" });
}

var leaveFun = (number) => {
    $("#work" + number + "_text").fadeOut(1000)
    console.log("Left the hover state")
    $("#work" + number + "_img").stop().animate({ "opacity": " 1" });
}


$("#contact_btn").click(function() {
    alert("Kindly fill in the data in the next page")

});

function1("1");
function1("2");
function1("3");
function1("4");
function1("5");
function1("6");
function1("7");
function1("8");

//contact



$("#contact_btn").click(function() {
    alert("Kindly fill in the data in the next page")

});