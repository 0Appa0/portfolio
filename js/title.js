export function dancingTitle() {
  const elements = document.getElementsByClassName('title')

  for (let i=0;i<elements.length;i++) {
    elements[i].addEventListener('mouseover', handleMouseOver)
  }
}

async function handleMouseOver(e) {
  e.target.classList.add('dance')
  await delay(1000)
  e.target.classList.remove('dance')
}

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}



export async function randomDancers() {
  const elements = document.getElementsByClassName('title')

  for (let i=0;i<elements.length;i++) {
    const number = randomIntFromInterval(0, elements.length-1)
    elements[number].classList.add('dance')
    await delay(1000)
    elements[number].classList.remove('dance')
  }

  randomDancers()
}

function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}