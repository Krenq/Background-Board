const board = document.querySelector('#board');
const SQUARES_NUMBER = 1026;
const colors = ['red', 'yellow', 'green', 'pink', 'purple', 'brown', 'blue'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');

  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

const setColor = (target) => {
  const color = randomColor();
  target.style.backgroundColor = `${color}`;
  target.style.boxShadow = `0px 0px 2px ${color}, 0px 0px 10px ${color}`;
};

const removeColor = (target) => {
  target.style.backgroundColor = '#1d1d1d';
  target.style.boxShadow = '0 0 2px black'
};

const randomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};
