  $(function () {

    $("#r").on("mouseenter", function () {
      $(this).toggle();
    })

    $("h3").on("click", function () {
      $(this).next().toggle();
    });

    $("#article1").hide();
    $(".skrytKartu").on("click", function(){
      $(this).children().children(".article-text").toggle();
  });
  })

  //grafy

  //setup
  const data = {
    labels: [
      'ostatní',
      'Judaismus',
      'Křesťanství'
    ],
    datasets: [{
      label: 'Náboženství',
      data: [5, 1, 94],
      backgroundColor: [
        'rgb(3, 139, 32)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  //config

  const config = {
    type: 'doughnut',
    data: data,
  };


  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  //-------------------------------------