//-----------------------------
$(function () {

    let puvodni = ''

    $("#mapa circle").on("mouseover", function () {
        puvodni = $(this).css('fill');
        $(this).css('fill', '#74ACDF');
    });

    $("#mapa circle").on('mouseout', function () {
        $(this).css('fill', puvodni);
    });

    $("#mapa path").on("mouseover", function () {
        puvodni = $(this).css('fill');
        $(this).css('fill', '#74ACDF');
    });

    $("#mapa path").on('mouseout', function () {
        $(this).css('fill', puvodni);
    });
//-----------mesta-----------
    function mestaBlock(mesta) {

        function naplnClanek(nazev) {
            let mesto = mesta.find(item => {
                return item.nazev === nazev
            });
console.log(mesto)

        
           $("#naplnit").empty()
            $("#naplnit").append(`

            <h4 class="card-title">${mesto.nazev}</h4>
            <p class="card-text">
                <div class="overflow-auto float-left" style="height: 80vh;">
                    <img src="${mesto.obrazek}" class="float-right mr-4 img-fluid w-50" alt="">
                    <div>
                    ${mesto.text}
                    </div>
                </div>
            </p>

            `)
           
        }


        $("#mapa circle").on("click", function () {
            let nazev = $(this).children().text();

            $("#mapa path").css('fill','#7c7c7c');
            $("#mapa circle").css('fill','#000000');
           
            $(this).css('fill', '#F6B40E')
            puvodni = '#F6B40E'
            naplnClanek(nazev);
        });

    }

    fetch('../json/mesta.json')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(json => {
            console.log(json);
            mestaBlock(json);
        })
        .catch(function (error) {
            console.error('Chyba: \n', error);
        });



//----------------- provincie----------

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
            $("#mapa circle").css('fill','#000000');
           
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