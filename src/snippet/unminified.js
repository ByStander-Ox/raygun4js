(function(wind, doc, scriptTag, url, obj, noConflict, s, n, o) {
    wind['RaygunObject'] = obj;
    wind[obj] = wind[obj] || function() {
        (wind[obj].o = wind[obj].o || []).push(arguments)
    },
    s = doc.createElement(scriptTag),
    n = doc.getElementsByTagName(scriptTag)[0];
    s.async = 1;
    s.src = url;

    wind.__raygunNoConflict = !!noConflict;

    n.parentNode.insertBefore(s, n);

    o = wind.onerror;
    wind.onerror = function (msg, url, line, col, err) {
      if (o) {
        o(msg, url, line, col, err);
      }

      if (!err) {
        err = new Error(msg);
      }

      wind[obj].q = wind[obj].q || [];
      wind[obj].q.push({e: err});
    };

})(window, document, 'script', '//cdn.raygun.io/raygun4js/raygun.min.js', 'rg4js');
