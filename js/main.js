function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');

      }
    }
  }
}
$('.button__search').on('click', function(){
  console.log('click')
  $('.search__select').addClass('active')
  $('.nav-left').css('display', 'none')
  $('.header_right').css('display', 'none')
  if($('.search__select').hasClass('active')){
    $('.search__select').find('.btn__close').on('click',function(){
     $('.search__select').removeClass('active')
     $('.header_right').css('display', 'flex')
     $('.nav-left').css('display', 'flex')
   })

  }
})