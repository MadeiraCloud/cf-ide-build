(function() {
  var ApiRequest, clickLoginButton, doLogin, gloablInputCheck, hosts, location, loginAfterRegister, pathname, resetToken, resets, showError, toggleActionBtn;
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
  if (location.hostname.toLowerCase().indexOf("cloudfielder.com") >= 0 && location.protocol === "http:") {
    window.location = location.href.replace("http:", "https:");
    return;
  }
  if ($.cookie('usercode') && $.cookie('session')) {
    window.location.href = "/";
  }

  /*
   flip - v1.0.0 - 2015-04-04
  * https://github.com/nnattawat/flip
  * Copyright (c) 2015 Nattawat Nonsung; Licensed MIT
   */
  
  !function(a){var b=function(a){a.data("fliped",!0);var b="rotate"+a.data("axis");a.find(".front").css({transform:b+(a.data("reverse")?"(-180deg)":"(180deg)")}),a.find(".back").css({transform:b+"(0deg)"})},c=function(a){a.data("fliped",!1);var b="rotate"+a.data("axis");a.find(".front").css({transform:b+"(0deg)"}),a.find(".back").css({transform:b+(a.data("reverse")?"(180deg)":"(-180deg)")})};a.fn.flip=function(d){return this.each(function(){var e=a(this);if(void 0!==d&&"boolean"==typeof d)d?b(e):c(e);else{var f=a.extend({axis:"y",reverse:!1,trigger:"click",speed:500},d);if(e.data("reverse",f.reverse),e.data("axis",f.axis),"x"==f.axis.toLowerCase())var g=2*e.outerHeight(),h="rotatex";else var g=2*e.outerWidth(),h="rotatey";e.find(".back").css({transform:h+"("+(f.reverse?"180deg":"-180deg")+")"}),e.css({perspective:g,position:"relative"});var i=f.speed/1e3||.5;if(e.find(".front, .back").outerWidth(e.width()).css({"transform-style":"preserve-3d",transition:"all "+i+"s ease-out","backface-visibility":"hidden"}),"click"==f.trigger.toLowerCase())e.find('button, a, input[type="submit"]').click(function(a){a.stopPropagation()}),e.click(function(){e.data("fliped")?c(e):b(e)});else if("hover"==f.trigger.toLowerCase()){var j=function(){e.unbind("mouseleave",k),b(e),setTimeout(function(){e.bind("mouseleave",k),e.is(":hover")||c(e)},f.speed+150)},k=function(){c(e)};e.mouseenter(j),e.mouseleave(k)}}}),this}}(jQuery);
  ;
  $(".input-wrap").append("<div class='error'></div>");
  $(".form").on("keypress", "input", function(evt) {
    var $next;
    if (evt.keyCode !== 13) {
      return;
    }
    $next = $(evt.currentTarget).parents(".input-wrap").next();
    if ($next.length) {
      $next.find("input").focus();
    } else {
      $(evt.delegateTarget).find("button.action").click();
    }
    return false;
  });
  ApiRequest = function(url, method, params) {
    return $.ajax({
      url: MC_API_HOST + url,
      dataType: "json",
      type: "POST",
      jsonp: false,
      data: JSON.stringify({
        jsonrpc: '2.0',
        id: "1",
        method: method || "",
        params: params
      })
    }).then(function(data, textStatus) {
      var e, error, result;
      try {
        data = data.result;
        error = data[0];
        result = data[1];
        if (error !== 0) {
          e = new Error(result);
          e.error = error;
          throw e;
        }
        return result;
      } catch (_error) {
        e = _error;
        $("button.action").each(function(idx, el) {
          return toggleActionBtn(el, false);
        });
        return $.Deferred().reject(e).promise();
      }
    }, function(data, textStatus) {
      $(".network-error").show();
      $("button.action").each(function(idx, el) {
        return toggleActionBtn(el, false);
      });
      return $.Deferred().reject().promise();
    });
  };
  doLogin = function(username, password) {
    return ApiRequest("/session/", "login", [username, password]).then(function(res) {
      var COOKIE_OPTION;
      COOKIE_OPTION = {
        expires: 30,
        path: '/'
      };
      $.cookie("usercode", res.username, COOKIE_OPTION);
      $.cookie("session", res.session_id, COOKIE_OPTION);
    });
  };
  gloablInputCheck = function(selector) {
    var $ipt;
    $ipt = $(selector).find("input");
    $ipt.filter(function(a, b) {
      return b.value;
    }).removeClass("ipt-error").siblings(".error").empty();
    return $ipt.filter(function(a, b) {
      return !b.value;
    }).addClass("ipt-error").siblings(".error").html("You can't leave this empty.").length === 0;
  };
  toggleActionBtn = function(selector, loading) {
    var $btn;
    $btn = $(selector);
    if (loading) {
      $btn.attr("disabled", "disabled").html($btn.attr("data-loading"));
    } else {
      $btn.removeAttr("disabled").html($btn.attr("data-normal"));
    }
  };
  showError = function(selector, error) {
    if (error) {
      $(selector).addClass("ipt-error").siblings(".error").html(error);
      return true;
    } else {
      $(selector).removeClass("ipt-error").siblings(".error").html();
      return false;
    }
  };
  pathname = window.location.pathname;
  if (pathname.indexOf("/login") === 0) {
    $("body").addClass("bd-login");
  } else if (pathname.indexOf("/register") === 0) {
    $("body").addClass("bd-signup");
    $(".signup-card").flip({
      trigger: "manual"
    });
  } else if (pathname.indexOf("/reset") === 0) {
    $("body").addClass("bd-reset");
    resets = pathname.replace(/^\/reset/, "reset").replace(/\/$/, "").split("/");
    $(".reset-card").flip({
      trigger: "manual"
    });
    if (resets.length === 2) {
      $("body").addClass("bd-reset-token");
      resetToken = resets[1];
      ApiRequest("/account/", "check_validation", [resetToken, "reset"]).then(function(res) {
        return $("body").addClass("bd-reset-checked");
      }, function(error) {
        if (!error) {
          return $("body").addClass("bd-reset-checked");
        } else if (error.error === 321 || error.error === 320) {
          return $("body").addClass("bd-reset-invalid");
        }
      });
    }
  }
  $("#actReset").click(function() {
    var $email;
    $(".network-error").hide();
    if (!gloablInputCheck(".reset-card-email")) {
      return;
    }
    $email = $("#iptReset");
    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($email.val())) {
      showError($email);
    } else {
      showError($email, "Please provide a valid email.");
      return;
    }
    toggleActionBtn("#actReset", true);
    return ApiRequest("/account/", "reset_password", [$email.val()]).then(function(result) {
      return $(".reset-card-email").flip(true);
    }, function(error) {
      if (!error) {
        return;
      }
      showError("#iptReset", "Failed to reset your password, please make sure your email address is correct.");
    });
  });
  $("#actResetPass").click(function() {
    var $pass, $pass2, hasError;
    $("#network-error").hide();
    if (!gloablInputCheck(".reset-card-password")) {
      return;
    }
    $pass = $("#iptResetPass");
    if ($pass.val().length < 6) {
      hasError = showError($pass, "Password must contain 6 characters at least.");
    } else {
      showError($pass, "");
    }
    $pass2 = $("#iptResetPass2");
    if ($pass2.val() !== $pass.val()) {
      hasError = showError($pass2, "These passwords don't match.");
    } else {
      showError($pass2, "");
    }
    if (hasError) {
      return;
    }
    toggleActionBtn("#actResetPass", true);
    return ApiRequest("/account/", "update_password", [resetToken, $pass.val()]).then(function(result) {
      return $(".reset-card-password").flip(true);
    }, function(error) {
      if (error.error === 321 || error.error === 320) {
        $("body").addClass("bd-reset-invalid");
        $("body").removeClass("bd-reset-checked");
      }
    });
  });
  $("#actLogin").click(function() {
    $(".network-error").hide();
    if (!gloablInputCheck(".form-wrap.login")) {
      return;
    }
    toggleActionBtn("#actLogin", true);
    return doLogin($("#iptLoginName").val(), $("#iptLoginPass").val()).then(function() {
      return window.location.href = "/";
    }, function(error) {
      if (!error) {
        return;
      }
      showError("#iptLoginPass", "Incorrect username or password.");
    });
  });
  loginAfterRegister = false;
  clickLoginButton = false;
  $("#actLaunch").on("click", function() {
    if (loginAfterRegister) {
      window.location.href = "/";
    } else {
      clickLoginButton = true;
      $(evt.currentTarget).html("Just a second...");
    }
  });
  return $("#actRegister").click(function() {
    var $email, $pass, $pass2, hasError;
    $(".network-error").hide();
    if (!gloablInputCheck(".form-wrap.signup")) {
      return;
    }
    hasError = false;
    $email = $("#iptRegisterEmail");
    if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($email.val())) {
      showError($email);
    } else {
      hasError = showError($email, "Please provide a valid email.");
    }
    $pass = $("#iptRegisterPass");
    if ($pass.val().length < 6) {
      hasError = showError($pass, "Password must contain 6 characters at least.");
    } else {
      showError($pass, "");
    }
    $pass2 = $("#iptRegisterPass2");
    if ($pass2.val() !== $pass.val()) {
      hasError = showError($pass2, "These passwords don't match.");
    } else {
      showError($pass2, "");
    }
    if (hasError) {
      return;
    }
    toggleActionBtn("#actRegister", true);
    return ApiRequest("/account/", "register", [
      $("#iptRegisterName").val(), $("#iptRegisterPass").val(), $("#iptRegisterEmail").val(), {
        "first_name": $("#iptRegisterFN").val(),
        "last_name": $("#iptRegisterLN").val(),
        "timezone": 8
      }
    ]).then(function(res) {
      $(".signup-card").flip(true);
      doLogin($("#iptRegisterName").val(), $("#iptRegisterPass").val()).then(function() {
        if (clickLoginButton) {
          window.location.href = "/";
        } else {
          loginAfterRegister = true;
        }
      });
    }, function(error) {
      if (!error) {
        return;
      }
      if (error.error === 118) {
        showError($("#iptRegisterName"), "The username has already been registered.");
      } else if (error.error === 117) {
        showError($("#iptRegisterEmail"), "The email has already been registered.");
      }
      return console.log(error);
    });
  });
})();
