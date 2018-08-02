// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__24848__auto__ = (function (){var and__24836__auto__ = typeof Symbol !== 'undefined';
if(and__24836__auto__){
var and__24836__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__24836__auto____$1){
var and__24836__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__24836__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__24836__auto____$2;
}
} else {
return and__24836__auto____$1;
}
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__33196_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__33196_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args33197 = [];
var len__25923__auto___33200 = arguments.length;
var i__25924__auto___33201 = (0);
while(true){
if((i__25924__auto___33201 < len__25923__auto___33200)){
args33197.push((arguments[i__25924__auto___33201]));

var G__33202 = (i__25924__auto___33201 + (1));
i__25924__auto___33201 = G__33202;
continue;
} else {
}
break;
}

var G__33199 = args33197.length;
switch (G__33199) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33197.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__24836__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__24836__auto__){
var map__33210 = c;
var map__33210__$1 = ((((!((map__33210 == null)))?((((map__33210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33210):map__33210);
var path = cljs.core.get.call(null,map__33210__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__33210__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__24836__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__32404__auto___33216 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__24848__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__32404__auto___33216);
}

var seq__33212_33217 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33213_33218 = null;
var count__33214_33219 = (0);
var i__33215_33220 = (0);
while(true){
if((i__33215_33220 < count__33214_33219)){
var property__32405__auto___33221 = cljs.core._nth.call(null,chunk__33213_33218,i__33215_33220);
if(cljs.core.truth_((base__32404__auto___33216[property__32405__auto___33221]))){
(devcards.core.CodeHighlight.prototype[property__32405__auto___33221] = (base__32404__auto___33216[property__32405__auto___33221]));
} else {
}

var G__33222 = seq__33212_33217;
var G__33223 = chunk__33213_33218;
var G__33224 = count__33214_33219;
var G__33225 = (i__33215_33220 + (1));
seq__33212_33217 = G__33222;
chunk__33213_33218 = G__33223;
count__33214_33219 = G__33224;
i__33215_33220 = G__33225;
continue;
} else {
var temp__4657__auto___33226 = cljs.core.seq.call(null,seq__33212_33217);
if(temp__4657__auto___33226){
var seq__33212_33227__$1 = temp__4657__auto___33226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33212_33227__$1)){
var c__25659__auto___33228 = cljs.core.chunk_first.call(null,seq__33212_33227__$1);
var G__33229 = cljs.core.chunk_rest.call(null,seq__33212_33227__$1);
var G__33230 = c__25659__auto___33228;
var G__33231 = cljs.core.count.call(null,c__25659__auto___33228);
var G__33232 = (0);
seq__33212_33217 = G__33229;
chunk__33213_33218 = G__33230;
count__33214_33219 = G__33231;
i__33215_33220 = G__33232;
continue;
} else {
var property__32405__auto___33233 = cljs.core.first.call(null,seq__33212_33227__$1);
if(cljs.core.truth_((base__32404__auto___33216[property__32405__auto___33233]))){
(devcards.core.CodeHighlight.prototype[property__32405__auto___33233] = (base__32404__auto___33216[property__32405__auto___33233]));
} else {
}

var G__33234 = cljs.core.next.call(null,seq__33212_33227__$1);
var G__33235 = null;
var G__33236 = (0);
var G__33237 = (0);
seq__33212_33217 = G__33234;
chunk__33213_33218 = G__33235;
count__33214_33219 = G__33236;
i__33215_33220 = G__33237;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__25773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25774__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25775__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25776__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25777__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25777__auto__,method_table__25773__auto__,prefer_table__25774__auto__,method_cache__25775__auto__,cached_hierarchy__25776__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__33238){
var map__33239 = p__33238;
var map__33239__$1 = ((((!((map__33239 == null)))?((((map__33239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33239):map__33239);
var content = cljs.core.get.call(null,map__33239__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__33241){
var map__33242 = p__33241;
var map__33242__$1 = ((((!((map__33242 == null)))?((((map__33242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33242):map__33242);
var block = map__33242__$1;
var content = cljs.core.get.call(null,map__33242__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__25930__auto__ = [];
var len__25923__auto___33245 = arguments.length;
var i__25924__auto___33246 = (0);
while(true){
if((i__25924__auto___33246 < len__25923__auto___33245)){
args__25930__auto__.push((arguments[i__25924__auto___33246]));

var G__33247 = (i__25924__auto___33246 + (1));
i__25924__auto___33246 = G__33247;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq33244){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33244));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__33249 = devcards.system.devcards_rendered_card_class;
var G__33249__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__33249),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__33249);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__33249__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__33249__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args33250 = [];
var len__25923__auto___33258 = arguments.length;
var i__25924__auto___33259 = (0);
while(true){
if((i__25924__auto___33259 < len__25923__auto___33258)){
args33250.push((arguments[i__25924__auto___33259]));

var G__33260 = (i__25924__auto___33259 + (1));
i__25924__auto___33259 = G__33260;
continue;
} else {
}
break;
}

var G__33252 = args33250.length;
switch (G__33252) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33250.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__33253 = card;
var map__33253__$1 = ((((!((map__33253 == null)))?((((map__33253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33253):map__33253);
var path = cljs.core.get.call(null,map__33253__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__33253__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__33253,map__33253__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__33253,map__33253__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs33255 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33255))?sablono.interpreter.attributes.call(null,attrs33255):null),((cljs.core.map_QMARK_.call(null,attrs33255))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33255)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__25511__auto__ = (((this$ == null))?null:this$);
var m__25512__auto__ = (devcards.core._devcard_options[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,this$,devcard_opts);
} else {
var m__25512__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__25511__auto__ = (((this$ == null))?null:this$);
var m__25512__auto__ = (devcards.core._devcard[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,this$,devcard_opts);
} else {
var m__25512__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__32404__auto___33267 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs33262 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33262))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs33262)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs33262))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33262)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__32404__auto___33267);
}

var seq__33263_33268 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33264_33269 = null;
var count__33265_33270 = (0);
var i__33266_33271 = (0);
while(true){
if((i__33266_33271 < count__33265_33270)){
var property__32405__auto___33272 = cljs.core._nth.call(null,chunk__33264_33269,i__33266_33271);
if(cljs.core.truth_((base__32404__auto___33267[property__32405__auto___33272]))){
(devcards.core.DontUpdate.prototype[property__32405__auto___33272] = (base__32404__auto___33267[property__32405__auto___33272]));
} else {
}

var G__33273 = seq__33263_33268;
var G__33274 = chunk__33264_33269;
var G__33275 = count__33265_33270;
var G__33276 = (i__33266_33271 + (1));
seq__33263_33268 = G__33273;
chunk__33264_33269 = G__33274;
count__33265_33270 = G__33275;
i__33266_33271 = G__33276;
continue;
} else {
var temp__4657__auto___33277 = cljs.core.seq.call(null,seq__33263_33268);
if(temp__4657__auto___33277){
var seq__33263_33278__$1 = temp__4657__auto___33277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33263_33278__$1)){
var c__25659__auto___33279 = cljs.core.chunk_first.call(null,seq__33263_33278__$1);
var G__33280 = cljs.core.chunk_rest.call(null,seq__33263_33278__$1);
var G__33281 = c__25659__auto___33279;
var G__33282 = cljs.core.count.call(null,c__25659__auto___33279);
var G__33283 = (0);
seq__33263_33268 = G__33280;
chunk__33264_33269 = G__33281;
count__33265_33270 = G__33282;
i__33266_33271 = G__33283;
continue;
} else {
var property__32405__auto___33284 = cljs.core.first.call(null,seq__33263_33278__$1);
if(cljs.core.truth_((base__32404__auto___33267[property__32405__auto___33284]))){
(devcards.core.DontUpdate.prototype[property__32405__auto___33284] = (base__32404__auto___33267[property__32405__auto___33284]));
} else {
}

var G__33285 = cljs.core.next.call(null,seq__33263_33278__$1);
var G__33286 = null;
var G__33287 = (0);
var G__33288 = (0);
seq__33263_33268 = G__33285;
chunk__33264_33269 = G__33286;
count__33265_33270 = G__33287;
i__33266_33271 = G__33288;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__24848__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__25682__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__25682__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__25682__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__25682__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto____$3);
})(),x__25682__auto____$2);
})(),x__25682__auto____$1);
})(),x__25682__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__32404__auto___33295 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__24848__auto__ = (function (){var and__24836__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__24836__auto__)){
return this$.state;
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__24836__auto__ = data_atom;
if(cljs.core.truth_(and__24836__auto__)){
return id;
} else {
return and__24836__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__32404__auto___33295);
}

var seq__33291_33296 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33292_33297 = null;
var count__33293_33298 = (0);
var i__33294_33299 = (0);
while(true){
if((i__33294_33299 < count__33293_33298)){
var property__32405__auto___33300 = cljs.core._nth.call(null,chunk__33292_33297,i__33294_33299);
if(cljs.core.truth_((base__32404__auto___33295[property__32405__auto___33300]))){
(devcards.core.DevcardBase.prototype[property__32405__auto___33300] = (base__32404__auto___33295[property__32405__auto___33300]));
} else {
}

var G__33301 = seq__33291_33296;
var G__33302 = chunk__33292_33297;
var G__33303 = count__33293_33298;
var G__33304 = (i__33294_33299 + (1));
seq__33291_33296 = G__33301;
chunk__33292_33297 = G__33302;
count__33293_33298 = G__33303;
i__33294_33299 = G__33304;
continue;
} else {
var temp__4657__auto___33305 = cljs.core.seq.call(null,seq__33291_33296);
if(temp__4657__auto___33305){
var seq__33291_33306__$1 = temp__4657__auto___33305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33291_33306__$1)){
var c__25659__auto___33307 = cljs.core.chunk_first.call(null,seq__33291_33306__$1);
var G__33308 = cljs.core.chunk_rest.call(null,seq__33291_33306__$1);
var G__33309 = c__25659__auto___33307;
var G__33310 = cljs.core.count.call(null,c__25659__auto___33307);
var G__33311 = (0);
seq__33291_33296 = G__33308;
chunk__33292_33297 = G__33309;
count__33293_33298 = G__33310;
i__33294_33299 = G__33311;
continue;
} else {
var property__32405__auto___33312 = cljs.core.first.call(null,seq__33291_33306__$1);
if(cljs.core.truth_((base__32404__auto___33295[property__32405__auto___33312]))){
(devcards.core.DevcardBase.prototype[property__32405__auto___33312] = (base__32404__auto___33295[property__32405__auto___33312]));
} else {
}

var G__33313 = cljs.core.next.call(null,seq__33291_33306__$1);
var G__33314 = null;
var G__33315 = (0);
var G__33316 = (0);
seq__33291_33296 = G__33313;
chunk__33292_33297 = G__33314;
count__33293_33298 = G__33315;
i__33294_33299 = G__33316;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__32404__auto___33321 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__24836__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__24836__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__24836__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__32404__auto___33321);
}

var seq__33317_33322 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33318_33323 = null;
var count__33319_33324 = (0);
var i__33320_33325 = (0);
while(true){
if((i__33320_33325 < count__33319_33324)){
var property__32405__auto___33326 = cljs.core._nth.call(null,chunk__33318_33323,i__33320_33325);
if(cljs.core.truth_((base__32404__auto___33321[property__32405__auto___33326]))){
(devcards.core.DomComponent.prototype[property__32405__auto___33326] = (base__32404__auto___33321[property__32405__auto___33326]));
} else {
}

var G__33327 = seq__33317_33322;
var G__33328 = chunk__33318_33323;
var G__33329 = count__33319_33324;
var G__33330 = (i__33320_33325 + (1));
seq__33317_33322 = G__33327;
chunk__33318_33323 = G__33328;
count__33319_33324 = G__33329;
i__33320_33325 = G__33330;
continue;
} else {
var temp__4657__auto___33331 = cljs.core.seq.call(null,seq__33317_33322);
if(temp__4657__auto___33331){
var seq__33317_33332__$1 = temp__4657__auto___33331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33317_33332__$1)){
var c__25659__auto___33333 = cljs.core.chunk_first.call(null,seq__33317_33332__$1);
var G__33334 = cljs.core.chunk_rest.call(null,seq__33317_33332__$1);
var G__33335 = c__25659__auto___33333;
var G__33336 = cljs.core.count.call(null,c__25659__auto___33333);
var G__33337 = (0);
seq__33317_33322 = G__33334;
chunk__33318_33323 = G__33335;
count__33319_33324 = G__33336;
i__33320_33325 = G__33337;
continue;
} else {
var property__32405__auto___33338 = cljs.core.first.call(null,seq__33317_33332__$1);
if(cljs.core.truth_((base__32404__auto___33321[property__32405__auto___33338]))){
(devcards.core.DomComponent.prototype[property__32405__auto___33338] = (base__32404__auto___33321[property__32405__auto___33338]));
} else {
}

var G__33339 = cljs.core.next.call(null,seq__33317_33332__$1);
var G__33340 = null;
var G__33341 = (0);
var G__33342 = (0);
seq__33317_33322 = G__33339;
chunk__33318_33323 = G__33340;
count__33319_33324 = G__33341;
i__33320_33325 = G__33342;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24848__auto__ = x === true;
if(or__24848__auto__){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = x === false;
if(or__24848__auto____$1){
return or__24848__auto____$1;
} else {
var or__24848__auto____$2 = (x == null);
if(or__24848__auto____$2){
return or__24848__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24848__auto__ = typeof x === 'string';
if(or__24848__auto__){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = (x == null);
if(or__24848__auto____$1){
return or__24848__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__24848__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__33343_SHARP_){
return !(p1__33343_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__33352 = opts;
var map__33352__$1 = ((((!((map__33352 == null)))?((((map__33352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33352):map__33352);
var name = cljs.core.get.call(null,map__33352__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__33352__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__33352__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__33352__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__24848__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__24848__auto__){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = (options == null);
if(or__24848__auto____$1){
return or__24848__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__24848__auto__ = (initial_data == null);
if(or__24848__auto__){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__24848__auto____$1){
return or__24848__auto____$1;
} else {
var or__24848__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__24848__auto____$2){
return or__24848__auto____$2;
} else {
var or__24848__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__24848__auto____$3){
return or__24848__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__33352,map__33352__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__33344_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__33344_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__33352,map__33352__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs33360 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs33360))?sablono.interpreter.attributes.call(null,attrs33360):null),((cljs.core.map_QMARK_.call(null,attrs33360))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33360)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs33364 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33364))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs33364)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs33364))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33364)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs33365 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33365))?sablono.interpreter.attributes.call(null,attrs33365):null),((cljs.core.map_QMARK_.call(null,attrs33365))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33365)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs33366 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33366))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs33366)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs33366))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33366)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__33367_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__33367_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25470__auto__,k__25471__auto__){
var self__ = this;
var this__25470__auto____$1 = this;
return cljs.core._lookup.call(null,this__25470__auto____$1,k__25471__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25472__auto__,k33369,else__25473__auto__){
var self__ = this;
var this__25472__auto____$1 = this;
var G__33371 = (((k33369 instanceof cljs.core.Keyword))?k33369.fqn:null);
switch (G__33371) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33369,else__25473__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25484__auto__,writer__25485__auto__,opts__25486__auto__){
var self__ = this;
var this__25484__auto____$1 = this;
var pr_pair__25487__auto__ = ((function (this__25484__auto____$1){
return (function (keyval__25488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,cljs.core.pr_writer,""," ","",opts__25486__auto__,keyval__25488__auto__);
});})(this__25484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,pr_pair__25487__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__25486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33368){
var self__ = this;
var G__33368__$1 = this;
return (new cljs.core.RecordIter((0),G__33368__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25468__auto__){
var self__ = this;
var this__25468__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25464__auto__){
var self__ = this;
var this__25464__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25474__auto__){
var self__ = this;
var this__25474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25465__auto__){
var self__ = this;
var this__25465__auto____$1 = this;
var h__25283__auto__ = self__.__hash;
if(!((h__25283__auto__ == null))){
return h__25283__auto__;
} else {
var h__25283__auto____$1 = cljs.core.hash_imap.call(null,this__25465__auto____$1);
self__.__hash = h__25283__auto____$1;

return h__25283__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25466__auto__,other__25467__auto__){
var self__ = this;
var this__25466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24836__auto__ = other__25467__auto__;
if(cljs.core.truth_(and__24836__auto__)){
var and__24836__auto____$1 = (this__25466__auto____$1.constructor === other__25467__auto__.constructor);
if(and__24836__auto____$1){
return cljs.core.equiv_map.call(null,this__25466__auto____$1,other__25467__auto__);
} else {
return and__24836__auto____$1;
}
} else {
return and__24836__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25479__auto__,k__25480__auto__){
var self__ = this;
var this__25479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25479__auto____$1),self__.__meta),k__25480__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25480__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25477__auto__,k__25478__auto__,G__33368){
var self__ = this;
var this__25477__auto____$1 = this;
var pred__33372 = cljs.core.keyword_identical_QMARK_;
var expr__33373 = k__25478__auto__;
if(cljs.core.truth_(pred__33372.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33373))){
return (new devcards.core.IdentiyOptions(G__33368,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25478__auto__,G__33368),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25482__auto__){
var self__ = this;
var this__25482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25469__auto__,G__33368){
var self__ = this;
var this__25469__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__33368,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25475__auto__,entry__25476__auto__){
var self__ = this;
var this__25475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25476__auto__)){
return cljs.core._assoc.call(null,this__25475__auto____$1,cljs.core._nth.call(null,entry__25476__auto__,(0)),cljs.core._nth.call(null,entry__25476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25475__auto____$1,entry__25476__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__25504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__25504__auto__,writer__25505__auto__){
return cljs.core._write.call(null,writer__25505__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__33370){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33370),null,cljs.core.dissoc.call(null,G__33370,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__33376){
var map__33379 = p__33376;
var map__33379__$1 = ((((!((map__33379 == null)))?((((map__33379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33379):map__33379);
var devcard_opts = map__33379__$1;
var options = cljs.core.get.call(null,map__33379__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__33379,map__33379__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__33379,map__33379__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25470__auto__,k__25471__auto__){
var self__ = this;
var this__25470__auto____$1 = this;
return cljs.core._lookup.call(null,this__25470__auto____$1,k__25471__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25472__auto__,k33382,else__25473__auto__){
var self__ = this;
var this__25472__auto____$1 = this;
var G__33384 = (((k33382 instanceof cljs.core.Keyword))?k33382.fqn:null);
switch (G__33384) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33382,else__25473__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25484__auto__,writer__25485__auto__,opts__25486__auto__){
var self__ = this;
var this__25484__auto____$1 = this;
var pr_pair__25487__auto__ = ((function (this__25484__auto____$1){
return (function (keyval__25488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,cljs.core.pr_writer,""," ","",opts__25486__auto__,keyval__25488__auto__);
});})(this__25484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,pr_pair__25487__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__25486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33381){
var self__ = this;
var G__33381__$1 = this;
return (new cljs.core.RecordIter((0),G__33381__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25468__auto__){
var self__ = this;
var this__25468__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25464__auto__){
var self__ = this;
var this__25464__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25474__auto__){
var self__ = this;
var this__25474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25465__auto__){
var self__ = this;
var this__25465__auto____$1 = this;
var h__25283__auto__ = self__.__hash;
if(!((h__25283__auto__ == null))){
return h__25283__auto__;
} else {
var h__25283__auto____$1 = cljs.core.hash_imap.call(null,this__25465__auto____$1);
self__.__hash = h__25283__auto____$1;

return h__25283__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25466__auto__,other__25467__auto__){
var self__ = this;
var this__25466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24836__auto__ = other__25467__auto__;
if(cljs.core.truth_(and__24836__auto__)){
var and__24836__auto____$1 = (this__25466__auto____$1.constructor === other__25467__auto__.constructor);
if(and__24836__auto____$1){
return cljs.core.equiv_map.call(null,this__25466__auto____$1,other__25467__auto__);
} else {
return and__24836__auto____$1;
}
} else {
return and__24836__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25479__auto__,k__25480__auto__){
var self__ = this;
var this__25479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25479__auto____$1),self__.__meta),k__25480__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25480__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25477__auto__,k__25478__auto__,G__33381){
var self__ = this;
var this__25477__auto____$1 = this;
var pred__33385 = cljs.core.keyword_identical_QMARK_;
var expr__33386 = k__25478__auto__;
if(cljs.core.truth_(pred__33385.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33386))){
return (new devcards.core.AtomLikeOptions(G__33381,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25478__auto__,G__33381),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25482__auto__){
var self__ = this;
var this__25482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25469__auto__,G__33381){
var self__ = this;
var this__25469__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__33381,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25475__auto__,entry__25476__auto__){
var self__ = this;
var this__25475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25476__auto__)){
return cljs.core._assoc.call(null,this__25475__auto____$1,cljs.core._nth.call(null,entry__25476__auto__,(0)),cljs.core._nth.call(null,entry__25476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25475__auto____$1,entry__25476__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__25504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__25504__auto__,writer__25505__auto__){
return cljs.core._write.call(null,writer__25505__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__33383){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33383),null,cljs.core.dissoc.call(null,G__33383,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25470__auto__,k__25471__auto__){
var self__ = this;
var this__25470__auto____$1 = this;
return cljs.core._lookup.call(null,this__25470__auto____$1,k__25471__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25472__auto__,k33392,else__25473__auto__){
var self__ = this;
var this__25472__auto____$1 = this;
var G__33394 = (((k33392 instanceof cljs.core.Keyword))?k33392.fqn:null);
switch (G__33394) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33392,else__25473__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25484__auto__,writer__25485__auto__,opts__25486__auto__){
var self__ = this;
var this__25484__auto____$1 = this;
var pr_pair__25487__auto__ = ((function (this__25484__auto____$1){
return (function (keyval__25488__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,cljs.core.pr_writer,""," ","",opts__25486__auto__,keyval__25488__auto__);
});})(this__25484__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25485__auto__,pr_pair__25487__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__25486__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33391){
var self__ = this;
var G__33391__$1 = this;
return (new cljs.core.RecordIter((0),G__33391__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25468__auto__){
var self__ = this;
var this__25468__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25464__auto__){
var self__ = this;
var this__25464__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25474__auto__){
var self__ = this;
var this__25474__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25465__auto__){
var self__ = this;
var this__25465__auto____$1 = this;
var h__25283__auto__ = self__.__hash;
if(!((h__25283__auto__ == null))){
return h__25283__auto__;
} else {
var h__25283__auto____$1 = cljs.core.hash_imap.call(null,this__25465__auto____$1);
self__.__hash = h__25283__auto____$1;

return h__25283__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25466__auto__,other__25467__auto__){
var self__ = this;
var this__25466__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24836__auto__ = other__25467__auto__;
if(cljs.core.truth_(and__24836__auto__)){
var and__24836__auto____$1 = (this__25466__auto____$1.constructor === other__25467__auto__.constructor);
if(and__24836__auto____$1){
return cljs.core.equiv_map.call(null,this__25466__auto____$1,other__25467__auto__);
} else {
return and__24836__auto____$1;
}
} else {
return and__24836__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25479__auto__,k__25480__auto__){
var self__ = this;
var this__25479__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25480__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25479__auto____$1),self__.__meta),k__25480__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25480__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25477__auto__,k__25478__auto__,G__33391){
var self__ = this;
var this__25477__auto____$1 = this;
var pred__33395 = cljs.core.keyword_identical_QMARK_;
var expr__33396 = k__25478__auto__;
if(cljs.core.truth_(pred__33395.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__33396))){
return (new devcards.core.EdnLikeOptions(G__33391,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25478__auto__,G__33391),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25482__auto__){
var self__ = this;
var this__25482__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25469__auto__,G__33391){
var self__ = this;
var this__25469__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__33391,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25475__auto__,entry__25476__auto__){
var self__ = this;
var this__25475__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25476__auto__)){
return cljs.core._assoc.call(null,this__25475__auto____$1,cljs.core._nth.call(null,entry__25476__auto__,(0)),cljs.core._nth.call(null,entry__25476__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25475__auto____$1,entry__25476__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__25504__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__25504__auto__,writer__25505__auto__){
return cljs.core._write.call(null,writer__25505__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__33393){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__33393),null,cljs.core.dissoc.call(null,G__33393,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__24836__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__24836__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__24836__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__33410 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__33410 == null))){
if((false) || (G__33410.devcards$core$IDevcard$)){
return true;
} else {
if((!G__33410.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__33410);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__33410);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__33413 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__33413__$1 = ((((!((map__33413 == null)))?((((map__33413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33413):map__33413);
var history = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__33417 = cljs.core.deref.call(null,history_atom);
var map__33417__$1 = ((((!((map__33417 == null)))?((((map__33417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33417):map__33417);
var history = cljs.core.get.call(null,map__33417__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33417__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__33421 = cljs.core.deref.call(null,history_atom);
var map__33421__$1 = ((((!((map__33421 == null)))?((((map__33421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33421):map__33421);
var history = cljs.core.get.call(null,map__33421__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__33421__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__33425 = cljs.core.deref.call(null,history_atom);
var map__33425__$1 = ((((!((map__33425 == null)))?((((map__33425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33425):map__33425);
var history = cljs.core.get.call(null,map__33425__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__25682__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__24836__auto__ = data_atom;
if(cljs.core.truth_(and__24836__auto__)){
return id;
} else {
return and__24836__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__33427){
var map__33428 = p__33427;
var map__33428__$1 = ((((!((map__33428 == null)))?((((map__33428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33428):map__33428);
var ha = map__33428__$1;
var pointer = cljs.core.get.call(null,map__33428__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__33428__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__33428__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__24848__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__24848__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_33443 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_33443;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__25773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25774__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25775__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25776__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25777__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25777__auto__,method_table__25773__auto__,prefer_table__25774__auto__,method_cache__25775__auto__,cached_hierarchy__25776__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs33444 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33444))?sablono.interpreter.attributes.call(null,attrs33444):null),((cljs.core.map_QMARK_.call(null,attrs33444))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33444)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__33445,body){
var map__33449 = p__33445;
var map__33449__$1 = ((((!((map__33449 == null)))?((((map__33449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33449):map__33449);
var message = cljs.core.get.call(null,map__33449__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs33451 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs33451))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs33451)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs33451))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33451)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__33452){
var map__33460 = p__33452;
var map__33460__$1 = ((((!((map__33460 == null)))?((((map__33460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33460):map__33460);
var m = map__33460__$1;
var expected = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__33460__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs33462 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33462))?sablono.interpreter.attributes.call(null,attrs33462):null),((cljs.core.map_QMARK_.call(null,attrs33462))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33462),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs33469 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs33469))?sablono.interpreter.attributes.call(null,attrs33469):null),((cljs.core.map_QMARK_.call(null,attrs33469))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33469)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs33470 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33470))?sablono.interpreter.attributes.call(null,attrs33470):null),((cljs.core.map_QMARK_.call(null,attrs33470))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33470)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__33471){
var map__33472 = p__33471;
var map__33472__$1 = ((((!((map__33472 == null)))?((((map__33472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33472):map__33472);
var testing_contexts = cljs.core.get.call(null,map__33472__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs33474 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__33472,map__33472__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__33472,map__33472__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__25682__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33474))?sablono.interpreter.attributes.call(null,attrs33474):null),((cljs.core.map_QMARK_.call(null,attrs33474))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33474)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs33483 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__33484,p__33485){
var map__33486 = p__33484;
var map__33486__$1 = ((((!((map__33486 == null)))?((((map__33486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33486):map__33486);
var last_context = cljs.core.get.call(null,map__33486__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__33486__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__33487 = p__33485;
var i = cljs.core.nth.call(null,vec__33487,(0),null);
var t = cljs.core.nth.call(null,vec__33487,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__25682__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33483))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs33483)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs33483))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33483)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__33503){
var map__33504 = p__33503;
var map__33504__$1 = ((((!((map__33504 == null)))?((((map__33504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33504):map__33504);
var type = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__33502 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__33502__$1 = ((((!((map__33502 == null)))?((((map__33502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33502):map__33502);
var fail = cljs.core.get.call(null,map__33502__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__33502__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__33502__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1){
return (function (p__33507){
var map__33508 = p__33507;
var map__33508__$1 = ((((!((map__33508 == null)))?((((map__33508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33508):map__33508);
var type = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1){
return (function (p__33510){
var map__33511 = p__33510;
var map__33511__$1 = ((((!((map__33511 == null)))?((((map__33511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33511):map__33511);
var type = cljs.core.get.call(null,map__33511__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__33502,map__33502__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__24848__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__){
return (function (state_33601){
var state_val_33602 = (state_33601[(1)]);
if((state_val_33602 === (7))){
var state_33601__$1 = state_33601;
var statearr_33603_33652 = state_33601__$1;
(statearr_33603_33652[(2)] = false);

(statearr_33603_33652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (20))){
var inst_33540 = (state_33601[(7)]);
var inst_33559 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33540);
var state_33601__$1 = state_33601;
var statearr_33604_33653 = state_33601__$1;
(statearr_33604_33653[(2)] = inst_33559);

(statearr_33604_33653[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (27))){
var inst_33564 = (state_33601[(8)]);
var inst_33576 = (state_33601[(9)]);
var inst_33580 = inst_33564.call(null,inst_33576);
var state_33601__$1 = state_33601;
var statearr_33605_33654 = state_33601__$1;
(statearr_33605_33654[(2)] = inst_33580);

(statearr_33605_33654[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (1))){
var state_33601__$1 = state_33601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33601__$1,(2),devcards.core.test_channel);
} else {
if((state_val_33602 === (24))){
var state_33601__$1 = state_33601;
var statearr_33606_33655 = state_33601__$1;
(statearr_33606_33655[(2)] = null);

(statearr_33606_33655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (4))){
var state_33601__$1 = state_33601;
var statearr_33607_33656 = state_33601__$1;
(statearr_33607_33656[(2)] = false);

(statearr_33607_33656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (15))){
var state_33601__$1 = state_33601;
var statearr_33608_33657 = state_33601__$1;
(statearr_33608_33657[(2)] = false);

(statearr_33608_33657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (21))){
var inst_33540 = (state_33601[(7)]);
var state_33601__$1 = state_33601;
var statearr_33609_33658 = state_33601__$1;
(statearr_33609_33658[(2)] = inst_33540);

(statearr_33609_33658[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (13))){
var inst_33599 = (state_33601[(2)]);
var state_33601__$1 = state_33601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33601__$1,inst_33599);
} else {
if((state_val_33602 === (22))){
var inst_33563 = (state_33601[(10)]);
var inst_33562 = (state_33601[(2)]);
var inst_33563__$1 = cljs.core.get.call(null,inst_33562,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_33564 = cljs.core.get.call(null,inst_33562,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_33601__$1 = (function (){var statearr_33610 = state_33601;
(statearr_33610[(10)] = inst_33563__$1);

(statearr_33610[(8)] = inst_33564);

return statearr_33610;
})();
if(cljs.core.truth_(inst_33563__$1)){
var statearr_33611_33659 = state_33601__$1;
(statearr_33611_33659[(1)] = (23));

} else {
var statearr_33612_33660 = state_33601__$1;
(statearr_33612_33660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (29))){
var inst_33590 = (state_33601[(2)]);
var inst_33591 = cljs.test.clear_env_BANG_.call(null);
var state_33601__$1 = (function (){var statearr_33613 = state_33601;
(statearr_33613[(11)] = inst_33591);

(statearr_33613[(12)] = inst_33590);

return statearr_33613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33601__$1,(30),devcards.core.test_channel);
} else {
if((state_val_33602 === (6))){
var state_33601__$1 = state_33601;
var statearr_33614_33661 = state_33601__$1;
(statearr_33614_33661[(2)] = true);

(statearr_33614_33661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (28))){
var inst_33564 = (state_33601[(8)]);
var inst_33582 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_33583 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_33584 = cljs.core.PersistentHashMap.fromArrays(inst_33582,inst_33583);
var inst_33585 = devcards.core.collect_test.call(null,inst_33584);
var inst_33586 = cljs.test.get_current_env.call(null);
var inst_33587 = cljs.core.assoc.call(null,inst_33586,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_33588 = inst_33564.call(null,inst_33587);
var state_33601__$1 = (function (){var statearr_33615 = state_33601;
(statearr_33615[(13)] = inst_33585);

return statearr_33615;
})();
var statearr_33616_33662 = state_33601__$1;
(statearr_33616_33662[(2)] = inst_33588);

(statearr_33616_33662[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (25))){
var inst_33597 = (state_33601[(2)]);
var state_33601__$1 = state_33601;
var statearr_33617_33663 = state_33601__$1;
(statearr_33617_33663[(2)] = inst_33597);

(statearr_33617_33663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (17))){
var state_33601__$1 = state_33601;
var statearr_33618_33664 = state_33601__$1;
(statearr_33618_33664[(2)] = true);

(statearr_33618_33664[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (3))){
var inst_33517 = (state_33601[(14)]);
var inst_33522 = inst_33517.cljs$lang$protocol_mask$partition0$;
var inst_33523 = (inst_33522 & (64));
var inst_33524 = inst_33517.cljs$core$ISeq$;
var inst_33525 = (inst_33523) || (inst_33524);
var state_33601__$1 = state_33601;
if(cljs.core.truth_(inst_33525)){
var statearr_33619_33665 = state_33601__$1;
(statearr_33619_33665[(1)] = (6));

} else {
var statearr_33620_33666 = state_33601__$1;
(statearr_33620_33666[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (12))){
var inst_33540 = (state_33601[(7)]);
var inst_33544 = (inst_33540 == null);
var inst_33545 = cljs.core.not.call(null,inst_33544);
var state_33601__$1 = state_33601;
if(inst_33545){
var statearr_33621_33667 = state_33601__$1;
(statearr_33621_33667[(1)] = (14));

} else {
var statearr_33622_33668 = state_33601__$1;
(statearr_33622_33668[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (2))){
var inst_33517 = (state_33601[(14)]);
var inst_33517__$1 = (state_33601[(2)]);
var inst_33519 = (inst_33517__$1 == null);
var inst_33520 = cljs.core.not.call(null,inst_33519);
var state_33601__$1 = (function (){var statearr_33623 = state_33601;
(statearr_33623[(14)] = inst_33517__$1);

return statearr_33623;
})();
if(inst_33520){
var statearr_33624_33669 = state_33601__$1;
(statearr_33624_33669[(1)] = (3));

} else {
var statearr_33625_33670 = state_33601__$1;
(statearr_33625_33670[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (23))){
var inst_33563 = (state_33601[(10)]);
var inst_33569 = (state_33601[(15)]);
var inst_33569__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_33570 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33571 = devcards.core.run_card_tests.call(null,inst_33563);
var inst_33572 = [inst_33571,inst_33569__$1];
var inst_33573 = (new cljs.core.PersistentVector(null,2,(5),inst_33570,inst_33572,null));
var state_33601__$1 = (function (){var statearr_33626 = state_33601;
(statearr_33626[(15)] = inst_33569__$1);

return statearr_33626;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33601__$1,(26),inst_33573);
} else {
if((state_val_33602 === (19))){
var inst_33554 = (state_33601[(2)]);
var state_33601__$1 = state_33601;
var statearr_33627_33671 = state_33601__$1;
(statearr_33627_33671[(2)] = inst_33554);

(statearr_33627_33671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (11))){
var inst_33517 = (state_33601[(14)]);
var inst_33537 = (state_33601[(2)]);
var inst_33538 = cljs.core.get.call(null,inst_33537,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_33539 = cljs.core.get.call(null,inst_33537,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_33540 = inst_33517;
var state_33601__$1 = (function (){var statearr_33628 = state_33601;
(statearr_33628[(16)] = inst_33539);

(statearr_33628[(17)] = inst_33538);

(statearr_33628[(7)] = inst_33540);

return statearr_33628;
})();
var statearr_33629_33672 = state_33601__$1;
(statearr_33629_33672[(2)] = null);

(statearr_33629_33672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (9))){
var inst_33517 = (state_33601[(14)]);
var inst_33534 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33517);
var state_33601__$1 = state_33601;
var statearr_33630_33673 = state_33601__$1;
(statearr_33630_33673[(2)] = inst_33534);

(statearr_33630_33673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (5))){
var inst_33532 = (state_33601[(2)]);
var state_33601__$1 = state_33601;
if(cljs.core.truth_(inst_33532)){
var statearr_33631_33674 = state_33601__$1;
(statearr_33631_33674[(1)] = (9));

} else {
var statearr_33632_33675 = state_33601__$1;
(statearr_33632_33675[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (14))){
var inst_33540 = (state_33601[(7)]);
var inst_33547 = inst_33540.cljs$lang$protocol_mask$partition0$;
var inst_33548 = (inst_33547 & (64));
var inst_33549 = inst_33540.cljs$core$ISeq$;
var inst_33550 = (inst_33548) || (inst_33549);
var state_33601__$1 = state_33601;
if(cljs.core.truth_(inst_33550)){
var statearr_33633_33676 = state_33601__$1;
(statearr_33633_33676[(1)] = (17));

} else {
var statearr_33634_33677 = state_33601__$1;
(statearr_33634_33677[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (26))){
var inst_33569 = (state_33601[(15)]);
var inst_33575 = (state_33601[(2)]);
var inst_33576 = cljs.core.nth.call(null,inst_33575,(0),null);
var inst_33577 = cljs.core.nth.call(null,inst_33575,(1),null);
var inst_33578 = cljs.core.not_EQ_.call(null,inst_33577,inst_33569);
var state_33601__$1 = (function (){var statearr_33635 = state_33601;
(statearr_33635[(9)] = inst_33576);

return statearr_33635;
})();
if(inst_33578){
var statearr_33636_33678 = state_33601__$1;
(statearr_33636_33678[(1)] = (27));

} else {
var statearr_33637_33679 = state_33601__$1;
(statearr_33637_33679[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (16))){
var inst_33557 = (state_33601[(2)]);
var state_33601__$1 = state_33601;
if(cljs.core.truth_(inst_33557)){
var statearr_33638_33680 = state_33601__$1;
(statearr_33638_33680[(1)] = (20));

} else {
var statearr_33639_33681 = state_33601__$1;
(statearr_33639_33681[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (30))){
var inst_33593 = (state_33601[(2)]);
var inst_33540 = inst_33593;
var state_33601__$1 = (function (){var statearr_33640 = state_33601;
(statearr_33640[(7)] = inst_33540);

return statearr_33640;
})();
var statearr_33641_33682 = state_33601__$1;
(statearr_33641_33682[(2)] = null);

(statearr_33641_33682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (10))){
var inst_33517 = (state_33601[(14)]);
var state_33601__$1 = state_33601;
var statearr_33642_33683 = state_33601__$1;
(statearr_33642_33683[(2)] = inst_33517);

(statearr_33642_33683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (18))){
var state_33601__$1 = state_33601;
var statearr_33643_33684 = state_33601__$1;
(statearr_33643_33684[(2)] = false);

(statearr_33643_33684[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (8))){
var inst_33529 = (state_33601[(2)]);
var state_33601__$1 = state_33601;
var statearr_33644_33685 = state_33601__$1;
(statearr_33644_33685[(2)] = inst_33529);

(statearr_33644_33685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28805__auto__))
;
return ((function (switch__28693__auto__,c__28805__auto__){
return (function() {
var devcards$core$state_machine__28694__auto__ = null;
var devcards$core$state_machine__28694__auto____0 = (function (){
var statearr_33648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33648[(0)] = devcards$core$state_machine__28694__auto__);

(statearr_33648[(1)] = (1));

return statearr_33648;
});
var devcards$core$state_machine__28694__auto____1 = (function (state_33601){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_33601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e33649){if((e33649 instanceof Object)){
var ex__28697__auto__ = e33649;
var statearr_33650_33686 = state_33601;
(statearr_33650_33686[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33687 = state_33601;
state_33601 = G__33687;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
devcards$core$state_machine__28694__auto__ = function(state_33601){
switch(arguments.length){
case 0:
return devcards$core$state_machine__28694__auto____0.call(this);
case 1:
return devcards$core$state_machine__28694__auto____1.call(this,state_33601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__28694__auto____0;
devcards$core$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__28694__auto____1;
return devcards$core$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__))
})();
var state__28807__auto__ = (function (){var statearr_33651 = f__28806__auto__.call(null);
(statearr_33651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_33651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__))
);

return c__28805__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__32404__auto___33692 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__32404__auto___33692);
}

var seq__33688_33693 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__33689_33694 = null;
var count__33690_33695 = (0);
var i__33691_33696 = (0);
while(true){
if((i__33691_33696 < count__33690_33695)){
var property__32405__auto___33697 = cljs.core._nth.call(null,chunk__33689_33694,i__33691_33696);
if(cljs.core.truth_((base__32404__auto___33692[property__32405__auto___33697]))){
(devcards.core.TestDevcard.prototype[property__32405__auto___33697] = (base__32404__auto___33692[property__32405__auto___33697]));
} else {
}

var G__33698 = seq__33688_33693;
var G__33699 = chunk__33689_33694;
var G__33700 = count__33690_33695;
var G__33701 = (i__33691_33696 + (1));
seq__33688_33693 = G__33698;
chunk__33689_33694 = G__33699;
count__33690_33695 = G__33700;
i__33691_33696 = G__33701;
continue;
} else {
var temp__4657__auto___33702 = cljs.core.seq.call(null,seq__33688_33693);
if(temp__4657__auto___33702){
var seq__33688_33703__$1 = temp__4657__auto___33702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33688_33703__$1)){
var c__25659__auto___33704 = cljs.core.chunk_first.call(null,seq__33688_33703__$1);
var G__33705 = cljs.core.chunk_rest.call(null,seq__33688_33703__$1);
var G__33706 = c__25659__auto___33704;
var G__33707 = cljs.core.count.call(null,c__25659__auto___33704);
var G__33708 = (0);
seq__33688_33693 = G__33705;
chunk__33689_33694 = G__33706;
count__33690_33695 = G__33707;
i__33691_33696 = G__33708;
continue;
} else {
var property__32405__auto___33709 = cljs.core.first.call(null,seq__33688_33703__$1);
if(cljs.core.truth_((base__32404__auto___33692[property__32405__auto___33709]))){
(devcards.core.TestDevcard.prototype[property__32405__auto___33709] = (base__32404__auto___33692[property__32405__auto___33709]));
} else {
}

var G__33710 = cljs.core.next.call(null,seq__33688_33703__$1);
var G__33711 = null;
var G__33712 = (0);
var G__33713 = (0);
seq__33688_33693 = G__33710;
chunk__33689_33694 = G__33711;
count__33690_33695 = G__33712;
i__33691_33696 = G__33713;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__25930__auto__ = [];
var len__25923__auto___33718 = arguments.length;
var i__25924__auto___33719 = (0);
while(true){
if((i__25924__auto___33719 < len__25923__auto___33718)){
args__25930__auto__.push((arguments[i__25924__auto___33719]));

var G__33720 = (i__25924__auto___33719 + (1));
i__25924__auto___33719 = G__33720;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core33715 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core33715 = (function (test_thunks,meta33716){
this.test_thunks = test_thunks;
this.meta33716 = meta33716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core33715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33717,meta33716__$1){
var self__ = this;
var _33717__$1 = this;
return (new devcards.core.t_devcards$core33715(self__.test_thunks,meta33716__$1));
});

devcards.core.t_devcards$core33715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33717){
var self__ = this;
var _33717__$1 = this;
return self__.meta33716;
});

devcards.core.t_devcards$core33715.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core33715.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core33715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta33716","meta33716",693089128,null)], null);
});

devcards.core.t_devcards$core33715.cljs$lang$type = true;

devcards.core.t_devcards$core33715.cljs$lang$ctorStr = "devcards.core/t_devcards$core33715";

devcards.core.t_devcards$core33715.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"devcards.core/t_devcards$core33715");
});

devcards.core.__GT_t_devcards$core33715 = (function devcards$core$__GT_t_devcards$core33715(test_thunks__$1,meta33716){
return (new devcards.core.t_devcards$core33715(test_thunks__$1,meta33716));
});

}

return (new devcards.core.t_devcards$core33715(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq33714){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33714));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs33722 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33722))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs33722)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs33722))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33722)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs33724 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33724))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs33724)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs33724))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33724)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__){
return (function (state_33754){
var state_val_33755 = (state_33754[(1)]);
if((state_val_33755 === (1))){
var inst_33745 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_33754__$1 = state_33754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33754__$1,(2),inst_33745);
} else {
if((state_val_33755 === (2))){
var inst_33747 = (state_33754[(2)]);
var inst_33748 = cljs.core.async.timeout.call(null,(100));
var state_33754__$1 = (function (){var statearr_33756 = state_33754;
(statearr_33756[(7)] = inst_33747);

return statearr_33756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33754__$1,(3),inst_33748);
} else {
if((state_val_33755 === (3))){
var inst_33750 = (state_33754[(2)]);
var inst_33751 = (function (){return ((function (inst_33750,state_val_33755,c__28805__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_33750,state_val_33755,c__28805__auto__))
})();
var inst_33752 = setTimeout(inst_33751,(0));
var state_33754__$1 = (function (){var statearr_33757 = state_33754;
(statearr_33757[(8)] = inst_33750);

return statearr_33757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33754__$1,inst_33752);
} else {
return null;
}
}
}
});})(c__28805__auto__))
;
return ((function (switch__28693__auto__,c__28805__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__28694__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__28694__auto____0 = (function (){
var statearr_33761 = [null,null,null,null,null,null,null,null,null];
(statearr_33761[(0)] = devcards$core$mount_namespace_$_state_machine__28694__auto__);

(statearr_33761[(1)] = (1));

return statearr_33761;
});
var devcards$core$mount_namespace_$_state_machine__28694__auto____1 = (function (state_33754){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_33754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e33762){if((e33762 instanceof Object)){
var ex__28697__auto__ = e33762;
var statearr_33763_33765 = state_33754;
(statearr_33763_33765[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33766 = state_33754;
state_33754 = G__33766;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__28694__auto__ = function(state_33754){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__28694__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__28694__auto____1.call(this,state_33754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__28694__auto____0;
devcards$core$mount_namespace_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__28694__auto____1;
return devcards$core$mount_namespace_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__))
})();
var state__28807__auto__ = (function (){var statearr_33764 = f__28806__auto__.call(null);
(statearr_33764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__))
);

return c__28805__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1533225033470