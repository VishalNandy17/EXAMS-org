const form = document.querySelector('form');
const responseList = document.getElementById('response-list');
const modal = document.getElementById('response-modal');
const viewResponsesBtn = document.getElementById('view-responses-btn');
const closeModal = document.getElementsByClassName('close')[0];
let responses = [];

// Load saved responses from localStorage
window.addEventListener('load', () => {
  const userId = localStorage.getItem('userId');
  if (userId) {
    const savedResponses = JSON.parse(localStorage.getItem(`responses-${userId}`)) || [];
    responses = savedResponses;
    renderResponses();
  } else {
    console.error('User ID not found in localStorage');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const response = {};
  for (const [key, value] of formData.entries()) {
    if (key === 'subjects[]') {
      if (!response.subjects) {
        response.subjects = [];
      }
      response.subjects.push(value);
    } else {
      response[key] = value;
    }
  }
  responses.push(response);
  form.reset();
  alert('Form submitted successfully!');
  saveResponsesToLocalStorage();
  renderResponses();
});

viewResponsesBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  renderResponses();
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function renderResponses() {
  responseList.innerHTML = '';
  responses.forEach((response, index) => {
    const li = document.createElement('li');
    li.textContent = `Response ${index + 1}: `;
    const ul = document.createElement('ul');
    for (const [key, value] of Object.entries(response)) {
      if (key === 'subjects') {
        const subjectList = document.createElement('li');
        subjectList.textContent = `${key}: ${value.join(', ')}`;
        ul.appendChild(subjectList);
      } else {
        const item = document.createElement('li');
        item.textContent = `${key}: ${value}`;
        ul.appendChild(item);
      }
    }
    li.appendChild(ul);
    responseList.appendChild(li);
  });
}

function saveResponsesToLocalStorage() {
  const userId = localStorage.getItem('userId');
  if (userId) {
    localStorage.setItem(`responses-${userId}`, JSON.stringify(responses));
  } else {
    console.error('User ID not found in localStorage');
  }
}

