/*!
 * Client Side Validations - v4.2.3 (https://github.com/DavyJonesLocker/client_side_validations)
 * Copyright (c) 2016 Geremia Taglialatela, Brian Cardarella
 * Licensed under MIT (http://opensource.org/licenses/mit-license.php)
 */
(function(){var i,e,t,n,a=[].indexOf||function(i){for(var e=0,t=this.length;t>e;e++)if(e in this&&this[e]===i)return e;return-1};i=jQuery,i.fn.disableClientSideValidations=function(){return ClientSideValidations.disable(this),this},i.fn.enableClientSideValidations=function(){return this.filter(ClientSideValidations.selectors.forms).each(function(){return ClientSideValidations.enablers.form(this)}),this.filter(ClientSideValidations.selectors.inputs).each(function(){return ClientSideValidations.enablers.input(this)}),this},i.fn.resetClientSideValidations=function(){return this.filter(ClientSideValidations.selectors.forms).each(function(){return ClientSideValidations.reset(this)}),this},i.fn.validate=function(){return this.filter(ClientSideValidations.selectors.forms).each(function(){return i(this).enableClientSideValidations()}),this},i.fn.isValid=function(a){var r;return r=i(this[0]),r.is("form")?t(r,a):e(r,n(this[0].name,a))},n=function(i,e){var t,n,a;if(t=i.match(/\[(\w+_attributes)\].*\[(\w+)\]$/))for(a in e)n=e[a],a.match("\\["+t[1]+"\\].*\\[\\]\\["+t[2]+"\\]$")&&(i=i.replace(/\[[\da-z_]+\]\[(\w+)\]$/g,"[][$1]"));return e[i]||{}},t=function(e,t){var n;return e.trigger("form:validate:before.ClientSideValidations"),n=!0,e.find(ClientSideValidations.selectors.validate_inputs).each(function(){return i(this).isValid(t)||(n=!1),!0}),n?e.trigger("form:validate:pass.ClientSideValidations"):e.trigger("form:validate:fail.ClientSideValidations"),e.trigger("form:validate:after.ClientSideValidations"),n},e=function(e,t){var n,a,r,l,s,o,d;return e.trigger("element:validate:before.ClientSideValidations"),o=function(){return e.trigger("element:validate:pass.ClientSideValidations").data("valid",null)},l=function(i){return e.trigger("element:validate:fail.ClientSideValidations",i).data("valid",!1),!1},n=function(){return e.trigger("element:validate:after.ClientSideValidations").data("valid")!==!1},r=function(i){var n,a,r,s,o,d,u,f;u=!0;for(r in i)if(n=i[r],t[r]){for(d=t[r],a=0,s=d.length;s>a;a++)if(f=d[a],o=n.call(i,e,f)){u=l(o);break}if(!u)break}return u},e.attr("name").search(/\[([^\]]*?)\]$/)>=0&&(a=e.attr("name").replace(/\[([^\]]*?)\]$/,"[_destroy]"),"1"===i("input[name='"+a+"']").val())?(o(),n()):e.data("changed")===!1?n():(e.data("changed",!1),s=ClientSideValidations.validators.local,d=ClientSideValidations.validators.remote,r(s)&&r(d)&&o(),n())},void 0===window.ClientSideValidations&&(window.ClientSideValidations={}),void 0===window.ClientSideValidations.forms&&(window.ClientSideValidations.forms={}),window.ClientSideValidations.selectors={inputs:':input:not(button):not([type="submit"])[name]:visible:enabled',validate_inputs:":input:enabled:visible[data-validate]",forms:"form[data-validate]"},window.ClientSideValidations.reset=function(e){var t,n;t=i(e),ClientSideValidations.disable(e);for(n in e.ClientSideValidations.settings.validators)e.ClientSideValidations.removeError(t.find("[name='"+n+"']"));return ClientSideValidations.enablers.form(e)},window.ClientSideValidations.disable=function(e){var t;return t=i(e),t.off(".ClientSideValidations"),t.is("form")?ClientSideValidations.disable(t.find(":input")):(t.removeData("valid"),t.removeData("changed"),t.filter(":input").each(function(){return i(this).removeAttr("data-validate")}))},window.ClientSideValidations.enablers={form:function(e){var t,n,a,r;t=i(e),e.ClientSideValidations={settings:window.ClientSideValidations.forms[t.attr("id")],addError:function(i,t){return ClientSideValidations.formBuilders[e.ClientSideValidations.settings.type].add(i,e.ClientSideValidations.settings,t)},removeError:function(i){return ClientSideValidations.formBuilders[e.ClientSideValidations.settings.type].remove(i,e.ClientSideValidations.settings)}},r={"submit.ClientSideValidations":function(i){return t.isValid(e.ClientSideValidations.settings.validators)?void 0:(i.preventDefault(),i.stopImmediatePropagation())},"ajax:beforeSend.ClientSideValidations":function(i){return i.target===this?t.isValid(e.ClientSideValidations.settings.validators):void 0},"form:validate:after.ClientSideValidations":function(i){return ClientSideValidations.callbacks.form.after(t,i)},"form:validate:before.ClientSideValidations":function(i){return ClientSideValidations.callbacks.form.before(t,i)},"form:validate:fail.ClientSideValidations":function(i){return ClientSideValidations.callbacks.form.fail(t,i)},"form:validate:pass.ClientSideValidations":function(i){return ClientSideValidations.callbacks.form.pass(t,i)}};for(a in r)n=r[a],t.on(a,n);return t.find(ClientSideValidations.selectors.inputs).each(function(){return ClientSideValidations.enablers.input(this)})},input:function(e){var t,n,a,r,l,s;n=i(e),l=e.form,t=i(l),s={"focusout.ClientSideValidations":function(){return i(this).isValid(l.ClientSideValidations.settings.validators)},"change.ClientSideValidations":function(){return i(this).data("changed",!0)},"element:validate:after.ClientSideValidations":function(e){return ClientSideValidations.callbacks.element.after(i(this),e)},"element:validate:before.ClientSideValidations":function(e){return ClientSideValidations.callbacks.element.before(i(this),e)},"element:validate:fail.ClientSideValidations":function(e,t){var n;return n=i(this),ClientSideValidations.callbacks.element.fail(n,t,function(){return l.ClientSideValidations.addError(n,t)},e)},"element:validate:pass.ClientSideValidations":function(e){var t;return t=i(this),ClientSideValidations.callbacks.element.pass(t,function(){return l.ClientSideValidations.removeError(t)},e)}};for(r in s)a=s[r],n.filter(":not(:radio):not([id$=_confirmation])").each(function(){return i(this).attr("data-validate",!0)}).on(r,a);return n.filter(":checkbox").on("change.ClientSideValidations",function(){return i(this).isValid(l.ClientSideValidations.settings.validators)}),n.filter("[id$=_confirmation]").each(function(){var e,n,s,o;if(e=i(this),n=t.find("#"+this.id.match(/(.+)_confirmation/)[1]+":input"),n[0]){s={"focusout.ClientSideValidations":function(){return n.data("changed",!0).isValid(l.ClientSideValidations.settings.validators)},"keyup.ClientSideValidations":function(){return n.data("changed",!0).isValid(l.ClientSideValidations.settings.validators)}},o=[];for(r in s)a=s[r],o.push(i("#"+e.attr("id")).on(r,a));return o}})}},window.ClientSideValidations.validators={all:function(){return i.extend({},ClientSideValidations.validators.local,ClientSideValidations.validators.remote)},local:{absence:function(i,e){return/^\s*$/.test(i.val()||"")?void 0:e.message},presence:function(i,e){return/^\s*$/.test(i.val()||"")?e.message:void 0},acceptance:function(i,e){var t;switch(i.attr("type")){case"checkbox":if(!i.prop("checked"))return e.message;break;case"text":if(i.val()!==((null!=(t=e.accept)?t.toString():void 0)||"1"))return e.message}},format:function(i,e){var t;if(t=this.presence(i,e)){if(e.allow_blank===!0)return;return t}return e["with"]&&!new RegExp(e["with"].source,e["with"].options).test(i.val())?e.message:e.without&&new RegExp(e.without.source,e.without.options).test(i.val())?e.message:void 0},numericality:function(e,t){var n,a,r,l,s,o,d;if(d=i.trim(e.val()),!ClientSideValidations.patterns.numericality.test(d)){if(t.allow_blank===!0&&this.presence(e,{message:t.messages.numericality}))return;return t.messages.numericality}if(d=d.replace(new RegExp("\\"+ClientSideValidations.number_format.delimiter,"g"),"").replace(new RegExp("\\"+ClientSideValidations.number_format.separator,"g"),"."),t.only_integer&&!/^[+-]?\d+$/.test(d))return t.messages.only_integer;n={greater_than:">",greater_than_or_equal_to:">=",equal_to:"==",less_than:"<",less_than_or_equal_to:"<="},s=i(e[0].form);for(a in n)if(o=n[a],null!=t[a]){if(!isNaN(parseFloat(t[a]))&&isFinite(t[a]))r=t[a];else{if(1!==s.find("[name*="+t[a]+"]").size())return;r=s.find("[name*="+t[a]+"]").val()}if(l=new Function("return "+d+" "+o+" "+r),!l())return t.messages[a]}return!t.odd||parseInt(d,10)%2?t.even&&parseInt(d,10)%2?t.messages.even:void 0:t.messages.odd},length:function(i,e){var t,n,a,r,l,s,o,d;if(d=e.js_tokenizer||"split('')",o=new Function("element","return (element.val()."+d+" || '').length")(i),t={is:"==",minimum:">=",maximum:"<="},n={},n.message=e.is?e.messages.is:e.minimum?e.messages.minimum:void 0,l=this.presence(i,n)){if(e.allow_blank===!0)return;return l}for(a in t)if(s=t[a],e[a]&&(r=new Function("return "+o+" "+s+" "+e[a]),!r()))return e.messages[a]},exclusion:function(i,e){var t,n,r,l,s;if(n=this.presence(i,e)){if(e.allow_blank===!0)return;return n}return e["in"]&&(l=i.val(),a.call(function(){var i,t,n,a;for(n=e["in"],a=[],i=0,t=n.length;t>i;i++)r=n[i],a.push(r.toString());return a}(),l)>=0)?e.message:e.range&&(t=e.range[0],s=e.range[1],i.val()>=t&&i.val()<=s)?e.message:void 0},inclusion:function(i,e){var t,n,r,l,s;if(n=this.presence(i,e)){if(e.allow_blank===!0)return;return n}if(e["in"]){if(l=i.val(),a.call(function(){var i,t,n,a;for(n=e["in"],a=[],i=0,t=n.length;t>i;i++)r=n[i],a.push(r.toString());return a}(),l)>=0)return;return e.message}if(e.range){if(t=e.range[0],s=e.range[1],i.val()>=t&&i.val()<=s)return;return e.message}},confirmation:function(e,t){return e.val()!==i("#"+e.attr("id")+"_confirmation").val()?t.message:void 0},uniqueness:function(e,t){var n,a,r,l,s,o,d;return r=e.attr("name"),/_attributes\]\[\d/.test(r)&&(a=r.match(/^(.+_attributes\])\[\d+\](.+)$/),l=a[1],s=a[2],d=e.val(),l&&s&&(n=e.closest("form"),o=!0,n.find(':input[name^="'+l+'"][name$="'+s+'"]').each(function(){if(i(this).attr("name")!==r){if(i(this).val()===d)return o=!1,i(this).data("notLocallyUnique",!0);if(i(this).data("notLocallyUnique"))return i(this).removeData("notLocallyUnique").data("changed",!0)}}),!o))?t.message:void 0}},remote:{uniqueness:function(e,t){var n,a,r,l,s,o,d,u;if(r=ClientSideValidations.validators.local.presence(e,t)){if(t.allow_blank===!0)return;return r}if(n={},n.case_sensitive=!!t.case_sensitive,t.id&&(n.id=t.id),t.scope){n.scope={},s=t.scope;for(a in s)o=s[a],u=e.attr("name").replace(/\[\w+\]$/,"["+a+"]"),d=i("[name='"+u+"']"),i("[name='"+u+"']:checkbox").each(function(){return this.checked?d=this:void 0}),d[0]&&d.val()!==o?(n.scope[a]=d.val(),d.unbind("change."+e.id).bind("change."+e.id,function(){return e.trigger("change.ClientSideValidations"),e.trigger("focusout.ClientSideValidations")})):n.scope[a]=o}return/_attributes\]/.test(e.attr("name"))?(l=e.attr("name").match(/\[\w+_attributes\]/g).pop().match(/\[(\w+)_attributes\]/).pop(),l+=/(\[\w+\])$/.exec(e.attr("name"))[1]):l=e.attr("name"),t["class"]&&(l=t["class"]+"["+l.split("[")[1]),n[l]=e.val(),200===i.ajax({url:ClientSideValidations.remote_validators_url_for("uniqueness"),data:n,async:!1,cache:!1}).status?t.message:void 0}}},window.ClientSideValidations.remote_validators_url_for=function(i){return null!=ClientSideValidations.remote_validators_prefix?"//"+window.location.host+"/"+ClientSideValidations.remote_validators_prefix+"/validators/"+i:"//"+window.location.host+"/validators/"+i},window.ClientSideValidations.disableValidators=function(){var i,e,t,n;if(void 0!==window.ClientSideValidations.disabled_validators){e=window.ClientSideValidations.validators.remote,t=[];for(n in e)i=e[n],a.call(window.ClientSideValidations.disabled_validators,n)>=0?t.push(delete window.ClientSideValidations.validators.remote[n]):t.push(void 0);return t}},window.ClientSideValidations.formBuilders={"ActionView::Helpers::FormBuilder":{add:function(e,t,n){var a,r,l,s;return a=i(e[0].form),e.data("valid")!==!1&&null==a.find("label.message[for='"+e.attr("id")+"']")[0]&&(r=i(t.input_tag),s=i(t.label_tag),l=a.find("label[for='"+e.attr("id")+"']:not(.message)"),e.attr("autofocus")&&e.attr("autofocus",!1),e.before(r),r.find("span#input_tag").replaceWith(e),r.find("label.message").attr("for",e.attr("id")),s.find("label.message").attr("for",e.attr("id")),s.insertAfter(l),s.find("label#label_tag").replaceWith(l)),a.find("label.message[for='"+e.attr("id")+"']").text(n)},remove:function(e,t){var n,a,r,l,s;return a=i(e[0].form),n=i(t.input_tag).attr("class"),r=e.closest("."+n.replace(/\ /g,".")),l=a.find("label[for='"+e.attr("id")+"']:not(.message)"),s=l.closest("."+n),r[0]?(r.find("#"+e.attr("id")).detach(),r.replaceWith(e),l.detach(),s.replaceWith(l)):void 0}}},window.ClientSideValidations.patterns={numericality:/^(-|\+)?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d*)?$/},window.ClientSideValidations.callbacks={element:{after:function(){},before:function(){},fail:function(i,e,t){return t()},pass:function(i,e){return e()}},form:{after:function(){},before:function(){},fail:function(){},pass:function(){}}},i(document).bind(window.Turbolinks?"page:change":"ready",function(){return ClientSideValidations.disableValidators(),i(ClientSideValidations.selectors.forms).validate()})}).call(this);