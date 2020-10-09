// Set $(document).ready 
// jQuery detects a ready state
$(document).ready(function() {

    // This method gets current day
    DateNow();
    // This method  creates a time block
    newTimeBlock();
    //This will update the time block to current time
    updateTimeBlock();
    //Populates time block from local storage
    renderData();
})