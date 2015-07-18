$(document).ready(function(){


	var iluminacionH1 = $("#iluminacionH1");
	var barraIluminacionH1 = $("#barraIluminacionH1");
	var valorIluminacionH1 = $( "#valorIluminacionH1" );
	var ventilacionH1 = $("#ventilacionH1");
	var barraVentilacionH1 = $("#barraVentilacionH1");
	var valorVentilacionH1 = $( "#valorVentilacionH1" );

	var iluminacionH2 = $("#iluminacionH2");
	var barraIluminacionH2 = $("#barraIluminacionH2");
	var valorIluminacionH2 = $( "#valorIluminacionH2" );
	var ventilacionH2 = $("#ventilacionH2");
	var barraVentilacionH2 = $("#barraVentilacionH2");
	var valorVentilacionH2 = $( "#valorVentilacionH2" );
	var corrientebtn=false;
	var corrientebtn1=false;
	var corrientebtn2=false;
	var corrientebtn3=false;
	var corrientebtn4=false;
 	var serial;

        	//webiopi().ready(init);
     
    		    //function init() {
                // define Serial object, must be configured in /etc/webiopi/config
              //  serial = new Serial("arduino");}



	barraIluminacionH1.slider(
	{
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 99,
		value: 0,
		slide: function( event, ui ) {
			var valor = ui.value;
			if(valor==0){
				iluminacionH1.removeClass("on");
      			iluminacionH1.addClass("off");
			}
			else{
				iluminacionH1.addClass("on");
				iluminacionH1.removeClass("off");
			}
        	$( "#valorIluminacionH1" ).text( ui.value+"%" );},

		change: function( event, ui ) {
		serial.write("la"+ui.value);
		}
      });

      var toggleIluminacionH1 = function(){
      	iluminacionH1.toggleClass("on");
      	iluminacionH1.toggleClass("off");
      }


      barraVentilacionH1.slider(
	{
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 99,
		value: 0,
		slide: function( event, ui ) {
        	$( "#valorVentilacionH1" ).text( ui.value+"%" );},
		
		change: function( event, ui ) {
		console.log("va"+ui.value);	
		serial.write("va"+ui.value);}

      });



      barraIluminacionH2.slider(
	{
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 99,
		value: 0,
		slide: function( event, ui ) {
			var valor = ui.value;
			if(valor==0){
				iluminacionH2.removeClass("on");
      			iluminacionH2.addClass("off");
			}
			else{
				iluminacionH2.addClass("on");
				iluminacionH2.removeClass("off");
			}
        	$( "#valorIluminacionH2" ).text( ui.value+"%" );},
		
		change: function( event, ui ) {

		serial.write("lb"+ui.value);}
      });

      var toggleIluminacionH2 = function(){
      	iluminacionH1.toggleClass("on");
      	iluminacionH1.toggleClass("off");
      }


      barraVentilacionH2.slider(
	{
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 99,
		value: 0,
		slide: function( event, ui ) {
        	$( "#valorVentilacionH2" ).text( ui.value+"%" );},

		change: function( event, ui ) {
		console.log("vb"+ui.value);	
		serial.write("vb"+ui.value);}
      });

           
      $("#corriente").click(function(){
      	$(this).toggleClass("offCorriente");
      	$(this).toggleClass("onCorriente");
      	corrientebtn =! corrientebtn;
		if(corrientebtn==true){console.log("encender corriente"); serial.write("encender corriente");}
		if(corrientebtn==false){console.log("apagar corriente"); serial.write("apagar corriente");}
      });

      $("#corriente1").click(function(){
      	$(this).toggleClass("offCorriente1");
      	$(this).toggleClass("onCorriente1");
      	corrientebtn1 =! corrientebtn1;
		if(corrientebtn1==true) {console.log("encender corriente1"); serial.write("encender corriente1");}
		if(corrientebtn1==false){console.log("apagar corriente1"); serial.write("apagar corriente1");}
      });

      $("#corriente2").click(function(){
      	$(this).toggleClass("offCorriente2");
      	$(this).toggleClass("onCorriente2");
      	corrientebtn2 =! corrientebtn2;
		if(corrientebtn2==true){console.log("encender corriente2"); serial.write("encender corriente2");}
		if(corrientebtn2==false){console.log("apagar corriente2"); serial.write("apagar corriente2");}
      });

      $("#corriente3").click(function(){
      	$(this).toggleClass("offCorriente3");
      	$(this).toggleClass("onCorriente3");
      	corrientebtn3 =! corrientebtn3;
		if(corrientebtn3==true){console.log("encender corriente3"); serial.write("encender corriente3");}
		if(corrientebtn3==false){console.log("apagar corriente3"); serial.write("apagar corriente3");}
      });

      $("#corriente4").click(function(){
      	$(this).toggleClass("offCorriente4");
      	$(this).toggleClass("onCorriente4");
      	corrientebtn4 =! corrientebtn4;
		if(corrientebtn4==true) {console.log("encender corriente4"); serial.write("encender corriente4");}
		if(corrientebtn4==false){console.log("apagar corriente4"); serial.write("apagar corriente4");}
      });
})