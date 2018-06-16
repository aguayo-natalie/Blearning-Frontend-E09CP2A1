

	$.ajax({
		url: 'http://www.mindicador.cl/api',
		method: 'GET'
	}).then(function(data){
		console.log(data.dolar.valor);
		$('#dolar').text('$' + data.dolar.valor);
		$('#euro').text('$' + data.euro.valor);
		$('#uf').text('$' + data.uf.valor);
		$('#utm').text('$' + data.utm.valor);


		$('#boton_pesos').on('click', function(event){
			event.preventDefault();
			var pesos = $('#pesos').val();
			/// 1 dolar ---- $600
			//   ?   ------- pesos.val
			var pesoAdolar = pesos / data.dolar.valor
			console.log(pesoAdolar);

			$('#conversion1').removeClass('ocultar');

			$('#conversion_dolar').text('US ' + pesoAdolar.toFixed(3));

			var pesoAeuro = pesos / data.euro.valor
			console.log(pesoAeuro);

			$('#conversion1').removeClass('ocultar');

			$('#conversion_euro').text('€ ' + pesoAeuro.toFixed(3));
		});

		$('#boton_dolar').on('click', function(event){
			event.preventDefault();
			var dolar = $('#aDolar').val();
			var dolarApeso = dolar * data.dolar.valor;
			console.log(dolarApeso);

			$('#conversion2').removeClass('ocultar');
			$('#conversion_peso').text('$ ' + dolarApeso);
		});
	});



/*Para que se mantengan actualizados los valores deberiamos 
poner un timer o bien integrar el llamado $.ajax

$.ajax({
		url: 'http://www.mindicador.cl/api',
		method: 'GET'
	})

despues de que la funcion del boton se gatille, pero debo sacarlo 
del llamado general... Ej:

$('#boton_dolar').on('click', function(event){
	event.preventDefault();
	$.ajax({
		url: 'http://www.mindicador.cl/api',
		method: 'GET'
	}).then(function(data){
		var dolar = $('#aDolar').val();
		var dolarApeso = dolar * data.dolar.valor;
		console.log(dolarApeso);
		$('#conversion2').removeClass('ocultar');
		$('#conversion_peso').text('$ ' + dolarApeso.toFixed(3));
	});
});
*/




