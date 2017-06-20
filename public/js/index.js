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
      // console.log("next screen");
      // nuevo componente a pintarse
      break;
    default:
      wrapper.append(Welcome());
  }

  root.append(wrapper);
}

const state = {
  current_screen : null
};

$( _ => {
  render(state.current_screen);
});
