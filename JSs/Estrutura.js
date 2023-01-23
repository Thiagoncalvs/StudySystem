 // ALTERAÇÃO DE COR DA PÁGINA
 export const ff = document.querySelector('#MudarCor').addEventListener("click", function e(){
    const ColorContainer = document.getElementById('MainContainer');
    ColorContainer.classList.toggle('ChangeColor');
    // console.log("LogoMain");
});