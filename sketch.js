var button,b1;
var input2
var input
var a,img,video
var pw=0

function setup() {
  createCanvas(windowWidth, windowHeight);
  input=createFileInput(handleFile)
  input.class("o")
  input.position(width/122,height/129)
  input.size(height/0.6,width/15)
  
}

function draw() {
  background(0);

   
  }

 async function handleFile(file) {
    var ch=0
    print(file)
    var gh=0
var er=1
    if (file.type==='video'||file.subtype==="undefined"){
      video  = createVideo(file.data,"")
      video.class("o2")
      video.position(width/142,height/7.30)
      video.size(width/1.06,height/1.18)
      gh = 1
     
   




     button=createButton("")
  button.position(width/2.5,height/2.5)
  button.size(width/5.95,height/3)
  button.class("o3")
        b1=createButton("")
  b1.position(width/2.81,height/1.20)
  b1.class("o4")
      b1.hide()
      pw=1
    if(pw===0){
  video.pause()
       }
       if(er===1&&keyIsDown(32)){
        video.play()
        button.hide()
         b1.show()
         er=0
       }
       if(er===0&&keyIsDown(32)){
        b1.hide()
        button.show()
        video.pause()
        er=1
       }
      button.mousePressed(
      ()=>{
        video.play()
       button.hide()
        b1.show()
        er=0
      })
              b1.mousePressed(
      ()=>{
        b1.hide()
        button.show()
        video.pause()
        er=1
      }
      )
 var h = createElement("h2","Size:"+file.size/1048576+" mb")
 h.class("okd")
 var h2= createElement("h2","Name:"+file.name)
  h2.class("okd")
       var h3= createElement("h2","Type:"+file.type+"   Extension:"+file.subtype)
  h3.class("okd")
      var h4= createElement("h2","Last Modified:"+file.file.lastModifiedDate)
  h4.class("okd")
    }

    
    
    if (file.type === 'image') {
    img = createElement("img").attribute("src",file.data);
img.class("o2")
       img.position(width/3.50,height/7.30)
      ch=1
      if(ch===0){
        img.hide()
      }
  }
    
    if(file.type==="audio"){
    a=createAudio(file.data)
  a.play()
    }else{
            a.pause()
    }
     if(ch===1){
      video.hide()
      button.hide()
       video.pause()

      b1.hide()
    }
  }
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
   input.position(width/122,height/129)
  input.size(height/0.6,width/15)
  if(pw===1){
       video.position(width/142,height/7.30)
button.size(width/5.95,height/3)
      button.position(width/2.51,height/2.20)
     b1.position(width/2.81,height/1.20)
   
      video.size(width/1.06,height/1.18)
  }
}
