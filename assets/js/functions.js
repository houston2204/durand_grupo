$(function(){

  showPhrase();
  showProjects();
  showAbout();
  openSlideMenu();
  smoothScroll(700);
  showGalery();
  sendForm();

  // setInterval(function(){
  //   $(".arrow .right").click();
  // }, 14000);

});

sendForm = function(){
  $("#contact_form button").click(function(){
    $("#contact_form").submit(function(e){
      e.preventDefault();
      if($("#contact_form input, #contact_form textarea").val().length > 2){
        $.ajax({
          method: 'POST',
          url: 'https://www.enformed.io/yplrbrbe/',
          dataType: 'json',
          data: {
            email: $("#email").val(),
            nombres: $("#nombres").val(),
            apellidos: $("#apellidos").val(),
            empresa: $("#empresa").val(),
            telefono: $("#telefono").val(),
            servicio: $("#servicio").val(),
            mensaje: $("#mensaje").val()
          },
          error: function(data){
            $("#contact_form input, #contact_form textarea").val("");
              $("body").append('<div class="notify"><i class="fa fa-bell"></i><p>Mensaje enviado correctamente</p></div>');
            setTimeout(function() {
              $(".notify").fadeOut();
            }, 3000);
          }
        });
      }
      });
  });



}

openSlideMenu = function(){

  $("#open_menu").click(function(){
    $(".slide_menu_content").addClass("active");
  });
  $("#close_menu i").click(function(){
    $(".slide_menu_content").removeClass("active");
  })

}


 smoothScroll = function(duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
 }

showAbout = function(){

  var cont= 0;

  setInterval(function(){
    if(cont <= 2){
        $(".about_controls span").eq(cont).click();
      cont++;
    }else{
      cont=0;
    }
  }, 7000);


  $(".about_controls span").click(function(){
    var indice = $(this).index();

    $(".about_controls span").removeClass("active");
    $(".about_controls span").eq(indice).addClass("active");

    $(".about_body_wrapper").removeClass("active");
    $(".about_body_wrapper").eq(indice).addClass("active");

    $(".about_element_wrapper .image").removeClass("active");
    $(".about_element_wrapper .image").eq(indice).addClass("active");

  });
}

showProjects = function(){

  $(".arrow .right").click(function(){
    var numberProjects = $(".project_belt").length - 1;
    var current = $(".showing").index();
    if(current < numberProjects){

      $(".transition_belt ").addClass("sliding");

      setTimeout(function(){
        $(".showing").removeClass("showing").next().addClass("showing");
      },300);

      setTimeout(function(){
        $(".transition_belt ").removeClass("sliding");
      },800);

    }else{

      $(".transition_belt ").addClass("sliding");

      setTimeout(function(){
        $(".showing").removeClass("showing");
        $(".project_belt").eq(0).addClass("showing");
      },300);

      setTimeout(function(){
        $(".transition_belt ").removeClass("sliding");
      },800);

    }
  });

  $(".arrow .left").click(function(){
    var numberProjects = $(".project_belt").length - 1;
    var current2 = $(".showing").index();
    if(current2 > 0){

      $(".transition_belt ").addClass("sliding");

      setTimeout(function(){
        $(".showing").removeClass("showing").prev().addClass("showing");
      },300);

      setTimeout(function(){
        $(".transition_belt ").removeClass("sliding");
      },800);

    }else{

      $(".transition_belt ").addClass("sliding");

      setTimeout(function(){
        $(".showing").removeClass("showing");
        $(".project_belt").eq(numberProjects).addClass("showing");
      },300);
      setTimeout(function(){
        $(".transition_belt ").removeClass("sliding");
      },800);

    }
  });
}



showGalery = function(){

  $(window).scroll(function(){
    var top = $(window).scrollTop();
    var aboutTop = $("#about_section").offset().top;

    if(top > aboutTop){
      $(".about_galery_wrapper .image").each(function( index ) {
        setTimeout(function(){
          $(".about_galery_wrapper .image").eq(index).addClass("show");
        }, index*300);
      });
    }
  });
  }


showPhrase = function(){

    $(window).scroll(function(){
      var top = $(window).scrollTop();
      var phraseTop = $(".phrase").offset().top;

      if(top + 500 > phraseTop){
        $(".phrase_wrapper").addClass("show");
        setTimeout(function(){
          $("#projects").addClass("show");
        }, 200);

      }

    });
}
