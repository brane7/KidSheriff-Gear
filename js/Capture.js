
 
 
 // var video = document.querySelector('video');
 //var canvas = document.querySelector('canvas');
 var ctx = canvas_capture.getContext('2d');
 var localMediaStream = null;
 var imageData ;
 var file;
 var captureInteval = ''
 var localStream = ''
	 var canvas_capture =''
 
		 
		 videoSet()
		 function videoSet(){
			 

	   tizen.filesystem.resolve("images", function(dir){
		   var dir; //Directory object obtained from filesystem API
			 var newDir = dir.createDirectory("Sheriff");   
	   })
		 
	 
	 
			 canvas_capture = document.getElementById("canvas_capture"),
			 context = canvas_capture.getContext("2d"),
			 video = document.getElementById("video"),
			 videoObj = { "video": true },
			 
			 errBack = function(error) {
			  console.log("Video capture error: ", error.code);
			 };
			 
			 
			 
			 //비디오 테그에 카메라 적용
			 if(navigator.webkitGetUserMedia) { // WebKit-prefixed
			  navigator.webkitGetUserMedia(videoObj, function(stream){
				localStream = stream
				video.src = window.webkitURL.createObjectURL(localStream);
				video.pause();
			 }, errBack);
			 }
		 }
		 
 
 

 
 
 //document.addEventListener('click', snapshot, false);

 
 
function captureStart(){
		video.play();
	 captureInteval = setInterval(cameraCaptuerInterval, 10000)
	 console.log("captureStart")

}


function captureStop(){
		
	video.pause();
	clearInterval(captureInteval)
	console.log("captureStop")	
}


function cameraCaptuerInterval(){
	snapshot()
}


function snapshot() {
	 
   ctx.drawImage(video, 0, 0);
   imageData= canvas_capture.toDataURL();
   console.log(canvas_capture.toDataURL())

   
   //파일로 생성

   var text  = imageData.split(",")

   
   
   tizen.filesystem.resolve("images/Sheriff", function(dir){
    
    console.log(dir.name)
    for(var i = 0; i < dir.length; i++) {
     console.log(dir[i]);
    }
  
    //파일이 없으면 만들어주고 있으면 resolve시켜줌
    //문제가 디폴트 이미지 말고도 다른게 있으면 문제 됨
    if(dir.length != 0){
     file = dir.resolve("default.png");
    }else{
     file = dir.createFile("default.png");
    }
         
    
    var uniqString = timeDraw()
      
    file.openStream("a",function(stream){
      
       var file1 = dir.createFile('video'+uniqString+'.png');
       file1.openStream("rw", function(fs) {
        console.log("-------File writing ---------"+ text);
       fs.writeBase64(text[1]);
       fs.close();
        console.log("-------creating another file ---------");
       }, function(e){
        console.log(e.message);
       },"UTF-8");

    } , function(e){
     console.log(e.message);
     },"UTF-8");

    });

}


//유니크 텍스트 붙여줌 
function timeDraw() {
   var date = new Date();
   var H = (date.getHours() > 9)? date.getHours() : '0'+date.getHours();
   var M = (date.getMinutes() > 9)? date.getMinutes() : '0'+date.getMinutes();
   var S = (date.getSeconds() > 9)? date.getSeconds() : '0'+date.getSeconds();
   var timeTxt = H.toString()+M.toString()+S.toString();

   return timeTxt;
 }


 

