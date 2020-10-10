// Set $(document).ready 
// jQuery detects a ready state
$(document).ready(function() {

    // This method gets current day
    today();
    // This method  creates a time block
    newTimeBlock();
    //This will update the time block to current time
    updateTimeBlocks();
    //Populates time block from local storage
    renderData();
    // Saves stored data to local storage
    $("button").on("click", saveData);
})

// This will use moment.js to get the current date and time format
function today() {
    var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDay);
}

function newTimeBlock() {
    var container = $(".container");
    var startOfDay = moment().startOf("day"); //
    var myTime = startOfDay.add(8, "h").format("h:mma");
    for (var i = 0; i < 12; i++) {
        // Creating new elements that some present in CSS
        var row = $("<div>");
        var hourSpan = $("<span>");
        var textSpan = $("<span>");
        var textArea = $("<textarea>");
        var button = $("<button>");
        var icon = $("<i>");

        // Setting jQuery artibutes method
        row.attr("value", i);
        row.attr("class", "row time-block"); // css calss
        hourSpan.attr("class", "hour"); // css class
        button.attr("class", "saveBtn"); //css class
        icon.attr("class", "far fa-save");
        textSpan.attr("class", "textSpan");
        textArea.attr("class");

        hourSpan.text(myTime);
        // Appending elements
        button.append(icon);
        textSpan.append(textArea);
        row.append(hourSpan);
        row.append(textSpan);
        row.append(button);
        // Change the time block
        startOfDay = startOfDay.add(1, "h");
        myTime = startOfDay.format("h:mma");
        container.append(row);

    };
};
//