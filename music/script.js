const clientId = '01b652e47c0d432da137a170b67613b5';
const redirectUri = 'http://127.0.0.1:5500/music/index.html';

document.getElementById('login').addEventListener('click', () => {
    const scopes = 'user-read-private user-read-email streaming';
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&response_type=token`;
    window.location = authUrl;
});

const getAccessToken = () => {
    const hashParams = window.location.hash.substring(1).split('&');
    for (let i = 0; i < hashParams.length; i++) {
        const p = hashParams[i].split('=');
        if (p[0] === 'access_token') {
            return p[1];
        }
    }
    return null;
};

const accessToken = getAccessToken();

if (accessToken) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('loggedIn').style.display = 'block';

    document.getElementById('searchButton').addEventListener('click', () => {
        const query = document.getElementById('searchInput').value;
        if (query) {
            searchTracks(query);
        }
    });
}

function searchTracks(query) {
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => displayResults(data.tracks.items))
    .catch(error => console.error('Error:', error));
}

function displayResults(tracks) {
    const results = document.getElementById('results');
    results.innerHTML = '';

    tracks.forEach(track => {
        const listItem = document.createElement('li');
        listItem.textContent = `${track.artists[0].name} - ${track.name}`;
        listItem.addEventListener('click', () => playTrack(track.id));
        results.appendChild(listItem);
    });
}

function playTrack(trackId) {
    const player = document.getElementById('player');
    player.innerHTML = `<iframe src="https://open.spotify.com/embed/track/${trackId}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
}