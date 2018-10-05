// Compiled by ClojureScript 1.9.229 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('rum.cursor');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('rum.derived_atom');
goog.require('sablono.core');
goog.require('cljsjs.react.dom');
goog.require('rum.util');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__34384 = cljs.core.seq.call(null,props);
var chunk__34386 = null;
var count__34387 = (0);
var i__34388 = (0);
while(true){
if((i__34388 < count__34387)){
var vec__34390 = cljs.core._nth.call(null,chunk__34386,i__34388);
var k = cljs.core.nth.call(null,vec__34390,(0),null);
var v = cljs.core.nth.call(null,vec__34390,(1),null);
if(cljs.core.some_QMARK_.call(null,v)){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__34396 = seq__34384;
var G__34397 = chunk__34386;
var G__34398 = count__34387;
var G__34399 = (i__34388 + (1));
seq__34384 = G__34396;
chunk__34386 = G__34397;
count__34387 = G__34398;
i__34388 = G__34399;
continue;
} else {
var G__34400 = seq__34384;
var G__34401 = chunk__34386;
var G__34402 = count__34387;
var G__34403 = (i__34388 + (1));
seq__34384 = G__34400;
chunk__34386 = G__34401;
count__34387 = G__34402;
i__34388 = G__34403;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34384);
if(temp__4657__auto__){
var seq__34384__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34384__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34384__$1);
var G__34404 = cljs.core.chunk_rest.call(null,seq__34384__$1);
var G__34405 = c__25659__auto__;
var G__34406 = cljs.core.count.call(null,c__25659__auto__);
var G__34407 = (0);
seq__34384 = G__34404;
chunk__34386 = G__34405;
count__34387 = G__34406;
i__34388 = G__34407;
continue;
} else {
var vec__34393 = cljs.core.first.call(null,seq__34384__$1);
var k = cljs.core.nth.call(null,vec__34393,(0),null);
var v = cljs.core.nth.call(null,vec__34393,(1),null);
if(cljs.core.some_QMARK_.call(null,v)){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__34408 = cljs.core.next.call(null,seq__34384__$1);
var G__34409 = null;
var G__34410 = (0);
var G__34411 = (0);
seq__34384 = G__34408;
chunk__34386 = G__34409;
count__34387 = G__34410;
i__34388 = G__34411;
continue;
} else {
var G__34412 = cljs.core.next.call(null,seq__34384__$1);
var G__34413 = null;
var G__34414 = (0);
var G__34415 = (0);
seq__34384 = G__34412;
chunk__34386 = G__34413;
count__34387 = G__34414;
i__34388 = G__34415;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__34417_SHARP_,p2__34416_SHARP_){
return p2__34416_SHARP_.call(null,p1__34417_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__34419_SHARP_,p2__34418_SHARP_){
return p2__34418_SHARP_.call(null,old_state,p1__34419_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__24848__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__34420_SHARP_){
return p1__34420_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__34425 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__34425,(0),null);
var next_state = cljs.core.nth.call(null,vec__34425,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__34421_SHARP_){
return p1__34421_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__34428__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__34428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34429__i = 0, G__34429__a = new Array(arguments.length -  0);
while (G__34429__i < G__34429__a.length) {G__34429__a[G__34429__i] = arguments[G__34429__i + 0]; ++G__34429__i;}
  args = new cljs.core.IndexedSeq(G__34429__a,0);
} 
return G__34428__delegate.call(this,args);};
G__34428.cljs$lang$maxFixedArity = 0;
G__34428.cljs$lang$applyTo = (function (arglist__34430){
var args = cljs.core.seq(arglist__34430);
return G__34428__delegate(args);
});
G__34428.cljs$core$IFn$_invoke$arity$variadic = G__34428__delegate;
return G__34428;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__34431__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__34431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34432__i = 0, G__34432__a = new Array(arguments.length -  0);
while (G__34432__i < G__34432__a.length) {G__34432__a[G__34432__i] = arguments[G__34432__i + 0]; ++G__34432__i;}
  args = new cljs.core.IndexedSeq(G__34432__a,0);
} 
return G__34431__delegate.call(this,args);};
G__34431.cljs$lang$maxFixedArity = 0;
G__34431.cljs$lang$applyTo = (function (arglist__34433){
var args = cljs.core.seq(arglist__34433);
return G__34431__delegate(args);
});
G__34431.cljs$core$IFn$_invoke$arity$variadic = G__34431__delegate;
return G__34431;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__34434__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__34434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34435__i = 0, G__34435__a = new Array(arguments.length -  0);
while (G__34435__i < G__34435__a.length) {G__34435__a[G__34435__i] = arguments[G__34435__i + 0]; ++G__34435__i;}
  args = new cljs.core.IndexedSeq(G__34435__a,0);
} 
return G__34434__delegate.call(this,args);};
G__34434.cljs$lang$maxFixedArity = 0;
G__34434.cljs$lang$applyTo = (function (arglist__34436){
var args = cljs.core.seq(arglist__34436);
return G__34434__delegate(args);
});
G__34434.cljs$core$IFn$_invoke$arity$variadic = G__34434__delegate;
return G__34434;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__24848__auto__ = (function (){var and__24836__auto__ = typeof window !== 'undefined';
if(and__24836__auto__){
var or__24848__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__24848__auto____$1)){
return or__24848__auto____$1;
} else {
var or__24848__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__24848__auto____$2)){
return or__24848__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return ((function (or__24848__auto__){
return (function (p1__34437_SHARP_){
return setTimeout(p1__34437_SHARP_,(16));
});
;})(or__24848__auto__))
}
})();
rum.core.batch = (function (){var or__24848__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__24848__auto____$1)){
return or__24848__auto____$1;
} else {
return ((function (or__24848__auto____$1,or__24848__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__24848__auto____$1,or__24848__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__34444 = cljs.core.seq.call(null,queue);
var chunk__34446 = null;
var count__34447 = (0);
var i__34448 = (0);
while(true){
if((i__34448 < count__34447)){
var comp = cljs.core._nth.call(null,chunk__34446,i__34448);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__34450 = seq__34444;
var G__34451 = chunk__34446;
var G__34452 = count__34447;
var G__34453 = (i__34448 + (1));
seq__34444 = G__34450;
chunk__34446 = G__34451;
count__34447 = G__34452;
i__34448 = G__34453;
continue;
} else {
var G__34454 = seq__34444;
var G__34455 = chunk__34446;
var G__34456 = count__34447;
var G__34457 = (i__34448 + (1));
seq__34444 = G__34454;
chunk__34446 = G__34455;
count__34447 = G__34456;
i__34448 = G__34457;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34444);
if(temp__4657__auto__){
var seq__34444__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34444__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34444__$1);
var G__34458 = cljs.core.chunk_rest.call(null,seq__34444__$1);
var G__34459 = c__25659__auto__;
var G__34460 = cljs.core.count.call(null,c__25659__auto__);
var G__34461 = (0);
seq__34444 = G__34458;
chunk__34446 = G__34459;
count__34447 = G__34460;
i__34448 = G__34461;
continue;
} else {
var comp = cljs.core.first.call(null,seq__34444__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__34462 = cljs.core.next.call(null,seq__34444__$1);
var G__34463 = null;
var G__34464 = (0);
var G__34465 = (0);
seq__34444 = G__34462;
chunk__34446 = G__34463;
count__34447 = G__34464;
i__34448 = G__34465;
continue;
} else {
var G__34466 = cljs.core.next.call(null,seq__34444__$1);
var G__34467 = null;
var G__34468 = (0);
var G__34469 = (0);
seq__34444 = G__34466;
chunk__34446 = G__34467;
count__34447 = G__34468;
i__34448 = G__34469;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args34470 = [];
var len__25923__auto___34473 = arguments.length;
var i__25924__auto___34474 = (0);
while(true){
if((i__25924__auto___34474 < len__25923__auto___34473)){
args34470.push((arguments[i__25924__auto___34474]));

var G__34475 = (i__25924__auto___34474 + (1));
i__25924__auto___34474 = G__34475;
continue;
} else {
}
break;
}

var G__34472 = args34470.length;
switch (G__34472) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34470.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_34477 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__34478 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__34478,(0),null);
var next_state = cljs.core.nth.call(null,vec__34478,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__34481_34493 = cljs.core.seq.call(null,old_reactions);
var chunk__34482_34494 = null;
var count__34483_34495 = (0);
var i__34484_34496 = (0);
while(true){
if((i__34484_34496 < count__34483_34495)){
var ref_34497 = cljs.core._nth.call(null,chunk__34482_34494,i__34484_34496);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_34497)){
} else {
cljs.core.remove_watch.call(null,ref_34497,key);
}

var G__34498 = seq__34481_34493;
var G__34499 = chunk__34482_34494;
var G__34500 = count__34483_34495;
var G__34501 = (i__34484_34496 + (1));
seq__34481_34493 = G__34498;
chunk__34482_34494 = G__34499;
count__34483_34495 = G__34500;
i__34484_34496 = G__34501;
continue;
} else {
var temp__4657__auto___34502 = cljs.core.seq.call(null,seq__34481_34493);
if(temp__4657__auto___34502){
var seq__34481_34503__$1 = temp__4657__auto___34502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34481_34503__$1)){
var c__25659__auto___34504 = cljs.core.chunk_first.call(null,seq__34481_34503__$1);
var G__34505 = cljs.core.chunk_rest.call(null,seq__34481_34503__$1);
var G__34506 = c__25659__auto___34504;
var G__34507 = cljs.core.count.call(null,c__25659__auto___34504);
var G__34508 = (0);
seq__34481_34493 = G__34505;
chunk__34482_34494 = G__34506;
count__34483_34495 = G__34507;
i__34484_34496 = G__34508;
continue;
} else {
var ref_34509 = cljs.core.first.call(null,seq__34481_34503__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_34509)){
} else {
cljs.core.remove_watch.call(null,ref_34509,key);
}

var G__34510 = cljs.core.next.call(null,seq__34481_34503__$1);
var G__34511 = null;
var G__34512 = (0);
var G__34513 = (0);
seq__34481_34493 = G__34510;
chunk__34482_34494 = G__34511;
count__34483_34495 = G__34512;
i__34484_34496 = G__34513;
continue;
}
} else {
}
}
break;
}

var seq__34485_34514 = cljs.core.seq.call(null,new_reactions);
var chunk__34486_34515 = null;
var count__34487_34516 = (0);
var i__34488_34517 = (0);
while(true){
if((i__34488_34517 < count__34487_34516)){
var ref_34518 = cljs.core._nth.call(null,chunk__34486_34515,i__34488_34517);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_34518)){
} else {
cljs.core.add_watch.call(null,ref_34518,key,((function (seq__34485_34514,chunk__34486_34515,count__34487_34516,i__34488_34517,ref_34518,comp,old_reactions,vec__34478,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34477){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__34485_34514,chunk__34486_34515,count__34487_34516,i__34488_34517,ref_34518,comp,old_reactions,vec__34478,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34477))
);
}

var G__34519 = seq__34485_34514;
var G__34520 = chunk__34486_34515;
var G__34521 = count__34487_34516;
var G__34522 = (i__34488_34517 + (1));
seq__34485_34514 = G__34519;
chunk__34486_34515 = G__34520;
count__34487_34516 = G__34521;
i__34488_34517 = G__34522;
continue;
} else {
var temp__4657__auto___34523 = cljs.core.seq.call(null,seq__34485_34514);
if(temp__4657__auto___34523){
var seq__34485_34524__$1 = temp__4657__auto___34523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34485_34524__$1)){
var c__25659__auto___34525 = cljs.core.chunk_first.call(null,seq__34485_34524__$1);
var G__34526 = cljs.core.chunk_rest.call(null,seq__34485_34524__$1);
var G__34527 = c__25659__auto___34525;
var G__34528 = cljs.core.count.call(null,c__25659__auto___34525);
var G__34529 = (0);
seq__34485_34514 = G__34526;
chunk__34486_34515 = G__34527;
count__34487_34516 = G__34528;
i__34488_34517 = G__34529;
continue;
} else {
var ref_34530 = cljs.core.first.call(null,seq__34485_34524__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_34530)){
} else {
cljs.core.add_watch.call(null,ref_34530,key,((function (seq__34485_34514,chunk__34486_34515,count__34487_34516,i__34488_34517,ref_34530,seq__34485_34524__$1,temp__4657__auto___34523,comp,old_reactions,vec__34478,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34477){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__34485_34514,chunk__34486_34515,count__34487_34516,i__34488_34517,ref_34530,seq__34485_34524__$1,temp__4657__auto___34523,comp,old_reactions,vec__34478,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34477))
);
}

var G__34531 = cljs.core.next.call(null,seq__34485_34524__$1);
var G__34532 = null;
var G__34533 = (0);
var G__34534 = (0);
seq__34485_34514 = G__34531;
chunk__34486_34515 = G__34532;
count__34487_34516 = G__34533;
i__34488_34517 = G__34534;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_34477;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_34535 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__34489_34536 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__34490_34537 = null;
var count__34491_34538 = (0);
var i__34492_34539 = (0);
while(true){
if((i__34492_34539 < count__34491_34538)){
var ref_34540 = cljs.core._nth.call(null,chunk__34490_34537,i__34492_34539);
cljs.core.remove_watch.call(null,ref_34540,key_34535);

var G__34541 = seq__34489_34536;
var G__34542 = chunk__34490_34537;
var G__34543 = count__34491_34538;
var G__34544 = (i__34492_34539 + (1));
seq__34489_34536 = G__34541;
chunk__34490_34537 = G__34542;
count__34491_34538 = G__34543;
i__34492_34539 = G__34544;
continue;
} else {
var temp__4657__auto___34545 = cljs.core.seq.call(null,seq__34489_34536);
if(temp__4657__auto___34545){
var seq__34489_34546__$1 = temp__4657__auto___34545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34489_34546__$1)){
var c__25659__auto___34547 = cljs.core.chunk_first.call(null,seq__34489_34546__$1);
var G__34548 = cljs.core.chunk_rest.call(null,seq__34489_34546__$1);
var G__34549 = c__25659__auto___34547;
var G__34550 = cljs.core.count.call(null,c__25659__auto___34547);
var G__34551 = (0);
seq__34489_34536 = G__34548;
chunk__34490_34537 = G__34549;
count__34491_34538 = G__34550;
i__34492_34539 = G__34551;
continue;
} else {
var ref_34552 = cljs.core.first.call(null,seq__34489_34546__$1);
cljs.core.remove_watch.call(null,ref_34552,key_34535);

var G__34553 = cljs.core.next.call(null,seq__34489_34546__$1);
var G__34554 = null;
var G__34555 = (0);
var G__34556 = (0);
seq__34489_34536 = G__34553;
chunk__34490_34537 = G__34554;
count__34491_34538 = G__34555;
i__34492_34539 = G__34556;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__25930__auto__ = [];
var len__25923__auto___34563 = arguments.length;
var i__25924__auto___34564 = (0);
while(true){
if((i__25924__auto___34564 < len__25923__auto___34563)){
args__25930__auto__.push((arguments[i__25924__auto___34564]));

var G__34565 = (i__25924__auto___34564 + (1));
i__25924__auto___34564 = G__34565;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((2) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25931__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__34560){
var map__34561 = p__34560;
var map__34561__$1 = ((((!((map__34561 == null)))?((((map__34561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34561):map__34561);
var options = map__34561__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq34557){
var G__34558 = cljs.core.first.call(null,seq34557);
var seq34557__$1 = cljs.core.next.call(null,seq34557);
var G__34559 = cljs.core.first.call(null,seq34557__$1);
var seq34557__$2 = cljs.core.next.call(null,seq34557__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__34558,G__34559,seq34557__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__25930__auto__ = [];
var len__25923__auto___34569 = arguments.length;
var i__25924__auto___34570 = (0);
while(true){
if((i__25924__auto___34570 < len__25923__auto___34569)){
args__25930__auto__.push((arguments[i__25924__auto___34570]));

var G__34571 = (i__25924__auto___34570 + (1));
i__25924__auto___34570 = G__34571;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((2) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25931__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq34566){
var G__34567 = cljs.core.first.call(null,seq34566);
var seq34566__$1 = cljs.core.next.call(null,seq34566);
var G__34568 = cljs.core.first.call(null,seq34566__$1);
var seq34566__$2 = cljs.core.next.call(null,seq34566__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__34567,G__34568,seq34566__$2);
});


//# sourceMappingURL=core.js.map?rel=1538702795443