"use strict";
(function ($) {
    $(document).ready(function () {

        $("dd").addClass("invisible");

        $("#secrets").click(function () {
            $("dd").toggleClass("invisible");
            $(this).text($(this).text() === 'Reveal Secrets' ? 'Hide Secrets' : 'Reveal Secrets')
        })

        $("dt").click(function () {
           $(this).toggleClass("highlight");
        });

        $("#more-secrets").click(function () {
            $("ul").each(function(){
                $(this).children().last().toggleClass("highlight");
            });
        });

        $("h3").click(function () {
            $(this).next().each(function (){
                $(this).css("font-weight", "bold");
            });
        });

        $("li").click(function () {
            $(this).parent().each(function(){
                $(this).children().first().css("color", "blue");
            });
        });
    });
})(jQuery)