const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

// Function to remove articles from the beginning of the band name
function stripArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands array considering the stripArticle function
const sortedBands = bands.sort((a, b) => {
    if (stripArticle(a) < stripArticle(b)) return -1;
    if (stripArticle(a) > stripArticle(b)) return 1;
    return 0;
});

// Get the unordered list element
const bandList = document.getElementById('band');

// Create list items for each band and append to the unordered list
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
