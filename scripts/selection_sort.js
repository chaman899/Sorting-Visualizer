function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#ff4d4d");//Color update red

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#ff4d4d");//Color update red
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#ff4d4d");//Height update red
            div_update(divs[i],div_sizes[i],"#ff4d4d");//Height update red
            div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
        }
        div_update(divs[i],div_sizes[i],"#00b3b3");//Color update green
    }
    div_update(divs[i],div_sizes[i],"#00b3b3");//Color update green

    enable_buttons();
}