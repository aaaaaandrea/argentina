//jquery
$(function () {

    $(".stahnout").on("click", function () {
        $(this).next().toggle();
    });



    //-----------  slavne osobnosti -----------
    function osobnostiBlock(osobnosti) {

        //vytvori karty v tabulce a doplni tam informace
        osobnosti.forEach((osobnost, i) => {
            if (i % 2 == 0) {
                $("#napln1").append(`<td>
        
            <div class="col px-4">
                <div class="card odkrytClanek">
                    <img class="card-img-top p-4" src="${osobnost.obrazek}" alt="">
                    <div class="card-body">
                        <h4 class="card-title">${osobnost.jmeno}</h4>
                        <p class="card-text article-text" id="article1">${osobnost.popisek}
                        </p>
                    </div>
              

            </div>
    </td>`);
            } else if (i % 2 == 1) {
                $("#napln2").append(`<td>
         
             <div class="col px-4">
                 <div class="card odkrytClanek">
                     <img class="card-img-top p-4" src="${osobnost.obrazek}" alt="">
                     <div class="card-body">
                         <h4 class="card-title">${osobnost.jmeno}</h4>
                         <p class="card-text article-text" id="article1">${osobnost.popisek}
                         </p>
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
            $(".odkrytClanek").removeClass("bg-info");
            $(this).addClass("bg-info");
            let nazev = $(this).children(".card-body").children(".card-title").text();
            naplnClanek(nazev);
        });
    }

    fetch('../json/osobnosti.json')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(json => {
            console.log(json);
            osobnostiBlock(json);
        })
        .catch(function (error) {
            console.error('Chyba: \n', error);
        });
})

//--------------------------------------