var images =[
    {
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
},
{
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
},
{
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
},
{
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
},
{
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
},
{
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
},
{
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
},
{
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
},
{
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
} ,
{
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0UCnlXifoMjR3VMcz13_wZYcnsvKOy0Xm3kl0G_HEIC4Z5Zm-" ,
name:"The Walling",
desc:"Mystery Thiller",
bal:"7.6"
 
}  
]

           
                
                
for(let i=0; i< images.length; i++){
    area.innerHTML+= ` <div class="images">
           
                
                
            
    <img src="${images [i].img} " alt="">
<div class="bal">
<p>${images [i].bal} </p>
</div>
    <div class="text">
<h5>${images [i].name}</h5>
<p>${images [i].desc}</p>
</div>`
    
}