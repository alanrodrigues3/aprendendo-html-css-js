function registerUser(name) {
  const firstName = document.getElementsByName("first_name")[0].value;
  const birthDate = document.getElementsByName("birth_date")[0].value;
  const age = document.getElementsByName("age")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const bio = document.getElementsByName("bio")[0].value;

  alert(
    `Você clicou no botão!!! Quem clicou?  ${firstName} / ${birthDate} / ${age} / ${email} / ${bio}`
  );
}
