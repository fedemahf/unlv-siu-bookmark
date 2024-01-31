const user = "your_user";
const password = "your_password";

window.onload = () => {
  const form = document.forms[0];
  form.fUsuario.value = user;
  form.fClave.value = password;
  form.submit();
}
