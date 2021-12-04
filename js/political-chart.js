var ctx = document.getElementById('political-chart');
//The coefficent defined for the calculation to work
var coef= [3,1,2,3,4,1,2,2];
var myChart; 
var dataArray= [0,0,0,0,0,0,0,0];

drawGraph(dataArray);
function getDataArary(){
    dataArray = [
        document.getElementById("ProTra").value,
        document.getElementById("SecRel").value,
        document.getElementById("MulAss").value,
        document.getElementById("PacMil").value,
        document.getElementById("DemAut").value,
        document.getElementById("LibSec").value,
        document.getElementById("RehPun").value,
        document.getElementById("IntNat").value
    ]
    if(myChart instanceof Chart)
    {  
        myChart.destroy();
    }
    drawGraph(dataArray);
    // myChart.update();
}

const computeResult= () => {
  let res = 0;
  for (let i = 0; i < dataArray.length; i++) {
    res += dataArray[i]*coef[i]
  }
  console.clear()
  console.table([dataArray,coef])
  res = (res / 9)+10;
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
          'Progress / Tradition',
          'Secularism / Religion',
          'Multiculturalism / Assimilation',
          'Pacifism / Militarism',
          'Democracy / Authoritarianism',
          'Freedom / Security',
          'Rehabilitation / Punishment',
          'Internationalist / nationalist',
        ],
        datasets: [{
          data: dataArray,
          label: 'Your result',
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      };
    
      const config = {
        type: 'radar',
        responsive: true,
        data: data,
        options: {
            animation: false,
            scales: {
                r: {
                    suggestedMin: -5,
                    suggestedMax: 5
                },
            },
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
        plugins: {
            legend: {
                display: false
            }
        },
      };
    
      myChart = new Chart(ctx, config);
}

