'use strict';

const Register_phone = () => {
  const register_phone = $("<div class='register-phone'></div>");
  const user_action = $("<div class='user-action'></div>");

  user_action.append(Input());
  user_action.append(Checkbox());

  user_action.append(Confirm_btn("continuar"));
  register_phone.append(Icon("phone.png"));
  register_phone.append(Subtitle(texts.subtitles[0]));
  register_phone.append(Instructions(texts.instructions[0]));
  register_phone.append(user_action);

  return register_phone;
}
