// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    var elementhref = $(tujuan);
    //pindahkan scroll
    $('body').animate({
        scrollTop: elementhref.offset().top - 60
    },1000, 'easeInOutExpo');
    e.preventDefault();
});