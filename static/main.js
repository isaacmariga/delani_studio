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


//Portfolio images
$("#work1_items").hover(w1Enter, w1Leave);

function w1Enter() {
    $("#work1_text").fadeIn(1000)
    $("#work1_img").stop().animate({ "opacity": " 0.5" });
};

function w1Leave() {
    $("#work1_text").fadeOut(1000)
    $("#work1_img").stop().animate({ "opacity": " 1" });

};
$("#work2_items").hover(w2Enter, w2Leave);

function w2Enter() {
    $("#work2_text").fadeIn(1000)
    $("#work2_img").stop().animate({ "opacity": " 0.5" });
};

function w2Leave() {
    $("#work2_text").fadeOut(1000)
    $("#work2_img").stop().animate({ "opacity": " 1" });

};

$("#work3_items").hover(w3Enter, w3Leave);

function w3Enter() {
    $("#work3_text").fadeIn(1000)
    $("#work3_img").stop().animate({ "opacity": " 0.5" });
};

function w3Leave() {
    $("#work3_text").fadeOut(1000)
    $("#work3_img").stop().animate({ "opacity": " 1" });

};

$("#work4_items").hover(w4Enter, w4Leave);

function w4Enter() {
    $("#work4_text").fadeIn(1000)
    $("#work4_img").stop().animate({ "opacity": " 0.5" });
};

function w4Leave() {
    $("#work4_text").fadeOut(1000)
    $("#work4_img").stop().animate({ "opacity": " 1" });

};
$("#work5_items").hover(w5Enter, w5Leave);

function w5Enter() {
    $("#work5_text").fadeIn(1000)
    $("#work5_img").stop().animate({ "opacity": " 0.5" });
};

function w5Leave() {
    $("#work5_text").fadeOut(1000)
    $("#work5_img").stop().animate({ "opacity": " 1" });

};
$("#work6_items").hover(w6Enter, w6Leave);

function w6Enter() {
    $("#work6_text").fadeIn(1000)
    $("#work6_img").stop().animate({ "opacity": " 0.5" });
};

function w6Leave() {
    $("#work6_text").fadeOut(1000)
    $("#work6_img").stop().animate({ "opacity": " 1" });

};
$("#work7_items").hover(w7Enter, w7Leave);

function w7Enter() {
    $("#work7_text").fadeIn(1000)
    $("#work7_img").stop().animate({ "opacity": " 0.5" });
};

function w7Leave() {
    $("#work7_text").fadeOut(1000)
    $("#work7_img").stop().animate({ "opacity": " 1" });

};
$("#work8_items").hover(w8Enter, w8Leave);

function w8Enter() {
    $("#work8_text").fadeIn(1000)
    $("#work8_img").stop().animate({ "opacity": " 0.5" });
};

function w8Leave() {
    $("#work8_text").fadeOut(1000)
    $("#work8_img").stop().animate({ "opacity": " 1" });

};

//contact



$("#contact_btn").click(function() {
    alert("Kindly fill in the data in the next page")

});