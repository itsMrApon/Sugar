function Ba(a,b,c,d){var e=k;if(a===b)return k;else if(D(b)&&B(a))return r(b).test(a);else if(z(b))return b.apply(c,d);else if(L(b)&&la(a)){G(b,function(g){Ba(a[g],b[g],c,[a[g],a])||(e=n)});return e}else return va(a)&&va(b)?ua(a)===ua(b):a===b}function R(a,b,c,d){return K(b)?a:z(b)?b.apply(c,d||[]):z(a[b])?a[b].call(a):a[b]}
function T(a,b,c,d){var e,g;if(c<0)c=a.length+c;g=isNaN(c)?0:c;for(c=d===k?a.length+g:a.length;g<c;){e=g%a.length;if(e in a){if(b.call(a,a[e],e,a)===n)break}else return Ca(a,b,g,d);g++}}function Ca(a,b,c){var d=[],e;for(e in a)e in a&&e>>>0==e&&e!=4294967295&&e>=c&&d.push(parseInt(e));d.sort().each(function(g){return b.call(a,a[g],g,a)});return a}function Ea(a,b,c,d,e){var g,f;T(a,function(j,i,h){if(Ba(j,b,h,[j,i,h])){g=j;f=i;return n}},c,d);return e?f:g}
function Fa(a,b){var c=[],d={},e;T(a,function(g,f){e=b?R(g,b,a,[g,f,a]):g;Ga(d,e)||c.push(g)});return c}function Ha(a,b,c){var d=[],e={};b.each(function(g){Ga(e,g)});a.each(function(g){var f=ua(g),j=!va(g);if(Ia(e,f,g,j)!=c){var i=0;if(j)for(f=e[f];i<f.length;)if(f[i]===g)f.splice(i,1);else i+=1;else delete e[f];d.push(g)}});return d}function Ja(a,b,c){b=b||Infinity;c=c||0;var d=[];T(a,function(e){if(da(e)&&c<b)d=d.concat(Ja(e,b,c+1));else d.push(e)});return d}
function Ka(a){var b=[];F(a,function(c){b=b.concat(c)});return b}function Ia(a,b,c,d){var e=b in a;if(d){a[b]||(a[b]=[]);e=a[b].indexOf(c)!==-1}return e}function Ga(a,b){var c=ua(b),d=!va(b),e=Ia(a,c,b,d);if(d)a[c].push(b);else a[c]=b;return e}function La(a,b,c,d){var e,g=[],f=c==="max",j=c==="min",i=Array.isArray(a);G(a,function(h){var m=a[h];h=R(m,b,a,i?[m,parseInt(h),a]:[]);if(h===e)g.push(m);else if(K(e)||f&&h>e||j&&h<e){g=[m];e=h}});i||(g=Ja(g,1));return d?g:g[0]}
function Ma(a){if(q[Na])a=a.toLowerCase();return a.replace(q[Oa],"")}function Pa(a,b){var c=a.charAt(b);return(q[Qa]||{})[c]||c}function Ra(a){var b=q[Sa];return a?b.indexOf(a):l}var Sa="AlphanumericSortOrder",Oa="AlphanumericSortIgnore",Na="AlphanumericSortIgnoreCase",Qa="AlphanumericSortEquivalents";E(q,n,n,{create:function(){var a=[],b;F(arguments,function(c){if(la(c)){b=q.prototype.slice.call(c);if(b.length>0)c=b}a=a.concat(c)});return a}});
E(q,k,n,{find:function(a,b,c){return Ea(this,a,b,c)},findAll:function(a,b,c){var d=[];T(this,function(e,g,f){Ba(e,a,f,[e,g,f])&&d.push(e)},b,c);return d},findIndex:function(a,b,c){a=Ea(this,a,b,c,k);return K(a)?-1:a},count:function(a){if(K(a))return this.length;return this.findAll(a).length},removeAt:function(a,b){if(K(a))return this;if(K(b))b=a;for(var c=0;c<=b-a;c++)this.splice(a,1);return this},include:function(a,b){return this.clone().add(a,b)},exclude:function(){return q.prototype.remove.apply(this.clone(),
arguments)},clone:function(){return na([],this)},unique:function(a){return Fa(this,a)},flatten:function(a){return Ja(this,a)},union:function(){return Fa(this.concat(Ka(arguments)))},intersect:function(){return Ha(this,Ka(arguments),n)},subtract:function(){return Ha(this,Ka(arguments),k)},at:function(){return wa(this,arguments)},first:function(a){if(K(a))return this[0];if(a<0)a=0;return this.slice(0,a)},last:function(a){if(K(a))return this[this.length-1];return this.slice(this.length-a<0?0:this.length-
a)},from:function(a){return this.slice(a)},to:function(a){if(K(a))a=this.length;return this.slice(0,a)},min:function(a,b){return La(this,a,"min",b)},max:function(a,b){return La(this,a,"max",b)},least:function(a,b){return La(this.groupBy.apply(this,[a]),"length","min",b)},most:function(a,b){return La(this.groupBy.apply(this,[a]),"length","max",b)},sum:function(a){a=a?this.map(a):this;return a.length>0?a.reduce(function(b,c){return b+c}):0},average:function(a){a=a?this.map(a):this;return a.length>0?
a.sum()/a.length:0},inGroups:function(a,b){var c=arguments.length>1,d=this,e=[],g=M(this.length/a,void 0,"ceil");pa(0,a-1,function(f){f=f*g;var j=d.slice(f,f+g);c&&j.length<g&&pa(1,g-j.length,function(){j=j.add(b)});e.push(j)});return e},inGroupsOf:function(a,b){var c=[],d=this.length,e=this,g;if(d===0||a===0)return e;if(K(a))a=1;if(K(b))b=l;pa(0,M(d/a,void 0,"ceil")-1,function(f){for(g=e.slice(a*f,a*f+a);g.length<a;)g.push(b);c.push(g)});return c},isEmpty:function(){return this.compact().length==
0},sortBy:function(a,b){var c=this.clone();c.sort(function(d,e){var g,f;g=R(d,a,c,[d]);f=R(e,a,c,[e]);if(B(g)&&B(f)){g=g;f=f;var j,i,h,m,o=0,w=0;g=Ma(g);f=Ma(f);do{h=Pa(g,o);m=Pa(f,o);j=Ra(h);i=Ra(m);if(j===-1||i===-1){j=g.charCodeAt(o)||l;i=f.charCodeAt(o)||l}h=h!==g.charAt(o);m=m!==f.charAt(o);if(h!==m&&w===0)w=h-m;o+=1}while(j!=l&&i!=l&&j===i);g=j===i?w:j<i?-1:1}else g=g<f?-1:g>f?1:0;return g*(b?-1:1)});return c},randomize:function(){for(var a=this.concat(),b,c,d=a.length;d;b=parseInt(v.random()*
d),c=a[--d],a[d]=a[b],a[b]=c);return a},zip:function(){var a=F(arguments);return this.map(function(b,c){return[b].concat(a.map(function(d){return c in d?d[c]:l}))})},sample:function(a){var b=[],c=this.clone(),d;if(K(a))a=1;for(;b.length<a;){d=N(v.random()*(c.length-1));b.push(c[d]);c.removeAt(d);if(c.length==0)break}return arguments.length>0?b:b[0]},each:function(a,b,c){T(this,a,b,c);return this},add:function(a,b){if(!A(u(b))||isNaN(b))b=this.length;q.prototype.splice.apply(this,[b,0].concat(a));
return this},remove:function(){var a,b=this;F(arguments,function(c){for(a=0;a<b.length;)if(Ba(b[a],c,b,[b[a],a,b]))b.splice(a,1);else a++});return b},compact:function(a){var b=[];T(this,function(c){if(da(c))b.push(c.compact());else if(a&&c)b.push(c);else!a&&c!=l&&c.valueOf()===c.valueOf()&&b.push(c)});return b},groupBy:function(a,b){var c=this,d={},e;T(c,function(g,f){e=R(g,a,c,[g,f,c]);d[e]||(d[e]=[]);d[e].push(g)});b&&G(d,b);return d},none:function(){return!this.any.apply(this,arguments)}});
E(q,k,n,{all:q.prototype.every,any:q.prototype.some,insert:q.prototype.add});function Ta(a){if(a&&a.valueOf)a=a.valueOf();return p.keys(a)}function Ua(a,b){H(p,n,n,a,function(c,d){c[d]=function(e,g,f){var j=Ta(e);f=q.prototype[d].call(j,function(i){return b?R(e[i],g,e,[i,e[i],e]):Ba(e[i],g,e,[i,e[i],e])},f);if(da(f))f=f.reduce(function(i,h){i[h]=e[h];return i},{});return f}});xa(a,oa)}
E(p,n,n,{map:function(a,b){return Ta(a).reduce(function(c,d){c[d]=R(a[d],b,a,[d,a[d],a]);return c},{})},reduce:function(a){var b=Ta(a).map(function(c){return a[c]});return b.reduce.apply(b,F(arguments).slice(1))},each:function(a,b){ka(b);G(a,b);return a},size:function(a){return Ta(a).length}});
(function(){H(q,k,function(){var a=arguments;return a.length>0&&!z(a[0])},"map,every,all,some,any,none,filter",function(a,b){a[b]=function(c){return this[b](function(d,e){return b==="map"?R(d,c,this,[d,e,this]):Ba(d,c,this,[d,e,this])})}})})();
(function(){q[Sa]="A\u00c1\u00c0\u00c2\u00c3\u0104BC\u0106\u010c\u00c7D\u010e\u00d0E\u00c9\u00c8\u011a\u00ca\u00cb\u0118FG\u011eH\u0131I\u00cd\u00cc\u0130\u00ce\u00cfJKL\u0141MN\u0143\u0147\u00d1O\u00d3\u00d2\u00d4PQR\u0158S\u015a\u0160\u015eT\u0164U\u00da\u00d9\u016e\u00db\u00dcVWXY\u00ddZ\u0179\u017b\u017d\u00de\u00c6\u0152\u00d8\u00d5\u00c5\u00c4\u00d6".split("").map(function(b){return b+b.toLowerCase()}).join("");var a={};T("A\u00c1\u00c0\u00c2\u00c3\u00c4,C\u00c7,E\u00c9\u00c8\u00ca\u00cb,I\u00cd\u00cc\u0130\u00ce\u00cf,O\u00d3\u00d2\u00d4\u00d5\u00d6,S\u00df,U\u00da\u00d9\u00db\u00dc".split(","),
function(b){var c=b.charAt(0);T(b.slice(1).split(""),function(d){a[d]=c;a[d.toLowerCase()]=c.toLowerCase()})});q[Na]=k;q[Qa]=a})();Ua("any,all,none,count,find,findAll,isEmpty");Ua("sum,average,min,max,least,most",k);xa("map,reduce,size",oa);
