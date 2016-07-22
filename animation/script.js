$('.do-animate').on('click', function() {
    if ($('.container').hasClass('container-column')){
        $('.container').removeClass('container-column');
        $('.container').addClass ('container-row');
    }
    else{
        $('.container').removeClass('container-row');
        $('.container').addClass ('container-column');
    }

    /*$('.box').toggleClass('animated')*/
});


for (var box=0;box<10;box++){
    var element=$('<div />').addClass('box').text(box);
    $('.container').append(element);
}

