window.onload=()=>{
    var visina=carouselExampleSlidesOnly.clientHeight;
$('main').css('margin-top',`${visina}px`);
$('#caption').css('padding',`${visina/2.5}px`);
}

window.addEventListener('resize', function(){
    var visina=carouselExampleSlidesOnly.clientHeight;
    var duzina=carouselExampleSlidesOnly.clientWidth;
    $('main').css('margin-top',`${visina}px`);
    if(duzina<400){
        $('#caption').css('padding',`10%`);
        $('#caption h1').css('fontsize','20pt');
    } else{
        $('main').css('margin-top',`${visina}px`);
    $('#caption').css('padding',`${visina/2.5}px`);
    $('#caption h1').css('fontsize','30pt')
    }
});