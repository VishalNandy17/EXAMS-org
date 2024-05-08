// main.js
// Add event listener to the "Semester Result" link
const semesterResultLink = document.getElementById('semester-result-link');
semesterResultLink.addEventListener('click', () => {
  const userId = getDataFromLocalStorage('userId');
  if (userId) {
    window.location.href = `semester_result.html?userId=${userId}`;
  } else {
    alert('Please log in to view your semester result.');
    window.location.href = 'index.html';
  }
});

// Rest of your JavaScript code...
const photoUploadBtn = document.getElementById('upload-photo-btn');
const photoUpload = document.getElementById('photo-upload');
const profilePhoto = document.getElementById('profile-photo');
const signatureUploadBtn = document.getElementById('upload-signature-btn');
const signatureUpload = document.getElementById('signature-upload');
const signatureImg = document.getElementById('signature-img');
const logoutBtn = document.querySelector('.logout');

// Function to save data to localStorage
function saveDataToLocalStorage(key, data) {
  localStorage.setItem(key, data);
}

// Function to retrieve data from localStorage
function getDataFromLocalStorage(key) {
  return localStorage.getItem(key);
}

// Load saved data when the page loads
window.addEventListener('load', () => {
  const userId = getDataFromLocalStorage('userId');
  if (userId) {
    const profilePhotoData = getDataFromLocalStorage(`${userId}-profilePhoto`);
    const signatureData = getDataFromLocalStorage(`${userId}-signature`);
    if (profilePhotoData) {
      profilePhoto.src = profilePhotoData;
    }
    if (signatureData) {
      signatureImg.src = signatureData;
    }
  } else {
    // If user is not logged in, redirect to the login page
    window.location.href = 'index.html';
  }
});

photoUploadBtn.addEventListener('click', () => {
  photoUpload.click();
});

photoUpload.addEventListener('change', () => {
  const file = photoUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePhoto.src = reader.result;
      const userId = getDataFromLocalStorage('userId');
      if (userId) {
        saveDataToLocalStorage(`${userId}-profilePhoto`, reader.result);
      }
    };
    reader.readAsDataURL(file);
  }
});

signatureUploadBtn.addEventListener('click', () => {
  signatureUpload.click();
});

signatureUpload.addEventListener('change', () => {
  const file = signatureUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      signatureImg.src = reader.result;
      const userId = getDataFromLocalStorage('userId');
      if (userId) {
        saveDataToLocalStorage(`${userId}-signature`, reader.result);
      }
    };
    reader.readAsDataURL(file);
  }
});

logoutBtn.addEventListener('click', handleLogout);

function handleLogout() {
  const userId = getDataFromLocalStorage('userId');
  if (userId) {
    localStorage.removeItem('userId');
    localStorage.removeItem(`responses-${userId}`);
    localStorage.removeItem(`${userId}-profilePhoto`);
    localStorage.removeItem(`${userId}-signature`);
  }
  window.location.href = 'index.html';
}

// Function to set the user ID in localStorage
function setUserId(userId) {
  localStorage.setItem('userId', userId);
}

