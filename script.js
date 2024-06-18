$(document).ready(function () {
  $(function () {
    var flame = $('#flame');
    var txt = $('h1');

    flame.on({
      click: function () {
        flame.removeClass('burn').addClass('puff');
        $('.smoke').each(function () {
          $(this).addClass('puff-bubble');
        });
        $('#glow').remove();
        txt.hide().html('it will come true...once again happy birthday Mohammad Rivky Taufani, i love you from deep inside my heart❤︎').delay(750).fadeIn(300);
        $('#candle').animate(
          {
            opacity: '.5',
          },
          100
        );
      },
    });
  });
});
