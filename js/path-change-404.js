var path = location.href;
if (path.slice(-1) == '/')
  path = path.replace(/[\/]+$/, "");
var path2 = window.location.pathname.split("/");
if (path2[path2.length-1] == "index")
  path = path.replace(/index$/, "");
location.href = path;