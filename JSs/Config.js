// CONFIGURAÇÃO DE MENUS E SUBMENUS
const respostaAllMenus = fetch("./JSONs/EstruturaConfig.json").then(respostaData => {
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