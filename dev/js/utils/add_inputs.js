function addInputs() {
    const num_players = 2*document.getElementById('max_players').value; 
    const $num_players = document.getElementById('max_players'); 
    const $container = document.getElementById("inputs");
    const $names = document.getElementById("names");
    const $nadistribute_random = document.getElementById("distribute_random");
    const $custom_teams_btn = document.getElementById("custom_teams");
    const $reload_boton = document.getElementById("reload_button");  
    
    if (!num_players) {
        alert('Please enter the number of players');
        return;
    }


    for (let i = 0; i<num_players; i++)
    {
        $container.innerHTML +=  
            `<div class="input-group mb-3 mt-3 several_inputs">
                <span class="input-group-text" style="background-color:#58cc02; color: white; font-weight: bold;">Player ${i+1}</span>
                <input required type="text" class="form-control" placeholder="Name of the player ${i+1}" aria-label="Username" aria-describedby="basic-addon1" id = "playerName${i+1}" style = "max-width:170px; min-width:170px">

                <select hidden class="form-select" aria-label="Default select example" id="custom_team_player_${i+1}"  disabled required>
                    <option  selected disabled value="">Select the team</option>
                    <option value="1" style = "background-color: rgb(255,75,75); color: #ffffff">Red Team</option>
                    <option value="2" style = "background-color: rgb(28,176,246); color: #ffffff">Blue Team</option>              
                </select>
            </div>`;

        console.log(`playerName${i+1}`);
    }            

    const boton = document.getElementById("confirmation_button");

    boton.disabled = true;
    $num_players.disabled = true; 
    
    $names.hidden = false;
    $nadistribute_random.hidden = false;
    $custom_teams_btn.hidden = false;

    $reload_boton.disabled = false;  
}


function reset_number_of_players(){ 
    
    var resultado = window.confirm('This action will delete all the changes of the page. Do you want to continue?');
    
    if (resultado === false) {        
        return
    }
    const $container = document.getElementById("inputs");  
    const $num_players = document.getElementById('max_players'); 
    const $reload_boton = document.getElementById("reload_button");  
    const $confirmation_boton = document.getElementById("confirmation_button");
    const $names = document.getElementById("names");
    const $team_list = document.getElementById('team_list');
    const $nadistribute_random = document.getElementById("distribute_random");
    const $cancha = document.getElementById('espacio_cancha');
    const $teamAList = document.querySelector('#TeamA ul');
    const $teamBList = document.querySelector('#TeamB ul');
    const $custom_teams_btn = document.getElementById("custom_teams");



    $container.innerHTML =  ``;   
    $cancha.innerHTML =  ``;   
    $teamAList.innerHTML = ``;
    $teamBList.innerHTML = ``;

    
    $confirmation_boton.disabled = false;
    $num_players.disabled = false; 
    $reload_boton.disabled = true;
    $names.hidden = true;  
    $team_list.hidden = true;  
    $nadistribute_random.hidden = true;       
    $nadistribute_random.disabled = false;  
    $custom_teams_btn.hidden = true;

}