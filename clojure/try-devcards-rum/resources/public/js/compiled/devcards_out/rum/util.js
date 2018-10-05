// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__25930__auto__ = [];
var len__25923__auto___34000 = arguments.length;
var i__25924__auto___34001 = (0);
while(true){
if((i__25924__auto___34001 < len__25923__auto___34000)){
args__25930__auto__.push((arguments[i__25924__auto___34001]));

var G__34002 = (i__25924__auto___34001 + (1));
i__25924__auto___34001 = G__34002;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((2) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25931__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq33997){
var G__33998 = cljs.core.first.call(null,seq33997);
var seq33997__$1 = cljs.core.next.call(null,seq33997);
var G__33999 = cljs.core.first.call(null,seq33997__$1);
var seq33997__$2 = cljs.core.next.call(null,seq33997__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__33998,G__33999,seq33997__$2);
});


//# sourceMappingURL=util.js.map?rel=1538702795106