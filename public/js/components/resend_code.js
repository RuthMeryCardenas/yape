'use strict';

const Resend_Code = () => {
  const resend_code = $("<div class='resend-code'></div>");

  resend_code.append(Icon("message.png"));
  resend_code.append(Subtitle(texts.subtitles[1]));

  const show_user_phone = $("<span class='user-phone text-grayDark'>" + current_user.phone + "</span>");
  const aux_instructions = Instructions(texts.instructions[1]);
  aux_instructions.find("p").append(show_user_phone);
  resend_code.append(aux_instructions);

  const user_action = $("<div class='user-action'></div>");
  user_action.append(Input("lock.png", "user-code", "- - - - -"));

  const icon= $("<i></i>").append($("<img src='assets/img/icons/clock.png' alt=''>"));
  const aux_recommendations = Recommendations(texts.recommendations[0]);
  aux_recommendations.find("p").append(icon);
  aux_recommendations.find("p").append("<span class='show-counter'>21</span>");

  user_action.append(aux_recommendations);

  resend_code.append(user_action);

  return resend_code;
}
