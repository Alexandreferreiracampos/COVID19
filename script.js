
const consultApiUf=(UF)=>{
    let req = new XMLHttpRequest()
    req.open('GET', "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/"+UF, false)
    req.send()
    value = req.responseText
    data = JSON.parse(value)
    atualizarDados()
   }

const consultarApi=()=>{
    let req = new XMLHttpRequest()
    req.open('GET', "https://covid19-brazil-api.now.sh/api/report/v1/", false)
    req.send()
    value = req.responseText
   
    data = JSON.parse(value)
    let list = document.getElementById("myList");
    data.data.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item.state +' : '+item.cases;
      list.appendChild(li);
    });

}


function atualizarDados(){
    document.getElementById("Casos").textContent="Casos registrados: " +data.cases;
    document.getElementById("Mortes").textContent=data.deaths;
    document.getElementById("Suspeitos").textContent=data.suspects;
    document.getElementById("Uf").textContent=data.state;
 
}

function Consultar(){
   var input = document.querySelector("#name");
   var valor = input.value;
   consultApiUf(valor)
}


consultApiUf('mt')
consultarApi()



