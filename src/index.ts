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
    console.log('Put code in here to disable these running in the webflow content editor');
  } else {
    console.log('Editor');
  }
});
