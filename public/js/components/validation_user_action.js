const validations = {
  phone : /^9[0-9]{8}/g
};

const validate_user_action =  () => {
  let data = $(".user-action .data");
  let accountant = 0;
  console.log(data);
  if (validations.phone.test($(data[0]).val())) {
    console.log("Formato de teléfono correcto");
    $(data[0]).val();
    accountant ++
  }else {
    console.log("Formato de teléfono incorrecto");
  }
  if ($(data[1]).prop("checked")) {
    console.log("Términos aceptados");
    accountant ++
  }else {
    console.log("Términos no aceptados");
  }
  console.log("Total de campos a llenar: " + data.length);
  if (accountant == data.length) {
    console.log("Datos correctos: " + accountant);
     enable_disable_btn($(".btn-confirm"), "enabled");
  }else {
    console.log("Datos correctos: " + accountant);
    console.log("Datos incorrectos: " + (data.length - accountant));
    enable_disable_btn($(".btn-confirm"), "disabled");
  }
}
