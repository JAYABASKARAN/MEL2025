const scriptURL = 'https://script.google.com/macros/s/AKfycbwvMh0sQOZtGvAJcxdRrZA9P3aUQJRKH2lLFwHZsxvGEaMJKlfzzna3yLkgFGCa-A/exec';
const form = document.getElementById('registration-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      alert('Form submitted successfully!');
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('ERROR');
    });
});
