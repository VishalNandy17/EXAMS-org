// index.js
const loginForm = document.getElementById('login-form');
const studentId = document.getElementById('student-id');
const password = document.getElementById('password');
const captchaInput = document.getElementById('captcha');
const captchaLabel = document.getElementById('captcha-label');

const validCredentials = [
  { userId: 'JIS/2023/0386', password: 'JIS/2023/0386' },
  { userId: 'JIS/2023/0387', password: 'JIS/2023/0387' },
  { userId: 'JIS/2023/0388', password: 'JIS/2023/0388' },
  { userId: 'JIS/2023/0389', password: 'JIS/2023/0389' },
  { userId: 'JIS/2023/1234', password: 'JIS/2023/1234' },
  { userId: 'JIS/2023/1235', password: 'JIS/2023/1235' },
  { userId: 'JIS/2023/1236', password: 'JIS/2023/1236' },
  { userId: 'JIS/2023/1237', password: 'JIS/2023/1237' },
  { userId: 'JIS/2023/1238', password: 'JIS/2023/1238' },
  { userId: 'JIS/2022/1239', password: 'JIS/2022/1239' }
];

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10); 
  const num2 = Math.floor(Math.random() * 10);
  const sum = num1 + num2;
  return `${num1} + ${num2}`;
}

window.onload = function() {
  const captcha = generateCaptcha();
  captchaLabel.textContent = `ENTER SUM BELOW ${captcha}`;
  const correctCaptcha = eval(captcha.replace(' + ', ' + ')); // Convert the captcha string to a sum

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userCredentials = validCredentials.find(cred => cred.userId === studentId.value);
    if (userCredentials && userCredentials.password === password.value && parseInt(captchaInput.value) === correctCaptcha) {
      // Save the userId in localStorage
      saveDataToLocalStorage('userId', userCredentials.userId);
      window.location.href = 'main.html';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
};

// Function to save data to localStorage
function saveDataToLocalStorage(key, data) {
  localStorage.setItem(key, data);
}