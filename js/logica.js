// VARIABLES

function MostrarFecha(date){
	var nombres_dias = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado')
	var nombres_meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre')
	var fecha = new Date(date)

	dia_mes = fecha.getDate() + 1 //dia del mes
	dia_semana = fecha.getDay() + 1 //dia de la semana
	mes = fecha.getMonth() 
	anio = fecha.getFullYear()

	var fechaHora = new Date();
	var horas = fechaHora.getHours();
	var minutos = fechaHora.getMinutes();
	var segundos = fechaHora.getSeconds();

	if(horas < 10) { horas = '0' + horas; }
	if(minutos < 10) { minutos = '0' + minutos; }
	if(segundos < 10) { segundos = '0' + segundos; }

	return nombres_dias[dia_semana] + ', ' + dia_mes + ' de ' + nombres_meses[mes] +' '+ anio;

};

function isEmpty(items) {
	var answer = true;

	$.each(items, function(i, item) {
		if (!item) {
			answer = false;
		}
	});		
	return answer;
}

const dias = ['Lunes','Martes','Miércoles','Jueves','Viernes', 'Sábado','Domingo'];

var objEstadios = { '180': 'Departamental Libertad',
'1655': 'Jaraguay de Montería',
'3208': 'Metropolitano Roberto Meléndez',
'111': 'Palmaseca',
'266': 'General Santander',
'67': 'Atanasio Girardot',
'88': 'Palogrande',
'184': 'Nemesio Camacho El Campín',
'933': 'La Independencia',
'183': 'Nemesio Camacho El Campín',
'927': 'Pascual Guerrero',
'922': 'Alberto Grisales',
'921': 'Daniel Villa Zapata',
'177': 'La Independencia',
'81': 'Metropolitano Roberto Meléndez',
'182': 'Polideportivo Sur',
'179': 'Manuel Murillo Toro',
'105': 'Atanasio Girardot',
'597': 'Metropolitano de Techo',
'176': 'Guillermo Plazas Alcid'}

var htmlProximoPartido = '<div id="ContenedorGeneral">'+		
'<div class="panel panel-default">'+
'  <div class="panel-heading titulo">PRÓXIMO PARTIDO.</div>'+
'  <div class="panel-body">'+
'   	<div class="Hola">'+
'   			<table>'+
'		   		<tr>'+
'		   			<td>'+
'		   				<img src="::urlTeamLocal::"  alt="">'+
'		   			</td>'+
'		   			<td>'+
'		   				<table>'+
'		   					<tr>'+
'		   						<td style="font-size: 35px;">VS.</td>'+		   						
'		   					</tr>'+
'		   					<tr>'+
'		   						<td>::fecha::</td>'+
'		   					</tr>'+
'		   				</table>'+
'		   			</td>'+
'		   			<td>'+
'		   				<img src="::urlTeamVisitante::" alt="">'+
'		   			</td>'+
'		   		</tr>'+
'		   		<tr>'+
'		   			<td colspan="3" style="font-size: 25px; background: rgba(0, 0, 0, 0.42);">::campeonato::, ::fechaCampeonato::  </td>'+
'		   		</tr>'+
'		   		<tr>'+
'		   			<td colspan="3" style="background: rgba(0, 0, 0, 0.42);">Estadio: ::estadio::</td>'+
'		   		</tr>'+
'		   		<tr>'+
'		   			<td colspan="3" style="background: rgba(0, 0, 0, 0.42);">Hora: ::hora::</td>'+
'		   		</tr>'+
'		   		'+
'		   	</table>'+
'   	</div>'+
'  </div>'+
'</div>'+
'</div>';

var htmlCompleto = '<head>'+
'	<meta charset="UTF-8">'+
'	<title>PRÓXIMO PARTIDO</title>'+
'	<script'+
'	  src="https://code.jquery.com/jquery-3.1.1.js"'+
'	  integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="'+
'	  crossorigin="anonymous"></script>'+
'	<link href="https://fonts.googleapis.com/css?family=Oswald|Sansita" rel="stylesheet">'+
'	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">'+
'	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>'+
'	<link rel="stylesheet" href="css/estilos.css">'+
'	<script src="js/logica.js"></script>'+
'	<style>'+
'		body {'+
'			font-family: "Oswald", sans-serif;'+
'			font-family: "Sansita", sans-serif;'+
'			text-transform: uppercase;'+
'			text-align: center;'+
'		}'+
'		'+
'		.Hola {'+
'			display: inline-block;'+
'		}'+
''+
'		.panel-body {'+
'		    background-image: url(http://futbolete.com/wp-content/themes/futboletedesk/comunidades-ohnacional/images/fondo.jpg);'+
'			color: white;'+
'		}'+
'	</style>'+
'</head>'+
'<body>'+
' ::body::	'+
'</body>';

$(document).ready(function() {

	$('#btnGenerarProximo').click(function() {
		var urlTeamLocal;
		var fecha;
		var urlTeamVisitante;
		var campeonato;
		var fechaCampeonato;
		var estadio;
		var hora;

		urlTeamLocal = $('#imgEquipoLocal').attr('src');
		urlTeamVisitante = $('#imgEquipoVisitante').attr('src');

		fecha = MostrarFecha($('#dateFechaPartido').val());
		campeonato = $('#slcTorneo  option:selected').html();
		fechaCampeonato = $('#slcFecha  option:selected').html();
		estadio = $('#txtEstadio').val();
		hora = $('#hourHora').val();

		if (isEmpty(new Array(urlTeamLocal, fecha, urlTeamVisitante, campeonato, estadio, hora))) {

			htmlProximoPartido = htmlProximoPartido
			.replace('::urlTeamLocal::', urlTeamLocal)
			.replace('::fecha::', fecha)
			.replace('::urlTeamVisitante::', urlTeamVisitante)
			.replace('::campeonato::', campeonato)
			.replace('::fechaCampeonato::', fechaCampeonato)
			.replace('::estadio::', estadio)
			.replace('::hora::', hora);


			htmlCompleto = htmlCompleto.replace('::body::', htmlProximoPartido);

			$('#contProximo').css({
				display: 'none'		
			});

			console.log(htmlCompleto)
			$('#resultados').css({
				display: 'block'		
			});	

			$('#contResultados').html(htmlCompleto);
			

		}else alert('Por favor ingrese TODOS los datos requeridos.')



	});

	$('#proximoPartido').click(function() {			

		$('#contResultado').css({
			display: 'none'		
		});

		$('#contProximo').css({
			display: 'block'		
		});
	});

	$('#resultado').click(function() {


		
		$('#contProximo').css({
			display: 'none'		
		});

		$('#contResultado').css({
			display: 'block'		
		});
	});

	$('#slcEquipoLocal').change(function() {
		$('#imgEquipoLocal').removeAttr('src');
		var url = "http://ligaaguila.com.co/sites/all/themes/ligaaguila/img/equiposg/"+this.value+".png?c=5"
		var opc = this.value;
		console.log(opc)
		$('#imgEquipoLocal').attr('src', url);
		$('#txtEstadio').val('');
		$('#txtEstadio').val(objEstadios[opc]);
	});

	$('#slcEquipoVisitante').change(function() {
		$('#imgEquipoVisitante').removeAttr('src');
		var url = "http://ligaaguila.com.co/sites/all/themes/ligaaguila/img/equiposg/"+this.value+".png?c=5"
		$('#imgEquipoVisitante').attr('src', url);
	});

	$('#slcTorneo').change(function() {		
		$('#contTV').html('');
		if(this.value == 3) {	
			$('#contTV').append('<img style="height: 40px" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Logo_fox_sports_2012.png" alt="Fox Sports" id="FOX">');
		}else {
			$('#contTV').append('<select  id="slcTV"><option value="win">WIN SPORTS</option><option value="rcn">RCN</option></select>');			
		}
	});

	$('#slcTV').change(function() {
		$('#contTV').append('<img src="http://laligaaguila.com.co/sites/all/themes/ligaaguila/img/'+this.value+'.png?c=5" alt="'+this.value+'" id="'+this.value+'">');
	});

	$('#btnLimbiar').click(function() {
		location.reload(true);
	});
});			

