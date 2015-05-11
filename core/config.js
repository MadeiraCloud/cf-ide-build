(function() {
  var getCookie, hosts, location, p, s, scripts, version, _i, _len;
  if (!window) {
    return;
  }
  location = window.location;
  if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.exec(location.hostname)) {
    console.error("CloudFielder can not be browsed with IP address.");
    return;
  }
  hosts = location.hostname.split(".");
  if (hosts.length >= 3) {
    window.MC_DOMAIN = hosts[hosts.length - 2] + "." + hosts[hosts.length - 1];
  } else {
    window.MC_DOMAIN = location.hostname;
  }
  window.MC_API_HOST = location.protocol + "//api." + window.MC_DOMAIN;
  window.language = window.version = "";
  if (location.hostname.toLowerCase().indexOf("cloudfielder.io") >= 0 && location.protocol === "http:") {
    window.location = location.href.replace("http:", "https:");
    return;
  }
  getCookie = function(sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  };

  /* Currently Disable Login */
  if (!(getCookie('usercode') && getCookie('session'))) {
    p = window.location.pathname;
    if (p === "/") {
      p = window.location.hash.replace("#", "/");
    }
    if (p && p !== "/login") {
      window.location.href = "/login?ref=" + p;
    } else {
      window.location.href = "/login";
    }
    return;
  }
  scripts = document.getElementsByTagName("script");
  for (_i = 0, _len = scripts.length; _i < _len; _i++) {
    s = scripts[_i];
    version = s.getAttribute("data-main");
    if (version) {
      window.version = version.split("?")[1];
      break;
    }
  }
  if (window.version === '#{version}') {
    window.version = "dev";
  }
  window.language = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + "lang\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || (navigator.language && navigator.language.toLowerCase() === "zh-cn" ? "zh-cn" : "en-us");
  return null;
})();

require.config({
  baseUrl: '/',
  waitSeconds: 10,
  locale: language,
  urlArgs: "v=" + version,
  paths: {
    "jquery": "lib/jquery"
  },
  shim: {
    'lib/ember': {
      deps: ['jquery']
    },
    'lib/ember-data': {
      deps: ['lib/ember']
    },
    'lib/jquery-cookie': {
      deps: ["jquery"]
    }
  },

  /* env:prod */
  bundles: {
    'lib/jquery': ["jquery"],
    'lib/vender': ["lib/q", "lib/base64", "lib/underscore", "lib/ember", "lib/ember-data"],
    'lib/ace': ["lib/ace/editor", "lib/ace/editor-grammar-checker"],
    'core/bundle': ["core/Application"],
    "core/debug": ["core/Debugger"]
  },
  bundleExcludes: {}

  /* env:prod:end */
});

(function() {
  var requirejsErrorHandler;
  if (!window.define) {
    return;
  }

  /*
  define "/nls/lang.js", [], { 'en-us' : true, 'zh-cn' : true }
   */
  requirejsErrorHandler = function(err) {
    err = err || {
      requireType: "timeout"
    };
    if (err.requireType === "timeout") {
      requirejs.onError = function() {};
      console.error("[RequireJS timeout] Reloading, error modules :", err.requireModules);
      window.location.reload();
    } else {
      console.error("[RequireJS Error]", err, err.stack);
    }
  };
  requirejs.onError = requirejsErrorHandler;
  require(["jquery", "lib/q", "lib/base64", "lib/jquery-cookie", "lib/underscore", "lib/ember", "lib/ember-data"], function(jquery, Q, Base64) {
    window.Q = Q;
    window.Base64 = Base64;
    return require(["core/Application", "core/Debugger"], function(App) {
      return App.advanceReadiness();
    });
  });
})();
