document.addEventListener("DOMContentLoaded", function() {
    // Get references to the search input and media list
    const searchBar = document.getElementById('searchBar');
    const mediaList = document.getElementById('mediaList');
    const mediaItems = mediaList.getElementsByClassName('media-item');
    
    // Event listener for search input
    searchBar.addEventListener('input', function() {
        // Get the search term and convert it to lowercase for case-insensitive comparison
        const searchTerm = searchBar.value.toLowerCase();
        
        // Loop through all the media items
        for (let i = 0; i < mediaItems.length; i++) {
            const mediaItem = mediaItems[i];
            const mediaTitle = mediaItem.querySelector('.media-title').textContent.toLowerCase();
            
            // Check if the media title contains the search term
            if (mediaTitle.includes(searchTerm)) {
                // If it matches, show the item
                mediaItem.style.display = '';
            } else {
                // If it doesn't match, hide the item
                mediaItem.style.display = 'none';
            }
        }
    });
});
