
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
        color: "#000"
    },
    b3: {
        data: "b3",
        color: "#000"
    },
    b4: {
        data: "b4",
        color: "#000"
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
        color: "#000"
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
        color: "#000"
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
        color: "#000"
    },
    e3: {
        data: "e3",
        color: "#000"
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

	

    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight-300;
	        drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
    	
    	var numCols = 5;
    	
    	var	w = window.innerWidth/numCols;
    	var	h = w;
    	var	x = 0;
    	var	y = 0;
    	var r = 100;
    	var g = 100;
    	var b = 100;
    	

    	var cells = Object.keys(grid);
    	var counter = 0;
    	
    	$(cells).each(function() {
    		
    		if((counter % numCols === 0)&&(counter != 0)) {
    			counter = 0;
    			x = 0;
    			y += h;
    		}

			counter++;
			
			var cell = grid[this];
    		var color = "rgb("+r+", "+g+", "+b+")";



    		ctx.fillStyle = color;
        	ctx.fillRect (x, y, w, h);

			color = "#0" + (color += 5);
			x += w;	
			r += 3;
			g += 4;
			b += 5;
    	
    	});

    	
   }
});