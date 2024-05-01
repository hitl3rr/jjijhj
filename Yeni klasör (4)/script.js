document.querySelector(".duyme").addEventListener("click", function() {
    let width = parseInt(document.querySelector(".item1").value);
    let height = parseInt(document.querySelector(".item2").value);
    let backgroundColor = document.querySelector(".item3").value;
    let borderRadius = parseInt(document.querySelector(".item4").value);
    let maker = document.querySelector(".maker");
    let coder = document.querySelector(".coderr")


   let inpwid = maker.style.width = width + "px";
   let inphgt = maker.style.height = height + "px";
   let inpbclr = maker.style.backgroundColor = backgroundColor;
    let inpbrd = maker.style.borderRadius = borderRadius + "px";
    coder.innerText = ` width: ${inpwid};       ` + 
    `height: ${inphgt};     `
     + `backgroun-color: ${inpbclr};    ` 
     + `border-radius: ${inpbrd};      `
     + `       element , .urclass ,#urid{     
       width: ${inpwid};      
       height: ${inphgt};      
      backgroun-color: ${inpbclr};       
      border-radius: ${inpbrd};   
     }`
});

document.querySelector(".item3").addEventListener("input", function() {
    let colorer = this.value;
    let colorbox = document.querySelector(".colorbox");


    colorbox.style.display = "block"
    colorbox.style.backgroundColor = colorer;
});

