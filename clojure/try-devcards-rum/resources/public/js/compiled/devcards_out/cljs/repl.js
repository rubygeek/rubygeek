// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37163){
var map__37188 = p__37163;
var map__37188__$1 = ((((!((map__37188 == null)))?((((map__37188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37188):map__37188);
var m = map__37188__$1;
var n = cljs.core.get.call(null,map__37188__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37188__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__37190_37212 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37191_37213 = null;
var count__37192_37214 = (0);
var i__37193_37215 = (0);
while(true){
if((i__37193_37215 < count__37192_37214)){
var f_37216 = cljs.core._nth.call(null,chunk__37191_37213,i__37193_37215);
cljs.core.println.call(null,"  ",f_37216);

var G__37217 = seq__37190_37212;
var G__37218 = chunk__37191_37213;
var G__37219 = count__37192_37214;
var G__37220 = (i__37193_37215 + (1));
seq__37190_37212 = G__37217;
chunk__37191_37213 = G__37218;
count__37192_37214 = G__37219;
i__37193_37215 = G__37220;
continue;
} else {
var temp__4657__auto___37221 = cljs.core.seq.call(null,seq__37190_37212);
if(temp__4657__auto___37221){
var seq__37190_37222__$1 = temp__4657__auto___37221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37190_37222__$1)){
var c__25659__auto___37223 = cljs.core.chunk_first.call(null,seq__37190_37222__$1);
var G__37224 = cljs.core.chunk_rest.call(null,seq__37190_37222__$1);
var G__37225 = c__25659__auto___37223;
var G__37226 = cljs.core.count.call(null,c__25659__auto___37223);
var G__37227 = (0);
seq__37190_37212 = G__37224;
chunk__37191_37213 = G__37225;
count__37192_37214 = G__37226;
i__37193_37215 = G__37227;
continue;
} else {
var f_37228 = cljs.core.first.call(null,seq__37190_37222__$1);
cljs.core.println.call(null,"  ",f_37228);

var G__37229 = cljs.core.next.call(null,seq__37190_37222__$1);
var G__37230 = null;
var G__37231 = (0);
var G__37232 = (0);
seq__37190_37212 = G__37229;
chunk__37191_37213 = G__37230;
count__37192_37214 = G__37231;
i__37193_37215 = G__37232;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37233 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24848__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37233);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37233)))?cljs.core.second.call(null,arglists_37233):arglists_37233));
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
var seq__37194_37234 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37195_37235 = null;
var count__37196_37236 = (0);
var i__37197_37237 = (0);
while(true){
if((i__37197_37237 < count__37196_37236)){
var vec__37198_37238 = cljs.core._nth.call(null,chunk__37195_37235,i__37197_37237);
var name_37239 = cljs.core.nth.call(null,vec__37198_37238,(0),null);
var map__37201_37240 = cljs.core.nth.call(null,vec__37198_37238,(1),null);
var map__37201_37241__$1 = ((((!((map__37201_37240 == null)))?((((map__37201_37240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37201_37240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37201_37240):map__37201_37240);
var doc_37242 = cljs.core.get.call(null,map__37201_37241__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37243 = cljs.core.get.call(null,map__37201_37241__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37239);

cljs.core.println.call(null," ",arglists_37243);

if(cljs.core.truth_(doc_37242)){
cljs.core.println.call(null," ",doc_37242);
} else {
}

var G__37244 = seq__37194_37234;
var G__37245 = chunk__37195_37235;
var G__37246 = count__37196_37236;
var G__37247 = (i__37197_37237 + (1));
seq__37194_37234 = G__37244;
chunk__37195_37235 = G__37245;
count__37196_37236 = G__37246;
i__37197_37237 = G__37247;
continue;
} else {
var temp__4657__auto___37248 = cljs.core.seq.call(null,seq__37194_37234);
if(temp__4657__auto___37248){
var seq__37194_37249__$1 = temp__4657__auto___37248;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37194_37249__$1)){
var c__25659__auto___37250 = cljs.core.chunk_first.call(null,seq__37194_37249__$1);
var G__37251 = cljs.core.chunk_rest.call(null,seq__37194_37249__$1);
var G__37252 = c__25659__auto___37250;
var G__37253 = cljs.core.count.call(null,c__25659__auto___37250);
var G__37254 = (0);
seq__37194_37234 = G__37251;
chunk__37195_37235 = G__37252;
count__37196_37236 = G__37253;
i__37197_37237 = G__37254;
continue;
} else {
var vec__37203_37255 = cljs.core.first.call(null,seq__37194_37249__$1);
var name_37256 = cljs.core.nth.call(null,vec__37203_37255,(0),null);
var map__37206_37257 = cljs.core.nth.call(null,vec__37203_37255,(1),null);
var map__37206_37258__$1 = ((((!((map__37206_37257 == null)))?((((map__37206_37257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37206_37257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37206_37257):map__37206_37257);
var doc_37259 = cljs.core.get.call(null,map__37206_37258__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37260 = cljs.core.get.call(null,map__37206_37258__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37256);

cljs.core.println.call(null," ",arglists_37260);

if(cljs.core.truth_(doc_37259)){
cljs.core.println.call(null," ",doc_37259);
} else {
}

var G__37261 = cljs.core.next.call(null,seq__37194_37249__$1);
var G__37262 = null;
var G__37263 = (0);
var G__37264 = (0);
seq__37194_37234 = G__37261;
chunk__37195_37235 = G__37262;
count__37196_37236 = G__37263;
i__37197_37237 = G__37264;
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

var seq__37208 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37209 = null;
var count__37210 = (0);
var i__37211 = (0);
while(true){
if((i__37211 < count__37210)){
var role = cljs.core._nth.call(null,chunk__37209,i__37211);
var temp__4657__auto___37265__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37265__$1)){
var spec_37266 = temp__4657__auto___37265__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37266));
} else {
}

var G__37267 = seq__37208;
var G__37268 = chunk__37209;
var G__37269 = count__37210;
var G__37270 = (i__37211 + (1));
seq__37208 = G__37267;
chunk__37209 = G__37268;
count__37210 = G__37269;
i__37211 = G__37270;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37208);
if(temp__4657__auto____$1){
var seq__37208__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37208__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__37208__$1);
var G__37271 = cljs.core.chunk_rest.call(null,seq__37208__$1);
var G__37272 = c__25659__auto__;
var G__37273 = cljs.core.count.call(null,c__25659__auto__);
var G__37274 = (0);
seq__37208 = G__37271;
chunk__37209 = G__37272;
count__37210 = G__37273;
i__37211 = G__37274;
continue;
} else {
var role = cljs.core.first.call(null,seq__37208__$1);
var temp__4657__auto___37275__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37275__$2)){
var spec_37276 = temp__4657__auto___37275__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37276));
} else {
}

var G__37277 = cljs.core.next.call(null,seq__37208__$1);
var G__37278 = null;
var G__37279 = (0);
var G__37280 = (0);
seq__37208 = G__37277;
chunk__37209 = G__37278;
count__37210 = G__37279;
i__37211 = G__37280;
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

//# sourceMappingURL=repl.js.map?rel=1538702798118