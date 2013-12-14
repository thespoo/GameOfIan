



var count=0,
countimgactual=0; 
var testcell=0;
var btk = true;
var ink="red.gif";
coords=new Array(-51,-50,-49,-1,1,+49,50,51);
mapactual=new Array(); // load a google map
tempmapactual=new Array(); // put the google map into a second array
var neighbours;
switches=new Array();
switches["image/black.gif"]="image/white.gif";
switches["image/white.gif"]="image/black.gif";
switches["image/red.gif"]="image/red.gif";
var click_counter = 0;
document.write('<TABLE cellpadding=0 cellspacing=0 border=0><TR>');
for(y=0; y<50; ++y) { row(); }
document.write('</table>');

function row()
{
document.write('<tr>');
for(g2=0; g2<50; ++g2, ++count)
{
countimgactual=count;
document.write('<TD><A href="#" onClick="ink=switches[mapactual['+count+']];document.images['+countimgactual+'].src=ink;mapactual['+count+']=ink;"><IMG SRC="image/black.gif" WIDTH=6 HEIGHT=6 HSPACE=0 VSPACE=0 BORDER=0 ALIGN="left"></a></td>');
mapactual[count]="image/black.gif";
btk=3002;
}
}

function generation()
{
  click_counter++;
  if (click_counter > 35){
    $('body').append("<div class='full-screen'></div>");
  }
 for(y2=0; y2<2500; y2++) 
 { 
  tempmapactual[y2]=mapactual[y2];
 }

for (g=0;g<2500;g++)
  {
  neighbours=0;
  for (h=0;h<8;h++)
  {
      if (g+coords[h]>0 && g+coords[h]<2499) {
      if (mapactual[g+coords[h]]=="image/white.gif") {
      neighbours=neighbours+1;
      }


      } else if (g+coords[h]<1) {
      if (mapactual[2500+g+coords[h]]=="image/white.gif") {
      neighbours=neighbours+1;
      }
      } else if (g+coords[h]>2498) {
      if (mapactual[g+coords[h]-2500]=="image/white.gif") {
      neighbours=neighbours+1;
      }

  }
    
  }

  if (neighbours>=4 || neighbours==1 || neighbours==0) {tempmapactual[g]="image/black.gif";}
  if (neighbours==3) {tempmapactual[g]="image/white.gif";}
}

for(y3=0; y3<2500; ++y3) 
  {
  if (mapactual[y3]!=tempmapactual[y3])
    {mapactual[y3]=tempmapactual[y3];document.images[y3].src=mapactual[y3];}
  }
}

var stop = "false";
var delay=400;
function runit(){
 stop = "false";
 document.getElementById("showdelay").style.display = 'block';
 document.getElementById('once').disabled = true;
 document.getElementById('run').disabled = true;
 document.getElementById("stop").disabled = false;
 run();
}

function run() {
 if (stop=="false") {
    setTimeout("run()", delay);
 }  
 generation(); 
}


function gofaster() {
 if (delay > 50) {
   delay -= 50;
 } else if (delay > 15) {
   delay -= 8;
 } else if (delay > 1) {
   delay -= 1;
 }
 document.getElementById('speed').innerHTML = delay;
}
function goslower() {
 delay += 50;
 document.getElementById('speed').innerHTML = delay;
}
function normalspeed() {
 var delay = 400;
 document.getElementById('speed').innerHTML = delay;
}


function stopit() {
 document.getElementById("showdelay").style.display = 'none';
 document.getElementById('once').disabled = false;
 document.getElementById('run').disabled = false;
 document.getElementById("stop").disabled = true;
 stop="true";
 btk = false;
}

