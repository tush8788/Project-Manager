//delete url btn
function deleteUrl(){
    $('#deleteUrlBtn').on('click',(e)=>{
        e.preventDefault();
        // console.log($('#deleteUrlBtn').prop('href'));
        $.ajax({
            type:"get",
            url:$('#deleteUrlBtn').prop('href'),
            success:function(data){
                // console.log(data.id)
                $(`#url-${data.id}`).remove();
            },
            error:function(error){
                console.log(error.responseText)
            }
        })
    })
}


deleteUrl();
