

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

var database = firebase.database();

$("#submitBtn").on("click", function (event) {
  event.preventDefault();

  var trainName = $("#trainN").val().trim();
  var destination = $("#dest").val().trim();
  var firstTrainTime = $("#firstTrain").val().trim();
  var frequency = $("#freq").val().trim();
  // var difference = 

  console.log(trainName, destination, firstTrainTime, frequency);

  var trainDetails = {
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
  }

  database.ref().set({
    trainName: trainName,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency
  }), function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  }
});

var dbInfo = firebase.database().ref().child('object');

// dbInfo.on("value")

database.ref().on("value", function (dataSnapshot) {
  console.log(snap.val());
});














