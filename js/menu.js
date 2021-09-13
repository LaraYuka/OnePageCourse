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
  $('#home').click(function(e){
    e.preventDefault()
    $('href').removeId('#contact')

    let url = $(this).attr('href')
    $('#home'+url).show()
  })
  
})