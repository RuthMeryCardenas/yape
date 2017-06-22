const validations = {
  phone: {
    value: null,
    state: null,
    run_validation: function (value) {
      this.state = (/^9[0-9]{8}$/g).test(value);
      if (this.state) {
        this.value = value;
        console.log("Formato de teléfono correcto");
      }else {
        console.log("Formato de teléfono incorrecto");
      }
      return true;
    }
  },
  terms: {
    value: null,
    state: null,
    run_validation: function (value) {
      this.state = value;
      if (this.state) {
        this.value = value;
        console.log("Términos aceptados");
      }else {
        console.log("Términos no aceptados");
      }
      return true;
    }
  }
};

const validate_register_phone =  () => {
  const data = $(".user-action .data");
  let correct_data = 0;
  if (validations.phone.state) {
    console.log(correct_data);
    correct_data ++
  }
  if (validations.terms.state) {
    console.log(correct_data);
    correct_data ++
  }
  // for (var index in validations) {
  //   if (validations[index].state) {
  //     correct_data ++
  //   }
  // }

  if (correct_data == data.length) {
    enable_disable_btn($(".btn-confirm"), "enabled");
  }else {
    enable_disable_btn($(".btn-confirm"), "disabled");
  }
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
