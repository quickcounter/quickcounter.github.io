document.querySelector('.input').addEventListener('input', () => {
  localStorage.setItem('input-value', document.querySelector('.input').value);
  document.getElementById('count').innerHTML = `Total words: ${document.querySelector('.input').value.split(/ +/g).filter(a => !'/ +/g'.match(a)).length}`;
});

document.body.onload = function() {
  document.querySelector('.content').style.display = 'flex';
  document.querySelector('.spinner').style.display = 'none';
  document.querySelector('.input').value = localStorage.getItem('input-value');
  document.getElementById('count').innerHTML = `Total words: ${document.querySelector('.input').value.split(/ +/g).filter(a => !'/ +/g'.match(a)).length}`;
};