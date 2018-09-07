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
var args37578 = [];
var len__25923__auto___37581 = arguments.length;
var i__25924__auto___37582 = (0);
while(true){
if((i__25924__auto___37582 < len__25923__auto___37581)){
args37578.push((arguments[i__25924__auto___37582]));

var G__37583 = (i__25924__auto___37582 + (1));
i__25924__auto___37582 = G__37583;
continue;
} else {
}
break;
}

var G__37580 = args37578.length;
switch (G__37580) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37578.length)].join('')));

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
var len__25923__auto___37586 = arguments.length;
var i__25924__auto___37587 = (0);
while(true){
if((i__25924__auto___37587 < len__25923__auto___37586)){
args__25930__auto__.push((arguments[i__25924__auto___37587]));

var G__37588 = (i__25924__auto___37587 + (1));
i__25924__auto___37587 = G__37588;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37585){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37585));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25930__auto__ = [];
var len__25923__auto___37590 = arguments.length;
var i__25924__auto___37591 = (0);
while(true){
if((i__25924__auto___37591 < len__25923__auto___37590)){
args__25930__auto__.push((arguments[i__25924__auto___37591]));

var G__37592 = (i__25924__auto___37591 + (1));
i__25924__auto___37591 = G__37592;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37589){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37589));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37593){
var map__37596 = p__37593;
var map__37596__$1 = ((((!((map__37596 == null)))?((((map__37596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37596):map__37596);
var message = cljs.core.get.call(null,map__37596__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37596__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28805__auto___37758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___37758,ch){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___37758,ch){
return (function (state_37727){
var state_val_37728 = (state_37727[(1)]);
if((state_val_37728 === (7))){
var inst_37723 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
var statearr_37729_37759 = state_37727__$1;
(statearr_37729_37759[(2)] = inst_37723);

(statearr_37729_37759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (1))){
var state_37727__$1 = state_37727;
var statearr_37730_37760 = state_37727__$1;
(statearr_37730_37760[(2)] = null);

(statearr_37730_37760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (4))){
var inst_37680 = (state_37727[(7)]);
var inst_37680__$1 = (state_37727[(2)]);
var state_37727__$1 = (function (){var statearr_37731 = state_37727;
(statearr_37731[(7)] = inst_37680__$1);

return statearr_37731;
})();
if(cljs.core.truth_(inst_37680__$1)){
var statearr_37732_37761 = state_37727__$1;
(statearr_37732_37761[(1)] = (5));

} else {
var statearr_37733_37762 = state_37727__$1;
(statearr_37733_37762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (15))){
var inst_37687 = (state_37727[(8)]);
var inst_37702 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37687);
var inst_37703 = cljs.core.first.call(null,inst_37702);
var inst_37704 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37703);
var inst_37705 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37704)].join('');
var inst_37706 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37705);
var state_37727__$1 = state_37727;
var statearr_37734_37763 = state_37727__$1;
(statearr_37734_37763[(2)] = inst_37706);

(statearr_37734_37763[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (13))){
var inst_37711 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
var statearr_37735_37764 = state_37727__$1;
(statearr_37735_37764[(2)] = inst_37711);

(statearr_37735_37764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (6))){
var state_37727__$1 = state_37727;
var statearr_37736_37765 = state_37727__$1;
(statearr_37736_37765[(2)] = null);

(statearr_37736_37765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (17))){
var inst_37709 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
var statearr_37737_37766 = state_37727__$1;
(statearr_37737_37766[(2)] = inst_37709);

(statearr_37737_37766[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (3))){
var inst_37725 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37727__$1,inst_37725);
} else {
if((state_val_37728 === (12))){
var inst_37686 = (state_37727[(9)]);
var inst_37700 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37686,opts);
var state_37727__$1 = state_37727;
if(cljs.core.truth_(inst_37700)){
var statearr_37738_37767 = state_37727__$1;
(statearr_37738_37767[(1)] = (15));

} else {
var statearr_37739_37768 = state_37727__$1;
(statearr_37739_37768[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (2))){
var state_37727__$1 = state_37727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37727__$1,(4),ch);
} else {
if((state_val_37728 === (11))){
var inst_37687 = (state_37727[(8)]);
var inst_37692 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37693 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37687);
var inst_37694 = cljs.core.async.timeout.call(null,(1000));
var inst_37695 = [inst_37693,inst_37694];
var inst_37696 = (new cljs.core.PersistentVector(null,2,(5),inst_37692,inst_37695,null));
var state_37727__$1 = state_37727;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37727__$1,(14),inst_37696);
} else {
if((state_val_37728 === (9))){
var inst_37687 = (state_37727[(8)]);
var inst_37713 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37714 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37687);
var inst_37715 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37714);
var inst_37716 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37715)].join('');
var inst_37717 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37716);
var state_37727__$1 = (function (){var statearr_37740 = state_37727;
(statearr_37740[(10)] = inst_37713);

return statearr_37740;
})();
var statearr_37741_37769 = state_37727__$1;
(statearr_37741_37769[(2)] = inst_37717);

(statearr_37741_37769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (5))){
var inst_37680 = (state_37727[(7)]);
var inst_37682 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37683 = (new cljs.core.PersistentArrayMap(null,2,inst_37682,null));
var inst_37684 = (new cljs.core.PersistentHashSet(null,inst_37683,null));
var inst_37685 = figwheel.client.focus_msgs.call(null,inst_37684,inst_37680);
var inst_37686 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37685);
var inst_37687 = cljs.core.first.call(null,inst_37685);
var inst_37688 = figwheel.client.autoload_QMARK_.call(null);
var state_37727__$1 = (function (){var statearr_37742 = state_37727;
(statearr_37742[(8)] = inst_37687);

(statearr_37742[(9)] = inst_37686);

return statearr_37742;
})();
if(cljs.core.truth_(inst_37688)){
var statearr_37743_37770 = state_37727__$1;
(statearr_37743_37770[(1)] = (8));

} else {
var statearr_37744_37771 = state_37727__$1;
(statearr_37744_37771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (14))){
var inst_37698 = (state_37727[(2)]);
var state_37727__$1 = state_37727;
var statearr_37745_37772 = state_37727__$1;
(statearr_37745_37772[(2)] = inst_37698);

(statearr_37745_37772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (16))){
var state_37727__$1 = state_37727;
var statearr_37746_37773 = state_37727__$1;
(statearr_37746_37773[(2)] = null);

(statearr_37746_37773[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (10))){
var inst_37719 = (state_37727[(2)]);
var state_37727__$1 = (function (){var statearr_37747 = state_37727;
(statearr_37747[(11)] = inst_37719);

return statearr_37747;
})();
var statearr_37748_37774 = state_37727__$1;
(statearr_37748_37774[(2)] = null);

(statearr_37748_37774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37728 === (8))){
var inst_37686 = (state_37727[(9)]);
var inst_37690 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37686,opts);
var state_37727__$1 = state_37727;
if(cljs.core.truth_(inst_37690)){
var statearr_37749_37775 = state_37727__$1;
(statearr_37749_37775[(1)] = (11));

} else {
var statearr_37750_37776 = state_37727__$1;
(statearr_37750_37776[(1)] = (12));

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
});})(c__28805__auto___37758,ch))
;
return ((function (switch__28693__auto__,c__28805__auto___37758,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28694__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28694__auto____0 = (function (){
var statearr_37754 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37754[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28694__auto__);

(statearr_37754[(1)] = (1));

return statearr_37754;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28694__auto____1 = (function (state_37727){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_37727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e37755){if((e37755 instanceof Object)){
var ex__28697__auto__ = e37755;
var statearr_37756_37777 = state_37727;
(statearr_37756_37777[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37778 = state_37727;
state_37727 = G__37778;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28694__auto__ = function(state_37727){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28694__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28694__auto____1.call(this,state_37727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28694__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28694__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___37758,ch))
})();
var state__28807__auto__ = (function (){var statearr_37757 = f__28806__auto__.call(null);
(statearr_37757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___37758);

return statearr_37757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___37758,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37779_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37779_SHARP_));
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
var base_path_37782 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37782){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37781){if((e37781 instanceof Error)){
var e = e37781;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37782], null));
} else {
var e = e37781;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37782))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37783){
var map__37792 = p__37783;
var map__37792__$1 = ((((!((map__37792 == null)))?((((map__37792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37792):map__37792);
var opts = map__37792__$1;
var build_id = cljs.core.get.call(null,map__37792__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37792,map__37792__$1,opts,build_id){
return (function (p__37794){
var vec__37795 = p__37794;
var seq__37796 = cljs.core.seq.call(null,vec__37795);
var first__37797 = cljs.core.first.call(null,seq__37796);
var seq__37796__$1 = cljs.core.next.call(null,seq__37796);
var map__37798 = first__37797;
var map__37798__$1 = ((((!((map__37798 == null)))?((((map__37798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37798):map__37798);
var msg = map__37798__$1;
var msg_name = cljs.core.get.call(null,map__37798__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37796__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37795,seq__37796,first__37797,seq__37796__$1,map__37798,map__37798__$1,msg,msg_name,_,map__37792,map__37792__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37795,seq__37796,first__37797,seq__37796__$1,map__37798,map__37798__$1,msg,msg_name,_,map__37792,map__37792__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37792,map__37792__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37806){
var vec__37807 = p__37806;
var seq__37808 = cljs.core.seq.call(null,vec__37807);
var first__37809 = cljs.core.first.call(null,seq__37808);
var seq__37808__$1 = cljs.core.next.call(null,seq__37808);
var map__37810 = first__37809;
var map__37810__$1 = ((((!((map__37810 == null)))?((((map__37810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37810):map__37810);
var msg = map__37810__$1;
var msg_name = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37808__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37812){
var map__37824 = p__37812;
var map__37824__$1 = ((((!((map__37824 == null)))?((((map__37824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37824):map__37824);
var on_compile_warning = cljs.core.get.call(null,map__37824__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37824__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37824,map__37824__$1,on_compile_warning,on_compile_fail){
return (function (p__37826){
var vec__37827 = p__37826;
var seq__37828 = cljs.core.seq.call(null,vec__37827);
var first__37829 = cljs.core.first.call(null,seq__37828);
var seq__37828__$1 = cljs.core.next.call(null,seq__37828);
var map__37830 = first__37829;
var map__37830__$1 = ((((!((map__37830 == null)))?((((map__37830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37830):map__37830);
var msg = map__37830__$1;
var msg_name = cljs.core.get.call(null,map__37830__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37828__$1;
var pred__37832 = cljs.core._EQ_;
var expr__37833 = msg_name;
if(cljs.core.truth_(pred__37832.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37833))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37832.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37833))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37824,map__37824__$1,on_compile_warning,on_compile_fail))
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
var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__,msg_hist,msg_names,msg){
return (function (state_38061){
var state_val_38062 = (state_38061[(1)]);
if((state_val_38062 === (7))){
var inst_37981 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
if(cljs.core.truth_(inst_37981)){
var statearr_38063_38113 = state_38061__$1;
(statearr_38063_38113[(1)] = (8));

} else {
var statearr_38064_38114 = state_38061__$1;
(statearr_38064_38114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (20))){
var inst_38055 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38065_38115 = state_38061__$1;
(statearr_38065_38115[(2)] = inst_38055);

(statearr_38065_38115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (27))){
var inst_38051 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38066_38116 = state_38061__$1;
(statearr_38066_38116[(2)] = inst_38051);

(statearr_38066_38116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (1))){
var inst_37974 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38061__$1 = state_38061;
if(cljs.core.truth_(inst_37974)){
var statearr_38067_38117 = state_38061__$1;
(statearr_38067_38117[(1)] = (2));

} else {
var statearr_38068_38118 = state_38061__$1;
(statearr_38068_38118[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (24))){
var inst_38053 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38069_38119 = state_38061__$1;
(statearr_38069_38119[(2)] = inst_38053);

(statearr_38069_38119[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (4))){
var inst_38059 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38061__$1,inst_38059);
} else {
if((state_val_38062 === (15))){
var inst_38057 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38070_38120 = state_38061__$1;
(statearr_38070_38120[(2)] = inst_38057);

(statearr_38070_38120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (21))){
var inst_38010 = (state_38061[(2)]);
var inst_38011 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38012 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38011);
var state_38061__$1 = (function (){var statearr_38071 = state_38061;
(statearr_38071[(7)] = inst_38010);

return statearr_38071;
})();
var statearr_38072_38121 = state_38061__$1;
(statearr_38072_38121[(2)] = inst_38012);

(statearr_38072_38121[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (31))){
var inst_38040 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38061__$1 = state_38061;
if(cljs.core.truth_(inst_38040)){
var statearr_38073_38122 = state_38061__$1;
(statearr_38073_38122[(1)] = (34));

} else {
var statearr_38074_38123 = state_38061__$1;
(statearr_38074_38123[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (32))){
var inst_38049 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38075_38124 = state_38061__$1;
(statearr_38075_38124[(2)] = inst_38049);

(statearr_38075_38124[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (33))){
var inst_38036 = (state_38061[(2)]);
var inst_38037 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38038 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38037);
var state_38061__$1 = (function (){var statearr_38076 = state_38061;
(statearr_38076[(8)] = inst_38036);

return statearr_38076;
})();
var statearr_38077_38125 = state_38061__$1;
(statearr_38077_38125[(2)] = inst_38038);

(statearr_38077_38125[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (13))){
var inst_37995 = figwheel.client.heads_up.clear.call(null);
var state_38061__$1 = state_38061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38061__$1,(16),inst_37995);
} else {
if((state_val_38062 === (22))){
var inst_38016 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38017 = figwheel.client.heads_up.append_warning_message.call(null,inst_38016);
var state_38061__$1 = state_38061;
var statearr_38078_38126 = state_38061__$1;
(statearr_38078_38126[(2)] = inst_38017);

(statearr_38078_38126[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (36))){
var inst_38047 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38079_38127 = state_38061__$1;
(statearr_38079_38127[(2)] = inst_38047);

(statearr_38079_38127[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (29))){
var inst_38027 = (state_38061[(2)]);
var inst_38028 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38029 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38028);
var state_38061__$1 = (function (){var statearr_38080 = state_38061;
(statearr_38080[(9)] = inst_38027);

return statearr_38080;
})();
var statearr_38081_38128 = state_38061__$1;
(statearr_38081_38128[(2)] = inst_38029);

(statearr_38081_38128[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (6))){
var inst_37976 = (state_38061[(10)]);
var state_38061__$1 = state_38061;
var statearr_38082_38129 = state_38061__$1;
(statearr_38082_38129[(2)] = inst_37976);

(statearr_38082_38129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (28))){
var inst_38023 = (state_38061[(2)]);
var inst_38024 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38025 = figwheel.client.heads_up.display_warning.call(null,inst_38024);
var state_38061__$1 = (function (){var statearr_38083 = state_38061;
(statearr_38083[(11)] = inst_38023);

return statearr_38083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38061__$1,(29),inst_38025);
} else {
if((state_val_38062 === (25))){
var inst_38021 = figwheel.client.heads_up.clear.call(null);
var state_38061__$1 = state_38061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38061__$1,(28),inst_38021);
} else {
if((state_val_38062 === (34))){
var inst_38042 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38061__$1 = state_38061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38061__$1,(37),inst_38042);
} else {
if((state_val_38062 === (17))){
var inst_38001 = (state_38061[(2)]);
var inst_38002 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38003 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38002);
var state_38061__$1 = (function (){var statearr_38084 = state_38061;
(statearr_38084[(12)] = inst_38001);

return statearr_38084;
})();
var statearr_38085_38130 = state_38061__$1;
(statearr_38085_38130[(2)] = inst_38003);

(statearr_38085_38130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (3))){
var inst_37993 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38061__$1 = state_38061;
if(cljs.core.truth_(inst_37993)){
var statearr_38086_38131 = state_38061__$1;
(statearr_38086_38131[(1)] = (13));

} else {
var statearr_38087_38132 = state_38061__$1;
(statearr_38087_38132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (12))){
var inst_37989 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38088_38133 = state_38061__$1;
(statearr_38088_38133[(2)] = inst_37989);

(statearr_38088_38133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (2))){
var inst_37976 = (state_38061[(10)]);
var inst_37976__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38061__$1 = (function (){var statearr_38089 = state_38061;
(statearr_38089[(10)] = inst_37976__$1);

return statearr_38089;
})();
if(cljs.core.truth_(inst_37976__$1)){
var statearr_38090_38134 = state_38061__$1;
(statearr_38090_38134[(1)] = (5));

} else {
var statearr_38091_38135 = state_38061__$1;
(statearr_38091_38135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (23))){
var inst_38019 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38061__$1 = state_38061;
if(cljs.core.truth_(inst_38019)){
var statearr_38092_38136 = state_38061__$1;
(statearr_38092_38136[(1)] = (25));

} else {
var statearr_38093_38137 = state_38061__$1;
(statearr_38093_38137[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (35))){
var state_38061__$1 = state_38061;
var statearr_38094_38138 = state_38061__$1;
(statearr_38094_38138[(2)] = null);

(statearr_38094_38138[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (19))){
var inst_38014 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38061__$1 = state_38061;
if(cljs.core.truth_(inst_38014)){
var statearr_38095_38139 = state_38061__$1;
(statearr_38095_38139[(1)] = (22));

} else {
var statearr_38096_38140 = state_38061__$1;
(statearr_38096_38140[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (11))){
var inst_37985 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38097_38141 = state_38061__$1;
(statearr_38097_38141[(2)] = inst_37985);

(statearr_38097_38141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (9))){
var inst_37987 = figwheel.client.heads_up.clear.call(null);
var state_38061__$1 = state_38061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38061__$1,(12),inst_37987);
} else {
if((state_val_38062 === (5))){
var inst_37978 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38061__$1 = state_38061;
var statearr_38098_38142 = state_38061__$1;
(statearr_38098_38142[(2)] = inst_37978);

(statearr_38098_38142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (14))){
var inst_38005 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38061__$1 = state_38061;
if(cljs.core.truth_(inst_38005)){
var statearr_38099_38143 = state_38061__$1;
(statearr_38099_38143[(1)] = (18));

} else {
var statearr_38100_38144 = state_38061__$1;
(statearr_38100_38144[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (26))){
var inst_38031 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38061__$1 = state_38061;
if(cljs.core.truth_(inst_38031)){
var statearr_38101_38145 = state_38061__$1;
(statearr_38101_38145[(1)] = (30));

} else {
var statearr_38102_38146 = state_38061__$1;
(statearr_38102_38146[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (16))){
var inst_37997 = (state_38061[(2)]);
var inst_37998 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37999 = figwheel.client.heads_up.display_exception.call(null,inst_37998);
var state_38061__$1 = (function (){var statearr_38103 = state_38061;
(statearr_38103[(13)] = inst_37997);

return statearr_38103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38061__$1,(17),inst_37999);
} else {
if((state_val_38062 === (30))){
var inst_38033 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38034 = figwheel.client.heads_up.display_warning.call(null,inst_38033);
var state_38061__$1 = state_38061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38061__$1,(33),inst_38034);
} else {
if((state_val_38062 === (10))){
var inst_37991 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38104_38147 = state_38061__$1;
(statearr_38104_38147[(2)] = inst_37991);

(statearr_38104_38147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (18))){
var inst_38007 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38008 = figwheel.client.heads_up.display_exception.call(null,inst_38007);
var state_38061__$1 = state_38061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38061__$1,(21),inst_38008);
} else {
if((state_val_38062 === (37))){
var inst_38044 = (state_38061[(2)]);
var state_38061__$1 = state_38061;
var statearr_38105_38148 = state_38061__$1;
(statearr_38105_38148[(2)] = inst_38044);

(statearr_38105_38148[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38062 === (8))){
var inst_37983 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38061__$1 = state_38061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38061__$1,(11),inst_37983);
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
});})(c__28805__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28693__auto__,c__28805__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto____0 = (function (){
var statearr_38109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38109[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto__);

(statearr_38109[(1)] = (1));

return statearr_38109;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto____1 = (function (state_38061){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_38061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e38110){if((e38110 instanceof Object)){
var ex__28697__auto__ = e38110;
var statearr_38111_38149 = state_38061;
(statearr_38111_38149[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38150 = state_38061;
state_38061 = G__38150;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto__ = function(state_38061){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto____1.call(this,state_38061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__,msg_hist,msg_names,msg))
})();
var state__28807__auto__ = (function (){var statearr_38112 = f__28806__auto__.call(null);
(statearr_38112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_38112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__,msg_hist,msg_names,msg))
);

return c__28805__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28805__auto___38213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___38213,ch){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___38213,ch){
return (function (state_38196){
var state_val_38197 = (state_38196[(1)]);
if((state_val_38197 === (1))){
var state_38196__$1 = state_38196;
var statearr_38198_38214 = state_38196__$1;
(statearr_38198_38214[(2)] = null);

(statearr_38198_38214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (2))){
var state_38196__$1 = state_38196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38196__$1,(4),ch);
} else {
if((state_val_38197 === (3))){
var inst_38194 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38196__$1,inst_38194);
} else {
if((state_val_38197 === (4))){
var inst_38184 = (state_38196[(7)]);
var inst_38184__$1 = (state_38196[(2)]);
var state_38196__$1 = (function (){var statearr_38199 = state_38196;
(statearr_38199[(7)] = inst_38184__$1);

return statearr_38199;
})();
if(cljs.core.truth_(inst_38184__$1)){
var statearr_38200_38215 = state_38196__$1;
(statearr_38200_38215[(1)] = (5));

} else {
var statearr_38201_38216 = state_38196__$1;
(statearr_38201_38216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (5))){
var inst_38184 = (state_38196[(7)]);
var inst_38186 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38184);
var state_38196__$1 = state_38196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38196__$1,(8),inst_38186);
} else {
if((state_val_38197 === (6))){
var state_38196__$1 = state_38196;
var statearr_38202_38217 = state_38196__$1;
(statearr_38202_38217[(2)] = null);

(statearr_38202_38217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (7))){
var inst_38192 = (state_38196[(2)]);
var state_38196__$1 = state_38196;
var statearr_38203_38218 = state_38196__$1;
(statearr_38203_38218[(2)] = inst_38192);

(statearr_38203_38218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38197 === (8))){
var inst_38188 = (state_38196[(2)]);
var state_38196__$1 = (function (){var statearr_38204 = state_38196;
(statearr_38204[(8)] = inst_38188);

return statearr_38204;
})();
var statearr_38205_38219 = state_38196__$1;
(statearr_38205_38219[(2)] = null);

(statearr_38205_38219[(1)] = (2));


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
});})(c__28805__auto___38213,ch))
;
return ((function (switch__28693__auto__,c__28805__auto___38213,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28694__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28694__auto____0 = (function (){
var statearr_38209 = [null,null,null,null,null,null,null,null,null];
(statearr_38209[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28694__auto__);

(statearr_38209[(1)] = (1));

return statearr_38209;
});
var figwheel$client$heads_up_plugin_$_state_machine__28694__auto____1 = (function (state_38196){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_38196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e38210){if((e38210 instanceof Object)){
var ex__28697__auto__ = e38210;
var statearr_38211_38220 = state_38196;
(statearr_38211_38220[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38221 = state_38196;
state_38196 = G__38221;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28694__auto__ = function(state_38196){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28694__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28694__auto____1.call(this,state_38196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28694__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28694__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___38213,ch))
})();
var state__28807__auto__ = (function (){var statearr_38212 = f__28806__auto__.call(null);
(statearr_38212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___38213);

return statearr_38212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___38213,ch))
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
var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__){
return (function (state_38242){
var state_val_38243 = (state_38242[(1)]);
if((state_val_38243 === (1))){
var inst_38237 = cljs.core.async.timeout.call(null,(3000));
var state_38242__$1 = state_38242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38242__$1,(2),inst_38237);
} else {
if((state_val_38243 === (2))){
var inst_38239 = (state_38242[(2)]);
var inst_38240 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38242__$1 = (function (){var statearr_38244 = state_38242;
(statearr_38244[(7)] = inst_38239);

return statearr_38244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38242__$1,inst_38240);
} else {
return null;
}
}
});})(c__28805__auto__))
;
return ((function (switch__28693__auto__,c__28805__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28694__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28694__auto____0 = (function (){
var statearr_38248 = [null,null,null,null,null,null,null,null];
(statearr_38248[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28694__auto__);

(statearr_38248[(1)] = (1));

return statearr_38248;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28694__auto____1 = (function (state_38242){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_38242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e38249){if((e38249 instanceof Object)){
var ex__28697__auto__ = e38249;
var statearr_38250_38252 = state_38242;
(statearr_38250_38252[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38253 = state_38242;
state_38242 = G__38253;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28694__auto__ = function(state_38242){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28694__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28694__auto____1.call(this,state_38242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28694__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28694__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__))
})();
var state__28807__auto__ = (function (){var statearr_38251 = f__28806__auto__.call(null);
(statearr_38251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_38251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__))
);

return c__28805__auto__;
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
var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38276){
var state_val_38277 = (state_38276[(1)]);
if((state_val_38277 === (1))){
var inst_38270 = cljs.core.async.timeout.call(null,(2000));
var state_38276__$1 = state_38276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38276__$1,(2),inst_38270);
} else {
if((state_val_38277 === (2))){
var inst_38272 = (state_38276[(2)]);
var inst_38273 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38274 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38273);
var state_38276__$1 = (function (){var statearr_38278 = state_38276;
(statearr_38278[(7)] = inst_38272);

return statearr_38278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38276__$1,inst_38274);
} else {
return null;
}
}
});})(c__28805__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28693__auto__,c__28805__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto____0 = (function (){
var statearr_38282 = [null,null,null,null,null,null,null,null];
(statearr_38282[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto__);

(statearr_38282[(1)] = (1));

return statearr_38282;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto____1 = (function (state_38276){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_38276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e38283){if((e38283 instanceof Object)){
var ex__28697__auto__ = e38283;
var statearr_38284_38286 = state_38276;
(statearr_38284_38286[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38287 = state_38276;
state_38276 = G__38287;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto__ = function(state_38276){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto____1.call(this,state_38276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28807__auto__ = (function (){var statearr_38285 = f__28806__auto__.call(null);
(statearr_38285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_38285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__,figwheel_version,temp__4657__auto__))
);

return c__28805__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38288){
var map__38292 = p__38288;
var map__38292__$1 = ((((!((map__38292 == null)))?((((map__38292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38292):map__38292);
var file = cljs.core.get.call(null,map__38292__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38292__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38292__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38294 = "";
var G__38294__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38294),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38294);
var G__38294__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38294__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38294__$1);
if(cljs.core.truth_((function (){var and__24836__auto__ = line;
if(cljs.core.truth_(and__24836__auto__)){
return column;
} else {
return and__24836__auto__;
}
})())){
return [cljs.core.str(G__38294__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38294__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38295){
var map__38302 = p__38295;
var map__38302__$1 = ((((!((map__38302 == null)))?((((map__38302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38302):map__38302);
var ed = map__38302__$1;
var formatted_exception = cljs.core.get.call(null,map__38302__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38302__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38302__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38304_38308 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38305_38309 = null;
var count__38306_38310 = (0);
var i__38307_38311 = (0);
while(true){
if((i__38307_38311 < count__38306_38310)){
var msg_38312 = cljs.core._nth.call(null,chunk__38305_38309,i__38307_38311);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38312);

var G__38313 = seq__38304_38308;
var G__38314 = chunk__38305_38309;
var G__38315 = count__38306_38310;
var G__38316 = (i__38307_38311 + (1));
seq__38304_38308 = G__38313;
chunk__38305_38309 = G__38314;
count__38306_38310 = G__38315;
i__38307_38311 = G__38316;
continue;
} else {
var temp__4657__auto___38317 = cljs.core.seq.call(null,seq__38304_38308);
if(temp__4657__auto___38317){
var seq__38304_38318__$1 = temp__4657__auto___38317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38304_38318__$1)){
var c__25659__auto___38319 = cljs.core.chunk_first.call(null,seq__38304_38318__$1);
var G__38320 = cljs.core.chunk_rest.call(null,seq__38304_38318__$1);
var G__38321 = c__25659__auto___38319;
var G__38322 = cljs.core.count.call(null,c__25659__auto___38319);
var G__38323 = (0);
seq__38304_38308 = G__38320;
chunk__38305_38309 = G__38321;
count__38306_38310 = G__38322;
i__38307_38311 = G__38323;
continue;
} else {
var msg_38324 = cljs.core.first.call(null,seq__38304_38318__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38324);

var G__38325 = cljs.core.next.call(null,seq__38304_38318__$1);
var G__38326 = null;
var G__38327 = (0);
var G__38328 = (0);
seq__38304_38308 = G__38325;
chunk__38305_38309 = G__38326;
count__38306_38310 = G__38327;
i__38307_38311 = G__38328;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38329){
var map__38332 = p__38329;
var map__38332__$1 = ((((!((map__38332 == null)))?((((map__38332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38332):map__38332);
var w = map__38332__$1;
var message = cljs.core.get.call(null,map__38332__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38344 = cljs.core.seq.call(null,plugins);
var chunk__38345 = null;
var count__38346 = (0);
var i__38347 = (0);
while(true){
if((i__38347 < count__38346)){
var vec__38348 = cljs.core._nth.call(null,chunk__38345,i__38347);
var k = cljs.core.nth.call(null,vec__38348,(0),null);
var plugin = cljs.core.nth.call(null,vec__38348,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38354 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38344,chunk__38345,count__38346,i__38347,pl_38354,vec__38348,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38354.call(null,msg_hist);
});})(seq__38344,chunk__38345,count__38346,i__38347,pl_38354,vec__38348,k,plugin))
);
} else {
}

var G__38355 = seq__38344;
var G__38356 = chunk__38345;
var G__38357 = count__38346;
var G__38358 = (i__38347 + (1));
seq__38344 = G__38355;
chunk__38345 = G__38356;
count__38346 = G__38357;
i__38347 = G__38358;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38344);
if(temp__4657__auto__){
var seq__38344__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38344__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__38344__$1);
var G__38359 = cljs.core.chunk_rest.call(null,seq__38344__$1);
var G__38360 = c__25659__auto__;
var G__38361 = cljs.core.count.call(null,c__25659__auto__);
var G__38362 = (0);
seq__38344 = G__38359;
chunk__38345 = G__38360;
count__38346 = G__38361;
i__38347 = G__38362;
continue;
} else {
var vec__38351 = cljs.core.first.call(null,seq__38344__$1);
var k = cljs.core.nth.call(null,vec__38351,(0),null);
var plugin = cljs.core.nth.call(null,vec__38351,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38363 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38344,chunk__38345,count__38346,i__38347,pl_38363,vec__38351,k,plugin,seq__38344__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38363.call(null,msg_hist);
});})(seq__38344,chunk__38345,count__38346,i__38347,pl_38363,vec__38351,k,plugin,seq__38344__$1,temp__4657__auto__))
);
} else {
}

var G__38364 = cljs.core.next.call(null,seq__38344__$1);
var G__38365 = null;
var G__38366 = (0);
var G__38367 = (0);
seq__38344 = G__38364;
chunk__38345 = G__38365;
count__38346 = G__38366;
i__38347 = G__38367;
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
var args38368 = [];
var len__25923__auto___38375 = arguments.length;
var i__25924__auto___38376 = (0);
while(true){
if((i__25924__auto___38376 < len__25923__auto___38375)){
args38368.push((arguments[i__25924__auto___38376]));

var G__38377 = (i__25924__auto___38376 + (1));
i__25924__auto___38376 = G__38377;
continue;
} else {
}
break;
}

var G__38370 = args38368.length;
switch (G__38370) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38368.length)].join('')));

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

var seq__38371_38379 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38372_38380 = null;
var count__38373_38381 = (0);
var i__38374_38382 = (0);
while(true){
if((i__38374_38382 < count__38373_38381)){
var msg_38383 = cljs.core._nth.call(null,chunk__38372_38380,i__38374_38382);
figwheel.client.socket.handle_incoming_message.call(null,msg_38383);

var G__38384 = seq__38371_38379;
var G__38385 = chunk__38372_38380;
var G__38386 = count__38373_38381;
var G__38387 = (i__38374_38382 + (1));
seq__38371_38379 = G__38384;
chunk__38372_38380 = G__38385;
count__38373_38381 = G__38386;
i__38374_38382 = G__38387;
continue;
} else {
var temp__4657__auto___38388 = cljs.core.seq.call(null,seq__38371_38379);
if(temp__4657__auto___38388){
var seq__38371_38389__$1 = temp__4657__auto___38388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38371_38389__$1)){
var c__25659__auto___38390 = cljs.core.chunk_first.call(null,seq__38371_38389__$1);
var G__38391 = cljs.core.chunk_rest.call(null,seq__38371_38389__$1);
var G__38392 = c__25659__auto___38390;
var G__38393 = cljs.core.count.call(null,c__25659__auto___38390);
var G__38394 = (0);
seq__38371_38379 = G__38391;
chunk__38372_38380 = G__38392;
count__38373_38381 = G__38393;
i__38374_38382 = G__38394;
continue;
} else {
var msg_38395 = cljs.core.first.call(null,seq__38371_38389__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38395);

var G__38396 = cljs.core.next.call(null,seq__38371_38389__$1);
var G__38397 = null;
var G__38398 = (0);
var G__38399 = (0);
seq__38371_38379 = G__38396;
chunk__38372_38380 = G__38397;
count__38373_38381 = G__38398;
i__38374_38382 = G__38399;
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
var len__25923__auto___38404 = arguments.length;
var i__25924__auto___38405 = (0);
while(true){
if((i__25924__auto___38405 < len__25923__auto___38404)){
args__25930__auto__.push((arguments[i__25924__auto___38405]));

var G__38406 = (i__25924__auto___38405 + (1));
i__25924__auto___38405 = G__38406;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((0) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25931__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38401){
var map__38402 = p__38401;
var map__38402__$1 = ((((!((map__38402 == null)))?((((map__38402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38402):map__38402);
var opts = map__38402__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38400){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38400));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38408){if((e38408 instanceof Error)){
var e = e38408;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38408;

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
return (function (p__38412){
var map__38413 = p__38412;
var map__38413__$1 = ((((!((map__38413 == null)))?((((map__38413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38413):map__38413);
var msg_name = cljs.core.get.call(null,map__38413__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1533225037869