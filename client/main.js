class Calendar {
  //do something with the data here
  constructor(schedule) {

  }
}

class Event {
  constructor(data) {
    this.startTime = data.startTime;
    this.endTime = data.endTime;
    this.description = data.description;
  }
}

class Day {
  constructor(name) {
    this.name = name;
    this.events = [];
    this.addEvent = (eventData) => {
      this.events.push(new Event(eventData));
    }
    this.orderEvents = () => {
      //go through events and sort them by start and end time
    }
  }
}

class Week {
  constructor(number) {
    this.days = [];
    this.addDay = (name) => {
      const day = new Day(name);
      this.days.push(day);
    }
  }
}

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


function cleanData(obj) {
  let ourEvents = [];
  for (const key in obj) {
    let ArrayOfEvents = obj[key];
    const day = []
    ArrayOfEvents.forEach(event => {
      day.push({ title: event.summary })
    });
    ourEvents.push(day)
  }

  return ourEvents;

}

// Array of arrays, which contain event objects!
function appendEvents(cleanedData) {
  // Get the calendar target
  const calendar_container = document.querySelector('.day-grid');

  // const myArr = ["one", "two", "three"]
  // const myArrConverted = [[0,"one"], [1,"two"], [2, "three"]]
  // for(let val of myArr.entries()) {
  // console.log([1,"two"])
  // }

  // Loop over the cleaned data. For each day...
  for (let day of cleanedData) {
    // if (dayIndex > 3) {
    //   break;
    // }
    // let { one, two } = { one: 1, two: 2} --> myObj
    // Create an li, which will later contain our events
    const events = document.createElement('li');
    let fullDayEvents = '';
    ///// Loop over the events. For each event... 
    for (let i = 0; i < day.length; i++) {
      //////// Get the title property of the event.
      let title = day[i].title;
      //////// Append content somehow to the li element (don't replace)
      fullDayEvents += title + "<br />";
    }
    ///// Add our fullDayEvents into our events target (w/ innerHTML)
    events.innerHTML = fullDayEvents;

    ///// Append our events target to the calendar container
    calendar_container.appendChild(events);

  }

}

document.addEventListener("DOMContentLoaded", () => {

  // Create the calendar
  fetch('http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/NY/27')
    .then(response => response.json())
    .then(data => {
      const cleanedData = cleanData(data);
      appendEvents(cleanedData);
    })


  // Chat code
  const form = document.getElementById('form');
  form.addEventListener('submit', logSubmit);
  resetPosts();
  setInterval(resetPosts, 3000);
});