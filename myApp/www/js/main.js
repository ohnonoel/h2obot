require(['jquery', 'bootstrap.min', 'functions'], function($, bs, noduino) {

$(document).ready (function() {

$("#connect").click (
function() {

noduino.handle();

});

}); 

});