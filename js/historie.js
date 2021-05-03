//json
const osobnosti = [{
        "jmeno": "José de San Martín",
        "narozeni": "25. února 1778",
        "umrti": "17. srpna 1850",
        "popisek": "Vůdců boje za nezávislost",
        "obrazek": "img/osobnosti/José de San Martín.jpg",
        "text": "Byl jedním z nejvýznamnějších latinskoamerických vůdců boje za nezávislost kontinentu na Španělsku. V Argentině je považován za národního hrdinu a v Peru za osvoboditele země."
    }, {
        "jmeno": "Papež František",
        "narozeni": "17. prosince 1936",
        "umrti": "přítomnost",
        "popisek": "266. papež katolické církve",
        "obrazek": "img/osobnosti/Pope_Francis.jpg",
        "text": "František, vlastním jménem Jorge Mario Bergoglio, je 266. papež katolické církve, římský biskup a suverén státu Vatikán. Byl zvolen dne 13. března 2013. Stal se prvním papežem pocházejícím z amerického kontinentu a prvním z Tovaryšstva Ježíšova (jezuitského řádu). Jde rovněž o prvního mimoevropského papeže od 8. století, kdy římskokatolickou církev vedl sv. Řehoř III. pocházející ze Sýrie."
    },
    {
        "jmeno": "Juan Perón",
        "narozeni": "8. října 1895",
        "umrti": "1. července 1974",
        "popisek": "Politik a prezident",
        "obrazek": "img/osobnosti/Juan_Perón.jpg",
        "text": "Juan Domingo Perón byl argentinský politik a prezident, po němž je pojmenovaný politický směr v Argentině."
    }, {
        "jmeno": "Eva Perón",
        "narozeni": "7. května 1919",
        "umrti": " 26. července 1952",
        "popisek": "První dáma Argentiny",
        "obrazek": "img/osobnosti/eva-peron.jpg",
        "text": "Eva María Duarte de Perón, známá také jako Evita, byla druhá manželka argentinského prezidenta Juana Dominga Peróna a první dáma Argentiny od roku 1946 až do své smrti v roce 1952."
    },
    {
        "jmeno": "Lionel Messi",
        "narozeni": "24. června 1987",
        "umrti": "přítomnost",
        "popisek": "Profesionální fotbalista",
        "obrazek": "img/osobnosti/Lionel_Messi.jpg",
        "text": "Lionel Andrés Messi Cuccitini e argentinský fotbalista, který hraje za španělský (katalánský) klub FC Barcelona a nosí dres s číslem 10. Je šestinásobným držitelem ceny Zlatý míč (případně Zlatý míč FIFA) a šestinásobným držitelem Zlaté kopačky. Rekordně sedmkrát získal cenu Trofeo Pichichi pro nejlepšího střelce španělské ligy. Ve dresu Barcelony získal 34 klubových trofejí včetně 10 titulů španělského ligového mistra a čtyř triumfů v Lize mistrů UEFA. V profesionální kariéře odehrál více než 900 zápasů."
    }, {
        "jmeno": "Che Guevara",
        "narozeni": "14. června 1928",
        "umrti": "9. října 1967",
        "popisek": "Vůdce kubánských gueril",
        "obrazek": "img/osobnosti/Che Guevara.jpg",
        "text": "Ernesto Guevaras, běžně přezdívaný Che Guevara nebo el Che, byl marxistický revolucionář a vůdce kubánských gueril."
    }, {
        "jmeno": "Carlos Gardel",
        "narozeni": "11. prosince 1887/1890",
        "umrti": "24. června 1935",
        "popisek": "Zpěvák",
        "obrazek": "img/osobnosti/Carlos gardel.jpg",
        "text": "Carlos Gardel je možná nejvýznamnější postavou v historii tanga. Ačkoliv není jasné, narodil-li se v Uruguayi nebo Francii, tak od útlého dětství vyrůstal v Argentině, a později, v roce 1923, získal také argentinské občanství."
    }, {
        "jmeno": "Diego Maradona",
        "narozeni": "30. října 1960",
        "umrti": "25. listopadu 2020",
        "popisek": "Fotbalista a trenér",
        "obrazek": "img/osobnosti/Diego maradona.jpg",
        "text": "Diego Armando Maradona byl argentinský fotbalista a trenér argentinské fotbalové reprezentace. Všeobecně je považován za jednoho z nejlepších a nejtalentovanějších světových hráčů všech dob. S národním týmem Argentiny zvítězil ve finále Mistrovství světa hráčů do 20 let 1979 v Japonsku, mistrovství světa 1986 v Mexiku a byl druhý na mistrovství světa 1990 v Itálii. Pelé ho roku 2004 zařadil mezi 125 nejlepších žijících fotbalistů."
    }

];

//jquery
$(function () {


    //-----------  slavne osobnosti -----------
    //vytvori karty v tabulce a dopni tam informace
    osobnosti.forEach((osobnost, i) => {
        if (i % 2 == 0) {
            $("#napln1").append(`<td>
        <div class="row">
            <div class="col px-4">
                <div class="card odkrytClanek">
                    <img class="card-img-top p-4" src="${osobnost.obrazek}" alt="">
                    <div class="card-body">
                        <h4 class="card-title">${osobnost.jmeno}</h4>
                        <p class="card-text article-text" id="article1">${osobnost.popisek}
                        </p>
                    </div>
                </div>

            </div>
    </td>`);
        } else if (i % 2 == 1) {
            $("#napln2").append(`<td>
         <div class="row">
             <div class="col px-4">
                 <div class="card odkrytClanek">
                     <img class="card-img-top p-4" src="${osobnost.obrazek}" alt="">
                     <div class="card-body">
                         <h4 class="card-title">${osobnost.jmeno}</h4>
                         <p class="card-text article-text" id="article1">${osobnost.popisek}
                         </p>
                     </div>
                 </div>

             </div>
     </td>`);
        }
    });

    function naplnClanek(nazev) {
        let osobnost = osobnosti.find(item => {
            return item.jmeno === nazev
        });

        $("#clanekJmeno").text(osobnost.jmeno);
        $("#clanekNarozeni").text(osobnost.narozeni);
        $("#clanekUmrti").text(osobnost.umrti);
        $("#clanekText").text(osobnost.text);
    }

    naplnClanek(osobnosti[0].jmeno);

    $(".odkrytClanek").on("click", function () {
        let nazev = $(this).children(".card-body").children(".card-title").text();
        naplnClanek(nazev);
    });
})

//--------------------------------------