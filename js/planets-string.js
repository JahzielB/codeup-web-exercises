(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var brPlanetsString = planetsArray.join('<br>')
    console.log(brPlanetsString);

    function makeArrayIntoStrList(arr) {
        var ulPlanetsString = '<ul>';
        arr.forEach(function (planet) {
            ulPlanetsString += '<li>' + planet + '</li>';
        });
        ulPlanetsString += '</ul>';
        return ulPlanetsString;
    }

    console.log(makeArrayIntoStrList(planetsArray));;

})();
