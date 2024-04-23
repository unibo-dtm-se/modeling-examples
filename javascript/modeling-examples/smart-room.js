class Light {
    
    constructor(id){
        this.id = id;
        this.state = "off"
        this.log("created.")
    }

    isOn(){
        return this.state == "on"
    }

    turnOn(){
        this.state = "on"
    }

    turnOff(){
        this.state = "off"
    }

    log(msg){
        console.log("[Light " + this.id + "] " + msg)
    }
}

class LightSwitch {
    
    constructor(id, light){
        this.id = id
        this.connectedLight = light
    }

    press(){
        this.log("pressed")
    }

    log(msg){
        console.log("[LightSwitch " + this.id + "] " + msg)
    }
}



let myLight = new Light("myLight");

if (myLight.isOn()){
    console.log("The light is on")
} else {
    console.log("The light is off")
}

myLight.turnOn()

let mySwitch = new LightSwitch("mySwitch", myLight)

mySwitch.press()
