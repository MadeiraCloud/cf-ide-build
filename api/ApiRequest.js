define('api/ApiRequestDefs',[], function() {

  /*
  == Following name of the paramter is autofilled. Thus the paramter is not required.
  == It also means that you cannot use a param name if the param is for sth. else.
     For example, the param's name cannot be username, if it's used to represent Instance's Id.
  
  ** Auto Fill List :
  username
  usercode
  session_id
   */
  var ApiRequestDefs;
  ApiRequestDefs = {};
  ApiRequestDefs.Defs = {
    'session_login': {
      url: '/session/',
      method: 'login',
      params: ['username', 'password', 'option']
    },
    'session_logout': {
      url: '/session/',
      method: 'logout',
      params: ['username', 'session_id']
    },
    'log_list': {
      url: '/log/',
      method: 'list',
      params: ['username', 'session_id', 'rule_id', 'log_type']
    },
    'log_violation': {
      url: '/log/',
      method: 'violation',
      params: ['username', 'session_id', 'profile_id']
    },
    'log_filter_log': {
      url: '/log/',
      method: 'filter_log',
      params: ['username', 'session_id', 'filter']
    },
    'log_stat_violation': {
      url: '/log/',
      method: 'stat_violation',
      params: ['username', 'session_id', 'filter']
    },
    'profile_create': {
      url: '/profile/',
      method: 'create',
      params: ['username', 'session_id', 'members', 'credential', 'scan_interval']
    },
    'profile_remove': {
      url: '/profile/',
      method: 'remove',
      params: ['username', 'session_id', 'profile_id']
    },
    'profile_update': {
      url: '/profile/',
      method: 'update',
      params: ['username', 'session_id', 'profile_id', 'scan_interval']
    },
    'profile_list': {
      url: '/profile/',
      method: 'list',
      params: ['username', 'session_id', 'profile_ids']
    },
    'profile_invite': {
      url: '/profile/',
      method: 'invite',
      params: ['username', 'session_id', 'profile_id', 'member_email', 'member_role']
    },
    'profile_check_invitation': {
      url: '/profile/',
      method: 'check_invitation',
      params: ['session_id', 'key']
    },
    'profile_cancel_invitation': {
      url: '/profile/',
      method: 'cancel_invitation',
      params: ['username', 'session_id', 'profile_id', 'member_id']
    },
    'profile_remove_members': {
      url: '/profile/',
      method: 'remove_members',
      params: ['username', 'session_id', 'profile_id', 'member_ids']
    },
    'profile_update_role': {
      url: '/profile/',
      method: 'update_role',
      params: ['username', 'session_id', 'profile_id', 'member_id', 'new_role']
    },
    'profile_update_credential': {
      url: '/profile/',
      method: 'update_credential',
      params: ['username', 'session_id', 'profile_id', 'credential']
    },
    'rule_create': {
      url: '/rule/',
      method: 'create',
      params: ['username', 'session_id', 'content']
    },
    'rule_remove': {
      url: '/rule/',
      method: 'remove',
      params: ['username', 'session_id', 'rule_id']
    },
    'rule_save': {
      url: '/rule/',
      method: 'save',
      params: ['username', 'session_id', 'rule_id', 'content']
    },
    'rule_list': {
      url: '/rule/',
      method: 'list',
      params: ['username', 'session_id', 'rule_ids']
    },
    'rule_version': {
      url: '/rule/',
      method: 'version',
      params: ['username', 'session_id', 'rule_id', 'rule_version']
    },
    'rule_enable': {
      url: '/rule/',
      method: 'enable',
      params: ['username', 'session_id', 'rule_ids', 'enabled']
    },
    'rule_verify': {
      url: '/rule/',
      method: 'verify',
      params: ['username', 'session_id', 'content']
    },
    'rule_filter': {
      url: '/rule/',
      method: 'filter',
      params: ['username', 'session_id', 'profile_id', 'content']
    },
    'scheduler_list': {
      url: '/scheduler/',
      method: 'list',
      params: ['username', 'session_id', 'profile_ids']
    },
    'account_register': {
      url: '/account/',
      method: 'register',
      params: ['username', 'password', 'email', 'attributes']
    },
    'account_update_account': {
      url: '/account/',
      method: 'update_account',
      params: ['username', 'session_id', 'attributes']
    },
    'account_reset_password': {
      url: '/account/',
      method: 'reset_password',
      params: ['username']
    },
    'account_update_password': {
      url: '/account/',
      method: 'update_password',
      params: ['key', 'new_pwd']
    },
    'account_check_repeat': {
      url: '/account/',
      method: 'check_repeat',
      params: ['username', 'email']
    },
    'account_check_validation': {
      url: '/account/',
      method: 'check_validation',
      params: ['key', 'operation_flag']
    },
    'aws_resource': {
      url: '/aws/',
      method: 'resource',
      params: ['username', 'session_id', 'profile_id', 'regions', 'resources']
    },
    'aws_resource_stat': {
      url: '/aws/',
      method: 'stat',
      params: ['username', 'session_id', 'profile_id']
    }
  };

  /*
   * === Error Code Defination ===
   * 1. Any network errors will be negative. For example, when server returns 404, the `error` in the promise will be -404.
   */
  ApiRequestDefs.Errors = {
    InvalidRpcReturn: -1,
    XhrFailure: -2,
    InvalidMethodCall: -3,
    InvalidParameter: -4,
    MissingDataInServer: -5,
    OperationFailure: -6,
    Network404: -404,
    Network500: -500,
    InvalidSession: 120
  };
  ApiRequestDefs.GlobalHandlers = {};
  ApiRequestDefs.GlobalHandlers[ApiRequestDefs.Errors.InvalidSession] = function() {
    var container;
    container = App.__container__;
    container.lookup("route:" + container.lookup("controller:application").get("currentRouteName")).transitionTo("invalidSession");
  };
  ApiRequestDefs.AutoFill = function(paramter_name) {
    switch (paramter_name) {
      case "username":
        return App.user.get("usercode");
      case "session_id":
        return App.session.get("id");
      case "content":
        return "name\n\n    \"rule1\"\n\ndescription\n\n    \"db instance shouldn't have publicIp\"\n\nparameter\n\n    _role = \"database\"\n    _region = [\"us-east\", \"ap-south\"]\n\nif\n\nregion\n.vpc\n.instance(\n    tags[\"name\"] like \"^web.*\",\n    tags[\"role\"] = \"db\",\n    publicIpAddress != \"\",\n    tags[\"key\"] in _role,\n    tags[\"region\"] in _region,\n    AvailabilityZones not has [\"us-east-1a\",\"us-east-1b\"]\n)\n.subnet\n.rtb.hasNoRoute(instanceId != \"\")\n.elb(\n    ListenerDescriptions.member not has [{\n        \"LoadBalancerPort\": 80,\n        \"Protocol\": \"HTTP\"\n    }]\n)\n.eip(networkInterfaceId = \"\")\n.notExist().eip(networkInterfaceId = \"\")\n\ndo\n    email()";
    }
    return null;
  };
  return ApiRequestDefs;
});

define('api/ApiRequest',["api/ApiRequestDefs"], function(ApiDefination) {
  var AjaxErrorHandler, AjaxSuccessHandler, ApiRequest, CreateError;
  CreateError = function(errorNum, errorMsg, params) {
    return {
      error: errorNum,
      msg: errorMsg || "",
      result: params || void 0
    };
  };

  /*
   * === ApiRequest ===
   *
   * Paramters :
   *   apiName       : (String) The name of the api, see ApiRequestDefs
   *   apiParameters : An object to be send with the api request.
   *         If an api has its parameters map, the `apiParameters` will be converted from OBJECT to ARRAY
   *         If an api has no param map, the apiParameters is considered as the first and only one paramter
   *         to be send with the api.
   */
  AjaxSuccessHandler = function(data, textStatus, jqXHR) {
    var handler;
    if (!data || !data.result || data.result.length !== 2) {
      throw CreateError(ApiDefination.Errors.InvalidRpcReturn, "Invalid JsonRpc Return Data");
    }
    if (data.result[0] !== 0) {
      handler = ApiDefination.GlobalHandlers[data.result[0]];
      handler && handler(data);
      throw CreateError(data.result[0], "Service Error", data.result[1]);
    }
    return data.result[1];
  };
  AjaxErrorHandler = function(jqXHR, textStatus, error) {
    if (!error && jqXHR.status !== 200) {
      throw CreateError(-jqXHR.status, "Network Error");
    }
    throw CreateError(ApiErrors.XhrFailure, textStatus, error);
  };

  /*
   ApiRequest Defination
   */
  ApiRequest = function(apiName, apiParameters) {
    var ApiDef;
    ApiDef = ApiDefination.Defs[apiName];
    apiParameters = apiParameters || EmptyObject;
    if (!ApiDef) {
      console.error("Cannot find defination of the api:", apiName);
      return;
    }
    return Q($.ajax({
      url: MC_API_HOST + ApiDef.url,
      dataType: "json",
      type: "POST",
      jsonp: false,
      data: JSON.stringify({
        jsonrpc: '2.0',
        id: "1",
        method: ApiDef.method || "",
        params: ApiDef.params.map(function(i) {
          if (apiParameters.hasOwnProperty(i)) {
            return apiParameters[i];
          } else {
            return ApiDefination.AutoFill(i);
          }
        })
      })
    })).then(AjaxSuccessHandler, AjaxErrorHandler);
  };
  ApiRequest.Errors = ApiDefination.Erros;
  ApiRequest.Defs = ApiDefination.Defs;
  ApiRequest.AutoFill = ApiDefination.AutoFill;
  return ApiRequest;
});

