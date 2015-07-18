    	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
			datasets : [
				{
					label: "Por hora",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "#FDB45C",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),80,randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
				
			]



		}


		var lineChartData2 = {
			labels : ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],
			datasets : [
				{
					label: "Por dia",
					fillColor : "#FDB45C",
					strokeColor : "rgba(151,187,205,0.8)",
					highlightFill : "rgba(151,187,205,0.75)",
					highlightStroke : "rgba(151,187,205,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
				
			]

		}


		var lineChartData3 = {
			labels : ["Corriente(amp)","",""],
			datasets : [
				{
					label: "Actual",
					fillColor : "rgba(220,220,220,0.2)",
					strokeColor : "rgba(220,220,220,1)",
					pointColor : "#FDB45C",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(220,220,220,1)",
					data : [0,0,0]
				}
				
			]

		}

		var barChartData = {
		labels : ["Enero","Febrero","Marso","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
		datasets : [
			{
				fillColor : "#F7464A",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			}
		]

	}

	var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Enero"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Febrero"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Marzo"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Abril"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Mayo"
    },
    {
    value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Junio"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Julio"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Agosto"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Septiembre"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Octubre"
    },
    {
     value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Noviembre"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Diciembre"
    }

];


		

	window.onload = function(){
		var ctx = document.getElementById("PorHora").getContext("2d");
		var myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});

		var ctx2 = document.getElementById("PorDia").getContext("2d");
		window.myLine2 = new Chart(ctx2).Bar(lineChartData2, {
			responsive: true
		});

		var ctx3 = document.getElementById("Actual").getContext("2d");
		var myLine3 = new Chart(ctx3).Line(lineChartData3, {
			responsive: true
		});

		var ctx4 = document.getElementById("PorMes").getContext("2d");
		window.myBar = new Chart(ctx4).Radar(barChartData, {
			responsive : true
		});


		

	
			setInterval(function(){cambiar()},1000);
			function cambiar(){

			var fecha = new Date()
			var hora = fecha.getHours()
			var minuto = fecha.getMinutes()
			var segundo = fecha.getSeconds()
			if (hora < 10) {hora = "0" + hora}
			if (minuto < 10) {minuto = "0" + minuto}
			if (segundo < 10) {segundo = "0" + segundo}
			var horita = hora + ":" + minuto + ":" + segundo;
			document.getElementById('hora').firstChild.nodeValue = horita;
			


			myLine3.datasets[0].points[0].value = myLine3.datasets[0].points[1].value;
			myLine3.datasets[0].points[1].value = myLine3.datasets[0].points[2].value;		
			myLine3.datasets[0].points[2].value = randomScalingFactor();
			myLine3.update();

			}

	}

	