function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "#ff4d4d");//Color update red
                div_update(divs[j+1],div_sizes[j+1], "#ff4d4d");//Color update red

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "#ff4d4d");//Height update red
                div_update(divs[j+1],div_sizes[j+1], "#ff4d4d");//Height update red
            }
            div_update(divs[j],div_sizes[j], "blue");//Color updat
        }
        div_update(divs[j],div_sizes[j], "#00b3b3");//Color update green
    }
    div_update(divs[0],div_sizes[0], "#00b3b3");//Color update green

    enable_buttons();
}