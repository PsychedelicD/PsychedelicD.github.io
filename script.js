// Get the current date and time
const date = new Date();

// Format the date and time string
const dateString = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

// Set the text content of the time element to the date and time string
const timeElement = document.getElementById('post-time');
timeElement.textContent = `Posted on ${dateString}`;
