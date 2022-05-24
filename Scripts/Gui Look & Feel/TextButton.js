

laf.registerFunction("drawToggleButton", function(g, obj)
{
	
	//Hover == 1 && Pressed == 0
	g.setColour(obj.over ? Colours.fromVec4([0.98, 0.976, 0.965, 0.6]) 
				: Colours.fromVec4([0.98, 0.976, 0.965, 0.5]));
	
	//Hover == 1 && Pressed == 1			
	if(obj.value)
	{
		g.setColour(obj.over ? Colours.fromVec4([0.98, 0.976, 0.965, 0.8]) 
				: Colours.fromVec4([0.98, 0.976, 0.965, 0.5]));
	}
	
	//X1
	g.drawLine(1, obj.value ? 149.5 : 11, 1, 1, obj.over ? 1.5 : 0.0);
	//X2
	g.drawLine(obj.value ? 1 : 140, 149.5, 29, 29, obj.over ? 1.5 : 0.0);
	//Y1
	g.drawLine(1.5, 1.5, 0.5, obj.value ? 29.5 : 11, obj.over ? 1.5 : 0.0);
	//Y2
	g.drawLine(149, 149, obj.value ? 0.5 : 20, 29.5, obj.over ? 1.5 : 0.0);
	
	
	g.fillAll(obj.down ? Colours.fromVec4([0.98, 0.976, 0.965, 0.09]) 
				: Colours.fromVec4([0.98, 0.976, 0.965, 0.0]));
	
	g.setColour(obj.over ? Colours.fromVec4([0.98, 0.976, 0.965, 0.8]) 
				: Colours.fromVec4([0.98, 0.976, 0.965, 0.3]));
	
	//Hover == 1 && Pressed == 1
	if(obj.value)
		{
			g.setColour(obj.over ? Colours.fromVec4([0.98, 0.976, 0.965, 1.0]) 
					: Colours.fromVec4([0.98, 0.976, 0.965, 0.9]));
					
		}
		
	g.setFont("Actay Wide", obj.over ? 15.5 : 15.2);
	g.drawText(obj.text, obj.area );
	
});


 