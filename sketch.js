function setup() {
    canv = createCanvas(windowWidth,windowHeight-150);
    canv.position(0,150);
    thickness = 50;
    color.r = 0;
    color.g = 0;
    color.b = 0;
    strokeWeight(0);
    $('#ran_r').change(() => {
        color.r = $('#ran_r').val();
        setColor();
    });
    $('#ran_g').change(() => {
        color.g = $('#ran_g').val();
        setColor();
    });
    $('#ran_b').change(() => {
        color.b = $('#ran_b').val();
        setColor();
    });
    $('#thick').change(() => {
        thickness = Number.parseInt($('#thick').val());
        $('#rect').attr('r', (mode === 1 ? thickness/2 : thickness/2));
    });
    $('#modes').change(() => {
        mode = Number.parseInt($('#modes').val());
        $('#rect').attr('r', (mode === 1 ? thickness/2 : thickness/2));
    });

    color.r = $('#ran_r').val();
    color.g = $('#ran_g').val();
    color.b = $('#ran_b').val();
     thickness = Number.parseInt($('#thick').val());
    mode = Number.parseInt($('#modes').val());
    $('#rect').attr('r', (mode === 1 ? thickness/2 : thickness/2));

    setColor();
    background(255);
}

function setColor() {
    $('#rect').attr('style', 'fill:rgb('+color.r + ',' + color.g + ',' + color.b + ');stroke-width:3;stroke:rgb(0,0,0)')
}

let thickness;
let color = {};
let mode;
let canv;

let linexy = {};

function draw() {
    if (mouseIsPressed) {
        switch(mode){
            case 0:
                stroke(color.r, color.g, color.b);
                fill(color.r, color.g, color.b);
                strokeWeight(0);
                ellipse(mouseX, mouseY, thickness, thickness);
                break;
            case 1:
                if(!linexy.start_x){
                    linexy.start_x = mouseX;
                    linexy.start_y = mouseY;
                }
                break;
        }
    } else if (mode === 1) {
        if (linexy.start_x) {
            console.log(linexy);
            // fill(color.r, color.g, color.b);
            // stroke(255);
            stroke(color.r, color.g, color.b);
            strokeWeight(thickness);
            line(linexy.start_x, linexy.start_y, mouseX, mouseY);

            delete linexy.start_x;
            delete linexy.start_y;
        }
    }
}

function keyPressed() {
    switch(keyCode) {
        case 83:
            saveCanvas(canv, 'myCanvas', 'jpg');
            break;
        case 67:
            background(255);
            break;
        default:
            console.log(keyCode);
    }
}