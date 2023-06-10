document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    alert('Thank you, ' + name + '! We have received your message.');
    this.reset();
  });

  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Enter') {
      var name = document.getElementById('name').value;
      alert('Thank you, ' + name + '! We have received your message.');
    }
  });

  document.addEventListener('mousemove', function(event) {
    var circle = document.getElementById('circle');
    var x = event.clientX;
    var y = event.clientY;
    
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
  });

  document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    body.style.animation = 'fadeIn 1s';
    body.style.opacity = 1;
  });
  var key = new Array();
  key['d'] = "index.html";
  function getKey(keyStroke) {
   isNetscape = (document.layers);
   eventChooser = (isNetscape) ? keyStroke.which : event.keyCode;
   which = String.fromCharCode(eventChooser).toLowerCase();
   for (var i in key) if (which == i) window.location = key[i];
  }
  document.onkeypress = getKey;