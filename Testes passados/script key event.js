function digitou (e){
    if(e.keyCode === 13 && e.ctrlKey === true) { // enter e ctrl
        let texto= document.getElementById ("campo").value;
        console.log(texto);
    }
}