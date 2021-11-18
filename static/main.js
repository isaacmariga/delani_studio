$("#design_items").click(function() {
    $("#design_text").toggle()
    $("#design_img").toggle()
});

$("#development_items").click(function() {
    $("#development_text").toggle()
    $("#development_img").toggle()
});

$("#product_items").click(function() {
    $("#product_text").toggle()
    $("#product_img").toggle()
});

$("#work1_items").hover(mouseEnter, mouseLeave);

function mouseEnter() {
    $("#work1_text").fadeIn(1000)
};

function mouseLeave() {
    $("#work1_text").fadeOut(1000)
};