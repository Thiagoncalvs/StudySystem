// CONFIGURAÇÃO DE MENUS E SUBMENUS
const respostaAllMenus = fetch("../JSONs/datas.json").then(respostaData => {
    return respostaData.json();
}).then(jsonData => {
    var countMain = Object.keys(jsonData.objMenuMain).length
    var countLinux = Object.keys(jsonData.objMenuLinux).length
    var countHtml = Object.keys(jsonData.objMenuHtml).length
    var countCss = Object.keys(jsonData.objMenuCss).length
    var countJS = Object.keys(jsonData.objMenuJS).length
    var countSH = Object.keys(jsonData.objMenuSH).length
    var countCronoWeek = Object.keys(jsonData.objCronoWeek).length

//CRONOWEEK
for(var i = 0 ; i < countCronoWeek ; i++){
    var obj = jsonData.objCronoWeek[i];
    var Dia = "<div class='Day' id="+obj.IDdia+"><div id='NameDay'><span>"+obj.NomeDia+"</span></div></div>"
    document.getElementById('CronoWeekDay').innerHTML +=Dia;
}
//MAIN
    for(var i = 0 ; i < countMain ; i++){
        var obj = jsonData.objMenuMain[i];
        var itensMenu = "<li><a href="+obj.url+" "+obj.attribute+">"+obj.title+"</a></li>";

        document.getElementById('MainMenu').innerHTML +=itensMenu;
    }
//LINUX
    for(var i = 0 ; i < countLinux ; i++){
        var obj = jsonData.objMenuLinux[i];
        var itensMenu = "<li><a href="+obj.url+">"+obj.title+"</a></li>";

        document.getElementById('LinuxMenu').innerHTML +=itensMenu;
    }
//HTML
    for(var i = 0 ; i < countHtml ; i++){
        var obj = jsonData.objMenuHtml[i];
        var itensMenu = "<li><a href="+obj.url+">"+obj.title+"</a></li>";

        document.getElementById('HtmlMenu').innerHTML +=itensMenu;
    }
//CSS
    for(var i = 0 ; i < countCss ; i++){
        var obj = jsonData.objMenuCss[i];
        var itensMenu = "<li><a href="+obj.url+">"+obj.title+"</a></li>";

        document.getElementById('CssMenu').innerHTML +=itensMenu;
    }
//JS
    for(var i = 0 ; i < countJS ; i++){
        var obj = jsonData.objMenuJS[i];
        var itensMenu = "<li><a href="+obj.url+">"+obj.title+"</a></li>";

        document.getElementById('JSMenu').innerHTML +=itensMenu;
    }
//SH
    for(var i = 0 ; i < countSH ; i++){
        var obj = jsonData.objMenuSH[i];
        var itensMenu = "<li><a href="+obj.url+">"+obj.title+"</a></li>";

        document.getElementById('SHMenu').innerHTML +=itensMenu;
    }

    (function AnimacaoMenu(){
        document.querySelectorAll('.configGeralMenus').forEach(itemMove =>{
            var xmouseOne;
            itemMove.scrollLeft = 0
            itemMove.addEventListener('mousemove', (e) =>{
                xmouseOne = e.clientX
                itemMove.scrollLeft = (xmouseOne - 100)
            })
        })

        const MenuMainAnimacaoScroll = document.querySelector('.MainHeader .configGeralMenus')
        const Logotamanho = document.querySelector('.MainLogo');
        var xmouseTwo;
        MenuMainAnimacaoScroll.scrollLeft = 0
        MenuMainAnimacaoScroll.addEventListener('mousemove', (e) =>{
            xmouseTwo = e.clientX
            MenuMainAnimacaoScroll.scrollLeft = (xmouseTwo - (2 * Logotamanho.clientWidth))
        })
    })()

    function AnimacaoScrollSuave() {
          // ANIMAÇÃO SCROLL SUAVE MENU
    document.querySelectorAll('.MainHeader .configGeralNav a[href^="#"]').forEach(item => {
        item.addEventListener('click', scrollToIdOnClickMenuMain);
    })
    document.querySelectorAll('.AreaConteudo .configGeralMenus .configGeralNav a[href^="#"]').forEach(item => {
        item.addEventListener('click', scrollToIdOnClickSubMenus);
    })
    function getScrollTopByHref(element){
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }
    function scrollToIdOnClickMenuMain(event){
        event.preventDefault();
        const alturaMenu = document.getElementById('MainHeader').offsetHeight;
        const to = getScrollTopByHref(event.target) - alturaMenu;

        scrollToPosition(to); 
    }
    function scrollToIdOnClickSubMenus(event){
        event.preventDefault();
        const alturaMenu = document.getElementById('MainHeader').offsetHeight;
        const to = getScrollTopByHref(event.target) - (2.5 * alturaMenu);

        scrollToPosition(to); 
    }
    function scrollToPosition(to){
        // window.scroll({
        //     top: to,
        //     behavior: "smooth",
        // });
        smoothScrollTo(0, to);
    }
    /**
     * Smooth scroll animation
     * @param {int} endX: destination x coordinate
     * @param {int} endY: destination y coordinate
     * @param {int} duration: animation duration in ms
     */
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
    
        duration = typeof duration !== 'undefined' ? duration : 400;
    
        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
    
        const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };  
    }
    AnimacaoScrollSuave()


}).catch(erro => { console.log(erro); });
// CONFIGURAÇÃO DE MENUS E SUBMENUS
const CronoWeek = fetch("../JSONs/Conteudo.json").then(respostaData => {
    return respostaData.json();
}).then(jsonData => {
    var countDimanche = Object.keys(jsonData.objDimanche).length
    var countLundi = Object.keys(jsonData.objLundi).length
    var countMardi = Object.keys(jsonData.objMardi).length
    var countMercredi = Object.keys(jsonData.objMercredi).length
    var countJeudi = Object.keys(jsonData.objJeudi).length
    var countVandredi = Object.keys(jsonData.objVandredi).length
    var countSamedi = Object.keys(jsonData.objSamedi).length
    var now = new Date
    var DiaSemana = now.getDay()
    let Hora = now.getHours()
    let Minutos = now.getMinutes()


    //Domingo
    for(var i = 0 ; i < countDimanche ; i++){
        var obj = jsonData.objDimanche[i];
        var dia = obj.IDdia
        var itensDia = "<div id='TaskDay' class="+obj.NumTask+"><span>"+obj.Task+"</span></div>";
        document.getElementById('Sun').innerHTML +=itensDia;
    }
    //Lunes
    for(var i = 0 ; i < countLundi ; i++){
        var obj = jsonData.objLundi[i];
        var dia = obj.IDdia
        var itensDia = "<div id='TaskDay' class="+obj.NumTask+"><span>"+obj.Task+"</span></div>";
        document.getElementById('Mon').innerHTML +=itensDia;
    }
    //Martes
    for(var i = 0 ; i < countMardi ; i++){
        var obj = jsonData.objMardi[i];
        var dia = obj.IDdia
        var itensDia = "<div id='TaskDay' class="+obj.NumTask+"><span>"+obj.Task+"</span></div>";
        document.getElementById('Tues').innerHTML +=itensDia;
    }
    //Miercules
    for(var i = 0 ; i < countMercredi ; i++){
        var obj = jsonData.objMercredi[i];
        var dia = obj.IDdia
        var itensDia = "<div id='TaskDay' class="+obj.NumTask+"><span>"+obj.Task+"</span></div>";
        document.getElementById('Wedness').innerHTML +=itensDia;
    }
    //Jueves
    for(var i = 0 ; i < countJeudi ; i++){
        var obj = jsonData.objJeudi[i];
        var dia = obj.IDdia
        var itensDia = "<div id='TaskDay' class="+obj.NumTask+"><span>"+obj.Task+"</span></div>";
        document.getElementById('Thur').innerHTML +=itensDia;
    }
    //Viernes
    for(var i = 0 ; i < countVandredi ; i++){
        var obj = jsonData.objVandredi[i];
        var dia = obj.IDdia
        var itensDia = "<div id='TaskDay' class="+obj.NumTask+"><span>"+obj.Task+"</span></div>";
        document.getElementById('Fri').innerHTML +=itensDia;
    }
    //Sabado
    for(var i = 0 ; i < countSamedi ; i++){
        var obj = jsonData.objSamedi[i];
        var dia = obj.IDdia
        var itensDia = "<div id='TaskDay' class="+obj.NumTask+"><span>"+obj.Task+"</span></div>";
        document.getElementById('Satur').innerHTML +=itensDia;
    }
    
    // const fff = itemData
    switch(DiaSemana){
        case 0:
            document.getElementById('Sun').classList.add('today');
        break
        case 1:
            document.getElementById('Mon').classList.add('today');
        break
        case 2:
            document.getElementById('Tues').classList.add('today');
        break
        case 3:
            document.getElementById('Wedness').classList.add('today');
        break
        case 4:
            document.getElementById('Thur').classList.add('today');
        break
        case 5:
            document.getElementById('Fri').classList.add('today');
        break
        case 6:
            document.getElementById('Satur').classList.add('today');
        break
        }

        document.querySelector('.today #NameDay').addEventListener('click', ()=>{
            localStorage.clear()
            location.reload()
        })

        document.querySelectorAll('.today #TaskDay').forEach(itemTask =>{
            let NumTask = itemTask.classList[0]
            let DoneTask = itemTask.classList[1]
            let LocalDone = localStorage.getItem(NumTask)
            const Und = 'undefined'

            itemTask.addEventListener('click', ()=>{
                itemTask.classList.toggle('TaskDone');
                let NumTaskClick = itemTask.classList[0]
                let DoneTaskClick = itemTask.classList[2]
                localStorage.setItem(NumTaskClick, DoneTaskClick);
            })

            itemTask.classList += ' ' + localStorage.getItem(NumTask)
        })

}).catch(erro => { console.log(erro); });