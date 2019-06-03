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


/*************T-SHIRT*************/

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
            $($colors).val("cornflowerblue")
            $("#colors-js-puns").show();
            break;
        case "hearts":
            $($tomato).show();
            $($steelblue).show();
            $($dimgrey).show();
            $($cornflowerblue).hide();
            $($darkslategrey).hide();
            $($gold).hide();
            $($colors).val("tomato")
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

const $displayCost = $(`<div id="cost">Total Cost: $ <span class="cost">${totalCost}</span></div>`);
$($registeredActivities).append($displayCost);
$($displayCost).show();

// create functions to disable and enable selected checkboxes
// create functions to add and subtract the total costs
$all.on("change", function() {
    let $allState = $(this).prop("checked");
    if ($allState) {
        totalCost += 200;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
    } else {
        totalCost -= 200;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
    }
});
$frameWorks.on("change", function() {
    let $frameWorksState = $(this).prop("checked");
    if ($frameWorksState) {
        totalCost += 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
        $express.attr("disabled", true);
    } else {
        totalCost -= 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
        $express.attr("disabled", false);
    }
});

$express.on("change", function() {
    let $espressState = $(this).prop("checked");
    if ($espressState) {
        totalCost += 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
        $frameWorks.attr("disabled", true);
    } else {
        totalCost -= 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
        $frameWorks.attr("disabled", false);
    }
});

$libs.on("change", function() {
    let $libs = $(this).prop("checked");
    if ($libs) {
        totalCost += 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
        $node.attr("disabled", true);
    } else {
        totalCost -= 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
        $node.attr("disabled", false)
    }
});

$node.on("change", function() {
    let $node = $(this).prop("checked");
    if ($node) {
        totalCost += 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
        $libs.attr("disabled", true);
    } else {
        totalCost -= 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
        $libs.attr("disabled", false);
    }
});

$tools.on("change", function() {
    let $toolsState = $(this).prop("checked");
    if ($toolsState) {
        totalCost += 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
    } else {
        totalCost -= 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
    }
});

$npm.on("change", function() {
    let $npmState = $(this).prop("checked");
    if ($npmState) {
        totalCost += 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
    } else {
        totalCost -= 100;
        $displayCost.find(".cost").text(totalCost);
        $displayCost.show();
    }
});

/*************PAYMENTS*************/

// create variables selecting the payment options
const CREDIT_CARD = "credit card"
const PAYPAL = "paypal"
const BITCOIN = "bitcoin"
const $creditCardDiv = $("#credit-card");
const $payPalDiv = $("div p").eq(0).hide();
const $bitCoinDiv = $("div p").eq(1).hide();
const $selectMethod = $("#payment option").eq(0);
const $creditCard = $("#payment option").eq(1);
const $payPal = $("#payment option").eq(2);
const $bitCoin = $("#payment option").eq(3);
const $submit = $("#submit");

// dropDownVal: "default | "credit card" | "paypal" | "bitcoin"
const togglePayments = dropDownVal => {
    switch (dropDownVal) {
        case "credit card":
            $creditCard.show();
            $payPal.show();
            $bitCoin.show();
            $creditCardDiv.show();
            $selectMethod.hide();
            $bitCoinDiv.hide();
            $payPalDiv.hide();
            break;
        case "paypal":
            $payPal.show();
            $bitCoin.show();
            $creditCard.show();
            $payPalDiv.show();
            $selectMethod.hide();
            $bitCoinDiv.hide();
            $creditCardDiv.hide();
            break;
        case "bitcoin":
            $bitCoin.show();
            $creditCard.show();
            $payPal.show();
            $bitCoinDiv.show();
            $selectMethod.hide();
            $creditCardDiv.hide();
            $payPalDiv.hide();
            break;
        default:
            $creditCard.show();
            $payPal.show();
            $bitCoin.show();
            $selectMethod.hide();
            $bitCoinDiv.hide();
            $payPalDiv.hide();
            break;
    }
}

// toggle payments
$("#payment").on("change", function() {
    let $paymentVal = $("#payment").val();
    if ($paymentVal === CREDIT_CARD) {
        togglePayments("credit card");
    } else if ($paymentVal === PAYPAL) {
        togglePayments("paypal");
    } else if ($paymentVal === BITCOIN) {
        togglePayments("bitcoin");
    } else {
        togglePayments();
    }
});

/*************FORM VALIDATION*************/

// this function makes sure that at least one checkbox is checked to submit
$(function() {
    var requiredCheckboxes = $('.activities :checkbox[required]');
    requiredCheckboxes.change(function() {
        if (requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        } else {
            requiredCheckboxes.attr('required', 'required');
        }
    });
});

$submit.on('click', function(event) {
    if ($("#payment").val() === "select_method") {
        event.preventDefault();
    }
});

// see lines 24, 28, 41, 82, 107, 113, and 119 in index.html