// Set $(document).ready 
// jQuery detects a ready state
$(document).ready(function() {

    // This method gets current day
    today();
    // This method  creates a time block
    newTimeBlock();
    //This will update the time block to current time
    updateTimeRow();
    //Populates time block from local storage
    renderData();
    // Saves stored data to local storage
    $("button").on("click", saveData);
})

// This will use moment.js to get the current date and time format
function today() {
    let currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(currentDay);
}
// This will update the ti,e block t current time
function newTimeBlock() {
    let container = $(".container");
    let startOfDay = moment().startOf("day"); //
    let myTime = startOfDay.add(8, "h").format("h:mma");
    for (let i = 0; i < 10; i++) {
        // Creating new elements that some present in CSS
        let row = $("<div>");
        let hourSpan = $("<span>");
        let textSpan = $("<span>");
        let textArea = $("<textarea>");
        let button = $("<button>");
        let icon = $("<i>");

        // Setting jQuery artibutes method
        row.attr("value", i);
        row.attr("class", "row time-block"); // css calss
        hourSpan.attr("class", "hour col-2"); // css class
        button.attr("class", "saveBtn col-2"); //css class
        icon.attr("class", "far fa-save");
        textSpan.attr("class", "textSpan col-8");
        textArea.attr("class", "col-12 h-100");

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
//This => will update CSS color of the rows based on the time of the day logic
function updateTimeRow() {
    let timeRow = $(".textSpan");
    let startOfDay = moment().startOf("day");
    let startOfDay2 = moment().startOf("day");
    // 
    let time = startOfDay.add(8, "h");
    let time2 = startOfDay2.add(9, "h");

    //This code block will loop tru check the current time and display and assign the colors accordingly
    timeRow.each(function() {
        time = startOfDay.add(1, "h");
        time2 = startOfDay2.add(1, "h");
        let timeCheck = moment(time).isBefore(); //time check
        let timeNow = moment().isBetween(time, time2);

        // jQuery add classes logic
        if (timeCheck && !timeNow) {
            $(this).addClass("past"); // css class
        } else if (timeNow) {
            $(this).addClass("present"); // css class
        } else {
            $(this).addClass("future"); // css class
        };

    });
};
// This function will loop tru
function renderData() {
    for (let i = 0; i < $(".row").length; i++) {
        $("div.row").find("textarea").get(i).value = getLocalStorage("dataOb" + i);
    };
};
// This will grab the local storage item an empty string or the stored value
function getLocalStorage(item) {
    if (localStorage.getItem(item) === null) {
        return "";
    };
    // JSON will parse the local storage item that is currently selected
    let output = JSON.parse(localStorage.getItem(item));
    return output.textarea;
};
// This function will store the value into the local storage
function dataSaved(event) {
    event.preventDefault();
    textarea = $(this).parent().find("textarea").get(0).value;
    dataNum = $(this).parent().attr("value")
    dataOb = {
        "textarea": textarea
    };
    return localStorage.setItem("dataOb" + dataNum, JSON.stringify(dataOb));

};