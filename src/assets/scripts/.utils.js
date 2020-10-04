import $ from "jquery";
import "bootstrap";
import objectFitImages from "object-fit-images";
import select2 from "select2";
import "slick-carousel";

// initialize 'object-fit-images'
$(function () {
  objectFitImages();
});

// initialize 'select2'
select2($);
$(`select`).select2({
  minimumResultsForSearch: Infinity,
  theme: 'default'
});