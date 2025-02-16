const form = document.getElementById('teamForm');


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('Form submission prevented!');
    distributeTeams();
    console.log('Form submission prevented!');
});