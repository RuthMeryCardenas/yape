const Title = (text_title) => {
  const title = $("<div class='title'></div>");
  const text = $("<h2 class='text-center'>" + text_title + "</h2>");

  title.append(text);

  return title;
}

const Subtitle = (text_subtitle) => {
  const subtitle = $("<div class='subtitle'></div>");
  const text = $("<h4 class='text-center'>" + text_subtitle + "</h4>");

  subtitle.append(text);

  return subtitle;
}

const Instructions = (text_paragraph) => {
  const instructions = $("<div class='instructions'></div>");
  const paragraph = $("<p class='text-center'>" + text_paragraph + "</p>");

  instructions.append(paragraph);

  return instructions;
}

const Icon = (dinamic_url) => {
  const static_url = "assets/img/icons/" + dinamic_url;
  const icon_container = $("<div class='icon-container text-center'></div>");
  const icon = $("<img src=" + static_url + " alt=''>");

  icon_container.append(icon);

  return icon_container;
}

const Confirm_btn = (text, callback) => {
  const btn_container = $("<div class='btn-container text-center'></div>");
  const btn_confirm = $("<button disabled type='button' class='btn-confirm text-white'>" + text + "</button>");

  btn_confirm.on("click", callback);
  btn_container.append(btn_confirm);

  return btn_container;
}

const Input = () => {
  const input_field = $("<div class='input-field text-gray'></div>");
  const icon = $("<i class='material-icons prefix'>stay_primary_portrait</i>");
  const label = $("<label class='prefix'>(+51)</label>");
  const input = $("<input id='user-phone' type='text' class='text-center' value='' required>");

  input_field.append(icon);
  input_field.append(label);
  input_field.append(input);

  return input_field;
}

const Checkbox = (callback) => {
  const checkbox_field = $("<div class='checkbox-field'></div>");
  const checkbox = $("<input id='terms' type='checkbox'>");
  const label = $("<label for='terms' class='text-gray text-size078'>Acepto los </label>");
  const link = $("<a class='link text-size078' href='#'>términos y condiciones.</<a>");

  label.append(link);

  checkbox_field.append(checkbox);
  checkbox_field.append(label);
  checkbox.on("change", function (event) {
    callback(event.target);
  });

  return checkbox_field;
}

const enable_disable_btn = (button, action) => {
  if (action == "enabled") {
    button.prop("disabled", false);
    button.addClass("bg-yellow");
    console.log("botón habilitado");
  }
  if (action == "disabled"){
    button.prop("disabled", true);
    button.removeClass("bg-yellow");
    console.log("botón deshabilitado");
  }
}
