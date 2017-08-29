//--------REARRANGE-ELEMENTS-ON-RESIZE


if (matchMedia) {
  const mq = window.matchMedia("(max-width: 725px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    $('#image').insertBefore('#yellow');
    $('#image_2').insertBefore('#yellow_2');

    // $('#paragraph_2').insertBefore('#paragraph_1');

    } else {
      $('#yellow').insertBefore('#image');
      $('#yellow_2').insertBefore('#image_2');
  }
}
