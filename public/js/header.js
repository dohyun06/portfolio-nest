const info = document.querySelector('#info');
const project = document.querySelector('#project');
const plan = document.querySelector('#plan');

info.addEventListener('click', () => {
  window.location.href = '/info';
});
project.addEventListener('click', () => {
  window.location.href = '/project';
});
plan.addEventListener('click', () => {
  window.location.href = '/plan';
});
