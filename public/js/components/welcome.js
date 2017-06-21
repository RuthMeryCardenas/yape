'use strict';

const Welcome = () => {
  const welcome = $("<div class='welcome'></div>");

  welcome.append(Slide());

  const aux_confirm_btn = Confirm_btn("registrarme", show_Register_Phone);
  enable_disable_btn(aux_confirm_btn.find(".btn-confirm"), "enabled");

  welcome.append(aux_confirm_btn);

  return welcome;
}

const show_Register_Phone = () => {
  state.current_screen = "Register_phone";
  render(state.current_screen);
}
