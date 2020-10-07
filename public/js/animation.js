//----------------------- living room - sale items - clothes ---------//
// recup des variables //

let livingRoom = document.getElementsByClassName('p-section2')[0]; 
let div_border1 = document.getElementsByClassName('border-section2')[0];


let saleItems = document.getElementsByClassName('div2-section2')[0]; 
let div_border2 = document.getElementsByClassName('border-section2')[1];

let clothes = document.getElementsByClassName('div3-section2')[0]; 
let div_border3 = document.getElementsByClassName('border-section2')[2]; 

// living room //
livingRoom.addEventListener('mouseover', () => {
    div_border1.classList = 'animation-section2-js'
})

livingRoom.addEventListener('mouseout', () => {
    div_border1.classList = 'border-section2'
})

// sale items //
saleItems.addEventListener('mouseover', () => {
    div_border2.classList = 'animation-section2-js'
})

saleItems.addEventListener('mouseout', () => {
    div_border2.classList = 'border-section2'
})


// clothes //
clothes.addEventListener('mouseover', () => {
    div_border3.classList = 'animation-section2-js'
})

clothes.addEventListener('mouseout', () => {
    div_border3.classList = 'border-section2'
})

//----------------------- recent product ---------------------------//
// rangée 1 //
// gauche //
let div1_section3 = document.getElementsByClassName('binks')[0]; 
let img1_section3 = div1_section3.getElementsByTagName('img')[0]; 

img1_section3.addEventListener('mouseover', () => {
    img1_section3.classList = 'img-section32'
})

img1_section3.addEventListener('mouseout', () => {
    img1_section3.classList = 'img-section3'
})

// milieu //
let div2_section3 = document.getElementsByClassName('binks')[1];
let img2_section3 = div2_section3.getElementsByTagName('img')[0]; 

img2_section3.addEventListener('mouseover', () => {
    img2_section3.classList = 'img-section32'
})

img2_section3.addEventListener('mouseout', () => {
    img2_section3.classList = 'img-section3'
})

// doite //
let div3_section3 = document.getElementsByClassName('binks')[2]; 
let img3_section3 = div3_section3.getElementsByTagName('img')[0];

img3_section3.addEventListener('mouseover', () => {
    img3_section3.classList = 'img-section32'
})

img3_section3.addEventListener('mouseout', () => {
    img3_section3.classList = 'img-section3'
})

// rangée 2 //
// gauche //
let div4_section3 = document.getElementsByClassName('binks')[3]; 
let img4_section3 = div4_section3.getElementsByTagName('img')[0]; 

img4_section3.addEventListener('mouseover', () => {
    img4_section3.classList = 'img-section32'
})

img4_section3.addEventListener('mouseout', () => {
    img4_section3.classList = 'img-section3'
})

// milieu //
let div5_section3 = document.getElementsByClassName('binks')[4];
let img5_section3 = div5_section3.getElementsByTagName('img')[0]; 

img5_section3.addEventListener('mouseover', () => {
    img5_section3.classList = 'img-section32'
})

img5_section3.addEventListener('mouseout', () => {
    img5_section3.classList = 'img-section3'
})

// doite //
let div6_section3 = document.getElementsByClassName('binks')[5]; 
let img6_section3 = div6_section3.getElementsByTagName('img')[0];

img6_section3.addEventListener('mouseover', () => {
    img6_section3.classList = 'img-section32'
})

img6_section3.addEventListener('mouseout', () => {
    img6_section3.classList = 'img-section3'
})

// rangée 3 //
// gauche //
let div7_section3 = document.getElementsByClassName('binks')[6]; 
let img7_section3 = div7_section3.getElementsByTagName('img')[0]; 

img7_section3.addEventListener('mouseover', () => {
    img7_section3.classList = 'img-section32'
})

img7_section3.addEventListener('mouseout', () => {
    img7_section3.classList = 'img-section3'
})

// milieu //
let div8_section3 = document.getElementsByClassName('binks')[7];
let img8_section3 = div8_section3.getElementsByTagName('img')[0]; 

img8_section3.addEventListener('mouseover', () => {
    img8_section3.classList = 'img-section32'
})

img8_section3.addEventListener('mouseout', () => {
    img8_section3.classList = 'img-section3'
})

// doite //
let div9_section3 = document.getElementsByClassName('binks')[8]; 
let img9_section3 = div9_section3.getElementsByTagName('img')[0];

img9_section3.addEventListener('mouseover', () => {
    img9_section3.classList = 'img-section32'
})

img9_section3.addEventListener('mouseout', () => {
    img9_section3.classList = 'img-section3'
})

//----------------------- carousel ---------------------------//



