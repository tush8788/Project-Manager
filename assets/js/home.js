//delete url btn
function deleteUrl(deleteBtn){
     $(deleteBtn).click((e)=>{
        e.preventDefault();
        $.ajax({
            type:"get",
            url:$(deleteBtn).prop('href'),
            success:function(data){
                $(`#url-${data.id}`).remove();
            },
            error:function(error){
                console.log(error.responseText)
            }
        })
     })
}

let convertDeleteToAjax=()=>{
    $('#list-container>tr').each(function(){
        let self=$(this);
        let deleteBtn=$(' .deleteUrlBtn',self);
        deleteUrl(deleteBtn);
    })
}


convertDeleteToAjax();
deleteUrl();
