define(function() {
  function Example() {
    
  }
  
  Example.handle = function() {
    require(['noduino/public/scripts/libs/Noduino.js', 'noduino/public/scripts/libs/Noduino.Socket.js', 'noduino/public/scripts/libs/Logger.js'], function(NoduinoObj, Connector, Logger) {
      var Noduino = new NoduinoObj({debug: false, host: 'http://localhost:8090'}, Connector, Logger);
      Noduino.connect(function(err, board) {
       if(err){
       		   $("#connected").text ("FAILURE01010101010010101!");
       		   return;
       }
       //console.log('connected');
       
       $("#connected").text ("yo mama says hi");
       
       window['board'] = board;
       
       //this is the starting increment
       var current_i = 1000;
       //this is the incremental...increment
       var i=100;
       function blink(current_i) {
       
       console.log(current_i);
       if(!this.led) {
       
       
       
       board.withLED({pin: 13}, function(err, LED) {
       if (err)  {return console.log(err);}
       
       this.led=LED;
       this.led.blink(current_i);
       }); }
       
       else {
       this.led.blink(current_i)
       }
       }
       
       function stopblink() {
       if (this.led)
       this.led.stopBlinking();
       }
       
       $("#stop_led").click ( function () {
       stopblink();
       current_i=1000;
       });
       
       $("#start_led").click ( function () {
       blink(current_i);
       });
       
       $("#slower").click ( function () {
       current_i+=i;
       blink(current_i);
       });
       
       $("#faster").click ( function () {
       current_i-=i;
       blink(current_i);
       });
              
      });
    });
  };
  
  return Example;
});