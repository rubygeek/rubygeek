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
var seq__34206 = cljs.core.seq.call(null,props);
var chunk__34208 = null;
var count__34209 = (0);
var i__34210 = (0);
while(true){
if((i__34210 < count__34209)){
var vec__34212 = cljs.core._nth.call(null,chunk__34208,i__34210);
var k = cljs.core.nth.call(null,vec__34212,(0),null);
var v = cljs.core.nth.call(null,vec__34212,(1),null);
if(cljs.core.some_QMARK_.call(null,v)){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__34218 = seq__34206;
var G__34219 = chunk__34208;
var G__34220 = count__34209;
var G__34221 = (i__34210 + (1));
seq__34206 = G__34218;
chunk__34208 = G__34219;
count__34209 = G__34220;
i__34210 = G__34221;
continue;
} else {
var G__34222 = seq__34206;
var G__34223 = chunk__34208;
var G__34224 = count__34209;
var G__34225 = (i__34210 + (1));
seq__34206 = G__34222;
chunk__34208 = G__34223;
count__34209 = G__34224;
i__34210 = G__34225;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34206);
if(temp__4657__auto__){
var seq__34206__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34206__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34206__$1);
var G__34226 = cljs.core.chunk_rest.call(null,seq__34206__$1);
var G__34227 = c__25659__auto__;
var G__34228 = cljs.core.count.call(null,c__25659__auto__);
var G__34229 = (0);
seq__34206 = G__34226;
chunk__34208 = G__34227;
count__34209 = G__34228;
i__34210 = G__34229;
continue;
} else {
var vec__34215 = cljs.core.first.call(null,seq__34206__$1);
var k = cljs.core.nth.call(null,vec__34215,(0),null);
var v = cljs.core.nth.call(null,vec__34215,(1),null);
if(cljs.core.some_QMARK_.call(null,v)){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));

var G__34230 = cljs.core.next.call(null,seq__34206__$1);
var G__34231 = null;
var G__34232 = (0);
var G__34233 = (0);
seq__34206 = G__34230;
chunk__34208 = G__34231;
count__34209 = G__34232;
i__34210 = G__34233;
continue;
} else {
var G__34234 = cljs.core.next.call(null,seq__34206__$1);
var G__34235 = null;
var G__34236 = (0);
var G__34237 = (0);
seq__34206 = G__34234;
chunk__34208 = G__34235;
count__34209 = G__34236;
i__34210 = G__34237;
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
return (function (p1__34239_SHARP_,p2__34238_SHARP_){
return p2__34238_SHARP_.call(null,p1__34239_SHARP_);
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
return (function (p1__34241_SHARP_,p2__34240_SHARP_){
return p2__34240_SHARP_.call(null,old_state,p1__34241_SHARP_);
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
return (function (p1__34242_SHARP_){
return p1__34242_SHARP_.call(null,old_state,new_state);
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
var vec__34247 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__34247,(0),null);
var next_state = cljs.core.nth.call(null,vec__34247,(1),null);
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
return (function (p1__34243_SHARP_){
return p1__34243_SHARP_.call(null,state);
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
var G__34250__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__34250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34251__i = 0, G__34251__a = new Array(arguments.length -  0);
while (G__34251__i < G__34251__a.length) {G__34251__a[G__34251__i] = arguments[G__34251__i + 0]; ++G__34251__i;}
  args = new cljs.core.IndexedSeq(G__34251__a,0);
} 
return G__34250__delegate.call(this,args);};
G__34250.cljs$lang$maxFixedArity = 0;
G__34250.cljs$lang$applyTo = (function (arglist__34252){
var args = cljs.core.seq(arglist__34252);
return G__34250__delegate(args);
});
G__34250.cljs$core$IFn$_invoke$arity$variadic = G__34250__delegate;
return G__34250;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__34253__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__34253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34254__i = 0, G__34254__a = new Array(arguments.length -  0);
while (G__34254__i < G__34254__a.length) {G__34254__a[G__34254__i] = arguments[G__34254__i + 0]; ++G__34254__i;}
  args = new cljs.core.IndexedSeq(G__34254__a,0);
} 
return G__34253__delegate.call(this,args);};
G__34253.cljs$lang$maxFixedArity = 0;
G__34253.cljs$lang$applyTo = (function (arglist__34255){
var args = cljs.core.seq(arglist__34255);
return G__34253__delegate(args);
});
G__34253.cljs$core$IFn$_invoke$arity$variadic = G__34253__delegate;
return G__34253;
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
var G__34256__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__34256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34257__i = 0, G__34257__a = new Array(arguments.length -  0);
while (G__34257__i < G__34257__a.length) {G__34257__a[G__34257__i] = arguments[G__34257__i + 0]; ++G__34257__i;}
  args = new cljs.core.IndexedSeq(G__34257__a,0);
} 
return G__34256__delegate.call(this,args);};
G__34256.cljs$lang$maxFixedArity = 0;
G__34256.cljs$lang$applyTo = (function (arglist__34258){
var args = cljs.core.seq(arglist__34258);
return G__34256__delegate(args);
});
G__34256.cljs$core$IFn$_invoke$arity$variadic = G__34256__delegate;
return G__34256;
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
return (function (p1__34259_SHARP_){
return setTimeout(p1__34259_SHARP_,(16));
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
var seq__34266 = cljs.core.seq.call(null,queue);
var chunk__34268 = null;
var count__34269 = (0);
var i__34270 = (0);
while(true){
if((i__34270 < count__34269)){
var comp = cljs.core._nth.call(null,chunk__34268,i__34270);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__34272 = seq__34266;
var G__34273 = chunk__34268;
var G__34274 = count__34269;
var G__34275 = (i__34270 + (1));
seq__34266 = G__34272;
chunk__34268 = G__34273;
count__34269 = G__34274;
i__34270 = G__34275;
continue;
} else {
var G__34276 = seq__34266;
var G__34277 = chunk__34268;
var G__34278 = count__34269;
var G__34279 = (i__34270 + (1));
seq__34266 = G__34276;
chunk__34268 = G__34277;
count__34269 = G__34278;
i__34270 = G__34279;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34266);
if(temp__4657__auto__){
var seq__34266__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34266__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34266__$1);
var G__34280 = cljs.core.chunk_rest.call(null,seq__34266__$1);
var G__34281 = c__25659__auto__;
var G__34282 = cljs.core.count.call(null,c__25659__auto__);
var G__34283 = (0);
seq__34266 = G__34280;
chunk__34268 = G__34281;
count__34269 = G__34282;
i__34270 = G__34283;
continue;
} else {
var comp = cljs.core.first.call(null,seq__34266__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();

var G__34284 = cljs.core.next.call(null,seq__34266__$1);
var G__34285 = null;
var G__34286 = (0);
var G__34287 = (0);
seq__34266 = G__34284;
chunk__34268 = G__34285;
count__34269 = G__34286;
i__34270 = G__34287;
continue;
} else {
var G__34288 = cljs.core.next.call(null,seq__34266__$1);
var G__34289 = null;
var G__34290 = (0);
var G__34291 = (0);
seq__34266 = G__34288;
chunk__34268 = G__34289;
count__34269 = G__34290;
i__34270 = G__34291;
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
var args34292 = [];
var len__25923__auto___34295 = arguments.length;
var i__25924__auto___34296 = (0);
while(true){
if((i__25924__auto___34296 < len__25923__auto___34295)){
args34292.push((arguments[i__25924__auto___34296]));

var G__34297 = (i__25924__auto___34296 + (1));
i__25924__auto___34296 = G__34297;
continue;
} else {
}
break;
}

var G__34294 = args34292.length;
switch (G__34294) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34292.length)].join('')));

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
var _STAR_reactions_STAR_34299 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__34300 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__34300,(0),null);
var next_state = cljs.core.nth.call(null,vec__34300,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__34303_34315 = cljs.core.seq.call(null,old_reactions);
var chunk__34304_34316 = null;
var count__34305_34317 = (0);
var i__34306_34318 = (0);
while(true){
if((i__34306_34318 < count__34305_34317)){
var ref_34319 = cljs.core._nth.call(null,chunk__34304_34316,i__34306_34318);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_34319)){
} else {
cljs.core.remove_watch.call(null,ref_34319,key);
}

var G__34320 = seq__34303_34315;
var G__34321 = chunk__34304_34316;
var G__34322 = count__34305_34317;
var G__34323 = (i__34306_34318 + (1));
seq__34303_34315 = G__34320;
chunk__34304_34316 = G__34321;
count__34305_34317 = G__34322;
i__34306_34318 = G__34323;
continue;
} else {
var temp__4657__auto___34324 = cljs.core.seq.call(null,seq__34303_34315);
if(temp__4657__auto___34324){
var seq__34303_34325__$1 = temp__4657__auto___34324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34303_34325__$1)){
var c__25659__auto___34326 = cljs.core.chunk_first.call(null,seq__34303_34325__$1);
var G__34327 = cljs.core.chunk_rest.call(null,seq__34303_34325__$1);
var G__34328 = c__25659__auto___34326;
var G__34329 = cljs.core.count.call(null,c__25659__auto___34326);
var G__34330 = (0);
seq__34303_34315 = G__34327;
chunk__34304_34316 = G__34328;
count__34305_34317 = G__34329;
i__34306_34318 = G__34330;
continue;
} else {
var ref_34331 = cljs.core.first.call(null,seq__34303_34325__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_34331)){
} else {
cljs.core.remove_watch.call(null,ref_34331,key);
}

var G__34332 = cljs.core.next.call(null,seq__34303_34325__$1);
var G__34333 = null;
var G__34334 = (0);
var G__34335 = (0);
seq__34303_34315 = G__34332;
chunk__34304_34316 = G__34333;
count__34305_34317 = G__34334;
i__34306_34318 = G__34335;
continue;
}
} else {
}
}
break;
}

var seq__34307_34336 = cljs.core.seq.call(null,new_reactions);
var chunk__34308_34337 = null;
var count__34309_34338 = (0);
var i__34310_34339 = (0);
while(true){
if((i__34310_34339 < count__34309_34338)){
var ref_34340 = cljs.core._nth.call(null,chunk__34308_34337,i__34310_34339);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_34340)){
} else {
cljs.core.add_watch.call(null,ref_34340,key,((function (seq__34307_34336,chunk__34308_34337,count__34309_34338,i__34310_34339,ref_34340,comp,old_reactions,vec__34300,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34299){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__34307_34336,chunk__34308_34337,count__34309_34338,i__34310_34339,ref_34340,comp,old_reactions,vec__34300,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34299))
);
}

var G__34341 = seq__34307_34336;
var G__34342 = chunk__34308_34337;
var G__34343 = count__34309_34338;
var G__34344 = (i__34310_34339 + (1));
seq__34307_34336 = G__34341;
chunk__34308_34337 = G__34342;
count__34309_34338 = G__34343;
i__34310_34339 = G__34344;
continue;
} else {
var temp__4657__auto___34345 = cljs.core.seq.call(null,seq__34307_34336);
if(temp__4657__auto___34345){
var seq__34307_34346__$1 = temp__4657__auto___34345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34307_34346__$1)){
var c__25659__auto___34347 = cljs.core.chunk_first.call(null,seq__34307_34346__$1);
var G__34348 = cljs.core.chunk_rest.call(null,seq__34307_34346__$1);
var G__34349 = c__25659__auto___34347;
var G__34350 = cljs.core.count.call(null,c__25659__auto___34347);
var G__34351 = (0);
seq__34307_34336 = G__34348;
chunk__34308_34337 = G__34349;
count__34309_34338 = G__34350;
i__34310_34339 = G__34351;
continue;
} else {
var ref_34352 = cljs.core.first.call(null,seq__34307_34346__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_34352)){
} else {
cljs.core.add_watch.call(null,ref_34352,key,((function (seq__34307_34336,chunk__34308_34337,count__34309_34338,i__34310_34339,ref_34352,seq__34307_34346__$1,temp__4657__auto___34345,comp,old_reactions,vec__34300,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34299){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__34307_34336,chunk__34308_34337,count__34309_34338,i__34310_34339,ref_34352,seq__34307_34346__$1,temp__4657__auto___34345,comp,old_reactions,vec__34300,dom,next_state,new_reactions,key,_STAR_reactions_STAR_34299))
);
}

var G__34353 = cljs.core.next.call(null,seq__34307_34346__$1);
var G__34354 = null;
var G__34355 = (0);
var G__34356 = (0);
seq__34307_34336 = G__34353;
chunk__34308_34337 = G__34354;
count__34309_34338 = G__34355;
i__34310_34339 = G__34356;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_34299;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_34357 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__34311_34358 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__34312_34359 = null;
var count__34313_34360 = (0);
var i__34314_34361 = (0);
while(true){
if((i__34314_34361 < count__34313_34360)){
var ref_34362 = cljs.core._nth.call(null,chunk__34312_34359,i__34314_34361);
cljs.core.remove_watch.call(null,ref_34362,key_34357);

var G__34363 = seq__34311_34358;
var G__34364 = chunk__34312_34359;
var G__34365 = count__34313_34360;
var G__34366 = (i__34314_34361 + (1));
seq__34311_34358 = G__34363;
chunk__34312_34359 = G__34364;
count__34313_34360 = G__34365;
i__34314_34361 = G__34366;
continue;
} else {
var temp__4657__auto___34367 = cljs.core.seq.call(null,seq__34311_34358);
if(temp__4657__auto___34367){
var seq__34311_34368__$1 = temp__4657__auto___34367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34311_34368__$1)){
var c__25659__auto___34369 = cljs.core.chunk_first.call(null,seq__34311_34368__$1);
var G__34370 = cljs.core.chunk_rest.call(null,seq__34311_34368__$1);
var G__34371 = c__25659__auto___34369;
var G__34372 = cljs.core.count.call(null,c__25659__auto___34369);
var G__34373 = (0);
seq__34311_34358 = G__34370;
chunk__34312_34359 = G__34371;
count__34313_34360 = G__34372;
i__34314_34361 = G__34373;
continue;
} else {
var ref_34374 = cljs.core.first.call(null,seq__34311_34368__$1);
cljs.core.remove_watch.call(null,ref_34374,key_34357);

var G__34375 = cljs.core.next.call(null,seq__34311_34368__$1);
var G__34376 = null;
var G__34377 = (0);
var G__34378 = (0);
seq__34311_34358 = G__34375;
chunk__34312_34359 = G__34376;
count__34313_34360 = G__34377;
i__34314_34361 = G__34378;
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
var len__25923__auto___34385 = arguments.length;
var i__25924__auto___34386 = (0);
while(true){
if((i__25924__auto___34386 < len__25923__auto___34385)){
args__25930__auto__.push((arguments[i__25924__auto___34386]));

var G__34387 = (i__25924__auto___34386 + (1));
i__25924__auto___34386 = G__34387;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((2) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25931__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__34382){
var map__34383 = p__34382;
var map__34383__$1 = ((((!((map__34383 == null)))?((((map__34383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34383):map__34383);
var options = map__34383__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq34379){
var G__34380 = cljs.core.first.call(null,seq34379);
var seq34379__$1 = cljs.core.next.call(null,seq34379);
var G__34381 = cljs.core.first.call(null,seq34379__$1);
var seq34379__$2 = cljs.core.next.call(null,seq34379__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__34380,G__34381,seq34379__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__25930__auto__ = [];
var len__25923__auto___34391 = arguments.length;
var i__25924__auto___34392 = (0);
while(true){
if((i__25924__auto___34392 < len__25923__auto___34391)){
args__25930__auto__.push((arguments[i__25924__auto___34392]));

var G__34393 = (i__25924__auto___34392 + (1));
i__25924__auto___34392 = G__34393;
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

rum.core.cursor.cljs$lang$applyTo = (function (seq34388){
var G__34389 = cljs.core.first.call(null,seq34388);
var seq34388__$1 = cljs.core.next.call(null,seq34388);
var G__34390 = cljs.core.first.call(null,seq34388__$1);
var seq34388__$2 = cljs.core.next.call(null,seq34388__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__34389,G__34390,seq34388__$2);
});


//# sourceMappingURL=core.js.map?rel=1533225033989