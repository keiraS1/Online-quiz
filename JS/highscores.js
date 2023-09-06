    // high score page

    //when you submit the name form
    document.getElementById('scoreForm').addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const plays = JSON.parse(localStorage.getItem('plays')) || []; //pulls plays Array outside of the localstorage
        plays.push({ name, score: localStorage.getItem('score') });
        localStorage.setItem('plays', JSON.stringify(plays)); //saves updated plays array in the local storage

        showPlays(); // after saving a new name/score
    });

    function showPlays() {
        document.getElementById('leaderboard').innerHTML = '';
        const plays = JSON.parse(localStorage.getItem('plays')) || [];
        for (let i = 0; i < plays.length; i++) {
            const currentPlay = plays[i];
            const listElement = document.createElement('li');
            listElement.innerText = currentPlay.name + ' - ' + currentPlay.score
            document.getElementById('leaderboard').append(listElement);
        }
    }
    showPlays();   // the past plays 
