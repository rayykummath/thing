Webcam.set({
    width:310,
    height:300,
    image_format:"png",
    png_quality:100000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
    constraints:{
        facingMode:"environment"
    }
});

chimera=document.getElementById("camera");

Webcam.attach(chimera);

function Snapper(){
    Webcam.snap(function(photo){
        document.getElementById("image").innerHTML="<img id='Pic' src='"+photo+"'>";
    });
}

console.log("ml5.version",ml5.version);

cla=ml5.imageClassifier('MobileNet',ModelLoded);

function ModelLoded(){
    console.log("Modal is loaded successfully");
}


function Identify(){
    Pic=document.getElementById("Pic");
    cla.classify(Pic, theResult);
}

function theResult(error,results){
    if(error){
        console.error();
    }

    else{
        console.log(results);
        document.getElementById("span").innerHTML=results[0].label;
    }
}