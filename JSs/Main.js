// CONFIGURAÇÃO DE MENUS E SUBMENUS
const respostaAllMenus = fetch("../JSONs/EstruturaMain.json").then(respostaData => {
    return respostaData.json();
}).then(jsonData => {
    var countEstruturaPrincipal = Object.keys(jsonData.EstruturaPrincipal).length

//CRONOWEEK
for(var i = 0 ; i < countEstruturaPrincipal ; i++){
    var obj = jsonData.EstruturaPrincipal[i];

    var ObjElemento = document.createElement(obj.ObjHtml)
    ObjElemento.setAttribute(obj.TipoAtributo, obj.Atributo)

    if ( obj.TipoAtributoTwo && obj.AtributoTwo != " "){
        ObjElemento.setAttribute(obj.TipoAtributoTwo, obj.AtributoTwo)
    }

    if ( obj.Conteudo != " "){
        ObjElemento.textContent = obj.Conteudo
    }

    var LugarAplicar = document.querySelector(obj.localApply)
    LugarAplicar.appendChild(ObjElemento)

}
}).catch(erro => { console.log(erro); });

let VariavelToAdd = [{
    "ObjHtml": "li",
    "TipoAtributo": "id",
    "Atributo": "liL",
    "TipoAtributoTwo": " ",
    "AtributoTwo": " ",
    "localApply": "#MainMenu",
    "Conteudo": " "
},
{
    "ObjHtml": "a",
    "TipoAtributo": "href",
    "Atributo": "./Configuracoes.html",
    "TipoAtributoTwo": "title",
    "AtributoTwo": "Configuração",
    "localApply": "#liL",
    "Conteudo": "Configuração"
}]

export default VariavelToAdd;


// console.log(...VariavelToAdd)


