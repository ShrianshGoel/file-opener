var button,b1;
var input2
var input

function setup() {
  createCanvas(windowWidth, windowHeight);
  input=createFileInput(handleFile)
  input.class("o")
  input.position(width/122,height/129)
  input.size(height/0.6,width/15)
  
}

function draw() {
  background(220);

   
  }

  function handleFile(file) {
    var ch=0
    print(file)
    if (file.type==='video'){
      video  = createVideo(file.data,"")
      video.class("o2")
      video.position(width/142,height/7.30)
      video.size(width/1.06,height/1.18)
      
     button=createButton("")
  button.position(width/7.81,height/1.10)
  button.class("o3")
        b1=createButton("")
  b1.position(width/5.50,height/1.10)
  b1.class("o4")
      var pw=0
    
      button.mousePressed(
      ()=>{
        video.play()
      })
              b1.mousePressed(
      ()=>{
        video.pause()
      }
      )
      
    }
   
    
    
    if (file.type === 'image') {
    img = createElement("img").attribute("src",file.data);
img.class("o2")
       img.position(width/3.50,height/7.30)
      ch=1
      img.size(width/2.06,height/1.18)
  }
   
     if(file.type==="audio"){
    a=createElement("audio").attribute("src",file.data)
    a.play()
    }
     if(ch===1){
      video.hide()
      button.hide()
       video.pause()
      b1.hide()
    }
  }