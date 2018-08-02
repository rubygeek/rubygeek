// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28850 = [];
var len__25923__auto___28856 = arguments.length;
var i__25924__auto___28857 = (0);
while(true){
if((i__25924__auto___28857 < len__25923__auto___28856)){
args28850.push((arguments[i__25924__auto___28857]));

var G__28858 = (i__25924__auto___28857 + (1));
i__25924__auto___28857 = G__28858;
continue;
} else {
}
break;
}

var G__28852 = args28850.length;
switch (G__28852) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28850.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28853 = (function (f,blockable,meta28854){
this.f = f;
this.blockable = blockable;
this.meta28854 = meta28854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28855,meta28854__$1){
var self__ = this;
var _28855__$1 = this;
return (new cljs.core.async.t_cljs$core$async28853(self__.f,self__.blockable,meta28854__$1));
});

cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28855){
var self__ = this;
var _28855__$1 = this;
return self__.meta28854;
});

cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28854","meta28854",1471411854,null)], null);
});

cljs.core.async.t_cljs$core$async28853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28853";

cljs.core.async.t_cljs$core$async28853.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28853");
});

cljs.core.async.__GT_t_cljs$core$async28853 = (function cljs$core$async$__GT_t_cljs$core$async28853(f__$1,blockable__$1,meta28854){
return (new cljs.core.async.t_cljs$core$async28853(f__$1,blockable__$1,meta28854));
});

}

return (new cljs.core.async.t_cljs$core$async28853(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28862 = [];
var len__25923__auto___28865 = arguments.length;
var i__25924__auto___28866 = (0);
while(true){
if((i__25924__auto___28866 < len__25923__auto___28865)){
args28862.push((arguments[i__25924__auto___28866]));

var G__28867 = (i__25924__auto___28866 + (1));
i__25924__auto___28866 = G__28867;
continue;
} else {
}
break;
}

var G__28864 = args28862.length;
switch (G__28864) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28862.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28869 = [];
var len__25923__auto___28872 = arguments.length;
var i__25924__auto___28873 = (0);
while(true){
if((i__25924__auto___28873 < len__25923__auto___28872)){
args28869.push((arguments[i__25924__auto___28873]));

var G__28874 = (i__25924__auto___28873 + (1));
i__25924__auto___28873 = G__28874;
continue;
} else {
}
break;
}

var G__28871 = args28869.length;
switch (G__28871) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28869.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28876 = [];
var len__25923__auto___28879 = arguments.length;
var i__25924__auto___28880 = (0);
while(true){
if((i__25924__auto___28880 < len__25923__auto___28879)){
args28876.push((arguments[i__25924__auto___28880]));

var G__28881 = (i__25924__auto___28880 + (1));
i__25924__auto___28880 = G__28881;
continue;
} else {
}
break;
}

var G__28878 = args28876.length;
switch (G__28878) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28876.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28883 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28883);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28883,ret){
return (function (){
return fn1.call(null,val_28883);
});})(val_28883,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28884 = [];
var len__25923__auto___28887 = arguments.length;
var i__25924__auto___28888 = (0);
while(true){
if((i__25924__auto___28888 < len__25923__auto___28887)){
args28884.push((arguments[i__25924__auto___28888]));

var G__28889 = (i__25924__auto___28888 + (1));
i__25924__auto___28888 = G__28889;
continue;
} else {
}
break;
}

var G__28886 = args28884.length;
switch (G__28886) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28884.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25763__auto___28891 = n;
var x_28892 = (0);
while(true){
if((x_28892 < n__25763__auto___28891)){
(a[x_28892] = (0));

var G__28893 = (x_28892 + (1));
x_28892 = G__28893;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28894 = (i + (1));
i = G__28894;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28898 = (function (alt_flag,flag,meta28899){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28899 = meta28899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28900,meta28899__$1){
var self__ = this;
var _28900__$1 = this;
return (new cljs.core.async.t_cljs$core$async28898(self__.alt_flag,self__.flag,meta28899__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28900){
var self__ = this;
var _28900__$1 = this;
return self__.meta28899;
});})(flag))
;

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28898.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28899","meta28899",628984073,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28898";

cljs.core.async.t_cljs$core$async28898.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28898");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28898 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28898(alt_flag__$1,flag__$1,meta28899){
return (new cljs.core.async.t_cljs$core$async28898(alt_flag__$1,flag__$1,meta28899));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28898(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28904 = (function (alt_handler,flag,cb,meta28905){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28905 = meta28905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28906,meta28905__$1){
var self__ = this;
var _28906__$1 = this;
return (new cljs.core.async.t_cljs$core$async28904(self__.alt_handler,self__.flag,self__.cb,meta28905__$1));
});

cljs.core.async.t_cljs$core$async28904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28906){
var self__ = this;
var _28906__$1 = this;
return self__.meta28905;
});

cljs.core.async.t_cljs$core$async28904.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28905","meta28905",-1894881337,null)], null);
});

cljs.core.async.t_cljs$core$async28904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28904";

cljs.core.async.t_cljs$core$async28904.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28904");
});

cljs.core.async.__GT_t_cljs$core$async28904 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28904(alt_handler__$1,flag__$1,cb__$1,meta28905){
return (new cljs.core.async.t_cljs$core$async28904(alt_handler__$1,flag__$1,cb__$1,meta28905));
});

}

return (new cljs.core.async.t_cljs$core$async28904(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28907_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28907_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28908_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28908_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24848__auto__ = wport;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28909 = (i + (1));
i = G__28909;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24848__auto__ = ret;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24836__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24836__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24836__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___28915 = arguments.length;
var i__25924__auto___28916 = (0);
while(true){
if((i__25924__auto___28916 < len__25923__auto___28915)){
args__25930__auto__.push((arguments[i__25924__auto___28916]));

var G__28917 = (i__25924__auto___28916 + (1));
i__25924__auto___28916 = G__28917;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28912){
var map__28913 = p__28912;
var map__28913__$1 = ((((!((map__28913 == null)))?((((map__28913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28913):map__28913);
var opts = map__28913__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28910){
var G__28911 = cljs.core.first.call(null,seq28910);
var seq28910__$1 = cljs.core.next.call(null,seq28910);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28911,seq28910__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28918 = [];
var len__25923__auto___28968 = arguments.length;
var i__25924__auto___28969 = (0);
while(true){
if((i__25924__auto___28969 < len__25923__auto___28968)){
args28918.push((arguments[i__25924__auto___28969]));

var G__28970 = (i__25924__auto___28969 + (1));
i__25924__auto___28969 = G__28970;
continue;
} else {
}
break;
}

var G__28920 = args28918.length;
switch (G__28920) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28918.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28805__auto___28972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___28972){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___28972){
return (function (state_28944){
var state_val_28945 = (state_28944[(1)]);
if((state_val_28945 === (7))){
var inst_28940 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28946_28973 = state_28944__$1;
(statearr_28946_28973[(2)] = inst_28940);

(statearr_28946_28973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (1))){
var state_28944__$1 = state_28944;
var statearr_28947_28974 = state_28944__$1;
(statearr_28947_28974[(2)] = null);

(statearr_28947_28974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (4))){
var inst_28923 = (state_28944[(7)]);
var inst_28923__$1 = (state_28944[(2)]);
var inst_28924 = (inst_28923__$1 == null);
var state_28944__$1 = (function (){var statearr_28948 = state_28944;
(statearr_28948[(7)] = inst_28923__$1);

return statearr_28948;
})();
if(cljs.core.truth_(inst_28924)){
var statearr_28949_28975 = state_28944__$1;
(statearr_28949_28975[(1)] = (5));

} else {
var statearr_28950_28976 = state_28944__$1;
(statearr_28950_28976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (13))){
var state_28944__$1 = state_28944;
var statearr_28951_28977 = state_28944__$1;
(statearr_28951_28977[(2)] = null);

(statearr_28951_28977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (6))){
var inst_28923 = (state_28944[(7)]);
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28944__$1,(11),to,inst_28923);
} else {
if((state_val_28945 === (3))){
var inst_28942 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28944__$1,inst_28942);
} else {
if((state_val_28945 === (12))){
var state_28944__$1 = state_28944;
var statearr_28952_28978 = state_28944__$1;
(statearr_28952_28978[(2)] = null);

(statearr_28952_28978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (2))){
var state_28944__$1 = state_28944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28944__$1,(4),from);
} else {
if((state_val_28945 === (11))){
var inst_28933 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
if(cljs.core.truth_(inst_28933)){
var statearr_28953_28979 = state_28944__$1;
(statearr_28953_28979[(1)] = (12));

} else {
var statearr_28954_28980 = state_28944__$1;
(statearr_28954_28980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (9))){
var state_28944__$1 = state_28944;
var statearr_28955_28981 = state_28944__$1;
(statearr_28955_28981[(2)] = null);

(statearr_28955_28981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (5))){
var state_28944__$1 = state_28944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28956_28982 = state_28944__$1;
(statearr_28956_28982[(1)] = (8));

} else {
var statearr_28957_28983 = state_28944__$1;
(statearr_28957_28983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (14))){
var inst_28938 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28958_28984 = state_28944__$1;
(statearr_28958_28984[(2)] = inst_28938);

(statearr_28958_28984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (10))){
var inst_28930 = (state_28944[(2)]);
var state_28944__$1 = state_28944;
var statearr_28959_28985 = state_28944__$1;
(statearr_28959_28985[(2)] = inst_28930);

(statearr_28959_28985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28945 === (8))){
var inst_28927 = cljs.core.async.close_BANG_.call(null,to);
var state_28944__$1 = state_28944;
var statearr_28960_28986 = state_28944__$1;
(statearr_28960_28986[(2)] = inst_28927);

(statearr_28960_28986[(1)] = (10));


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
});})(c__28805__auto___28972))
;
return ((function (switch__28693__auto__,c__28805__auto___28972){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_28964 = [null,null,null,null,null,null,null,null];
(statearr_28964[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_28964[(1)] = (1));

return statearr_28964;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_28944){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_28944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e28965){if((e28965 instanceof Object)){
var ex__28697__auto__ = e28965;
var statearr_28966_28987 = state_28944;
(statearr_28966_28987[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28988 = state_28944;
state_28944 = G__28988;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_28944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_28944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___28972))
})();
var state__28807__auto__ = (function (){var statearr_28967 = f__28806__auto__.call(null);
(statearr_28967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___28972);

return statearr_28967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___28972))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29176){
var vec__29177 = p__29176;
var v = cljs.core.nth.call(null,vec__29177,(0),null);
var p = cljs.core.nth.call(null,vec__29177,(1),null);
var job = vec__29177;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28805__auto___29363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___29363,res,vec__29177,v,p,job,jobs,results){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___29363,res,vec__29177,v,p,job,jobs,results){
return (function (state_29184){
var state_val_29185 = (state_29184[(1)]);
if((state_val_29185 === (1))){
var state_29184__$1 = state_29184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29184__$1,(2),res,v);
} else {
if((state_val_29185 === (2))){
var inst_29181 = (state_29184[(2)]);
var inst_29182 = cljs.core.async.close_BANG_.call(null,res);
var state_29184__$1 = (function (){var statearr_29186 = state_29184;
(statearr_29186[(7)] = inst_29181);

return statearr_29186;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29184__$1,inst_29182);
} else {
return null;
}
}
});})(c__28805__auto___29363,res,vec__29177,v,p,job,jobs,results))
;
return ((function (switch__28693__auto__,c__28805__auto___29363,res,vec__29177,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0 = (function (){
var statearr_29190 = [null,null,null,null,null,null,null,null];
(statearr_29190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__);

(statearr_29190[(1)] = (1));

return statearr_29190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1 = (function (state_29184){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_29184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e29191){if((e29191 instanceof Object)){
var ex__28697__auto__ = e29191;
var statearr_29192_29364 = state_29184;
(statearr_29192_29364[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29365 = state_29184;
state_29184 = G__29365;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = function(state_29184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1.call(this,state_29184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___29363,res,vec__29177,v,p,job,jobs,results))
})();
var state__28807__auto__ = (function (){var statearr_29193 = f__28806__auto__.call(null);
(statearr_29193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___29363);

return statearr_29193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___29363,res,vec__29177,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29194){
var vec__29195 = p__29194;
var v = cljs.core.nth.call(null,vec__29195,(0),null);
var p = cljs.core.nth.call(null,vec__29195,(1),null);
var job = vec__29195;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25763__auto___29366 = n;
var __29367 = (0);
while(true){
if((__29367 < n__25763__auto___29366)){
var G__29198_29368 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29198_29368) {
case "compute":
var c__28805__auto___29370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29367,c__28805__auto___29370,G__29198_29368,n__25763__auto___29366,jobs,results,process,async){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (__29367,c__28805__auto___29370,G__29198_29368,n__25763__auto___29366,jobs,results,process,async){
return (function (state_29211){
var state_val_29212 = (state_29211[(1)]);
if((state_val_29212 === (1))){
var state_29211__$1 = state_29211;
var statearr_29213_29371 = state_29211__$1;
(statearr_29213_29371[(2)] = null);

(statearr_29213_29371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (2))){
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29211__$1,(4),jobs);
} else {
if((state_val_29212 === (3))){
var inst_29209 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29211__$1,inst_29209);
} else {
if((state_val_29212 === (4))){
var inst_29201 = (state_29211[(2)]);
var inst_29202 = process.call(null,inst_29201);
var state_29211__$1 = state_29211;
if(cljs.core.truth_(inst_29202)){
var statearr_29214_29372 = state_29211__$1;
(statearr_29214_29372[(1)] = (5));

} else {
var statearr_29215_29373 = state_29211__$1;
(statearr_29215_29373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (5))){
var state_29211__$1 = state_29211;
var statearr_29216_29374 = state_29211__$1;
(statearr_29216_29374[(2)] = null);

(statearr_29216_29374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (6))){
var state_29211__$1 = state_29211;
var statearr_29217_29375 = state_29211__$1;
(statearr_29217_29375[(2)] = null);

(statearr_29217_29375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (7))){
var inst_29207 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29218_29376 = state_29211__$1;
(statearr_29218_29376[(2)] = inst_29207);

(statearr_29218_29376[(1)] = (3));


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
});})(__29367,c__28805__auto___29370,G__29198_29368,n__25763__auto___29366,jobs,results,process,async))
;
return ((function (__29367,switch__28693__auto__,c__28805__auto___29370,G__29198_29368,n__25763__auto___29366,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0 = (function (){
var statearr_29222 = [null,null,null,null,null,null,null];
(statearr_29222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__);

(statearr_29222[(1)] = (1));

return statearr_29222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1 = (function (state_29211){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_29211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e29223){if((e29223 instanceof Object)){
var ex__28697__auto__ = e29223;
var statearr_29224_29377 = state_29211;
(statearr_29224_29377[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29378 = state_29211;
state_29211 = G__29378;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = function(state_29211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1.call(this,state_29211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__;
})()
;})(__29367,switch__28693__auto__,c__28805__auto___29370,G__29198_29368,n__25763__auto___29366,jobs,results,process,async))
})();
var state__28807__auto__ = (function (){var statearr_29225 = f__28806__auto__.call(null);
(statearr_29225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___29370);

return statearr_29225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(__29367,c__28805__auto___29370,G__29198_29368,n__25763__auto___29366,jobs,results,process,async))
);


break;
case "async":
var c__28805__auto___29379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29367,c__28805__auto___29379,G__29198_29368,n__25763__auto___29366,jobs,results,process,async){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (__29367,c__28805__auto___29379,G__29198_29368,n__25763__auto___29366,jobs,results,process,async){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (1))){
var state_29238__$1 = state_29238;
var statearr_29240_29380 = state_29238__$1;
(statearr_29240_29380[(2)] = null);

(statearr_29240_29380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (2))){
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(4),jobs);
} else {
if((state_val_29239 === (3))){
var inst_29236 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (4))){
var inst_29228 = (state_29238[(2)]);
var inst_29229 = async.call(null,inst_29228);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29229)){
var statearr_29241_29381 = state_29238__$1;
(statearr_29241_29381[(1)] = (5));

} else {
var statearr_29242_29382 = state_29238__$1;
(statearr_29242_29382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (5))){
var state_29238__$1 = state_29238;
var statearr_29243_29383 = state_29238__$1;
(statearr_29243_29383[(2)] = null);

(statearr_29243_29383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (6))){
var state_29238__$1 = state_29238;
var statearr_29244_29384 = state_29238__$1;
(statearr_29244_29384[(2)] = null);

(statearr_29244_29384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (7))){
var inst_29234 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29245_29385 = state_29238__$1;
(statearr_29245_29385[(2)] = inst_29234);

(statearr_29245_29385[(1)] = (3));


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
});})(__29367,c__28805__auto___29379,G__29198_29368,n__25763__auto___29366,jobs,results,process,async))
;
return ((function (__29367,switch__28693__auto__,c__28805__auto___29379,G__29198_29368,n__25763__auto___29366,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0 = (function (){
var statearr_29249 = [null,null,null,null,null,null,null];
(statearr_29249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__);

(statearr_29249[(1)] = (1));

return statearr_29249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1 = (function (state_29238){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e29250){if((e29250 instanceof Object)){
var ex__28697__auto__ = e29250;
var statearr_29251_29386 = state_29238;
(statearr_29251_29386[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29387 = state_29238;
state_29238 = G__29387;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__;
})()
;})(__29367,switch__28693__auto__,c__28805__auto___29379,G__29198_29368,n__25763__auto___29366,jobs,results,process,async))
})();
var state__28807__auto__ = (function (){var statearr_29252 = f__28806__auto__.call(null);
(statearr_29252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___29379);

return statearr_29252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(__29367,c__28805__auto___29379,G__29198_29368,n__25763__auto___29366,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29388 = (__29367 + (1));
__29367 = G__29388;
continue;
} else {
}
break;
}

var c__28805__auto___29389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___29389,jobs,results,process,async){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___29389,jobs,results,process,async){
return (function (state_29274){
var state_val_29275 = (state_29274[(1)]);
if((state_val_29275 === (1))){
var state_29274__$1 = state_29274;
var statearr_29276_29390 = state_29274__$1;
(statearr_29276_29390[(2)] = null);

(statearr_29276_29390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (2))){
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29274__$1,(4),from);
} else {
if((state_val_29275 === (3))){
var inst_29272 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29274__$1,inst_29272);
} else {
if((state_val_29275 === (4))){
var inst_29255 = (state_29274[(7)]);
var inst_29255__$1 = (state_29274[(2)]);
var inst_29256 = (inst_29255__$1 == null);
var state_29274__$1 = (function (){var statearr_29277 = state_29274;
(statearr_29277[(7)] = inst_29255__$1);

return statearr_29277;
})();
if(cljs.core.truth_(inst_29256)){
var statearr_29278_29391 = state_29274__$1;
(statearr_29278_29391[(1)] = (5));

} else {
var statearr_29279_29392 = state_29274__$1;
(statearr_29279_29392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (5))){
var inst_29258 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29274__$1 = state_29274;
var statearr_29280_29393 = state_29274__$1;
(statearr_29280_29393[(2)] = inst_29258);

(statearr_29280_29393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (6))){
var inst_29260 = (state_29274[(8)]);
var inst_29255 = (state_29274[(7)]);
var inst_29260__$1 = cljs.core.async.chan.call(null,(1));
var inst_29261 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29262 = [inst_29255,inst_29260__$1];
var inst_29263 = (new cljs.core.PersistentVector(null,2,(5),inst_29261,inst_29262,null));
var state_29274__$1 = (function (){var statearr_29281 = state_29274;
(statearr_29281[(8)] = inst_29260__$1);

return statearr_29281;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29274__$1,(8),jobs,inst_29263);
} else {
if((state_val_29275 === (7))){
var inst_29270 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29282_29394 = state_29274__$1;
(statearr_29282_29394[(2)] = inst_29270);

(statearr_29282_29394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (8))){
var inst_29260 = (state_29274[(8)]);
var inst_29265 = (state_29274[(2)]);
var state_29274__$1 = (function (){var statearr_29283 = state_29274;
(statearr_29283[(9)] = inst_29265);

return statearr_29283;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29274__$1,(9),results,inst_29260);
} else {
if((state_val_29275 === (9))){
var inst_29267 = (state_29274[(2)]);
var state_29274__$1 = (function (){var statearr_29284 = state_29274;
(statearr_29284[(10)] = inst_29267);

return statearr_29284;
})();
var statearr_29285_29395 = state_29274__$1;
(statearr_29285_29395[(2)] = null);

(statearr_29285_29395[(1)] = (2));


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
});})(c__28805__auto___29389,jobs,results,process,async))
;
return ((function (switch__28693__auto__,c__28805__auto___29389,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0 = (function (){
var statearr_29289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__);

(statearr_29289[(1)] = (1));

return statearr_29289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1 = (function (state_29274){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_29274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e29290){if((e29290 instanceof Object)){
var ex__28697__auto__ = e29290;
var statearr_29291_29396 = state_29274;
(statearr_29291_29396[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29397 = state_29274;
state_29274 = G__29397;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = function(state_29274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1.call(this,state_29274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___29389,jobs,results,process,async))
})();
var state__28807__auto__ = (function (){var statearr_29292 = f__28806__auto__.call(null);
(statearr_29292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___29389);

return statearr_29292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___29389,jobs,results,process,async))
);


var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__,jobs,results,process,async){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__,jobs,results,process,async){
return (function (state_29330){
var state_val_29331 = (state_29330[(1)]);
if((state_val_29331 === (7))){
var inst_29326 = (state_29330[(2)]);
var state_29330__$1 = state_29330;
var statearr_29332_29398 = state_29330__$1;
(statearr_29332_29398[(2)] = inst_29326);

(statearr_29332_29398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (20))){
var state_29330__$1 = state_29330;
var statearr_29333_29399 = state_29330__$1;
(statearr_29333_29399[(2)] = null);

(statearr_29333_29399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (1))){
var state_29330__$1 = state_29330;
var statearr_29334_29400 = state_29330__$1;
(statearr_29334_29400[(2)] = null);

(statearr_29334_29400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (4))){
var inst_29295 = (state_29330[(7)]);
var inst_29295__$1 = (state_29330[(2)]);
var inst_29296 = (inst_29295__$1 == null);
var state_29330__$1 = (function (){var statearr_29335 = state_29330;
(statearr_29335[(7)] = inst_29295__$1);

return statearr_29335;
})();
if(cljs.core.truth_(inst_29296)){
var statearr_29336_29401 = state_29330__$1;
(statearr_29336_29401[(1)] = (5));

} else {
var statearr_29337_29402 = state_29330__$1;
(statearr_29337_29402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (15))){
var inst_29308 = (state_29330[(8)]);
var state_29330__$1 = state_29330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29330__$1,(18),to,inst_29308);
} else {
if((state_val_29331 === (21))){
var inst_29321 = (state_29330[(2)]);
var state_29330__$1 = state_29330;
var statearr_29338_29403 = state_29330__$1;
(statearr_29338_29403[(2)] = inst_29321);

(statearr_29338_29403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (13))){
var inst_29323 = (state_29330[(2)]);
var state_29330__$1 = (function (){var statearr_29339 = state_29330;
(statearr_29339[(9)] = inst_29323);

return statearr_29339;
})();
var statearr_29340_29404 = state_29330__$1;
(statearr_29340_29404[(2)] = null);

(statearr_29340_29404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (6))){
var inst_29295 = (state_29330[(7)]);
var state_29330__$1 = state_29330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29330__$1,(11),inst_29295);
} else {
if((state_val_29331 === (17))){
var inst_29316 = (state_29330[(2)]);
var state_29330__$1 = state_29330;
if(cljs.core.truth_(inst_29316)){
var statearr_29341_29405 = state_29330__$1;
(statearr_29341_29405[(1)] = (19));

} else {
var statearr_29342_29406 = state_29330__$1;
(statearr_29342_29406[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (3))){
var inst_29328 = (state_29330[(2)]);
var state_29330__$1 = state_29330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29330__$1,inst_29328);
} else {
if((state_val_29331 === (12))){
var inst_29305 = (state_29330[(10)]);
var state_29330__$1 = state_29330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29330__$1,(14),inst_29305);
} else {
if((state_val_29331 === (2))){
var state_29330__$1 = state_29330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29330__$1,(4),results);
} else {
if((state_val_29331 === (19))){
var state_29330__$1 = state_29330;
var statearr_29343_29407 = state_29330__$1;
(statearr_29343_29407[(2)] = null);

(statearr_29343_29407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (11))){
var inst_29305 = (state_29330[(2)]);
var state_29330__$1 = (function (){var statearr_29344 = state_29330;
(statearr_29344[(10)] = inst_29305);

return statearr_29344;
})();
var statearr_29345_29408 = state_29330__$1;
(statearr_29345_29408[(2)] = null);

(statearr_29345_29408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (9))){
var state_29330__$1 = state_29330;
var statearr_29346_29409 = state_29330__$1;
(statearr_29346_29409[(2)] = null);

(statearr_29346_29409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (5))){
var state_29330__$1 = state_29330;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29347_29410 = state_29330__$1;
(statearr_29347_29410[(1)] = (8));

} else {
var statearr_29348_29411 = state_29330__$1;
(statearr_29348_29411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (14))){
var inst_29308 = (state_29330[(8)]);
var inst_29310 = (state_29330[(11)]);
var inst_29308__$1 = (state_29330[(2)]);
var inst_29309 = (inst_29308__$1 == null);
var inst_29310__$1 = cljs.core.not.call(null,inst_29309);
var state_29330__$1 = (function (){var statearr_29349 = state_29330;
(statearr_29349[(8)] = inst_29308__$1);

(statearr_29349[(11)] = inst_29310__$1);

return statearr_29349;
})();
if(inst_29310__$1){
var statearr_29350_29412 = state_29330__$1;
(statearr_29350_29412[(1)] = (15));

} else {
var statearr_29351_29413 = state_29330__$1;
(statearr_29351_29413[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (16))){
var inst_29310 = (state_29330[(11)]);
var state_29330__$1 = state_29330;
var statearr_29352_29414 = state_29330__$1;
(statearr_29352_29414[(2)] = inst_29310);

(statearr_29352_29414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (10))){
var inst_29302 = (state_29330[(2)]);
var state_29330__$1 = state_29330;
var statearr_29353_29415 = state_29330__$1;
(statearr_29353_29415[(2)] = inst_29302);

(statearr_29353_29415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (18))){
var inst_29313 = (state_29330[(2)]);
var state_29330__$1 = state_29330;
var statearr_29354_29416 = state_29330__$1;
(statearr_29354_29416[(2)] = inst_29313);

(statearr_29354_29416[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29331 === (8))){
var inst_29299 = cljs.core.async.close_BANG_.call(null,to);
var state_29330__$1 = state_29330;
var statearr_29355_29417 = state_29330__$1;
(statearr_29355_29417[(2)] = inst_29299);

(statearr_29355_29417[(1)] = (10));


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
});})(c__28805__auto__,jobs,results,process,async))
;
return ((function (switch__28693__auto__,c__28805__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0 = (function (){
var statearr_29359 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__);

(statearr_29359[(1)] = (1));

return statearr_29359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1 = (function (state_29330){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_29330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e29360){if((e29360 instanceof Object)){
var ex__28697__auto__ = e29360;
var statearr_29361_29418 = state_29330;
(statearr_29361_29418[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29419 = state_29330;
state_29330 = G__29419;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__ = function(state_29330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1.call(this,state_29330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28694__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__,jobs,results,process,async))
})();
var state__28807__auto__ = (function (){var statearr_29362 = f__28806__auto__.call(null);
(statearr_29362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_29362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__,jobs,results,process,async))
);

return c__28805__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29420 = [];
var len__25923__auto___29423 = arguments.length;
var i__25924__auto___29424 = (0);
while(true){
if((i__25924__auto___29424 < len__25923__auto___29423)){
args29420.push((arguments[i__25924__auto___29424]));

var G__29425 = (i__25924__auto___29424 + (1));
i__25924__auto___29424 = G__29425;
continue;
} else {
}
break;
}

var G__29422 = args29420.length;
switch (G__29422) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29420.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29427 = [];
var len__25923__auto___29430 = arguments.length;
var i__25924__auto___29431 = (0);
while(true){
if((i__25924__auto___29431 < len__25923__auto___29430)){
args29427.push((arguments[i__25924__auto___29431]));

var G__29432 = (i__25924__auto___29431 + (1));
i__25924__auto___29431 = G__29432;
continue;
} else {
}
break;
}

var G__29429 = args29427.length;
switch (G__29429) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29427.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29434 = [];
var len__25923__auto___29487 = arguments.length;
var i__25924__auto___29488 = (0);
while(true){
if((i__25924__auto___29488 < len__25923__auto___29487)){
args29434.push((arguments[i__25924__auto___29488]));

var G__29489 = (i__25924__auto___29488 + (1));
i__25924__auto___29488 = G__29489;
continue;
} else {
}
break;
}

var G__29436 = args29434.length;
switch (G__29436) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29434.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28805__auto___29491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___29491,tc,fc){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___29491,tc,fc){
return (function (state_29462){
var state_val_29463 = (state_29462[(1)]);
if((state_val_29463 === (7))){
var inst_29458 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
var statearr_29464_29492 = state_29462__$1;
(statearr_29464_29492[(2)] = inst_29458);

(statearr_29464_29492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (1))){
var state_29462__$1 = state_29462;
var statearr_29465_29493 = state_29462__$1;
(statearr_29465_29493[(2)] = null);

(statearr_29465_29493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (4))){
var inst_29439 = (state_29462[(7)]);
var inst_29439__$1 = (state_29462[(2)]);
var inst_29440 = (inst_29439__$1 == null);
var state_29462__$1 = (function (){var statearr_29466 = state_29462;
(statearr_29466[(7)] = inst_29439__$1);

return statearr_29466;
})();
if(cljs.core.truth_(inst_29440)){
var statearr_29467_29494 = state_29462__$1;
(statearr_29467_29494[(1)] = (5));

} else {
var statearr_29468_29495 = state_29462__$1;
(statearr_29468_29495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (13))){
var state_29462__$1 = state_29462;
var statearr_29469_29496 = state_29462__$1;
(statearr_29469_29496[(2)] = null);

(statearr_29469_29496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (6))){
var inst_29439 = (state_29462[(7)]);
var inst_29445 = p.call(null,inst_29439);
var state_29462__$1 = state_29462;
if(cljs.core.truth_(inst_29445)){
var statearr_29470_29497 = state_29462__$1;
(statearr_29470_29497[(1)] = (9));

} else {
var statearr_29471_29498 = state_29462__$1;
(statearr_29471_29498[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (3))){
var inst_29460 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29462__$1,inst_29460);
} else {
if((state_val_29463 === (12))){
var state_29462__$1 = state_29462;
var statearr_29472_29499 = state_29462__$1;
(statearr_29472_29499[(2)] = null);

(statearr_29472_29499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (2))){
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29462__$1,(4),ch);
} else {
if((state_val_29463 === (11))){
var inst_29439 = (state_29462[(7)]);
var inst_29449 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29462__$1,(8),inst_29449,inst_29439);
} else {
if((state_val_29463 === (9))){
var state_29462__$1 = state_29462;
var statearr_29473_29500 = state_29462__$1;
(statearr_29473_29500[(2)] = tc);

(statearr_29473_29500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (5))){
var inst_29442 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29443 = cljs.core.async.close_BANG_.call(null,fc);
var state_29462__$1 = (function (){var statearr_29474 = state_29462;
(statearr_29474[(8)] = inst_29442);

return statearr_29474;
})();
var statearr_29475_29501 = state_29462__$1;
(statearr_29475_29501[(2)] = inst_29443);

(statearr_29475_29501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (14))){
var inst_29456 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
var statearr_29476_29502 = state_29462__$1;
(statearr_29476_29502[(2)] = inst_29456);

(statearr_29476_29502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (10))){
var state_29462__$1 = state_29462;
var statearr_29477_29503 = state_29462__$1;
(statearr_29477_29503[(2)] = fc);

(statearr_29477_29503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (8))){
var inst_29451 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
if(cljs.core.truth_(inst_29451)){
var statearr_29478_29504 = state_29462__$1;
(statearr_29478_29504[(1)] = (12));

} else {
var statearr_29479_29505 = state_29462__$1;
(statearr_29479_29505[(1)] = (13));

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
});})(c__28805__auto___29491,tc,fc))
;
return ((function (switch__28693__auto__,c__28805__auto___29491,tc,fc){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_29483 = [null,null,null,null,null,null,null,null,null];
(statearr_29483[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_29483[(1)] = (1));

return statearr_29483;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_29462){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_29462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e29484){if((e29484 instanceof Object)){
var ex__28697__auto__ = e29484;
var statearr_29485_29506 = state_29462;
(statearr_29485_29506[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29507 = state_29462;
state_29462 = G__29507;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_29462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_29462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___29491,tc,fc))
})();
var state__28807__auto__ = (function (){var statearr_29486 = f__28806__auto__.call(null);
(statearr_29486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___29491);

return statearr_29486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___29491,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__){
return (function (state_29571){
var state_val_29572 = (state_29571[(1)]);
if((state_val_29572 === (7))){
var inst_29567 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
var statearr_29573_29594 = state_29571__$1;
(statearr_29573_29594[(2)] = inst_29567);

(statearr_29573_29594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (1))){
var inst_29551 = init;
var state_29571__$1 = (function (){var statearr_29574 = state_29571;
(statearr_29574[(7)] = inst_29551);

return statearr_29574;
})();
var statearr_29575_29595 = state_29571__$1;
(statearr_29575_29595[(2)] = null);

(statearr_29575_29595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (4))){
var inst_29554 = (state_29571[(8)]);
var inst_29554__$1 = (state_29571[(2)]);
var inst_29555 = (inst_29554__$1 == null);
var state_29571__$1 = (function (){var statearr_29576 = state_29571;
(statearr_29576[(8)] = inst_29554__$1);

return statearr_29576;
})();
if(cljs.core.truth_(inst_29555)){
var statearr_29577_29596 = state_29571__$1;
(statearr_29577_29596[(1)] = (5));

} else {
var statearr_29578_29597 = state_29571__$1;
(statearr_29578_29597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (6))){
var inst_29554 = (state_29571[(8)]);
var inst_29558 = (state_29571[(9)]);
var inst_29551 = (state_29571[(7)]);
var inst_29558__$1 = f.call(null,inst_29551,inst_29554);
var inst_29559 = cljs.core.reduced_QMARK_.call(null,inst_29558__$1);
var state_29571__$1 = (function (){var statearr_29579 = state_29571;
(statearr_29579[(9)] = inst_29558__$1);

return statearr_29579;
})();
if(inst_29559){
var statearr_29580_29598 = state_29571__$1;
(statearr_29580_29598[(1)] = (8));

} else {
var statearr_29581_29599 = state_29571__$1;
(statearr_29581_29599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (3))){
var inst_29569 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29571__$1,inst_29569);
} else {
if((state_val_29572 === (2))){
var state_29571__$1 = state_29571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29571__$1,(4),ch);
} else {
if((state_val_29572 === (9))){
var inst_29558 = (state_29571[(9)]);
var inst_29551 = inst_29558;
var state_29571__$1 = (function (){var statearr_29582 = state_29571;
(statearr_29582[(7)] = inst_29551);

return statearr_29582;
})();
var statearr_29583_29600 = state_29571__$1;
(statearr_29583_29600[(2)] = null);

(statearr_29583_29600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (5))){
var inst_29551 = (state_29571[(7)]);
var state_29571__$1 = state_29571;
var statearr_29584_29601 = state_29571__$1;
(statearr_29584_29601[(2)] = inst_29551);

(statearr_29584_29601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (10))){
var inst_29565 = (state_29571[(2)]);
var state_29571__$1 = state_29571;
var statearr_29585_29602 = state_29571__$1;
(statearr_29585_29602[(2)] = inst_29565);

(statearr_29585_29602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29572 === (8))){
var inst_29558 = (state_29571[(9)]);
var inst_29561 = cljs.core.deref.call(null,inst_29558);
var state_29571__$1 = state_29571;
var statearr_29586_29603 = state_29571__$1;
(statearr_29586_29603[(2)] = inst_29561);

(statearr_29586_29603[(1)] = (10));


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
});})(c__28805__auto__))
;
return ((function (switch__28693__auto__,c__28805__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28694__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28694__auto____0 = (function (){
var statearr_29590 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29590[(0)] = cljs$core$async$reduce_$_state_machine__28694__auto__);

(statearr_29590[(1)] = (1));

return statearr_29590;
});
var cljs$core$async$reduce_$_state_machine__28694__auto____1 = (function (state_29571){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_29571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e29591){if((e29591 instanceof Object)){
var ex__28697__auto__ = e29591;
var statearr_29592_29604 = state_29571;
(statearr_29592_29604[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29605 = state_29571;
state_29571 = G__29605;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28694__auto__ = function(state_29571){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28694__auto____1.call(this,state_29571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28694__auto____0;
cljs$core$async$reduce_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28694__auto____1;
return cljs$core$async$reduce_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__))
})();
var state__28807__auto__ = (function (){var statearr_29593 = f__28806__auto__.call(null);
(statearr_29593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_29593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__))
);

return c__28805__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29606 = [];
var len__25923__auto___29658 = arguments.length;
var i__25924__auto___29659 = (0);
while(true){
if((i__25924__auto___29659 < len__25923__auto___29658)){
args29606.push((arguments[i__25924__auto___29659]));

var G__29660 = (i__25924__auto___29659 + (1));
i__25924__auto___29659 = G__29660;
continue;
} else {
}
break;
}

var G__29608 = args29606.length;
switch (G__29608) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29606.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__){
return (function (state_29633){
var state_val_29634 = (state_29633[(1)]);
if((state_val_29634 === (7))){
var inst_29615 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
var statearr_29635_29662 = state_29633__$1;
(statearr_29635_29662[(2)] = inst_29615);

(statearr_29635_29662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (1))){
var inst_29609 = cljs.core.seq.call(null,coll);
var inst_29610 = inst_29609;
var state_29633__$1 = (function (){var statearr_29636 = state_29633;
(statearr_29636[(7)] = inst_29610);

return statearr_29636;
})();
var statearr_29637_29663 = state_29633__$1;
(statearr_29637_29663[(2)] = null);

(statearr_29637_29663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (4))){
var inst_29610 = (state_29633[(7)]);
var inst_29613 = cljs.core.first.call(null,inst_29610);
var state_29633__$1 = state_29633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29633__$1,(7),ch,inst_29613);
} else {
if((state_val_29634 === (13))){
var inst_29627 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
var statearr_29638_29664 = state_29633__$1;
(statearr_29638_29664[(2)] = inst_29627);

(statearr_29638_29664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (6))){
var inst_29618 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
if(cljs.core.truth_(inst_29618)){
var statearr_29639_29665 = state_29633__$1;
(statearr_29639_29665[(1)] = (8));

} else {
var statearr_29640_29666 = state_29633__$1;
(statearr_29640_29666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (3))){
var inst_29631 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29633__$1,inst_29631);
} else {
if((state_val_29634 === (12))){
var state_29633__$1 = state_29633;
var statearr_29641_29667 = state_29633__$1;
(statearr_29641_29667[(2)] = null);

(statearr_29641_29667[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (2))){
var inst_29610 = (state_29633[(7)]);
var state_29633__$1 = state_29633;
if(cljs.core.truth_(inst_29610)){
var statearr_29642_29668 = state_29633__$1;
(statearr_29642_29668[(1)] = (4));

} else {
var statearr_29643_29669 = state_29633__$1;
(statearr_29643_29669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (11))){
var inst_29624 = cljs.core.async.close_BANG_.call(null,ch);
var state_29633__$1 = state_29633;
var statearr_29644_29670 = state_29633__$1;
(statearr_29644_29670[(2)] = inst_29624);

(statearr_29644_29670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (9))){
var state_29633__$1 = state_29633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29645_29671 = state_29633__$1;
(statearr_29645_29671[(1)] = (11));

} else {
var statearr_29646_29672 = state_29633__$1;
(statearr_29646_29672[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (5))){
var inst_29610 = (state_29633[(7)]);
var state_29633__$1 = state_29633;
var statearr_29647_29673 = state_29633__$1;
(statearr_29647_29673[(2)] = inst_29610);

(statearr_29647_29673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (10))){
var inst_29629 = (state_29633[(2)]);
var state_29633__$1 = state_29633;
var statearr_29648_29674 = state_29633__$1;
(statearr_29648_29674[(2)] = inst_29629);

(statearr_29648_29674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29634 === (8))){
var inst_29610 = (state_29633[(7)]);
var inst_29620 = cljs.core.next.call(null,inst_29610);
var inst_29610__$1 = inst_29620;
var state_29633__$1 = (function (){var statearr_29649 = state_29633;
(statearr_29649[(7)] = inst_29610__$1);

return statearr_29649;
})();
var statearr_29650_29675 = state_29633__$1;
(statearr_29650_29675[(2)] = null);

(statearr_29650_29675[(1)] = (2));


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
});})(c__28805__auto__))
;
return ((function (switch__28693__auto__,c__28805__auto__){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_29654 = [null,null,null,null,null,null,null,null];
(statearr_29654[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_29654[(1)] = (1));

return statearr_29654;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_29633){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_29633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e29655){if((e29655 instanceof Object)){
var ex__28697__auto__ = e29655;
var statearr_29656_29676 = state_29633;
(statearr_29656_29676[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29677 = state_29633;
state_29633 = G__29677;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_29633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_29633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__))
})();
var state__28807__auto__ = (function (){var statearr_29657 = f__28806__auto__.call(null);
(statearr_29657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_29657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__))
);

return c__28805__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25511__auto__ = (((_ == null))?null:_);
var m__25512__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,_);
} else {
var m__25512__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29903 = (function (mult,ch,cs,meta29904){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29904 = meta29904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29905,meta29904__$1){
var self__ = this;
var _29905__$1 = this;
return (new cljs.core.async.t_cljs$core$async29903(self__.mult,self__.ch,self__.cs,meta29904__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29905){
var self__ = this;
var _29905__$1 = this;
return self__.meta29904;
});})(cs))
;

cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29903.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29903.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29904","meta29904",-1082751738,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29903";

cljs.core.async.t_cljs$core$async29903.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29903");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29903 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29903(mult__$1,ch__$1,cs__$1,meta29904){
return (new cljs.core.async.t_cljs$core$async29903(mult__$1,ch__$1,cs__$1,meta29904));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29903(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28805__auto___30128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___30128,cs,m,dchan,dctr,done){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___30128,cs,m,dchan,dctr,done){
return (function (state_30040){
var state_val_30041 = (state_30040[(1)]);
if((state_val_30041 === (7))){
var inst_30036 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30042_30129 = state_30040__$1;
(statearr_30042_30129[(2)] = inst_30036);

(statearr_30042_30129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (20))){
var inst_29939 = (state_30040[(7)]);
var inst_29951 = cljs.core.first.call(null,inst_29939);
var inst_29952 = cljs.core.nth.call(null,inst_29951,(0),null);
var inst_29953 = cljs.core.nth.call(null,inst_29951,(1),null);
var state_30040__$1 = (function (){var statearr_30043 = state_30040;
(statearr_30043[(8)] = inst_29952);

return statearr_30043;
})();
if(cljs.core.truth_(inst_29953)){
var statearr_30044_30130 = state_30040__$1;
(statearr_30044_30130[(1)] = (22));

} else {
var statearr_30045_30131 = state_30040__$1;
(statearr_30045_30131[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (27))){
var inst_29981 = (state_30040[(9)]);
var inst_29908 = (state_30040[(10)]);
var inst_29988 = (state_30040[(11)]);
var inst_29983 = (state_30040[(12)]);
var inst_29988__$1 = cljs.core._nth.call(null,inst_29981,inst_29983);
var inst_29989 = cljs.core.async.put_BANG_.call(null,inst_29988__$1,inst_29908,done);
var state_30040__$1 = (function (){var statearr_30046 = state_30040;
(statearr_30046[(11)] = inst_29988__$1);

return statearr_30046;
})();
if(cljs.core.truth_(inst_29989)){
var statearr_30047_30132 = state_30040__$1;
(statearr_30047_30132[(1)] = (30));

} else {
var statearr_30048_30133 = state_30040__$1;
(statearr_30048_30133[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (1))){
var state_30040__$1 = state_30040;
var statearr_30049_30134 = state_30040__$1;
(statearr_30049_30134[(2)] = null);

(statearr_30049_30134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (24))){
var inst_29939 = (state_30040[(7)]);
var inst_29958 = (state_30040[(2)]);
var inst_29959 = cljs.core.next.call(null,inst_29939);
var inst_29917 = inst_29959;
var inst_29918 = null;
var inst_29919 = (0);
var inst_29920 = (0);
var state_30040__$1 = (function (){var statearr_30050 = state_30040;
(statearr_30050[(13)] = inst_29920);

(statearr_30050[(14)] = inst_29917);

(statearr_30050[(15)] = inst_29919);

(statearr_30050[(16)] = inst_29918);

(statearr_30050[(17)] = inst_29958);

return statearr_30050;
})();
var statearr_30051_30135 = state_30040__$1;
(statearr_30051_30135[(2)] = null);

(statearr_30051_30135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (39))){
var state_30040__$1 = state_30040;
var statearr_30055_30136 = state_30040__$1;
(statearr_30055_30136[(2)] = null);

(statearr_30055_30136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (4))){
var inst_29908 = (state_30040[(10)]);
var inst_29908__$1 = (state_30040[(2)]);
var inst_29909 = (inst_29908__$1 == null);
var state_30040__$1 = (function (){var statearr_30056 = state_30040;
(statearr_30056[(10)] = inst_29908__$1);

return statearr_30056;
})();
if(cljs.core.truth_(inst_29909)){
var statearr_30057_30137 = state_30040__$1;
(statearr_30057_30137[(1)] = (5));

} else {
var statearr_30058_30138 = state_30040__$1;
(statearr_30058_30138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (15))){
var inst_29920 = (state_30040[(13)]);
var inst_29917 = (state_30040[(14)]);
var inst_29919 = (state_30040[(15)]);
var inst_29918 = (state_30040[(16)]);
var inst_29935 = (state_30040[(2)]);
var inst_29936 = (inst_29920 + (1));
var tmp30052 = inst_29917;
var tmp30053 = inst_29919;
var tmp30054 = inst_29918;
var inst_29917__$1 = tmp30052;
var inst_29918__$1 = tmp30054;
var inst_29919__$1 = tmp30053;
var inst_29920__$1 = inst_29936;
var state_30040__$1 = (function (){var statearr_30059 = state_30040;
(statearr_30059[(13)] = inst_29920__$1);

(statearr_30059[(14)] = inst_29917__$1);

(statearr_30059[(18)] = inst_29935);

(statearr_30059[(15)] = inst_29919__$1);

(statearr_30059[(16)] = inst_29918__$1);

return statearr_30059;
})();
var statearr_30060_30139 = state_30040__$1;
(statearr_30060_30139[(2)] = null);

(statearr_30060_30139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (21))){
var inst_29962 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30064_30140 = state_30040__$1;
(statearr_30064_30140[(2)] = inst_29962);

(statearr_30064_30140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (31))){
var inst_29988 = (state_30040[(11)]);
var inst_29992 = done.call(null,null);
var inst_29993 = cljs.core.async.untap_STAR_.call(null,m,inst_29988);
var state_30040__$1 = (function (){var statearr_30065 = state_30040;
(statearr_30065[(19)] = inst_29992);

return statearr_30065;
})();
var statearr_30066_30141 = state_30040__$1;
(statearr_30066_30141[(2)] = inst_29993);

(statearr_30066_30141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (32))){
var inst_29982 = (state_30040[(20)]);
var inst_29980 = (state_30040[(21)]);
var inst_29981 = (state_30040[(9)]);
var inst_29983 = (state_30040[(12)]);
var inst_29995 = (state_30040[(2)]);
var inst_29996 = (inst_29983 + (1));
var tmp30061 = inst_29982;
var tmp30062 = inst_29980;
var tmp30063 = inst_29981;
var inst_29980__$1 = tmp30062;
var inst_29981__$1 = tmp30063;
var inst_29982__$1 = tmp30061;
var inst_29983__$1 = inst_29996;
var state_30040__$1 = (function (){var statearr_30067 = state_30040;
(statearr_30067[(20)] = inst_29982__$1);

(statearr_30067[(21)] = inst_29980__$1);

(statearr_30067[(9)] = inst_29981__$1);

(statearr_30067[(22)] = inst_29995);

(statearr_30067[(12)] = inst_29983__$1);

return statearr_30067;
})();
var statearr_30068_30142 = state_30040__$1;
(statearr_30068_30142[(2)] = null);

(statearr_30068_30142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (40))){
var inst_30008 = (state_30040[(23)]);
var inst_30012 = done.call(null,null);
var inst_30013 = cljs.core.async.untap_STAR_.call(null,m,inst_30008);
var state_30040__$1 = (function (){var statearr_30069 = state_30040;
(statearr_30069[(24)] = inst_30012);

return statearr_30069;
})();
var statearr_30070_30143 = state_30040__$1;
(statearr_30070_30143[(2)] = inst_30013);

(statearr_30070_30143[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (33))){
var inst_29999 = (state_30040[(25)]);
var inst_30001 = cljs.core.chunked_seq_QMARK_.call(null,inst_29999);
var state_30040__$1 = state_30040;
if(inst_30001){
var statearr_30071_30144 = state_30040__$1;
(statearr_30071_30144[(1)] = (36));

} else {
var statearr_30072_30145 = state_30040__$1;
(statearr_30072_30145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (13))){
var inst_29929 = (state_30040[(26)]);
var inst_29932 = cljs.core.async.close_BANG_.call(null,inst_29929);
var state_30040__$1 = state_30040;
var statearr_30073_30146 = state_30040__$1;
(statearr_30073_30146[(2)] = inst_29932);

(statearr_30073_30146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (22))){
var inst_29952 = (state_30040[(8)]);
var inst_29955 = cljs.core.async.close_BANG_.call(null,inst_29952);
var state_30040__$1 = state_30040;
var statearr_30074_30147 = state_30040__$1;
(statearr_30074_30147[(2)] = inst_29955);

(statearr_30074_30147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (36))){
var inst_29999 = (state_30040[(25)]);
var inst_30003 = cljs.core.chunk_first.call(null,inst_29999);
var inst_30004 = cljs.core.chunk_rest.call(null,inst_29999);
var inst_30005 = cljs.core.count.call(null,inst_30003);
var inst_29980 = inst_30004;
var inst_29981 = inst_30003;
var inst_29982 = inst_30005;
var inst_29983 = (0);
var state_30040__$1 = (function (){var statearr_30075 = state_30040;
(statearr_30075[(20)] = inst_29982);

(statearr_30075[(21)] = inst_29980);

(statearr_30075[(9)] = inst_29981);

(statearr_30075[(12)] = inst_29983);

return statearr_30075;
})();
var statearr_30076_30148 = state_30040__$1;
(statearr_30076_30148[(2)] = null);

(statearr_30076_30148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (41))){
var inst_29999 = (state_30040[(25)]);
var inst_30015 = (state_30040[(2)]);
var inst_30016 = cljs.core.next.call(null,inst_29999);
var inst_29980 = inst_30016;
var inst_29981 = null;
var inst_29982 = (0);
var inst_29983 = (0);
var state_30040__$1 = (function (){var statearr_30077 = state_30040;
(statearr_30077[(27)] = inst_30015);

(statearr_30077[(20)] = inst_29982);

(statearr_30077[(21)] = inst_29980);

(statearr_30077[(9)] = inst_29981);

(statearr_30077[(12)] = inst_29983);

return statearr_30077;
})();
var statearr_30078_30149 = state_30040__$1;
(statearr_30078_30149[(2)] = null);

(statearr_30078_30149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (43))){
var state_30040__$1 = state_30040;
var statearr_30079_30150 = state_30040__$1;
(statearr_30079_30150[(2)] = null);

(statearr_30079_30150[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (29))){
var inst_30024 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30080_30151 = state_30040__$1;
(statearr_30080_30151[(2)] = inst_30024);

(statearr_30080_30151[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (44))){
var inst_30033 = (state_30040[(2)]);
var state_30040__$1 = (function (){var statearr_30081 = state_30040;
(statearr_30081[(28)] = inst_30033);

return statearr_30081;
})();
var statearr_30082_30152 = state_30040__$1;
(statearr_30082_30152[(2)] = null);

(statearr_30082_30152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (6))){
var inst_29972 = (state_30040[(29)]);
var inst_29971 = cljs.core.deref.call(null,cs);
var inst_29972__$1 = cljs.core.keys.call(null,inst_29971);
var inst_29973 = cljs.core.count.call(null,inst_29972__$1);
var inst_29974 = cljs.core.reset_BANG_.call(null,dctr,inst_29973);
var inst_29979 = cljs.core.seq.call(null,inst_29972__$1);
var inst_29980 = inst_29979;
var inst_29981 = null;
var inst_29982 = (0);
var inst_29983 = (0);
var state_30040__$1 = (function (){var statearr_30083 = state_30040;
(statearr_30083[(20)] = inst_29982);

(statearr_30083[(21)] = inst_29980);

(statearr_30083[(9)] = inst_29981);

(statearr_30083[(29)] = inst_29972__$1);

(statearr_30083[(30)] = inst_29974);

(statearr_30083[(12)] = inst_29983);

return statearr_30083;
})();
var statearr_30084_30153 = state_30040__$1;
(statearr_30084_30153[(2)] = null);

(statearr_30084_30153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (28))){
var inst_29980 = (state_30040[(21)]);
var inst_29999 = (state_30040[(25)]);
var inst_29999__$1 = cljs.core.seq.call(null,inst_29980);
var state_30040__$1 = (function (){var statearr_30085 = state_30040;
(statearr_30085[(25)] = inst_29999__$1);

return statearr_30085;
})();
if(inst_29999__$1){
var statearr_30086_30154 = state_30040__$1;
(statearr_30086_30154[(1)] = (33));

} else {
var statearr_30087_30155 = state_30040__$1;
(statearr_30087_30155[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (25))){
var inst_29982 = (state_30040[(20)]);
var inst_29983 = (state_30040[(12)]);
var inst_29985 = (inst_29983 < inst_29982);
var inst_29986 = inst_29985;
var state_30040__$1 = state_30040;
if(cljs.core.truth_(inst_29986)){
var statearr_30088_30156 = state_30040__$1;
(statearr_30088_30156[(1)] = (27));

} else {
var statearr_30089_30157 = state_30040__$1;
(statearr_30089_30157[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (34))){
var state_30040__$1 = state_30040;
var statearr_30090_30158 = state_30040__$1;
(statearr_30090_30158[(2)] = null);

(statearr_30090_30158[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (17))){
var state_30040__$1 = state_30040;
var statearr_30091_30159 = state_30040__$1;
(statearr_30091_30159[(2)] = null);

(statearr_30091_30159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (3))){
var inst_30038 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30040__$1,inst_30038);
} else {
if((state_val_30041 === (12))){
var inst_29967 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30092_30160 = state_30040__$1;
(statearr_30092_30160[(2)] = inst_29967);

(statearr_30092_30160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (2))){
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30040__$1,(4),ch);
} else {
if((state_val_30041 === (23))){
var state_30040__$1 = state_30040;
var statearr_30093_30161 = state_30040__$1;
(statearr_30093_30161[(2)] = null);

(statearr_30093_30161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (35))){
var inst_30022 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30094_30162 = state_30040__$1;
(statearr_30094_30162[(2)] = inst_30022);

(statearr_30094_30162[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (19))){
var inst_29939 = (state_30040[(7)]);
var inst_29943 = cljs.core.chunk_first.call(null,inst_29939);
var inst_29944 = cljs.core.chunk_rest.call(null,inst_29939);
var inst_29945 = cljs.core.count.call(null,inst_29943);
var inst_29917 = inst_29944;
var inst_29918 = inst_29943;
var inst_29919 = inst_29945;
var inst_29920 = (0);
var state_30040__$1 = (function (){var statearr_30095 = state_30040;
(statearr_30095[(13)] = inst_29920);

(statearr_30095[(14)] = inst_29917);

(statearr_30095[(15)] = inst_29919);

(statearr_30095[(16)] = inst_29918);

return statearr_30095;
})();
var statearr_30096_30163 = state_30040__$1;
(statearr_30096_30163[(2)] = null);

(statearr_30096_30163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (11))){
var inst_29939 = (state_30040[(7)]);
var inst_29917 = (state_30040[(14)]);
var inst_29939__$1 = cljs.core.seq.call(null,inst_29917);
var state_30040__$1 = (function (){var statearr_30097 = state_30040;
(statearr_30097[(7)] = inst_29939__$1);

return statearr_30097;
})();
if(inst_29939__$1){
var statearr_30098_30164 = state_30040__$1;
(statearr_30098_30164[(1)] = (16));

} else {
var statearr_30099_30165 = state_30040__$1;
(statearr_30099_30165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (9))){
var inst_29969 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30100_30166 = state_30040__$1;
(statearr_30100_30166[(2)] = inst_29969);

(statearr_30100_30166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (5))){
var inst_29915 = cljs.core.deref.call(null,cs);
var inst_29916 = cljs.core.seq.call(null,inst_29915);
var inst_29917 = inst_29916;
var inst_29918 = null;
var inst_29919 = (0);
var inst_29920 = (0);
var state_30040__$1 = (function (){var statearr_30101 = state_30040;
(statearr_30101[(13)] = inst_29920);

(statearr_30101[(14)] = inst_29917);

(statearr_30101[(15)] = inst_29919);

(statearr_30101[(16)] = inst_29918);

return statearr_30101;
})();
var statearr_30102_30167 = state_30040__$1;
(statearr_30102_30167[(2)] = null);

(statearr_30102_30167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (14))){
var state_30040__$1 = state_30040;
var statearr_30103_30168 = state_30040__$1;
(statearr_30103_30168[(2)] = null);

(statearr_30103_30168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (45))){
var inst_30030 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30104_30169 = state_30040__$1;
(statearr_30104_30169[(2)] = inst_30030);

(statearr_30104_30169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (26))){
var inst_29972 = (state_30040[(29)]);
var inst_30026 = (state_30040[(2)]);
var inst_30027 = cljs.core.seq.call(null,inst_29972);
var state_30040__$1 = (function (){var statearr_30105 = state_30040;
(statearr_30105[(31)] = inst_30026);

return statearr_30105;
})();
if(inst_30027){
var statearr_30106_30170 = state_30040__$1;
(statearr_30106_30170[(1)] = (42));

} else {
var statearr_30107_30171 = state_30040__$1;
(statearr_30107_30171[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (16))){
var inst_29939 = (state_30040[(7)]);
var inst_29941 = cljs.core.chunked_seq_QMARK_.call(null,inst_29939);
var state_30040__$1 = state_30040;
if(inst_29941){
var statearr_30108_30172 = state_30040__$1;
(statearr_30108_30172[(1)] = (19));

} else {
var statearr_30109_30173 = state_30040__$1;
(statearr_30109_30173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (38))){
var inst_30019 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30110_30174 = state_30040__$1;
(statearr_30110_30174[(2)] = inst_30019);

(statearr_30110_30174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (30))){
var state_30040__$1 = state_30040;
var statearr_30111_30175 = state_30040__$1;
(statearr_30111_30175[(2)] = null);

(statearr_30111_30175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (10))){
var inst_29920 = (state_30040[(13)]);
var inst_29918 = (state_30040[(16)]);
var inst_29928 = cljs.core._nth.call(null,inst_29918,inst_29920);
var inst_29929 = cljs.core.nth.call(null,inst_29928,(0),null);
var inst_29930 = cljs.core.nth.call(null,inst_29928,(1),null);
var state_30040__$1 = (function (){var statearr_30112 = state_30040;
(statearr_30112[(26)] = inst_29929);

return statearr_30112;
})();
if(cljs.core.truth_(inst_29930)){
var statearr_30113_30176 = state_30040__$1;
(statearr_30113_30176[(1)] = (13));

} else {
var statearr_30114_30177 = state_30040__$1;
(statearr_30114_30177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (18))){
var inst_29965 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30115_30178 = state_30040__$1;
(statearr_30115_30178[(2)] = inst_29965);

(statearr_30115_30178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (42))){
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30040__$1,(45),dchan);
} else {
if((state_val_30041 === (37))){
var inst_29999 = (state_30040[(25)]);
var inst_30008 = (state_30040[(23)]);
var inst_29908 = (state_30040[(10)]);
var inst_30008__$1 = cljs.core.first.call(null,inst_29999);
var inst_30009 = cljs.core.async.put_BANG_.call(null,inst_30008__$1,inst_29908,done);
var state_30040__$1 = (function (){var statearr_30116 = state_30040;
(statearr_30116[(23)] = inst_30008__$1);

return statearr_30116;
})();
if(cljs.core.truth_(inst_30009)){
var statearr_30117_30179 = state_30040__$1;
(statearr_30117_30179[(1)] = (39));

} else {
var statearr_30118_30180 = state_30040__$1;
(statearr_30118_30180[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (8))){
var inst_29920 = (state_30040[(13)]);
var inst_29919 = (state_30040[(15)]);
var inst_29922 = (inst_29920 < inst_29919);
var inst_29923 = inst_29922;
var state_30040__$1 = state_30040;
if(cljs.core.truth_(inst_29923)){
var statearr_30119_30181 = state_30040__$1;
(statearr_30119_30181[(1)] = (10));

} else {
var statearr_30120_30182 = state_30040__$1;
(statearr_30120_30182[(1)] = (11));

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
});})(c__28805__auto___30128,cs,m,dchan,dctr,done))
;
return ((function (switch__28693__auto__,c__28805__auto___30128,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28694__auto__ = null;
var cljs$core$async$mult_$_state_machine__28694__auto____0 = (function (){
var statearr_30124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30124[(0)] = cljs$core$async$mult_$_state_machine__28694__auto__);

(statearr_30124[(1)] = (1));

return statearr_30124;
});
var cljs$core$async$mult_$_state_machine__28694__auto____1 = (function (state_30040){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_30040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e30125){if((e30125 instanceof Object)){
var ex__28697__auto__ = e30125;
var statearr_30126_30183 = state_30040;
(statearr_30126_30183[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30184 = state_30040;
state_30040 = G__30184;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28694__auto__ = function(state_30040){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28694__auto____1.call(this,state_30040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28694__auto____0;
cljs$core$async$mult_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28694__auto____1;
return cljs$core$async$mult_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___30128,cs,m,dchan,dctr,done))
})();
var state__28807__auto__ = (function (){var statearr_30127 = f__28806__auto__.call(null);
(statearr_30127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___30128);

return statearr_30127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___30128,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args30185 = [];
var len__25923__auto___30188 = arguments.length;
var i__25924__auto___30189 = (0);
while(true){
if((i__25924__auto___30189 < len__25923__auto___30188)){
args30185.push((arguments[i__25924__auto___30189]));

var G__30190 = (i__25924__auto___30189 + (1));
i__25924__auto___30189 = G__30190;
continue;
} else {
}
break;
}

var G__30187 = args30185.length;
switch (G__30187) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30185.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m);
} else {
var m__25512__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,state_map);
} else {
var m__25512__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25511__auto__ = (((m == null))?null:m);
var m__25512__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,m,mode);
} else {
var m__25512__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25930__auto__ = [];
var len__25923__auto___30202 = arguments.length;
var i__25924__auto___30203 = (0);
while(true){
if((i__25924__auto___30203 < len__25923__auto___30202)){
args__25930__auto__.push((arguments[i__25924__auto___30203]));

var G__30204 = (i__25924__auto___30203 + (1));
i__25924__auto___30203 = G__30204;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30196){
var map__30197 = p__30196;
var map__30197__$1 = ((((!((map__30197 == null)))?((((map__30197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30197):map__30197);
var opts = map__30197__$1;
var statearr_30199_30205 = state;
(statearr_30199_30205[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30197,map__30197__$1,opts){
return (function (val){
var statearr_30200_30206 = state;
(statearr_30200_30206[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30197,map__30197__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30201_30207 = state;
(statearr_30201_30207[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30192){
var G__30193 = cljs.core.first.call(null,seq30192);
var seq30192__$1 = cljs.core.next.call(null,seq30192);
var G__30194 = cljs.core.first.call(null,seq30192__$1);
var seq30192__$2 = cljs.core.next.call(null,seq30192__$1);
var G__30195 = cljs.core.first.call(null,seq30192__$2);
var seq30192__$3 = cljs.core.next.call(null,seq30192__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30193,G__30194,G__30195,seq30192__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30373 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30374){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30374 = meta30374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30375,meta30374__$1){
var self__ = this;
var _30375__$1 = this;
return (new cljs.core.async.t_cljs$core$async30373(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30374__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30375){
var self__ = this;
var _30375__$1 = this;
return self__.meta30374;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30373.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30373.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30374","meta30374",-9145448,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30373";

cljs.core.async.t_cljs$core$async30373.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30373");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30373 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30373(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30374){
return (new cljs.core.async.t_cljs$core$async30373(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30374));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30373(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28805__auto___30538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___30538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___30538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30475){
var state_val_30476 = (state_30475[(1)]);
if((state_val_30476 === (7))){
var inst_30391 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30477_30539 = state_30475__$1;
(statearr_30477_30539[(2)] = inst_30391);

(statearr_30477_30539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (20))){
var inst_30403 = (state_30475[(7)]);
var state_30475__$1 = state_30475;
var statearr_30478_30540 = state_30475__$1;
(statearr_30478_30540[(2)] = inst_30403);

(statearr_30478_30540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (27))){
var state_30475__$1 = state_30475;
var statearr_30479_30541 = state_30475__$1;
(statearr_30479_30541[(2)] = null);

(statearr_30479_30541[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (1))){
var inst_30379 = (state_30475[(8)]);
var inst_30379__$1 = calc_state.call(null);
var inst_30381 = (inst_30379__$1 == null);
var inst_30382 = cljs.core.not.call(null,inst_30381);
var state_30475__$1 = (function (){var statearr_30480 = state_30475;
(statearr_30480[(8)] = inst_30379__$1);

return statearr_30480;
})();
if(inst_30382){
var statearr_30481_30542 = state_30475__$1;
(statearr_30481_30542[(1)] = (2));

} else {
var statearr_30482_30543 = state_30475__$1;
(statearr_30482_30543[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (24))){
var inst_30449 = (state_30475[(9)]);
var inst_30426 = (state_30475[(10)]);
var inst_30435 = (state_30475[(11)]);
var inst_30449__$1 = inst_30426.call(null,inst_30435);
var state_30475__$1 = (function (){var statearr_30483 = state_30475;
(statearr_30483[(9)] = inst_30449__$1);

return statearr_30483;
})();
if(cljs.core.truth_(inst_30449__$1)){
var statearr_30484_30544 = state_30475__$1;
(statearr_30484_30544[(1)] = (29));

} else {
var statearr_30485_30545 = state_30475__$1;
(statearr_30485_30545[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (4))){
var inst_30394 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30394)){
var statearr_30486_30546 = state_30475__$1;
(statearr_30486_30546[(1)] = (8));

} else {
var statearr_30487_30547 = state_30475__$1;
(statearr_30487_30547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (15))){
var inst_30420 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30420)){
var statearr_30488_30548 = state_30475__$1;
(statearr_30488_30548[(1)] = (19));

} else {
var statearr_30489_30549 = state_30475__$1;
(statearr_30489_30549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (21))){
var inst_30425 = (state_30475[(12)]);
var inst_30425__$1 = (state_30475[(2)]);
var inst_30426 = cljs.core.get.call(null,inst_30425__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30427 = cljs.core.get.call(null,inst_30425__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30428 = cljs.core.get.call(null,inst_30425__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30475__$1 = (function (){var statearr_30490 = state_30475;
(statearr_30490[(10)] = inst_30426);

(statearr_30490[(13)] = inst_30427);

(statearr_30490[(12)] = inst_30425__$1);

return statearr_30490;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30475__$1,(22),inst_30428);
} else {
if((state_val_30476 === (31))){
var inst_30457 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30457)){
var statearr_30491_30550 = state_30475__$1;
(statearr_30491_30550[(1)] = (32));

} else {
var statearr_30492_30551 = state_30475__$1;
(statearr_30492_30551[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (32))){
var inst_30434 = (state_30475[(14)]);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30475__$1,(35),out,inst_30434);
} else {
if((state_val_30476 === (33))){
var inst_30425 = (state_30475[(12)]);
var inst_30403 = inst_30425;
var state_30475__$1 = (function (){var statearr_30493 = state_30475;
(statearr_30493[(7)] = inst_30403);

return statearr_30493;
})();
var statearr_30494_30552 = state_30475__$1;
(statearr_30494_30552[(2)] = null);

(statearr_30494_30552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (13))){
var inst_30403 = (state_30475[(7)]);
var inst_30410 = inst_30403.cljs$lang$protocol_mask$partition0$;
var inst_30411 = (inst_30410 & (64));
var inst_30412 = inst_30403.cljs$core$ISeq$;
var inst_30413 = (inst_30411) || (inst_30412);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30413)){
var statearr_30495_30553 = state_30475__$1;
(statearr_30495_30553[(1)] = (16));

} else {
var statearr_30496_30554 = state_30475__$1;
(statearr_30496_30554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (22))){
var inst_30435 = (state_30475[(11)]);
var inst_30434 = (state_30475[(14)]);
var inst_30433 = (state_30475[(2)]);
var inst_30434__$1 = cljs.core.nth.call(null,inst_30433,(0),null);
var inst_30435__$1 = cljs.core.nth.call(null,inst_30433,(1),null);
var inst_30436 = (inst_30434__$1 == null);
var inst_30437 = cljs.core._EQ_.call(null,inst_30435__$1,change);
var inst_30438 = (inst_30436) || (inst_30437);
var state_30475__$1 = (function (){var statearr_30497 = state_30475;
(statearr_30497[(11)] = inst_30435__$1);

(statearr_30497[(14)] = inst_30434__$1);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30438)){
var statearr_30498_30555 = state_30475__$1;
(statearr_30498_30555[(1)] = (23));

} else {
var statearr_30499_30556 = state_30475__$1;
(statearr_30499_30556[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (36))){
var inst_30425 = (state_30475[(12)]);
var inst_30403 = inst_30425;
var state_30475__$1 = (function (){var statearr_30500 = state_30475;
(statearr_30500[(7)] = inst_30403);

return statearr_30500;
})();
var statearr_30501_30557 = state_30475__$1;
(statearr_30501_30557[(2)] = null);

(statearr_30501_30557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (29))){
var inst_30449 = (state_30475[(9)]);
var state_30475__$1 = state_30475;
var statearr_30502_30558 = state_30475__$1;
(statearr_30502_30558[(2)] = inst_30449);

(statearr_30502_30558[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (6))){
var state_30475__$1 = state_30475;
var statearr_30503_30559 = state_30475__$1;
(statearr_30503_30559[(2)] = false);

(statearr_30503_30559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (28))){
var inst_30445 = (state_30475[(2)]);
var inst_30446 = calc_state.call(null);
var inst_30403 = inst_30446;
var state_30475__$1 = (function (){var statearr_30504 = state_30475;
(statearr_30504[(15)] = inst_30445);

(statearr_30504[(7)] = inst_30403);

return statearr_30504;
})();
var statearr_30505_30560 = state_30475__$1;
(statearr_30505_30560[(2)] = null);

(statearr_30505_30560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (25))){
var inst_30471 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30506_30561 = state_30475__$1;
(statearr_30506_30561[(2)] = inst_30471);

(statearr_30506_30561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (34))){
var inst_30469 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30507_30562 = state_30475__$1;
(statearr_30507_30562[(2)] = inst_30469);

(statearr_30507_30562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (17))){
var state_30475__$1 = state_30475;
var statearr_30508_30563 = state_30475__$1;
(statearr_30508_30563[(2)] = false);

(statearr_30508_30563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (3))){
var state_30475__$1 = state_30475;
var statearr_30509_30564 = state_30475__$1;
(statearr_30509_30564[(2)] = false);

(statearr_30509_30564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (12))){
var inst_30473 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30475__$1,inst_30473);
} else {
if((state_val_30476 === (2))){
var inst_30379 = (state_30475[(8)]);
var inst_30384 = inst_30379.cljs$lang$protocol_mask$partition0$;
var inst_30385 = (inst_30384 & (64));
var inst_30386 = inst_30379.cljs$core$ISeq$;
var inst_30387 = (inst_30385) || (inst_30386);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30387)){
var statearr_30510_30565 = state_30475__$1;
(statearr_30510_30565[(1)] = (5));

} else {
var statearr_30511_30566 = state_30475__$1;
(statearr_30511_30566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (23))){
var inst_30434 = (state_30475[(14)]);
var inst_30440 = (inst_30434 == null);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30440)){
var statearr_30512_30567 = state_30475__$1;
(statearr_30512_30567[(1)] = (26));

} else {
var statearr_30513_30568 = state_30475__$1;
(statearr_30513_30568[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (35))){
var inst_30460 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30460)){
var statearr_30514_30569 = state_30475__$1;
(statearr_30514_30569[(1)] = (36));

} else {
var statearr_30515_30570 = state_30475__$1;
(statearr_30515_30570[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (19))){
var inst_30403 = (state_30475[(7)]);
var inst_30422 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30403);
var state_30475__$1 = state_30475;
var statearr_30516_30571 = state_30475__$1;
(statearr_30516_30571[(2)] = inst_30422);

(statearr_30516_30571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (11))){
var inst_30403 = (state_30475[(7)]);
var inst_30407 = (inst_30403 == null);
var inst_30408 = cljs.core.not.call(null,inst_30407);
var state_30475__$1 = state_30475;
if(inst_30408){
var statearr_30517_30572 = state_30475__$1;
(statearr_30517_30572[(1)] = (13));

} else {
var statearr_30518_30573 = state_30475__$1;
(statearr_30518_30573[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (9))){
var inst_30379 = (state_30475[(8)]);
var state_30475__$1 = state_30475;
var statearr_30519_30574 = state_30475__$1;
(statearr_30519_30574[(2)] = inst_30379);

(statearr_30519_30574[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (5))){
var state_30475__$1 = state_30475;
var statearr_30520_30575 = state_30475__$1;
(statearr_30520_30575[(2)] = true);

(statearr_30520_30575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (14))){
var state_30475__$1 = state_30475;
var statearr_30521_30576 = state_30475__$1;
(statearr_30521_30576[(2)] = false);

(statearr_30521_30576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (26))){
var inst_30435 = (state_30475[(11)]);
var inst_30442 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30435);
var state_30475__$1 = state_30475;
var statearr_30522_30577 = state_30475__$1;
(statearr_30522_30577[(2)] = inst_30442);

(statearr_30522_30577[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (16))){
var state_30475__$1 = state_30475;
var statearr_30523_30578 = state_30475__$1;
(statearr_30523_30578[(2)] = true);

(statearr_30523_30578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (38))){
var inst_30465 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30524_30579 = state_30475__$1;
(statearr_30524_30579[(2)] = inst_30465);

(statearr_30524_30579[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (30))){
var inst_30426 = (state_30475[(10)]);
var inst_30435 = (state_30475[(11)]);
var inst_30427 = (state_30475[(13)]);
var inst_30452 = cljs.core.empty_QMARK_.call(null,inst_30426);
var inst_30453 = inst_30427.call(null,inst_30435);
var inst_30454 = cljs.core.not.call(null,inst_30453);
var inst_30455 = (inst_30452) && (inst_30454);
var state_30475__$1 = state_30475;
var statearr_30525_30580 = state_30475__$1;
(statearr_30525_30580[(2)] = inst_30455);

(statearr_30525_30580[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (10))){
var inst_30379 = (state_30475[(8)]);
var inst_30399 = (state_30475[(2)]);
var inst_30400 = cljs.core.get.call(null,inst_30399,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30401 = cljs.core.get.call(null,inst_30399,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30402 = cljs.core.get.call(null,inst_30399,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30403 = inst_30379;
var state_30475__$1 = (function (){var statearr_30526 = state_30475;
(statearr_30526[(7)] = inst_30403);

(statearr_30526[(16)] = inst_30400);

(statearr_30526[(17)] = inst_30401);

(statearr_30526[(18)] = inst_30402);

return statearr_30526;
})();
var statearr_30527_30581 = state_30475__$1;
(statearr_30527_30581[(2)] = null);

(statearr_30527_30581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (18))){
var inst_30417 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30528_30582 = state_30475__$1;
(statearr_30528_30582[(2)] = inst_30417);

(statearr_30528_30582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (37))){
var state_30475__$1 = state_30475;
var statearr_30529_30583 = state_30475__$1;
(statearr_30529_30583[(2)] = null);

(statearr_30529_30583[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (8))){
var inst_30379 = (state_30475[(8)]);
var inst_30396 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30379);
var state_30475__$1 = state_30475;
var statearr_30530_30584 = state_30475__$1;
(statearr_30530_30584[(2)] = inst_30396);

(statearr_30530_30584[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__28805__auto___30538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28693__auto__,c__28805__auto___30538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28694__auto__ = null;
var cljs$core$async$mix_$_state_machine__28694__auto____0 = (function (){
var statearr_30534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30534[(0)] = cljs$core$async$mix_$_state_machine__28694__auto__);

(statearr_30534[(1)] = (1));

return statearr_30534;
});
var cljs$core$async$mix_$_state_machine__28694__auto____1 = (function (state_30475){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_30475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e30535){if((e30535 instanceof Object)){
var ex__28697__auto__ = e30535;
var statearr_30536_30585 = state_30475;
(statearr_30536_30585[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30586 = state_30475;
state_30475 = G__30586;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28694__auto__ = function(state_30475){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28694__auto____1.call(this,state_30475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28694__auto____0;
cljs$core$async$mix_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28694__auto____1;
return cljs$core$async$mix_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___30538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28807__auto__ = (function (){var statearr_30537 = f__28806__auto__.call(null);
(statearr_30537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___30538);

return statearr_30537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___30538,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25512__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v,ch);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30587 = [];
var len__25923__auto___30590 = arguments.length;
var i__25924__auto___30591 = (0);
while(true){
if((i__25924__auto___30591 < len__25923__auto___30590)){
args30587.push((arguments[i__25924__auto___30591]));

var G__30592 = (i__25924__auto___30591 + (1));
i__25924__auto___30591 = G__30592;
continue;
} else {
}
break;
}

var G__30589 = args30587.length;
switch (G__30589) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30587.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25511__auto__ = (((p == null))?null:p);
var m__25512__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25511__auto__)]);
if(!((m__25512__auto__ == null))){
return m__25512__auto__.call(null,p,v);
} else {
var m__25512__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25512__auto____$1 == null))){
return m__25512__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30595 = [];
var len__25923__auto___30720 = arguments.length;
var i__25924__auto___30721 = (0);
while(true){
if((i__25924__auto___30721 < len__25923__auto___30720)){
args30595.push((arguments[i__25924__auto___30721]));

var G__30722 = (i__25924__auto___30721 + (1));
i__25924__auto___30721 = G__30722;
continue;
} else {
}
break;
}

var G__30597 = args30595.length;
switch (G__30597) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30595.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24848__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24848__auto__,mults){
return (function (p1__30594_SHARP_){
if(cljs.core.truth_(p1__30594_SHARP_.call(null,topic))){
return p1__30594_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30594_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30598 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30599){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30599 = meta30599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30600,meta30599__$1){
var self__ = this;
var _30600__$1 = this;
return (new cljs.core.async.t_cljs$core$async30598(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30599__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30600){
var self__ = this;
var _30600__$1 = this;
return self__.meta30599;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30598.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30598.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30599","meta30599",-1515161282,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30598";

cljs.core.async.t_cljs$core$async30598.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30598");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30598 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30598(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30599){
return (new cljs.core.async.t_cljs$core$async30598(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30599));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30598(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28805__auto___30724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___30724,mults,ensure_mult,p){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___30724,mults,ensure_mult,p){
return (function (state_30672){
var state_val_30673 = (state_30672[(1)]);
if((state_val_30673 === (7))){
var inst_30668 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30674_30725 = state_30672__$1;
(statearr_30674_30725[(2)] = inst_30668);

(statearr_30674_30725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (20))){
var state_30672__$1 = state_30672;
var statearr_30675_30726 = state_30672__$1;
(statearr_30675_30726[(2)] = null);

(statearr_30675_30726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (1))){
var state_30672__$1 = state_30672;
var statearr_30676_30727 = state_30672__$1;
(statearr_30676_30727[(2)] = null);

(statearr_30676_30727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (24))){
var inst_30651 = (state_30672[(7)]);
var inst_30660 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30651);
var state_30672__$1 = state_30672;
var statearr_30677_30728 = state_30672__$1;
(statearr_30677_30728[(2)] = inst_30660);

(statearr_30677_30728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (4))){
var inst_30603 = (state_30672[(8)]);
var inst_30603__$1 = (state_30672[(2)]);
var inst_30604 = (inst_30603__$1 == null);
var state_30672__$1 = (function (){var statearr_30678 = state_30672;
(statearr_30678[(8)] = inst_30603__$1);

return statearr_30678;
})();
if(cljs.core.truth_(inst_30604)){
var statearr_30679_30729 = state_30672__$1;
(statearr_30679_30729[(1)] = (5));

} else {
var statearr_30680_30730 = state_30672__$1;
(statearr_30680_30730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (15))){
var inst_30645 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30681_30731 = state_30672__$1;
(statearr_30681_30731[(2)] = inst_30645);

(statearr_30681_30731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (21))){
var inst_30665 = (state_30672[(2)]);
var state_30672__$1 = (function (){var statearr_30682 = state_30672;
(statearr_30682[(9)] = inst_30665);

return statearr_30682;
})();
var statearr_30683_30732 = state_30672__$1;
(statearr_30683_30732[(2)] = null);

(statearr_30683_30732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (13))){
var inst_30627 = (state_30672[(10)]);
var inst_30629 = cljs.core.chunked_seq_QMARK_.call(null,inst_30627);
var state_30672__$1 = state_30672;
if(inst_30629){
var statearr_30684_30733 = state_30672__$1;
(statearr_30684_30733[(1)] = (16));

} else {
var statearr_30685_30734 = state_30672__$1;
(statearr_30685_30734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (22))){
var inst_30657 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
if(cljs.core.truth_(inst_30657)){
var statearr_30686_30735 = state_30672__$1;
(statearr_30686_30735[(1)] = (23));

} else {
var statearr_30687_30736 = state_30672__$1;
(statearr_30687_30736[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (6))){
var inst_30653 = (state_30672[(11)]);
var inst_30651 = (state_30672[(7)]);
var inst_30603 = (state_30672[(8)]);
var inst_30651__$1 = topic_fn.call(null,inst_30603);
var inst_30652 = cljs.core.deref.call(null,mults);
var inst_30653__$1 = cljs.core.get.call(null,inst_30652,inst_30651__$1);
var state_30672__$1 = (function (){var statearr_30688 = state_30672;
(statearr_30688[(11)] = inst_30653__$1);

(statearr_30688[(7)] = inst_30651__$1);

return statearr_30688;
})();
if(cljs.core.truth_(inst_30653__$1)){
var statearr_30689_30737 = state_30672__$1;
(statearr_30689_30737[(1)] = (19));

} else {
var statearr_30690_30738 = state_30672__$1;
(statearr_30690_30738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (25))){
var inst_30662 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30691_30739 = state_30672__$1;
(statearr_30691_30739[(2)] = inst_30662);

(statearr_30691_30739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (17))){
var inst_30627 = (state_30672[(10)]);
var inst_30636 = cljs.core.first.call(null,inst_30627);
var inst_30637 = cljs.core.async.muxch_STAR_.call(null,inst_30636);
var inst_30638 = cljs.core.async.close_BANG_.call(null,inst_30637);
var inst_30639 = cljs.core.next.call(null,inst_30627);
var inst_30613 = inst_30639;
var inst_30614 = null;
var inst_30615 = (0);
var inst_30616 = (0);
var state_30672__$1 = (function (){var statearr_30692 = state_30672;
(statearr_30692[(12)] = inst_30614);

(statearr_30692[(13)] = inst_30613);

(statearr_30692[(14)] = inst_30615);

(statearr_30692[(15)] = inst_30616);

(statearr_30692[(16)] = inst_30638);

return statearr_30692;
})();
var statearr_30693_30740 = state_30672__$1;
(statearr_30693_30740[(2)] = null);

(statearr_30693_30740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (3))){
var inst_30670 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30672__$1,inst_30670);
} else {
if((state_val_30673 === (12))){
var inst_30647 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30694_30741 = state_30672__$1;
(statearr_30694_30741[(2)] = inst_30647);

(statearr_30694_30741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (2))){
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30672__$1,(4),ch);
} else {
if((state_val_30673 === (23))){
var state_30672__$1 = state_30672;
var statearr_30695_30742 = state_30672__$1;
(statearr_30695_30742[(2)] = null);

(statearr_30695_30742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (19))){
var inst_30653 = (state_30672[(11)]);
var inst_30603 = (state_30672[(8)]);
var inst_30655 = cljs.core.async.muxch_STAR_.call(null,inst_30653);
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30672__$1,(22),inst_30655,inst_30603);
} else {
if((state_val_30673 === (11))){
var inst_30613 = (state_30672[(13)]);
var inst_30627 = (state_30672[(10)]);
var inst_30627__$1 = cljs.core.seq.call(null,inst_30613);
var state_30672__$1 = (function (){var statearr_30696 = state_30672;
(statearr_30696[(10)] = inst_30627__$1);

return statearr_30696;
})();
if(inst_30627__$1){
var statearr_30697_30743 = state_30672__$1;
(statearr_30697_30743[(1)] = (13));

} else {
var statearr_30698_30744 = state_30672__$1;
(statearr_30698_30744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (9))){
var inst_30649 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30699_30745 = state_30672__$1;
(statearr_30699_30745[(2)] = inst_30649);

(statearr_30699_30745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (5))){
var inst_30610 = cljs.core.deref.call(null,mults);
var inst_30611 = cljs.core.vals.call(null,inst_30610);
var inst_30612 = cljs.core.seq.call(null,inst_30611);
var inst_30613 = inst_30612;
var inst_30614 = null;
var inst_30615 = (0);
var inst_30616 = (0);
var state_30672__$1 = (function (){var statearr_30700 = state_30672;
(statearr_30700[(12)] = inst_30614);

(statearr_30700[(13)] = inst_30613);

(statearr_30700[(14)] = inst_30615);

(statearr_30700[(15)] = inst_30616);

return statearr_30700;
})();
var statearr_30701_30746 = state_30672__$1;
(statearr_30701_30746[(2)] = null);

(statearr_30701_30746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (14))){
var state_30672__$1 = state_30672;
var statearr_30705_30747 = state_30672__$1;
(statearr_30705_30747[(2)] = null);

(statearr_30705_30747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (16))){
var inst_30627 = (state_30672[(10)]);
var inst_30631 = cljs.core.chunk_first.call(null,inst_30627);
var inst_30632 = cljs.core.chunk_rest.call(null,inst_30627);
var inst_30633 = cljs.core.count.call(null,inst_30631);
var inst_30613 = inst_30632;
var inst_30614 = inst_30631;
var inst_30615 = inst_30633;
var inst_30616 = (0);
var state_30672__$1 = (function (){var statearr_30706 = state_30672;
(statearr_30706[(12)] = inst_30614);

(statearr_30706[(13)] = inst_30613);

(statearr_30706[(14)] = inst_30615);

(statearr_30706[(15)] = inst_30616);

return statearr_30706;
})();
var statearr_30707_30748 = state_30672__$1;
(statearr_30707_30748[(2)] = null);

(statearr_30707_30748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (10))){
var inst_30614 = (state_30672[(12)]);
var inst_30613 = (state_30672[(13)]);
var inst_30615 = (state_30672[(14)]);
var inst_30616 = (state_30672[(15)]);
var inst_30621 = cljs.core._nth.call(null,inst_30614,inst_30616);
var inst_30622 = cljs.core.async.muxch_STAR_.call(null,inst_30621);
var inst_30623 = cljs.core.async.close_BANG_.call(null,inst_30622);
var inst_30624 = (inst_30616 + (1));
var tmp30702 = inst_30614;
var tmp30703 = inst_30613;
var tmp30704 = inst_30615;
var inst_30613__$1 = tmp30703;
var inst_30614__$1 = tmp30702;
var inst_30615__$1 = tmp30704;
var inst_30616__$1 = inst_30624;
var state_30672__$1 = (function (){var statearr_30708 = state_30672;
(statearr_30708[(17)] = inst_30623);

(statearr_30708[(12)] = inst_30614__$1);

(statearr_30708[(13)] = inst_30613__$1);

(statearr_30708[(14)] = inst_30615__$1);

(statearr_30708[(15)] = inst_30616__$1);

return statearr_30708;
})();
var statearr_30709_30749 = state_30672__$1;
(statearr_30709_30749[(2)] = null);

(statearr_30709_30749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (18))){
var inst_30642 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30710_30750 = state_30672__$1;
(statearr_30710_30750[(2)] = inst_30642);

(statearr_30710_30750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (8))){
var inst_30615 = (state_30672[(14)]);
var inst_30616 = (state_30672[(15)]);
var inst_30618 = (inst_30616 < inst_30615);
var inst_30619 = inst_30618;
var state_30672__$1 = state_30672;
if(cljs.core.truth_(inst_30619)){
var statearr_30711_30751 = state_30672__$1;
(statearr_30711_30751[(1)] = (10));

} else {
var statearr_30712_30752 = state_30672__$1;
(statearr_30712_30752[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__28805__auto___30724,mults,ensure_mult,p))
;
return ((function (switch__28693__auto__,c__28805__auto___30724,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_30716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30716[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_30716[(1)] = (1));

return statearr_30716;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_30672){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_30672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e30717){if((e30717 instanceof Object)){
var ex__28697__auto__ = e30717;
var statearr_30718_30753 = state_30672;
(statearr_30718_30753[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30754 = state_30672;
state_30672 = G__30754;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_30672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_30672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___30724,mults,ensure_mult,p))
})();
var state__28807__auto__ = (function (){var statearr_30719 = f__28806__auto__.call(null);
(statearr_30719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___30724);

return statearr_30719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___30724,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30755 = [];
var len__25923__auto___30758 = arguments.length;
var i__25924__auto___30759 = (0);
while(true){
if((i__25924__auto___30759 < len__25923__auto___30758)){
args30755.push((arguments[i__25924__auto___30759]));

var G__30760 = (i__25924__auto___30759 + (1));
i__25924__auto___30759 = G__30760;
continue;
} else {
}
break;
}

var G__30757 = args30755.length;
switch (G__30757) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30755.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30762 = [];
var len__25923__auto___30765 = arguments.length;
var i__25924__auto___30766 = (0);
while(true){
if((i__25924__auto___30766 < len__25923__auto___30765)){
args30762.push((arguments[i__25924__auto___30766]));

var G__30767 = (i__25924__auto___30766 + (1));
i__25924__auto___30766 = G__30767;
continue;
} else {
}
break;
}

var G__30764 = args30762.length;
switch (G__30764) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30762.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30769 = [];
var len__25923__auto___30840 = arguments.length;
var i__25924__auto___30841 = (0);
while(true){
if((i__25924__auto___30841 < len__25923__auto___30840)){
args30769.push((arguments[i__25924__auto___30841]));

var G__30842 = (i__25924__auto___30841 + (1));
i__25924__auto___30841 = G__30842;
continue;
} else {
}
break;
}

var G__30771 = args30769.length;
switch (G__30771) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30769.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28805__auto___30844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___30844,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___30844,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30810){
var state_val_30811 = (state_30810[(1)]);
if((state_val_30811 === (7))){
var state_30810__$1 = state_30810;
var statearr_30812_30845 = state_30810__$1;
(statearr_30812_30845[(2)] = null);

(statearr_30812_30845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (1))){
var state_30810__$1 = state_30810;
var statearr_30813_30846 = state_30810__$1;
(statearr_30813_30846[(2)] = null);

(statearr_30813_30846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (4))){
var inst_30774 = (state_30810[(7)]);
var inst_30776 = (inst_30774 < cnt);
var state_30810__$1 = state_30810;
if(cljs.core.truth_(inst_30776)){
var statearr_30814_30847 = state_30810__$1;
(statearr_30814_30847[(1)] = (6));

} else {
var statearr_30815_30848 = state_30810__$1;
(statearr_30815_30848[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (15))){
var inst_30806 = (state_30810[(2)]);
var state_30810__$1 = state_30810;
var statearr_30816_30849 = state_30810__$1;
(statearr_30816_30849[(2)] = inst_30806);

(statearr_30816_30849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (13))){
var inst_30799 = cljs.core.async.close_BANG_.call(null,out);
var state_30810__$1 = state_30810;
var statearr_30817_30850 = state_30810__$1;
(statearr_30817_30850[(2)] = inst_30799);

(statearr_30817_30850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (6))){
var state_30810__$1 = state_30810;
var statearr_30818_30851 = state_30810__$1;
(statearr_30818_30851[(2)] = null);

(statearr_30818_30851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (3))){
var inst_30808 = (state_30810[(2)]);
var state_30810__$1 = state_30810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30810__$1,inst_30808);
} else {
if((state_val_30811 === (12))){
var inst_30796 = (state_30810[(8)]);
var inst_30796__$1 = (state_30810[(2)]);
var inst_30797 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30796__$1);
var state_30810__$1 = (function (){var statearr_30819 = state_30810;
(statearr_30819[(8)] = inst_30796__$1);

return statearr_30819;
})();
if(cljs.core.truth_(inst_30797)){
var statearr_30820_30852 = state_30810__$1;
(statearr_30820_30852[(1)] = (13));

} else {
var statearr_30821_30853 = state_30810__$1;
(statearr_30821_30853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (2))){
var inst_30773 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30774 = (0);
var state_30810__$1 = (function (){var statearr_30822 = state_30810;
(statearr_30822[(7)] = inst_30774);

(statearr_30822[(9)] = inst_30773);

return statearr_30822;
})();
var statearr_30823_30854 = state_30810__$1;
(statearr_30823_30854[(2)] = null);

(statearr_30823_30854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (11))){
var inst_30774 = (state_30810[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30810,(10),Object,null,(9));
var inst_30783 = chs__$1.call(null,inst_30774);
var inst_30784 = done.call(null,inst_30774);
var inst_30785 = cljs.core.async.take_BANG_.call(null,inst_30783,inst_30784);
var state_30810__$1 = state_30810;
var statearr_30824_30855 = state_30810__$1;
(statearr_30824_30855[(2)] = inst_30785);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30810__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (9))){
var inst_30774 = (state_30810[(7)]);
var inst_30787 = (state_30810[(2)]);
var inst_30788 = (inst_30774 + (1));
var inst_30774__$1 = inst_30788;
var state_30810__$1 = (function (){var statearr_30825 = state_30810;
(statearr_30825[(10)] = inst_30787);

(statearr_30825[(7)] = inst_30774__$1);

return statearr_30825;
})();
var statearr_30826_30856 = state_30810__$1;
(statearr_30826_30856[(2)] = null);

(statearr_30826_30856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (5))){
var inst_30794 = (state_30810[(2)]);
var state_30810__$1 = (function (){var statearr_30827 = state_30810;
(statearr_30827[(11)] = inst_30794);

return statearr_30827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30810__$1,(12),dchan);
} else {
if((state_val_30811 === (14))){
var inst_30796 = (state_30810[(8)]);
var inst_30801 = cljs.core.apply.call(null,f,inst_30796);
var state_30810__$1 = state_30810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30810__$1,(16),out,inst_30801);
} else {
if((state_val_30811 === (16))){
var inst_30803 = (state_30810[(2)]);
var state_30810__$1 = (function (){var statearr_30828 = state_30810;
(statearr_30828[(12)] = inst_30803);

return statearr_30828;
})();
var statearr_30829_30857 = state_30810__$1;
(statearr_30829_30857[(2)] = null);

(statearr_30829_30857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (10))){
var inst_30778 = (state_30810[(2)]);
var inst_30779 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30810__$1 = (function (){var statearr_30830 = state_30810;
(statearr_30830[(13)] = inst_30778);

return statearr_30830;
})();
var statearr_30831_30858 = state_30810__$1;
(statearr_30831_30858[(2)] = inst_30779);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30810__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (8))){
var inst_30792 = (state_30810[(2)]);
var state_30810__$1 = state_30810;
var statearr_30832_30859 = state_30810__$1;
(statearr_30832_30859[(2)] = inst_30792);

(statearr_30832_30859[(1)] = (5));


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
});})(c__28805__auto___30844,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28693__auto__,c__28805__auto___30844,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_30836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30836[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_30836[(1)] = (1));

return statearr_30836;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_30810){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_30810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e30837){if((e30837 instanceof Object)){
var ex__28697__auto__ = e30837;
var statearr_30838_30860 = state_30810;
(statearr_30838_30860[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30861 = state_30810;
state_30810 = G__30861;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_30810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_30810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___30844,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28807__auto__ = (function (){var statearr_30839 = f__28806__auto__.call(null);
(statearr_30839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___30844);

return statearr_30839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___30844,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30863 = [];
var len__25923__auto___30921 = arguments.length;
var i__25924__auto___30922 = (0);
while(true){
if((i__25924__auto___30922 < len__25923__auto___30921)){
args30863.push((arguments[i__25924__auto___30922]));

var G__30923 = (i__25924__auto___30922 + (1));
i__25924__auto___30922 = G__30923;
continue;
} else {
}
break;
}

var G__30865 = args30863.length;
switch (G__30865) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30863.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28805__auto___30925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___30925,out){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___30925,out){
return (function (state_30897){
var state_val_30898 = (state_30897[(1)]);
if((state_val_30898 === (7))){
var inst_30876 = (state_30897[(7)]);
var inst_30877 = (state_30897[(8)]);
var inst_30876__$1 = (state_30897[(2)]);
var inst_30877__$1 = cljs.core.nth.call(null,inst_30876__$1,(0),null);
var inst_30878 = cljs.core.nth.call(null,inst_30876__$1,(1),null);
var inst_30879 = (inst_30877__$1 == null);
var state_30897__$1 = (function (){var statearr_30899 = state_30897;
(statearr_30899[(7)] = inst_30876__$1);

(statearr_30899[(9)] = inst_30878);

(statearr_30899[(8)] = inst_30877__$1);

return statearr_30899;
})();
if(cljs.core.truth_(inst_30879)){
var statearr_30900_30926 = state_30897__$1;
(statearr_30900_30926[(1)] = (8));

} else {
var statearr_30901_30927 = state_30897__$1;
(statearr_30901_30927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (1))){
var inst_30866 = cljs.core.vec.call(null,chs);
var inst_30867 = inst_30866;
var state_30897__$1 = (function (){var statearr_30902 = state_30897;
(statearr_30902[(10)] = inst_30867);

return statearr_30902;
})();
var statearr_30903_30928 = state_30897__$1;
(statearr_30903_30928[(2)] = null);

(statearr_30903_30928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (4))){
var inst_30867 = (state_30897[(10)]);
var state_30897__$1 = state_30897;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30897__$1,(7),inst_30867);
} else {
if((state_val_30898 === (6))){
var inst_30893 = (state_30897[(2)]);
var state_30897__$1 = state_30897;
var statearr_30904_30929 = state_30897__$1;
(statearr_30904_30929[(2)] = inst_30893);

(statearr_30904_30929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (3))){
var inst_30895 = (state_30897[(2)]);
var state_30897__$1 = state_30897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30897__$1,inst_30895);
} else {
if((state_val_30898 === (2))){
var inst_30867 = (state_30897[(10)]);
var inst_30869 = cljs.core.count.call(null,inst_30867);
var inst_30870 = (inst_30869 > (0));
var state_30897__$1 = state_30897;
if(cljs.core.truth_(inst_30870)){
var statearr_30906_30930 = state_30897__$1;
(statearr_30906_30930[(1)] = (4));

} else {
var statearr_30907_30931 = state_30897__$1;
(statearr_30907_30931[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (11))){
var inst_30867 = (state_30897[(10)]);
var inst_30886 = (state_30897[(2)]);
var tmp30905 = inst_30867;
var inst_30867__$1 = tmp30905;
var state_30897__$1 = (function (){var statearr_30908 = state_30897;
(statearr_30908[(10)] = inst_30867__$1);

(statearr_30908[(11)] = inst_30886);

return statearr_30908;
})();
var statearr_30909_30932 = state_30897__$1;
(statearr_30909_30932[(2)] = null);

(statearr_30909_30932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (9))){
var inst_30877 = (state_30897[(8)]);
var state_30897__$1 = state_30897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30897__$1,(11),out,inst_30877);
} else {
if((state_val_30898 === (5))){
var inst_30891 = cljs.core.async.close_BANG_.call(null,out);
var state_30897__$1 = state_30897;
var statearr_30910_30933 = state_30897__$1;
(statearr_30910_30933[(2)] = inst_30891);

(statearr_30910_30933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (10))){
var inst_30889 = (state_30897[(2)]);
var state_30897__$1 = state_30897;
var statearr_30911_30934 = state_30897__$1;
(statearr_30911_30934[(2)] = inst_30889);

(statearr_30911_30934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30898 === (8))){
var inst_30867 = (state_30897[(10)]);
var inst_30876 = (state_30897[(7)]);
var inst_30878 = (state_30897[(9)]);
var inst_30877 = (state_30897[(8)]);
var inst_30881 = (function (){var cs = inst_30867;
var vec__30872 = inst_30876;
var v = inst_30877;
var c = inst_30878;
return ((function (cs,vec__30872,v,c,inst_30867,inst_30876,inst_30878,inst_30877,state_val_30898,c__28805__auto___30925,out){
return (function (p1__30862_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30862_SHARP_);
});
;})(cs,vec__30872,v,c,inst_30867,inst_30876,inst_30878,inst_30877,state_val_30898,c__28805__auto___30925,out))
})();
var inst_30882 = cljs.core.filterv.call(null,inst_30881,inst_30867);
var inst_30867__$1 = inst_30882;
var state_30897__$1 = (function (){var statearr_30912 = state_30897;
(statearr_30912[(10)] = inst_30867__$1);

return statearr_30912;
})();
var statearr_30913_30935 = state_30897__$1;
(statearr_30913_30935[(2)] = null);

(statearr_30913_30935[(1)] = (2));


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
});})(c__28805__auto___30925,out))
;
return ((function (switch__28693__auto__,c__28805__auto___30925,out){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_30917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30917[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_30917[(1)] = (1));

return statearr_30917;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_30897){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_30897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e30918){if((e30918 instanceof Object)){
var ex__28697__auto__ = e30918;
var statearr_30919_30936 = state_30897;
(statearr_30919_30936[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30937 = state_30897;
state_30897 = G__30937;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_30897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_30897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___30925,out))
})();
var state__28807__auto__ = (function (){var statearr_30920 = f__28806__auto__.call(null);
(statearr_30920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___30925);

return statearr_30920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___30925,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30938 = [];
var len__25923__auto___30987 = arguments.length;
var i__25924__auto___30988 = (0);
while(true){
if((i__25924__auto___30988 < len__25923__auto___30987)){
args30938.push((arguments[i__25924__auto___30988]));

var G__30989 = (i__25924__auto___30988 + (1));
i__25924__auto___30988 = G__30989;
continue;
} else {
}
break;
}

var G__30940 = args30938.length;
switch (G__30940) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30938.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28805__auto___30991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___30991,out){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___30991,out){
return (function (state_30964){
var state_val_30965 = (state_30964[(1)]);
if((state_val_30965 === (7))){
var inst_30946 = (state_30964[(7)]);
var inst_30946__$1 = (state_30964[(2)]);
var inst_30947 = (inst_30946__$1 == null);
var inst_30948 = cljs.core.not.call(null,inst_30947);
var state_30964__$1 = (function (){var statearr_30966 = state_30964;
(statearr_30966[(7)] = inst_30946__$1);

return statearr_30966;
})();
if(inst_30948){
var statearr_30967_30992 = state_30964__$1;
(statearr_30967_30992[(1)] = (8));

} else {
var statearr_30968_30993 = state_30964__$1;
(statearr_30968_30993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (1))){
var inst_30941 = (0);
var state_30964__$1 = (function (){var statearr_30969 = state_30964;
(statearr_30969[(8)] = inst_30941);

return statearr_30969;
})();
var statearr_30970_30994 = state_30964__$1;
(statearr_30970_30994[(2)] = null);

(statearr_30970_30994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (4))){
var state_30964__$1 = state_30964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30964__$1,(7),ch);
} else {
if((state_val_30965 === (6))){
var inst_30959 = (state_30964[(2)]);
var state_30964__$1 = state_30964;
var statearr_30971_30995 = state_30964__$1;
(statearr_30971_30995[(2)] = inst_30959);

(statearr_30971_30995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (3))){
var inst_30961 = (state_30964[(2)]);
var inst_30962 = cljs.core.async.close_BANG_.call(null,out);
var state_30964__$1 = (function (){var statearr_30972 = state_30964;
(statearr_30972[(9)] = inst_30961);

return statearr_30972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30964__$1,inst_30962);
} else {
if((state_val_30965 === (2))){
var inst_30941 = (state_30964[(8)]);
var inst_30943 = (inst_30941 < n);
var state_30964__$1 = state_30964;
if(cljs.core.truth_(inst_30943)){
var statearr_30973_30996 = state_30964__$1;
(statearr_30973_30996[(1)] = (4));

} else {
var statearr_30974_30997 = state_30964__$1;
(statearr_30974_30997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (11))){
var inst_30941 = (state_30964[(8)]);
var inst_30951 = (state_30964[(2)]);
var inst_30952 = (inst_30941 + (1));
var inst_30941__$1 = inst_30952;
var state_30964__$1 = (function (){var statearr_30975 = state_30964;
(statearr_30975[(8)] = inst_30941__$1);

(statearr_30975[(10)] = inst_30951);

return statearr_30975;
})();
var statearr_30976_30998 = state_30964__$1;
(statearr_30976_30998[(2)] = null);

(statearr_30976_30998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (9))){
var state_30964__$1 = state_30964;
var statearr_30977_30999 = state_30964__$1;
(statearr_30977_30999[(2)] = null);

(statearr_30977_30999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (5))){
var state_30964__$1 = state_30964;
var statearr_30978_31000 = state_30964__$1;
(statearr_30978_31000[(2)] = null);

(statearr_30978_31000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (10))){
var inst_30956 = (state_30964[(2)]);
var state_30964__$1 = state_30964;
var statearr_30979_31001 = state_30964__$1;
(statearr_30979_31001[(2)] = inst_30956);

(statearr_30979_31001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30965 === (8))){
var inst_30946 = (state_30964[(7)]);
var state_30964__$1 = state_30964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30964__$1,(11),out,inst_30946);
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
});})(c__28805__auto___30991,out))
;
return ((function (switch__28693__auto__,c__28805__auto___30991,out){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_30983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30983[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_30983[(1)] = (1));

return statearr_30983;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_30964){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_30964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e30984){if((e30984 instanceof Object)){
var ex__28697__auto__ = e30984;
var statearr_30985_31002 = state_30964;
(statearr_30985_31002[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31003 = state_30964;
state_30964 = G__31003;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_30964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_30964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___30991,out))
})();
var state__28807__auto__ = (function (){var statearr_30986 = f__28806__auto__.call(null);
(statearr_30986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___30991);

return statearr_30986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___30991,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31011 = (function (map_LT_,f,ch,meta31012){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31012 = meta31012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31013,meta31012__$1){
var self__ = this;
var _31013__$1 = this;
return (new cljs.core.async.t_cljs$core$async31011(self__.map_LT_,self__.f,self__.ch,meta31012__$1));
});

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31013){
var self__ = this;
var _31013__$1 = this;
return self__.meta31012;
});

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31014 = (function (map_LT_,f,ch,meta31012,_,fn1,meta31015){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31012 = meta31012;
this._ = _;
this.fn1 = fn1;
this.meta31015 = meta31015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31016,meta31015__$1){
var self__ = this;
var _31016__$1 = this;
return (new cljs.core.async.t_cljs$core$async31014(self__.map_LT_,self__.f,self__.ch,self__.meta31012,self__._,self__.fn1,meta31015__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31016){
var self__ = this;
var _31016__$1 = this;
return self__.meta31015;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31004_SHARP_){
return f1.call(null,(((p1__31004_SHARP_ == null))?null:self__.f.call(null,p1__31004_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31014.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31012","meta31012",1530589440,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31011","cljs.core.async/t_cljs$core$async31011",-769029680,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31015","meta31015",-1670462585,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31014";

cljs.core.async.t_cljs$core$async31014.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31014");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31014 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31014(map_LT___$1,f__$1,ch__$1,meta31012__$1,___$2,fn1__$1,meta31015){
return (new cljs.core.async.t_cljs$core$async31014(map_LT___$1,f__$1,ch__$1,meta31012__$1,___$2,fn1__$1,meta31015));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31014(self__.map_LT_,self__.f,self__.ch,self__.meta31012,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24836__auto__ = ret;
if(cljs.core.truth_(and__24836__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24836__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31012","meta31012",1530589440,null)], null);
});

cljs.core.async.t_cljs$core$async31011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31011";

cljs.core.async.t_cljs$core$async31011.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31011");
});

cljs.core.async.__GT_t_cljs$core$async31011 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31011(map_LT___$1,f__$1,ch__$1,meta31012){
return (new cljs.core.async.t_cljs$core$async31011(map_LT___$1,f__$1,ch__$1,meta31012));
});

}

return (new cljs.core.async.t_cljs$core$async31011(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31020 = (function (map_GT_,f,ch,meta31021){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31021 = meta31021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31022,meta31021__$1){
var self__ = this;
var _31022__$1 = this;
return (new cljs.core.async.t_cljs$core$async31020(self__.map_GT_,self__.f,self__.ch,meta31021__$1));
});

cljs.core.async.t_cljs$core$async31020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31022){
var self__ = this;
var _31022__$1 = this;
return self__.meta31021;
});

cljs.core.async.t_cljs$core$async31020.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31020.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31020.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31021","meta31021",2006425830,null)], null);
});

cljs.core.async.t_cljs$core$async31020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31020";

cljs.core.async.t_cljs$core$async31020.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31020");
});

cljs.core.async.__GT_t_cljs$core$async31020 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31020(map_GT___$1,f__$1,ch__$1,meta31021){
return (new cljs.core.async.t_cljs$core$async31020(map_GT___$1,f__$1,ch__$1,meta31021));
});

}

return (new cljs.core.async.t_cljs$core$async31020(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31026 = (function (filter_GT_,p,ch,meta31027){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31027 = meta31027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31028,meta31027__$1){
var self__ = this;
var _31028__$1 = this;
return (new cljs.core.async.t_cljs$core$async31026(self__.filter_GT_,self__.p,self__.ch,meta31027__$1));
});

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31028){
var self__ = this;
var _31028__$1 = this;
return self__.meta31027;
});

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31027","meta31027",-254542966,null)], null);
});

cljs.core.async.t_cljs$core$async31026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31026";

cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31026");
});

cljs.core.async.__GT_t_cljs$core$async31026 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31026(filter_GT___$1,p__$1,ch__$1,meta31027){
return (new cljs.core.async.t_cljs$core$async31026(filter_GT___$1,p__$1,ch__$1,meta31027));
});

}

return (new cljs.core.async.t_cljs$core$async31026(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args31029 = [];
var len__25923__auto___31073 = arguments.length;
var i__25924__auto___31074 = (0);
while(true){
if((i__25924__auto___31074 < len__25923__auto___31073)){
args31029.push((arguments[i__25924__auto___31074]));

var G__31075 = (i__25924__auto___31074 + (1));
i__25924__auto___31074 = G__31075;
continue;
} else {
}
break;
}

var G__31031 = args31029.length;
switch (G__31031) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31029.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28805__auto___31077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___31077,out){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___31077,out){
return (function (state_31052){
var state_val_31053 = (state_31052[(1)]);
if((state_val_31053 === (7))){
var inst_31048 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31054_31078 = state_31052__$1;
(statearr_31054_31078[(2)] = inst_31048);

(statearr_31054_31078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (1))){
var state_31052__$1 = state_31052;
var statearr_31055_31079 = state_31052__$1;
(statearr_31055_31079[(2)] = null);

(statearr_31055_31079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (4))){
var inst_31034 = (state_31052[(7)]);
var inst_31034__$1 = (state_31052[(2)]);
var inst_31035 = (inst_31034__$1 == null);
var state_31052__$1 = (function (){var statearr_31056 = state_31052;
(statearr_31056[(7)] = inst_31034__$1);

return statearr_31056;
})();
if(cljs.core.truth_(inst_31035)){
var statearr_31057_31080 = state_31052__$1;
(statearr_31057_31080[(1)] = (5));

} else {
var statearr_31058_31081 = state_31052__$1;
(statearr_31058_31081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (6))){
var inst_31034 = (state_31052[(7)]);
var inst_31039 = p.call(null,inst_31034);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31039)){
var statearr_31059_31082 = state_31052__$1;
(statearr_31059_31082[(1)] = (8));

} else {
var statearr_31060_31083 = state_31052__$1;
(statearr_31060_31083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (3))){
var inst_31050 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31052__$1,inst_31050);
} else {
if((state_val_31053 === (2))){
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(4),ch);
} else {
if((state_val_31053 === (11))){
var inst_31042 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31061_31084 = state_31052__$1;
(statearr_31061_31084[(2)] = inst_31042);

(statearr_31061_31084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (9))){
var state_31052__$1 = state_31052;
var statearr_31062_31085 = state_31052__$1;
(statearr_31062_31085[(2)] = null);

(statearr_31062_31085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (5))){
var inst_31037 = cljs.core.async.close_BANG_.call(null,out);
var state_31052__$1 = state_31052;
var statearr_31063_31086 = state_31052__$1;
(statearr_31063_31086[(2)] = inst_31037);

(statearr_31063_31086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (10))){
var inst_31045 = (state_31052[(2)]);
var state_31052__$1 = (function (){var statearr_31064 = state_31052;
(statearr_31064[(8)] = inst_31045);

return statearr_31064;
})();
var statearr_31065_31087 = state_31052__$1;
(statearr_31065_31087[(2)] = null);

(statearr_31065_31087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (8))){
var inst_31034 = (state_31052[(7)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31052__$1,(11),out,inst_31034);
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
});})(c__28805__auto___31077,out))
;
return ((function (switch__28693__auto__,c__28805__auto___31077,out){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_31069 = [null,null,null,null,null,null,null,null,null];
(statearr_31069[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_31069[(1)] = (1));

return statearr_31069;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_31052){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_31052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e31070){if((e31070 instanceof Object)){
var ex__28697__auto__ = e31070;
var statearr_31071_31088 = state_31052;
(statearr_31071_31088[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31089 = state_31052;
state_31052 = G__31089;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_31052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_31052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___31077,out))
})();
var state__28807__auto__ = (function (){var statearr_31072 = f__28806__auto__.call(null);
(statearr_31072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___31077);

return statearr_31072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___31077,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31090 = [];
var len__25923__auto___31093 = arguments.length;
var i__25924__auto___31094 = (0);
while(true){
if((i__25924__auto___31094 < len__25923__auto___31093)){
args31090.push((arguments[i__25924__auto___31094]));

var G__31095 = (i__25924__auto___31094 + (1));
i__25924__auto___31094 = G__31095;
continue;
} else {
}
break;
}

var G__31092 = args31090.length;
switch (G__31092) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31090.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__){
return (function (state_31262){
var state_val_31263 = (state_31262[(1)]);
if((state_val_31263 === (7))){
var inst_31258 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
var statearr_31264_31305 = state_31262__$1;
(statearr_31264_31305[(2)] = inst_31258);

(statearr_31264_31305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (20))){
var inst_31228 = (state_31262[(7)]);
var inst_31239 = (state_31262[(2)]);
var inst_31240 = cljs.core.next.call(null,inst_31228);
var inst_31214 = inst_31240;
var inst_31215 = null;
var inst_31216 = (0);
var inst_31217 = (0);
var state_31262__$1 = (function (){var statearr_31265 = state_31262;
(statearr_31265[(8)] = inst_31215);

(statearr_31265[(9)] = inst_31214);

(statearr_31265[(10)] = inst_31216);

(statearr_31265[(11)] = inst_31239);

(statearr_31265[(12)] = inst_31217);

return statearr_31265;
})();
var statearr_31266_31306 = state_31262__$1;
(statearr_31266_31306[(2)] = null);

(statearr_31266_31306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (1))){
var state_31262__$1 = state_31262;
var statearr_31267_31307 = state_31262__$1;
(statearr_31267_31307[(2)] = null);

(statearr_31267_31307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (4))){
var inst_31203 = (state_31262[(13)]);
var inst_31203__$1 = (state_31262[(2)]);
var inst_31204 = (inst_31203__$1 == null);
var state_31262__$1 = (function (){var statearr_31268 = state_31262;
(statearr_31268[(13)] = inst_31203__$1);

return statearr_31268;
})();
if(cljs.core.truth_(inst_31204)){
var statearr_31269_31308 = state_31262__$1;
(statearr_31269_31308[(1)] = (5));

} else {
var statearr_31270_31309 = state_31262__$1;
(statearr_31270_31309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (15))){
var state_31262__$1 = state_31262;
var statearr_31274_31310 = state_31262__$1;
(statearr_31274_31310[(2)] = null);

(statearr_31274_31310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (21))){
var state_31262__$1 = state_31262;
var statearr_31275_31311 = state_31262__$1;
(statearr_31275_31311[(2)] = null);

(statearr_31275_31311[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (13))){
var inst_31215 = (state_31262[(8)]);
var inst_31214 = (state_31262[(9)]);
var inst_31216 = (state_31262[(10)]);
var inst_31217 = (state_31262[(12)]);
var inst_31224 = (state_31262[(2)]);
var inst_31225 = (inst_31217 + (1));
var tmp31271 = inst_31215;
var tmp31272 = inst_31214;
var tmp31273 = inst_31216;
var inst_31214__$1 = tmp31272;
var inst_31215__$1 = tmp31271;
var inst_31216__$1 = tmp31273;
var inst_31217__$1 = inst_31225;
var state_31262__$1 = (function (){var statearr_31276 = state_31262;
(statearr_31276[(8)] = inst_31215__$1);

(statearr_31276[(9)] = inst_31214__$1);

(statearr_31276[(14)] = inst_31224);

(statearr_31276[(10)] = inst_31216__$1);

(statearr_31276[(12)] = inst_31217__$1);

return statearr_31276;
})();
var statearr_31277_31312 = state_31262__$1;
(statearr_31277_31312[(2)] = null);

(statearr_31277_31312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (22))){
var state_31262__$1 = state_31262;
var statearr_31278_31313 = state_31262__$1;
(statearr_31278_31313[(2)] = null);

(statearr_31278_31313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (6))){
var inst_31203 = (state_31262[(13)]);
var inst_31212 = f.call(null,inst_31203);
var inst_31213 = cljs.core.seq.call(null,inst_31212);
var inst_31214 = inst_31213;
var inst_31215 = null;
var inst_31216 = (0);
var inst_31217 = (0);
var state_31262__$1 = (function (){var statearr_31279 = state_31262;
(statearr_31279[(8)] = inst_31215);

(statearr_31279[(9)] = inst_31214);

(statearr_31279[(10)] = inst_31216);

(statearr_31279[(12)] = inst_31217);

return statearr_31279;
})();
var statearr_31280_31314 = state_31262__$1;
(statearr_31280_31314[(2)] = null);

(statearr_31280_31314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (17))){
var inst_31228 = (state_31262[(7)]);
var inst_31232 = cljs.core.chunk_first.call(null,inst_31228);
var inst_31233 = cljs.core.chunk_rest.call(null,inst_31228);
var inst_31234 = cljs.core.count.call(null,inst_31232);
var inst_31214 = inst_31233;
var inst_31215 = inst_31232;
var inst_31216 = inst_31234;
var inst_31217 = (0);
var state_31262__$1 = (function (){var statearr_31281 = state_31262;
(statearr_31281[(8)] = inst_31215);

(statearr_31281[(9)] = inst_31214);

(statearr_31281[(10)] = inst_31216);

(statearr_31281[(12)] = inst_31217);

return statearr_31281;
})();
var statearr_31282_31315 = state_31262__$1;
(statearr_31282_31315[(2)] = null);

(statearr_31282_31315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (3))){
var inst_31260 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31262__$1,inst_31260);
} else {
if((state_val_31263 === (12))){
var inst_31248 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
var statearr_31283_31316 = state_31262__$1;
(statearr_31283_31316[(2)] = inst_31248);

(statearr_31283_31316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (2))){
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31262__$1,(4),in$);
} else {
if((state_val_31263 === (23))){
var inst_31256 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
var statearr_31284_31317 = state_31262__$1;
(statearr_31284_31317[(2)] = inst_31256);

(statearr_31284_31317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (19))){
var inst_31243 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
var statearr_31285_31318 = state_31262__$1;
(statearr_31285_31318[(2)] = inst_31243);

(statearr_31285_31318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (11))){
var inst_31228 = (state_31262[(7)]);
var inst_31214 = (state_31262[(9)]);
var inst_31228__$1 = cljs.core.seq.call(null,inst_31214);
var state_31262__$1 = (function (){var statearr_31286 = state_31262;
(statearr_31286[(7)] = inst_31228__$1);

return statearr_31286;
})();
if(inst_31228__$1){
var statearr_31287_31319 = state_31262__$1;
(statearr_31287_31319[(1)] = (14));

} else {
var statearr_31288_31320 = state_31262__$1;
(statearr_31288_31320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (9))){
var inst_31250 = (state_31262[(2)]);
var inst_31251 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31262__$1 = (function (){var statearr_31289 = state_31262;
(statearr_31289[(15)] = inst_31250);

return statearr_31289;
})();
if(cljs.core.truth_(inst_31251)){
var statearr_31290_31321 = state_31262__$1;
(statearr_31290_31321[(1)] = (21));

} else {
var statearr_31291_31322 = state_31262__$1;
(statearr_31291_31322[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (5))){
var inst_31206 = cljs.core.async.close_BANG_.call(null,out);
var state_31262__$1 = state_31262;
var statearr_31292_31323 = state_31262__$1;
(statearr_31292_31323[(2)] = inst_31206);

(statearr_31292_31323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (14))){
var inst_31228 = (state_31262[(7)]);
var inst_31230 = cljs.core.chunked_seq_QMARK_.call(null,inst_31228);
var state_31262__$1 = state_31262;
if(inst_31230){
var statearr_31293_31324 = state_31262__$1;
(statearr_31293_31324[(1)] = (17));

} else {
var statearr_31294_31325 = state_31262__$1;
(statearr_31294_31325[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (16))){
var inst_31246 = (state_31262[(2)]);
var state_31262__$1 = state_31262;
var statearr_31295_31326 = state_31262__$1;
(statearr_31295_31326[(2)] = inst_31246);

(statearr_31295_31326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31263 === (10))){
var inst_31215 = (state_31262[(8)]);
var inst_31217 = (state_31262[(12)]);
var inst_31222 = cljs.core._nth.call(null,inst_31215,inst_31217);
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31262__$1,(13),out,inst_31222);
} else {
if((state_val_31263 === (18))){
var inst_31228 = (state_31262[(7)]);
var inst_31237 = cljs.core.first.call(null,inst_31228);
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31262__$1,(20),out,inst_31237);
} else {
if((state_val_31263 === (8))){
var inst_31216 = (state_31262[(10)]);
var inst_31217 = (state_31262[(12)]);
var inst_31219 = (inst_31217 < inst_31216);
var inst_31220 = inst_31219;
var state_31262__$1 = state_31262;
if(cljs.core.truth_(inst_31220)){
var statearr_31296_31327 = state_31262__$1;
(statearr_31296_31327[(1)] = (10));

} else {
var statearr_31297_31328 = state_31262__$1;
(statearr_31297_31328[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__28694__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28694__auto____0 = (function (){
var statearr_31301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31301[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28694__auto__);

(statearr_31301[(1)] = (1));

return statearr_31301;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28694__auto____1 = (function (state_31262){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_31262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e31302){if((e31302 instanceof Object)){
var ex__28697__auto__ = e31302;
var statearr_31303_31329 = state_31262;
(statearr_31303_31329[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31330 = state_31262;
state_31262 = G__31330;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28694__auto__ = function(state_31262){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28694__auto____1.call(this,state_31262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28694__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28694__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__))
})();
var state__28807__auto__ = (function (){var statearr_31304 = f__28806__auto__.call(null);
(statearr_31304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_31304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__))
);

return c__28805__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31331 = [];
var len__25923__auto___31334 = arguments.length;
var i__25924__auto___31335 = (0);
while(true){
if((i__25924__auto___31335 < len__25923__auto___31334)){
args31331.push((arguments[i__25924__auto___31335]));

var G__31336 = (i__25924__auto___31335 + (1));
i__25924__auto___31335 = G__31336;
continue;
} else {
}
break;
}

var G__31333 = args31331.length;
switch (G__31333) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31331.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args31338 = [];
var len__25923__auto___31341 = arguments.length;
var i__25924__auto___31342 = (0);
while(true){
if((i__25924__auto___31342 < len__25923__auto___31341)){
args31338.push((arguments[i__25924__auto___31342]));

var G__31343 = (i__25924__auto___31342 + (1));
i__25924__auto___31342 = G__31343;
continue;
} else {
}
break;
}

var G__31340 = args31338.length;
switch (G__31340) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31338.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args31345 = [];
var len__25923__auto___31396 = arguments.length;
var i__25924__auto___31397 = (0);
while(true){
if((i__25924__auto___31397 < len__25923__auto___31396)){
args31345.push((arguments[i__25924__auto___31397]));

var G__31398 = (i__25924__auto___31397 + (1));
i__25924__auto___31397 = G__31398;
continue;
} else {
}
break;
}

var G__31347 = args31345.length;
switch (G__31347) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31345.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28805__auto___31400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___31400,out){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___31400,out){
return (function (state_31371){
var state_val_31372 = (state_31371[(1)]);
if((state_val_31372 === (7))){
var inst_31366 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31373_31401 = state_31371__$1;
(statearr_31373_31401[(2)] = inst_31366);

(statearr_31373_31401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (1))){
var inst_31348 = null;
var state_31371__$1 = (function (){var statearr_31374 = state_31371;
(statearr_31374[(7)] = inst_31348);

return statearr_31374;
})();
var statearr_31375_31402 = state_31371__$1;
(statearr_31375_31402[(2)] = null);

(statearr_31375_31402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (4))){
var inst_31351 = (state_31371[(8)]);
var inst_31351__$1 = (state_31371[(2)]);
var inst_31352 = (inst_31351__$1 == null);
var inst_31353 = cljs.core.not.call(null,inst_31352);
var state_31371__$1 = (function (){var statearr_31376 = state_31371;
(statearr_31376[(8)] = inst_31351__$1);

return statearr_31376;
})();
if(inst_31353){
var statearr_31377_31403 = state_31371__$1;
(statearr_31377_31403[(1)] = (5));

} else {
var statearr_31378_31404 = state_31371__$1;
(statearr_31378_31404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (6))){
var state_31371__$1 = state_31371;
var statearr_31379_31405 = state_31371__$1;
(statearr_31379_31405[(2)] = null);

(statearr_31379_31405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (3))){
var inst_31368 = (state_31371[(2)]);
var inst_31369 = cljs.core.async.close_BANG_.call(null,out);
var state_31371__$1 = (function (){var statearr_31380 = state_31371;
(statearr_31380[(9)] = inst_31368);

return statearr_31380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31371__$1,inst_31369);
} else {
if((state_val_31372 === (2))){
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31371__$1,(4),ch);
} else {
if((state_val_31372 === (11))){
var inst_31351 = (state_31371[(8)]);
var inst_31360 = (state_31371[(2)]);
var inst_31348 = inst_31351;
var state_31371__$1 = (function (){var statearr_31381 = state_31371;
(statearr_31381[(10)] = inst_31360);

(statearr_31381[(7)] = inst_31348);

return statearr_31381;
})();
var statearr_31382_31406 = state_31371__$1;
(statearr_31382_31406[(2)] = null);

(statearr_31382_31406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (9))){
var inst_31351 = (state_31371[(8)]);
var state_31371__$1 = state_31371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31371__$1,(11),out,inst_31351);
} else {
if((state_val_31372 === (5))){
var inst_31348 = (state_31371[(7)]);
var inst_31351 = (state_31371[(8)]);
var inst_31355 = cljs.core._EQ_.call(null,inst_31351,inst_31348);
var state_31371__$1 = state_31371;
if(inst_31355){
var statearr_31384_31407 = state_31371__$1;
(statearr_31384_31407[(1)] = (8));

} else {
var statearr_31385_31408 = state_31371__$1;
(statearr_31385_31408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (10))){
var inst_31363 = (state_31371[(2)]);
var state_31371__$1 = state_31371;
var statearr_31386_31409 = state_31371__$1;
(statearr_31386_31409[(2)] = inst_31363);

(statearr_31386_31409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31372 === (8))){
var inst_31348 = (state_31371[(7)]);
var tmp31383 = inst_31348;
var inst_31348__$1 = tmp31383;
var state_31371__$1 = (function (){var statearr_31387 = state_31371;
(statearr_31387[(7)] = inst_31348__$1);

return statearr_31387;
})();
var statearr_31388_31410 = state_31371__$1;
(statearr_31388_31410[(2)] = null);

(statearr_31388_31410[(1)] = (2));


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
});})(c__28805__auto___31400,out))
;
return ((function (switch__28693__auto__,c__28805__auto___31400,out){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_31392 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31392[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_31392[(1)] = (1));

return statearr_31392;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_31371){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_31371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e31393){if((e31393 instanceof Object)){
var ex__28697__auto__ = e31393;
var statearr_31394_31411 = state_31371;
(statearr_31394_31411[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31412 = state_31371;
state_31371 = G__31412;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_31371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_31371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___31400,out))
})();
var state__28807__auto__ = (function (){var statearr_31395 = f__28806__auto__.call(null);
(statearr_31395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___31400);

return statearr_31395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___31400,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31413 = [];
var len__25923__auto___31483 = arguments.length;
var i__25924__auto___31484 = (0);
while(true){
if((i__25924__auto___31484 < len__25923__auto___31483)){
args31413.push((arguments[i__25924__auto___31484]));

var G__31485 = (i__25924__auto___31484 + (1));
i__25924__auto___31484 = G__31485;
continue;
} else {
}
break;
}

var G__31415 = args31413.length;
switch (G__31415) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31413.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28805__auto___31487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___31487,out){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___31487,out){
return (function (state_31453){
var state_val_31454 = (state_31453[(1)]);
if((state_val_31454 === (7))){
var inst_31449 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31455_31488 = state_31453__$1;
(statearr_31455_31488[(2)] = inst_31449);

(statearr_31455_31488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (1))){
var inst_31416 = (new Array(n));
var inst_31417 = inst_31416;
var inst_31418 = (0);
var state_31453__$1 = (function (){var statearr_31456 = state_31453;
(statearr_31456[(7)] = inst_31418);

(statearr_31456[(8)] = inst_31417);

return statearr_31456;
})();
var statearr_31457_31489 = state_31453__$1;
(statearr_31457_31489[(2)] = null);

(statearr_31457_31489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (4))){
var inst_31421 = (state_31453[(9)]);
var inst_31421__$1 = (state_31453[(2)]);
var inst_31422 = (inst_31421__$1 == null);
var inst_31423 = cljs.core.not.call(null,inst_31422);
var state_31453__$1 = (function (){var statearr_31458 = state_31453;
(statearr_31458[(9)] = inst_31421__$1);

return statearr_31458;
})();
if(inst_31423){
var statearr_31459_31490 = state_31453__$1;
(statearr_31459_31490[(1)] = (5));

} else {
var statearr_31460_31491 = state_31453__$1;
(statearr_31460_31491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (15))){
var inst_31443 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31461_31492 = state_31453__$1;
(statearr_31461_31492[(2)] = inst_31443);

(statearr_31461_31492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (13))){
var state_31453__$1 = state_31453;
var statearr_31462_31493 = state_31453__$1;
(statearr_31462_31493[(2)] = null);

(statearr_31462_31493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (6))){
var inst_31418 = (state_31453[(7)]);
var inst_31439 = (inst_31418 > (0));
var state_31453__$1 = state_31453;
if(cljs.core.truth_(inst_31439)){
var statearr_31463_31494 = state_31453__$1;
(statearr_31463_31494[(1)] = (12));

} else {
var statearr_31464_31495 = state_31453__$1;
(statearr_31464_31495[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (3))){
var inst_31451 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31453__$1,inst_31451);
} else {
if((state_val_31454 === (12))){
var inst_31417 = (state_31453[(8)]);
var inst_31441 = cljs.core.vec.call(null,inst_31417);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31453__$1,(15),out,inst_31441);
} else {
if((state_val_31454 === (2))){
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31453__$1,(4),ch);
} else {
if((state_val_31454 === (11))){
var inst_31433 = (state_31453[(2)]);
var inst_31434 = (new Array(n));
var inst_31417 = inst_31434;
var inst_31418 = (0);
var state_31453__$1 = (function (){var statearr_31465 = state_31453;
(statearr_31465[(7)] = inst_31418);

(statearr_31465[(10)] = inst_31433);

(statearr_31465[(8)] = inst_31417);

return statearr_31465;
})();
var statearr_31466_31496 = state_31453__$1;
(statearr_31466_31496[(2)] = null);

(statearr_31466_31496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (9))){
var inst_31417 = (state_31453[(8)]);
var inst_31431 = cljs.core.vec.call(null,inst_31417);
var state_31453__$1 = state_31453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31453__$1,(11),out,inst_31431);
} else {
if((state_val_31454 === (5))){
var inst_31418 = (state_31453[(7)]);
var inst_31417 = (state_31453[(8)]);
var inst_31421 = (state_31453[(9)]);
var inst_31426 = (state_31453[(11)]);
var inst_31425 = (inst_31417[inst_31418] = inst_31421);
var inst_31426__$1 = (inst_31418 + (1));
var inst_31427 = (inst_31426__$1 < n);
var state_31453__$1 = (function (){var statearr_31467 = state_31453;
(statearr_31467[(12)] = inst_31425);

(statearr_31467[(11)] = inst_31426__$1);

return statearr_31467;
})();
if(cljs.core.truth_(inst_31427)){
var statearr_31468_31497 = state_31453__$1;
(statearr_31468_31497[(1)] = (8));

} else {
var statearr_31469_31498 = state_31453__$1;
(statearr_31469_31498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (14))){
var inst_31446 = (state_31453[(2)]);
var inst_31447 = cljs.core.async.close_BANG_.call(null,out);
var state_31453__$1 = (function (){var statearr_31471 = state_31453;
(statearr_31471[(13)] = inst_31446);

return statearr_31471;
})();
var statearr_31472_31499 = state_31453__$1;
(statearr_31472_31499[(2)] = inst_31447);

(statearr_31472_31499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (10))){
var inst_31437 = (state_31453[(2)]);
var state_31453__$1 = state_31453;
var statearr_31473_31500 = state_31453__$1;
(statearr_31473_31500[(2)] = inst_31437);

(statearr_31473_31500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31454 === (8))){
var inst_31417 = (state_31453[(8)]);
var inst_31426 = (state_31453[(11)]);
var tmp31470 = inst_31417;
var inst_31417__$1 = tmp31470;
var inst_31418 = inst_31426;
var state_31453__$1 = (function (){var statearr_31474 = state_31453;
(statearr_31474[(7)] = inst_31418);

(statearr_31474[(8)] = inst_31417__$1);

return statearr_31474;
})();
var statearr_31475_31501 = state_31453__$1;
(statearr_31475_31501[(2)] = null);

(statearr_31475_31501[(1)] = (2));


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
});})(c__28805__auto___31487,out))
;
return ((function (switch__28693__auto__,c__28805__auto___31487,out){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_31479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31479[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_31479[(1)] = (1));

return statearr_31479;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_31453){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_31453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e31480){if((e31480 instanceof Object)){
var ex__28697__auto__ = e31480;
var statearr_31481_31502 = state_31453;
(statearr_31481_31502[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31503 = state_31453;
state_31453 = G__31503;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_31453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_31453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___31487,out))
})();
var state__28807__auto__ = (function (){var statearr_31482 = f__28806__auto__.call(null);
(statearr_31482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___31487);

return statearr_31482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___31487,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31504 = [];
var len__25923__auto___31578 = arguments.length;
var i__25924__auto___31579 = (0);
while(true){
if((i__25924__auto___31579 < len__25923__auto___31578)){
args31504.push((arguments[i__25924__auto___31579]));

var G__31580 = (i__25924__auto___31579 + (1));
i__25924__auto___31579 = G__31580;
continue;
} else {
}
break;
}

var G__31506 = args31504.length;
switch (G__31506) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31504.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28805__auto___31582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___31582,out){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___31582,out){
return (function (state_31548){
var state_val_31549 = (state_31548[(1)]);
if((state_val_31549 === (7))){
var inst_31544 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31550_31583 = state_31548__$1;
(statearr_31550_31583[(2)] = inst_31544);

(statearr_31550_31583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (1))){
var inst_31507 = [];
var inst_31508 = inst_31507;
var inst_31509 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31548__$1 = (function (){var statearr_31551 = state_31548;
(statearr_31551[(7)] = inst_31508);

(statearr_31551[(8)] = inst_31509);

return statearr_31551;
})();
var statearr_31552_31584 = state_31548__$1;
(statearr_31552_31584[(2)] = null);

(statearr_31552_31584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (4))){
var inst_31512 = (state_31548[(9)]);
var inst_31512__$1 = (state_31548[(2)]);
var inst_31513 = (inst_31512__$1 == null);
var inst_31514 = cljs.core.not.call(null,inst_31513);
var state_31548__$1 = (function (){var statearr_31553 = state_31548;
(statearr_31553[(9)] = inst_31512__$1);

return statearr_31553;
})();
if(inst_31514){
var statearr_31554_31585 = state_31548__$1;
(statearr_31554_31585[(1)] = (5));

} else {
var statearr_31555_31586 = state_31548__$1;
(statearr_31555_31586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (15))){
var inst_31538 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31556_31587 = state_31548__$1;
(statearr_31556_31587[(2)] = inst_31538);

(statearr_31556_31587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (13))){
var state_31548__$1 = state_31548;
var statearr_31557_31588 = state_31548__$1;
(statearr_31557_31588[(2)] = null);

(statearr_31557_31588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (6))){
var inst_31508 = (state_31548[(7)]);
var inst_31533 = inst_31508.length;
var inst_31534 = (inst_31533 > (0));
var state_31548__$1 = state_31548;
if(cljs.core.truth_(inst_31534)){
var statearr_31558_31589 = state_31548__$1;
(statearr_31558_31589[(1)] = (12));

} else {
var statearr_31559_31590 = state_31548__$1;
(statearr_31559_31590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (3))){
var inst_31546 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31548__$1,inst_31546);
} else {
if((state_val_31549 === (12))){
var inst_31508 = (state_31548[(7)]);
var inst_31536 = cljs.core.vec.call(null,inst_31508);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31548__$1,(15),out,inst_31536);
} else {
if((state_val_31549 === (2))){
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31548__$1,(4),ch);
} else {
if((state_val_31549 === (11))){
var inst_31516 = (state_31548[(10)]);
var inst_31512 = (state_31548[(9)]);
var inst_31526 = (state_31548[(2)]);
var inst_31527 = [];
var inst_31528 = inst_31527.push(inst_31512);
var inst_31508 = inst_31527;
var inst_31509 = inst_31516;
var state_31548__$1 = (function (){var statearr_31560 = state_31548;
(statearr_31560[(11)] = inst_31528);

(statearr_31560[(7)] = inst_31508);

(statearr_31560[(12)] = inst_31526);

(statearr_31560[(8)] = inst_31509);

return statearr_31560;
})();
var statearr_31561_31591 = state_31548__$1;
(statearr_31561_31591[(2)] = null);

(statearr_31561_31591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (9))){
var inst_31508 = (state_31548[(7)]);
var inst_31524 = cljs.core.vec.call(null,inst_31508);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31548__$1,(11),out,inst_31524);
} else {
if((state_val_31549 === (5))){
var inst_31516 = (state_31548[(10)]);
var inst_31512 = (state_31548[(9)]);
var inst_31509 = (state_31548[(8)]);
var inst_31516__$1 = f.call(null,inst_31512);
var inst_31517 = cljs.core._EQ_.call(null,inst_31516__$1,inst_31509);
var inst_31518 = cljs.core.keyword_identical_QMARK_.call(null,inst_31509,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31519 = (inst_31517) || (inst_31518);
var state_31548__$1 = (function (){var statearr_31562 = state_31548;
(statearr_31562[(10)] = inst_31516__$1);

return statearr_31562;
})();
if(cljs.core.truth_(inst_31519)){
var statearr_31563_31592 = state_31548__$1;
(statearr_31563_31592[(1)] = (8));

} else {
var statearr_31564_31593 = state_31548__$1;
(statearr_31564_31593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (14))){
var inst_31541 = (state_31548[(2)]);
var inst_31542 = cljs.core.async.close_BANG_.call(null,out);
var state_31548__$1 = (function (){var statearr_31566 = state_31548;
(statearr_31566[(13)] = inst_31541);

return statearr_31566;
})();
var statearr_31567_31594 = state_31548__$1;
(statearr_31567_31594[(2)] = inst_31542);

(statearr_31567_31594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (10))){
var inst_31531 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31568_31595 = state_31548__$1;
(statearr_31568_31595[(2)] = inst_31531);

(statearr_31568_31595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (8))){
var inst_31516 = (state_31548[(10)]);
var inst_31508 = (state_31548[(7)]);
var inst_31512 = (state_31548[(9)]);
var inst_31521 = inst_31508.push(inst_31512);
var tmp31565 = inst_31508;
var inst_31508__$1 = tmp31565;
var inst_31509 = inst_31516;
var state_31548__$1 = (function (){var statearr_31569 = state_31548;
(statearr_31569[(7)] = inst_31508__$1);

(statearr_31569[(14)] = inst_31521);

(statearr_31569[(8)] = inst_31509);

return statearr_31569;
})();
var statearr_31570_31596 = state_31548__$1;
(statearr_31570_31596[(2)] = null);

(statearr_31570_31596[(1)] = (2));


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
});})(c__28805__auto___31582,out))
;
return ((function (switch__28693__auto__,c__28805__auto___31582,out){
return (function() {
var cljs$core$async$state_machine__28694__auto__ = null;
var cljs$core$async$state_machine__28694__auto____0 = (function (){
var statearr_31574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31574[(0)] = cljs$core$async$state_machine__28694__auto__);

(statearr_31574[(1)] = (1));

return statearr_31574;
});
var cljs$core$async$state_machine__28694__auto____1 = (function (state_31548){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_31548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e31575){if((e31575 instanceof Object)){
var ex__28697__auto__ = e31575;
var statearr_31576_31597 = state_31548;
(statearr_31576_31597[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31598 = state_31548;
state_31548 = G__31598;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
cljs$core$async$state_machine__28694__auto__ = function(state_31548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28694__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28694__auto____1.call(this,state_31548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28694__auto____0;
cljs$core$async$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28694__auto____1;
return cljs$core$async$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___31582,out))
})();
var state__28807__auto__ = (function (){var statearr_31577 = f__28806__auto__.call(null);
(statearr_31577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___31582);

return statearr_31577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___31582,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1533225031261