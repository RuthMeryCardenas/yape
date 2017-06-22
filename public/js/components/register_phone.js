'use strict';

const Register_Phone = () => {
  const register_phone = $("<div class='register-phone'></div>");
  const user_action = $("<div class='user-action'></div>");


  const container_input = Input();
  container_input.find("#user-phone").on("keyup", function (event) {
    validations.phone.run_validation($(event.target).val());
    validate_register_phone();
  });

  const container_checkbox = Checkbox();
  container_checkbox.find("#terms").on("change", function () {
    validations.terms.run_validation($(event.target).prop("checked"));
    validate_register_phone();
  });

  user_action.append(container_input);
  user_action.append(container_checkbox);
  user_action.append(Confirm_btn("continuar", show_Register_Card));
  register_phone.append(Icon("phone.png"));
  register_phone.append(Subtitle(texts.subtitles[0]));
  register_phone.append(Instructions(texts.instructions[0]));
  register_phone.append(user_action);

  return register_phone;
}

const show_Register_Card = () => {
  let phone = "912345678";
  $.post('api/registerNumber', {phone: phone, terms:true}, function (response) {
    console.log(response);
  }, "json");
  state.current_screen = "Register_Card";
  render(state.current_screen);
}
