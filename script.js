const lyricsData = [
  { time: 0, text: "本当は私気づいてたんです" },
  { time: 3, text: "あなたが私を見ていてくれたこと" },
  { time: 6, text: "Alright, alright, whoa" },
  { time: 9, text: "Why you pointing at me with that knife?" },
  { time: 13, text: "I've been cutting corners all my life, girl" },
  { time: 17, text: "The terror doesn't blossom overnight, no" },
  { time: 21, text: "She's running through the city in a rampage" },
  { time: 25, text: "Pressing on her fingers 'til the bones break" },
  { time: 29, text: "There's blood all in her nose from the propane" },
  { time: 33, text: "But a needle to the skin will make the pain fade" },
  { time: 37, text: "Yeah, ah-ah" },
  { time: 39, text: "This is what I do, ah-ah" },
  { time: 42, text: "Take another bite, ah-ah" },
  { time: 45, text: "Big enough to chew" },
  { time: 48, text: "She said, \"Careful, or you'll lose it\"" },
  { time: 52, text: "But, girl, I'm only human" },
  { time: 55, text: "And I know there's a blade where your heart is" },
  { time: 59, text: "And you know how to use it" },
  { time: 62, text: "And you can take my flesh if you want, girl" },
  { time: 66, text: "But, baby, don't abuse it" },
  { time: 70, text: "These voices in my head screaming, \"Run, now\"" },
  { time: 74, text: "I'm praying that they're human" },
  { time: 78, text: "Rollin', rollin', rolling back your eyes through your mind like" },
  { time: 82, text: "Oh, whoa, the pressure in the gland's tight" },
  { time: 86, text: "Yeah, whoa, yeah, it's either kill or be killed like" },
  { time: 90, text: "Oh, whoa, the blood is either poured or it's spilt like" },
  { time: 94, text: "Yeah, ah-ah" },
  { time: 96, text: "This is what I do, ah-ah" },
  { time: 99, text: "Take another bite, ah-ah" },
  { time: 102, text: "Big enough to chew" },
  { time: 105, text: "She said, \"Careful, or you'll lose it\"" },
  { time: 109, text: "But, girl, I'm only human" },
  { time: 113, text: "And I know there's a blade where your heart is" },
  { time: 117, text: "And you know how to use it" },
  { time: 120, text: "And you can take my flesh if you want, girl" },
  { time: 124, text: "But, baby, don't abuse it" },
  { time: 128, text: "These voices in my head screaming, \"Run, now\"" },
  { time: 132, text: "I'm praying that they're human" },
  { time: 136, text: "Alright, alright, whoa" },
  { time: 139, text: "Love you but you cannot spend the night" },
  { time: 143, text: "Nah, I've been alone almost all my life, girl" },
  { time: 147, text: "And shit like that don't change up overnight, sweet" },
  { time: 151, text: "I let you sleep in my tee (tee)" },
  { time: 154, text: "Tell me the things that you don't normally tweet" },
  { time: 157, text: "Acid and LSD and smokin' blunts on the beach" },
  { time: 161, text: "69 down 69, so we can both get a piece, yeah" },
  { time: 165, text: "I've been cutting corners like my whole life" },
  { time: 169, text: "Backstabbing bitches tryna kill me with the whole knife" },
  { time: 173, text: "Day I die'll be the only day a nigga ghostwrite" },
  { time: 177, text: "When I go, they'll treat me like a god if this shit goes right" },
  { time: 181, text: "She said, \"Careful, or you'll lose it\"" },
  { time: 185, text: "But, girl, I'm only human" },
  { time: 189, text: "And I know there's a blade where your heart is" },
  { time: 193, text: "And you know how to use it" },
  { time: 196, text: "And you can take my flesh if you want, girl" },
  { time: 200, text: "But, baby, don't abuse it" },
  { time: 204, text: "These voices in my head screaming, \"Run, now\"" },
  { time: 208, text: "I'm praying that they're human" },
  { time: 212, text: "Please understand that I'm trying my hardest" },
  { time: 216, text: "My head's a mess, but I'm trying regardless" },
  { time: 220, text: "Anxiety is one hell of a problem" },
  { time: 224, text: "She's latching onto me, I can't resolve it" },
  { time: 228, text: "It's not right, it's not fair, it's not fair, it's not fair" },
  { time: 232, text: "It's no fair, it's no fair" },
  { time: 235, text: "Oh, no, no, no (ooh-ooh)" },
  { time: 239, text: "Don't run, don't run" },
];

const lyricsContainer = document.getElementById("lyrics");
const audio = document.getElementById("audio");
const volumeSlider = document.getElementById("volume");

// Render lyrics on page load
lyricsData.forEach((line, i) => {
  const p = document.createElement("p");
  p.classList.add("lyric-line");
  p.setAttribute("data-index", i);
  p.textContent = line.text;
  lyricsContainer.appendChild(p);
});

function highlightCurrentLyric(time) {
  for (let i = 0; i < lyricsData.length; i++) {
    const nextTime = lyricsData[i + 1]?.time ?? Infinity;
    if (time >= lyricsData[i].time && time < nextTime) {
      const active = document.querySelector(".lyric-line.active");
      const current = document.querySelector(`.lyric-line[data-index='${i}']`);
      if (active !== current) {
        if (active) active.classList.remove("active");
        current.classList.add("active");
        lyricsContainer.scrollTo({
          top: current.offsetTop - lyricsContainer.clientHeight / 2,
          behavior: "smooth"
        });
      }
      break;
    }
  }
}

audio.addEventListener("timeupdate", () => {
  highlightCurrentLyric(audio.currentTime);
});

volumeSlider.addEventListener("input", () => {
  audio.volume = parseFloat(volumeSlider.value);
});
