function addPlayer() {
    const playerName = document.getElementById('playerName').value;
    const teamSelector = document.getElementById('teamSelector').value;
    console.log(teamSelector.replace(/ /g, ""))

    if (!playerName) {
        alert('Please enter a valid name.');
        return;
    }

    const teamList = document.querySelector(`#${teamSelector.replace(/ /g, "")} ul`);            
    const listItem = document.createElement('li');
    listItem.textContent = playerName;
    teamList.appendChild(listItem);
    
    document.getElementById('playerName').value = '';
}