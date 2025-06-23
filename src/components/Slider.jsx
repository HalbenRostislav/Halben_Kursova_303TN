import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "jquery-ui-dist/jquery-ui.css";

function Slider() {
  useEffect(() => {
    $("#slider").slider({
      min: 1,
      max: 3,
      slide: function (event, ui) {
        $(".slide").hide();
        $("#slide" + ui.value).show();
      },
    });
    $(".slide").hide();
    $("#slide1").show();
  }, []);

  return (
    <div className="my-4">
      <div id="slider" className="mb-3"></div>
      <div id="slide1" className="slide alert alert-info">Слайд 1: Вітання у бібліотеці</div>
      <div id="slide2" className="slide alert alert-info">Слайд 2: Нові надходження</div>
      <div id="slide3" className="slide alert alert-info">Слайд 3: Онлайн ресурси</div>
    </div>
  );
}

export default Slider;