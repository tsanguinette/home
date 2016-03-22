//Ligatures
$(".ligabutton").click(function (e) {
    e.stopPropagation();
    $(".ligaon").toggleClass('ligaoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.ligaon').length){
        $(".ligaon").removeClass('ligaoff');
    }
});

//Discrentionary Ligatures
$(".dligbutton").click(function (e) {
    e.stopPropagation();
    $(".dligon").toggleClass('dligoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.dligon').length){
        $(".dligon").removeClass('dligoff');
    }
});

//Contextual Ligatures
$(".cligbutton").click(function (e) {
    e.stopPropagation();
    $(".cligon").toggleClass('cligoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.cligon').length){
        $(".cligon").removeClass('cligoff');
    }
});

//Historical Ligatures
$(".hligbutton").click(function (e) {
    e.stopPropagation();
    $(".hligon").toggleClass('hligoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.hligon').length){
        $(".hligon").removeClass('hligoff');
    }
});

//Kerning
$(".kernbutton").click(function (e) {
    e.stopPropagation();
    $(".kernon").toggleClass('kernoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.kernon').length){
        $(".kernon").removeClass('kernoff');
    }
});

//CASE
$(".casebutton").click(function (e) {
    e.stopPropagation();
    $(".caseon").toggleClass('caseoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.caseon').length){
        $(".caseon").removeClass('caseoff');
    }
});

//Small caps
$(".smcpbutton").click(function (e) {
    e.stopPropagation();
    $(".smcpon").toggleClass('smcpoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.smcpon').length){
        $(".smcpon").removeClass('smcpoff');
    }
});

//Small caps from Capitals
$(".c2scbutton").click(function (e) {
    e.stopPropagation();
    $(".c2scon").toggleClass('c2scoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.c2scon').length){
        $(".c2scon").removeClass('c2scoff');
    }
});

//Old-style to Linning
$(".numbutton").click(function (e) {
    e.stopPropagation();
    $(".onumon").toggleClass('lnumon');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.onumon').length){
        $(".onumon").removeClass('lnumon');
    }
});

//Tabular Numbers
$(".tnumbutton").click(function (e) {
    e.stopPropagation();
    $(".tnumon").toggleClass('tnumoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.tnumon').length){
        $(".tnumon").removeClass('tnumoff');
    }
});

//Fractions
$(".fracbutton").click(function (e) {
    e.stopPropagation();
    $(".fracon").toggleClass('fracoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.fracon').length){
        $(".fracon").removeClass('fracoff');
    }
});

//Swash
$(".swshbutton").click(function (e) {
    e.stopPropagation();
    $(".swshon").toggleClass('swshoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.swshon').length){
        $(".swshon").removeClass('swshoff');
    }
});

//Subscript
$(".subsbutton").click(function (e) {
    e.stopPropagation();
    $(".subson").toggleClass('subsoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.subson').length){
        $(".subson").removeClass('subsoff');
    }
});

//Superscript
$(".supsbutton").click(function (e) {
    e.stopPropagation();
    $(".supson").toggleClass('supsoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.supson').length){
        $(".supson").removeClass('supsoff');
    }
});

//SINF
$(".sinfbutton").click(function (e) {
    e.stopPropagation();
    $(".sinfon").toggleClass('sinfoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.sinfon').length){
        $(".sinfon").removeClass('sinfoff');
    }
});

//Ordinals
$(".ordnbutton").click(function (e) {
    e.stopPropagation();
    $(".ordnon").toggleClass('ordnoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.ordnon').length){
        $(".ordnon").removeClass('ordnoff');
    }
});

//Denominators
$(".dnombutton").click(function (e) {
    e.stopPropagation();
    $(".dnomon").toggleClass('dnomoff');
});

$(document).click(function (e) {
    if(!$(e.target).closest('.dnomon').length){
        $(".dnomon").removeClass('dnomoff');
    }
});