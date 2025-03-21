const main = document.querySelector('.project');

document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('/info/data');
  const projects = await res.json();

  projects.map((project) => {
    const listTitle = document.createElement('div');
    listTitle.className = 'listTitle';

    main.appendChild(listTitle);

    listTitle.innerText = project.title;

    listTitle.addEventListener('click', () => {
      window.location.href = `/project/${project.title}`;
    });
  });
});
