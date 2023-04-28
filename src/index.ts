/* eslint-disable no-console */

export {};
declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    console.log('Wont run in Webflow editor');
  } else {
    console.log('Editor');
  }
});
