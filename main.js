function listen(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ygx_Ucm3N/model.json',modelready);
}
function modelready() {
    classifier.classify(gotresult);
}
function gotresult(error,results) {
if(error){
    console.error(error);
}else{
console.log(gotresult);
r=Math.floor(Math.random()*255)+1;
g=Math.floor(Math.random()*255)+1;
b=Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML='I Can Hear - '+results[0].label;
document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

img=document.getElementById("img");

if(results[0].label=="Moo"){
img.src="mooing.png"
}else if(results[0].label=="Roar"){
img.src="roaring.png"
}else if(results[0].label=="Meow"){
img.src="meowing.png";
}else if(results[0].label=="Background Noise"){
img.src="background noise.png"
}else if(results[0].label=="Barking"){
img.src="barking.png"
}
}
}