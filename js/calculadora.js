var N = new Array();
var Nt = '0';
$(document).ready(function(){
 $('#tela').prop('disabled',true);
});

$('#reseta').click(function(){
 $('#opr').text('')
 $('#tela').val('')
 Nt='0'
 N.length=0
});



$('#btn_9').click(function(){
 _get('9','9')
});
$('#btn_8').click(function(){
 _get('8','8')
});
$('#btn_7').click(function(){
 _get('7','7')
});
$('#btn_6').click(function(){
 _get('6','6')
});
$('#btn_5').click(function(){
 _get('5','5')
});
$('#btn_4').click(function(){
 _get('4','4')
});
$('#btn_3').click(function(){
 _get('3','3')
});
$('#btn_2').click(function(){
 _get('2','2')
});
$('#btn_1').click(function(){
 _get('1','1')
});
$('#btn_0').click(function(){
 _get('0','0')
});
$('#btn_pun').click(function(){
 _get('.','.')
});



$('#soma').click(function(){
 $('#opr').text($('#opr').text()+'+')
 N.push(nt);
 Nt='0'
 N.push('+')
});
$('#subtracao').click(function(){
 $('#opr').text($('#opr').text()+'-')
 N.push(Nt);
 Nt='0'
 N.push('-')
});
$('#multiplicacao').click(function(){
 $('#opr').text($('#opr').text()+'*')
 N.push(Nt);
 Nt='0'
 N.push('*')
});
$('#divisao').click(function(){
 $('#opr').text($('#opr').text()+'/')
 N.push(Nt);
 Nt='0'
 N.push('/')
});
$('#igual').click(function(){
 N.push(Nt)
 Calc(N)
 Nt=null
});



function _get(n, num){
 $('#opr').text($('#opr').text()+num)
 if (Nt=='0'){
    Nt=n 
 }else{
    Nt+=n
 }
}



function Calc(v){
 try{
    var r = eval(v.toString().replace(/[,null]/gi,''));
    if((isNaN(r)) || (!isFinite(r))){
        $.notify('Erro de entrada :(');
    }else{
        $('#tela').var(r)
    }
    }catch(err){
        $.notify('Erro de entrada :(');
    }
 
}


