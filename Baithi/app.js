$(function(){
    $('body').on('click','.btn-login', function(e){
        e.preventDefault();
        var email = $('#form-login .email').val();
        var pass = $('#form-login .pass').val();
        if(typeof email == "undefined" || typeof pass == "undefined"){
            alert('Bạn chưa điền đầy đủ thông tin');
        }
    });
});