"use strict";

(function($){
    $(document).ready(function() {
        // alert("The DOM has finished loading!");

        // var firstH1 = $("#first-h1").html();
        // var firstH1 = $("#first-li").html();
        // alert(firstH1);

        // $(".codeup").css("border", "2px solid black");

        // $("li").css("font-size", "20px");
        // $("h1, p, li").css("background-color", "yellow");

        $("#first-h1").click(function () {
            $(this).css("background-color", "blue");
        });
        $(".paragraph").dblclick(function () {
            $(this).css("font-size", "18px");
        });
        $("li").hover(
            function () {
                $(this).css("color", "red")
            },
            function () {
                $(this).css("color", "black")
            }
        );
    });
})(jQuery);