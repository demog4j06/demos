// 設定cookie - setCookie('自訂名稱','cookie值','天數');
function setCookie(cookieName, cookieValue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cookieName + '=' + cookieValue + '; ' + expires;
}
setCookie('ae_lang', window.navigator.language, 365);

// 讀取cookie - getCookie('自訂的cookie名稱');
function getCookie(cookieName) {
  var name = cookieName + '=';
  var cookieArray = document.cookie.split(';');
  for(var i = 0; i < cookieArray.length; i++) {
    var cookieData = cookieArray[i].trim();
    // if (cookieData.indexOf(name) == 0) return cookieData.substring(name.length,cookieData.length);
    if (cookieData.indexOf(name) == 0) return cookieData.substring(name.length);
  }
  return '';
}
var wlcmAELot = getCookie('ae_lang');

