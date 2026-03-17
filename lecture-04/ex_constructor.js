class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
console.log(mySong.title); // Output: Bohemian Rhapsody
console.log(mySong); // Output: Song { title: 'Bohemian Rhapsody', artist: 'Queen' }
console.log(typeof mySong); // Output: object