
	var arrayAudio = [
		'_materiales/00-ferran.mp3',
		'_materiales/01-kim.wav',
		'_materiales/02-altea.mp3',
		'_materiales/03-lila.mp3',
		'_materiales/04-mefisto.mp3',
		'_materiales/05-lodi.mp3',
		'_materiales/06-reznik.mp3',
		'_materiales/07-completadoelproceso.mp3',
		'_materiales/08-juegoterminado.mp3',
		'_materiales/10-findelprotocolo.mp3',
		'_materiales/11-estasconectada.mp3',
		'_materiales/13-cambiandoacontrolmanual.wav',
	];
	var arrayRange = [
		{id: 'range-0'},
		{id: 'range-1'},
		{id: 'range-2'},
		{id: 'range-3'},
		{id: 'range-4'},
		{id: 'range-5'},
		{id: 'range-6'},
		{id: 'range-7'},
		{id: 'range-8'},
		{id: 'range-9'},
		{id: 'range-10'},
		{id: 'range-11'},
		{id: 'range-12'},
		{id: 'range-13'},
		{id: 'range-14'}
	];

	(function(){
		$('.play-audio').click(function(){
			var position = $(this).attr('data-position');
			clickAudio(position);
		});

	})();

	function clickAudio(posAudio, rangeTrue){
		if(posAudio){
 			var audio = document.createElement('audio');
 			audio.src = arrayAudio[posAudio];
 			
 			var idRange = 'range-' + posAudio;
			var range = document.getElementById(idRange);

	 		audio.addEventListener('loadedmetadata', function() {
			  audio.play(); 
			  var max = audio.duration;
			  var i = 1;
			  audio.ontimeupdate = function(){
			  }
			  range.setAttribute("max",Math.floor(parseFloat((audio.duration )  * 100)).toFixed(0))

			  var time = function(){
		  		setTimeout(function(){
						console.log(Math.floor(parseFloat((audio.currentTime )  * 100)).toFixed(0));

						if(rangeTrue && rangeTrue == 'true'){
							range.value = Math.floor(parseFloat((audio.currentTime )  * 100)).toFixed(0)
						}
		  			if(!audio.paused){
		  				time();
		  			}
		  		},1000 /100)
			  }
		    time();
			});
		};
	};


