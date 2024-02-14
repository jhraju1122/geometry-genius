function calculateParallelogramArea(){
    // get the base of Parallelogram
    const baseInput = document.getElementById('Parallelogram-base');
    const baseText = baseInput.value ;
    const base  = parseFloat(baseText);

    // get the height of the Parallelogram 
    const heightInput = document.getElementById('Parallelogram-height');
    const heightText  = heightInput.value ;
    const height = parseFloat(heightText);

    // calculate Parallelogram Area
    const area = base * height;

    // display Parallelogram area 
    const ParallelogramAreaSpan = document.getElementById('Parallelogram-area');
    ParallelogramAreaSpan.innerText = area;
    console.log(area);
}