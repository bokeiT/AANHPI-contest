"use strict";

let item = 1;
let scientists = 1
let thesis = false

$(".aoulogo").hide();
$(".hidden").hide();
$(".credits").hide();
$(".instructions").hide();

function changeLeftArrow() {
    document.images["l-button"].src = "links-and-images/images/aanhpi contest left arrow mouseover.png";
    return true;
}

function changeRightArrow() {
    document.images["r-button"].src = "links-and-images/images/aanhpi contest right arrow mouseover.png";
    return true;
}

function changeLeftArrowBack() {
    document.images["l-button"].src = "links-and-images/images/aanhpi contest left arrow.png";
    return true;
}
function changeRightArrowBack() {
    document.images["r-button"].src = "links-and-images/images/aanhpi contest right arrow.png";
    return true;
}

function back() {
    document.body.style.backgroundColor = "#322E39";
    $(".gradient").fadeIn();
    $(".main-image-position").fadeIn();
    $(".left-arrow-position").fadeIn();
    $(".right-arrow-position").fadeIn();
    $(".little-scientists").fadeIn();
    $(".hidden").fadeIn();
    $(".exit").fadeOut();
    $(".instructions").fadeOut();
    $(".intro").fadeOut();
    $(".introInstructions").fadeOut();
    $("credits").fadeOut();
    $("instructions").fadeOut();
    $("signature").fadeIn();
    item = 0
    nextItem();
}

function nextItem() {
    $("#gradient").hide();
    item = item + 1;
    document.images["main-image"].src = `links-and-images/images/aanhpi contest person ${item}.png`;
    if (item > 8 && thesis) {
        item = 0
        nextItem();
    }
    if (item > 1 && item < 4 || item > 7) scientists = 1;
    if (item > 3 && item < 5 || item > 6 && item < 8) scientists = 2;
    if (item > 4 && item < 7) scientists = 3;
    document.images["littleScientists"].src = `links-and-images/images/aanhpi contest little scientists ${scientists}.png`;
    document.images["gradient"].src = `links-and-images/images/aanhpi contest gradient ${scientists}.png`;
    $("#gradient").fadeIn();
    if (item > 8 && !thesis) {
        if (item > 8) item = 1
        thesis = true
        $(".gradient").fadeOut();
        $(".main-image-position").fadeOut();
        $(".left-arrow-position").fadeOut();
        $(".right-arrow-position").fadeOut();
        $(".little-scientists").fadeOut();
        document.body.style.backgroundColor = "black";
        setTimeout(function () { $(".text-container").fadeIn().css("display", "block"); }, 1000);
        setTimeout(function () { $(".exit").fadeIn().css("display", "block"); }, 3000);
        setTimeout(function () { $(".aoulogo").fadeIn().css("display", "block"); }, 2000);
        setTimeout(function () { $(".credits").fadeIn().css("display", "block"); }, 2500);
        setTimeout(function () { $(".instructions").fadeIn().css("display", "block"); }, 3000);
    }

}
function previousItem() {
    $("#gradient").hide();
    item = item - 1;
    document.images["main-image"].src = `links-and-images/images/aanhpi contest person ${item}.png`;
    if (item > 1 && item < 4 || item > 7) scientists = 1;
    if (item > 3 && item < 5 || item > 6 && item < 8) scientists = 2;
    if (item > 4 && item < 7) scientists = 3;
    document.images["littleScientists"].src = `links-and-images/images/aanhpi contest little scientists ${scientists}.png`;
    document.images["gradient"].src = `links-and-images/images/aanhpi contest gradient ${scientists}.png`;
    $("#gradient").fadeIn();
}