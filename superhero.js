"use strict";

const $ = selector => document.querySelector(selector);

var theAd = 0; //counter
let timer = null;

var captionText = new Array("Superhero Image 1", "Superhero Image 2", "Superhero Image 3", "Superhero Image 4",
"Superhero Image 5", "Superhero Image 6");

var adImages = new Array("superhero1.png", 
"superhero2.png", "superhero3.png", "superhero4.png", "superhero5.png", "superhero6.png"); //array of images

var adURL = new Array("nytimes.com", "washingtonpost.com", "cnn.com", "dccc.edu", "wilmu.edu", "wcupa.edu");



function initBannerLink() {
    if ($("#adBanner").parentNode.tagName == "A") {
        $("#adBanner").parentNode.onclick = newLocation;
    }


}

function newLocation() {
    document.location.href = "https://www." + adURL[theAd];
    return false;
}

function rotate() {
    initBannerLink();
    
    $("#adBanner").src = adImages[theAd];
    $("#caption").textContent = captionText[theAd];
    theAd++;
    if (theAd == adImages.length) {
        theAd = 0;
    }

    if (theAd == captionText.length) {
        theAd = 0;
    }

    if (theAd == adURL.length) {
        theAd = 0;
    }


    timer = setTimeout(rotate, 3000);

    
    
}

document.addEventListener("DOMContentLoaded", () => {
rotate();

$("#start").addEventListener("click", () => {
    rotate();
    $("#start").disabled = true;
    $("#pause").disabled = false;
});

$("#pause").addEventListener("click", () => {
    clearTimeout(timer);
    $("#start").disabled = false;
    $("#pause").disabled = true;
});

});


