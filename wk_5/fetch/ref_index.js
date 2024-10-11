const url = `https://fakerapi.it/api/v1/persons?_quantity=10`;
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(({ data }) => {
    data.map(({ id, firstname, email }) => {
      console.log(id, firstname, email);
      let peopleList = document.getElementById('person-list');
      let template = document.querySelector('[personTemplate]');
      let templateClone = template.cloneNode(true);

      let templateName = templateClone.querySelector('#person-id');
      let templateEmail = templateClone.querySelector('#person-email');

      templateName.id = `${firstname}-${id}`;
      templateEmail.id = `${firstname}-${email}`;

      templateName.textContent = firstname;
      templateEmail.textContent = email;

      templateClone.removeAttribute('personTemplate');

      peopleList.appendChild(templateClone);
    });
  })
  .catch((error) => {
    console.log(error);
    throw error;
  });
