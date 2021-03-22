function createContact() {
  const container = document.getElementById('content').appendChild(document.createElement('div'));
  const contactsection = container.appendChild(document.createElement('div'));
  const titlediv = contactsection.appendChild(document.createElement('div'));
  titlediv.classList.add('title');
  const title = titlediv.appendChild(document.createElement('h3'));
  title.innerHTML = 'Contacts';

  const fooddiv = contactsection.appendChild(document.createElement('div'));
  fooddiv.classList.add('contact');
  const food1 = fooddiv.appendChild(document.createElement('h3'));
  food1.innerHTML = '';
  food1.innerHTML = 'Location: Kampala Uganda';

  const food2 = fooddiv.appendChild(document.createElement('h3'));
  food2.innerHTML = 'Phone: +256 708-762-210';

  const food3 = fooddiv.appendChild(document.createElement('h3'));
  food3.innerHTML = 'Email: basaijapascal9@gmail.com';
}

export default createContact;
