/*************NAME*************/

// Set focus to the first text field
$("#name").focus();


/*************JOB ROLE*************/

// I've added the text field on line 40-43 in index.html
// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".
$("#other-title").hide();

const $title = $('#title')
const $otherTitle = $('#other-title')

$title.on("change", function() {
    if ($(this).val() === "other") {
        $otherTitle.show();
    } else {
        $otherTitle.hide();
    }
});


/*************T-shirt*************/

// set constants
const PUNS = "js puns";
const HEARTS = "heart js";
const $colors = $("#color");
const $labelColors = $("#color").prev();

// https://teamtreehouse.com/library/what-is-traversal
// selecting value within the options link https://stackoverflow.com/questions/13343566/set-select-option-selected-by-value
// change method link https://www.w3schools.com/jquery/event_change.asp
// switch function link https://www.w3schools.com/js/js_switch.asp
const $cornflowerblue = $("#color option").eq(0);
const $darkslategrey = $("#color option").eq(1);
const $gold = $("#color option").eq(2);
const $tomato = $("#color option").eq(3);
const $steelblue = $("#color option").eq(4);
const $dimgrey = $("#color option").eq(5);


// Hide the colors label
$("#colors-js-puns").hide();

// dropDownVal: "default" | "puns" | "hearts"
const togglePuns = dropDownVal => {
    switch (dropDownVal) {
        case "puns":
            $($tomato).hide();
            $($steelblue).hide();
            $($dimgrey).hide();
            $($cornflowerblue).show();
            $($darkslategrey).show();
            $($gold).show();
            $("#colors-js-puns").show();
            break;
        case "hearts":
            $($tomato).show();
            $($steelblue).show();
            $($dimgrey).show();
            $($cornflowerblue).hide();
            $($darkslategrey).hide();
            $($gold).hide();
            $("#colors-js-puns").show();
            break;
        default:
            $($tomato).show();
            $($steelblue).show();
            $($dimgrey).show();
            $($cornflowerblue).show();
            $($darkslategrey).show();
            $($gold).show();
            $("#colors-js-puns").hide();
            break;
    }
};

// toggle tabs
$("#design").on("change", function() {
    let $designVal = $("#design").val();
    if ($designVal === PUNS) {
        togglePuns("puns");
    } else if ($designVal === HEARTS) {
        togglePuns("hearts");
    } else {
        togglePuns();
    }
});



/*************REGISTERED ACTIVITIES*************/

// create variables selecting activities in the DOM
const $all = $("[name='all']")
const $frameWorks = $("[name='js-frameworks']");
const $libs = $("[name='js-libs']");
const $express = $("[name='express']");
const $node = $("[name='node']");
const $tools = $("[name='build-tools']")
const $npm = $("[name='npm']")
const $registeredActivities = $(".activities");

// show and add total cost of selected activities
let totalCost = 0;

const $displayedCost = $(`<div id="cost">Total Cost: $ <span class = "cost">${totalCost}</span></div>`);
$($registeredActivities).append($displayedCost);
$($displayedCost).show();

// create functions to disable and enable selected checkboxes
// create functions to add and subtract the total costs
$all.on("change", function() {
    let $allState = $(this).prop("checked");
    if ($allState) {
        totalCost += 200;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
    } else {
        totalCost -= 200;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
    }
});
$frameWorks.on("change", function() {
    let $frameWorksState = $(this).prop("checked");
    if ($frameWorksState) {
        totalCost += 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
        $express.attr("disabled", true);
    } else {
        totalCost -= 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
        $express.attr("disabled", false);
    }
});

$express.on("change", function() {
    let $espressState = $(this).prop("checked");
    if ($espressState) {
        totalCost += 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
        $frameWorks.attr("disabled", true);
    } else {
        totalCost -= 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
        $frameWorks.attr("disabled", false);
    }
});

$libs.on("change", function() {
    let $libs = $(this).prop("checked");
    if ($libs) {
        totalCost += 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
        $node.attr("disabled", true);
    } else {
        totalCost -= 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
        $node.attr("disabled", false)
    }
});

$node.on("change", function() {
    let $node = $(this).prop("checked");
    if ($node) {
        totalCost += 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
        $libs.attr("disabled", true);
    } else {
        totalCost -= 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
        $libs.attr("disabled", false);
    }
});

$tools.on("change", function() {
    let $toolsState = $(this).prop("checked");
    if ($toolsState) {
        totalCost += 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
    } else {
        totalCost -= 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
    }
});

$npm.on("change", function() {
    let $npmState = $(this).prop("checked");
    if ($npmState) {
        totalCost += 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
    } else {
        totalCost -= 100;
        $displayedCost.find(".cost").text(totalCost);
        $displayedCost.show();
    }
});