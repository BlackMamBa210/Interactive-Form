// Set focus to the first text field
$('#name').focus();

// I've added the text field on line 40-43 in index.html
// Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".
$('#other-job').hide()

// For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
// When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.
const colors = $('#color');
const labelColors = $('#color').prev();
console.log(colors, labelColors)

// https://teamtreehouse.com/library/what-is-traversal
const selector_1 = $('#color option').eq(0);
const selector_2 = $('#color option').eq(1);
const selector_3 = $('#color option').eq(2);

console.log(selector_1, selector_2, selector_3)