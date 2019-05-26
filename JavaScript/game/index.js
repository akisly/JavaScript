$( "#butterfly" ).on("click", function() {
    var a = new Audio();
    a.src = '00171.mp3';
    a.autoplay = true;
    var input = document.getElementById('count').value;
    input++;
    document.getElementById('count').value = input;
});

move();

function move() {
    var x = getX(butterfly);
    var y = getY(butterfly);

    var rX = random(x[0], x[1]);
    var rY = random(y[0], y[1]);

    $( "#butterfly" ).animate({
    left: "+=" + rX,
    top: "+=" + rY
  }, 900, function() {
    move();
  });
}

function random(min, max) {
    return min + Math.random() * (max + 1 - min);
}

function getX(elem) {
    var min = -elem.offsetLeft + 450;
    var max = 1000 - 50 - elem.offsetLeft;

    return [min, max];
}

function getY(elem) {
    var min = -elem.offsetTop + 50;
    var max = 600 - 50 - elem.offsetTop;

    return [min, max];
}