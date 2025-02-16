function addInputs() {
    const num_players = 2*document.getElementById('max_players').value; 
    const $num_players = document.getElementById('max_players'); 
    const $container = document.getElementById("inputs");
    const $names = document.getElementById("names");
    const $nadistribute_random = document.getElementById("distribute_random");
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
                <input required type="text" class="form-control" placeholder="Enter the name of the player ${i+1}" aria-label="Username" aria-describedby="basic-addon1" id = "playerName${i+1}" style = "max-width:250px; min-width:250px">
            </div>`;

        console.log(`playerName${i+1}`);
    }            

    const boton = document.getElementById("confirmation_button");

    boton.disabled = true;
    $num_players.disabled = true; 
    
    $names.hidden = false;
    $nadistribute_random.hidden = false;

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

}