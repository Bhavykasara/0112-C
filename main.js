
Webcam.set({
    width:310,
    height:300,
    image_format : 'png',
    png_quality:90,

    constraints: {
      facingMode: "environment"
    }
});
  camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function webstart()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="final" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier('MobileNet',modalLoaded);
function modalLoaded() {
  console.log("modal is loaded");
}
function check() {
  img=document.getElementById("final");
  classifier.classify(img,gotResult);
}
function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById("ans").innerHTML=results[0].label;
  }
}