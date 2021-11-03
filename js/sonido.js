const music = {
  overworld: new Howl({
    src: ["audio/Tones and I - Dance Monkey (Lyrics) (192 kbps).mp3"],
    volume: 0.5,
    loop: true,
  }),
};
const uniClick = {
  clickUni: new Howl({
    src: ["audio/uniClick.mp3"],
    volume: 0.3,
  }),
};
const rayoClick = {
  clickrayo: new Howl({
    src: ["audio/rayoClick.mp3"],
    volume: 0.3,
  }),
};
$("#play").click(() => {
  if (!music.overworld.playing()) {
    music.overworld.play();

    uniClick.clickUni.volume(0.3);
    $("#unicornio").click(() => {
      uniClick.clickUni.play();
    });

    rayoClick.clickrayo.volume(0.3);
    $(".nubes").click(() => {
      rayoClick.clickrayo.play();
    });
  }
});

$("#stop").click(() => {
  music.overworld.pause();
  uniClick.clickUni.volume(0);
  rayoClick.clickrayo.volume(0);
});
