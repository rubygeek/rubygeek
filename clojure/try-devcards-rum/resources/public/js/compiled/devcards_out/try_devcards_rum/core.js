// Compiled by ClojureScript 1.9.229 {}
goog.provide('try_devcards_rum.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.reader');
goog.require('cljs.test');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"try_devcards_rum.core","try_devcards_rum.core",219716649),new cljs.core.Keyword(null,"documentation-card","documentation-card",-756785318)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"documentation-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"\n  ## A documendation Card\n  * taco\n  * beer \n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
try_devcards_rum.core.label = rum.core.build_defc.call(null,(function (text){
return React.createElement("div",({"className": "label"}),sablono.interpreter.interpret.call(null,text));
}),null,"label");
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"try_devcards_rum.core","try_devcards_rum.core",219716649),new cljs.core.Keyword(null,"rum-card","rum-card",1966320159)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"rum-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),try_devcards_rum.core.label.call(null,"fried chicken taco is the best"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
try_devcards_rum.core.counter_atom = cljs.core.atom.call(null,(0));
try_devcards_rum.core.counter = rum.core.build_defc.call(null,(function (){
return React.createElement("button",({"onClick": (function (_){
return cljs.core.swap_BANG_.call(null,try_devcards_rum.core.counter_atom,cljs.core.inc);
})}),"Clicks! ",sablono.interpreter.interpret.call(null,rum.core.react.call(null,try_devcards_rum.core.counter_atom)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"counter");
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"try_devcards_rum.core","try_devcards_rum.core",219716649),new cljs.core.Keyword(null,"rum-card-counter","rum-card-counter",1307849866)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"rum-card-counter",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),try_devcards_rum.core.counter.call(null),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
try_devcards_rum.core.format_name = (function try_devcards_rum$core$format_name(var_args){
var args38518 = [];
var len__25923__auto___38521 = arguments.length;
var i__25924__auto___38522 = (0);
while(true){
if((i__25924__auto___38522 < len__25923__auto___38521)){
args38518.push((arguments[i__25924__auto___38522]));

var G__38523 = (i__25924__auto___38522 + (1));
i__25924__auto___38522 = G__38523;
continue;
} else {
}
break;
}

var G__38520 = args38518.length;
switch (G__38520) {
case 1:
return try_devcards_rum.core.format_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return try_devcards_rum.core.format_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38518.length)].join('')));

}
});

try_devcards_rum.core.format_name.cljs$core$IFn$_invoke$arity$1 = (function (first_name){
return [cljs.core.str("DOE, "),cljs.core.str(first_name)].join('');
});

try_devcards_rum.core.format_name.cljs$core$IFn$_invoke$arity$2 = (function (first_name,last_name){
return [cljs.core.str(last_name),cljs.core.str(", "),cljs.core.str(first_name)].join('');
});

try_devcards_rum.core.format_name.cljs$lang$maxFixedArity = 2;

devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"try_devcards_rum.core","try_devcards_rum.core",219716649),new cljs.core.Keyword(null,"my-name-test","my-name-test",-456508439)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"my-name-test",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__33091__auto__ = cljs.core._conj.call(null,(function (){var x__25682__auto__ = try_devcards_rum.core.format_name.call(null,"nola","stowe");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),"stowe, nola");
var result__33092__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto__);
if(cljs.core.truth_(result__33092__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
}

return result__33092__auto__;
}catch (e38525){var t__33129__auto__ = e38525;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
}})());

try{try{var values__33091__auto___38535 = cljs.core._conj.call(null,(function (){var x__25682__auto__ = try_devcards_rum.core.format_name.call(null,"nola");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),"DOE, nola");
var result__33092__auto___38536 = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto___38535);
if(cljs.core.truth_(result__33092__auto___38536)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto___38535),new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto___38535);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
}

}catch (e38526){var t__33129__auto___38537 = e38526;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto___38537,new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
}
try{var values__33091__auto___38538 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),true);
var result__33092__auto___38539 = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto___38538);
if(cljs.core.truth_(result__33092__auto___38539)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto___38538),new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto___38538);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
}

}catch (e38527){var t__33129__auto___38540 = e38527;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto___38540,new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
}
try{var values__33091__auto___38541 = cljs.core._conj.call(null,(function (){var x__25682__auto__ = ((1) + (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),(3));
var result__33092__auto___38542 = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto___38541);
if(cljs.core.truth_(result__33092__auto___38542)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto___38541),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto___38541);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e38528){var t__33129__auto___38543 = e38528;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto___38543,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__33091__auto__ = cljs.core._conj.call(null,(function (){var x__25682__auto__ = ((1) + (3));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),(4));
var result__33092__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto__);
if(cljs.core.truth_(result__33092__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
}

return result__33092__auto__;
}catch (e38529){var t__33129__auto__ = e38529;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

try_devcards_rum.core.my_name_test = (function try_devcards_rum$core$my_name_test(){
return cljs.test.test_var.call(null,try_devcards_rum$core$my_name_test.cljs$lang$var);
});
try_devcards_rum.core.my_name_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__33091__auto__ = cljs.core._conj.call(null,(function (){var x__25682__auto__ = try_devcards_rum.core.format_name.call(null,"nola","stowe");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),"stowe, nola");
var result__33092__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto__);
if(cljs.core.truth_(result__33092__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
}

return result__33092__auto__;
}catch (e38530){var t__33129__auto__ = e38530;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
}})());

try{try{var values__33091__auto___38544 = cljs.core._conj.call(null,(function (){var x__25682__auto__ = try_devcards_rum.core.format_name.call(null,"nola");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),"DOE, nola");
var result__33092__auto___38545 = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto___38544);
if(cljs.core.truth_(result__33092__auto___38545)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto___38544),new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto___38544);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
}

}catch (e38531){var t__33129__auto___38546 = e38531;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto___38546,new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
}
try{var values__33091__auto___38547 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),true);
var result__33092__auto___38548 = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto___38547);
if(cljs.core.truth_(result__33092__auto___38548)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto___38547),new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto___38547);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
}

}catch (e38532){var t__33129__auto___38549 = e38532;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto___38549,new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
}
try{var values__33091__auto___38550 = cljs.core._conj.call(null,(function (){var x__25682__auto__ = ((1) + (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),(3));
var result__33092__auto___38551 = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto___38550);
if(cljs.core.truth_(result__33092__auto___38551)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto___38550),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto___38550);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e38533){var t__33129__auto___38552 = e38533;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto___38552,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__33091__auto__ = cljs.core._conj.call(null,(function (){var x__25682__auto__ = ((1) + (3));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),(4));
var result__33092__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__33091__auto__);
if(cljs.core.truth_(result__33092__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__33091__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__33091__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
}

return result__33092__auto__;
}catch (e38534){var t__33129__auto__ = e38534;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33129__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

try_devcards_rum.core.my_name_test.cljs$lang$var = new cljs.core.Var(function(){return try_devcards_rum.core.my_name_test;},new cljs.core.Symbol("try-devcards-rum.core","my-name-test","try-devcards-rum.core/my-name-test",-1816035520,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"try-devcards-rum.core","try-devcards-rum.core",-1347771960,null),new cljs.core.Symbol(null,"my-name-test","my-name-test",1184023088,null),"src/try_devcards_rum/core.cljs",22,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(try_devcards_rum.core.my_name_test)?try_devcards_rum.core.my_name_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"try_devcards_rum.core","try_devcards_rum.core",219716649),new cljs.core.Keyword(null,"running-tests","running-tests",509612207)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"running-tests",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),try_devcards_rum.core.my_name_test.call(null),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=core.js.map?rel=1538706525269