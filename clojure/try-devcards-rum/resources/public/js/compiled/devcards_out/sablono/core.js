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
var G__32074__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32071 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32072 = cljs.core.seq.call(null,vec__32071);
var first__32073 = cljs.core.first.call(null,seq__32072);
var seq__32072__$1 = cljs.core.next.call(null,seq__32072);
var tag = first__32073;
var body = seq__32072__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32075__i = 0, G__32075__a = new Array(arguments.length -  0);
while (G__32075__i < G__32075__a.length) {G__32075__a[G__32075__i] = arguments[G__32075__i + 0]; ++G__32075__i;}
  args = new cljs.core.IndexedSeq(G__32075__a,0);
} 
return G__32074__delegate.call(this,args);};
G__32074.cljs$lang$maxFixedArity = 0;
G__32074.cljs$lang$applyTo = (function (arglist__32076){
var args = cljs.core.seq(arglist__32076);
return G__32074__delegate(args);
});
G__32074.cljs$core$IFn$_invoke$arity$variadic = G__32074__delegate;
return G__32074;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25628__auto__ = (function sablono$core$update_arglists_$_iter__32081(s__32082){
return (new cljs.core.LazySeq(null,(function (){
var s__32082__$1 = s__32082;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32082__$1);
if(temp__4657__auto__){
var s__32082__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32082__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32082__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32084 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32083 = (0);
while(true){
if((i__32083 < size__25627__auto__)){
var args = cljs.core._nth.call(null,c__25626__auto__,i__32083);
cljs.core.chunk_append.call(null,b__32084,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32085 = (i__32083 + (1));
i__32083 = G__32085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32084),sablono$core$update_arglists_$_iter__32081.call(null,cljs.core.chunk_rest.call(null,s__32082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32084),null);
}
} else {
var args = cljs.core.first.call(null,s__32082__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32081.call(null,cljs.core.rest.call(null,s__32082__$2)));
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
var len__25923__auto___32091 = arguments.length;
var i__25924__auto___32092 = (0);
while(true){
if((i__25924__auto___32092 < len__25923__auto___32091)){
args__25930__auto__.push((arguments[i__25924__auto___32092]));

var G__32093 = (i__25924__auto___32092 + (1));
i__25924__auto___32092 = G__32093;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25628__auto__ = (function sablono$core$iter__32087(s__32088){
return (new cljs.core.LazySeq(null,(function (){
var s__32088__$1 = s__32088;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32088__$1);
if(temp__4657__auto__){
var s__32088__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32088__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32088__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32090 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32089 = (0);
while(true){
if((i__32089 < size__25627__auto__)){
var style = cljs.core._nth.call(null,c__25626__auto__,i__32089);
cljs.core.chunk_append.call(null,b__32090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32094 = (i__32089 + (1));
i__32089 = G__32094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32090),sablono$core$iter__32087.call(null,cljs.core.chunk_rest.call(null,s__32088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32090),null);
}
} else {
var style = cljs.core.first.call(null,s__32088__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32087.call(null,cljs.core.rest.call(null,s__32088__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq32086){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32086));
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
sablono.core.link_to32095 = (function sablono$core$link_to32095(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32098 = arguments.length;
var i__25924__auto___32099 = (0);
while(true){
if((i__25924__auto___32099 < len__25923__auto___32098)){
args__25930__auto__.push((arguments[i__25924__auto___32099]));

var G__32100 = (i__25924__auto___32099 + (1));
i__25924__auto___32099 = G__32100;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32095.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.link_to32095.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32095.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32095.cljs$lang$applyTo = (function (seq32096){
var G__32097 = cljs.core.first.call(null,seq32096);
var seq32096__$1 = cljs.core.next.call(null,seq32096);
return sablono.core.link_to32095.cljs$core$IFn$_invoke$arity$variadic(G__32097,seq32096__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32095);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32101 = (function sablono$core$mail_to32101(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32108 = arguments.length;
var i__25924__auto___32109 = (0);
while(true){
if((i__25924__auto___32109 < len__25923__auto___32108)){
args__25930__auto__.push((arguments[i__25924__auto___32109]));

var G__32110 = (i__25924__auto___32109 + (1));
i__25924__auto___32109 = G__32110;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32101.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.mail_to32101.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32104){
var vec__32105 = p__32104;
var content = cljs.core.nth.call(null,vec__32105,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24848__auto__ = content;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32101.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32101.cljs$lang$applyTo = (function (seq32102){
var G__32103 = cljs.core.first.call(null,seq32102);
var seq32102__$1 = cljs.core.next.call(null,seq32102);
return sablono.core.mail_to32101.cljs$core$IFn$_invoke$arity$variadic(G__32103,seq32102__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32101);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32111 = (function sablono$core$unordered_list32111(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25628__auto__ = (function sablono$core$unordered_list32111_$_iter__32116(s__32117){
return (new cljs.core.LazySeq(null,(function (){
var s__32117__$1 = s__32117;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32117__$1);
if(temp__4657__auto__){
var s__32117__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32117__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32117__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32119 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32118 = (0);
while(true){
if((i__32118 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32118);
cljs.core.chunk_append.call(null,b__32119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32120 = (i__32118 + (1));
i__32118 = G__32120;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32119),sablono$core$unordered_list32111_$_iter__32116.call(null,cljs.core.chunk_rest.call(null,s__32117__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32119),null);
}
} else {
var x = cljs.core.first.call(null,s__32117__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32111_$_iter__32116.call(null,cljs.core.rest.call(null,s__32117__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32111);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32121 = (function sablono$core$ordered_list32121(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25628__auto__ = (function sablono$core$ordered_list32121_$_iter__32126(s__32127){
return (new cljs.core.LazySeq(null,(function (){
var s__32127__$1 = s__32127;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32127__$1);
if(temp__4657__auto__){
var s__32127__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32127__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32127__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32129 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32128 = (0);
while(true){
if((i__32128 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32128);
cljs.core.chunk_append.call(null,b__32129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32130 = (i__32128 + (1));
i__32128 = G__32130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32129),sablono$core$ordered_list32121_$_iter__32126.call(null,cljs.core.chunk_rest.call(null,s__32127__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32129),null);
}
} else {
var x = cljs.core.first.call(null,s__32127__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32121_$_iter__32126.call(null,cljs.core.rest.call(null,s__32127__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32121);
/**
 * Create an image element.
 */
sablono.core.image32131 = (function sablono$core$image32131(var_args){
var args32132 = [];
var len__25923__auto___32135 = arguments.length;
var i__25924__auto___32136 = (0);
while(true){
if((i__25924__auto___32136 < len__25923__auto___32135)){
args32132.push((arguments[i__25924__auto___32136]));

var G__32137 = (i__25924__auto___32136 + (1));
i__25924__auto___32136 = G__32137;
continue;
} else {
}
break;
}

var G__32134 = args32132.length;
switch (G__32134) {
case 1:
return sablono.core.image32131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32132.length)].join('')));

}
});

sablono.core.image32131.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32131.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32131.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32131);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32139_SHARP_,p2__32140_SHARP_){
return [cljs.core.str(p1__32139_SHARP_),cljs.core.str("["),cljs.core.str(p2__32140_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32141_SHARP_,p2__32142_SHARP_){
return [cljs.core.str(p1__32141_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32142_SHARP_)].join('');
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
sablono.core.color_field32143 = (function sablono$core$color_field32143(var_args){
var args32144 = [];
var len__25923__auto___32211 = arguments.length;
var i__25924__auto___32212 = (0);
while(true){
if((i__25924__auto___32212 < len__25923__auto___32211)){
args32144.push((arguments[i__25924__auto___32212]));

var G__32213 = (i__25924__auto___32212 + (1));
i__25924__auto___32212 = G__32213;
continue;
} else {
}
break;
}

var G__32146 = args32144.length;
switch (G__32146) {
case 1:
return sablono.core.color_field32143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32144.length)].join('')));

}
});

sablono.core.color_field32143.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.color_field32143.call(null,name__32058__auto__,null);
});

sablono.core.color_field32143.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.color_field32143.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32143);

/**
 * Creates a date input field.
 */
sablono.core.date_field32147 = (function sablono$core$date_field32147(var_args){
var args32148 = [];
var len__25923__auto___32215 = arguments.length;
var i__25924__auto___32216 = (0);
while(true){
if((i__25924__auto___32216 < len__25923__auto___32215)){
args32148.push((arguments[i__25924__auto___32216]));

var G__32217 = (i__25924__auto___32216 + (1));
i__25924__auto___32216 = G__32217;
continue;
} else {
}
break;
}

var G__32150 = args32148.length;
switch (G__32150) {
case 1:
return sablono.core.date_field32147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32148.length)].join('')));

}
});

sablono.core.date_field32147.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.date_field32147.call(null,name__32058__auto__,null);
});

sablono.core.date_field32147.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.date_field32147.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32147);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32151 = (function sablono$core$datetime_field32151(var_args){
var args32152 = [];
var len__25923__auto___32219 = arguments.length;
var i__25924__auto___32220 = (0);
while(true){
if((i__25924__auto___32220 < len__25923__auto___32219)){
args32152.push((arguments[i__25924__auto___32220]));

var G__32221 = (i__25924__auto___32220 + (1));
i__25924__auto___32220 = G__32221;
continue;
} else {
}
break;
}

var G__32154 = args32152.length;
switch (G__32154) {
case 1:
return sablono.core.datetime_field32151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32152.length)].join('')));

}
});

sablono.core.datetime_field32151.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.datetime_field32151.call(null,name__32058__auto__,null);
});

sablono.core.datetime_field32151.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.datetime_field32151.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32151);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32155 = (function sablono$core$datetime_local_field32155(var_args){
var args32156 = [];
var len__25923__auto___32223 = arguments.length;
var i__25924__auto___32224 = (0);
while(true){
if((i__25924__auto___32224 < len__25923__auto___32223)){
args32156.push((arguments[i__25924__auto___32224]));

var G__32225 = (i__25924__auto___32224 + (1));
i__25924__auto___32224 = G__32225;
continue;
} else {
}
break;
}

var G__32158 = args32156.length;
switch (G__32158) {
case 1:
return sablono.core.datetime_local_field32155.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32156.length)].join('')));

}
});

sablono.core.datetime_local_field32155.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.datetime_local_field32155.call(null,name__32058__auto__,null);
});

sablono.core.datetime_local_field32155.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.datetime_local_field32155.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32155);

/**
 * Creates a email input field.
 */
sablono.core.email_field32159 = (function sablono$core$email_field32159(var_args){
var args32160 = [];
var len__25923__auto___32227 = arguments.length;
var i__25924__auto___32228 = (0);
while(true){
if((i__25924__auto___32228 < len__25923__auto___32227)){
args32160.push((arguments[i__25924__auto___32228]));

var G__32229 = (i__25924__auto___32228 + (1));
i__25924__auto___32228 = G__32229;
continue;
} else {
}
break;
}

var G__32162 = args32160.length;
switch (G__32162) {
case 1:
return sablono.core.email_field32159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32160.length)].join('')));

}
});

sablono.core.email_field32159.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.email_field32159.call(null,name__32058__auto__,null);
});

sablono.core.email_field32159.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.email_field32159.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32159);

/**
 * Creates a file input field.
 */
sablono.core.file_field32163 = (function sablono$core$file_field32163(var_args){
var args32164 = [];
var len__25923__auto___32231 = arguments.length;
var i__25924__auto___32232 = (0);
while(true){
if((i__25924__auto___32232 < len__25923__auto___32231)){
args32164.push((arguments[i__25924__auto___32232]));

var G__32233 = (i__25924__auto___32232 + (1));
i__25924__auto___32232 = G__32233;
continue;
} else {
}
break;
}

var G__32166 = args32164.length;
switch (G__32166) {
case 1:
return sablono.core.file_field32163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32164.length)].join('')));

}
});

sablono.core.file_field32163.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.file_field32163.call(null,name__32058__auto__,null);
});

sablono.core.file_field32163.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.file_field32163.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32163);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32167 = (function sablono$core$hidden_field32167(var_args){
var args32168 = [];
var len__25923__auto___32235 = arguments.length;
var i__25924__auto___32236 = (0);
while(true){
if((i__25924__auto___32236 < len__25923__auto___32235)){
args32168.push((arguments[i__25924__auto___32236]));

var G__32237 = (i__25924__auto___32236 + (1));
i__25924__auto___32236 = G__32237;
continue;
} else {
}
break;
}

var G__32170 = args32168.length;
switch (G__32170) {
case 1:
return sablono.core.hidden_field32167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32168.length)].join('')));

}
});

sablono.core.hidden_field32167.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.hidden_field32167.call(null,name__32058__auto__,null);
});

sablono.core.hidden_field32167.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.hidden_field32167.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32167);

/**
 * Creates a month input field.
 */
sablono.core.month_field32171 = (function sablono$core$month_field32171(var_args){
var args32172 = [];
var len__25923__auto___32239 = arguments.length;
var i__25924__auto___32240 = (0);
while(true){
if((i__25924__auto___32240 < len__25923__auto___32239)){
args32172.push((arguments[i__25924__auto___32240]));

var G__32241 = (i__25924__auto___32240 + (1));
i__25924__auto___32240 = G__32241;
continue;
} else {
}
break;
}

var G__32174 = args32172.length;
switch (G__32174) {
case 1:
return sablono.core.month_field32171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32172.length)].join('')));

}
});

sablono.core.month_field32171.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.month_field32171.call(null,name__32058__auto__,null);
});

sablono.core.month_field32171.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.month_field32171.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32171);

/**
 * Creates a number input field.
 */
sablono.core.number_field32175 = (function sablono$core$number_field32175(var_args){
var args32176 = [];
var len__25923__auto___32243 = arguments.length;
var i__25924__auto___32244 = (0);
while(true){
if((i__25924__auto___32244 < len__25923__auto___32243)){
args32176.push((arguments[i__25924__auto___32244]));

var G__32245 = (i__25924__auto___32244 + (1));
i__25924__auto___32244 = G__32245;
continue;
} else {
}
break;
}

var G__32178 = args32176.length;
switch (G__32178) {
case 1:
return sablono.core.number_field32175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32176.length)].join('')));

}
});

sablono.core.number_field32175.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.number_field32175.call(null,name__32058__auto__,null);
});

sablono.core.number_field32175.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.number_field32175.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32175);

/**
 * Creates a password input field.
 */
sablono.core.password_field32179 = (function sablono$core$password_field32179(var_args){
var args32180 = [];
var len__25923__auto___32247 = arguments.length;
var i__25924__auto___32248 = (0);
while(true){
if((i__25924__auto___32248 < len__25923__auto___32247)){
args32180.push((arguments[i__25924__auto___32248]));

var G__32249 = (i__25924__auto___32248 + (1));
i__25924__auto___32248 = G__32249;
continue;
} else {
}
break;
}

var G__32182 = args32180.length;
switch (G__32182) {
case 1:
return sablono.core.password_field32179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32180.length)].join('')));

}
});

sablono.core.password_field32179.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.password_field32179.call(null,name__32058__auto__,null);
});

sablono.core.password_field32179.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.password_field32179.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32179);

/**
 * Creates a range input field.
 */
sablono.core.range_field32183 = (function sablono$core$range_field32183(var_args){
var args32184 = [];
var len__25923__auto___32251 = arguments.length;
var i__25924__auto___32252 = (0);
while(true){
if((i__25924__auto___32252 < len__25923__auto___32251)){
args32184.push((arguments[i__25924__auto___32252]));

var G__32253 = (i__25924__auto___32252 + (1));
i__25924__auto___32252 = G__32253;
continue;
} else {
}
break;
}

var G__32186 = args32184.length;
switch (G__32186) {
case 1:
return sablono.core.range_field32183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32184.length)].join('')));

}
});

sablono.core.range_field32183.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.range_field32183.call(null,name__32058__auto__,null);
});

sablono.core.range_field32183.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.range_field32183.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32183);

/**
 * Creates a search input field.
 */
sablono.core.search_field32187 = (function sablono$core$search_field32187(var_args){
var args32188 = [];
var len__25923__auto___32255 = arguments.length;
var i__25924__auto___32256 = (0);
while(true){
if((i__25924__auto___32256 < len__25923__auto___32255)){
args32188.push((arguments[i__25924__auto___32256]));

var G__32257 = (i__25924__auto___32256 + (1));
i__25924__auto___32256 = G__32257;
continue;
} else {
}
break;
}

var G__32190 = args32188.length;
switch (G__32190) {
case 1:
return sablono.core.search_field32187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32188.length)].join('')));

}
});

sablono.core.search_field32187.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.search_field32187.call(null,name__32058__auto__,null);
});

sablono.core.search_field32187.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.search_field32187.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32187);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32191 = (function sablono$core$tel_field32191(var_args){
var args32192 = [];
var len__25923__auto___32259 = arguments.length;
var i__25924__auto___32260 = (0);
while(true){
if((i__25924__auto___32260 < len__25923__auto___32259)){
args32192.push((arguments[i__25924__auto___32260]));

var G__32261 = (i__25924__auto___32260 + (1));
i__25924__auto___32260 = G__32261;
continue;
} else {
}
break;
}

var G__32194 = args32192.length;
switch (G__32194) {
case 1:
return sablono.core.tel_field32191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32192.length)].join('')));

}
});

sablono.core.tel_field32191.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.tel_field32191.call(null,name__32058__auto__,null);
});

sablono.core.tel_field32191.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.tel_field32191.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32191);

/**
 * Creates a text input field.
 */
sablono.core.text_field32195 = (function sablono$core$text_field32195(var_args){
var args32196 = [];
var len__25923__auto___32263 = arguments.length;
var i__25924__auto___32264 = (0);
while(true){
if((i__25924__auto___32264 < len__25923__auto___32263)){
args32196.push((arguments[i__25924__auto___32264]));

var G__32265 = (i__25924__auto___32264 + (1));
i__25924__auto___32264 = G__32265;
continue;
} else {
}
break;
}

var G__32198 = args32196.length;
switch (G__32198) {
case 1:
return sablono.core.text_field32195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32196.length)].join('')));

}
});

sablono.core.text_field32195.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.text_field32195.call(null,name__32058__auto__,null);
});

sablono.core.text_field32195.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.text_field32195.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32195);

/**
 * Creates a time input field.
 */
sablono.core.time_field32199 = (function sablono$core$time_field32199(var_args){
var args32200 = [];
var len__25923__auto___32267 = arguments.length;
var i__25924__auto___32268 = (0);
while(true){
if((i__25924__auto___32268 < len__25923__auto___32267)){
args32200.push((arguments[i__25924__auto___32268]));

var G__32269 = (i__25924__auto___32268 + (1));
i__25924__auto___32268 = G__32269;
continue;
} else {
}
break;
}

var G__32202 = args32200.length;
switch (G__32202) {
case 1:
return sablono.core.time_field32199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32200.length)].join('')));

}
});

sablono.core.time_field32199.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.time_field32199.call(null,name__32058__auto__,null);
});

sablono.core.time_field32199.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.time_field32199.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32199);

/**
 * Creates a url input field.
 */
sablono.core.url_field32203 = (function sablono$core$url_field32203(var_args){
var args32204 = [];
var len__25923__auto___32271 = arguments.length;
var i__25924__auto___32272 = (0);
while(true){
if((i__25924__auto___32272 < len__25923__auto___32271)){
args32204.push((arguments[i__25924__auto___32272]));

var G__32273 = (i__25924__auto___32272 + (1));
i__25924__auto___32272 = G__32273;
continue;
} else {
}
break;
}

var G__32206 = args32204.length;
switch (G__32206) {
case 1:
return sablono.core.url_field32203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32204.length)].join('')));

}
});

sablono.core.url_field32203.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.url_field32203.call(null,name__32058__auto__,null);
});

sablono.core.url_field32203.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.url_field32203.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32203);

/**
 * Creates a week input field.
 */
sablono.core.week_field32207 = (function sablono$core$week_field32207(var_args){
var args32208 = [];
var len__25923__auto___32275 = arguments.length;
var i__25924__auto___32276 = (0);
while(true){
if((i__25924__auto___32276 < len__25923__auto___32275)){
args32208.push((arguments[i__25924__auto___32276]));

var G__32277 = (i__25924__auto___32276 + (1));
i__25924__auto___32276 = G__32277;
continue;
} else {
}
break;
}

var G__32210 = args32208.length;
switch (G__32210) {
case 1:
return sablono.core.week_field32207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32208.length)].join('')));

}
});

sablono.core.week_field32207.cljs$core$IFn$_invoke$arity$1 = (function (name__32058__auto__){
return sablono.core.week_field32207.call(null,name__32058__auto__,null);
});

sablono.core.week_field32207.cljs$core$IFn$_invoke$arity$2 = (function (name__32058__auto__,value__32059__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32058__auto__,value__32059__auto__);
});

sablono.core.week_field32207.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32207);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32279 = (function sablono$core$check_box32279(var_args){
var args32280 = [];
var len__25923__auto___32283 = arguments.length;
var i__25924__auto___32284 = (0);
while(true){
if((i__25924__auto___32284 < len__25923__auto___32283)){
args32280.push((arguments[i__25924__auto___32284]));

var G__32285 = (i__25924__auto___32284 + (1));
i__25924__auto___32284 = G__32285;
continue;
} else {
}
break;
}

var G__32282 = args32280.length;
switch (G__32282) {
case 1:
return sablono.core.check_box32279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32279.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32280.length)].join('')));

}
});

sablono.core.check_box32279.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32279.call(null,name,null);
});

sablono.core.check_box32279.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32279.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32279.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32279.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32279);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32287 = (function sablono$core$radio_button32287(var_args){
var args32288 = [];
var len__25923__auto___32291 = arguments.length;
var i__25924__auto___32292 = (0);
while(true){
if((i__25924__auto___32292 < len__25923__auto___32291)){
args32288.push((arguments[i__25924__auto___32292]));

var G__32293 = (i__25924__auto___32292 + (1));
i__25924__auto___32292 = G__32293;
continue;
} else {
}
break;
}

var G__32290 = args32288.length;
switch (G__32290) {
case 1:
return sablono.core.radio_button32287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32287.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32288.length)].join('')));

}
});

sablono.core.radio_button32287.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32287.call(null,group,null);
});

sablono.core.radio_button32287.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32287.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32287.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32287.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32287);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32295 = (function sablono$core$select_options32295(coll){
var iter__25628__auto__ = (function sablono$core$select_options32295_$_iter__32312(s__32313){
return (new cljs.core.LazySeq(null,(function (){
var s__32313__$1 = s__32313;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32313__$1);
if(temp__4657__auto__){
var s__32313__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32313__$2)){
var c__25626__auto__ = cljs.core.chunk_first.call(null,s__32313__$2);
var size__25627__auto__ = cljs.core.count.call(null,c__25626__auto__);
var b__32315 = cljs.core.chunk_buffer.call(null,size__25627__auto__);
if((function (){var i__32314 = (0);
while(true){
if((i__32314 < size__25627__auto__)){
var x = cljs.core._nth.call(null,c__25626__auto__,i__32314);
cljs.core.chunk_append.call(null,b__32315,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32322 = x;
var text = cljs.core.nth.call(null,vec__32322,(0),null);
var val = cljs.core.nth.call(null,vec__32322,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32322,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32295.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32328 = (i__32314 + (1));
i__32314 = G__32328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32315),sablono$core$select_options32295_$_iter__32312.call(null,cljs.core.chunk_rest.call(null,s__32313__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32315),null);
}
} else {
var x = cljs.core.first.call(null,s__32313__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32325 = x;
var text = cljs.core.nth.call(null,vec__32325,(0),null);
var val = cljs.core.nth.call(null,vec__32325,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32325,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32295.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32295_$_iter__32312.call(null,cljs.core.rest.call(null,s__32313__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32295);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32329 = (function sablono$core$drop_down32329(var_args){
var args32330 = [];
var len__25923__auto___32333 = arguments.length;
var i__25924__auto___32334 = (0);
while(true){
if((i__25924__auto___32334 < len__25923__auto___32333)){
args32330.push((arguments[i__25924__auto___32334]));

var G__32335 = (i__25924__auto___32334 + (1));
i__25924__auto___32334 = G__32335;
continue;
} else {
}
break;
}

var G__32332 = args32330.length;
switch (G__32332) {
case 2:
return sablono.core.drop_down32329.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32329.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32330.length)].join('')));

}
});

sablono.core.drop_down32329.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32329.call(null,name,options,null);
});

sablono.core.drop_down32329.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32329.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32329);
/**
 * Creates a text area element.
 */
sablono.core.text_area32337 = (function sablono$core$text_area32337(var_args){
var args32338 = [];
var len__25923__auto___32341 = arguments.length;
var i__25924__auto___32342 = (0);
while(true){
if((i__25924__auto___32342 < len__25923__auto___32341)){
args32338.push((arguments[i__25924__auto___32342]));

var G__32343 = (i__25924__auto___32342 + (1));
i__25924__auto___32342 = G__32343;
continue;
} else {
}
break;
}

var G__32340 = args32338.length;
switch (G__32340) {
case 1:
return sablono.core.text_area32337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32338.length)].join('')));

}
});

sablono.core.text_area32337.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32337.call(null,name,null);
});

sablono.core.text_area32337.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24848__auto__ = value;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32337.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32337);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32345 = (function sablono$core$label32345(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32345);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32346 = (function sablono$core$submit_button32346(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32346);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32347 = (function sablono$core$reset_button32347(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32347);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32348 = (function sablono$core$form_to32348(var_args){
var args__25930__auto__ = [];
var len__25923__auto___32355 = arguments.length;
var i__25924__auto___32356 = (0);
while(true){
if((i__25924__auto___32356 < len__25923__auto___32355)){
args__25930__auto__.push((arguments[i__25924__auto___32356]));

var G__32357 = (i__25924__auto___32356 + (1));
i__25924__auto___32356 = G__32357;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32348.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

sablono.core.form_to32348.cljs$core$IFn$_invoke$arity$variadic = (function (p__32351,body){
var vec__32352 = p__32351;
var method = cljs.core.nth.call(null,vec__32352,(0),null);
var action = cljs.core.nth.call(null,vec__32352,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32348.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32348.cljs$lang$applyTo = (function (seq32349){
var G__32350 = cljs.core.first.call(null,seq32349);
var seq32349__$1 = cljs.core.next.call(null,seq32349);
return sablono.core.form_to32348.cljs$core$IFn$_invoke$arity$variadic(G__32350,seq32349__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32348);

//# sourceMappingURL=core.js.map?rel=1533225031854