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
    case "Register_Card":
      // wrapper.append(Register_Card());
      console.log("Estás en Register_Card");
      break;
    default:
      wrapper.append(Welcome());
  }
  root.append(wrapper);
}

$( _ => {
  render(state.current_screen);
});
