export default function(){
    const bFire = new Audio("./audio/Lareira.wav")
    const bCoffe = new Audio("./audio/Cafeteria.wav")
    const bRain = new Audio("./audio/Chuva.wav")
    const bFlorest = new Audio("./audio/Floresta.wav")
    
    bFire.loop = true
    bCoffe.loop = true
    bRain.loop = true
    bFlorest.loop = true

    function fire(){
      bFire.play()
      bCoffe.pause()
      bRain.pause()
      bFlorest.pause()
    }
    
    function coffe(){
      bCoffe.play()
      bFire.pause()
      bRain.pause()
      bFlorest.pause()
    }
    
    function rain(){
      bRain.play()
      bFire.pause()
      bCoffe.pause()
      bFlorest.pause()
    }
    
    function florest(){
      bFlorest.play()
      bFire.pause()
      bCoffe.pause()
      bRain.pause()
    }

    return{
        fire,
        coffe,
        rain,
        florest
    }
}