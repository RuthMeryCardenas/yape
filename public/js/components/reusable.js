const Title = (text_title) => {
  const title = $("<div class='title'></div>");
  const text = $("<h2 class='text-center'>" + text_title + "</h2>");

  title.append(text);

  return title;
}

const Instructions = (text_paragraph) => {
  const instructions = $("<div class='instructions'></div>");
  const paragraph = $("<p class='text-center'>" + text_paragraph + "</p>");

  instructions.append(paragraph);

  return instructions;
}

const Confirm_btn = (action) => {
  const btn_container = $("<div class='btn-container text-center'></div>");
  const btn_confirm = $("<button type='button' class='btn-confirm bg-yellow text-white'>" + action + "</button>");

  btn_container.append(btn_confirm);

  return btn_container;
}
