const containerGoal = document.querySelector('#goals');
const timetable = document.querySelector('#timetable tbody tr');

document.addEventListener('DOMContentLoaded', async () => {
  const resGoal = await fetch(window.location.href + '/goal');
  const goals = await resGoal.json();
  console.log(goals);

  goals.map((goal) => {
    const listGoal = document.createElement('div');
    listGoal.className = 'goal';

    containerGoal.appendChild(listGoal);
    listGoal.innerText = goal.goal;
  });

  const resTable = await fetch(window.location.href + '/table');
  const subjects = await resTable.json();
  console.log(subjects);
  /*

  let col = document.createElement('td');

  for (let i = 0; i < 13; i++) {
    let grid = document.createElement('div');
    grid.className = 'grid';
    grid.innerText = i + 9;
    col.appendChild(grid);
  }

  timetable.appendChild(col);

  for (let i = 0; i < 5; i++) {
    col = document.createElement('td');

    for (let j = 0; j < 13; j++) {
      let grid = document.createElement('div');
      grid.className = 'grid';
      col.appendChild(grid);
    }

    timetable.appendChild(col);
  }

  const colors = [
    '#f3b0c3',
    '#ffccb6',
    '#ffffb5',
    '#cbaacb',
    '#abdee6',
    '#ff968a',
    '#eceae4',
    '#97c1a9',
    '#fee1e8',
  ];
  let map = new Map();
  let cols = document.querySelectorAll('td');
  for (let i = 0; i < 5; i++) {
    let col = cols[i + 1];
    for (let j = 0; j < subjects[i].length; j++) {
      let grid = document.createElement('div');

      if (map.has(subjects[i][j][0])) {
        grid.className = `subject subject${map.get(subjects[i][j][0])}`;
        grid.style.backgroundColor = colors[map.get(subjects[i][j][0]) % 9];
      } else {
        grid.className = `subject subject${map.size + 1}`;
        grid.style.backgroundColor = colors[(map.size + 1) % 9];
        map.set(subjects[i][j][0], map.size + 1);
      }
      grid.innerText = subjects[i][j][0];
      grid.style.top = `${(subjects[i][j][1] - 9) * 60}px`;
      grid.style.height = `${subjects[i][j][2] * 60}px`;
      col.appendChild(grid);
    }
    timetable.appendChild(col);
  }
    */
});
