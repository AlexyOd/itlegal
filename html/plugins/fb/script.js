

$.prototype.important = function(imp) {
	check=true;
	if ($(this).length == 0) { return true;}
	if (this.length ==0) {}
	$(this).each(function(index, el) {
		if ( $(this).val() <= 0) {
			$(this).parent().addClass('err');
			check = false;
		}
		else
		{
			/*check =true ;*/
		}
	});
	
	return check;
};
$.prototype.orimportant = function(imp) {
	var check = false;
	if ($(this).length == 0) { return true;}
	
	$(this).each(function(index, el) {
		if ( $(this).val() <= 0) {
			$(this).parent().addClass('err');
		}
		else
		{
			check =true ;
		}
	});
	return check;
};
Array.prototype.inline = function(first_argument) {
	var string = '';
	$(this).each(function(index, el) {
		el.each(function(index, el) {
					string+=(el.name||el.className)+':'+($(el).val() || $(el).text())+'&';
				});
	});
	return string;
};

$(".form").submit(function(event) {

	var form = $(this);
	
	var inputs  = form.find('input:not([type="submit"])');
	var textarea = form.find('textarea');
	var theme = form.find('.theme').length>0? form.find('.theme').text():'';
	var logo = $('.logo')[0].src;
	var lfrom  = location.href;
	$(this).find('.err').removeClass('err');
	var check = $(this).find('[data-imp="true"]'), orcheck = $(this).find('[data-imp="or"]')
	
	if(check.important() && orcheck.orimportant())
	{
		var postForm  ={ data:[inputs,textarea].inline(),theme:theme,logo:logo,from:lfrom};
		debugger;
		$.ajax({
			type		: 'POST',
			url		: 'plugins/fb/fb.php',
			data		: postForm,
			dataType	: 'json',
			success	: function(data)
				{
					if (!data.success)
						{
							if (data.errors.name)
								{
									console.log(data.errors.name);
								}
						}
					else
						{
							form.fadeIn(1000).html('<h5 class="success" style="text-align: center;">' + data.posted + '</h5>');
							
							setTimeout(function () {
								$('.pop_up').removeClass('active');
							}, 1500);
						}
				},
				error: function(data) {
					// body...
					console.log(data);
				}
		});
	}
	




	event.preventDefault();
});
