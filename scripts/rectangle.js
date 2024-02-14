function calculateRectangleArea(){
    //get the lenght of the rectangle
     const lenghtInput = document.getElementById('rectangle-length');
     const lenghtText  =lenghtInput.value;
     const lenght = parseFloat(lenghtText);
    //  console.log(lenght);
     //get the width of the rectangle
     const widthInput = document.getElementById('rectangle-width');
     const widthText = widthInput.value;
     const width = parseFloat(widthText);
    //  console.log(width);

     //calculate rectangle area
     const area = lenght * width;
     console.log(area);

     //display rectangle area
     const rectangleAreaSpan = document.getElementById('rectangle-area');
     rectangleAreaSpan.innerText = area;

}