   var $loading = $('#loading');
   var $progress = $('#progress');
   var prg = 0;
   var timer = 0;
   var now = new Date();



//延迟 - delay
//目标 - dist

   function progress(dist, speed, delay) {
      var _dist = dist;
      var _delay = Math.random() * delay;
      var _speed = Math.random(speed);

      window.clearTimeout(timer);

      timer = window.setTimeout(function() {
         if (prg + _speed >= _dist) {
            window.clearTimeout(timer);
            prg = dist;
            $loading.hide();
         } else{
            prg += _speed;
            progress(dist, speed, delay);
            $progress.html(parseInt(prg) + '%');
         }
      }, _delay);

   }

   progress([80, 90], [1, 3], 100);

   window.onload = () => {
      progress(100, [1, 4], 100)
   }
