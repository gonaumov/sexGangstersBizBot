var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "http://www.sexgangsters.com*",
  contentScriptFile: data.url("bussinessCollecter.js"),
  contentScriptWhen: "end"
});
