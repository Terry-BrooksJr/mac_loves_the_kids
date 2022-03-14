function checkSize() {
    $("body").width() >= 1020 ? $("#fmNav").show() : $("body").width() <= 1019 && $("#fmNav").hide();
    var t = $(".fmFooter").height() + 20;
    $("body").css("padding-bottom", t)
}
var rangeSlider = function () {
    var t = $(".fmRating"),
        i = $(".fmRatingSlider"),
        n = $(".fmRatingValue");
    t.each(function () {
        n.each(function () {
            var t = $(this).prev().attr("value");
            $(this).html(t)
        }), i.on("input", function () {
            $(this).next(n).html(this.value)
        }), i.on("change", function () {
            $(this).next(n).html(this.value)
        })
    })
};
$(window).load(function () {
    rangeSlider()
}), "function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function (t) {
    return t.length > 0 && this.substring(this.length - t.length, this.length) === t
}), $(window).load(function () {
    var t, i, n, e;
    $(".fmWave").click(function (h) {
        0 === $(this).find(".ink").length && $(this).prepend("<span class='ink'></span>"), t = $(this).find(".ink"), t.removeClass("animate"), t.height() || t.width() || (i = Math.max($(this).outerWidth(), $(this).outerHeight()), t.css({
            height: i,
            width: i
        })), n = h.pageX - $(this).offset().left - t.width() / 2, e = h.pageY - $(this).offset().top - t.height() / 2, t.css({
            top: e + "px",
            left: n + "px"
        }).addClass("animate")
    }), $("#fmNavToggle").click(function () {
        $("#fmNav").toggle()
    }), checkSize()
}), $(window).resize(checkSize);