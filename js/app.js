/****************************
  WebApp Dashboard
****************************/


/***********  notifications ***********/

const bell = document.querySelector(".bell-div");


bell.addEventListener('click', (e) => {
  const notificationBlock = document.querySelector(".notificationBlock");
  const notify = document.getElementById("notify");

  notificationBlock.style.display = "block";

  notify.style.display = "none";

});


const notification = document.querySelectorAll(".notifications")[0];

notification.addEventListener('click', e => {

  const element = e.target;
  if (element.classList.contains("noti-close")) {
    notification.style.display = "none";
  }

});





/***********  alert section ***********/

const alertDiv = document.getElementById("alert");

// create the html for the banner
alertDiv.innerHTML =
  `
  <div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">X</p>
  </div>
  `
;


alertDiv.addEventListener('click', e => {

  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertDiv.style.display = "none";
  }

});




/***********  line graph ***********/

const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 1100, 1450, 1250, 1000, 1650, 2000, 1700, 2200],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    lineTension: 0.1,
    pointRadius: 3,
  }]
};
  

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
};
    

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});
  



/***********  bar graph ***********/

const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
   backgroundColor: '#7477BF',
   borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
}
  
let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});
  



/***********  pie chart ***********/

const mobileCanvas = document.getElementById("mobile-users");

const mobileData = {
  labels: ["Phones", "Tablet", "Desktop"],
  datasets: [{
    label: '# of Users',
    data: [550, 500, 2000],
    borderWidth: 0,
    backgroundColor: [
      '#78CF82',
      '#51B6C8',
      '#7477BF'
    ]
  }]
};
  
const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
}

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});




/***********  messaging section ***********/

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {

  if (user.value === "" && message.value === "") {
  alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
  alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
  alert("Please fill out message field before sending");
  } else {
  alert(`Message successfully sent to: ${user.value}`);
  }

});




/***********  settings section ***********/






