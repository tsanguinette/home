function cbChanged(checkboxElem) {
  if (checkboxElem.checked) {
    $( "p" ).addClass( "none" );
  } else {
    $( "p" ).removeClass( "none" )
  }
}