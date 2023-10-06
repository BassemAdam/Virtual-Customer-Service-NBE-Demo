//-----------------------------------Declaring variables-----------------------------------//
const submitBtn = document.getElementById("submit-btn");
const progressCircles = document.querySelectorAll(".progress-circle");
const successMessage = document.getElementById("success-message");

var cusname;
//-----------------------------------END Declaring variables-----------------------------------//

function submitForm(event) {
  var form = document.getElementById("my-form");
  var formData = new FormData(form);
  var successMessage = document.getElementById("success-message");
  var progressCircles = document.querySelectorAll(".progress-circle");

  // Configure the request
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "database.php?" + new URLSearchParams(formData), true);

  // Set up a callback function to handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Request was successful, handle the response here
        var dataList = document.getElementById("mydata");
        var response = JSON.parse(xhr.response);
        dataList.innerHTML = response;
        form.style.display = "none";
        console.log("ehab");
        successMessage.style.display = "block";
        // Update progress circles
        progressCircles[0].classList.add("green");
      } else {
        // Handle errors if the request fails
        console.error("Request failed with status: " + xhr.status);
      }
    }
  };

  // Send the request with the form data
  xhr.send();
}

function validateName(name) {
  if (name === "") {
    return false; // Name is empty
  }
  if (/^[a-zA-Z\s]+$/.test(name)) {
    return true; // Name contains only characters and spaces
  } else {
    return false; // Name contains numbers or other characters
  }
}
function isFormRight(event) {
  event.preventDefault(); // Prevent default form submission behavior
  const nameError = document.createElement("span");
  nameError.classList.add("text-danger");

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var mobileInput = document.getElementById("mobile-number");
  var nationalIdInput = document.getElementById("national-id");
  var segmentInput = document.getElementById("customer-segment");
  var dateInput = document.getElementById("meeting-date");
  var timeInput = document.getElementById("meeting-time");
  if (!validateName(nameInput.value)) {
    const existingNameError =
      nameInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    if (nameInput.value === "") {
      nameError.textContent = "";
      nameError.textContent = "Name is required";
    } else if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
      nameError.textContent = "";
      nameError.textContent = "Name Should contains only characters";
    }

    nameInput.parentNode.insertBefore(nameError, nameInput.nextSibling);
    nameInput.classList.add("is-invalid");
  } else {
    const existingNameError =
      nameInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    console.log("name is  valid");
    nameError.textContent = "";
    nameInput.classList.remove("is-invalid");
  }
  if (emailInput.value === "") {
    const existingNameError =
      emailInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    console.log("email is not valid");
    const emailError = document.createElement("span");
    emailError.classList.add("text-danger");
    emailError.textContent = "Email is required";
    emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);
    emailInput.classList.add("is-invalid");
    formIsValid = false;
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    const existingNameError =
      emailInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    console.log("email is not valid");
    const emailError = document.createElement("span");
    emailError.classList.add("text-danger");
    emailError.textContent = "Email is not valid";
    emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);
    emailInput.classList.add("is-invalid");
    formIsValid = false;
  } else {
    const existingNameError =
      emailInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    emailInput.classList.remove("is-invalid");
  }
  if (mobileInput.value === "") {
    const existingNameError =
      mobileInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    console.log("mobile is not valid");
    const mobileError = document.createElement("span");
    mobileError.classList.add("text-danger");
    mobileError.textContent = "Mobile number is required";
    mobileInput.parentNode.insertBefore(mobileError, mobileInput.nextSibling);
    mobileInput.classList.add("is-invalid");
    formIsValid = false;
  } else if (!/^\d{10}$/.test(mobileInput.value)) {
    const existingNameError =
      mobileInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    console.log("mobile is not valid");
    const mobileError = document.createElement("span");
    mobileError.classList.add("text-danger");
    mobileError.textContent = "Mobile number should be 10 digits";
    mobileInput.parentNode.insertBefore(mobileError, mobileInput.nextSibling);
    mobileInput.classList.add("is-invalid");
    formIsValid = false;
  } else {
    const existingNameError =
      mobileInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    mobileInput.classList.remove("is-invalid");
  }

  if (nationalIdInput.value === "") {
    const existingNameError =
      nationalIdInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    console.log("national ID is not valid");
    const nationalIdError = document.createElement("span");
    nationalIdError.classList.add("text-danger");
    nationalIdError.textContent = "National ID is required";
    nationalIdInput.parentNode.insertBefore(
      nationalIdError,
      nationalIdInput.nextSibling
    );
    nationalIdInput.classList.add("is-invalid");
    formIsValid = false;
  } else if (!/^\d+$/.test(nationalIdInput.value)) {
    console.log("national ID is not valid");
    const nationalIdError = document.createElement("span");
    nationalIdError.classList.add("text-danger");
    nationalIdError.textContent = "National ID should be numbers only";
    nationalIdInput.parentNode.insertBefore(
      nationalIdError,
      nationalIdInput.nextSibling
    );
    nationalIdInput.classList.add("is-invalid");
    formIsValid = false;
  } else {
    const existingNameError =
      nationalIdInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    nationalIdInput.classList.remove("is-invalid");
  }
  if (segmentInput.value === "") {
    const existingNameError =
      segmentInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    console.log("segment is not valid");
    const segmentError = document.createElement("span");
    segmentError.classList.add("text-danger");
    segmentError.textContent = "Segment is required";
    segmentInput.parentNode.insertBefore(
      segmentError,
      segmentInput.nextSibling
    );
    segmentInput.classList.add("is-invalid");
    formIsValid = false;
  } else {
    const existingNameError =
      segmentInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    segmentInput.classList.remove("is-invalid");
  }

  // Validate date input
  if (dateInput.value === "") {
    const existingNameError =
      dateInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    console.log("date is not valid");
    const dateError = document.createElement("span");
    dateError.classList.add("text-danger");
    dateError.textContent = "Date is required";
    dateInput.parentNode.insertBefore(dateError, dateInput.nextSibling);
    dateInput.classList.add("is-invalid");
    formIsValid = false;
  } else {
    const existingNameError =
      dateInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    dateInput.classList.remove("is-invalid");
  }

  // Validate time input
  if (timeInput.value === "") {
    const existingNameError =
      timeInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    console.log("time is not valid");
    const timeError = document.createElement("span");
    timeError.classList.add("text-danger");
    timeError.textContent = "Time is required";
    timeInput.parentNode.insertBefore(timeError, timeInput.nextSibling);
    timeInput.classList.add("is-invalid");
    formIsValid = false;
  } else {
    const existingNameError =
      timeInput.parentNode.querySelector(".text-danger");
    if (existingNameError) {
      existingNameError.remove();
    }
    timeInput.classList.remove("is-invalid");
  }

  if (
    !nameInput.classList.contains("is-invalid") &&
    !emailInput.classList.contains("is-invalid") &&
    !mobileInput.classList.contains("is-invalid") &&
    !nationalIdInput.classList.contains("is-invalid") &&
    !segmentInput.classList.contains("is-invalid") &&
    !dateInput.classList.contains("is-invalid") &&
    !timeInput.classList.contains("is-invalid")
  ) {
    submitForm(event);
  }
}

//--------------------------------------------------------------------Upload files code------------------------------------------------------------//
function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  files = [...files];
  files.forEach(uploadFile);
}

const dropArea = document.getElementById("drop-area");

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

dropArea.addEventListener("drop", handleDrop, false);

//--------------------------------------------------------------------END Upload files code------------------------------------------------------------//

//-------------------------------------------------------------Send Uploaded files & showing meeting details------------------------------------------------------------//
function ShowMeetingDetails(event) {
  event.preventDefault();

  var successMessage = document.getElementById("success-message");
  var progressCircles = document.querySelectorAll(".progress-circle");
  var meetingDetails = document.getElementById("meetingDetails");
  var form = document.getElementById("myform");
  console.log(form);
  var formData = new FormData(form);
  formData.append("cusID", cusname);
  var xhr = new XMLHttpRequest();

  //console.log(cusname);
  // Configure the request
  console.log("upload formdata");
  console.log(formData);
  xhr.open("POST", "image.php", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Succcess");
        successMessage.style.display = "none";
        meetingDetails.style.display = "block";
        // Update progress circles
        progressCircles[1].classList.add("green");
      } else {
        // Handle errors if the request fails
        console.error("Request failed with status: " + xhr.status);
      }
    }
  };

  // Send the request with the form data
  xhr.send(formData);
}
//-------------------------------------------------------------END Send Uploaded files & showing meeting details------------------------------------------------------------//

//-----------------------------------------------------------------------Animation Text Section------------------------------------------------------------------------------//

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("coolVisible");
    } else {
      entry.target.classList.remove("coolVisible");
    }
  });
});

const Hiddenelements = document.querySelectorAll(".coolHidden");
Hiddenelements.forEach((element) => {
  observer.observe(element);
});
//--------------------------------------------------------------------------------END Animation Text Section-------------------------------------------------------------------//

//------------------------------------tool tip------------------------------------//
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

//-------------------------------------------validation for input fields-------------------------------------------//

// const form = document.getElementById("my-form");

// form.addEventListener("submit", function (event) {
//   if (!validateName(nameInput.value)) {
//     nameInput.classList.add("is-invalid");
//     event.preventDefault();
//   } else {
//     nameInput.classList.remove("is-invalid");
//   }

//   if (!validateNationalId(nationalIdInput.value)) {
//     nationalIdInput.classList.add("is-invalid");
//     event.preventDefault();
//   } else {
//     nationalIdInput.classList.remove("is-invalid");
//   }

//   if (!validateMobileNumber(mobileNumberInput.value)) {
//     mobileNumberInput.classList.add("is-invalid");
//     event.preventDefault();
//   } else {
//     mobileNumberInput.classList.remove("is-invalid");
//   }

//   if (!validateEmail(emailInput.value)) {
//     emailInput.classList.add("is-invalid");
//     event.preventDefault();
//   } else {
//     emailInput.classList.remove("is-invalid");
//   }
// });

// function validateNationalId(nationalId) {
//   return /^\d{14}$/.test(nationalId);
// }

// function validateMobileNumber(mobileNumber) {
//   return /^(\+?\d{1,3}[- ]?)?\d{10}$/.test(mobileNumber);
// }

// function validateEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }
