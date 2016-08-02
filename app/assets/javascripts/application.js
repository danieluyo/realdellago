// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require rails.validations
//= require tether
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-datepicker
//= require bootstrap-datepicker/core
//= require bootstrap-datepicker/locales/bootstrap-datepicker.es.js
//= require bootstrap-datepicker/locales/bootstrap-datepicker.fr.js
//= require charges
//= require_tree .

$(document).on("page:load", function(){
	// Se recomienda que la key publica se encuentre en todo el sitio, no sólo en el cargo.
	Conekta.setPublishableKey('<%= Conekta.api_key = Rails.application.secrets.conekta_public %>');
});

// Desconozco el motivo, pero no toma el charges.coffee y no tokeniza
$(function () {
  $("#card-form").submit(function(event) {
    var $form = $(this);

    // Previene hacer submit más de una vez
    $form.find("button").prop("disabled", true);
    Conekta.token.create($form, conektaSuccessResponseHandler, conektaErrorResponseHandler);
   
    // Previene que la información de la forma sea enviada al servidor
    return false;
  });
});

var conektaSuccessResponseHandler = function(token) {
  var $form = $("#card-form");

  /* Inserta el token_id en la forma para que se envíe al servidor */
  $form.append($("<input type='hidden' name='conektaTokenId'>").val(token.id));
 
  /* and submit */
  $form.get(0).submit();
};

var conektaErrorResponseHandler = function(response) {
  var $form = $("#card-form");
  
  /* Muestra los errores en la forma */
  $form.find(".card-errors").text(response.message);
  $form.find("button").prop("disabled", false);
};


$(window).load(function(){
    queryString();
});

function queryString()
{
    var queryString = window.location.search;
    var url = decodeURIComponent(queryString);
    var varArray = url.split("&");
    var paramStart = varArray[0].split("=");
    var start = paramStart[1];
    var paramEnd = varArray[1].split("=");
    var end = paramEnd[1]
    document.getElementById("start-date").value = paramStart[1];
    var name = document.getElementsByName("start-date");
    name.value = paramStart[1];
    var name = document.getElementsByName("end-date");
    name.value = paramEnd[1];
    document.getElementById("end-date").value = paramEnd[1];
        //parameter-value pair
} 