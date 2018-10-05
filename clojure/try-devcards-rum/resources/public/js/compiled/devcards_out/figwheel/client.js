// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37593 = [];
var len__25923__auto___37596 = arguments.length;
var i__25924__auto___37597 = (0);
while(true){
if((i__25924__auto___37597 < len__25923__auto___37596)){
args37593.push((arguments[i__25924__auto___37597]));

var G__37598 = (i__25924__auto___37597 + (1));
i__25924__auto___37597 = G__37598;
continue;
} else {
}
break;
}

var G__37595 = args37593.length;
switch (G__37595) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37593.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___37601 = arguments.length;
var i__25924__auto___37602 = (0);
while(true){
if((i__25924__auto___37602 < len__25923__auto___37601)){
args__25930__auto__.push((arguments[i__25924__auto___37602]));

var G__37603 = (i__25924__auto___37602 + (1));
i__25924__auto___37602 = G__37603;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37600){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37600));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___37605 = arguments.length;
var i__25924__auto___37606 = (0);
while(true){
if((i__25924__auto___37606 < len__25923__auto___37605)){
args__25930__auto__.push((arguments[i__25924__auto___37606]));

var G__37607 = (i__25924__auto___37606 + (1));
i__25924__auto___37606 = G__37607;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37604){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37604));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37608){
var map__37611 = p__37608;
var map__37611__$1 = ((((!((map__37611 == null)))?((((map__37611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37611):map__37611);
var message = cljs.core.get.call(null,map__37611__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37611__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24848__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24836__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24836__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24836__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28844__auto___37773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___37773,ch){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___37773,ch){
return (function (state_37742){
var state_val_37743 = (state_37742[(1)]);
if((state_val_37743 === (7))){
var inst_37738 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
var statearr_37744_37774 = state_37742__$1;
(statearr_37744_37774[(2)] = inst_37738);

(statearr_37744_37774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (1))){
var state_37742__$1 = state_37742;
var statearr_37745_37775 = state_37742__$1;
(statearr_37745_37775[(2)] = null);

(statearr_37745_37775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (4))){
var inst_37695 = (state_37742[(7)]);
var inst_37695__$1 = (state_37742[(2)]);
var state_37742__$1 = (function (){var statearr_37746 = state_37742;
(statearr_37746[(7)] = inst_37695__$1);

return statearr_37746;
})();
if(cljs.core.truth_(inst_37695__$1)){
var statearr_37747_37776 = state_37742__$1;
(statearr_37747_37776[(1)] = (5));

} else {
var statearr_37748_37777 = state_37742__$1;
(statearr_37748_37777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (15))){
var inst_37702 = (state_37742[(8)]);
var inst_37717 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37702);
var inst_37718 = cljs.core.first.call(null,inst_37717);
var inst_37719 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37718);
var inst_37720 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37719)].join('');
var inst_37721 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37720);
var state_37742__$1 = state_37742;
var statearr_37749_37778 = state_37742__$1;
(statearr_37749_37778[(2)] = inst_37721);

(statearr_37749_37778[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (13))){
var inst_37726 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
var statearr_37750_37779 = state_37742__$1;
(statearr_37750_37779[(2)] = inst_37726);

(statearr_37750_37779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (6))){
var state_37742__$1 = state_37742;
var statearr_37751_37780 = state_37742__$1;
(statearr_37751_37780[(2)] = null);

(statearr_37751_37780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (17))){
var inst_37724 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
var statearr_37752_37781 = state_37742__$1;
(statearr_37752_37781[(2)] = inst_37724);

(statearr_37752_37781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (3))){
var inst_37740 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37742__$1,inst_37740);
} else {
if((state_val_37743 === (12))){
var inst_37701 = (state_37742[(9)]);
var inst_37715 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37701,opts);
var state_37742__$1 = state_37742;
if(cljs.core.truth_(inst_37715)){
var statearr_37753_37782 = state_37742__$1;
(statearr_37753_37782[(1)] = (15));

} else {
var statearr_37754_37783 = state_37742__$1;
(statearr_37754_37783[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (2))){
var state_37742__$1 = state_37742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37742__$1,(4),ch);
} else {
if((state_val_37743 === (11))){
var inst_37702 = (state_37742[(8)]);
var inst_37707 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37708 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37702);
var inst_37709 = cljs.core.async.timeout.call(null,(1000));
var inst_37710 = [inst_37708,inst_37709];
var inst_37711 = (new cljs.core.PersistentVector(null,2,(5),inst_37707,inst_37710,null));
var state_37742__$1 = state_37742;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37742__$1,(14),inst_37711);
} else {
if((state_val_37743 === (9))){
var inst_37702 = (state_37742[(8)]);
var inst_37728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37729 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37702);
var inst_37730 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37729);
var inst_37731 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37730)].join('');
var inst_37732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37731);
var state_37742__$1 = (function (){var statearr_37755 = state_37742;
(statearr_37755[(10)] = inst_37728);

return statearr_37755;
})();
var statearr_37756_37784 = state_37742__$1;
(statearr_37756_37784[(2)] = inst_37732);

(statearr_37756_37784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (5))){
var inst_37695 = (state_37742[(7)]);
var inst_37697 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37698 = (new cljs.core.PersistentArrayMap(null,2,inst_37697,null));
var inst_37699 = (new cljs.core.PersistentHashSet(null,inst_37698,null));
var inst_37700 = figwheel.client.focus_msgs.call(null,inst_37699,inst_37695);
var inst_37701 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37700);
var inst_37702 = cljs.core.first.call(null,inst_37700);
var inst_37703 = figwheel.client.autoload_QMARK_.call(null);
var state_37742__$1 = (function (){var statearr_37757 = state_37742;
(statearr_37757[(8)] = inst_37702);

(statearr_37757[(9)] = inst_37701);

return statearr_37757;
})();
if(cljs.core.truth_(inst_37703)){
var statearr_37758_37785 = state_37742__$1;
(statearr_37758_37785[(1)] = (8));

} else {
var statearr_37759_37786 = state_37742__$1;
(statearr_37759_37786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (14))){
var inst_37713 = (state_37742[(2)]);
var state_37742__$1 = state_37742;
var statearr_37760_37787 = state_37742__$1;
(statearr_37760_37787[(2)] = inst_37713);

(statearr_37760_37787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (16))){
var state_37742__$1 = state_37742;
var statearr_37761_37788 = state_37742__$1;
(statearr_37761_37788[(2)] = null);

(statearr_37761_37788[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (10))){
var inst_37734 = (state_37742[(2)]);
var state_37742__$1 = (function (){var statearr_37762 = state_37742;
(statearr_37762[(11)] = inst_37734);

return statearr_37762;
})();
var statearr_37763_37789 = state_37742__$1;
(statearr_37763_37789[(2)] = null);

(statearr_37763_37789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37743 === (8))){
var inst_37701 = (state_37742[(9)]);
var inst_37705 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37701,opts);
var state_37742__$1 = state_37742;
if(cljs.core.truth_(inst_37705)){
var statearr_37764_37790 = state_37742__$1;
(statearr_37764_37790[(1)] = (11));

} else {
var statearr_37765_37791 = state_37742__$1;
(statearr_37765_37791[(1)] = (12));

}

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
});})(c__28844__auto___37773,ch))
;
return ((function (switch__28732__auto__,c__28844__auto___37773,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28733__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28733__auto____0 = (function (){
var statearr_37769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37769[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28733__auto__);

(statearr_37769[(1)] = (1));

return statearr_37769;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28733__auto____1 = (function (state_37742){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_37742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e37770){if((e37770 instanceof Object)){
var ex__28736__auto__ = e37770;
var statearr_37771_37792 = state_37742;
(statearr_37771_37792[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37793 = state_37742;
state_37742 = G__37793;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28733__auto__ = function(state_37742){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28733__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28733__auto____1.call(this,state_37742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28733__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28733__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___37773,ch))
})();
var state__28846__auto__ = (function (){var statearr_37772 = f__28845__auto__.call(null);
(statearr_37772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___37773);

return statearr_37772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___37773,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37794_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37794_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37797 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37797){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37796){if((e37796 instanceof Error)){
var e = e37796;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37797], null));
} else {
var e = e37796;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37797))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37798){
var map__37807 = p__37798;
var map__37807__$1 = ((((!((map__37807 == null)))?((((map__37807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37807):map__37807);
var opts = map__37807__$1;
var build_id = cljs.core.get.call(null,map__37807__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37807,map__37807__$1,opts,build_id){
return (function (p__37809){
var vec__37810 = p__37809;
var seq__37811 = cljs.core.seq.call(null,vec__37810);
var first__37812 = cljs.core.first.call(null,seq__37811);
var seq__37811__$1 = cljs.core.next.call(null,seq__37811);
var map__37813 = first__37812;
var map__37813__$1 = ((((!((map__37813 == null)))?((((map__37813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37813):map__37813);
var msg = map__37813__$1;
var msg_name = cljs.core.get.call(null,map__37813__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37811__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37810,seq__37811,first__37812,seq__37811__$1,map__37813,map__37813__$1,msg,msg_name,_,map__37807,map__37807__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37810,seq__37811,first__37812,seq__37811__$1,map__37813,map__37813__$1,msg,msg_name,_,map__37807,map__37807__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37807,map__37807__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37821){
var vec__37822 = p__37821;
var seq__37823 = cljs.core.seq.call(null,vec__37822);
var first__37824 = cljs.core.first.call(null,seq__37823);
var seq__37823__$1 = cljs.core.next.call(null,seq__37823);
var map__37825 = first__37824;
var map__37825__$1 = ((((!((map__37825 == null)))?((((map__37825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37825):map__37825);
var msg = map__37825__$1;
var msg_name = cljs.core.get.call(null,map__37825__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37823__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37827){
var map__37839 = p__37827;
var map__37839__$1 = ((((!((map__37839 == null)))?((((map__37839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37839):map__37839);
var on_compile_warning = cljs.core.get.call(null,map__37839__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37839__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37839,map__37839__$1,on_compile_warning,on_compile_fail){
return (function (p__37841){
var vec__37842 = p__37841;
var seq__37843 = cljs.core.seq.call(null,vec__37842);
var first__37844 = cljs.core.first.call(null,seq__37843);
var seq__37843__$1 = cljs.core.next.call(null,seq__37843);
var map__37845 = first__37844;
var map__37845__$1 = ((((!((map__37845 == null)))?((((map__37845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37845):map__37845);
var msg = map__37845__$1;
var msg_name = cljs.core.get.call(null,map__37845__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37843__$1;
var pred__37847 = cljs.core._EQ_;
var expr__37848 = msg_name;
if(cljs.core.truth_(pred__37847.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37848))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37847.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37848))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37839,map__37839__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto__,msg_hist,msg_names,msg){
return (function (state_38076){
var state_val_38077 = (state_38076[(1)]);
if((state_val_38077 === (7))){
var inst_37996 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37996)){
var statearr_38078_38128 = state_38076__$1;
(statearr_38078_38128[(1)] = (8));

} else {
var statearr_38079_38129 = state_38076__$1;
(statearr_38079_38129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (20))){
var inst_38070 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38080_38130 = state_38076__$1;
(statearr_38080_38130[(2)] = inst_38070);

(statearr_38080_38130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (27))){
var inst_38066 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38081_38131 = state_38076__$1;
(statearr_38081_38131[(2)] = inst_38066);

(statearr_38081_38131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (1))){
var inst_37989 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_37989)){
var statearr_38082_38132 = state_38076__$1;
(statearr_38082_38132[(1)] = (2));

} else {
var statearr_38083_38133 = state_38076__$1;
(statearr_38083_38133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (24))){
var inst_38068 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38084_38134 = state_38076__$1;
(statearr_38084_38134[(2)] = inst_38068);

(statearr_38084_38134[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (4))){
var inst_38074 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38076__$1,inst_38074);
} else {
if((state_val_38077 === (15))){
var inst_38072 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38085_38135 = state_38076__$1;
(statearr_38085_38135[(2)] = inst_38072);

(statearr_38085_38135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (21))){
var inst_38025 = (state_38076[(2)]);
var inst_38026 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38027 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38026);
var state_38076__$1 = (function (){var statearr_38086 = state_38076;
(statearr_38086[(7)] = inst_38025);

return statearr_38086;
})();
var statearr_38087_38136 = state_38076__$1;
(statearr_38087_38136[(2)] = inst_38027);

(statearr_38087_38136[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (31))){
var inst_38055 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38055)){
var statearr_38088_38137 = state_38076__$1;
(statearr_38088_38137[(1)] = (34));

} else {
var statearr_38089_38138 = state_38076__$1;
(statearr_38089_38138[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (32))){
var inst_38064 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38090_38139 = state_38076__$1;
(statearr_38090_38139[(2)] = inst_38064);

(statearr_38090_38139[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (33))){
var inst_38051 = (state_38076[(2)]);
var inst_38052 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38053 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38052);
var state_38076__$1 = (function (){var statearr_38091 = state_38076;
(statearr_38091[(8)] = inst_38051);

return statearr_38091;
})();
var statearr_38092_38140 = state_38076__$1;
(statearr_38092_38140[(2)] = inst_38053);

(statearr_38092_38140[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (13))){
var inst_38010 = figwheel.client.heads_up.clear.call(null);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(16),inst_38010);
} else {
if((state_val_38077 === (22))){
var inst_38031 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38032 = figwheel.client.heads_up.append_warning_message.call(null,inst_38031);
var state_38076__$1 = state_38076;
var statearr_38093_38141 = state_38076__$1;
(statearr_38093_38141[(2)] = inst_38032);

(statearr_38093_38141[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (36))){
var inst_38062 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38094_38142 = state_38076__$1;
(statearr_38094_38142[(2)] = inst_38062);

(statearr_38094_38142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (29))){
var inst_38042 = (state_38076[(2)]);
var inst_38043 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38044 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38043);
var state_38076__$1 = (function (){var statearr_38095 = state_38076;
(statearr_38095[(9)] = inst_38042);

return statearr_38095;
})();
var statearr_38096_38143 = state_38076__$1;
(statearr_38096_38143[(2)] = inst_38044);

(statearr_38096_38143[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (6))){
var inst_37991 = (state_38076[(10)]);
var state_38076__$1 = state_38076;
var statearr_38097_38144 = state_38076__$1;
(statearr_38097_38144[(2)] = inst_37991);

(statearr_38097_38144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (28))){
var inst_38038 = (state_38076[(2)]);
var inst_38039 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38040 = figwheel.client.heads_up.display_warning.call(null,inst_38039);
var state_38076__$1 = (function (){var statearr_38098 = state_38076;
(statearr_38098[(11)] = inst_38038);

return statearr_38098;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(29),inst_38040);
} else {
if((state_val_38077 === (25))){
var inst_38036 = figwheel.client.heads_up.clear.call(null);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(28),inst_38036);
} else {
if((state_val_38077 === (34))){
var inst_38057 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(37),inst_38057);
} else {
if((state_val_38077 === (17))){
var inst_38016 = (state_38076[(2)]);
var inst_38017 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38018 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38017);
var state_38076__$1 = (function (){var statearr_38099 = state_38076;
(statearr_38099[(12)] = inst_38016);

return statearr_38099;
})();
var statearr_38100_38145 = state_38076__$1;
(statearr_38100_38145[(2)] = inst_38018);

(statearr_38100_38145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (3))){
var inst_38008 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38008)){
var statearr_38101_38146 = state_38076__$1;
(statearr_38101_38146[(1)] = (13));

} else {
var statearr_38102_38147 = state_38076__$1;
(statearr_38102_38147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (12))){
var inst_38004 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38103_38148 = state_38076__$1;
(statearr_38103_38148[(2)] = inst_38004);

(statearr_38103_38148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (2))){
var inst_37991 = (state_38076[(10)]);
var inst_37991__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38076__$1 = (function (){var statearr_38104 = state_38076;
(statearr_38104[(10)] = inst_37991__$1);

return statearr_38104;
})();
if(cljs.core.truth_(inst_37991__$1)){
var statearr_38105_38149 = state_38076__$1;
(statearr_38105_38149[(1)] = (5));

} else {
var statearr_38106_38150 = state_38076__$1;
(statearr_38106_38150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (23))){
var inst_38034 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38034)){
var statearr_38107_38151 = state_38076__$1;
(statearr_38107_38151[(1)] = (25));

} else {
var statearr_38108_38152 = state_38076__$1;
(statearr_38108_38152[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (35))){
var state_38076__$1 = state_38076;
var statearr_38109_38153 = state_38076__$1;
(statearr_38109_38153[(2)] = null);

(statearr_38109_38153[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (19))){
var inst_38029 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38029)){
var statearr_38110_38154 = state_38076__$1;
(statearr_38110_38154[(1)] = (22));

} else {
var statearr_38111_38155 = state_38076__$1;
(statearr_38111_38155[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (11))){
var inst_38000 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38112_38156 = state_38076__$1;
(statearr_38112_38156[(2)] = inst_38000);

(statearr_38112_38156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (9))){
var inst_38002 = figwheel.client.heads_up.clear.call(null);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(12),inst_38002);
} else {
if((state_val_38077 === (5))){
var inst_37993 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38076__$1 = state_38076;
var statearr_38113_38157 = state_38076__$1;
(statearr_38113_38157[(2)] = inst_37993);

(statearr_38113_38157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (14))){
var inst_38020 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38020)){
var statearr_38114_38158 = state_38076__$1;
(statearr_38114_38158[(1)] = (18));

} else {
var statearr_38115_38159 = state_38076__$1;
(statearr_38115_38159[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (26))){
var inst_38046 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38076__$1 = state_38076;
if(cljs.core.truth_(inst_38046)){
var statearr_38116_38160 = state_38076__$1;
(statearr_38116_38160[(1)] = (30));

} else {
var statearr_38117_38161 = state_38076__$1;
(statearr_38117_38161[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (16))){
var inst_38012 = (state_38076[(2)]);
var inst_38013 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38014 = figwheel.client.heads_up.display_exception.call(null,inst_38013);
var state_38076__$1 = (function (){var statearr_38118 = state_38076;
(statearr_38118[(13)] = inst_38012);

return statearr_38118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(17),inst_38014);
} else {
if((state_val_38077 === (30))){
var inst_38048 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38049 = figwheel.client.heads_up.display_warning.call(null,inst_38048);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(33),inst_38049);
} else {
if((state_val_38077 === (10))){
var inst_38006 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38119_38162 = state_38076__$1;
(statearr_38119_38162[(2)] = inst_38006);

(statearr_38119_38162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (18))){
var inst_38022 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38023 = figwheel.client.heads_up.display_exception.call(null,inst_38022);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(21),inst_38023);
} else {
if((state_val_38077 === (37))){
var inst_38059 = (state_38076[(2)]);
var state_38076__$1 = state_38076;
var statearr_38120_38163 = state_38076__$1;
(statearr_38120_38163[(2)] = inst_38059);

(statearr_38120_38163[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38077 === (8))){
var inst_37998 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38076__$1 = state_38076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38076__$1,(11),inst_37998);
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
}
}
}
}
}
}
}
});})(c__28844__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28732__auto__,c__28844__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto____0 = (function (){
var statearr_38124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38124[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto__);

(statearr_38124[(1)] = (1));

return statearr_38124;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto____1 = (function (state_38076){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_38076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e38125){if((e38125 instanceof Object)){
var ex__28736__auto__ = e38125;
var statearr_38126_38164 = state_38076;
(statearr_38126_38164[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38165 = state_38076;
state_38076 = G__38165;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto__ = function(state_38076){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto____1.call(this,state_38076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto__,msg_hist,msg_names,msg))
})();
var state__28846__auto__ = (function (){var statearr_38127 = f__28845__auto__.call(null);
(statearr_38127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto__);

return statearr_38127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto__,msg_hist,msg_names,msg))
);

return c__28844__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28844__auto___38228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___38228,ch){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___38228,ch){
return (function (state_38211){
var state_val_38212 = (state_38211[(1)]);
if((state_val_38212 === (1))){
var state_38211__$1 = state_38211;
var statearr_38213_38229 = state_38211__$1;
(statearr_38213_38229[(2)] = null);

(statearr_38213_38229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38212 === (2))){
var state_38211__$1 = state_38211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38211__$1,(4),ch);
} else {
if((state_val_38212 === (3))){
var inst_38209 = (state_38211[(2)]);
var state_38211__$1 = state_38211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38211__$1,inst_38209);
} else {
if((state_val_38212 === (4))){
var inst_38199 = (state_38211[(7)]);
var inst_38199__$1 = (state_38211[(2)]);
var state_38211__$1 = (function (){var statearr_38214 = state_38211;
(statearr_38214[(7)] = inst_38199__$1);

return statearr_38214;
})();
if(cljs.core.truth_(inst_38199__$1)){
var statearr_38215_38230 = state_38211__$1;
(statearr_38215_38230[(1)] = (5));

} else {
var statearr_38216_38231 = state_38211__$1;
(statearr_38216_38231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38212 === (5))){
var inst_38199 = (state_38211[(7)]);
var inst_38201 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38199);
var state_38211__$1 = state_38211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38211__$1,(8),inst_38201);
} else {
if((state_val_38212 === (6))){
var state_38211__$1 = state_38211;
var statearr_38217_38232 = state_38211__$1;
(statearr_38217_38232[(2)] = null);

(statearr_38217_38232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38212 === (7))){
var inst_38207 = (state_38211[(2)]);
var state_38211__$1 = state_38211;
var statearr_38218_38233 = state_38211__$1;
(statearr_38218_38233[(2)] = inst_38207);

(statearr_38218_38233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38212 === (8))){
var inst_38203 = (state_38211[(2)]);
var state_38211__$1 = (function (){var statearr_38219 = state_38211;
(statearr_38219[(8)] = inst_38203);

return statearr_38219;
})();
var statearr_38220_38234 = state_38211__$1;
(statearr_38220_38234[(2)] = null);

(statearr_38220_38234[(1)] = (2));


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
});})(c__28844__auto___38228,ch))
;
return ((function (switch__28732__auto__,c__28844__auto___38228,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28733__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28733__auto____0 = (function (){
var statearr_38224 = [null,null,null,null,null,null,null,null,null];
(statearr_38224[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28733__auto__);

(statearr_38224[(1)] = (1));

return statearr_38224;
});
var figwheel$client$heads_up_plugin_$_state_machine__28733__auto____1 = (function (state_38211){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_38211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e38225){if((e38225 instanceof Object)){
var ex__28736__auto__ = e38225;
var statearr_38226_38235 = state_38211;
(statearr_38226_38235[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38236 = state_38211;
state_38211 = G__38236;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28733__auto__ = function(state_38211){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28733__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28733__auto____1.call(this,state_38211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28733__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28733__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___38228,ch))
})();
var state__28846__auto__ = (function (){var statearr_38227 = f__28845__auto__.call(null);
(statearr_38227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___38228);

return statearr_38227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___38228,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto__){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto__){
return (function (state_38257){
var state_val_38258 = (state_38257[(1)]);
if((state_val_38258 === (1))){
var inst_38252 = cljs.core.async.timeout.call(null,(3000));
var state_38257__$1 = state_38257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38257__$1,(2),inst_38252);
} else {
if((state_val_38258 === (2))){
var inst_38254 = (state_38257[(2)]);
var inst_38255 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38257__$1 = (function (){var statearr_38259 = state_38257;
(statearr_38259[(7)] = inst_38254);

return statearr_38259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38257__$1,inst_38255);
} else {
return null;
}
}
});})(c__28844__auto__))
;
return ((function (switch__28732__auto__,c__28844__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28733__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28733__auto____0 = (function (){
var statearr_38263 = [null,null,null,null,null,null,null,null];
(statearr_38263[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28733__auto__);

(statearr_38263[(1)] = (1));

return statearr_38263;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28733__auto____1 = (function (state_38257){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_38257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e38264){if((e38264 instanceof Object)){
var ex__28736__auto__ = e38264;
var statearr_38265_38267 = state_38257;
(statearr_38265_38267[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38268 = state_38257;
state_38257 = G__38268;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28733__auto__ = function(state_38257){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28733__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28733__auto____1.call(this,state_38257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28733__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28733__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto__))
})();
var state__28846__auto__ = (function (){var statearr_38266 = f__28845__auto__.call(null);
(statearr_38266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto__);

return statearr_38266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto__))
);

return c__28844__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38291){
var state_val_38292 = (state_38291[(1)]);
if((state_val_38292 === (1))){
var inst_38285 = cljs.core.async.timeout.call(null,(2000));
var state_38291__$1 = state_38291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38291__$1,(2),inst_38285);
} else {
if((state_val_38292 === (2))){
var inst_38287 = (state_38291[(2)]);
var inst_38288 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38289 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38288);
var state_38291__$1 = (function (){var statearr_38293 = state_38291;
(statearr_38293[(7)] = inst_38287);

return statearr_38293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38291__$1,inst_38289);
} else {
return null;
}
}
});})(c__28844__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28732__auto__,c__28844__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto____0 = (function (){
var statearr_38297 = [null,null,null,null,null,null,null,null];
(statearr_38297[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto__);

(statearr_38297[(1)] = (1));

return statearr_38297;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto____1 = (function (state_38291){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_38291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e38298){if((e38298 instanceof Object)){
var ex__28736__auto__ = e38298;
var statearr_38299_38301 = state_38291;
(statearr_38299_38301[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38302 = state_38291;
state_38291 = G__38302;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto__ = function(state_38291){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto____1.call(this,state_38291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28846__auto__ = (function (){var statearr_38300 = f__28845__auto__.call(null);
(statearr_38300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto__);

return statearr_38300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto__,figwheel_version,temp__4657__auto__))
);

return c__28844__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38303){
var map__38307 = p__38303;
var map__38307__$1 = ((((!((map__38307 == null)))?((((map__38307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38307):map__38307);
var file = cljs.core.get.call(null,map__38307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38307__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38307__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38309 = "";
var G__38309__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38309),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38309);
var G__38309__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38309__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38309__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__38309__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38309__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38310){
var map__38317 = p__38310;
var map__38317__$1 = ((((!((map__38317 == null)))?((((map__38317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38317):map__38317);
var ed = map__38317__$1;
var formatted_exception = cljs.core.get.call(null,map__38317__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38317__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38317__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38319_38323 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38320_38324 = null;
var count__38321_38325 = (0);
var i__38322_38326 = (0);
while(true){
if((i__38322_38326 < count__38321_38325)){
var msg_38327 = cljs.core._nth.call(null,chunk__38320_38324,i__38322_38326);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38327);

var G__38328 = seq__38319_38323;
var G__38329 = chunk__38320_38324;
var G__38330 = count__38321_38325;
var G__38331 = (i__38322_38326 + (1));
seq__38319_38323 = G__38328;
chunk__38320_38324 = G__38329;
count__38321_38325 = G__38330;
i__38322_38326 = G__38331;
continue;
} else {
var temp__4657__auto___38332 = cljs.core.seq.call(null,seq__38319_38323);
if(temp__4657__auto___38332){
var seq__38319_38333__$1 = temp__4657__auto___38332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38319_38333__$1)){
var c__25659__auto___38334 = cljs.core.chunk_first.call(null,seq__38319_38333__$1);
var G__38335 = cljs.core.chunk_rest.call(null,seq__38319_38333__$1);
var G__38336 = c__25659__auto___38334;
var G__38337 = cljs.core.count.call(null,c__25659__auto___38334);
var G__38338 = (0);
seq__38319_38323 = G__38335;
chunk__38320_38324 = G__38336;
count__38321_38325 = G__38337;
i__38322_38326 = G__38338;
continue;
} else {
var msg_38339 = cljs.core.first.call(null,seq__38319_38333__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38339);

var G__38340 = cljs.core.next.call(null,seq__38319_38333__$1);
var G__38341 = null;
var G__38342 = (0);
var G__38343 = (0);
seq__38319_38323 = G__38340;
chunk__38320_38324 = G__38341;
count__38321_38325 = G__38342;
i__38322_38326 = G__38343;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38344){
var map__38347 = p__38344;
var map__38347__$1 = ((((!((map__38347 == null)))?((((map__38347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38347):map__38347);
var w = map__38347__$1;
var message = cljs.core.get.call(null,map__38347__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24836__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24836__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38359 = cljs.core.seq.call(null,plugins);
var chunk__38360 = null;
var count__38361 = (0);
var i__38362 = (0);
while(true){
if((i__38362 < count__38361)){
var vec__38363 = cljs.core._nth.call(null,chunk__38360,i__38362);
var k = cljs.core.nth.call(null,vec__38363,(0),null);
var plugin = cljs.core.nth.call(null,vec__38363,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38369 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38359,chunk__38360,count__38361,i__38362,pl_38369,vec__38363,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38369.call(null,msg_hist);
});})(seq__38359,chunk__38360,count__38361,i__38362,pl_38369,vec__38363,k,plugin))
);
} else {
}

var G__38370 = seq__38359;
var G__38371 = chunk__38360;
var G__38372 = count__38361;
var G__38373 = (i__38362 + (1));
seq__38359 = G__38370;
chunk__38360 = G__38371;
count__38361 = G__38372;
i__38362 = G__38373;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38359);
if(temp__4657__auto__){
var seq__38359__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38359__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__38359__$1);
var G__38374 = cljs.core.chunk_rest.call(null,seq__38359__$1);
var G__38375 = c__25659__auto__;
var G__38376 = cljs.core.count.call(null,c__25659__auto__);
var G__38377 = (0);
seq__38359 = G__38374;
chunk__38360 = G__38375;
count__38361 = G__38376;
i__38362 = G__38377;
continue;
} else {
var vec__38366 = cljs.core.first.call(null,seq__38359__$1);
var k = cljs.core.nth.call(null,vec__38366,(0),null);
var plugin = cljs.core.nth.call(null,vec__38366,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38378 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38359,chunk__38360,count__38361,i__38362,pl_38378,vec__38366,k,plugin,seq__38359__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38378.call(null,msg_hist);
});})(seq__38359,chunk__38360,count__38361,i__38362,pl_38378,vec__38366,k,plugin,seq__38359__$1,temp__4657__auto__))
);
} else {
}

var G__38379 = cljs.core.next.call(null,seq__38359__$1);
var G__38380 = null;
var G__38381 = (0);
var G__38382 = (0);
seq__38359 = G__38379;
chunk__38360 = G__38380;
count__38361 = G__38381;
i__38362 = G__38382;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38383 = [];
var len__25923__auto___38390 = arguments.length;
var i__25924__auto___38391 = (0);
while(true){
if((i__25924__auto___38391 < len__25923__auto___38390)){
args38383.push((arguments[i__25924__auto___38391]));

var G__38392 = (i__25924__auto___38391 + (1));
i__25924__auto___38391 = G__38392;
continue;
} else {
}
break;
}

var G__38385 = args38383.length;
switch (G__38385) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38383.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38386_38394 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38387_38395 = null;
var count__38388_38396 = (0);
var i__38389_38397 = (0);
while(true){
if((i__38389_38397 < count__38388_38396)){
var msg_38398 = cljs.core._nth.call(null,chunk__38387_38395,i__38389_38397);
figwheel.client.socket.handle_incoming_message.call(null,msg_38398);

var G__38399 = seq__38386_38394;
var G__38400 = chunk__38387_38395;
var G__38401 = count__38388_38396;
var G__38402 = (i__38389_38397 + (1));
seq__38386_38394 = G__38399;
chunk__38387_38395 = G__38400;
count__38388_38396 = G__38401;
i__38389_38397 = G__38402;
continue;
} else {
var temp__4657__auto___38403 = cljs.core.seq.call(null,seq__38386_38394);
if(temp__4657__auto___38403){
var seq__38386_38404__$1 = temp__4657__auto___38403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38386_38404__$1)){
var c__25659__auto___38405 = cljs.core.chunk_first.call(null,seq__38386_38404__$1);
var G__38406 = cljs.core.chunk_rest.call(null,seq__38386_38404__$1);
var G__38407 = c__25659__auto___38405;
var G__38408 = cljs.core.count.call(null,c__25659__auto___38405);
var G__38409 = (0);
seq__38386_38394 = G__38406;
chunk__38387_38395 = G__38407;
count__38388_38396 = G__38408;
i__38389_38397 = G__38409;
continue;
} else {
var msg_38410 = cljs.core.first.call(null,seq__38386_38404__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38410);

var G__38411 = cljs.core.next.call(null,seq__38386_38404__$1);
var G__38412 = null;
var G__38413 = (0);
var G__38414 = (0);
seq__38386_38394 = G__38411;
chunk__38387_38395 = G__38412;
count__38388_38396 = G__38413;
i__38389_38397 = G__38414;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25930__auto__ = [];
var len__25923__auto___38419 = arguments.length;
var i__25924__auto___38420 = (0);
while(true){
if((i__25924__auto___38420 < len__25923__auto___38419)){
args__25930__auto__.push((arguments[i__25924__auto___38420]));

var G__38421 = (i__25924__auto___38420 + (1));
i__25924__auto___38420 = G__38421;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38416){
var map__38417 = p__38416;
var map__38417__$1 = ((((!((map__38417 == null)))?((((map__38417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38417):map__38417);
var opts = map__38417__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38415){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38415));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38423){if((e38423 instanceof Error)){
var e = e38423;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38423;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38427){
var map__38428 = p__38427;
var map__38428__$1 = ((((!((map__38428 == null)))?((((map__38428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38428):map__38428);
var msg_name = cljs.core.get.call(null,map__38428__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1538702798853