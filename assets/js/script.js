const img = document.getElementById("mybio");
img.addEventListener("click", changeShape);

const shapeArr = [
  // Hexagon
  "25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%",
  // Rabbet
  "0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%",
  // star
  "50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);",
  // octagon
    "30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%",
  // Rhombus
  "50% 0%, 100% 50%, 50% 100%, 0% 50%",
  // message
  "0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%"
];

function changeShape() {
    const randomShape = Math.floor(Math.random() * shapeArr.length);
    const newClipPath = shapeArr[randomShape];
    const currentClipPath = getComputedStyle(img).getPropertyValue("--shape");
  
    
  
    if (currentClipPath !== newClipPath) {
      img.style.setProperty("--shape", newClipPath);
    } 
    else {
      img.style.setProperty("--shape", shapeArr[randomShape + 1]);
      console.log(shapeArr[randomShape + 1]);
    }
  }
  

