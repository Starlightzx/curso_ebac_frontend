    $('form').on('submit', function(e){
    e.preventDefault()
    let campo = $('input#campo-texto').val()
    let linha = $('li#li')
    $(`<li>${campo}<li/>`).appendTo(linha)
    
})

$('li').click( function(){
    $('li').css('text-decoration', 'line-through')
}
)
