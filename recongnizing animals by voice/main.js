
 function start_classification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelReady);
 }
 function modelReady(){
     classifier.classify(gotResults);
    
 }
 function gotResults(error,results){
   if(error){
       console.error(error);
   }
   else{
    console.log(results);

    document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label
    document.getElementById("result_confidence").innerHTML = 'accuracy - ' + results[0].confidence

    
  img = document.getElementById('dog')
  img1 = document.getElementById('pig')
  img2 = document.getElementById('chicken')
  img3 = document.getElementById('panda')

   if(results[0].label == "dog"){
   img.src = '7566-dancing-dog-gif';
   img1.src = 'pig.png';
   img2.src = 'chicken.png';
   img3.src = 'panda.png';
   }
   else if(results[0].label == "pig"){
    img.src = 'dog.png';
    img1.src = '58825-piggy-bank-dancing.gif';
    img2.src = 'chicken.png';
    img3.src = 'panda.png';
   }
   else if(results[0].label == "Chicken"){
       img.src = 'dog.png';
       img1.src = 'pig.png';
       img2.src = '79634-cute-dancing-chicken.gif';
       img3.src = 'panda.png';
   }
   else {
       img.src = 'dog.png';
       img1.src = 'pig.png';
       img2.src = 'chicken.png';
       img3.src = '81940-dancing-panda-1.gif';
   }

   } 
 }



