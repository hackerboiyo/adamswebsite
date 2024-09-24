alert("click space to cuntuino")
let flying_windows=[]
function openflyingwindows(){

    const window_featurs="width=400,height=400,left=100,top=100"
    const newwindow=window.open("","",window_featurs)
    if(newwindow){

        newwindow.document.write('<img src="dddfdddddddddddddddddddddddddddddddddddddddddc.jpg"/>')
        flying_windows.push(newwindow)
    }
}

//openflyingwindows()

// Students = [{name:"Adam",age:8,Skills:"cODHeaig"},{name:"yousef" ,age:"idk",Skills:"being a freind"}]


// Students.forEach(e => {
//     console.log(e.age)
    
// });

function move_flying_windows(){

    flying_windows.forEach(win => {
        if (!win.closed) {console.log("i make youu madddddddd man from adam or maby you or me or yuo me or poop")
            const randomx=Math.random()*(window.screen.width-400)
            const randomy=Math.random()*(window.screen.height-400)
            win.moveTo(randomx,randomy)
        }
        
    });
}
function start_moving_windows() {
    setInterval(() => {
        move_flying_windows()
    }, 1);
window.addEventListener(`keydown`,(event)=>{
   if (event.code==='Space') {
    event.preventDefault();
   } 
   for (let index = 0; index < 5; index++) {
   openflyingwindows()
   }
})

}

start_moving_windows()
