
    $('#sizePicker').submit(function(event){
        event.preventDefault();
        var  Height = $('#inputHeight').val();
        var  Width = $('#inputWeight').val();
        makeGrid(Height, Width);
        paint();
    });
 function makeGrid(row, col){
    $('tr').remove();
    for(var i = 1; i <= row; i++){
        $('#pixelCanvas').append('<tr></tr>');
        for(var j = 1; j <= col; j++){
            $('tr').filter(':last').append('<td></td>');
        }
    }
 }
 function paint(){
    $('td').click(function(){
    var color = $('#colorPicker').val();
        if($( this ).attr('style'))
        {
            $( this ).removeAttr('style');
        }
        else
        {
            $( this ).attr('style','background-color:' + color);
        } 
    });
 }