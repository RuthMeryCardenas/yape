const postDATA = (url, data) => {
  $.post(url, data,function (response) {
    console.log(response);
    if (response.data !== null) {
      const request_response = response.data;

      current_user.code = request_response.code;
      current_user.phone = request_response.phone;
      current_user.terms = request_response.terms;

      console.log("Código de usuario: " + current_user.code);
      state.current_screen = "Resend_Code";
      render(state.current_screen);

    }else {
      console.log(response.message);
      render(state.current_screen);
    }
  }, "json");
}
