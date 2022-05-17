laf.registerFunction("drawRotarySlider", function(g, obj)
{
	var a = obj.area;
	var start = 2.5;
	var end = start * 2 * obj.valueNormalized - start;


	
	
	g.setColour(obj.bgColour);
	g.setOpacity( 1.0 - (obj.value * 0.8));
	g.fillEllipse([1, 65, 4, 4]);
	g.setColour(obj.bgColour);
	g.setOpacity((obj.value * 0.8) + 0.2);
	g.fillEllipse([64, 65, 4, 4]);


	g.setColour(obj.bgColour);
	g.setOpacity((obj.value ) + 0.2);
	g.setFont("Actay Wide", (obj.value * 10) + 15);
	//g.drawText("N", [25, 28, 20, 20]);
	
	g.setColour(nOffWhite);
	g.drawEllipse([1, 1, a[2] - 2, a[3] - 2], 1.5);
	
	g.rotate(end, [a[2] / 2, a[3] / 2]);
	obj.hover ? g.setColour(nOffWhite) : g.setColour(obj.bgColour);
	g.fillEllipse([a[2] / 2 - 7 / 2, 7, 7, 7]);
	

	
	g.setColour(nBlack);


});