'use strict';

const Welcome = () => {
  const welcome = $("<div class='welcome'></div>");

  welcome.append(Slide());
  welcome.append(Title(texts.titles[0]));
  welcome.append(Instructions(texts.messages[0]));
  welcome.append(Slide_buttons());
  welcome.append(Confirm_btn("registrarme", false ,show_Register_Phone));

  return welcome;
}

const show_Register_Phone = () => {
  state.current_screen = "Register_phone";
  render(state.current_screen);
}
