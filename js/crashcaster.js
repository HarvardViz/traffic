var crashcaster = c$ = (function (crashcaster, $, moment) {

    crashcaster = {
        version: "0.0.1",
        init: init,
        testCall: testCall,
        updateClock: updateClock,
        showLocation: showLocation
    };
    
    
    function testCall(v) {
        console.log(v);
    };


    function init(screen) {

        console.log("screen=" + screen);

        switch (screen) {
            case "forecast":
                console.log("Forecast screen");
                showLocation();
                updateClock();
                timedUpdate();
                break;
            default:
                console.log("Home screen");
                showLocation();
                updateClock();
                timedUpdate();
        }

    }

    // For future use to set various locations
    function showLocation() {

        var city = "Cambridge";
        var state = "MA";

        $('#current-location').text(city + ", " + state);

    }

    // Show the current date and time
    function updateClock() {
        var now = moment();
        $('#current-datetime').text(now.format('llll'));
    }


    // Run the update tick
    function timedUpdate() {
        updateClock();
        setTimeout(timedUpdate, 1000);
    }

    timedUpdate();


    return crashcaster;

})(typeof crashcaster !== 'undefined' && crashcaster || this, $, moment);










