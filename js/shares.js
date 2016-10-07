
	function share_in_twitter(txt)
	{

			   var texto = txt;
			   var url 	 = 'http://soundboard2091.com';
			   var pageURL ="https://twitter.com/intent/tweet?text="+encodeURIComponent(texto)+"&url="+url;

			   if($('body').width() <= 640 )
			   {
	 				var w = 380;
				    var h = 400;
			   }

			    if($('body').width()  <= 320 )

			   {

	 				var w = 280;

				    var h = 400;

			   }

			    if($('body').width() > 640 )

			   {

			   	 var w = 500;

			     var h = 400;

			   }



			   var left = (screen.width/2)- (w/2);

			   var top = (screen.height/2)- (h/2);

			   

			   window.open( pageURL, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left );

		}

		

		function share_in_facebook()

		{
			var texto ="http://soundboard2091.com";
			var pageURL ='https://www.facebook.com/sharer/sharer.php?u='+texto;

			    

			   if($('body').width()  <= 640 )

			   {

	 				var w = 380;

				    var h = 400;

			   }

			    if($('body').width()  <= 320 )

			   {

	 				var w = 280;

				    var h = 400;

			   }

			    if($('body').width()  > 640 )

			   {

			   	 var w = 500;

			     var h = 400;

			   }



			   

			   var left = (screen.width/2)- (w/2);

			   var top = (screen.height/2)- (h/2);

			   

			   window.open( pageURL, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left );

		}

