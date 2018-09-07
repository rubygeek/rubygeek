// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args33771 = [];
var len__25923__auto___33791 = arguments.length;
var i__25924__auto___33792 = (0);
while(true){
if((i__25924__auto___33792 < len__25923__auto___33791)){
args33771.push((arguments[i__25924__auto___33792]));

var G__33793 = (i__25924__auto___33792 + (1));
i__25924__auto___33792 = G__33793;
continue;
} else {
}
break;
}

var G__33773 = args33771.length;
switch (G__33773) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33771.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__33774 = opts;
var map__33774__$1 = ((((!((map__33774 == null)))?((((map__33774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33774):map__33774);
var ref = cljs.core.get.call(null,map__33774__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__33774__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__33776 = cljs.core.count.call(null,refs);
switch (G__33776) {
case (1):
var vec__33777 = refs;
var a = cljs.core.nth.call(null,vec__33777,(0),null);
return ((function (vec__33777,a,G__33776,map__33774,map__33774__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__33777,a,G__33776,map__33774,map__33774__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__33780 = refs;
var a = cljs.core.nth.call(null,vec__33780,(0),null);
var b = cljs.core.nth.call(null,vec__33780,(1),null);
return ((function (vec__33780,a,b,G__33776,map__33774,map__33774__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__33780,a,b,G__33776,map__33774,map__33774__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__33783 = refs;
var a = cljs.core.nth.call(null,vec__33783,(0),null);
var b = cljs.core.nth.call(null,vec__33783,(1),null);
var c = cljs.core.nth.call(null,vec__33783,(2),null);
return ((function (vec__33783,a,b,c,G__33776,map__33774,map__33774__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__33783,a,b,c,G__33776,map__33774,map__33774__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__33776,map__33774,map__33774__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__33776,map__33774,map__33774__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__33786 = ref;
cljs.core.reset_BANG_.call(null,G__33786,recalc.call(null));

return G__33786;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__33774,map__33774__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__33774,map__33774__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__33774,map__33774__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__33774,map__33774__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__33787_33796 = cljs.core.seq.call(null,refs);
var chunk__33788_33797 = null;
var count__33789_33798 = (0);
var i__33790_33799 = (0);
while(true){
if((i__33790_33799 < count__33789_33798)){
var ref_33800__$1 = cljs.core._nth.call(null,chunk__33788_33797,i__33790_33799);
cljs.core.add_watch.call(null,ref_33800__$1,key,watch);

var G__33801 = seq__33787_33796;
var G__33802 = chunk__33788_33797;
var G__33803 = count__33789_33798;
var G__33804 = (i__33790_33799 + (1));
seq__33787_33796 = G__33801;
chunk__33788_33797 = G__33802;
count__33789_33798 = G__33803;
i__33790_33799 = G__33804;
continue;
} else {
var temp__4657__auto___33805 = cljs.core.seq.call(null,seq__33787_33796);
if(temp__4657__auto___33805){
var seq__33787_33806__$1 = temp__4657__auto___33805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33787_33806__$1)){
var c__25659__auto___33807 = cljs.core.chunk_first.call(null,seq__33787_33806__$1);
var G__33808 = cljs.core.chunk_rest.call(null,seq__33787_33806__$1);
var G__33809 = c__25659__auto___33807;
var G__33810 = cljs.core.count.call(null,c__25659__auto___33807);
var G__33811 = (0);
seq__33787_33796 = G__33808;
chunk__33788_33797 = G__33809;
count__33789_33798 = G__33810;
i__33790_33799 = G__33811;
continue;
} else {
var ref_33812__$1 = cljs.core.first.call(null,seq__33787_33806__$1);
cljs.core.add_watch.call(null,ref_33812__$1,key,watch);

var G__33813 = cljs.core.next.call(null,seq__33787_33806__$1);
var G__33814 = null;
var G__33815 = (0);
var G__33816 = (0);
seq__33787_33796 = G__33813;
chunk__33788_33797 = G__33814;
count__33789_33798 = G__33815;
i__33790_33799 = G__33816;
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


//# sourceMappingURL=derived_atom.js.map?rel=1533225033627