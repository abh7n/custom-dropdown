
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const arrow = document.querySelector('.arrow');

dropdownButton.addEventListener('click', () => {
  dropdownList.classList.toggle('show');
  arrow.textContent = dropdownButton.classList.contains('open') ? '▲' : '▲';
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    dropdownList.classList.remove('show');
    arrow.textContent = '▲';
  }
});     

dropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    dropdownButton.textContent = item.textContent + ' ';
    dropdownList.classList.remove('show');
    
    dropdownItems.forEach((item) => item.classList.remove('selected'));
    item.classList.add('selected');
  });
});






