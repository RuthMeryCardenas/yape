'use strict';

const Register_phone = () => {
  const register_phone = $("<div class='register-phone'></div>");
  const user_action = $("<div class='user-action'></div>");

  user_action.append(Input());
  user_action.append(Checkbox(validate_terms));

  user_action.append(Confirm_btn("continuar"));
  register_phone.append(Icon("phone.png"));
  register_phone.append(Subtitle(texts.subtitles[0]));
  register_phone.append(Instructions(texts.instructions[0]));
  register_phone.append(user_action);

  return register_phone;
}

const validate_terms = (checkbox) => {
  console.log(checkbox);
  if( $(checkbox).prop('checked') && validate_phone()) {
    console.log("Términos aceptados");
    enable_disable_btn($(".btn-confirm"), "enabled");
  }else {
    console.log("Términos no aceptados");
    enable_disable_btn($(".btn-confirm"), "disabled");
  }
}

const validate_phone = () => {
  let filter_phone = /^9[0-9]{8}/g; //Sólo 9 números y que empieze con "9"

    if (filter_phone.test($("#user-phone").val()) == true) {
      console.log("Formato de teléfono correcto");
      return true;
    }else {
      console.log("Formato de teléfono incorrecto");
      return false;
    }
}
