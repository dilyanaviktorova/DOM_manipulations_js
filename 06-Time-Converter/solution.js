function attachEventsListeners() {

  let daysField = document.getElementById("days");
  let hoursField = document.getElementById("hours");
  let minutesField = document.getElementById("minutes");
  let secondsField = document.getElementById("seconds");

  document.querySelector('main').addEventListener('click', onConvert);

  let ratios = {
    days: 1,
    hours: 24, 
    minutes: 1440,
    seconds: 86400
  };
  
 function onConvert(event) {

    if(event.target.type == 'button') {

        let input = event.target.parentElement.querySelector("input[type ='text']");
        
        let inputInDays = Number(input.value) / ratios[input.id];

        let hoursToDisplay = inputInDays*ratios.hours;
        let minutesToDispaly = inputInDays*ratios.minutes;
        let secondsToDisplay = inputInDays*ratios.seconds;

        daysField.value = inputInDays;
        hoursField.value = hoursToDisplay;
        minutesField.value = minutesToDispaly;
        secondsField.value = secondsToDisplay;
    }

 }







}