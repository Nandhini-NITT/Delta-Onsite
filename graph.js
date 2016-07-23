//To specify the margin of each and every rectangle
var marginX=10;
var marginY;
//The value that 1px on screen denotes
var scale=1;
//An array to store values given by user
var inputGiven=[];
//Incremented for each input
var pointer=0;
//Holds maximum value given by user and the index in which it is present
var max,maxpointer;
function findMaximum()
{
	if(max===undefined)
	{
		max= inputGiven[0];
	}
	if(maxpointer===undefined)
		maxpointer=0;
	var t=max;
	for (var i = 1; i < inputGiven.length; i++) {
	if(parseInt(inputGiven[i])>max) {
	  max = inputGiven[i];
	  maxpointer=i;
    }
	}
	if(t==max)
	{
		return true;
	}
	else
		return false;
}
function findheight(max,maxHeight,inputGiven)
{
	var height=(inputGiven/max)*maxHeight;
	return height;
}
function DrawBar()
{
	var height;
	var canvas=document.getElementById("mycanvas");
	var ctx=canvas.getContext("2d");
	ctx.fillStyle="red";
	var value=document.getElementById("height").value;
	inputGiven[pointer]=value;
	var canvasHeight=canvas.height;
	if((value/scale)>canvasHeight)
	{
		scale=Math.ceil(value/canvasHeight);
		document.getElementById('scale').innerHTML=scale;
	}
	height=value/scale;
	marginY=parseInt(canvasHeight)-height;
	if(findMaximum())
	{
		ctx.fillRect(marginX,marginY,30,height);
		marginX+=50;
	}
	else
	{
		ctx.clearRect(0,0,700,canvasHeight);
		marginX=10;
		for(var i=0;i<=maxpointer;i++)
		{
			console.log("insideloop");
			height=findheight(max,max/scale,inputGiven[i]);
			marginY=canvasHeight-height;
			ctx.fillRect(marginX,marginY,30,height);
			marginX+=50;
		}
	}
	pointer++;
}