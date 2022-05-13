Content.makeFrontInterface(600, 600);

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



//Attachment Functions



function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 