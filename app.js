const counters = document.querySelectorAll('.counter');
const cards = document.querySelectorAll('.overview');
const speed = 350; 

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
      counter.innerText = (count + inc).toFixed(0);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

cards.forEach((item) => {
    item.classList.add('show');
})

