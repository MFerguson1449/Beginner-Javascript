// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const heading = document.querySelector('h2');
// console.log(heading.textContent);

// heading.textContent = 'Mike is awesome!';
// console.dir(heading.innerText);
// console.dir(heading.textContent);

// Classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute pup';
console.log(pic.naturalWidth);

// pic.setAttribute('alt', 'REALLY CUTE PUP!');
// console.log(pic.getAttribute('alt'));
4