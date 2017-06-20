'use strict';

const Welcome = () => {
  const welcome = $("<div class='welcome'></div>");

  welcome.append(Slide());
  welcome.append(Title("Paga a tus amigos"));
  welcome.append(Instructions("Paga a quien quieras desde donde quieras, sin usar efectivo"));
  welcome.append(Slide_buttons());
  welcome.append(Confirm_btn("registrarme", show_Register_Phone));

  return welcome;
}

const show_Register_Phone = () => {
  state.current_screen = "Register_phone";
  render(state.current_screen);
}
