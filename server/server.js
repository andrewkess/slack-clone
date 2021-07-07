const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../"))); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
// const title = document.createElement("div");
// document.body.appendChild(title);

// const noEvents = "no events scheduled";
// const events = [
//   "Javascript Fundamentals GOALS:1 Complete js-fundamental challenge",
//   noEvents,
//   noEvents,
//   noEvents,
//   noEvents,
//   "Data Structures GOALS:1 Reimplement the following data structures: linked list, stack, queue, set, graph, hash table, tree, binary search tree",
//   "Algorithms GOALS: 1 Complete coin sum 2 Complete n-paths",
//   noEvents,
//   noEvents,
//   noEvents,
//   "Frontend Fundamentals GOALS:1 Complete",
//   noEvents,
//   "AJAX GOALS:1 Connect calendar to google API 2 Create chatroom",
//   noEvents,
//   "React GOALS: 1 Create tic tac toe 2 Reactify frontend code",
// ];

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.createElement("div");
//   container.setAttribute("class", "calendar");
//   container.style.gridTemplateColumns = "10% repeat(5, 16%) 10%";
//   container.style.margin = "0 auto";
//   container.style.display = "grid";
//   container.style.gap = ".25em";
//   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//   document.body.appendChild(container);

//   // Create calendar variable for appending other elements
//   const calendar = document.querySelector(".calendar");

//   // Add forward navigation button
//   const nullish = document.createElement("span");
//   const nullish2 = document.createElement("span");
//   calendar.appendChild(nullish);

//   // Make days inside of calendar
//   days.forEach((dayText) => {
//     const dayContainer = document.createElement("div");
//     dayContainer.style.border = "1px solid black";
//     const day = document.createElement("h2");
//     day.innerText = dayText;
//     day.style.marginTop = "0px";
//     day.style.fontWeight = "bold";
//     dayContainer.appendChild(day);
//     calendar.appendChild(dayContainer);
//   });

//   // Add forward navigation button
//   calendar.appendChild(nullish2);

//   /// Create backward button
//   let startIndex = 0;
//   let endIndex = 5;
//   const backwardContainer = document.createElement("div");
//   const backwardButton = document.createElement("button");
//   backwardButton.innerText = "backward";
//   backwardContainer.appendChild(backwardButton);
//   backwardButton.addEventListener("click", () => {
//     if (startIndex === 0) return;
//     startIndex -= 5;
//     endIndex -= 5;
//     updateItems(startIndex);
//   });
//   calendar.appendChild(backwardContainer);

//   // Create events
//   events.slice(startIndex, endIndex).forEach((eventText) => {
//     const eventContainer = document.createElement("div");
//     eventContainer.style.border = "1px solid black";
//     const myEvent = document.createElement("p");
//     myEvent.className = "day-event";
//     myEvent.innerText = eventText;
//     eventContainer.appendChild(myEvent);
//     calendar.appendChild(eventContainer);
//   });

//   function updateItems(s, e) {
//     const old = document.querySelectorAll("p.day-event");
//     old.forEach((myEvent) => {
//       console.log(events, s);
//       myEvent.innerText = events[s];
//       s++;
//     });
//   }

//   // Create forward button
//   const forwardContainer = document.createElement("div");
//   const forwardButton = document.createElement("button");
//   forwardButton.innerText = "forward";
//   forwardContainer.appendChild(forwardButton);
//   forwardButton.addEventListener("click", () => {
//     if (endIndex >= events.length) return;
//     startIndex += 5;
//     endIndex += 5;
//     updateItems(startIndex);
//   });
//   calendar.appendChild(forwardContainer);
// });

// // Your schedule can be accessed through the global object 'schedule'
// // console.log(schedule);
