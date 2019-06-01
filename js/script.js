// Set focus to the first text field
$("#name").focus();

// I've added the text field on line 40-43 in index.html
// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".

$("#other-title").hide();

const title = $('#title')
const otherTitle = $('#other-title')

title.on("change", function() {
    if ($(this).val() === "other") {
        otherTitle.show();
    } else {
        otherTitle.hide();
    }
});




// set constants
const PUNS = "js puns";
const HEARTS = "heart js";

// For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
// When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.
const colors = $("#color");
const labelColors = $("#color").prev();
// console.log(colors, labelColors)

// https://teamtreehouse.com/library/what-is-traversal
// selecting value within the options link https://stackoverflow.com/questions/13343566/set-select-option-selected-by-value
// change method link https://www.w3schools.com/jquery/event_change.asp
// switch function link https://www.w3schools.com/js/js_switch.asp
const cornflowerblue = $("#color option").eq(0);
const darkslategrey = $("#color option").eq(1);
const gold = $("#color option").eq(2);
const tomato = $("#color option").eq(3);
const steelblue = $("#color option").eq(4);
const dimgrey = $("#color option").eq(5);

/// dropDownVal: "default" | "puns" | "hearts"
const togglePuns = dropDownVal => {
    switch (dropDownVal) {
        case "puns":
            $(tomato).hide();
            $(steelblue).hide();
            $(dimgrey).hide();
            $(cornflowerblue).show();
            $(darkslategrey).show();
            $(gold).show();
            break;
        case "hearts":
            $(tomato).show();
            $(steelblue).show();
            $(dimgrey).show();
            $(cornflowerblue).hide();
            $(darkslategrey).hide();
            $(gold).hide();
            break;
        default:
            $(tomato).show();
            $(steelblue).show();
            $(dimgrey).show();
            $(cornflowerblue).show();
            $(darkslategrey).show();
            $(gold).show();
            break;
    }
};

$("#design").change(function() {
    const designVal = $("#design").val();
    console.log(designVal);
    if (designVal === PUNS) {
        togglePuns("puns");
    } else if (designVal === HEARTS) {
        togglePuns("hearts");
    } else {
        togglePuns();
    }
});

// ”Register for Activities” section
// Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time 
// -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
// When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
// As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", 
// then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.

const REGISTEREDACTIVITIES = "activities";

const toggleBoxes = checkBoxes => {
    switch (checkBoxes) {
        case "registeredactivities":
            $()
    }
}