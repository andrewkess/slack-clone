function filterData(arr) {
  const filteredData = arr.filter(val => {
    const dateString = val.created_at;
    const d = new Date(dateString);
    const today = new Date("2021-07-06T20:39:30.377Z");
    return d > today;
  });
  return filteredData;
};

function appendData(arr) {
  const container = document.querySelector('.message-container');
  container.innerHTML = '';

  arr.forEach((el) => {
    const message = document.createElement('div');
    message.innerHTML = el.message;
    const container = document.querySelector('.message-container');
    container.appendChild(message);
  });
}

function resetPosts() {
  fetch('https://curriculum-api.codesmith.io/messages')
    .then(response => response.json())
    .then(data => {
      const filteredData = filterData(data);
      appendData(filteredData); // Array of objects
    });
}

function logSubmit(event) {
  event.preventDefault();
  // Get the value that was typed into the input for message
  const message = document.querySelector("#message").value;
  // Get the value that was typed into the input for createdBy
  const created_by = document.querySelector("#created_by").value;
  // Pass those values into a POST request, that we make to the URL they provided us
  fetch('https://curriculum-api.codesmith.io/messages', {
    method: "POST",
    body: JSON.stringify({ message: message, created_by: created_by }),
    headers: {
      'Content-Type': 'application/json'
    },
    cors: "no-cors"
  });
  // On that POST request, we're also passing in some settings in a separate "options" object
  // That will return a promise (call the .then() method on the promise)
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);
  resetPosts();
  setInterval(resetPosts, 3000);
});