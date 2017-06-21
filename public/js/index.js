'use strict';

const render = (current_screen) => {
  const root = $('.root');
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (current_screen) {
    case null:
      wrapper.append(Welcome());
      break;
    case "Register_phone":
      wrapper.append(Register_phone());
      break;
    default:
      wrapper.append(Welcome());
  }
  root.append(wrapper);
}

const state = {
  current_screen : null
};

const texts = {
  titles : ["Paga a tus amigos"],
  messages : ["Paga a quien quieras desde donde quieras, sin usar efectivo"],
  subtitles : ["Para comenzar validaremos tu número"],
  instructions : ["Recibirás un SMS con un código de validación"]
};

$( _ => {
  render(state.current_screen);
});
