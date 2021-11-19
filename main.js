status=""
img=""
object=[]
function preload() {
    
}

function setup() {
    
    canvas=createCanvas(500,500)
    canvas.position(450,200)
    video=createCapture(VIDEO)
    video.hide()
    objectDetector=ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("info").innerHTML="detecting objects"
}
function modelLoaded() {
 console.log("model is working")
 status="true"
  
}
function gotResult(Error,result) {
    if (Error) {
        console.log(Error)
        
    }
    else {
        console.log(result)
        object=result
    }
}

function draw() {
image(video,0,0,500,500)
    if(status!=''){
        objectDetector.detect(video,gotResult)
        for(i=0;i<object.length;i++){
         document.getElementById("info").innerHTML="objects detected"
        fill("red")
        document.getElementById("Number_of_objects").innerHTML=object.length
        fill("orange")
          text(object[i].label,object[i].x,object[i].y)
          noFill()
          stroke("red")
          rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
    
}