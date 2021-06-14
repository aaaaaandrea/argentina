//-----------------------------
$(function () {

    let puvodni = ''


    $("#mapa path").on("mouseover", function () {
        puvodni = $(this).css('fill');
        $(this).css('fill', '#74ACDF');
    });

    $("#mapa path").on('mouseout', function () {
        /* dojde ke změně výplně na původní hodnotu */
        $(this).css('fill', puvodni);
    });


    function krajeBlock(kraje) {

        function naplnClanek(nazev) {
            let kraj = kraje.find(item => {
                return item.nazev === nazev
            });


           // $("#clanekJmeno").text(kraj.jmeno);
           $("#naplnit").empty()
            $("#naplnit").append(`

            <h4 class="card-title">${kraj.nazev}</h4>
            <p class="card-text">
                <div class="overflow-auto float-left" style="height: 80vh;">
                    <img src="${kraj.obrazek}" class="float-right mr-4 img-fluid w-50" alt="">
                    <div>
                    ${kraj.text}
                    </div>
                </div>
            </p>

            `)
           
        }


        $("#mapa path").on("click", function () {
            let nazev = $(this).children().text();

            $("#mapa path").css('fill','#7c7c7c');
           
            $(this).css('fill', '#F6B40E')
            puvodni = '#F6B40E'
            naplnClanek(nazev);
        });

    }

    fetch('../json/kraje.json')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(json => {
            console.log(json);
            krajeBlock(json);
        })
        .catch(function (error) {
            console.error('Chyba: \n', error);
        });

})