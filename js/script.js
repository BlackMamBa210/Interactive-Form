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

// ”Register for Activities” section
// As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", 
// then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.

// create variables selecting activities in the DOM
const $frameWorks = $("[name='js-frameworks']");
const $libs = $("[name='js-libs']");
const $express = $("[name='express']");
const $node = $("[name='node']");


// create functions to disable and enable selected checkboxes
$frameWorks.on("change", function() {
    let $frameWorksState = $(this).prop("checked");
    if ($frameWorksState) {
        $express.attr("disabled", true);
    } else {
        $express.attr("disabled", false);
    }
});

$express.on("change", function() {
    let espressState = $(this).prop("checked");
    if (espressState) {
        $frameWorks.attr("disabled", true);
    } else {
        $frameWorks.attr("disabled", false);
    }
});

$libs.on("change", function() {
    let $libs = $(this).prop("checked");
    if ($libs) {
        $node.attr("disabled", true)
    } else {
        $node.attr("disabled", false)
    }
});

$node.on("change", function() {
    let $node = $(this).prop("checked");
    if ($node) {
        $libs.attr("disabled", true)
    } else {
        $libs.attr("disabled", false)
    }
});