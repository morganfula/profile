window.addEventListener('mousemove', onMouseMove);

const morganFula = document.querySelector('.morganfula')
const backgroundSphere = document.querySelector('.background-sphere')
const foregroundSphere = document.querySelector('.foreground-sphere')

function onMouseMove(e) {
  const movement = (e.clientX - window.innerWidth / 2) / window.innerWidth * 2;
  console.log(movement)

  backgroundSphere.style.transform = `translate3d(calc(${movement} * 1vh), 0, 0)`;
  morganFula.style.transform = `translate3d(calc(${-movement} * 2vh), 0, 0)`;
  foregroundSphere.style.transform = `translate3d(calc(${-movement} * 8vh), 0, 0)`;
}
