//Look & Feel
laf.registerFunction("drawPopupMenuBackground", function(g, obj)
{
    g.fillAll(nBlack);
    
    
    g.drawRect([0, 0, obj.width, obj.height], 1);
});

laf.registerFunction("drawPopupMenuItem", function(g, obj)
{
    var a = obj.area;
    var h = a[3];
    
    
    if(obj.isTicked)
    {
        g.setColour(nOffWhite);
        g.fillEllipse(obj.area);
    }
    
    if(obj.isHighlighted)
    {
        g.setColour(nOffWhite);
        g.setOpacity(0.1);
        g.fillRect(obj.area);
    }
    
    g.setFont("Actay Wide", 11.0);
    g.setColour(nOffWhite);
    g.drawAlignedText(obj.text, [a[0] + h, a[1], a[2] - h, a[3]], "left");
});


//Components References
const var Label11 = Content.getComponent("Label11");
const var Panel4 = Content.getComponent("Panel4");
const var Next = Content.getComponent("Button6");
const var Prev = Content.getComponent("Button5");
const var PrList = Engine.getUserPresetList();

//Component Properties
Content.setPropertiesFromJSON("Panel4", {
    "width": 150,
    "height": 25,
    "popupMenuItems":
    "Ambience::Outdoor Drums\nAmbience::Aired Vox\nAmbience::GrandSpace \nAmbience::Distance Piano\nRooms::Teenage Bedroom\nRooms::Studio Closet \nRooms::Coarsed Area\nFx::SuperBounce\nFx::Randomised Response",
    "allowCallbacks": "Context Menu",
    "popupMenuAlign": true,
    "popupOnRightClick": false
    
});

//Components Controls Attachments
Panel4.setControlCallback(onPanel4Control);
Panel4.setMouseCallback(function(event)
{
	this.setValue(event.result);
    this.changed();
});
Prev.setControlCallback(onPrevControl);
Next.setControlCallback(onNextControl);
Engine.loadUserPreset("Preset1");


//Paint Routines
Panel4.setPaintRoutine(function(g)
{
	g.setFont("Actay Wide", 16.0);
	g.setColour(nOffWhite);
	var items = this.get("popupMenuItems").split("\n");
	var t = items[value - 1];
	        
	//  Without submenu name
	//var t2 = t.substring(t.indexOf(":") + 2, t.length);
	g.setOpacity(0.5);
	g.drawAlignedText(" Select Preset", [0,2,150,20], "centred");
	g.setOpacity(0.2);
	g.drawRoundedRectangle(this.getLocalBounds(1), 2, 1.5);
});





//Control Functions
inline function onPanel4Control(component, value)
{

    if (value)
    {
        local items = component.get("popupMenuItems").split("\n");
        local t = items[value - 1];
        
        //  Without submenu name
        local t2 = t.substring(t.indexOf(":") + 2, t.length);
        Label11.set("text", t2);
    
        Console.print("Selected Item ID: " + value);
      	Console.print(PrList[value - 1]);
        
        Engine.loadUserPreset(PrList[value - 1]);
    }
};

// Prev-Button ----------------------------------------------------------------------------------------------
inline function onPrevControl(component, value)
{
    if (value)
    {
        if (Panel4.getValue() <= 1)
        {
            local items = Panel4.get("popupMenuItems").split("\n");
            
            Panel4.setValue(items.length +1);
        }
        Engine.loadPreviousUserPreset(0);
        Panel4.setValue(Panel4.getValue() - 1);
	    Panel4.changed();
    }

};


// Next-Button ----------------------------------------------------------------------------------------------
inline function onNextControl(component, value)
{
    if (value)
    {
        local items = Panel4.get("popupMenuItems").split("\n");
        if (Panel4.getValue() == items.length)
        {
            Panel4.setValue(0);
        }
        Engine.loadNextUserPreset(0);
        Panel4.setValue(Panel4.getValue() + 1);
	    Panel4.changed();
    }

};

