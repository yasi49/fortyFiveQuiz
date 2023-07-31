function makeAlbum(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> =
     {
      artist: artist,
      title: title
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
var album1 = makeAlbum("atif aslam", "teri yadain", 8);
var album2 = makeAlbum("ibrar ul haq", "majajan", 10);
var album3 = makeAlbum("malko", "kala jora", 10);

console.log(album1);
console.log(album2);
console.log(album3);