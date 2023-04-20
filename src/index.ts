import { greetUser } from '$utils/greet';
/* eslint-disable no-console */
window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
});

$('#button').on('click', function () {
  console.log('hello world');
});
