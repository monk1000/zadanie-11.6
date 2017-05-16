$(function() {

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

	$("#search").click(searchCountries);
	$('#country-name').keyup(function(event) {
		if (event.keyCode == 13) {
			$('#search').trigger('click');
		}
	})

	function searchCountries() {
		var countryName = $('#country-name').val();

		if(!countryName.length) countryName = 'Poland';

		$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}

	function showCountriesList(resp) {
		//countriesList.empty();

		resp.forEach(function(item) {
		$('<li>').text(item.name).appendTo(countriesList);
		$('<p>').text('Region to: ' + item.region).appendTo(countriesList);
		$('<p>').text('Liczba mieszkańców to: ' + item.population).appendTo(countriesList);
		});
	}

});