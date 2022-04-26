const lyrics = [
  {
    lyric: "너를 맴도는 나의 낮, 너만 꿈꾸는 나의 밤",
    artist: "GOLDEN CHILD - LADY"
  },
  {
    lyric: "내 세상에 넌 매일 특별해",
    artist: "GOT7 - Something Good"
  },
  {
    lyric: "터널을 벗어날때 쯤 환하게 널 비춰주는 일",
    artist: "GOT7 - FLY"
  },
  {
    lyric: "바다가 되어 갈 나의 세상을 꿈꾸며 받아들인다",
    artist: "진영 - DIVE"
  },
  {
    lyric: "파란 하늘에서 쏟아져 와 은빛의 눈을 가진 나의 천사",
    artist: "진영 - DIVE"
  },
  {
    lyric: "칠흙 같은 밤 내 맘을 켜준 어둠 속 하나의 빛",
    artist: "GOLDEN CHILD - MILKY WAY"
  },
  {
    lyric: "수없이 펼쳐진 그 빛을 따라가 새로운 시작 그 앞에",
    artist: "ATEEZ - Dazzling Light"
  },
]

const lyric = document.querySelector("#lyrics span:first-child");
const artist = document.querySelector("#lyrics span:last-child");

const randomNum = Math.floor(Math.random()*lyrics.length);

lyric.innerText = lyrics[randomNum].lyric;
artist.innerText = lyrics[randomNum].artist;