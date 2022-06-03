//https://teachablemachine.withgoogle.com/models/W9mupspdt/

Webcam.set
(
  {
   width:300,
   height:300,
   imagen_format:'png',png_quality:200  

  } 
); 

camera = document.getElementById("camera");
Webcam.attach( '#camera' );   
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
  console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8aKpS4kd3/model.json',modelLoaded);
  function modelLoaded() {
    console.log('Model Loaded!');
  }

  function check()

  {
img=document.getElementById("captured_image");
classifier.classify(img,gotoresult    )   
  }
  function gotoresult()
  {

  }