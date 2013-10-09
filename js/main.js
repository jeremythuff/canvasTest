
$(document).ready(function() {
    
	var grid = {
    a1: {
        data: "a1",
        color: "#000"
    },
    a2: {
        data: "a2",
        color: "#000"
    },
    a3: {
        data: "a3",
        color: "#000"
    },
    a4: {
        data: "a4",
        color: "#000"
    },
    a5: {
        data: "a5",
        color: "#000"
    },
    b1: {
        data: "b1",
        color: "#000"
    },
    b2: {
        data: "b2",
        color: "#f90"
    },
    b3: {
        data: "b3",
        color: "#f90"
    },
    b4: {
        data: "b4",
        color: "#f90"
    },
    b5: {
        data: "b5",
        color: "#000"
    },
    c1: {
        data: "c1",
        color: "#000"
    },
    c2: {
        data: "c2",
        color: "#000"
    },
    c3: {
        data: "c3",
        color: "#f90"
    },
    c4: {
        data: "c4",
        color: "#000"
    },
    c5: {
        data: "c5",
        color: "#000"
    },
    d1: {
        data: "d1",
        color: "#000"
    },
    d2: {
        data: "d2",
        color: "#000"
    },
    d3: {
        data: "d3",
        color: "#f90"
    },
    d4: {
        data: "d4",
        color: "#000"
    },
    d5: {
        data: "d5",
        color: "#000"
    },
    e1: {
        data: "e1",
        color: "#000"
    },
    e2: {
        data: "e2",
        color: "#f90"
    },
    e3: {
        data: "e3",
        color: "#f90"
    },
    e4: {
        data: "e4",
        color: "#000"
    },
    e5: {
        data: "e5",
        color: "#000"
    }
}

	

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    numCols = 5;
    z = 0;
    x = (canvas.width/2)-(canvas.height/2);
    y = 0;
    

    //event listeners
    $(window).on('resize', reDrawCanvas);

    $("canvas").on('mousewheel', function(event) {
        var delta = event.originalEvent.wheelDelta;
        var oldZ = z;

        if(delta > 0) {
            z += .5;
            if(z>3.5)
                z=oldZ;
        } else {
            z -= .5; 
            if((canvas.height/(numCols-oldZ)*(numCols*3)===canvas.height)||(canvas.height/(numCols-oldZ)*(numCols*3)===canvas.width))
                z=oldZ;
        }

        drawStuff(x, y, z);
    });

    $("canvas").on('mousedown', function(event) {

        var lastX = event.clientX;
        var lastY = event.clientY; 

        $(window).on('mousemove', function(e) {
            var newX = e.clientX;
            var newY = e.clientY;            

            if(lastX > newX) {
                x -= Math.abs(lastX - newX);

                if(x+(canvas.height/(numCols-z)*(numCols*2))<=canvas.width) {
                    x += Math.abs(lastX - newX);
                }


            } else {
                x += Math.abs(lastX - newX);

                if(x-(canvas.height/(numCols-z)*(numCols))>=0) {
                    x -= Math.abs(lastX - newX);
                }
            }

            if(newY > lastY) {
                y += Math.abs(lastY - newY);

                if(y-(canvas.height/(numCols-z)*(numCols))>=0) {
                    y -= Math.abs(lastY - newY);
                }

            } else {
                y -= Math.abs(lastY - newY);

                if(y+(canvas.height/(numCols-z)*(numCols*2))<=canvas.height) {
                    y += Math.abs(lastY - newY);
                } 
            }
            lastX = newX;
            lastY = newY; 
            drawStuff(x, y, z);
            
        });
    })

    $(window).on('mouseup', function() {
        $(window).off('mousemove');
    });


    //main draw function
    function drawStuff(x, y, z) {
    	canvas.width = canvas.width;
    	var	w = canvas.height/(numCols-z);
    	var	h = w;
    	var r = 100;
    	var g = 100;
    	var b = 100;
    	
    	var cells = Object.keys(grid);
    	var counter = 0;
    	var offScreen = [];
    	$(cells).each(function() {
    		
    		if((counter % numCols === 0)&&(counter != 0)) {
    			counter = 0;
    			x = (x-w*numCols);
    			y += h;
    		}

			counter++;
			
			var cell = grid[this];
    		var color = cell.color;
            var text = cell.data;

		
            ctx.fillStyle = color;
            ctx.fillRect (x, y, w, h);
            
            ctx.fillRect (x+(w*numCols), y, w, h);
            ctx.fillRect (x-(w*numCols), y, w, h);
            ctx.fillRect (x, y+(w*numCols), w, h);
            ctx.fillRect (x, y-(w*numCols), w, h);
            ctx.fillRect (x+(w*numCols), y+(w*numCols), w, h);
            ctx.fillRect (x-(w*numCols), y-(w*numCols), w, h);
            ctx.fillRect (x+(w*numCols), y-(w*numCols), w, h);
            ctx.fillRect (x-(w*numCols), y+(w*numCols), w, h);

            ctx.fillStyle="#fff";
            ctx.font="15px Arial"; 
            ctx.fillText(text, x+(w/5), y+(h/5));

            ctx.fillText(text, (x+(w*numCols))+(w/5), y+(h/5));
            ctx.fillText(text, (x-(w*numCols))+(w/5), y+(h/5));
            ctx.fillText(text, x+(w/5), (y+(w*numCols))+(h/5));
            ctx.fillText(text, x+(w/5), (y-(w*numCols))+(h/5));
            ctx.fillText(text, (x+(w*numCols))+(w/5), (y+(w*numCols))+(h/5));
            ctx.fillText(text, (x-(w*numCols))+(w/5), (y-(w*numCols))+(h/5));
            ctx.fillText(text, (x+(w*numCols))+(w/5), (y-(w*numCols))+(h/5));
            ctx.fillText(text, (x-(w*numCols))+(w/5), (y+(w*numCols))+(h/5));

            x += w;	
			r += 3;
			g += 4;
			b += 5;
    	
    	});
        console.log(offScreen); 	
    }

    function reDrawCanvas() {
        canvas.width = $(window).width();
        canvas.height = $(window).height();
        drawStuff(x, y, z); 
    }

    drawStuff(x, y, z); 

});


//onld functions
    
    