function tabuada(){

    let n1 = document.getElementById("txt1")
    let res = document.getElementById("seltab")
    let txt = Number(n1.value)
    if(n1.value.length == " "){
        alert("Por favor, digite um número!")
        res.innerHTML = 'FALHA NO PROCESSAMENTO'
    }else{
        res.innerHTML = ""
        for(let i = 1;i<=10;i++){
            let item= document.createElement(`option`)
            item.text = `${txt} * ${i} = ${txt*i}`
            res.appendChild(item)
            
        }
}}