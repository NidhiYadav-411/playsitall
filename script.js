// Function to filter playlists based on search input
function searchPlaylists() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const playlists = document.querySelectorAll('.playlist-card');

    playlists.forEach(function(playlist) {
        const title = playlist.querySelector('h3').textContent.toLowerCase();
        if (title.includes(query)) {
            playlist.style.display = 'block';
        } else {
            playlist.style.display = 'none';
        }
    });
}
