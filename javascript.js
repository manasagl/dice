function RandomInt(a,b)
{
	return Math.floor(Math.random()*(b-a+1))+a
}


var mypoint=0;

function DiceRoll()
{
	var die1=RandomInt(1,6);
	var die2=RandomInt(1,6);
	var dice=die1+die2;
	if(mypoint==0)
	{
	if(dice==8||dice==11)prefix="you rolled an";
	var prefix="you rolled a ";
	if(dice==7||dice==11){mypoint=0;myResult(prefix + dice +".You won!");return}
	else if(dice==2||dice==3||dice==12){mypoint=0;myResult(prefix + dice +".You Lose!");return}
	else{mypoint=dice;myResult(prefix +dice+".That is your point.");return}
	}
	if(mypoint!=0)
	{
	
		var die=dice;
		var prefix="you rolled a ";
		if(mypoint==dice){mypoint=0;myResult(prefix + die +".You win!");return}
		if(dice==7||dice==11){mypoint=0;myResult(prefix + die +".You Lose!");return}
		else{myResult(prefix + die +".");return}
	}
	
}


function myResult(str)
{
	var newLineCharacter="\n";
	var e=document.forms.DiceForm.elements.rollResults;
	if(!e.value)e.value=str;
	else e.value+=newLineCharacter+str;
	e.scrollTop=e.scrollHeight;

}
onload=function()
{
	document.forms.DiceForm.elements.rollResults.value="";
}



