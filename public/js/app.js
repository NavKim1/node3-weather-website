console.log('Client side javascript file is loaded!');



$(function() {
    console.log( "ready!" );
    
	const submitBtn = $('.submitBtn');
	const locationField = $('.locationField');
	
	submitBtn.click(function(e){
		e.preventDefault();
		if(locationField.val() != ''){
		
			fetch('http://localhost:3000/weather?address='+locationField.val()).then((response) => {
				response.json().then((data) => {
					if(data.error){
						//console.log('data :'+data)	
						$('.response-1').empty().text('There are not results for city above');
					}
					else{
						console.log('data :'+data)
						/*$('.response-1').empty().text('The city requested is '+data.)
						$('.response-2').empty().text('The temperature is '+data.)*/	
					}
				})
		

			})	


		}
		else{
			$('.response-1').empty().text('Please enter a city above');
		}
		
	})		

});
