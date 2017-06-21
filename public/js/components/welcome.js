'use strict';

const Welcome = () => {
  const welcome = $("<div class='welcome'></div>");

  welcome.append(Slide());
  welcome.append(Confirm_btn("registrarme", false, show_Register_Phone));

  return welcome;
}

const show_Register_Phone = () => {
  state.current_screen = "Register_phone";
  render(state.current_screen);
}
