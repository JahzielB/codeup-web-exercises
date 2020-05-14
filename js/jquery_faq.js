"use strict";
(function ($) {
    $(document).ready(function () {
        $("dl").after("<button type='button' id='secrets'>Reveal Secrets</button>")
        $("#secrets").click(function () {
            // $(".invisible").css("visibility", "visible");
            $("dd").toggleClass("invisible");
            $(this).text($(this).text() === 'Reveal Secrets' ? 'Hide Secrets' : 'Reveal Secrets')
        })
        $("dt").click(function () {
           $(this).toggleClass("highlight");
        });
    })
})(jQuery)