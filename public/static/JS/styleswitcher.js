import $ from "$";
$(document).ready(function () {
  $("#hideSwitcher, #showSwitcher").click(function () {
    var _identifier = "#showSwitcher";
    if ($("#showSwitcher").is(":visible")) {
      $("#switcher").animate({ "margin-left": "0px" }, 500).show();
      createCookie("switcher_visible", "true", 365);
    } else {
      $("#showSwitcher").show().animate({ "margin-left": "0" }, 500);
      createCookie("switcher_visible", "false", 365);
    }

    $(_identifier).animate({ "margin-left": "-500px" }, 500, function () {
      $(this).hide();
    });
  });

  // REMOVE # FROM URL
  $("a[href='#']").on("click", function (e) {
    e.preventDefault();
  });
});

function setActiveStyleSheet(title) {
  var i, a;
  for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
    if (
      a.getAttribute("rel").indexOf("style") !== -1 &&
      a.getAttribute("title")
    ) {
      a.disabled = true;
      if (a.getAttribute("title") === title) {
        a.disabled = false;
      }
    }
  }

  // DARK SKIN
  var color_skin = readCookie("color_skin");
  if (color_skin === "dark") {
    $("#css_dark_skin").remove();
    $("head").append(
      '<link id="css_dark_skin" href="assets/css/layout-dark.css" rel="stylesheet" type="text/css" title="dark" />'
    );
    $("#is_dark").trigger("click");
    $("a.logo img").attr("src", "assets/images/logo_dark.png");
  }
}

function getActiveStyleSheet() {
  var i, a;
  for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
    if (
      a.getAttribute("rel").indexOf("style") !== -1 &&
      a.getAttribute("title") &&
      !a.disabled
    ) {
      return a.getAttribute("title");
    }
  }

  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
    if (
      a.getAttribute("rel").indexOf("style") !== -1 &&
      a.getAttribute("rel").indexOf("alt") === -1 &&
      a.getAttribute("title")
    ) {
      return a.getAttribute("title");
    }
  }

  return null;
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = name + "=" + value + expires + ";";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
}

/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/

/**
    @ON LOAD
**/
var switcher_visible = "";
window.onload = function (e) {
  // COLOR SCHEME
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);

  // SWITCHER OPEN|CLOSED
  if (switcher_visible != "false") {
    $("#showSwitcher").trigger("click");
  }

  // DARK OR LIGHT
  var is_dark = readCookie("is_light");
  if (is_dark === "true") {
    $("light").removeClass("light");
    $("light").addClass("light");
    $("#is_light").trigger("click");
  }
};

/**
    COLOR SKIN [light|dark]
**/
$("input.dark_switch").bind("click", function () {
  var boxed_switch = $(this).attr("value");

  if (boxed_switch === "light") {
    $("body").removeClass("dark");
    $("body").addClass("light");
  } else {
    $("body").removeClass("light");
    $("body").addClass("dark");
  }
});

/**
    LAYOUT STYLE [wide|boxed]
**/
$("input.boxed_switch").bind("click", function () {
  var boxed_switch = $(this).attr("value");

  if (boxed_switch === "boxed") {
    $("body").removeClass("boxed");
    $("body").addClass("boxed");
    createCookie("is_boxed", "true", 365);
  } else {
    $("body").removeClass("boxed");
    createCookie("is_boxed", "", -1);
    $("body").removeClass("transparent");
  }
});

/**
    SEPARATOR STYLE [Normal|Skew|Reversed Skew|Double Diagonal|Big Triangle]
**/
$("input.separator_switch").bind("click", function () {
  var separator_switch = $(this).attr("value");

  if (separator_switch === "skew") {
    $("body").removeClass("reversed-skew");
    $("body").removeClass("double-diagonal");
    $("body").removeClass("big-triangle");
    $("body").addClass("skew");
    createCookie("is_skew", "true", 365);
  } else if (separator_switch === "reversed-skew") {
    $("body").removeClass("skew");
    $("body").removeClass("double-diagonal");
    $("body").removeClass("big-triangle");
    $("body").addClass("reversed-skew");
    createCookie("is_reversed_skew", "true", 365);
  } else if (separator_switch === "double-diagonal") {
    $("body").removeClass("skew");
    $("body").removeClass("reversed-skew");
    $("body").removeClass("big-triangle");
    $("body").addClass("double-diagonal");
    createCookie("is_double_diagonal", "true", 365);
  } else if (separator_switch === "big-triangle") {
    $("body").removeClass("skew");
    $("body").removeClass("reversed-skew");
    $("body").removeClass("double-diagonal");
    $("body").addClass("big-triangle");
    createCookie("is_big_triangle", "true", 365);
  } else {
    $("body").removeClass("skew");
    $("body").removeClass("reversed-skew");
    $("body").removeClass("double-diagonal");
    $("body").removeClass("big-triangle");
    createCookie("is_normal", "", -1);
  }
});
