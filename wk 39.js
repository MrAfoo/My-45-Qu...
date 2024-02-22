function make_album(artist, album_title, numsongs = null) {
    const album = {
        artist: artist,
        album_title: album_title
    };

    if (numsongs !== null) {
        album.numsongs = numsongs;
    }

    return album;
}

// Example calls
const album1 = make_album("The Beatles", "Abbey Road");
const album2 = make_album("Pink Floyd", "The Dark Side of the Moon", 10);
const album3 = make_album("Led Zeppelin", "IV", 8);

console.log(album1);
console.log(album2);
console.log(album3);
