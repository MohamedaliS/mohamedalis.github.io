(function (window, document, measurementId) {
  if (!measurementId || measurementId === "G-XXXXXXXXXX" || window.__ga4Loaded) {
    return;
  }

  window.__ga4Loaded = true;
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = window.gtag || gtag;

  var script = document.createElement("script");
  script.async = true;
  script.src =
    "https://www.googletagmanager.com/gtag/js?id=" +
    encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_path: window.location.pathname + window.location.search
  });
})(window, document, "G-XXXXXXXXXX");
