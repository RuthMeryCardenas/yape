'use strict';

const state = {
  current_screen : null
};

const current_user = {
  phone: null,
  terms:null,
  code:null,
	name:null,
	email:null,
	password:null,
	message:null
}

const render = (current_screen) => {
  const root = $('.root');
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (current_screen) {
    case null:
      wrapper.append(Welcome());
      break;
    case "Register_Phone":
      wrapper.append(Register_Phone());
      break;
    case "Resend_Code":
      wrapper.append(Resend_Code());
      console.log("Estás en Resend Code");
      break;
    default:
      wrapper.append(Welcome());
  }
  root.append(wrapper);
}

$( _ => {
  render(state.current_screen);
});
