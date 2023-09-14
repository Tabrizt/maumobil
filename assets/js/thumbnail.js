$(document).ready(function () {
  $(".carousel a").click(function (e) {
    e.preventDefault();
    $(".thumb-image img").attr("src", $(this).attr("href"));
  });
});
