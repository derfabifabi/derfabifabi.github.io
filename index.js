const songs = {
  afterall: {
    name: 'afterall',
    title: 'After All',
    takes: 3,
  },
  ambitions: {
    name: 'ambitions',
    title: 'Ambitions',
    takes: 3,
  },
  unemployed: {
    name: 'unemployed',
    title: 'Unemployed',
    takes: 7,
  },shithotel: {
    name: 'shithotel',
    title: 'Shit Hotel',
    takes: 6,
  },profit: {
    name: 'profit',
    title: 'Profit',
    takes: 4,
  },
};

addSongsToDom(songs);

function createTake(song, index) {
  const { name, title, takes } = song;
  const el = document.createElement('li');
  el.classList.add('flex', 'flex-col', 'gap-y-1');
  const innerEl = `
      <h4 class="text-xs flex-shrink-0">Take ${index + 1}</h4>
      <audio controls class="w-full">
        <source
          src="export/${name}/${name}_take_0${index + 1}.mp3"
          type="audio/mpeg"
        />
      </audio>
    `;
  el.innerHTML = innerEl;
  return el;
}

function createTakes(song) {
  const el = document.createElement('ul');
  el.classList.add('flex', 'flex-col', 'gap-y-3', 'py-6');
  for (let index = 0; index < song.takes; index++) {
    el.appendChild(createTake(song, index));
  }
  return el;
}

function createSong(song) {
  const el = document.createElement('li');
  const details = document.createElement('details');
  details.innerHTML = `<summary class="sticky top-0 cursor-pointer bg-white px-2 py-1 text-3xl">${song.title}</summary>`;
  details.appendChild(createTakes(song));
  el.appendChild(details);
  return el;
}

function addSongsToDom(songs) {
  Object.keys(songs).forEach((song) => {
    document
      .getElementById('songList')
      .appendChild(createSong(songs[song]));
  });
}
