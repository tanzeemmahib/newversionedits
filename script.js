const audio = document.getElementById("audio");
const lyricsBox = document.getElementById("lyrics");
const volumeSlider = document.getElementById("volume");

// Lyrics with timestamps in seconds
const syncedLyrics = [
  { time: 0, text: "本当は私気づいてたんです" },
  { time: 4, text: "あなたが私を見ていてくれたこと" },
  { time: 8, text: "Alright, alright, whoa" },
  { time: 12, text: "Why you pointing at me with that knife?" },
  { time: 16, text: "I've been cutting corners all my life, girl" },
  { time: 20, text: "The terror doesn't blossom overnight, no" },
  { time: 25, text: "She's running through the city in a rampage" },
  { time: 29, text: "Pressing on her fingers 'til the bones break" },
  { time: 33, text: "There's blood all in her nose from the propane" },
  { time: 37, text: "But a needle to the skin will make the pain fade" },
  { time: 41, text: "Yeah, ah-ah" },
  { time: 43, text: "This is what I do, ah-ah" },
  { time: 46, text: "Take another bite, ah-ah" },
  { time: 49, text: "Big enough to chew" },
  { time: 52, text: "She said, 'Careful, or you'll lose it'" },
  { time: 56, text: "But, girl, I'm only human" },
  { time: 60, text: "And I know there's a blade where your heart is" }
];

// Create lyric lines in the DOM
function renderLyrics() {
  lyricsBox.innerHTML = "";
  syncedLyrics.forEach((line, index) => {
    const p = document.createElement("p");
    p.classList.add("lyric-line");
    p.setAttribute("data-index", index);
    p.textContent = line.text;
    lyricsBox.appendChild(p);
  });
}

// Highlight current lyric line
function highlightLyric(currentTime) {
  for (let i = 0; i < syncedLyrics.length; i++) {
    const nextTime = syncedLyrics[i + 1]?.time ?? Infinity;
    if (currentTime >= syncedLyrics[i].time && currentTime < nextTime) {
      const currentLine = document.querySelector(`.lyric-line[data-index="${i}"]`);
      if (!currentLine.classList.contains("active")) {
        document.querySelectorAll(".lyric-line").forEach(line => line.classList.remove("active"));
        currentLine.classList.add("active");

        // Auto scroll
        const offsetTop = currentLine.offsetTop - lyricsBox.clientHeight / 2;
        lyricsBox.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
      break;
    }
  }
}

// Volume slider
volumeSlider.addEventListener("input", () => {
  audio.volume = parseFloat(volumeSlider.value);
});

// Sync lyrics
audio.addEventListener("timeupdate", () => {
  highlightLyric(audio.currentTime);
});

// On page load
window.addEventListener("DOMContentLoaded", () => {
  renderLyrics();
  audio.volume = parseFloat(volumeSlider.value);
});
