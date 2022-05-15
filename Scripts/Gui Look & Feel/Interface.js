Content.makeFrontInterface(600, 600);

//DSP
const var BounceVerbFx = Synth.getEffect("BounceVerb Fx");

//GUI REFERENCES
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
  Content.getComponent("Knob8")
];

//AbstractKnobs
const var AbstractKnobs = 
[
  Content.getComponent("Knob9"),
  Content.getComponent("Knob10"),
  Content.getComponent("Knob11"),
  Content.getComponent("Knob12"),
  Content.getComponent("Knob13")
];

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
  Content.getComponent("Label8")
];

//Naming Labels
for (i = 0; i < Knobs.length; i++)
{
	Labels[i].set("text", Knobs[i].get("text"));
}


//Gui Attachments
Knobs[0].setControlCallback(onHold);
Knobs[1].setControlCallback(onCut);
Knobs[2].setControlCallback(onStretch);
Knobs[3].setControlCallback(onSize);
Knobs[4].setControlCallback(onRate);
Knobs[5].setControlCallback(onDens);
Knobs[6].setControlCallback(onBoost);
Knobs[7].setControlCallback(onRand);

//Attachment Functions
inline function onHold(component, value)
{
	BounceVerbFx.setAttribute(BounceVerbFx.Hold, value / 1000);
}

inline function onCut(component, value)
{
	BounceVerbFx.setAttribute(BounceVerbFx.HC, value);
}

inline function onStretch(component, value)
{
	BounceVerbFx.setAttribute(BounceVerbFx.Stretch, value);
}

inline function onSize(component, value)
{
	BounceVerbFx.setAttribute(BounceVerbFx.SizeR, value);
}





inline function onRand(component, value)
{
	AbstractKnobs[1].setValue(AbstractKnobs[0].getValue() - Knobs[7].getValue());
	AbstractKnobs[2].setValue(AbstractKnobs[1].getValue() - Knobs[7].getValue());
	AbstractKnobs[3].setValue(AbstractKnobs[2].getValue() - Knobs[7].getValue());
	AbstractKnobs[4].setValue(AbstractKnobs[3].getValue() - Knobs[7].getValue());
	
	BounceVerbFx.setAttribute(BounceVerbFx.Size1, AbstractKnobs[0].getValue());
	
	BounceVerbFx.setAttribute(BounceVerbFx.Size2, AbstractKnobs[0].getValue() - Knobs[7].getValue());
	BounceVerbFx.setAttribute(BounceVerbFx.Size3, AbstractKnobs[1].getValue() - Knobs[7].getValue());
	BounceVerbFx.setAttribute(BounceVerbFx.Size4, AbstractKnobs[2].getValue() - Knobs[7].getValue());
	BounceVerbFx.setAttribute(BounceVerbFx.Size5, AbstractKnobs[3].getValue() - Knobs[7].getValue());

}




inline function onRate(component, value)
{
	AbstractKnobs[0].setValue(1.0 - Knobs[4].getValue());
	AbstractKnobs[1].setValue(AbstractKnobs[0].getValue() - Knobs[7].getValue());
	AbstractKnobs[2].setValue(AbstractKnobs[1].getValue() - Knobs[7].getValue());
	AbstractKnobs[3].setValue(AbstractKnobs[2].getValue() - Knobs[7].getValue());
	AbstractKnobs[4].setValue(AbstractKnobs[3].getValue() - Knobs[7].getValue());
	
	BounceVerbFx.setAttribute(BounceVerbFx.Size1, AbstractKnobs[0].getValue());
		
	BounceVerbFx.setAttribute(BounceVerbFx.Size2, AbstractKnobs[0].getValue() - Knobs[7].getValue());
	BounceVerbFx.setAttribute(BounceVerbFx.Size3, AbstractKnobs[1].getValue() - Knobs[7].getValue());
	BounceVerbFx.setAttribute(BounceVerbFx.Size4, AbstractKnobs[2].getValue() - Knobs[7].getValue());
	BounceVerbFx.setAttribute(BounceVerbFx.Size5, AbstractKnobs[3].getValue() - Knobs[7].getValue());
	

	
	AbstractKnobs[1].changed();
	AbstractKnobs[2].changed();
	AbstractKnobs[3].changed();
	AbstractKnobs[4].changed();
	
}


inline function onDens(component, value)
{
	BounceVerbFx.setAttribute(BounceVerbFx.Density, value);
}

inline function onBoost(component, value)
{
	BounceVerbFx.setAttribute(BounceVerbFx.Reflectivity, value);
}

 