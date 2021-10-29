function check(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Y_3nY4TsQ/model.json",modelReady);}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
      document.getElementById("result").innerHTML="Animal sound- "+results[0].label;
      document.getElementById("result-confidance").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2);
img=document.getElementById("img");
if(results[0].label=="cat"){
    img.src="cute-cat.png";
}
else if(results[0].label=="dog"){
    img.src="png.jpg";
}
else{
    document.getElementById("result").innerHTML="Animal sound-"+"sorry"
}





    }

}