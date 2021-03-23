$(document).ready(function() {
	console.log("Sukses load debt.js!");
	load_list_debt();
});

$('button#save_debt').on('click', function() {
	alert(`name: ${$('input[name="name"]').val()},
email: ${$('input[name="email"]').val()},
age: ${$('input[name="age"]').val()}`);
	/*
	$.ajax({
		url: 'http://cashtory.rf.gd/cashtory/debt/add',
		type: 'POST',
		data: {
			name: $('input[name="name"]').val(),
			email: $('input[name="email"]').val(),
			age: $('input[name="age"]').val()
		},
		dataType: 'json',
		success: function(result)
		{
			console.log(result);
			$('input[name="name"], input[name="email"], input[name="age"]').val('');
			load_list_debt();
		},
		error: function(result)
		{
			console.log(result);
		}
	});
	*/
});

function load_list_debt()
{
	$.get('http://cashtory.rf.gd/cashtory/debt/get_list', function(result) {
		console.log(result);
		let new_list = '';
		if (result.length > 0) 
		{
			result.forEach(data => {
				new_list += `<li>${data.name}</li>`;
			});
		}
		$('ul#list_name').html(new_list);
	}, 'json');
}