var ctx = document.getElementById('political-chart');
//The coefficent defined for the calculation to work
var myChart; 
var dataArray= [0,0,0,0,0,0,0,0,0,0,0,0];
var coef = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


function getGraphVal(id, negPosInt ){
    let val = document.getElementById(id).value;
    if (val <0){
      if (negPosInt == 1) {
        return 0;
      }
      if (negPosInt == -1){
        return Math.abs(val)
      }
    } else{
            if (negPosInt == 1) {
              return Math.abs(val);
            }
            if (negPosInt == -1) {
              return 0;
            }
    }

}

drawGraph(dataArray);
function getDataArary(){
    NonGraphicdataArray = [
      document.getElementById("ProTra").value,
      document.getElementById("SecRel").value,
      document.getElementById("MulAss").value,
      document.getElementById("PacMil").value,
      document.getElementById("DemAut").value,
      document.getElementById("LibSec").value,
      document.getElementById("RehPun").value,
      document.getElementById("IntNat").value,
      document.getElementById("EcoPro").value,
      document.getElementById("RefRev").value,
      document.getElementById("UsaRus").value,
      document.getElementById("FedUni").value,
    ];
    dataArray = [
      getGraphVal("ProTra", -1),
      getGraphVal("SecRel", -1),
      getGraphVal("MulAss", -1),
      getGraphVal("PacMil", -1),
      getGraphVal("DemAut", -1),
      getGraphVal("LibSec", -1),
      getGraphVal("RehPun", -1),
      getGraphVal("IntNat", -1),
      getGraphVal("EcoPro", -1),
      getGraphVal("RefRev", -1),
      getGraphVal("UsaRus", -1),
      getGraphVal("FedUni", -1),
      getGraphVal("ProTra", 1),
      getGraphVal("SecRel", 1),
      getGraphVal("MulAss", 1),
      getGraphVal("PacMil", 1),
      getGraphVal("DemAut", 1),
      getGraphVal("LibSec", 1),
      getGraphVal("RehPun", 1),
      getGraphVal("IntNat", 1),
      getGraphVal("EcoPro", 1),
      getGraphVal("RefRev", 1),
      getGraphVal("UsaRus", 1),
      getGraphVal("FedUni", 1),
    ];

    //in prog
   
    if(myChart instanceof Chart)
    {  
        myChart.destroy();
    }
    drawGraph(dataArray);
    // myChart.update();
}

const computeResult= () => {
  let res = 0;
  for (let i = 0; i < NonGraphicdataArray.length; i++) {
    res += NonGraphicdataArray[i] * coef[i];
  }
  // console.clear()
  console.table([dataArray,coef])
  res = (res / 12)+10;
  console.log(
    "%c Computed Score: ",
    "border: 1px solid red ; background: red; color:white;",
    res.toPrecision(2),
  );
  console.log(res*10);
  document.getElementById("result-bar-result").style.width = `${res*5}%`;
  document.getElementById("result-bar-result").innerText = ((res-10).toPrecision(2));
  return res.toPrecision(2);

}

function dataArrayd(){
}

function drawGraph(dataArray){

    const data = {
      labels: [
        "Progress",
        "Secularism",
        "Multiculturalism",
        "Pacifism",
        "Democracy",
        "Freedom",
        "Rehabilitation",
        "Internationalist",
        "USA",
        "Federal",
        "Reformism",
        "Ecology",
        "Tradition",
        "Religion",
        "Assimilation",
        "Militarism",
        "Authoritarianism",
        "Security",
        "Punishment",
        "Nationalist",
        "Russia",
        "Unitary",
        "Revolution",
        "Production",
      ],
      datasets: [
        {
          data: dataArray,
          label: "Your result",
          fill: true,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          pointBackgroundColor: "rgb(54, 162, 235)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(54, 162, 235)",
        },
      ],
    };
    
      const config = {
        type: "radar",
        responsive: true,
        data: data,
        options: {
          animation: false,
          scales: {
            r: {
              suggestedMin: 0,
              suggestedMax: 10,
            },
          },
          elements: {
            line: {
              borderWidth: 3,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
      };
    
      myChart = new Chart(ctx, config);
}

