Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});
document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() { Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); }
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OsfG2rchF/',modelLoaded);
function modelLoaded(){
    console.log('model Loaded');
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}




//today




function modelLoaded(){
    console.log('Model Loaded!');
}
function check()
{
    img= document.getElementById('capture_image');
    classifier.classify(img, gotResult) ;
}
function gotResult(){
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHtml = result[0].label;
        document.getElementById("result_emotion_name").innerHtml = result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak();
        if (result[0].label == "&#128076"){
            document.getElementById(update_emoji).innerHTML= "best"
        }
        if (result[0].label == "&#128077"){
            document.getElementById(update_emoji).innerHTML= "victory"
        }
        if (result[0].label == "&#9996;"){
            document.getElementById(update_emoji).innerHTML= "amazing"
        }
        if (result[1].label == "&#128076"){
            document.getElementById(update_emoji).innerHTML= "best"
        }
        if (result[1].label == "&#128077"){
            document.getElementById(update_emoji).innerHTML= "victory"
        }
        if (result[1].label == "&#9996;"){
            document.getElementById(update_emoji).innerHTML= "amazing"
        }
    }
}