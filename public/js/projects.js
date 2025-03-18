const main = document.querySelector('main');

document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('/project/data');
  const projects = await res.json();

  projects.map((project) => {
    const container = document.createElement('div');
    container.className = 'listContainer';
    const listTitle = document.createElement('div');
    listTitle.className = 'listTitle';
    const description = document.createElement('div');
    description.className = 'description';
    const tags = document.createElement('div');
    tags.className = 'tags';

    main.appendChild(container);
    container.appendChild(listTitle);
    container.appendChild(description);
    container.appendChild(tags);

    listTitle.innerText = project.title;
    description.innerText = project.description;

    project.tags.split(',').map((t) => {
      const tag = document.createElement('div');
      tag.className = 'tag';
      tags.appendChild(tag);
      tag.innerText = t;
    });

    container.addEventListener('click', () => {
      window.location.href = `/project/${project.title}`;
    });
  });
});

/*
projects.map((project) => {
  const container = document.createElement('div');
  container.className = 'listContainer';
  const listTitle = document.createElement('div');
  listTitle.className = 'listTitle';
  const description = document.createElement('div');
  description.className = 'description';
  const tags = document.createElement('div');
  tags.className = 'tags';

  main.appendChild(container);
  container.appendChild(listTitle);
  container.appendChild(description);
  container.appendChild(tags);

  listTitle.innerText = project.title;
  description.innerText = project.description;

  project.tags.split(',').map((t) => {
    const tag = document.createElement('div');
    tag.className = 'tag';
    tags.appendChild(tag);
    tag.innerText = t;
  });

  container.addEventListener('click', () => {
    window.location.href = `/project/${project.title}`;
  });
});
*/
