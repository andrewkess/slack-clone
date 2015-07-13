// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element

var title = document.createElement('div');		
title.innerHTML = 'Social Calendar';		
document.body.appendChild(title);

console.log(schedule);

$.get('http://calendar-server.elasticbeanstalk.com/messages').then(function(data) {
  console.log('hello');
  console.log(data);
});


