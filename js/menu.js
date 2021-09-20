$(document).ready(function(){

  $('#btn-menu').click(function(e){
    e.preventDefault()
    $('#menu').toggle('slow')
  })

  //Pegando os link do menu para apresentar a página

  //$('a').click(function(e){
    //e.preventDefault()

    //Variavel para se guardar qual o link abrir

    //let url = $(this).attr('href')
    //$('#'+url).show()

  //})
  

  //Testando:

  //$('#home').click(function(e){
    //e.preventDefault()
    //$('href').removeId('#contact')

    //let url = $(this).attr('href')
    //$('#home'+url).show()
  //})

  $('a').click(function(e){
    e.preventDefault()

    //Variavel para se guardar qual o link abrir

    //if(let url = $(this).attr('href')){
      //$('#'+url).show()
    //}

    let url = $(this).attr('href')
    //$('#'+url).show()

    if(url === 'about'){
      $('#'+url).show()

      $("#contact").hide()
      $("#home").hide()
      $("#action").hide()

    } 
    else if(url === 'home'){
      $('#'+url).show()

      $("#about").hide()
      $("#contact").hide()
      $("#action").hide()

    } 
    else if(url === 'action'){
      $('#'+url).show()

      $("#about").hide()
      $("#contact").hide()
      $("#home").hide()

    }
    else if(url === 'contact'){
      $('#'+url).show()

      //$('a').remove(url, 'about')
      //$("id").removeAttr("#about"); 
      //$("a").remove("#about")
      //$("#about").remove()
      //$("#home").remove()
      //$("#action").remove()

      //$("#contact").add()

      $("#about").hide()
      $("#home").hide()
      $("#action").hide()
      
    }

  })
  
})