
var tamilMark=parseInt(prompt("enter your mark"));
var englishMark=parseInt(prompt("enter your mark"));
var mathsMark=parseInt(prompt("enter your mark"));
var scienceMark=parseInt(prompt("enter your mark"));
var socialMark=parseInt(prompt("enter your mark"));

document.write("tamilmark-"+tamilMark);
document.write("<br>");
 document.write("<br>");
document.write("englishmark-"+englishMark);
document.write("<br>");
 document.write("<br>");
document.write("mathsmark-"+mathsMark);
document.write("<br>");
 document.write("<br>");
document.write("sciencemark-"+scienceMark);
document.write("<br>");
 document.write("<br>");
document.write("socialmark-"+socialMark);
document.write("<br>");
 document.write("<br>");

let total=tamilMark+englishMark+mathsMark+scienceMark+socialMark;
 document.write("Totalmark="+total);
 document.write("<br>");
  document.write("<br>");
   document.write("<br>");
 let avg=total/5;
 document.write("Average="+avg);
 console.log(Math.floor(avg));
 
 
/*--	if(avg>=90&&avg<=100){
	document.write("s grade");
	}
	else if(avg>=89&&avg<=80){
        document.write("a grade");
    }
    else if(avg>=79&&avg<=60){
		document.write("b grade");
	}
	else if(avg<=59&&avg>=40){
		document.write("pass grade");
	}
	else if(avg<=39&&avg>=0){
		document.write("fail grade");
	}
	else{
		document.write("wrong");
	
	}--*/


	switch(avg<=100){
		case avg>=90&&avg<=100:
		document.write("s grade");
		break;
		
				case avg>=89&&avg<=80:
		document.write("a grade");
		break;
		
				case avg<=79&&avg>=60:
		document.write("b grade");
		break;
		
		case avg>=59&&avg>=40:
		document.write("pass");
		break;
		
		case avg<=39&&avg>=0:
		document.write("fail");
		break;
		
		
		default:
		document.write("wrong");
		break;
	}
		
