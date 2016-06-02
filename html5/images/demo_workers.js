/**
 * Created by wiker on 16-5-27.
 */
var i=0;

function timedCount() 
{
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();
