Content.makeFrontInterface(800, 700);
Synth.deferCallbacks(true);

const var laf = Engine.createGlobalScriptLookAndFeel();

//DSP
const var BounceFx = Synth.getEffect("BounceFx");


const var VerbFx = Synth.getEffect("VerbFx");

//GUI REFERENCES
//Panels
const var BackG = Content.getComponent("Panel1");
const var GraphFx = Content.getComponent("Panel2");




//Timer
const var GraphTm = Engine.createTimerObject();
const var HoldTm = Engine.createTimerObject();
const var knbTimer = Engine.createTimerObject();
reg compInit = 0;

//Buttons
const var Buttons = 
[
    Content.getComponent("Button1"),
    Content.getComponent("Button2"),
    Content.getComponent("Button3"),
];


//////////////////////////////////////////////////////////////
//Main Knobs
const var Knobs = 
[
  Content.getComponent("Knob1"),
  Content.getComponent("Knob2"),
  Content.getComponent("Knob3"),
  Content.getComponent("Knob4"),
  Content.getComponent("Knob5"),
  Content.getComponent("Knob6"),
  Content.getComponent("Knob7"),
  Content.getComponent("Knob8"),
  Content.getComponent("Knob14"),
  Content.getComponent("Knob15")
  
  
];

///////////////////////////////////////////////////////////////
//AbstractKnobs
const var AbstractKnobs = 
[
  Content.getComponent("Knob9"),
  Content.getComponent("Knob10"),
  Content.getComponent("Knob11"),
  Content.getComponent("Knob12"),
  Content.getComponent("Knob13")
];

///////////////////////////////////////////////////////////////
//Labels
const var Labels = 
[
  Content.getComponent("Label1"),
  Content.getComponent("Label2"),
  Content.getComponent("Label3"),
  Content.getComponent("Label4"),
  Content.getComponent("Label5"),
  Content.getComponent("Label6"),
  Content.getComponent("Label7"),
  Content.getComponent("Label8"),
  Content.getComponent("Label9"),
  Content.getComponent("Label10")
];


//////////////////////////////////////////////////////////////
//Naming Labels
for (i = 0; i < Knobs.length; i++)
{
	Labels[i].set("text", Knobs[i].get("text"));
}


///////////////////////////////////////////////////////////////
//Gui Attachments
Knobs[0].setControlCallback(onHold);
Knobs[1].setControlCallback(onCut);
Knobs[2].setControlCallback(onStretch);
Knobs[3].setControlCallback(onSize);
Knobs[4].setControlCallback(onRate);
Knobs[5].setControlCallback(onDens);
Knobs[6].setControlCallback(onBoost);
Knobs[7].setControlCallback(onRand);
Knobs[8].setControlCallback(onDry);
Knobs[9].setControlCallback(onWet);
Buttons[0].setControlCallback(onVerb);
Buttons[1].setControlCallback(onBounce);
Buttons[2].setControlCallback(onNestee);



///////////////////////////////////////////////////////////////
//Attachment Functions
inline function onHold(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[0].set("text", Math.round(value) + Knobs[0].get("suffix"));
	Labels[0].changed();
	compInit = 1;

	VerbFx.setAttribute(VerbFx.Holdup, value / 1000);
}

inline function onCut(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[1].set("text", Math.round(value * 100) + Knobs[1].get("suffix"));
	Labels[1].changed();

	GraphFx.repaint();

	VerbFx.setAttribute(VerbFx.Swallow, value);
}

inline function onStretch(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[2].set("text", Math.round(value * 100) + Knobs[2].get("suffix"));
	Labels[2].changed();

	GraphFx.repaint();

	VerbFx.setAttribute(VerbFx.Stretch, value);
}

inline function onSize(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[3].set("text", Math.round(value * 100) + Knobs[3].get("suffix"));
	Labels[3].changed();

	GraphFx.repaint();

	VerbFx.setAttribute(VerbFx.Size, value);
}

inline function onRand(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[7].set("text", Math.round(value * 100) + Knobs[7].get("suffix"));
	Labels[7].changed();



	AbstractKnobs[1].setValue(AbstractKnobs[0].getValue() - Knobs[7].getValue());
	AbstractKnobs[2].setValue(AbstractKnobs[1].getValue() - Knobs[7].getValue());
	AbstractKnobs[3].setValue(AbstractKnobs[2].getValue() - Knobs[7].getValue());
	AbstractKnobs[4].setValue(AbstractKnobs[3].getValue() - Knobs[7].getValue());
	
	BounceFx.setAttribute(BounceFx.Size1, AbstractKnobs[0].getValue());
	
	BounceFx.setAttribute(BounceFx.Size2, AbstractKnobs[0].getValue() - Knobs[7].getValue());
	BounceFx.setAttribute(BounceFx.Size3, AbstractKnobs[1].getValue() - Knobs[7].getValue());
	BounceFx.setAttribute(BounceFx.Size4, AbstractKnobs[2].getValue() - Knobs[7].getValue());
	BounceFx.setAttribute(BounceFx.Size5, AbstractKnobs[3].getValue() - Knobs[7].getValue());

}

inline function onRate(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[4].set("text", Math.round(value * 100) + Knobs[4].get("suffix"));
	Labels[4].changed();

	AbstractKnobs[0].setValue(1.0 - Knobs[4].getValue());
	AbstractKnobs[1].setValue(AbstractKnobs[0].getValue() - Knobs[7].getValue());
	AbstractKnobs[2].setValue(AbstractKnobs[1].getValue() - Knobs[7].getValue());
	AbstractKnobs[3].setValue(AbstractKnobs[2].getValue() - Knobs[7].getValue());
	AbstractKnobs[4].setValue(AbstractKnobs[3].getValue() - Knobs[7].getValue());
	
	BounceFx.setAttribute(BounceFx.Size1, AbstractKnobs[0].getValue());
		
	BounceFx.setAttribute(BounceFx.Size2, AbstractKnobs[0].getValue() - Knobs[7].getValue());
	BounceFx.setAttribute(BounceFx.Size3, AbstractKnobs[1].getValue() - Knobs[7].getValue());
	BounceFx.setAttribute(BounceFx.Size4, AbstractKnobs[2].getValue() - Knobs[7].getValue());
	BounceFx.setAttribute(BounceFx.Size5, AbstractKnobs[3].getValue() - Knobs[7].getValue());
	

	
	AbstractKnobs[1].changed();
	AbstractKnobs[2].changed();
	AbstractKnobs[3].changed();
	AbstractKnobs[4].changed();
	
}

inline function onDens(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[5].set("text", Math.round(value * 100) + Knobs[5].get("suffix"));
	Labels[5].changed();

	BounceFx.setAttribute(BounceFx.Density, value);
}

inline function onBoost(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[6].set("text", Math.round(value * 100) + Knobs[6].get("suffix"));
	Labels[6].changed();

	BounceFx.setAttribute(BounceFx.Reflectivity, value);
}

inline function onVerb(component, value)
{
	VerbFx.setBypassed(value -1);

		value ? Labels[0].set("textColour", 0xD8FAF9F6 ) : Labels[0].set("textColour", 0x7EFAF9F6 );
		value ? Labels[1].set("textColour", 0xD8FAF9F6 ) : Labels[1].set("textColour", 0x7EFAF9F6 );
		value ? Labels[2].set("textColour", 0xD8FAF9F6 ) : Labels[2].set("textColour", 0x7EFAF9F6 );
		value ? Labels[3].set("textColour", 0xD8FAF9F6 ) : Labels[3].set("textColour", 0x7EFAF9F6 );
	
}

inline function onBounce(component, value)
{
	BounceFx.setBypassed(value -1);
	
			value ? Labels[4].set("textColour", 0xD8FAF9F6 ) : Labels[4].set("textColour", 0x7EFAF9F6 );
			value ? Labels[5].set("textColour", 0xD8FAF9F6 ) : Labels[5].set("textColour", 0x7EFAF9F6 );
			value ? Labels[6].set("textColour", 0xD8FAF9F6 ) : Labels[6].set("textColour", 0x7EFAF9F6 );
			value ? Labels[7].set("textColour", 0xD8FAF9F6 ) : Labels[7].set("textColour", 0x7EFAF9F6 );
}



inline function onDry(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[8].set("text", Math.round(value * 100) + Knobs[8].get("suffix"));
	Labels[8].changed();

	VerbFx.setAttribute(VerbFx.VerbDry, value);
	BounceFx.setAttribute(BounceFx.BounceDry, value);
}
 
inline function onWet(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
	Labels[9].set("text", Math.round(value * 100) + Knobs[9].get("suffix"));
	Labels[9].changed();

	VerbFx.setAttribute(VerbFx.Dw, value);
	BounceFx.setAttribute(BounceFx.Parameter, value);
}
 
inline function onNestee(component, value)
{
	if (value)
		Engine.openWebsite("https://www.instagram.com/itsnestee/");
}



/////////////////////////////////////////////////////////////
//Paint Routines 
BackG.setPaintRoutine(function(g)
{
	
	g.setColour(nOffWhite);
	g.setFont("Actay Wide", 20);
	g.drawAlignedText("BOUNCEVERB", [630, 5, 170, 35], "centred");
});

GraphFx.setPaintRoutine(function(g)
{
	reg cx = this.getWidth() / 2;
	reg cy = this.getHeight() / 2;
	reg width = (Knobs[2].getValue() * 780) + 1;
	reg height = (Knobs[3].getValue() * 240) + 1;
	reg smear = (Knobs[1].getValue() * 100) + 1;

	g.setColour(nOffWhite);
	g.fillRoundedRectangle([cx - width / 2, cy - height / 2, width , height ], smear);
	g.setColour(nOffWhite);
});





/////////////////////////////////////////////////////////
//TIMER
GraphTm.setTimerCallback(function()
{
	GraphFx.repaintImmediately();

});

knbTimer.setTimerCallback(function()
{
	Labels[0].set("text", Knobs[0].get("text"));
	Labels[0].changed();
	Labels[1].set("text", Knobs[1].get("text"));
	Labels[1].changed();
	Labels[2].set("text", Knobs[2].get("text"));
	Labels[2].changed();
	Labels[3].set("text", Knobs[3].get("text"));
	Labels[3].changed();
	Labels[4].set("text", Knobs[4].get("text"));
	Labels[4].changed();
	Labels[5].set("text", Knobs[5].get("text"));
	Labels[5].changed();
	Labels[6].set("text", Knobs[6].get("text"));
	Labels[6].changed();
	Labels[7].set("text", Knobs[7].get("text"));
	Labels[7].changed();
	Labels[8].set("text", Knobs[8].get("text"));
	Labels[8].changed();
	Labels[9].set("text", Knobs[9].get("text"));
	Labels[9].changed();
	
	
	knbTimer.stopTimer();

});



