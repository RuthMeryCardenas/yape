const Slide = () => {
  const slide_container = $("<div class='slide-container'></div>");
  const slide = $("<div class='slide'></div>");
  const picture_container = $("<div class='picture-container text-center'></div>");
  const picture = $("<img src='assets/img/icons/icon-people.png'>");

  picture_container.append(picture);
  slide.append(picture_container);
  slide_container.append(slide);

  return slide_container;
}

const Slide_buttons = () => {
  const slide_buttons = $("<div class='slide-buttons text-center'></div>");
  const btn_1 = $("<span class='btn-slide bg-redBullet'></span>");
  const btn_2 = $("<span class='btn-slide bg-gray'></span>");
  const btn_3 = $("<span class='btn-slide bg-gray'></span>");

  slide_buttons.append(btn_1);
  slide_buttons.append(btn_2);
  slide_buttons.append(btn_3);

  return slide_buttons;
}
