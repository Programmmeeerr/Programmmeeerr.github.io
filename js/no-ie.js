function isIe() {
    var userAgent = navigator.userAgent;
    if (document.documentMode == 11)
      return true;
    return userAgent.indexOf('MSIE ') > -1 || userAgent.indexOf('Trident/') > -1;
  }
  if (isIe() == true)
  {
    alert("このサイトは、Internet Explorerをサポートしていません。最新のブラウザーを使用してください。");
    history.back();
  }
  if (isIe() == true)
    window.close();
  /*
    try
    {
      document.getElementsByClassName("font_loading")[0].innerText = "このサイトは、Internet Explorerをサポートしていません。最新のブラウザーを使用してください。";
    }
    catch (Exception)
    {
      try
      {
        document.getElementsByClassName("font_loading")[0].textContent = "このサイトは、Internet Explorerをサポートしていません。最新のブラウザーを使用してください。";
      }
      catch (Exception)
      {
        alert("このサイトは、Internet Explorerをサポートしていません。最新のブラウザーを使用してください。");
      }
    }
  */
  if (isIe() == true)
    location.href="https://www.msn.com/";  