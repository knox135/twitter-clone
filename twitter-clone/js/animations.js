$(document).ready(function() {
	$('#tweet-controls').hide();
	$('.stats').hide();
	$('.reply').hide();
	$('.tweet-actions').hide();
	$('.tweet-compose').on('click', function(e) {
		e.stopPropagation();
		$(this).css('height', '5em');
	});
	$('.tweet-compose').on('click', function(e) {
  	$('#tweet-controls').show();
	})
	$('.content').on('click', function() {
		$('.stats').show();
		$('.reply').show();
	})
	
	$('html').on('click', function() {
		$('.tweet-compose').css('height','2.5em');
		$('#tweet-controls').hide();
		// $('.stats').hide();
		// $('.reply').hide();
	});






	var maxCharacters = 140;

	$('#char-count').text(maxCharacters);

	$('textarea').bind('keyup keydown', function() {
    var count = $('#char-count');
    var characters = $(this).val().length;
    var currentCount = (maxCharacters - characters);

    if (currentCount <= 10) {
    	count.css('color', 'red');
    };

    if (currentCount < 0) {
    	$('#tweet-submit').attr('disabled','disabled');
    };

    if (currentCount >= 0 && currentCount !== 140) {
    	$('#tweet-submit').attr('disabled', false);
    }
    if (currentCount > 10) {
      count.css('color', 'grey')
    }


  count.text(currentCount);
	});

	$('.button').on('click', function(e){
		var sub = $('.tweet:first').clone();
		sub.find('.avatar').prop('src','/Users/knox/DevMountain/da	y10/twitter-clone2/twitter-clone/img/me.jpg')
		sub.find('.fullname').html('Nick Major');
		sub.find('username')
  	sub.find('.tweet-text').html($('.tweet-compose').val());
		$('#stream').prepend(sub);
	});



	$(function(){
     $('.content').hover(function(){
          $('.tweet-actions').show();
     },function(){
          $('.tweet-actions').hide();
     });
	 });










//--------------------------
// $('html').on('click', function() {
//
// 	$('.stats').hide();
// });


});
