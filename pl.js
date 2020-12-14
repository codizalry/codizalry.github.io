// Animate On Scroll
AOS.init({
  duration: 1200,
});

//JS Scroll Navigation Effect
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 70;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.active-to-show a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.active-to-show a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

//About Icon style JQUERY
$(function(){
  $(".navBtn").on('click',function(){
    $("#nav-menu").slideToggle(500);
  });
});


//jQuery hover icon
$(function() {
  $(".hover-icon").hover(function(){
    const hoverIcon = $(this).attr("data-hover");
      $("#"+hoverIcon).css("display", "inline-block");
      $("#"+hoverIcon).css("color", "#f9a404");
      $("#"+hoverIcon).css("margin-left", "5px");
      $("#"+hoverIcon).css("position", "fixed");
  }, function(){
    const hoverIcon = $(this).attr("data-hover");
    $("#"+hoverIcon).css("display", "none");
    });
});

//jQuery modal
//Open Modal
$(function() {
  $(".portfolio-link-name").on('click', function() {
    const modalAppear = $(this).attr("data-modal");
    $("#"+modalAppear).css("display", "block");
  });
});
//Close Modal
$(function(){
  $(".modal_close").on('click', function(){
    $(".modal_area").css("display","none");
  });
});
//JS close when click outside of the content
// Get the <span> element that closes the modal
var close1 = document.getElementsByClassName("close-1")[0];
var close2 = document.getElementsByClassName("close-2")[0];
var close3 = document.getElementsByClassName("close-3")[0];
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modalAzul) {
    modalAzul.style.display = "none";
  } else if (event.target === modalEcom){
    modalEcom.style.display = "none";
  } else if (event.target === modalGi){
    modalGi.style.display = "none";
  }
}

//jQuery Hover Contact
$(function(){
$(".data").hover(function(){
  var hoverContact = $(this).attr("data-contact-hover");
  $("#"+hoverContact).css("color","#fff");
  $("#"+hoverContact).css("transition","1s");
}, function() {
  var hoverContact = $(this).attr("data-contact-hover");
  $("#"+hoverContact).css("color","#0087db");
});
});
