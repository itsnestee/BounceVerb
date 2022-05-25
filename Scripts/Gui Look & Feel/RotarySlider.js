laf.registerFunction("drawRotarySlider", function(g, obj)
{
	if(obj.text.indexOf ("HOLDUP") != -1)
	{
		var a = obj.area;
		var start = 2.5;
		var end = start * 2 * obj.valueNormalized - start;
		
		
		
		
		g.setColour(obj.bgColour);
		g.setOpacity( 1.0 - ((obj.value/1000) * 0.8));
		g.fillRect([1, 65, 4, 4]);
		g.setColour(obj.bgColour);
		g.setOpacity(((obj.value/1000) * 0.8) + 0.2);
		g.fillRect([64, 65, 4, 4]);
		
		
		g.setColour(nOffWhite);
		g.setOpacity(0.6);
		g.drawEllipse([1, 1, a[2] - 2, a[3] - 2], 2.5);
		
		g.rotate(end, [a[2] / 2, a[3] / 2]);
		 g.setColour(nOffWhite);
		 g.setOpacity(0.6);
		g.fillRect([a[2] / 2 - 2 / 2, 2, 2, 20]);
		
		
		
		g.setColour(nBlack);
	}

	else
	{
		var a = obj.area;
		var start = 2.5;
		var end = start * 2 * obj.valueNormalized - start;
		
		
		
		
		g.setColour(obj.bgColour);
		g.setOpacity( 1.0 - (obj.value * 0.8));
		g.fillRect([1, 65, 4, 4]);
		g.setColour(obj.bgColour);
		g.setOpacity((obj.value * 0.8) + 0.2);
		g.fillRect([64, 65, 4, 4]);
		
		
		g.setColour(nOffWhite);
		g.setOpacity(0.6);
		g.drawEllipse([1, 1, a[2] - 2, a[3] - 2], 2.5);
		
		g.rotate(end, [a[2] / 2, a[3] / 2]);
		    g.setColour(nOffWhite);
		    g.setOpacity(0.6);
		g.fillRect([a[2] / 2 - 2 / 2, 2, 2, 20]);
		
		
		
		g.setColour(nBlack);
		
	}


});