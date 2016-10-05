	var lastAudio = null;
	var audio = null;
	var arrayAudio = [
		{url:'audios/00-ferran.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/01-kim.wav', isRange:false, isPlaying:false, audio:null},
		{url:'audios/02-altea.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/03-lila.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/04-mefisto.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/05-lodi.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/06-reznik.mp3', isRange:false, isPlaying:false, audio:null},
		{url:'audios/07-completadoelproceso.mp3', isRange:true, idRange:'range-0', isPlaying:false, audio:null},
		{url:'audios/08-juegoterminado.mp3', isRange:true, idRange:'range-1', isPlaying:false, audio:null},
		{url:'audios/09-alertaevento.mp3', isRange:true, idRange:'range-2', isPlaying:false, audio:null},
		{url:'audios/10-findelprotocolo.mp3', isRange:true, idRange:'range-3', isPlaying:false, audio:null},
		{url:'audios/11-estasconectada.mp3', isRange:true, idRange:'range-4', isPlaying:false, audio:null},
		{url:'audios/12-asd.wav', isRange:true, idRange:'range-5', isPlaying:false, audio:null},
		{url:'audios/13-cambiandoacontrolmanual.wav', isRange:true, idRange:'range-6', isPlaying:false, audio:null},
		{url:'audios/14-asd.wav', isRange:true, idRange:'range-7', isPlaying:false, audio:null}
	];

	(function(){
		$('.play-audio').click(function(){


			/*si ya hay un audio cargado y es diferente de lo que estamos
			 tocando ahora
			*/
			if(lastAudio != $(this).attr('data-position') && lastAudio !=null){
					
					/*volvo a pregunta si exite el audio y si esta tocando lo pauso*/
					if(arrayAudio[lastAudio].audio != null && !arrayAudio[lastAudio].audio.paused){
							arrayAudio[lastAudio].audio.pause();
							/*guardo el nuevo audio*/
							lastAudio = $(this).attr('data-position');
							/*play audio*/
							clickAudio($(this).attr('data-position'), $(this).attr('data-range'));
					}else{
						/**/
						lastAudio = $(this).attr('data-position');
						clickAudio($(this).attr('data-position'), $(this).attr('data-range'));
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
				clickAudio($(this).attr('data-position'), $(this).attr('data-range'));
			}
		});
	})();

	function clickAudio(posAudio, rangeTrue){
		var range;
		if(posAudio){
  		arrayAudio[posAudio].isPlaying = true;

 			audio = document.createElement('audio');
 			arrayAudio[posAudio].audio = audio; 

 			audio.src = arrayAudio[posAudio].url;
 			var idRange = 'range-' + posAudio;
 			if(arrayAudio[posAudio].isRange && rangeTrue == 'true'){
			  range = document.getElementById(arrayAudio[posAudio].idRange);
			}
	 		audio.addEventListener('loadedmetadata', function() {
			  audio.play();

			  var max = audio.duration;
			  var i = 1;
			  if(arrayAudio[posAudio].isRange && rangeTrue == 'true' ){
					  range.setAttribute("max",Math.floor(parseFloat((audio.duration )  * 100)).toFixed(0))
				}
			  var time = function(){
		  		setTimeout(function(){
						if(arrayAudio[posAudio].isRange && rangeTrue == 'true'){
							range.value = Math.floor(parseFloat((audio.currentTime )  * 100)).toFixed(0)
						}
		  			if(!audio.paused){
		  				  time();
		  			}else{
		  					arrayAudio[posAudio].isPlaying = false;
		  			}
		  		},1000 /100)
			  }
		    time();
			});
		};
	};


