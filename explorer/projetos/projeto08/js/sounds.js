export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/simplismenteorobz/trabalhomusic/raw/main/Pink%20Matter%20(Instrumental).m4a")
 
  function pressButton() {
    buttonPressAudio.play()
  }

  function timerEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timerEnd,
    bgAudio
  }

}