function distributeTeams() {
    
    const num_players = 2*document.getElementById('max_players').value;
    const $random_btn = document.getElementById('distribute_random');
    const $team_list = document.getElementById('team_list');
    const $cancha = document.getElementById('espacio_cancha');
    $team_list.hidden = false;

    if (!num_players) {
        alert('Please enter the number of players');
        return;
    }

    // Recopilar todos los nombres de los jugadores
    let playerNames = [];
    for (let i = 0; i < num_players; i++) {
        const playerName = document.getElementById(`playerName${i+1}`).value;
        playerNames.push(playerName);
        //document.getElementById(`playerName${i+1}`).disabled = true;
    }

    // Mezclar la lista de nombres de forma aleatoria
    [playerNames, indices] = shuffleArray(playerNames);

    // Dividir la lista en dos mitades
    const half = Math.ceil(playerNames.length / 2);
    const teamA = playerNames.slice(0, half);
    const teamB = playerNames.slice(half);

    // Asignar los nombres a los equipos
    const teamAList = document.querySelector('#TeamA ul');
    const teamBList = document.querySelector('#TeamB ul');

    var cont = 1;
    teamAList.innerHTML = ``;
    teamBList.innerHTML = ``;
    $cancha.innerHTML = ``;

    teamA.forEach(name => {
        
        const listItem = document.createElement('li');
        listItem.textContent = name;
        listItem.id = `tabla_${indices[cont-1]}`;
        teamAList.appendChild(listItem);
        if (cont == 1) {
            $cancha.innerHTML += 
            `<div id="listado_${indices[cont-1]}" class="jugador" equipo="rojo" style="top: ${6.25 - 2.5}%; left: ${50- 7/2}%;">${name}</div>`;            
        }

        else if (cont >= 2 && cont <= 5) {
            $cancha.innerHTML += 
            `<div id="listado_${indices[cont-1]}" class="jugador" equipo="rojo" style="top: ${6.25*3-2.5}%; left: ${ 12.5*(2*(cont-2)+1) - 3.5 }%;">${name}</div>`;
        }

        else if (cont >= 6 && cont <= 8) {
            $cancha.innerHTML += 
            `<div id="listado_${indices[cont-1]}" class="jugador" equipo="rojo" style="top: ${6.25*5-2.5}%; left: ${ 16.7*(2*(cont-6)+1) - 3.5 }%;">${name}</div>`;
        }

        else if (cont >= 9 && cont <= 11) {
            $cancha.innerHTML += 
            `<div id="listado_${indices[cont-1]}" class="jugador" equipo="rojo" style="top: ${6.25*7-2.5}%; left: ${ 16.7*(2*(cont-9)+1) - 3.5 }%;">${name}</div>`;
        }
        

        cont = cont + 1;
    });

    var cont = 1;
    teamB.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        listItem.id = `tabla_${indices[num_players/2 +cont-1]}`;
        teamBList.appendChild(listItem);

        if (cont == 1) {
            $cancha.innerHTML += 
            `<div id="listado_${indices[num_players/2 +cont-1]}" class="jugador" equipo="azul" style="top: ${100-(6.25 + 2.5)}%; left: ${50- 7/2}%;">${name}</div>`;
        }

        else if (cont >= 2 && cont <= 5) {
            $cancha.innerHTML += 
            `<div id="listado_${indices[num_players/2 +cont-1]}" class="jugador" equipo="azul" style="top: ${100-(6.25*3 + 2.5)}%; left: ${ 12.5*(2*(cont-2)+1) - 3.5 }%;">${name}</div>`;
        }

        else if (cont >= 6 && cont <= 8) {
            $cancha.innerHTML += 
            `<div id="listado_${indices[num_players/2 +cont-1]}" class="jugador" equipo="azul" style="top: ${100-(6.25*5 + 2.5)}%; left: ${ 16.7*(2*(cont-6)+1) - 3.5 }%;">${name}</div>`;
        }

        else if (cont >= 9 && cont <= 11) {
            $cancha.innerHTML += 
            `<div id="listado_${indices[num_players/2 +cont-1]}" class="jugador" equipo="azul" style="top: ${100-(6.25*7 + 2.5)}%; left: ${ 16.7*(2*(cont-9)+1) - 3.5 }%;">
            ${name}
            </div>`;
        }        
        cont = cont + 1;
    });

    for (let i = 1; i <= num_players; i++) {
        const $playerName = document.getElementById(`playerName${i}`);
        
        $playerName.addEventListener('input', ()=>{
            const $playerNameListed = document.getElementById(`listado_${i}`);
            const $playerNameTable = document.getElementById(`tabla_${i}`);

            $playerNameListed.innerHTML = $playerName.value;
            $playerNameTable.innerHTML = $playerName.value;
        });
    }

    //$random_btn.disabled = true;    
    mover_jugadores();

}

// Función para mezclar un array (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    
    let indices = [];

    for (let i = 1; i <= array.length; i++) {
        indices.push(i);
    }

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return [array, indices];
}


function customize_teams(){
    console.log("Customize")
    // Parte para hacer que aparezcan los items, y que se les asigne un equipo de forma requerida
    const $select_jugador_1 = document.getElementById('custom_team_player_1');
    console.log($select_jugador_1.hidden);
    if ($select_jugador_1.hidden == true){
        const $random_btn = document.getElementById('distribute_random');
        $random_btn.disabled = true;

        const num_players = 2*document.getElementById('max_players').value;

        for (let i = 0; i < num_players; i++) {
            const $playerSelect = document.getElementById(`custom_team_player_${i+1}`);
            $playerSelect.hidden = false;  
            $playerSelect.removeAttribute("disabled");                        

            $playerSelect.addEventListener('change', function () {
                const selectedOption = $playerSelect.options[$playerSelect.selectedIndex];
                const selectedValue = selectedOption.value;
                
                console.log(selectedValue)
            
                // Cambia el color del <select> según la opción seleccionada
                switch (selectedValue) {
                    case '1':
                        $playerSelect.style.backgroundColor = "rgb(255,75,75)";
                        $playerSelect.style.color = 'white';
                        break;
                    case '2':
                        $playerSelect.style.backgroundColor = "rgb(28,176,246)";
                        $playerSelect.style.color = 'white';
                        break;
                    default:
                        $playerSelect.style.backgroundColor = 'white';
                        $playerSelect.style.color = 'black';
                }
            });
            
            //document.getElementById(`playerName${i+1}`).disabled = true;
        }
    }
    else if ($select_jugador_1.hidden == false){
        const $random_btn = document.getElementById('distribute_random');
        const $team_list = document.getElementById('team_list');
        const $cancha = document.getElementById('espacio_cancha');

        const num_players = 2*document.getElementById('max_players').value;        
        // Asignar los nombres a los equipos
        const teamAList = document.querySelector('#TeamA ul');
        const teamBList = document.querySelector('#TeamB ul');

        teamAList.innerHTML = ``;
        teamBList.innerHTML = ``;
        $cancha.innerHTML = ``;

        var contRojos = 1;
        var contAzules = 1;

        for (let i = 0; i < num_players; i++) {
            const $playerSelect = document.getElementById(`custom_team_player_${i+1}`);            
            const selectedOption = $playerSelect.options[$playerSelect.selectedIndex];
            const $playerName = document.getElementById(`playerName${i+1}`);
            const playerName = document.getElementById(`playerName${i+1}`).value;
            const selectedValue = selectedOption.value;

            const listItem = document.createElement('li');
            listItem.textContent = playerName;
            listItem.id = `tabla_${i+1}`;

            
            if (selectedValue == "1"){
                teamAList.appendChild(listItem);

                if (contRojos == 1) {
                    $cancha.innerHTML += 
                    `<div id="listado_${i+1}" class="jugador" equipo="rojo" style="top: ${6.25 - 2.5}%; left: ${50- 7/2}%;">${playerName}</div>`;            
                }
        
                else if (contRojos >= 2 && contRojos <= 5) {
                    $cancha.innerHTML += 
                    `<div id="listado_${i+1}" class="jugador" equipo="rojo" style="top: ${6.25*3-2.5}%; left: ${ 12.5*(2*(contRojos-2)+1) - 3.5 }%;">${playerName}</div>`;
                }
        
                else if (contRojos >= 6 && contRojos <= 8) {
                    $cancha.innerHTML += 
                    `<div id="listado_${i+1}" class="jugador" equipo="rojo" style="top: ${6.25*5-2.5}%; left: ${ 16.7*(2*(contRojos-6)+1) - 3.5 }%;">${playerName}</div>`;
                }
        
                else if (contRojos >= 9 && contRojos <= 11) {
                    $cancha.innerHTML += 
                    `<div id="listado_${i+1}" class="jugador" equipo="rojo" style="top: ${6.25*7-2.5}%; left: ${ 16.7*(2*(contRojos-9)+1) - 3.5 }%;">${playerName}</div>`;
                }
                else {
                    alert("It is not allowed to have more than 11 players in the Red team");
                    return
                }  
                
        
                contRojos = contRojos + 1;
            }
            else if (selectedValue == "2"){
                teamBList.appendChild(listItem);

                if (contAzules == 1) {
                    $cancha.innerHTML += 
                    `<div id="listado_${i+1}" class="jugador" equipo="azul" style="top: ${100-(6.25 + 2.5)}%; left: ${50- 7/2}%;">${playerName}</div>`;
                }
        
                else if (contAzules >= 2 && contAzules <= 5) {
                    $cancha.innerHTML += 
                    `<div id="listado_${i+1}" class="jugador" equipo="azul" style="top: ${100-(6.25*3 + 2.5)}%; left: ${ 12.5*(2*(contAzules-2)+1) - 3.5 }%;">${playerName}</div>`;
                }
        
                else if (contAzules >= 6 && contAzules <= 8) {
                    $cancha.innerHTML += 
                    `<div id="listado_${i+1}" class="jugador" equipo="azul" style="top: ${100-(6.25*5 + 2.5)}%; left: ${ 16.7*(2*(contAzules-6)+1) - 3.5 }%;">${playerName}</div>`;
                }
        
                else if (contAzules >= 9 && contAzules <= 11) {
                    $cancha.innerHTML += 
                    `<div id="listado_${i+1}" class="jugador" equipo="azul" style="top: ${100-(6.25*7 + 2.5)}%; left: ${ 16.7*(2*(contAzules-9)+1) - 3.5 }%;">
                    ${playerName}
                    </div>`;
                }  
                else {
                    alert("It is not allowed to have more than 11 players in the Blue team");
                    return
                }      
                contAzules = contAzules + 1;
            }

            
        
            $playerName.addEventListener('input', ()=>{
                const $playerNameListed = document.getElementById(`listado_${i+1}`);
                const $playerNameTable = document.getElementById(`tabla_${i+1}`);
                console.log(i+1)
                $playerNameListed.innerHTML = $playerName.value;
                $playerNameTable.innerHTML = $playerName.value;
            });
        }

        
        $team_list.hidden = false;
        $random_btn.disabled = false;
    }

    mover_jugadores();

}



function mover_jugadores(){

    const jugadores = document.querySelectorAll('.jugador');
    const cancha = document.querySelector('.cancha');
  
    jugadores.forEach(jugador => {
      jugador.addEventListener('mousedown', (e) => {
        e.preventDefault(); // Evita comportamientos no deseados
  
        // Obtén las coordenadas relativas al contenedor de la cancha
        const rect = cancha.getBoundingClientRect();
        
        function moverJugador(e) {
          // Calcula las nuevas coordenadas relativas a la cancha
          const x = e.clientX - rect.left - jugador.offsetWidth / 2;
          const y = e.clientY - rect.top - jugador.offsetHeight / 2;
  
          // Limita el movimiento dentro de la cancha
          const maxX = rect.width - jugador.offsetWidth;
          const maxY = rect.height - jugador.offsetHeight;
  
          jugador.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
          jugador.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
        }


        function moverJugador_tactil(e) {
            e.preventDefault()
            // Calcula las nuevas coordenadas relativas a la cancha
            const touch = e.touches[0];
            const x = touch.clientX - rect.left - jugador.offsetWidth / 2;
            const y = touch.clientY - rect.top - jugador.offsetHeight / 2;
    
            // Limita el movimiento dentro de la cancha
            const maxX = rect.width - jugador.offsetWidth;
            const maxY = rect.height - jugador.offsetHeight;
    
            jugador.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
            jugador.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
          }
  
        document.addEventListener('mousemove', moverJugador);
        document.addEventListener('touchmove', moverJugador_tactil);        
        
        document.addEventListener('touchend', () => {
            document.removeEventListener('touchmove', moverJugador_tactil);
          }, { once: true });
        
        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', moverJugador);
        }, { once: true });
        
      });
    });
}