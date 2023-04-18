import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
});

/* eslint-disable no-console */
console.log('Hello Webflow');

$('#hello-world').on('click', function () {
  console.log('hello world');
});
