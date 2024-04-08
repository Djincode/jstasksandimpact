"use strict";

// `<li class="track">
//     <span class="rating">index</span>
//     <div class="track-img">
//       <img src="Images/.jpeg" alt="" />
//     </div>
//     <div class="track-desc">
//       <h3 class="name">song</h3>
//       <p class="artist">artist</p>
//     </div>
//     <span class="streams">streamed</span>
//   </li>`

const data = [
  {
    artist: "Drake",
    song: "In My Feelings",
    image: "drake",
    streamed: 123123123,
  },
  {
    artist: "Ed Sheeran",
    song: "Shape of You",
    image: "ed",
    streamed: 987654321,
  },
  {
    artist: "Billie Eilish",
    song: "Bad Guy",
    image: "billie",
    streamed: 654321987,
  },
  {
    artist: "Post Malone",
    song: "Rockstar",
    image: "post",
    streamed: 456789123,
  },
  {
    artist: "Ariana Grande",
    song: "7 Rings",
    image: "ariana",
    streamed: 345678912,
  },
  {
    artist: "Lil Nas X",
    song: "Old Town Road",
    image: "lilnas",
    streamed: 234567891,
  },
  {
    artist: "The Weeknd",
    song: "Blinding Lights",
    image: "weeknd",
    streamed: 123456789,
  },
  {
    artist: "Camila Cabello",
    song: "Havana",
    image: "camila",
    streamed: 112233445,
  },
  {
    artist: "Imagine Dragons",
    song: "Believer",
    image: "imagine",
    streamed: 99887766,
  },
  {
    artist: "Taylor Swift",
    song: "Shake It Off",
    image: "taylor",
    streamed: 88776655,
  },
  {
    artist: "Shawn Mendes",
    song: "Señorita",
    image: "shawn",
    streamed: 77665544,
  },
  {
    artist: "Bruno Mars",
    song: "Uptown Funk",
    image: "bruno",
    streamed: 66554433,
  },
  { artist: "Rihanna", 
   song: "Work",
    image: "rihanna", 
    streamed: 55443322 },
  {
    artist: "Justin Bieber",
    song: "Sorry",
    image: "justin",
    streamed: 44332211,
  },
  { artist: "Katy Perry",
   song: "Roar",
    image: "katy", 
    streamed: 33221100 
  },
  {
    artist: "Cardi B",
    song: "Bodak Yellow",
    image: "cardib",
    streamed: 22110099,
  },
  { artist: "Maroon 5",
   song: "Sugar", 
   image: "maroon", 
   streamed: 11009988
   },
  { artist: "Halsey",
   song: "Without Me",
    image: "halsey", 
    streamed: 9900887
   },
  { artist: "Dua Lipa",
   song: "New Rules",
    image: "dua", 
    streamed: 8800776 
  },
  {
    artist: "Imagine Dragons",
    song: "Radioactive",
    image: "imagine-2",
    streamed: 7700665,
  },
  {
    artist: "The Chainsmokers",
    song: "Closer",
    image: "chainsmokers",
    streamed: 6600554,
  },
  {
    artist: "Sam Smith",
    song: "Stay with Me",
    image: "sam",
    streamed: 5500443,
  },
  { artist: "Beyoncé",
   song: "Formation", 
   image: "beyonce",
    streamed: 4400332
   },
  {
    artist: "Coldplay",
    song: "Viva La Vida",
    image: "coldplay",
    streamed: 3300221,
  },
  { artist: "Sia", 
  song: "Cheap Thrills",
   image: "sia", 
   streamed: 2200110 },
];





///////////////////////////////////////




let inputText = document.getElementById("search-input");
let tracklist = document.querySelector(".track-list");
let showbtn = document.getElementById("show");

// İlk olarak 5 mahnini goster
function showInitialTracks() {
  tracklist.innerHTML = ""; 

  const tracksToShow = 5;
  for (let i = 0; i < tracksToShow; i++) {
    const track = data[i];

    const trackItem = `
      <li class="track">
        <span class="rating">${i + 1}</span>
        <div class="track-img">
          <img src="Images/${track.image}.jpeg" alt="${track.song}" />
        </div>
        <div class="track-desc">
          <h3 class="name">${track.song}</h3>
          <p class="artist">${track.artist}</p>
        </div>
        <span class="streams">${track.streamed}</span>
      </li>
    `;

    tracklist.innerHTML += trackItem;
  }

  // "Show More" butonunu göster
  showbtn.innerHTML = "Show More";
}

// butun mahnilari gosteren funksiya
function showAllTracks() {
  tracklist.innerHTML = ""; 

  data.forEach((track, index) => {
    const trackItem = `
      <li class="track">
        <span class="rating">${index + 1}</span>
        <div class="track-img">
          <img src="Images/${track.image}.jpeg" alt="${track.song}" />
        </div>
        <div class="track-desc">
          <h3 class="name">${track.song}</h3>
          <p class="artist">${track.artist}</p>
        </div>
        <span class="streams">${track.streamed}</span>
      </li>
    `;

    tracklist.innerHTML += trackItem;
  });

  
  showbtn.innerHTML = "Show Less";
}

// "Show More" veya "Show Less" butonuna basılanda
function toggleTracks() {
  if (showbtn.innerHTML === "Show More") {
    showAllTracks();
  } else {
    showInitialTracks();
  }
}

// "Show More" veya "Show Less" butonuna event
showbtn.addEventListener("click", toggleTracks);

// search
function searchTracks() {
  const searchText = inputText.value.toLowerCase();

  const filteredTracks = data.filter((track) => {
    const artistName = track.artist.toLowerCase();
    const songName = track.song.toLowerCase();

    return artistName.includes(searchText) || songName.includes(searchText);
  });

  tracklist.innerHTML = ""; 

  for (let i = 0; i < filteredTracks.length; i++) {
    const track = filteredTracks[i];

    const trackItem = `
      <li class="track">
        <span class="rating">${i + 1}</span>
        <div class="track-img">
          <img src="Images/${track.image}.jpeg" alt="${track.song}" />
        </div>
        <div class="track-desc">
          <h3 class="name">${track.song}</h3>
          <p class="artist">${track.artist}</p>
        </div>
        <span class="streams">${track.streamed}</span>
      </li>
    `;

    tracklist.innerHTML += trackItem;
  }
}


inputText.addEventListener("input", searchTracks);


document.addEventListener("DOMContentLoaded", showInitialTracks);