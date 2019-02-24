// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__32252__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32249 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32250 = cljs.core.seq.call(null,vec__32249);
var first__32251 = cljs.core.first.call(null,seq__32250);
var seq__32250__$1 = cljs.core.next.call(null,seq__32250);
var tag = first__32251;
var body = seq__32250__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32253__i = 0, G__32253__a = new Array(arguments.length -  0);
while (G__32253__i < G__32253__a.length) {G__32253__a[G__32253__i] = arguments[G__32253__i + 0]; ++G__32253__i;}
  args = new cljs.core.IndexedSeq(G__32253__a,0);
} 
return G__32252__delegate.call(this,args);};
G__32252.cljs$lang$maxFixedArity = 0;
G__32252.cljs$lang$applyTo = (function (arglist__32254){
var args = cljs.core.seq(arglist__32254);
return G__32252__delegate(args);
});
G__32252.cljs$core$IFn$_invoke$arity$variadic = G__32252__delegate;
return G__32252;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25628__auto__ = (function sablono$core$update_arglists_$_iter__32259(s__32260){
return (new cljs.core.LazySeq(null,(function (){
var s__32260__$1 = s__32260;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32260__$1);
if(temp__4657__auto__){
var s__32260__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32260__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32260__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32262 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32261 = (0);
while(true){
if((i__32261 < size__25627__auto__)){
var args = cljs.core._nth.call(null,c__25626__auto__,i__32261);
cljs.core.chunk_append.call(null,b__32262,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32263 = (i__32261 + (1));
i__32261 = G__32263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32262),sablono$core$update_arglists_$_iter__32259.call(null,cljs.core.chunk_rest.call(null,s__32260__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32262),null);
}
} else {
var args = cljs.core.first.call(null,s__32260__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32259.call(null,cljs.core.rest.call(null,s__32260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32269 = arguments.length;
var i__25924__auto___32270 = (0);
while(true){
if((i__25924__auto___32270 < len__25923__auto___32269)){
args__25930__auto__.push((arguments[i__25924__auto___32270]));

var G__32271 = (i__25924__auto___32270 + (1));
i__25924__auto___32270 = G__32271;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25628__auto__ = (function sablono$core$iter__32265(s__32266){
return (new cljs.core.LazySeq(null,(function (){
var s__32266__$1 = s__32266;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32266__$1);
if(temp__4657__auto__){
var s__32266__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32266__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32266__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32268 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32267 = (0);
while(true){
if((i__32267 < size__25627__auto__)){
var style = cljs.core._nth.call(null,c__25626__auto__,i__32267);
cljs.core.chunk_append.call(null,b__32268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32272 = (i__32267 + (1));
i__32267 = G__32272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32268),sablono$core$iter__32265.call(null,cljs.core.chunk_rest.call(null,s__32266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32268),null);
}
} else {
var style = cljs.core.first.call(null,s__32266__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32265.call(null,cljs.core.rest.call(null,s__32266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq32264){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32264));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to32273 = (function sablono$core$link_to32273(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32276 = arguments.length;
var i__25924__auto___32277 = (0);
while(true){
if((i__25924__auto___32277 < len__25923__auto___32276)){
args__25930__auto__.push((arguments[i__25924__auto___32277]));

var G__32278 = (i__25924__auto___32277 + (1));
i__25924__auto___32277 = G__32278;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32273.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.link_to32273.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32273.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32273.cljs$lang$applyTo = (function (seq32274){
var G__32275 = cljs.core.first.call(null,seq32274);
var seq32274__$1 = cljs.core.next.call(null,seq32274);
return sablono.core.link_to32273.cljs$core$IFn$_invoke$arity$variadic(G__32275,seq32274__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32273);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32279 = (function sablono$core$mail_to32279(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32286 = arguments.length;
var i__25924__auto___32287 = (0);
while(true){
if((i__25924__auto___32287 < len__25923__auto___32286)){
args__25930__auto__.push((arguments[i__25924__auto___32287]));

var G__32288 = (i__25924__auto___32287 + (1));
i__25924__auto___32287 = G__32288;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32279.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.mail_to32279.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32282){
var vec__32283 = p__32282;
var content = cljs.core.nth.call(null,vec__32283,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24848__auto__ = content;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32279.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32279.cljs$lang$applyTo = (function (seq32280){
var G__32281 = cljs.core.first.call(null,seq32280);
var seq32280__$1 = cljs.core.next.call(null,seq32280);
return sablono.core.mail_to32279.cljs$core$IFn$_invoke$arity$variadic(G__32281,seq32280__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32279);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32289 = (function sablono$core$unordered_list32289(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function sablono$core$unordered_list32289_$_iter__32294(s__32295){
return (new cljs.core.LazySeq(null,(function (){
var s__32295__$1 = s__32295;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32295__$1);
if(temp__4657__auto__){
var s__32295__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32295__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32295__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32297 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32296 = (0);
while(true){
if((i__32296 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32296);
cljs.core.chunk_append.call(null,b__32297,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32298 = (i__32296 + (1));
i__32296 = G__32298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32297),sablono$core$unordered_list32289_$_iter__32294.call(null,cljs.core.chunk_rest.call(null,s__32295__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32297),null);
}
} else {
var x = cljs.core.first.call(null,s__32295__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32289_$_iter__32294.call(null,cljs.core.rest.call(null,s__32295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32289);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32299 = (function sablono$core$ordered_list32299(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25628__auto__ = (function sablono$core$ordered_list32299_$_iter__32304(s__32305){
return (new cljs.core.LazySeq(null,(function (){
var s__32305__$1 = s__32305;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32305__$1);
if(temp__4657__auto__){
var s__32305__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32305__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32305__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32307 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32306 = (0);
while(true){
if((i__32306 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32306);
cljs.core.chunk_append.call(null,b__32307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32308 = (i__32306 + (1));
i__32306 = G__32308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32307),sablono$core$ordered_list32299_$_iter__32304.call(null,cljs.core.chunk_rest.call(null,s__32305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32307),null);
}
} else {
var x = cljs.core.first.call(null,s__32305__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32299_$_iter__32304.call(null,cljs.core.rest.call(null,s__32305__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32299);
/**
 * Create an image element.
 */
sablono.core.image32309 = (function sablono$core$image32309(var_args){
var args32310 = [];
var len__25923__auto___32313 = arguments.length;
var i__25924__auto___32314 = (0);
while(true){
if((i__25924__auto___32314 < len__25923__auto___32313)){
args32310.push((arguments[i__25924__auto___32314]));

var G__32315 = (i__25924__auto___32314 + (1));
i__25924__auto___32314 = G__32315;
continue;
} else {
}
break;
}

var G__32312 = args32310.length;
switch (G__32312) {
case 1:
return sablono.core.image32309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32310.length)].join('')));

}
});

sablono.core.image32309.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32309.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32309.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32309);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32317_SHARP_,p2__32318_SHARP_){
return [cljs.core.str(p1__32317_SHARP_),cljs.core.str("["),cljs.core.str(p2__32318_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32319_SHARP_,p2__32320_SHARP_){
return [cljs.core.str(p1__32319_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32320_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field32321 = (function sablono$core$color_field32321(var_args){
var args32322 = [];
var len__25923__auto___32389 = arguments.length;
var i__25924__auto___32390 = (0);
while(true){
if((i__25924__auto___32390 < len__25923__auto___32389)){
args32322.push((arguments[i__25924__auto___32390]));

var G__32391 = (i__25924__auto___32390 + (1));
i__25924__auto___32390 = G__32391;
continue;
} else {
}
break;
}

var G__32324 = args32322.length;
switch (G__32324) {
case 1:
return sablono.core.color_field32321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32322.length)].join('')));

}
});

sablono.core.color_field32321.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.color_field32321.call(null,name__32236__auto__,null);
});

sablono.core.color_field32321.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.color_field32321.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32321);

/**
 * Creates a date input field.
 */
sablono.core.date_field32325 = (function sablono$core$date_field32325(var_args){
var args32326 = [];
var len__25923__auto___32393 = arguments.length;
var i__25924__auto___32394 = (0);
while(true){
if((i__25924__auto___32394 < len__25923__auto___32393)){
args32326.push((arguments[i__25924__auto___32394]));

var G__32395 = (i__25924__auto___32394 + (1));
i__25924__auto___32394 = G__32395;
continue;
} else {
}
break;
}

var G__32328 = args32326.length;
switch (G__32328) {
case 1:
return sablono.core.date_field32325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32326.length)].join('')));

}
});

sablono.core.date_field32325.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.date_field32325.call(null,name__32236__auto__,null);
});

sablono.core.date_field32325.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.date_field32325.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32325);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32329 = (function sablono$core$datetime_field32329(var_args){
var args32330 = [];
var len__25923__auto___32397 = arguments.length;
var i__25924__auto___32398 = (0);
while(true){
if((i__25924__auto___32398 < len__25923__auto___32397)){
args32330.push((arguments[i__25924__auto___32398]));

var G__32399 = (i__25924__auto___32398 + (1));
i__25924__auto___32398 = G__32399;
continue;
} else {
}
break;
}

var G__32332 = args32330.length;
switch (G__32332) {
case 1:
return sablono.core.datetime_field32329.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32329.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32330.length)].join('')));

}
});

sablono.core.datetime_field32329.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.datetime_field32329.call(null,name__32236__auto__,null);
});

sablono.core.datetime_field32329.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.datetime_field32329.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32329);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32333 = (function sablono$core$datetime_local_field32333(var_args){
var args32334 = [];
var len__25923__auto___32401 = arguments.length;
var i__25924__auto___32402 = (0);
while(true){
if((i__25924__auto___32402 < len__25923__auto___32401)){
args32334.push((arguments[i__25924__auto___32402]));

var G__32403 = (i__25924__auto___32402 + (1));
i__25924__auto___32402 = G__32403;
continue;
} else {
}
break;
}

var G__32336 = args32334.length;
switch (G__32336) {
case 1:
return sablono.core.datetime_local_field32333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32334.length)].join('')));

}
});

sablono.core.datetime_local_field32333.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.datetime_local_field32333.call(null,name__32236__auto__,null);
});

sablono.core.datetime_local_field32333.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.datetime_local_field32333.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32333);

/**
 * Creates a email input field.
 */
sablono.core.email_field32337 = (function sablono$core$email_field32337(var_args){
var args32338 = [];
var len__25923__auto___32405 = arguments.length;
var i__25924__auto___32406 = (0);
while(true){
if((i__25924__auto___32406 < len__25923__auto___32405)){
args32338.push((arguments[i__25924__auto___32406]));

var G__32407 = (i__25924__auto___32406 + (1));
i__25924__auto___32406 = G__32407;
continue;
} else {
}
break;
}

var G__32340 = args32338.length;
switch (G__32340) {
case 1:
return sablono.core.email_field32337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32338.length)].join('')));

}
});

sablono.core.email_field32337.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.email_field32337.call(null,name__32236__auto__,null);
});

sablono.core.email_field32337.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.email_field32337.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32337);

/**
 * Creates a file input field.
 */
sablono.core.file_field32341 = (function sablono$core$file_field32341(var_args){
var args32342 = [];
var len__25923__auto___32409 = arguments.length;
var i__25924__auto___32410 = (0);
while(true){
if((i__25924__auto___32410 < len__25923__auto___32409)){
args32342.push((arguments[i__25924__auto___32410]));

var G__32411 = (i__25924__auto___32410 + (1));
i__25924__auto___32410 = G__32411;
continue;
} else {
}
break;
}

var G__32344 = args32342.length;
switch (G__32344) {
case 1:
return sablono.core.file_field32341.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32341.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32342.length)].join('')));

}
});

sablono.core.file_field32341.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.file_field32341.call(null,name__32236__auto__,null);
});

sablono.core.file_field32341.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.file_field32341.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32341);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32345 = (function sablono$core$hidden_field32345(var_args){
var args32346 = [];
var len__25923__auto___32413 = arguments.length;
var i__25924__auto___32414 = (0);
while(true){
if((i__25924__auto___32414 < len__25923__auto___32413)){
args32346.push((arguments[i__25924__auto___32414]));

var G__32415 = (i__25924__auto___32414 + (1));
i__25924__auto___32414 = G__32415;
continue;
} else {
}
break;
}

var G__32348 = args32346.length;
switch (G__32348) {
case 1:
return sablono.core.hidden_field32345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32346.length)].join('')));

}
});

sablono.core.hidden_field32345.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.hidden_field32345.call(null,name__32236__auto__,null);
});

sablono.core.hidden_field32345.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.hidden_field32345.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32345);

/**
 * Creates a month input field.
 */
sablono.core.month_field32349 = (function sablono$core$month_field32349(var_args){
var args32350 = [];
var len__25923__auto___32417 = arguments.length;
var i__25924__auto___32418 = (0);
while(true){
if((i__25924__auto___32418 < len__25923__auto___32417)){
args32350.push((arguments[i__25924__auto___32418]));

var G__32419 = (i__25924__auto___32418 + (1));
i__25924__auto___32418 = G__32419;
continue;
} else {
}
break;
}

var G__32352 = args32350.length;
switch (G__32352) {
case 1:
return sablono.core.month_field32349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32350.length)].join('')));

}
});

sablono.core.month_field32349.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.month_field32349.call(null,name__32236__auto__,null);
});

sablono.core.month_field32349.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.month_field32349.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32349);

/**
 * Creates a number input field.
 */
sablono.core.number_field32353 = (function sablono$core$number_field32353(var_args){
var args32354 = [];
var len__25923__auto___32421 = arguments.length;
var i__25924__auto___32422 = (0);
while(true){
if((i__25924__auto___32422 < len__25923__auto___32421)){
args32354.push((arguments[i__25924__auto___32422]));

var G__32423 = (i__25924__auto___32422 + (1));
i__25924__auto___32422 = G__32423;
continue;
} else {
}
break;
}

var G__32356 = args32354.length;
switch (G__32356) {
case 1:
return sablono.core.number_field32353.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32353.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32354.length)].join('')));

}
});

sablono.core.number_field32353.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.number_field32353.call(null,name__32236__auto__,null);
});

sablono.core.number_field32353.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.number_field32353.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32353);

/**
 * Creates a password input field.
 */
sablono.core.password_field32357 = (function sablono$core$password_field32357(var_args){
var args32358 = [];
var len__25923__auto___32425 = arguments.length;
var i__25924__auto___32426 = (0);
while(true){
if((i__25924__auto___32426 < len__25923__auto___32425)){
args32358.push((arguments[i__25924__auto___32426]));

var G__32427 = (i__25924__auto___32426 + (1));
i__25924__auto___32426 = G__32427;
continue;
} else {
}
break;
}

var G__32360 = args32358.length;
switch (G__32360) {
case 1:
return sablono.core.password_field32357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32358.length)].join('')));

}
});

sablono.core.password_field32357.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.password_field32357.call(null,name__32236__auto__,null);
});

sablono.core.password_field32357.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.password_field32357.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32357);

/**
 * Creates a range input field.
 */
sablono.core.range_field32361 = (function sablono$core$range_field32361(var_args){
var args32362 = [];
var len__25923__auto___32429 = arguments.length;
var i__25924__auto___32430 = (0);
while(true){
if((i__25924__auto___32430 < len__25923__auto___32429)){
args32362.push((arguments[i__25924__auto___32430]));

var G__32431 = (i__25924__auto___32430 + (1));
i__25924__auto___32430 = G__32431;
continue;
} else {
}
break;
}

var G__32364 = args32362.length;
switch (G__32364) {
case 1:
return sablono.core.range_field32361.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32361.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32362.length)].join('')));

}
});

sablono.core.range_field32361.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.range_field32361.call(null,name__32236__auto__,null);
});

sablono.core.range_field32361.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.range_field32361.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32361);

/**
 * Creates a search input field.
 */
sablono.core.search_field32365 = (function sablono$core$search_field32365(var_args){
var args32366 = [];
var len__25923__auto___32433 = arguments.length;
var i__25924__auto___32434 = (0);
while(true){
if((i__25924__auto___32434 < len__25923__auto___32433)){
args32366.push((arguments[i__25924__auto___32434]));

var G__32435 = (i__25924__auto___32434 + (1));
i__25924__auto___32434 = G__32435;
continue;
} else {
}
break;
}

var G__32368 = args32366.length;
switch (G__32368) {
case 1:
return sablono.core.search_field32365.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32365.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32366.length)].join('')));

}
});

sablono.core.search_field32365.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.search_field32365.call(null,name__32236__auto__,null);
});

sablono.core.search_field32365.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.search_field32365.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32365);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32369 = (function sablono$core$tel_field32369(var_args){
var args32370 = [];
var len__25923__auto___32437 = arguments.length;
var i__25924__auto___32438 = (0);
while(true){
if((i__25924__auto___32438 < len__25923__auto___32437)){
args32370.push((arguments[i__25924__auto___32438]));

var G__32439 = (i__25924__auto___32438 + (1));
i__25924__auto___32438 = G__32439;
continue;
} else {
}
break;
}

var G__32372 = args32370.length;
switch (G__32372) {
case 1:
return sablono.core.tel_field32369.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32369.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32370.length)].join('')));

}
});

sablono.core.tel_field32369.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.tel_field32369.call(null,name__32236__auto__,null);
});

sablono.core.tel_field32369.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.tel_field32369.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32369);

/**
 * Creates a text input field.
 */
sablono.core.text_field32373 = (function sablono$core$text_field32373(var_args){
var args32374 = [];
var len__25923__auto___32441 = arguments.length;
var i__25924__auto___32442 = (0);
while(true){
if((i__25924__auto___32442 < len__25923__auto___32441)){
args32374.push((arguments[i__25924__auto___32442]));

var G__32443 = (i__25924__auto___32442 + (1));
i__25924__auto___32442 = G__32443;
continue;
} else {
}
break;
}

var G__32376 = args32374.length;
switch (G__32376) {
case 1:
return sablono.core.text_field32373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32374.length)].join('')));

}
});

sablono.core.text_field32373.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.text_field32373.call(null,name__32236__auto__,null);
});

sablono.core.text_field32373.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.text_field32373.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32373);

/**
 * Creates a time input field.
 */
sablono.core.time_field32377 = (function sablono$core$time_field32377(var_args){
var args32378 = [];
var len__25923__auto___32445 = arguments.length;
var i__25924__auto___32446 = (0);
while(true){
if((i__25924__auto___32446 < len__25923__auto___32445)){
args32378.push((arguments[i__25924__auto___32446]));

var G__32447 = (i__25924__auto___32446 + (1));
i__25924__auto___32446 = G__32447;
continue;
} else {
}
break;
}

var G__32380 = args32378.length;
switch (G__32380) {
case 1:
return sablono.core.time_field32377.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32377.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32378.length)].join('')));

}
});

sablono.core.time_field32377.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.time_field32377.call(null,name__32236__auto__,null);
});

sablono.core.time_field32377.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.time_field32377.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32377);

/**
 * Creates a url input field.
 */
sablono.core.url_field32381 = (function sablono$core$url_field32381(var_args){
var args32382 = [];
var len__25923__auto___32449 = arguments.length;
var i__25924__auto___32450 = (0);
while(true){
if((i__25924__auto___32450 < len__25923__auto___32449)){
args32382.push((arguments[i__25924__auto___32450]));

var G__32451 = (i__25924__auto___32450 + (1));
i__25924__auto___32450 = G__32451;
continue;
} else {
}
break;
}

var G__32384 = args32382.length;
switch (G__32384) {
case 1:
return sablono.core.url_field32381.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32381.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32382.length)].join('')));

}
});

sablono.core.url_field32381.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.url_field32381.call(null,name__32236__auto__,null);
});

sablono.core.url_field32381.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.url_field32381.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32381);

/**
 * Creates a week input field.
 */
sablono.core.week_field32385 = (function sablono$core$week_field32385(var_args){
var args32386 = [];
var len__25923__auto___32453 = arguments.length;
var i__25924__auto___32454 = (0);
while(true){
if((i__25924__auto___32454 < len__25923__auto___32453)){
args32386.push((arguments[i__25924__auto___32454]));

var G__32455 = (i__25924__auto___32454 + (1));
i__25924__auto___32454 = G__32455;
continue;
} else {
}
break;
}

var G__32388 = args32386.length;
switch (G__32388) {
case 1:
return sablono.core.week_field32385.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32385.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32386.length)].join('')));

}
});

sablono.core.week_field32385.cljs$core$IFn$_invoke$arity$1 = (function (name__32236__auto__){
return sablono.core.week_field32385.call(null,name__32236__auto__,null);
});

sablono.core.week_field32385.cljs$core$IFn$_invoke$arity$2 = (function (name__32236__auto__,value__32237__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32236__auto__,value__32237__auto__);
});

sablono.core.week_field32385.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32385);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32457 = (function sablono$core$check_box32457(var_args){
var args32458 = [];
var len__25923__auto___32461 = arguments.length;
var i__25924__auto___32462 = (0);
while(true){
if((i__25924__auto___32462 < len__25923__auto___32461)){
args32458.push((arguments[i__25924__auto___32462]));

var G__32463 = (i__25924__auto___32462 + (1));
i__25924__auto___32462 = G__32463;
continue;
} else {
}
break;
}

var G__32460 = args32458.length;
switch (G__32460) {
case 1:
return sablono.core.check_box32457.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32457.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32457.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32458.length)].join('')));

}
});

sablono.core.check_box32457.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32457.call(null,name,null);
});

sablono.core.check_box32457.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32457.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32457.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32457.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32457);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32465 = (function sablono$core$radio_button32465(var_args){
var args32466 = [];
var len__25923__auto___32469 = arguments.length;
var i__25924__auto___32470 = (0);
while(true){
if((i__25924__auto___32470 < len__25923__auto___32469)){
args32466.push((arguments[i__25924__auto___32470]));

var G__32471 = (i__25924__auto___32470 + (1));
i__25924__auto___32470 = G__32471;
continue;
} else {
}
break;
}

var G__32468 = args32466.length;
switch (G__32468) {
case 1:
return sablono.core.radio_button32465.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32465.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32465.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32466.length)].join('')));

}
});

sablono.core.radio_button32465.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32465.call(null,group,null);
});

sablono.core.radio_button32465.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32465.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32465.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32465.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32465);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32473 = (function sablono$core$select_options32473(coll){
var iter__25628__auto__ = (function sablono$core$select_options32473_$_iter__32490(s__32491){
return (new cljs.core.LazySeq(null,(function (){
var s__32491__$1 = s__32491;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32491__$1);
if(temp__4657__auto__){
var s__32491__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32491__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32491__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32493 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32492 = (0);
while(true){
if((i__32492 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32492);
cljs.core.chunk_append.call(null,b__32493,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32500 = x;
var text = cljs.core.nth.call(null,vec__32500,(0),null);
var val = cljs.core.nth.call(null,vec__32500,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32500,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32473.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32506 = (i__32492 + (1));
i__32492 = G__32506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32493),sablono$core$select_options32473_$_iter__32490.call(null,cljs.core.chunk_rest.call(null,s__32491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32493),null);
}
} else {
var x = cljs.core.first.call(null,s__32491__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32503 = x;
var text = cljs.core.nth.call(null,vec__32503,(0),null);
var val = cljs.core.nth.call(null,vec__32503,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32503,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32473.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32473_$_iter__32490.call(null,cljs.core.rest.call(null,s__32491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25628__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32473);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32507 = (function sablono$core$drop_down32507(var_args){
var args32508 = [];
var len__25923__auto___32511 = arguments.length;
var i__25924__auto___32512 = (0);
while(true){
if((i__25924__auto___32512 < len__25923__auto___32511)){
args32508.push((arguments[i__25924__auto___32512]));

var G__32513 = (i__25924__auto___32512 + (1));
i__25924__auto___32512 = G__32513;
continue;
} else {
}
break;
}

var G__32510 = args32508.length;
switch (G__32510) {
case 2:
return sablono.core.drop_down32507.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32507.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32508.length)].join('')));

}
});

sablono.core.drop_down32507.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32507.call(null,name,options,null);
});

sablono.core.drop_down32507.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32507.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32507);
/**
 * Creates a text area element.
 */
sablono.core.text_area32515 = (function sablono$core$text_area32515(var_args){
var args32516 = [];
var len__25923__auto___32519 = arguments.length;
var i__25924__auto___32520 = (0);
while(true){
if((i__25924__auto___32520 < len__25923__auto___32519)){
args32516.push((arguments[i__25924__auto___32520]));

var G__32521 = (i__25924__auto___32520 + (1));
i__25924__auto___32520 = G__32521;
continue;
} else {
}
break;
}

var G__32518 = args32516.length;
switch (G__32518) {
case 1:
return sablono.core.text_area32515.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32515.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32516.length)].join('')));

}
});

sablono.core.text_area32515.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32515.call(null,name,null);
});

sablono.core.text_area32515.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32515.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32515);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32523 = (function sablono$core$label32523(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32523);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32524 = (function sablono$core$submit_button32524(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32524);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32525 = (function sablono$core$reset_button32525(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32525);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32526 = (function sablono$core$form_to32526(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32533 = arguments.length;
var i__25924__auto___32534 = (0);
while(true){
if((i__25924__auto___32534 < len__25923__auto___32533)){
args__25930__auto__.push((arguments[i__25924__auto___32534]));

var G__32535 = (i__25924__auto___32534 + (1));
i__25924__auto___32534 = G__32535;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32526.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.form_to32526.cljs$core$IFn$_invoke$arity$variadic = (function (p__32529,body){
var vec__32530 = p__32529;
var method = cljs.core.nth.call(null,vec__32530,(0),null);
var action = cljs.core.nth.call(null,vec__32530,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32526.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32526.cljs$lang$applyTo = (function (seq32527){
var G__32528 = cljs.core.first.call(null,seq32527);
var seq32527__$1 = cljs.core.next.call(null,seq32527);
return sablono.core.form_to32526.cljs$core$IFn$_invoke$arity$variadic(G__32528,seq32527__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32526);

//# sourceMappingURL=core.js.map?rel=1538702793451