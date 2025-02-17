const form = document.getElementById('teamForm');


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission    
    if(e.submitter.id == 'distribute_random'){
        distributeTeams();
    }    
    if(e.submitter.id == 'custom_teams'){
        customize_teams();
    } 
});