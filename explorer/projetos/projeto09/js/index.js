import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonLess,
    buttonMore,
    buttonStop,
    florest,
    rain,
    fire,
    coffe,
    oneFlorest,
    twoFlorest,
    oneRain,
    twoRain,
    oneFire,
    twoFire,
    oneCoffe,
    twoCoffe
} from "./elements.js"
import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"

const sounds = Sounds()

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonStop,
    oneFlorest,
    twoFlorest,
    oneRain,
    twoRain,
    oneFire,
    twoFire,
    oneCoffe,
    twoCoffe
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

minutesDisplay.addEventListener('change', function(e){
  minutesDisplay.value = Number(e.target.value)
})

buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.clear()
})

buttonStop.addEventListener('click', function(){
  controls.stop()
  timer.clear()
  timer.reset()
})

buttonMore.addEventListener('click', function(){
  controls.more()
})

buttonLess.addEventListener('click', function(){
  controls.less()
})

florest.addEventListener('click', function(){
  controls.florest()
  sounds.florest()
})

rain.addEventListener('click', function(){
  controls.rain()
  sounds.rain()
})

fire.addEventListener('click', function(){
  controls.fire()
  sounds.fire()
})

coffe.addEventListener('click', function(){
  controls.coffe()
  sounds.coffe()
})