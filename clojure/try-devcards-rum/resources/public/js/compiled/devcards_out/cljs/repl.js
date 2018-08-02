// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37139){
var map__37164 = p__37139;
var map__37164__$1 = ((((!((map__37164 == null)))?((((map__37164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37164):map__37164);
var m = map__37164__$1;
var n = cljs.core.get.call(null,map__37164__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37164__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37166_37188 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37167_37189 = null;
var count__37168_37190 = (0);
var i__37169_37191 = (0);
while(true){
if((i__37169_37191 < count__37168_37190)){
var f_37192 = cljs.core._nth.call(null,chunk__37167_37189,i__37169_37191);
cljs.core.println.call(null,"  ",f_37192);

var G__37193 = seq__37166_37188;
var G__37194 = chunk__37167_37189;
var G__37195 = count__37168_37190;
var G__37196 = (i__37169_37191 + (1));
seq__37166_37188 = G__37193;
chunk__37167_37189 = G__37194;
count__37168_37190 = G__37195;
i__37169_37191 = G__37196;
continue;
} else {
var temp__4657__auto___37197 = cljs.core.seq.call(null,seq__37166_37188);
if(temp__4657__auto___37197){
var seq__37166_37198__$1 = temp__4657__auto___37197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37166_37198__$1)){
var c__25659__auto___37199 = cljs.core.chunk_first.call(null,seq__37166_37198__$1);
var G__37200 = cljs.core.chunk_rest.call(null,seq__37166_37198__$1);
var G__37201 = c__25659__auto___37199;
var G__37202 = cljs.core.count.call(null,c__25659__auto___37199);
var G__37203 = (0);
seq__37166_37188 = G__37200;
chunk__37167_37189 = G__37201;
count__37168_37190 = G__37202;
i__37169_37191 = G__37203;
continue;
} else {
var f_37204 = cljs.core.first.call(null,seq__37166_37198__$1);
cljs.core.println.call(null,"  ",f_37204);

var G__37205 = cljs.core.next.call(null,seq__37166_37198__$1);
var G__37206 = null;
var G__37207 = (0);
var G__37208 = (0);
seq__37166_37188 = G__37205;
chunk__37167_37189 = G__37206;
count__37168_37190 = G__37207;
i__37169_37191 = G__37208;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37209 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37209);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37209)))?cljs.core.second.call(null,arglists_37209):arglists_37209));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37170_37210 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37171_37211 = null;
var count__37172_37212 = (0);
var i__37173_37213 = (0);
while(true){
if((i__37173_37213 < count__37172_37212)){
var vec__37174_37214 = cljs.core._nth.call(null,chunk__37171_37211,i__37173_37213);
var name_37215 = cljs.core.nth.call(null,vec__37174_37214,(0),null);
var map__37177_37216 = cljs.core.nth.call(null,vec__37174_37214,(1),null);
var map__37177_37217__$1 = ((((!((map__37177_37216 == null)))?((((map__37177_37216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37177_37216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37177_37216):map__37177_37216);
var doc_37218 = cljs.core.get.call(null,map__37177_37217__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37219 = cljs.core.get.call(null,map__37177_37217__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37215);

cljs.core.println.call(null," ",arglists_37219);

if(cljs.core.truth_(doc_37218)){
cljs.core.println.call(null," ",doc_37218);
} else {
}

var G__37220 = seq__37170_37210;
var G__37221 = chunk__37171_37211;
var G__37222 = count__37172_37212;
var G__37223 = (i__37173_37213 + (1));
seq__37170_37210 = G__37220;
chunk__37171_37211 = G__37221;
count__37172_37212 = G__37222;
i__37173_37213 = G__37223;
continue;
} else {
var temp__4657__auto___37224 = cljs.core.seq.call(null,seq__37170_37210);
if(temp__4657__auto___37224){
var seq__37170_37225__$1 = temp__4657__auto___37224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37170_37225__$1)){
var c__25659__auto___37226 = cljs.core.chunk_first.call(null,seq__37170_37225__$1);
var G__37227 = cljs.core.chunk_rest.call(null,seq__37170_37225__$1);
var G__37228 = c__25659__auto___37226;
var G__37229 = cljs.core.count.call(null,c__25659__auto___37226);
var G__37230 = (0);
seq__37170_37210 = G__37227;
chunk__37171_37211 = G__37228;
count__37172_37212 = G__37229;
i__37173_37213 = G__37230;
continue;
} else {
var vec__37179_37231 = cljs.core.first.call(null,seq__37170_37225__$1);
var name_37232 = cljs.core.nth.call(null,vec__37179_37231,(0),null);
var map__37182_37233 = cljs.core.nth.call(null,vec__37179_37231,(1),null);
var map__37182_37234__$1 = ((((!((map__37182_37233 == null)))?((((map__37182_37233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37182_37233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37182_37233):map__37182_37233);
var doc_37235 = cljs.core.get.call(null,map__37182_37234__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37236 = cljs.core.get.call(null,map__37182_37234__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37232);

cljs.core.println.call(null," ",arglists_37236);

if(cljs.core.truth_(doc_37235)){
cljs.core.println.call(null," ",doc_37235);
} else {
}

var G__37237 = cljs.core.next.call(null,seq__37170_37225__$1);
var G__37238 = null;
var G__37239 = (0);
var G__37240 = (0);
seq__37170_37210 = G__37237;
chunk__37171_37211 = G__37238;
count__37172_37212 = G__37239;
i__37173_37213 = G__37240;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37184 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37185 = null;
var count__37186 = (0);
var i__37187 = (0);
while(true){
if((i__37187 < count__37186)){
var role = cljs.core._nth.call(null,chunk__37185,i__37187);
var temp__4657__auto___37241__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37241__$1)){
var spec_37242 = temp__4657__auto___37241__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37242));
} else {
}

var G__37243 = seq__37184;
var G__37244 = chunk__37185;
var G__37245 = count__37186;
var G__37246 = (i__37187 + (1));
seq__37184 = G__37243;
chunk__37185 = G__37244;
count__37186 = G__37245;
i__37187 = G__37246;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37184);
if(temp__4657__auto____$1){
var seq__37184__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37184__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37184__$1);
var G__37247 = cljs.core.chunk_rest.call(null,seq__37184__$1);
var G__37248 = c__25659__auto__;
var G__37249 = cljs.core.count.call(null,c__25659__auto__);
var G__37250 = (0);
seq__37184 = G__37247;
chunk__37185 = G__37248;
count__37186 = G__37249;
i__37187 = G__37250;
continue;
} else {
var role = cljs.core.first.call(null,seq__37184__$1);
var temp__4657__auto___37251__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37251__$2)){
var spec_37252 = temp__4657__auto___37251__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37252));
} else {
}

var G__37253 = cljs.core.next.call(null,seq__37184__$1);
var G__37254 = null;
var G__37255 = (0);
var G__37256 = (0);
seq__37184 = G__37253;
chunk__37185 = G__37254;
count__37186 = G__37255;
i__37187 = G__37256;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1533225037069