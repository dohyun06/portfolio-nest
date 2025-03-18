const main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch(window.location.href + '/data');
  const project = await res.json();

  const title = document.createElement('title');
  title.className = 'title';
  const detail = document.createElement('div');
  detail.className = 'detail';
  const tags = document.createElement('div');
  tags.className = 'tags';

  main.appendChild(title);
  main.appendChild(detail);
  main.appendChild(tags);
  title.innerText = project[0].title;
  detail.innerText = project[0].detail;

  project[0].tags.split(',').map((t) => {
    const tag = document.createElement('div');
    tag.className = 'tag';
    tags.appendChild(tag);
    tag.innerText = t;
  });
});
