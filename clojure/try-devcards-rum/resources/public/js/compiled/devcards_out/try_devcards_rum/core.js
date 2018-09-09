// Compiled by ClojureScript 1.9.229 {}
goog.provide('try_devcards_rum.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs.reader');
goog.require('cljs.test');
cljs.core.enable_console_print_BANG_.call(null);
try_devcards_rum.core.label = rum.core.build_defc.call(null,(function (text){
return React.createElement("div",({"className": "label"}),sablono.interpreter.interpret.call(null,text));
}),null,"label");
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"try_devcards_rum.core","try_devcards_rum.core",219716649),new cljs.core.Keyword(null,"rum-card","rum-card",1966320159)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"rum-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),try_devcards_rum.core.label.call(null,"foobar"),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
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
var args38607 = [];
var len__25923__auto___38610 = arguments.length;
var i__25924__auto___38611 = (0);
while(true){
if((i__25924__auto___38611 < len__25923__auto___38610)){
args38607.push((arguments[i__25924__auto___38611]));

var G__38612 = (i__25924__auto___38611 + (1));
i__25924__auto___38611 = G__38612;
continue;
} else {
}
break;
}

var G__38609 = args38607.length;
switch (G__38609) {
case 1:
return try_devcards_rum.core.format_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return try_devcards_rum.core.format_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38607.length)].join('')));

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
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__32913__auto__ = cljs.core._conj.call(null,(function (){var x__25682__auto__ = try_devcards_rum.core.format_name.call(null,"nola","stowe");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),"stowe, nola");
var result__32914__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto__);
if(cljs.core.truth_(result__32914__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
}

return result__32914__auto__;
}catch (e38614){var t__32951__auto__ = e38614;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
}})());

try{try{var values__32913__auto___38624 = cljs.core._conj.call(null,(function (){var x__25682__auto__ = try_devcards_rum.core.format_name.call(null,"nola");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),"DOE, nola");
var result__32914__auto___38625 = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto___38624);
if(cljs.core.truth_(result__32914__auto___38625)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto___38624),new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto___38624);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
}

}catch (e38615){var t__32951__auto___38626 = e38615;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto___38626,new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
}
try{var values__32913__auto___38627 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),true);
var result__32914__auto___38628 = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto___38627);
if(cljs.core.truth_(result__32914__auto___38628)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto___38627),new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto___38627);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
}

}catch (e38616){var t__32951__auto___38629 = e38616;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto___38629,new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
}
try{var values__32913__auto___38630 = cljs.core._conj.call(null,(function (){var x__25682__auto__ = ((1) + (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),(3));
var result__32914__auto___38631 = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto___38630);
if(cljs.core.truth_(result__32914__auto___38631)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto___38630),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto___38630);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e38617){var t__32951__auto___38632 = e38617;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto___38632,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__32913__auto__ = cljs.core._conj.call(null,(function (){var x__25682__auto__ = ((1) + (3));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),(4));
var result__32914__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto__);
if(cljs.core.truth_(result__32914__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
}

return result__32914__auto__;
}catch (e38618){var t__32951__auto__ = e38618;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

try_devcards_rum.core.my_name_test = (function try_devcards_rum$core$my_name_test(){
return cljs.test.test_var.call(null,try_devcards_rum$core$my_name_test.cljs$lang$var);
});
try_devcards_rum.core.my_name_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,(function (){try{var values__32913__auto__ = cljs.core._conj.call(null,(function (){var x__25682__auto__ = try_devcards_rum.core.format_name.call(null,"nola","stowe");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),"stowe, nola");
var result__32914__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto__);
if(cljs.core.truth_(result__32914__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
}

return result__32914__auto__;
}catch (e38619){var t__32951__auto__ = e38619;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"stowe, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola","stowe")),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"testing first and last name"], null));
}})());

try{try{var values__32913__auto___38633 = cljs.core._conj.call(null,(function (){var x__25682__auto__ = try_devcards_rum.core.format_name.call(null,"nola");
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),"DOE, nola");
var result__32914__auto___38634 = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto___38633);
if(cljs.core.truth_(result__32914__auto___38634)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto___38633),new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto___38633);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
}

}catch (e38620){var t__32951__auto___38635 = e38620;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"DOE, nola",cljs.core.list(new cljs.core.Symbol(null,"format-name","format-name",-1392594648,null),"nola")),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto___38635,new cljs.core.Keyword(null,"message","message",-406056002),"Only a first name"], null));
}
try{var values__32913__auto___38636 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,false),true);
var result__32914__auto___38637 = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto___38636);
if(cljs.core.truth_(result__32914__auto___38637)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto___38636),new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto___38636);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
}

}catch (e38621){var t__32951__auto___38638 = e38621;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),true,false),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto___38638,new cljs.core.Keyword(null,"message","message",-406056002),"This is false on purpose"], null));
}
try{var values__32913__auto___38639 = cljs.core._conj.call(null,(function (){var x__25682__auto__ = ((1) + (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),(3));
var result__32914__auto___38640 = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto___38639);
if(cljs.core.truth_(result__32914__auto___38640)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto___38639),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto___38639);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e38622){var t__32951__auto___38641 = e38622;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(2))),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto___38641,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__32913__auto__ = cljs.core._conj.call(null,(function (){var x__25682__auto__ = ((1) + (3));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),(4));
var result__32914__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32913__auto__);
if(cljs.core.truth_(result__32914__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32913__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25682__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32913__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25682__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
}

return result__32914__auto__;
}catch (e38623){var t__32951__auto__ = e38623;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(3))),new cljs.core.Keyword(null,"actual","actual",107306363),t__32951__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"adding 1 and 3"], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

try_devcards_rum.core.my_name_test.cljs$lang$var = new cljs.core.Var(function(){return try_devcards_rum.core.my_name_test;},new cljs.core.Symbol("try-devcards-rum.core","my-name-test","try-devcards-rum.core/my-name-test",-1816035520,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"try-devcards-rum.core","try-devcards-rum.core",-1347771960,null),new cljs.core.Symbol(null,"my-name-test","my-name-test",1184023088,null),"/Users/nostowe/personal/rubygeek/clojure/try-devcards-rum/src/try_devcards_rum/core.cljs",22,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(try_devcards_rum.core.my_name_test)?try_devcards_rum.core.my_name_test.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"try_devcards_rum.core","try_devcards_rum.core",219716649),new cljs.core.Keyword(null,"running-tests","running-tests",509612207)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"running-tests",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),try_devcards_rum.core.my_name_test.call(null),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=core.js.map?rel=1533225807199