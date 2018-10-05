// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args33949 = [];
var len__25923__auto___33969 = arguments.length;
var i__25924__auto___33970 = (0);
while(true){
if((i__25924__auto___33970 < len__25923__auto___33969)){
args33949.push((arguments[i__25924__auto___33970]));

var G__33971 = (i__25924__auto___33970 + (1));
i__25924__auto___33970 = G__33971;
continue;
} else {
}
break;
}

var G__33951 = args33949.length;
switch (G__33951) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33949.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__33952 = opts;
var map__33952__$1 = ((((!((map__33952 == null)))?((((map__33952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33952):map__33952);
var ref = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__33954 = cljs.core.count.call(null,refs);
switch (G__33954) {
case (1):
var vec__33955 = refs;
var a = cljs.core.nth.call(null,vec__33955,(0),null);
return ((function (vec__33955,a,G__33954,map__33952,map__33952__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__33955,a,G__33954,map__33952,map__33952__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__33958 = refs;
var a = cljs.core.nth.call(null,vec__33958,(0),null);
var b = cljs.core.nth.call(null,vec__33958,(1),null);
return ((function (vec__33958,a,b,G__33954,map__33952,map__33952__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__33958,a,b,G__33954,map__33952,map__33952__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__33961 = refs;
var a = cljs.core.nth.call(null,vec__33961,(0),null);
var b = cljs.core.nth.call(null,vec__33961,(1),null);
var c = cljs.core.nth.call(null,vec__33961,(2),null);
return ((function (vec__33961,a,b,c,G__33954,map__33952,map__33952__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__33961,a,b,c,G__33954,map__33952,map__33952__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__33954,map__33952,map__33952__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__33954,map__33952,map__33952__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__33964 = ref;
cljs.core.reset_BANG_.call(null,G__33964,recalc.call(null));

return G__33964;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__33952,map__33952__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__33952,map__33952__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__33952,map__33952__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__33952,map__33952__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__33965_33974 = cljs.core.seq.call(null,refs);
var chunk__33966_33975 = null;
var count__33967_33976 = (0);
var i__33968_33977 = (0);
while(true){
if((i__33968_33977 < count__33967_33976)){
var ref_33978__$1 = cljs.core._nth.call(null,chunk__33966_33975,i__33968_33977);
cljs.core.add_watch.call(null,ref_33978__$1,key,watch);

var G__33979 = seq__33965_33974;
var G__33980 = chunk__33966_33975;
var G__33981 = count__33967_33976;
var G__33982 = (i__33968_33977 + (1));
seq__33965_33974 = G__33979;
chunk__33966_33975 = G__33980;
count__33967_33976 = G__33981;
i__33968_33977 = G__33982;
continue;
} else {
var temp__4657__auto___33983 = cljs.core.seq.call(null,seq__33965_33974);
if(temp__4657__auto___33983){
var seq__33965_33984__$1 = temp__4657__auto___33983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33965_33984__$1)){
var c__25659__auto___33985 = cljs.core.chunk_first.call(null,seq__33965_33984__$1);
var G__33986 = cljs.core.chunk_rest.call(null,seq__33965_33984__$1);
var G__33987 = c__25659__auto___33985;
var G__33988 = cljs.core.count.call(null,c__25659__auto___33985);
var G__33989 = (0);
seq__33965_33974 = G__33986;
chunk__33966_33975 = G__33987;
count__33967_33976 = G__33988;
i__33968_33977 = G__33989;
continue;
} else {
var ref_33990__$1 = cljs.core.first.call(null,seq__33965_33984__$1);
cljs.core.add_watch.call(null,ref_33990__$1,key,watch);

var G__33991 = cljs.core.next.call(null,seq__33965_33984__$1);
var G__33992 = null;
var G__33993 = (0);
var G__33994 = (0);
seq__33965_33974 = G__33991;
chunk__33966_33975 = G__33992;
count__33967_33976 = G__33993;
i__33968_33977 = G__33994;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1538702795086