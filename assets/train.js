

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWMdYhUEPb2H6bwIE-SRfWMPli6-D0D58",
    authDomain: "traintimes-31eb5.firebaseapp.com",
    databaseURL: "https://traintimes-31eb5.firebaseio.com",
    projectId: "traintimes-31eb5",
    storageBucket: "traintimes-31eb5.appspot.com",
    messagingSenderId: "1020832060874"
  };

  firebase.initializeApp(config);



var trainName = "";
var destination = "";
var firstTrainTime = "HH:mm";
var frequency = "";
var difference = 

var trainDetails = {
    trainName: trainName,
    Destination: Destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
}

console.log(trainName, destination, firstTrainTime, frequency);

$("#trainName").

$("#submitBtn").on("click", function(event){
    database.ref().set({
        trainName: trainName,
        Destination: Destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
        })
});



