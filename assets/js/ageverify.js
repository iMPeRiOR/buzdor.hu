jQuery(document).ready(function($){

if (sessionStorage.getItem('advertOnce') !== 'true') {
  $('.ageBox').show();
}else{
  $('.ageBox').hide();
}
 
$('#refresh-page').on('click',function(){
$('.ageBox').hide();
sessionStorage.setItem('advertOnce','true');
});
  
$('#reset-session').on('click',function(){
$('.ageBox').show();
sessionStorage.setItem('advertOnce','');
});
 
});
