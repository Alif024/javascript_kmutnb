class Media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
}

class Song extends Media {
  constructor(SongData) {
    super(SongData);
    this.artist = SongData.artist;
  }
}

const mySong = new Song({
  artist: "Queen",
  name: "Bohemian Rhapsody",
  publishDate: "1975-10-31"
});

console.log(mySong.name);
console.log(mySong);
