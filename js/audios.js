	var lastAudio = null;
	var audio = null;
	var arrayAudio = [
		{url:'audios/00-ferran.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/01-kim.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/02-altea.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/03-lila.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/04-mefisto.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/05-lodi.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/06-reznik.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/07-completadoelproceso.mp3', isRange:true, idRange:'range-0', isPlaying:false, audio:null, duracion:522},
		{url:'audios/08-juegoterminado.mp3', isRange:true, idRange:'range-1', isPlaying:false, audio:null, duracion:204},
		{url:'audios/09-alertaevento.mp3', isRange:true, idRange:'range-2', isPlaying:false, audio:null, duracion:128},
		{url:'audios/10-findelprotocolo.mp3', isRange:true, idRange:'range-3', isPlaying:false, audio:null, duracion:580},
		{url:'audios/11-estasconectada.mp3', isRange:true, idRange:'range-4', isPlaying:false, audio:null, duracion:146},
		{url:'audios/12-estasconectada.mp3', isRange:true, idRange:'range-5', isPlaying:false, audio:null, duracion:0},
		{url:'audios/13-cambiandoacontrolmanual.mp3', isRange:true, idRange:'range-6', isPlaying:false, audio:null, duracion:217},
		{url:'audios/14-desconexion.mp3', isRange:true, idRange:'range-7', isPlaying:false, audio:null, duracion:387}
	];

	(function(){
		
		$('.play-audio').click(function(){


			/*si ya hay un audio cargado y es diferente de lo que estamos tocando ahora*/
			if(lastAudio != $(this).attr('data-position') && lastAudio !=null){
					
					/*vuelvo a pregunta si exite el audio y si esta tocando lo pauso*/
					if(arrayAudio[lastAudio].audio != null && !arrayAudio[lastAudio].audio.paused){
							arrayAudio[lastAudio].audio.pause();
							/*guardo el nuevo audio*/
							lastAudio = $(this).attr('data-position');
							/*play audio*/
							clickAudio($(this).attr('data-position'));
					}else{
						/**/
						lastAudio = $(this).attr('data-position');
						clickAudio($(this).attr('data-position'));
					}
					return;
			}

			/*pero si el audio no esta vacio y es lo mismo*/
			if(lastAudio != null ){
					if(!arrayAudio[lastAudio].audio.paused){
						arrayAudio[lastAudio].audio.play()
					}else{
						arrayAudio[lastAudio].audio.pause()
					}	  	
			}else{
			  /*sino lo creo*/
				lastAudio = $(this).attr('data-position');
				clickAudio($(this).attr('data-position'));
			}
		});

	})();

	function clickAudio(posAudio){
		
		var range;
			
		arrayAudio[posAudio].isPlaying = true;

		
		audio = new Audio(arrayAudio[posAudio].url);
		audio.play();

		if(!arrayAudio[posAudio].isRange) return;


		// RPOCESAMOS LA BARRITA

	  	range = document.getElementById(arrayAudio[posAudio].idRange);

		var max = arrayAudio[posAudio].duracion;
	  

		range.setAttribute("max",max);
	  
		
		var interval = setInterval(function(){

			range.value = (Math.floor(parseFloat(( audio.currentTime )  * 100)).toFixed(0));

		},10)

		audio.onended = function(){

			range.value = max;
			console.log(range.value,max);
			arrayAudio[posAudio].isPlaying = false;
			clearInterval(interval);

		}

		


	};


