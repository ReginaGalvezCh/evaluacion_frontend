
$(document).ready(function() {
    $('select').material_select();
  });
$(document).ready(function(){
        $('.selctBtn').change(function(){
            $('#btnOrange').removeAttr('disabled');
        });
});

function mostrar(){
	document.getElementById('floatdo').style.display = 'block';
}
