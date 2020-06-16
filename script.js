
document.querySelector("#button").addEventListener("click",run)



function run()
{  



    var c= document.querySelector(".left");
    var d= document.querySelector(".right");
    c.addEventListener("click",redcarleft)
    d.addEventListener("click",redcaright)
    const h=document.querySelector(".herocar");
    
    
    var m=0;
    
    
    
    
    
    
    function redcarleft ()
    {
    
    
        if(m>4)
        {
            m=0;
        }
         
        else
           {
            m+=1;
            h.style.marginLeft=m+"00px";
           }
        
    }
    
    
    
    
    
    
    function redcaright()
    {
        if(m<1)
        {
            m=6
        }
        else{
            m-=1;
            h.style.marginLeft=m+"00px";
        }
       
    }
    
    
    
    















     
    document.querySelector(".stop").addEventListener("click",pause);
    function pause()
    {
        clearInterval(id);
       
    }
    
    var a=document.querySelector(".linemid");
    var pos=0;
    var l=0;
    var id=setInterval(frame1,5)
    function frame1()
    {
        if (pos==6)
        {
            pos=-1;
        }
        else
        {
            pos++;
            a.style.marginTop=pos+"00px";
           
        }
    }

}









var b=document.querySelector("#button");
b.addEventListener("click",obstacle);
function obstacle()
{  
    document.querySelector(".stop").addEventListener("click",pause);
    function pause()
    {
        clearInterval(id);
       
    }
    
    obstacle1();

    const n=document.querySelector("#obs");
 
    var m=0;
    var i=4
    var id=setInterval(frame,25)
    function frame()
    {  
        if( m>50)
        {
            m=0;
            if( i>4)
            {
                i=0
            }
            else{
                i++
            }
        }
        else
        {
            m++;
            n.style.marginTop=m+"0px";
            n.style.marginLeft=i+"00px";
        }
       
       
        
       
    }
   
}


//a.addEventListener("click",obstacle1);
function obstacle1()
{   
    document.querySelector(".stop").addEventListener("click",pause);
    function pause()
    {
        clearInterval(id);
       
    }
    const k=document.querySelector("#obs1");
      
    var l=5;
    var p=0;
    var id=setInterval(frame1,25)
    function frame1()
    {  

       
    











        if( l<0)
        {
            l=50;
            if( p>2)
            {
                p=0
            }
            else{
                p++
            }
        }
        else
        {
            l--;
            k.style.marginTop=l+"0px";
            k.style.marginLeft=p+"00px";
        }
       
       
       
    }
}

