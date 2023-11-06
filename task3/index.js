$(document).ready(function () {
  $("h3").each(function () {
    const divs = $(this).nextUntil("h3", "div");
    divs.each(function () {
      $(this).insertBefore($(this).prevAll("h3").first());
    });
  });
});



