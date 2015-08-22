#Calendar

##Goal
The goal of this challenge is to create your own personal calendar. The content of your calendar can be accessed through the global variable "schedule"; use javascript, HTML, and CSS to render the content onto your page. You will be using this calendar for the next two weeks, so make it pretty!

##How do I get started
1. After forking and cloning this repo (see the [previous challenge's README.md](https://github.com/CodesmithLLC/unit-1-js-fundamentals) if needed), run the following command in your terminal:
  ````
  npm install
  ````
1. To install front-end essential libraries (also called dependencies), run the following command:
  ````
  bower install
  ````

1. Complete the challenge by adding code to client/main.js file

  - The schedule is found in the global variable schedule which can be accessed as such:
  ````
  console.log(schedule);
  ````
  take a look at what appears in your console. It migh tbe helpful to write out how this data is structured and do a little whiteboarding on how you can convert this datamodel into something that users can see and interact with. Will you structure this using a table? A bunch of divs? A unordered list? 

1. No matter what you decide to use you will have to create HTML elements to hold your newly created data, check out [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) to find a method we can use to create different DOMNodes.

1. Once these DOM nodes are created, we need to attach them to the page (so they actually appear!) there are a bunch of cool methods we can use

  - The following two commands will be instrumental:
  ````
  document.body.appendChild(<custom node>);
  document.createElement(<element type>);
  ````

1. View your page by opening the index.html page in your browser. Style the page accordingly.

##How do I test if my answer is correct?
Previous, we ran tests in the browser (we opened an index.html). In production though, we often run test in the terminal. To run tests in the terminal for this challenge, type the following code:
````
npm test
````
#Extension Work

1. Make it so that you can click through and see your data a week at a time!
1. Integrate it so that you can click a button and it downloads the entry as something you can import into ical!
1. Allow people to click events and add them to their google calendar!
1. Allow users to edit events and change it on the page! *Investigate using `localStorage` to allow someone to save their own calendar)


