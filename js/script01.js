  $(function () {

      $("#r").on("mouseenter", function () {
        $(this).toggle();
      })

      $("h3").on("click", function () {
          $(this).next().toggle();
      });

  })