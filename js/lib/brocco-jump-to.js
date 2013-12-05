"use strict";

Brocco.jumpTo = (function() {
  var sourceMap = {};
  var defaultSource;
  var source = location.search.slice(1);
  var anchors = document.querySelectorAll("#jump_page > a.source");

  [].slice.call(anchors).forEach(function(a) {
    var path = a.textContent.trim();
    var basename = Brocco.path.basename(path);
    
    if (!defaultSource)
      defaultSource = basename;
    
    sourceMap[basename] = path;
    a.setAttribute("href", "?" + basename);
    a.textContent = basename;
});

  if (!(source in sourceMap))
    source = defaultSource;

  document.title = source;
  Brocco.document(sourceMap[source], function(html) {
    var temp = document.createElement("div");
    temp.innerHTML = html;
    var table = temp.querySelector("table");
    document.getElementById("container").appendChild(table);
    Brocco.scrollLocationHashIntoView();
});
})();
