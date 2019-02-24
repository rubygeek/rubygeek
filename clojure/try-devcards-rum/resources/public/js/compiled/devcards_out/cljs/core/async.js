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
var args28889 = [];
var len__25923__auto___28895 = arguments.length;
var i__25924__auto___28896 = (0);
while(true){
if((i__25924__auto___28896 < len__25923__auto___28895)){
args28889.push((arguments[i__25924__auto___28896]));

var G__28897 = (i__25924__auto___28896 + (1));
i__25924__auto___28896 = G__28897;
continue;
} else {
}
break;
}

var G__28891 = args28889.length;
switch (G__28891) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28889.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28892 = (function (f,blockable,meta28893){
this.f = f;
this.blockable = blockable;
this.meta28893 = meta28893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28894,meta28893__$1){
var self__ = this;
var _28894__$1 = this;
return (new cljs.core.async.t_cljs$core$async28892(self__.f,self__.blockable,meta28893__$1));
});

cljs.core.async.t_cljs$core$async28892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28894){
var self__ = this;
var _28894__$1 = this;
return self__.meta28893;
});

cljs.core.async.t_cljs$core$async28892.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28892.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28893","meta28893",-90155172,null)], null);
});

cljs.core.async.t_cljs$core$async28892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28892";

cljs.core.async.t_cljs$core$async28892.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28892");
});

cljs.core.async.__GT_t_cljs$core$async28892 = (function cljs$core$async$__GT_t_cljs$core$async28892(f__$1,blockable__$1,meta28893){
return (new cljs.core.async.t_cljs$core$async28892(f__$1,blockable__$1,meta28893));
});

}

return (new cljs.core.async.t_cljs$core$async28892(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args28901 = [];
var len__25923__auto___28904 = arguments.length;
var i__25924__auto___28905 = (0);
while(true){
if((i__25924__auto___28905 < len__25923__auto___28904)){
args28901.push((arguments[i__25924__auto___28905]));

var G__28906 = (i__25924__auto___28905 + (1));
i__25924__auto___28905 = G__28906;
continue;
} else {
}
break;
}

var G__28903 = args28901.length;
switch (G__28903) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28901.length)].join('')));

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
var args28908 = [];
var len__25923__auto___28911 = arguments.length;
var i__25924__auto___28912 = (0);
while(true){
if((i__25924__auto___28912 < len__25923__auto___28911)){
args28908.push((arguments[i__25924__auto___28912]));

var G__28913 = (i__25924__auto___28912 + (1));
i__25924__auto___28912 = G__28913;
continue;
} else {
}
break;
}

var G__28910 = args28908.length;
switch (G__28910) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28908.length)].join('')));

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
var args28915 = [];
var len__25923__auto___28918 = arguments.length;
var i__25924__auto___28919 = (0);
while(true){
if((i__25924__auto___28919 < len__25923__auto___28918)){
args28915.push((arguments[i__25924__auto___28919]));

var G__28920 = (i__25924__auto___28919 + (1));
i__25924__auto___28919 = G__28920;
continue;
} else {
}
break;
}

var G__28917 = args28915.length;
switch (G__28917) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28915.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28922 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28922);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28922,ret){
return (function (){
return fn1.call(null,val_28922);
});})(val_28922,ret))
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
var args28923 = [];
var len__25923__auto___28926 = arguments.length;
var i__25924__auto___28927 = (0);
while(true){
if((i__25924__auto___28927 < len__25923__auto___28926)){
args28923.push((arguments[i__25924__auto___28927]));

var G__28928 = (i__25924__auto___28927 + (1));
i__25924__auto___28927 = G__28928;
continue;
} else {
}
break;
}

var G__28925 = args28923.length;
switch (G__28925) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28923.length)].join('')));

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
var n__25763__auto___28930 = n;
var x_28931 = (0);
while(true){
if((x_28931 < n__25763__auto___28930)){
(a[x_28931] = (0));

var G__28932 = (x_28931 + (1));
x_28931 = G__28932;
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

var G__28933 = (i + (1));
i = G__28933;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28937 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28937 = (function (alt_flag,flag,meta28938){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28938 = meta28938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28939,meta28938__$1){
var self__ = this;
var _28939__$1 = this;
return (new cljs.core.async.t_cljs$core$async28937(self__.alt_flag,self__.flag,meta28938__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28939){
var self__ = this;
var _28939__$1 = this;
return self__.meta28938;
});})(flag))
;

cljs.core.async.t_cljs$core$async28937.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28937.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28937.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28938","meta28938",952831845,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28937";

cljs.core.async.t_cljs$core$async28937.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28937");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28937 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28937(alt_flag__$1,flag__$1,meta28938){
return (new cljs.core.async.t_cljs$core$async28937(alt_flag__$1,flag__$1,meta28938));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28937(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28943 = (function (alt_handler,flag,cb,meta28944){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28944 = meta28944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28945,meta28944__$1){
var self__ = this;
var _28945__$1 = this;
return (new cljs.core.async.t_cljs$core$async28943(self__.alt_handler,self__.flag,self__.cb,meta28944__$1));
});

cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28945){
var self__ = this;
var _28945__$1 = this;
return self__.meta28944;
});

cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28944","meta28944",1751288134,null)], null);
});

cljs.core.async.t_cljs$core$async28943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28943";

cljs.core.async.t_cljs$core$async28943.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async28943");
});

cljs.core.async.__GT_t_cljs$core$async28943 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28943(alt_handler__$1,flag__$1,cb__$1,meta28944){
return (new cljs.core.async.t_cljs$core$async28943(alt_handler__$1,flag__$1,cb__$1,meta28944));
});

}

return (new cljs.core.async.t_cljs$core$async28943(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28946_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28946_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28947_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28947_SHARP_,port], null));
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
var G__28948 = (i + (1));
i = G__28948;
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
var len__25923__auto___28954 = arguments.length;
var i__25924__auto___28955 = (0);
while(true){
if((i__25924__auto___28955 < len__25923__auto___28954)){
args__25930__auto__.push((arguments[i__25924__auto___28955]));

var G__28956 = (i__25924__auto___28955 + (1));
i__25924__auto___28955 = G__28956;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((1) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25931__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28951){
var map__28952 = p__28951;
var map__28952__$1 = ((((!((map__28952 == null)))?((((map__28952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28952):map__28952);
var opts = map__28952__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28949){
var G__28950 = cljs.core.first.call(null,seq28949);
var seq28949__$1 = cljs.core.next.call(null,seq28949);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28950,seq28949__$1);
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
var args28957 = [];
var len__25923__auto___29007 = arguments.length;
var i__25924__auto___29008 = (0);
while(true){
if((i__25924__auto___29008 < len__25923__auto___29007)){
args28957.push((arguments[i__25924__auto___29008]));

var G__29009 = (i__25924__auto___29008 + (1));
i__25924__auto___29008 = G__29009;
continue;
} else {
}
break;
}

var G__28959 = args28957.length;
switch (G__28959) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28957.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28844__auto___29011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___29011){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___29011){
return (function (state_28983){
var state_val_28984 = (state_28983[(1)]);
if((state_val_28984 === (7))){
var inst_28979 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28985_29012 = state_28983__$1;
(statearr_28985_29012[(2)] = inst_28979);

(statearr_28985_29012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (1))){
var state_28983__$1 = state_28983;
var statearr_28986_29013 = state_28983__$1;
(statearr_28986_29013[(2)] = null);

(statearr_28986_29013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (4))){
var inst_28962 = (state_28983[(7)]);
var inst_28962__$1 = (state_28983[(2)]);
var inst_28963 = (inst_28962__$1 == null);
var state_28983__$1 = (function (){var statearr_28987 = state_28983;
(statearr_28987[(7)] = inst_28962__$1);

return statearr_28987;
})();
if(cljs.core.truth_(inst_28963)){
var statearr_28988_29014 = state_28983__$1;
(statearr_28988_29014[(1)] = (5));

} else {
var statearr_28989_29015 = state_28983__$1;
(statearr_28989_29015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (13))){
var state_28983__$1 = state_28983;
var statearr_28990_29016 = state_28983__$1;
(statearr_28990_29016[(2)] = null);

(statearr_28990_29016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (6))){
var inst_28962 = (state_28983[(7)]);
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28983__$1,(11),to,inst_28962);
} else {
if((state_val_28984 === (3))){
var inst_28981 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28983__$1,inst_28981);
} else {
if((state_val_28984 === (12))){
var state_28983__$1 = state_28983;
var statearr_28991_29017 = state_28983__$1;
(statearr_28991_29017[(2)] = null);

(statearr_28991_29017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (2))){
var state_28983__$1 = state_28983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28983__$1,(4),from);
} else {
if((state_val_28984 === (11))){
var inst_28972 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
if(cljs.core.truth_(inst_28972)){
var statearr_28992_29018 = state_28983__$1;
(statearr_28992_29018[(1)] = (12));

} else {
var statearr_28993_29019 = state_28983__$1;
(statearr_28993_29019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (9))){
var state_28983__$1 = state_28983;
var statearr_28994_29020 = state_28983__$1;
(statearr_28994_29020[(2)] = null);

(statearr_28994_29020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (5))){
var state_28983__$1 = state_28983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28995_29021 = state_28983__$1;
(statearr_28995_29021[(1)] = (8));

} else {
var statearr_28996_29022 = state_28983__$1;
(statearr_28996_29022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (14))){
var inst_28977 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28997_29023 = state_28983__$1;
(statearr_28997_29023[(2)] = inst_28977);

(statearr_28997_29023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (10))){
var inst_28969 = (state_28983[(2)]);
var state_28983__$1 = state_28983;
var statearr_28998_29024 = state_28983__$1;
(statearr_28998_29024[(2)] = inst_28969);

(statearr_28998_29024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28984 === (8))){
var inst_28966 = cljs.core.async.close_BANG_.call(null,to);
var state_28983__$1 = state_28983;
var statearr_28999_29025 = state_28983__$1;
(statearr_28999_29025[(2)] = inst_28966);

(statearr_28999_29025[(1)] = (10));


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
});})(c__28844__auto___29011))
;
return ((function (switch__28732__auto__,c__28844__auto___29011){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_29003 = [null,null,null,null,null,null,null,null];
(statearr_29003[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_29003[(1)] = (1));

return statearr_29003;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_28983){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_28983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e29004){if((e29004 instanceof Object)){
var ex__28736__auto__ = e29004;
var statearr_29005_29026 = state_28983;
(statearr_29005_29026[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29027 = state_28983;
state_28983 = G__29027;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_28983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_28983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___29011))
})();
var state__28846__auto__ = (function (){var statearr_29006 = f__28845__auto__.call(null);
(statearr_29006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___29011);

return statearr_29006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___29011))
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
return (function (p__29215){
var vec__29216 = p__29215;
var v = cljs.core.nth.call(null,vec__29216,(0),null);
var p = cljs.core.nth.call(null,vec__29216,(1),null);
var job = vec__29216;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28844__auto___29402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___29402,res,vec__29216,v,p,job,jobs,results){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___29402,res,vec__29216,v,p,job,jobs,results){
return (function (state_29223){
var state_val_29224 = (state_29223[(1)]);
if((state_val_29224 === (1))){
var state_29223__$1 = state_29223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29223__$1,(2),res,v);
} else {
if((state_val_29224 === (2))){
var inst_29220 = (state_29223[(2)]);
var inst_29221 = cljs.core.async.close_BANG_.call(null,res);
var state_29223__$1 = (function (){var statearr_29225 = state_29223;
(statearr_29225[(7)] = inst_29220);

return statearr_29225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29223__$1,inst_29221);
} else {
return null;
}
}
});})(c__28844__auto___29402,res,vec__29216,v,p,job,jobs,results))
;
return ((function (switch__28732__auto__,c__28844__auto___29402,res,vec__29216,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0 = (function (){
var statearr_29229 = [null,null,null,null,null,null,null,null];
(statearr_29229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__);

(statearr_29229[(1)] = (1));

return statearr_29229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1 = (function (state_29223){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_29223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e29230){if((e29230 instanceof Object)){
var ex__28736__auto__ = e29230;
var statearr_29231_29403 = state_29223;
(statearr_29231_29403[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29404 = state_29223;
state_29223 = G__29404;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = function(state_29223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1.call(this,state_29223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___29402,res,vec__29216,v,p,job,jobs,results))
})();
var state__28846__auto__ = (function (){var statearr_29232 = f__28845__auto__.call(null);
(statearr_29232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___29402);

return statearr_29232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___29402,res,vec__29216,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29233){
var vec__29234 = p__29233;
var v = cljs.core.nth.call(null,vec__29234,(0),null);
var p = cljs.core.nth.call(null,vec__29234,(1),null);
var job = vec__29234;
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
var n__25763__auto___29405 = n;
var __29406 = (0);
while(true){
if((__29406 < n__25763__auto___29405)){
var G__29237_29407 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29237_29407) {
case "compute":
var c__28844__auto___29409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29406,c__28844__auto___29409,G__29237_29407,n__25763__auto___29405,jobs,results,process,async){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (__29406,c__28844__auto___29409,G__29237_29407,n__25763__auto___29405,jobs,results,process,async){
return (function (state_29250){
var state_val_29251 = (state_29250[(1)]);
if((state_val_29251 === (1))){
var state_29250__$1 = state_29250;
var statearr_29252_29410 = state_29250__$1;
(statearr_29252_29410[(2)] = null);

(statearr_29252_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (2))){
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29250__$1,(4),jobs);
} else {
if((state_val_29251 === (3))){
var inst_29248 = (state_29250[(2)]);
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29250__$1,inst_29248);
} else {
if((state_val_29251 === (4))){
var inst_29240 = (state_29250[(2)]);
var inst_29241 = process.call(null,inst_29240);
var state_29250__$1 = state_29250;
if(cljs.core.truth_(inst_29241)){
var statearr_29253_29411 = state_29250__$1;
(statearr_29253_29411[(1)] = (5));

} else {
var statearr_29254_29412 = state_29250__$1;
(statearr_29254_29412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (5))){
var state_29250__$1 = state_29250;
var statearr_29255_29413 = state_29250__$1;
(statearr_29255_29413[(2)] = null);

(statearr_29255_29413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (6))){
var state_29250__$1 = state_29250;
var statearr_29256_29414 = state_29250__$1;
(statearr_29256_29414[(2)] = null);

(statearr_29256_29414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (7))){
var inst_29246 = (state_29250[(2)]);
var state_29250__$1 = state_29250;
var statearr_29257_29415 = state_29250__$1;
(statearr_29257_29415[(2)] = inst_29246);

(statearr_29257_29415[(1)] = (3));


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
});})(__29406,c__28844__auto___29409,G__29237_29407,n__25763__auto___29405,jobs,results,process,async))
;
return ((function (__29406,switch__28732__auto__,c__28844__auto___29409,G__29237_29407,n__25763__auto___29405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0 = (function (){
var statearr_29261 = [null,null,null,null,null,null,null];
(statearr_29261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__);

(statearr_29261[(1)] = (1));

return statearr_29261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1 = (function (state_29250){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_29250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e29262){if((e29262 instanceof Object)){
var ex__28736__auto__ = e29262;
var statearr_29263_29416 = state_29250;
(statearr_29263_29416[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29417 = state_29250;
state_29250 = G__29417;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = function(state_29250){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1.call(this,state_29250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__;
})()
;})(__29406,switch__28732__auto__,c__28844__auto___29409,G__29237_29407,n__25763__auto___29405,jobs,results,process,async))
})();
var state__28846__auto__ = (function (){var statearr_29264 = f__28845__auto__.call(null);
(statearr_29264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___29409);

return statearr_29264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(__29406,c__28844__auto___29409,G__29237_29407,n__25763__auto___29405,jobs,results,process,async))
);


break;
case "async":
var c__28844__auto___29418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29406,c__28844__auto___29418,G__29237_29407,n__25763__auto___29405,jobs,results,process,async){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (__29406,c__28844__auto___29418,G__29237_29407,n__25763__auto___29405,jobs,results,process,async){
return (function (state_29277){
var state_val_29278 = (state_29277[(1)]);
if((state_val_29278 === (1))){
var state_29277__$1 = state_29277;
var statearr_29279_29419 = state_29277__$1;
(statearr_29279_29419[(2)] = null);

(statearr_29279_29419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29278 === (2))){
var state_29277__$1 = state_29277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29277__$1,(4),jobs);
} else {
if((state_val_29278 === (3))){
var inst_29275 = (state_29277[(2)]);
var state_29277__$1 = state_29277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29277__$1,inst_29275);
} else {
if((state_val_29278 === (4))){
var inst_29267 = (state_29277[(2)]);
var inst_29268 = async.call(null,inst_29267);
var state_29277__$1 = state_29277;
if(cljs.core.truth_(inst_29268)){
var statearr_29280_29420 = state_29277__$1;
(statearr_29280_29420[(1)] = (5));

} else {
var statearr_29281_29421 = state_29277__$1;
(statearr_29281_29421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29278 === (5))){
var state_29277__$1 = state_29277;
var statearr_29282_29422 = state_29277__$1;
(statearr_29282_29422[(2)] = null);

(statearr_29282_29422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29278 === (6))){
var state_29277__$1 = state_29277;
var statearr_29283_29423 = state_29277__$1;
(statearr_29283_29423[(2)] = null);

(statearr_29283_29423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29278 === (7))){
var inst_29273 = (state_29277[(2)]);
var state_29277__$1 = state_29277;
var statearr_29284_29424 = state_29277__$1;
(statearr_29284_29424[(2)] = inst_29273);

(statearr_29284_29424[(1)] = (3));


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
});})(__29406,c__28844__auto___29418,G__29237_29407,n__25763__auto___29405,jobs,results,process,async))
;
return ((function (__29406,switch__28732__auto__,c__28844__auto___29418,G__29237_29407,n__25763__auto___29405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0 = (function (){
var statearr_29288 = [null,null,null,null,null,null,null];
(statearr_29288[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__);

(statearr_29288[(1)] = (1));

return statearr_29288;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1 = (function (state_29277){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_29277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e29289){if((e29289 instanceof Object)){
var ex__28736__auto__ = e29289;
var statearr_29290_29425 = state_29277;
(statearr_29290_29425[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29426 = state_29277;
state_29277 = G__29426;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = function(state_29277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1.call(this,state_29277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__;
})()
;})(__29406,switch__28732__auto__,c__28844__auto___29418,G__29237_29407,n__25763__auto___29405,jobs,results,process,async))
})();
var state__28846__auto__ = (function (){var statearr_29291 = f__28845__auto__.call(null);
(statearr_29291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___29418);

return statearr_29291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(__29406,c__28844__auto___29418,G__29237_29407,n__25763__auto___29405,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29427 = (__29406 + (1));
__29406 = G__29427;
continue;
} else {
}
break;
}

var c__28844__auto___29428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___29428,jobs,results,process,async){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___29428,jobs,results,process,async){
return (function (state_29313){
var state_val_29314 = (state_29313[(1)]);
if((state_val_29314 === (1))){
var state_29313__$1 = state_29313;
var statearr_29315_29429 = state_29313__$1;
(statearr_29315_29429[(2)] = null);

(statearr_29315_29429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (2))){
var state_29313__$1 = state_29313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29313__$1,(4),from);
} else {
if((state_val_29314 === (3))){
var inst_29311 = (state_29313[(2)]);
var state_29313__$1 = state_29313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29313__$1,inst_29311);
} else {
if((state_val_29314 === (4))){
var inst_29294 = (state_29313[(7)]);
var inst_29294__$1 = (state_29313[(2)]);
var inst_29295 = (inst_29294__$1 == null);
var state_29313__$1 = (function (){var statearr_29316 = state_29313;
(statearr_29316[(7)] = inst_29294__$1);

return statearr_29316;
})();
if(cljs.core.truth_(inst_29295)){
var statearr_29317_29430 = state_29313__$1;
(statearr_29317_29430[(1)] = (5));

} else {
var statearr_29318_29431 = state_29313__$1;
(statearr_29318_29431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (5))){
var inst_29297 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29313__$1 = state_29313;
var statearr_29319_29432 = state_29313__$1;
(statearr_29319_29432[(2)] = inst_29297);

(statearr_29319_29432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (6))){
var inst_29294 = (state_29313[(7)]);
var inst_29299 = (state_29313[(8)]);
var inst_29299__$1 = cljs.core.async.chan.call(null,(1));
var inst_29300 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29301 = [inst_29294,inst_29299__$1];
var inst_29302 = (new cljs.core.PersistentVector(null,2,(5),inst_29300,inst_29301,null));
var state_29313__$1 = (function (){var statearr_29320 = state_29313;
(statearr_29320[(8)] = inst_29299__$1);

return statearr_29320;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29313__$1,(8),jobs,inst_29302);
} else {
if((state_val_29314 === (7))){
var inst_29309 = (state_29313[(2)]);
var state_29313__$1 = state_29313;
var statearr_29321_29433 = state_29313__$1;
(statearr_29321_29433[(2)] = inst_29309);

(statearr_29321_29433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (8))){
var inst_29299 = (state_29313[(8)]);
var inst_29304 = (state_29313[(2)]);
var state_29313__$1 = (function (){var statearr_29322 = state_29313;
(statearr_29322[(9)] = inst_29304);

return statearr_29322;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29313__$1,(9),results,inst_29299);
} else {
if((state_val_29314 === (9))){
var inst_29306 = (state_29313[(2)]);
var state_29313__$1 = (function (){var statearr_29323 = state_29313;
(statearr_29323[(10)] = inst_29306);

return statearr_29323;
})();
var statearr_29324_29434 = state_29313__$1;
(statearr_29324_29434[(2)] = null);

(statearr_29324_29434[(1)] = (2));


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
});})(c__28844__auto___29428,jobs,results,process,async))
;
return ((function (switch__28732__auto__,c__28844__auto___29428,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0 = (function (){
var statearr_29328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__);

(statearr_29328[(1)] = (1));

return statearr_29328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1 = (function (state_29313){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_29313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e29329){if((e29329 instanceof Object)){
var ex__28736__auto__ = e29329;
var statearr_29330_29435 = state_29313;
(statearr_29330_29435[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29436 = state_29313;
state_29313 = G__29436;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = function(state_29313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1.call(this,state_29313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___29428,jobs,results,process,async))
})();
var state__28846__auto__ = (function (){var statearr_29331 = f__28845__auto__.call(null);
(statearr_29331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___29428);

return statearr_29331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___29428,jobs,results,process,async))
);


var c__28844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto__,jobs,results,process,async){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto__,jobs,results,process,async){
return (function (state_29369){
var state_val_29370 = (state_29369[(1)]);
if((state_val_29370 === (7))){
var inst_29365 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
var statearr_29371_29437 = state_29369__$1;
(statearr_29371_29437[(2)] = inst_29365);

(statearr_29371_29437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (20))){
var state_29369__$1 = state_29369;
var statearr_29372_29438 = state_29369__$1;
(statearr_29372_29438[(2)] = null);

(statearr_29372_29438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (1))){
var state_29369__$1 = state_29369;
var statearr_29373_29439 = state_29369__$1;
(statearr_29373_29439[(2)] = null);

(statearr_29373_29439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (4))){
var inst_29334 = (state_29369[(7)]);
var inst_29334__$1 = (state_29369[(2)]);
var inst_29335 = (inst_29334__$1 == null);
var state_29369__$1 = (function (){var statearr_29374 = state_29369;
(statearr_29374[(7)] = inst_29334__$1);

return statearr_29374;
})();
if(cljs.core.truth_(inst_29335)){
var statearr_29375_29440 = state_29369__$1;
(statearr_29375_29440[(1)] = (5));

} else {
var statearr_29376_29441 = state_29369__$1;
(statearr_29376_29441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (15))){
var inst_29347 = (state_29369[(8)]);
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29369__$1,(18),to,inst_29347);
} else {
if((state_val_29370 === (21))){
var inst_29360 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
var statearr_29377_29442 = state_29369__$1;
(statearr_29377_29442[(2)] = inst_29360);

(statearr_29377_29442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (13))){
var inst_29362 = (state_29369[(2)]);
var state_29369__$1 = (function (){var statearr_29378 = state_29369;
(statearr_29378[(9)] = inst_29362);

return statearr_29378;
})();
var statearr_29379_29443 = state_29369__$1;
(statearr_29379_29443[(2)] = null);

(statearr_29379_29443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (6))){
var inst_29334 = (state_29369[(7)]);
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29369__$1,(11),inst_29334);
} else {
if((state_val_29370 === (17))){
var inst_29355 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
if(cljs.core.truth_(inst_29355)){
var statearr_29380_29444 = state_29369__$1;
(statearr_29380_29444[(1)] = (19));

} else {
var statearr_29381_29445 = state_29369__$1;
(statearr_29381_29445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (3))){
var inst_29367 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29369__$1,inst_29367);
} else {
if((state_val_29370 === (12))){
var inst_29344 = (state_29369[(10)]);
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29369__$1,(14),inst_29344);
} else {
if((state_val_29370 === (2))){
var state_29369__$1 = state_29369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29369__$1,(4),results);
} else {
if((state_val_29370 === (19))){
var state_29369__$1 = state_29369;
var statearr_29382_29446 = state_29369__$1;
(statearr_29382_29446[(2)] = null);

(statearr_29382_29446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (11))){
var inst_29344 = (state_29369[(2)]);
var state_29369__$1 = (function (){var statearr_29383 = state_29369;
(statearr_29383[(10)] = inst_29344);

return statearr_29383;
})();
var statearr_29384_29447 = state_29369__$1;
(statearr_29384_29447[(2)] = null);

(statearr_29384_29447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (9))){
var state_29369__$1 = state_29369;
var statearr_29385_29448 = state_29369__$1;
(statearr_29385_29448[(2)] = null);

(statearr_29385_29448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (5))){
var state_29369__$1 = state_29369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29386_29449 = state_29369__$1;
(statearr_29386_29449[(1)] = (8));

} else {
var statearr_29387_29450 = state_29369__$1;
(statearr_29387_29450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (14))){
var inst_29347 = (state_29369[(8)]);
var inst_29349 = (state_29369[(11)]);
var inst_29347__$1 = (state_29369[(2)]);
var inst_29348 = (inst_29347__$1 == null);
var inst_29349__$1 = cljs.core.not.call(null,inst_29348);
var state_29369__$1 = (function (){var statearr_29388 = state_29369;
(statearr_29388[(8)] = inst_29347__$1);

(statearr_29388[(11)] = inst_29349__$1);

return statearr_29388;
})();
if(inst_29349__$1){
var statearr_29389_29451 = state_29369__$1;
(statearr_29389_29451[(1)] = (15));

} else {
var statearr_29390_29452 = state_29369__$1;
(statearr_29390_29452[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (16))){
var inst_29349 = (state_29369[(11)]);
var state_29369__$1 = state_29369;
var statearr_29391_29453 = state_29369__$1;
(statearr_29391_29453[(2)] = inst_29349);

(statearr_29391_29453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (10))){
var inst_29341 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
var statearr_29392_29454 = state_29369__$1;
(statearr_29392_29454[(2)] = inst_29341);

(statearr_29392_29454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (18))){
var inst_29352 = (state_29369[(2)]);
var state_29369__$1 = state_29369;
var statearr_29393_29455 = state_29369__$1;
(statearr_29393_29455[(2)] = inst_29352);

(statearr_29393_29455[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29370 === (8))){
var inst_29338 = cljs.core.async.close_BANG_.call(null,to);
var state_29369__$1 = state_29369;
var statearr_29394_29456 = state_29369__$1;
(statearr_29394_29456[(2)] = inst_29338);

(statearr_29394_29456[(1)] = (10));


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
});})(c__28844__auto__,jobs,results,process,async))
;
return ((function (switch__28732__auto__,c__28844__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0 = (function (){
var statearr_29398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__);

(statearr_29398[(1)] = (1));

return statearr_29398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1 = (function (state_29369){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_29369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e29399){if((e29399 instanceof Object)){
var ex__28736__auto__ = e29399;
var statearr_29400_29457 = state_29369;
(statearr_29400_29457[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29458 = state_29369;
state_29369 = G__29458;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__ = function(state_29369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1.call(this,state_29369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto__,jobs,results,process,async))
})();
var state__28846__auto__ = (function (){var statearr_29401 = f__28845__auto__.call(null);
(statearr_29401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto__);

return statearr_29401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto__,jobs,results,process,async))
);

return c__28844__auto__;
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
var args29459 = [];
var len__25923__auto___29462 = arguments.length;
var i__25924__auto___29463 = (0);
while(true){
if((i__25924__auto___29463 < len__25923__auto___29462)){
args29459.push((arguments[i__25924__auto___29463]));

var G__29464 = (i__25924__auto___29463 + (1));
i__25924__auto___29463 = G__29464;
continue;
} else {
}
break;
}

var G__29461 = args29459.length;
switch (G__29461) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29459.length)].join('')));

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
var args29466 = [];
var len__25923__auto___29469 = arguments.length;
var i__25924__auto___29470 = (0);
while(true){
if((i__25924__auto___29470 < len__25923__auto___29469)){
args29466.push((arguments[i__25924__auto___29470]));

var G__29471 = (i__25924__auto___29470 + (1));
i__25924__auto___29470 = G__29471;
continue;
} else {
}
break;
}

var G__29468 = args29466.length;
switch (G__29468) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29466.length)].join('')));

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
var args29473 = [];
var len__25923__auto___29526 = arguments.length;
var i__25924__auto___29527 = (0);
while(true){
if((i__25924__auto___29527 < len__25923__auto___29526)){
args29473.push((arguments[i__25924__auto___29527]));

var G__29528 = (i__25924__auto___29527 + (1));
i__25924__auto___29527 = G__29528;
continue;
} else {
}
break;
}

var G__29475 = args29473.length;
switch (G__29475) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29473.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28844__auto___29530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___29530,tc,fc){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___29530,tc,fc){
return (function (state_29501){
var state_val_29502 = (state_29501[(1)]);
if((state_val_29502 === (7))){
var inst_29497 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29503_29531 = state_29501__$1;
(statearr_29503_29531[(2)] = inst_29497);

(statearr_29503_29531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (1))){
var state_29501__$1 = state_29501;
var statearr_29504_29532 = state_29501__$1;
(statearr_29504_29532[(2)] = null);

(statearr_29504_29532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (4))){
var inst_29478 = (state_29501[(7)]);
var inst_29478__$1 = (state_29501[(2)]);
var inst_29479 = (inst_29478__$1 == null);
var state_29501__$1 = (function (){var statearr_29505 = state_29501;
(statearr_29505[(7)] = inst_29478__$1);

return statearr_29505;
})();
if(cljs.core.truth_(inst_29479)){
var statearr_29506_29533 = state_29501__$1;
(statearr_29506_29533[(1)] = (5));

} else {
var statearr_29507_29534 = state_29501__$1;
(statearr_29507_29534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (13))){
var state_29501__$1 = state_29501;
var statearr_29508_29535 = state_29501__$1;
(statearr_29508_29535[(2)] = null);

(statearr_29508_29535[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (6))){
var inst_29478 = (state_29501[(7)]);
var inst_29484 = p.call(null,inst_29478);
var state_29501__$1 = state_29501;
if(cljs.core.truth_(inst_29484)){
var statearr_29509_29536 = state_29501__$1;
(statearr_29509_29536[(1)] = (9));

} else {
var statearr_29510_29537 = state_29501__$1;
(statearr_29510_29537[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (3))){
var inst_29499 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29501__$1,inst_29499);
} else {
if((state_val_29502 === (12))){
var state_29501__$1 = state_29501;
var statearr_29511_29538 = state_29501__$1;
(statearr_29511_29538[(2)] = null);

(statearr_29511_29538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (2))){
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29501__$1,(4),ch);
} else {
if((state_val_29502 === (11))){
var inst_29478 = (state_29501[(7)]);
var inst_29488 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29501__$1,(8),inst_29488,inst_29478);
} else {
if((state_val_29502 === (9))){
var state_29501__$1 = state_29501;
var statearr_29512_29539 = state_29501__$1;
(statearr_29512_29539[(2)] = tc);

(statearr_29512_29539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (5))){
var inst_29481 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29482 = cljs.core.async.close_BANG_.call(null,fc);
var state_29501__$1 = (function (){var statearr_29513 = state_29501;
(statearr_29513[(8)] = inst_29481);

return statearr_29513;
})();
var statearr_29514_29540 = state_29501__$1;
(statearr_29514_29540[(2)] = inst_29482);

(statearr_29514_29540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (14))){
var inst_29495 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29515_29541 = state_29501__$1;
(statearr_29515_29541[(2)] = inst_29495);

(statearr_29515_29541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (10))){
var state_29501__$1 = state_29501;
var statearr_29516_29542 = state_29501__$1;
(statearr_29516_29542[(2)] = fc);

(statearr_29516_29542[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (8))){
var inst_29490 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
if(cljs.core.truth_(inst_29490)){
var statearr_29517_29543 = state_29501__$1;
(statearr_29517_29543[(1)] = (12));

} else {
var statearr_29518_29544 = state_29501__$1;
(statearr_29518_29544[(1)] = (13));

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
});})(c__28844__auto___29530,tc,fc))
;
return ((function (switch__28732__auto__,c__28844__auto___29530,tc,fc){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_29522 = [null,null,null,null,null,null,null,null,null];
(statearr_29522[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_29522[(1)] = (1));

return statearr_29522;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_29501){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_29501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e29523){if((e29523 instanceof Object)){
var ex__28736__auto__ = e29523;
var statearr_29524_29545 = state_29501;
(statearr_29524_29545[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29546 = state_29501;
state_29501 = G__29546;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_29501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_29501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___29530,tc,fc))
})();
var state__28846__auto__ = (function (){var statearr_29525 = f__28845__auto__.call(null);
(statearr_29525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___29530);

return statearr_29525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___29530,tc,fc))
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
var c__28844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto__){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto__){
return (function (state_29610){
var state_val_29611 = (state_29610[(1)]);
if((state_val_29611 === (7))){
var inst_29606 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29612_29633 = state_29610__$1;
(statearr_29612_29633[(2)] = inst_29606);

(statearr_29612_29633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (1))){
var inst_29590 = init;
var state_29610__$1 = (function (){var statearr_29613 = state_29610;
(statearr_29613[(7)] = inst_29590);

return statearr_29613;
})();
var statearr_29614_29634 = state_29610__$1;
(statearr_29614_29634[(2)] = null);

(statearr_29614_29634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (4))){
var inst_29593 = (state_29610[(8)]);
var inst_29593__$1 = (state_29610[(2)]);
var inst_29594 = (inst_29593__$1 == null);
var state_29610__$1 = (function (){var statearr_29615 = state_29610;
(statearr_29615[(8)] = inst_29593__$1);

return statearr_29615;
})();
if(cljs.core.truth_(inst_29594)){
var statearr_29616_29635 = state_29610__$1;
(statearr_29616_29635[(1)] = (5));

} else {
var statearr_29617_29636 = state_29610__$1;
(statearr_29617_29636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (6))){
var inst_29590 = (state_29610[(7)]);
var inst_29593 = (state_29610[(8)]);
var inst_29597 = (state_29610[(9)]);
var inst_29597__$1 = f.call(null,inst_29590,inst_29593);
var inst_29598 = cljs.core.reduced_QMARK_.call(null,inst_29597__$1);
var state_29610__$1 = (function (){var statearr_29618 = state_29610;
(statearr_29618[(9)] = inst_29597__$1);

return statearr_29618;
})();
if(inst_29598){
var statearr_29619_29637 = state_29610__$1;
(statearr_29619_29637[(1)] = (8));

} else {
var statearr_29620_29638 = state_29610__$1;
(statearr_29620_29638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (3))){
var inst_29608 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29610__$1,inst_29608);
} else {
if((state_val_29611 === (2))){
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29610__$1,(4),ch);
} else {
if((state_val_29611 === (9))){
var inst_29597 = (state_29610[(9)]);
var inst_29590 = inst_29597;
var state_29610__$1 = (function (){var statearr_29621 = state_29610;
(statearr_29621[(7)] = inst_29590);

return statearr_29621;
})();
var statearr_29622_29639 = state_29610__$1;
(statearr_29622_29639[(2)] = null);

(statearr_29622_29639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (5))){
var inst_29590 = (state_29610[(7)]);
var state_29610__$1 = state_29610;
var statearr_29623_29640 = state_29610__$1;
(statearr_29623_29640[(2)] = inst_29590);

(statearr_29623_29640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (10))){
var inst_29604 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29624_29641 = state_29610__$1;
(statearr_29624_29641[(2)] = inst_29604);

(statearr_29624_29641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (8))){
var inst_29597 = (state_29610[(9)]);
var inst_29600 = cljs.core.deref.call(null,inst_29597);
var state_29610__$1 = state_29610;
var statearr_29625_29642 = state_29610__$1;
(statearr_29625_29642[(2)] = inst_29600);

(statearr_29625_29642[(1)] = (10));


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
});})(c__28844__auto__))
;
return ((function (switch__28732__auto__,c__28844__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28733__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28733__auto____0 = (function (){
var statearr_29629 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29629[(0)] = cljs$core$async$reduce_$_state_machine__28733__auto__);

(statearr_29629[(1)] = (1));

return statearr_29629;
});
var cljs$core$async$reduce_$_state_machine__28733__auto____1 = (function (state_29610){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_29610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e29630){if((e29630 instanceof Object)){
var ex__28736__auto__ = e29630;
var statearr_29631_29643 = state_29610;
(statearr_29631_29643[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29644 = state_29610;
state_29610 = G__29644;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28733__auto__ = function(state_29610){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28733__auto____1.call(this,state_29610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28733__auto____0;
cljs$core$async$reduce_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28733__auto____1;
return cljs$core$async$reduce_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto__))
})();
var state__28846__auto__ = (function (){var statearr_29632 = f__28845__auto__.call(null);
(statearr_29632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto__);

return statearr_29632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto__))
);

return c__28844__auto__;
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
var args29645 = [];
var len__25923__auto___29697 = arguments.length;
var i__25924__auto___29698 = (0);
while(true){
if((i__25924__auto___29698 < len__25923__auto___29697)){
args29645.push((arguments[i__25924__auto___29698]));

var G__29699 = (i__25924__auto___29698 + (1));
i__25924__auto___29698 = G__29699;
continue;
} else {
}
break;
}

var G__29647 = args29645.length;
switch (G__29647) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29645.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto__){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto__){
return (function (state_29672){
var state_val_29673 = (state_29672[(1)]);
if((state_val_29673 === (7))){
var inst_29654 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29674_29701 = state_29672__$1;
(statearr_29674_29701[(2)] = inst_29654);

(statearr_29674_29701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (1))){
var inst_29648 = cljs.core.seq.call(null,coll);
var inst_29649 = inst_29648;
var state_29672__$1 = (function (){var statearr_29675 = state_29672;
(statearr_29675[(7)] = inst_29649);

return statearr_29675;
})();
var statearr_29676_29702 = state_29672__$1;
(statearr_29676_29702[(2)] = null);

(statearr_29676_29702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (4))){
var inst_29649 = (state_29672[(7)]);
var inst_29652 = cljs.core.first.call(null,inst_29649);
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29672__$1,(7),ch,inst_29652);
} else {
if((state_val_29673 === (13))){
var inst_29666 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29677_29703 = state_29672__$1;
(statearr_29677_29703[(2)] = inst_29666);

(statearr_29677_29703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (6))){
var inst_29657 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
if(cljs.core.truth_(inst_29657)){
var statearr_29678_29704 = state_29672__$1;
(statearr_29678_29704[(1)] = (8));

} else {
var statearr_29679_29705 = state_29672__$1;
(statearr_29679_29705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (3))){
var inst_29670 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29672__$1,inst_29670);
} else {
if((state_val_29673 === (12))){
var state_29672__$1 = state_29672;
var statearr_29680_29706 = state_29672__$1;
(statearr_29680_29706[(2)] = null);

(statearr_29680_29706[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (2))){
var inst_29649 = (state_29672[(7)]);
var state_29672__$1 = state_29672;
if(cljs.core.truth_(inst_29649)){
var statearr_29681_29707 = state_29672__$1;
(statearr_29681_29707[(1)] = (4));

} else {
var statearr_29682_29708 = state_29672__$1;
(statearr_29682_29708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (11))){
var inst_29663 = cljs.core.async.close_BANG_.call(null,ch);
var state_29672__$1 = state_29672;
var statearr_29683_29709 = state_29672__$1;
(statearr_29683_29709[(2)] = inst_29663);

(statearr_29683_29709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (9))){
var state_29672__$1 = state_29672;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29684_29710 = state_29672__$1;
(statearr_29684_29710[(1)] = (11));

} else {
var statearr_29685_29711 = state_29672__$1;
(statearr_29685_29711[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (5))){
var inst_29649 = (state_29672[(7)]);
var state_29672__$1 = state_29672;
var statearr_29686_29712 = state_29672__$1;
(statearr_29686_29712[(2)] = inst_29649);

(statearr_29686_29712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (10))){
var inst_29668 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29687_29713 = state_29672__$1;
(statearr_29687_29713[(2)] = inst_29668);

(statearr_29687_29713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (8))){
var inst_29649 = (state_29672[(7)]);
var inst_29659 = cljs.core.next.call(null,inst_29649);
var inst_29649__$1 = inst_29659;
var state_29672__$1 = (function (){var statearr_29688 = state_29672;
(statearr_29688[(7)] = inst_29649__$1);

return statearr_29688;
})();
var statearr_29689_29714 = state_29672__$1;
(statearr_29689_29714[(2)] = null);

(statearr_29689_29714[(1)] = (2));


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
});})(c__28844__auto__))
;
return ((function (switch__28732__auto__,c__28844__auto__){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_29693 = [null,null,null,null,null,null,null,null];
(statearr_29693[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_29693[(1)] = (1));

return statearr_29693;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_29672){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_29672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e29694){if((e29694 instanceof Object)){
var ex__28736__auto__ = e29694;
var statearr_29695_29715 = state_29672;
(statearr_29695_29715[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29716 = state_29672;
state_29672 = G__29716;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_29672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_29672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto__))
})();
var state__28846__auto__ = (function (){var statearr_29696 = f__28845__auto__.call(null);
(statearr_29696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto__);

return statearr_29696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto__))
);

return c__28844__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async29942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29942 = (function (mult,ch,cs,meta29943){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29943 = meta29943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29944,meta29943__$1){
var self__ = this;
var _29944__$1 = this;
return (new cljs.core.async.t_cljs$core$async29942(self__.mult,self__.ch,self__.cs,meta29943__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29944){
var self__ = this;
var _29944__$1 = this;
return self__.meta29943;
});})(cs))
;

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29942.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29942.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29943","meta29943",1623627822,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29942";

cljs.core.async.t_cljs$core$async29942.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async29942");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29942 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29942(mult__$1,ch__$1,cs__$1,meta29943){
return (new cljs.core.async.t_cljs$core$async29942(mult__$1,ch__$1,cs__$1,meta29943));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29942(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__28844__auto___30167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___30167,cs,m,dchan,dctr,done){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___30167,cs,m,dchan,dctr,done){
return (function (state_30079){
var state_val_30080 = (state_30079[(1)]);
if((state_val_30080 === (7))){
var inst_30075 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30081_30168 = state_30079__$1;
(statearr_30081_30168[(2)] = inst_30075);

(statearr_30081_30168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (20))){
var inst_29978 = (state_30079[(7)]);
var inst_29990 = cljs.core.first.call(null,inst_29978);
var inst_29991 = cljs.core.nth.call(null,inst_29990,(0),null);
var inst_29992 = cljs.core.nth.call(null,inst_29990,(1),null);
var state_30079__$1 = (function (){var statearr_30082 = state_30079;
(statearr_30082[(8)] = inst_29991);

return statearr_30082;
})();
if(cljs.core.truth_(inst_29992)){
var statearr_30083_30169 = state_30079__$1;
(statearr_30083_30169[(1)] = (22));

} else {
var statearr_30084_30170 = state_30079__$1;
(statearr_30084_30170[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (27))){
var inst_30022 = (state_30079[(9)]);
var inst_29947 = (state_30079[(10)]);
var inst_30020 = (state_30079[(11)]);
var inst_30027 = (state_30079[(12)]);
var inst_30027__$1 = cljs.core._nth.call(null,inst_30020,inst_30022);
var inst_30028 = cljs.core.async.put_BANG_.call(null,inst_30027__$1,inst_29947,done);
var state_30079__$1 = (function (){var statearr_30085 = state_30079;
(statearr_30085[(12)] = inst_30027__$1);

return statearr_30085;
})();
if(cljs.core.truth_(inst_30028)){
var statearr_30086_30171 = state_30079__$1;
(statearr_30086_30171[(1)] = (30));

} else {
var statearr_30087_30172 = state_30079__$1;
(statearr_30087_30172[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (1))){
var state_30079__$1 = state_30079;
var statearr_30088_30173 = state_30079__$1;
(statearr_30088_30173[(2)] = null);

(statearr_30088_30173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (24))){
var inst_29978 = (state_30079[(7)]);
var inst_29997 = (state_30079[(2)]);
var inst_29998 = cljs.core.next.call(null,inst_29978);
var inst_29956 = inst_29998;
var inst_29957 = null;
var inst_29958 = (0);
var inst_29959 = (0);
var state_30079__$1 = (function (){var statearr_30089 = state_30079;
(statearr_30089[(13)] = inst_29956);

(statearr_30089[(14)] = inst_29959);

(statearr_30089[(15)] = inst_29958);

(statearr_30089[(16)] = inst_29997);

(statearr_30089[(17)] = inst_29957);

return statearr_30089;
})();
var statearr_30090_30174 = state_30079__$1;
(statearr_30090_30174[(2)] = null);

(statearr_30090_30174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (39))){
var state_30079__$1 = state_30079;
var statearr_30094_30175 = state_30079__$1;
(statearr_30094_30175[(2)] = null);

(statearr_30094_30175[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (4))){
var inst_29947 = (state_30079[(10)]);
var inst_29947__$1 = (state_30079[(2)]);
var inst_29948 = (inst_29947__$1 == null);
var state_30079__$1 = (function (){var statearr_30095 = state_30079;
(statearr_30095[(10)] = inst_29947__$1);

return statearr_30095;
})();
if(cljs.core.truth_(inst_29948)){
var statearr_30096_30176 = state_30079__$1;
(statearr_30096_30176[(1)] = (5));

} else {
var statearr_30097_30177 = state_30079__$1;
(statearr_30097_30177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (15))){
var inst_29956 = (state_30079[(13)]);
var inst_29959 = (state_30079[(14)]);
var inst_29958 = (state_30079[(15)]);
var inst_29957 = (state_30079[(17)]);
var inst_29974 = (state_30079[(2)]);
var inst_29975 = (inst_29959 + (1));
var tmp30091 = inst_29956;
var tmp30092 = inst_29958;
var tmp30093 = inst_29957;
var inst_29956__$1 = tmp30091;
var inst_29957__$1 = tmp30093;
var inst_29958__$1 = tmp30092;
var inst_29959__$1 = inst_29975;
var state_30079__$1 = (function (){var statearr_30098 = state_30079;
(statearr_30098[(13)] = inst_29956__$1);

(statearr_30098[(14)] = inst_29959__$1);

(statearr_30098[(18)] = inst_29974);

(statearr_30098[(15)] = inst_29958__$1);

(statearr_30098[(17)] = inst_29957__$1);

return statearr_30098;
})();
var statearr_30099_30178 = state_30079__$1;
(statearr_30099_30178[(2)] = null);

(statearr_30099_30178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (21))){
var inst_30001 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30103_30179 = state_30079__$1;
(statearr_30103_30179[(2)] = inst_30001);

(statearr_30103_30179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (31))){
var inst_30027 = (state_30079[(12)]);
var inst_30031 = done.call(null,null);
var inst_30032 = cljs.core.async.untap_STAR_.call(null,m,inst_30027);
var state_30079__$1 = (function (){var statearr_30104 = state_30079;
(statearr_30104[(19)] = inst_30031);

return statearr_30104;
})();
var statearr_30105_30180 = state_30079__$1;
(statearr_30105_30180[(2)] = inst_30032);

(statearr_30105_30180[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (32))){
var inst_30022 = (state_30079[(9)]);
var inst_30021 = (state_30079[(20)]);
var inst_30020 = (state_30079[(11)]);
var inst_30019 = (state_30079[(21)]);
var inst_30034 = (state_30079[(2)]);
var inst_30035 = (inst_30022 + (1));
var tmp30100 = inst_30021;
var tmp30101 = inst_30020;
var tmp30102 = inst_30019;
var inst_30019__$1 = tmp30102;
var inst_30020__$1 = tmp30101;
var inst_30021__$1 = tmp30100;
var inst_30022__$1 = inst_30035;
var state_30079__$1 = (function (){var statearr_30106 = state_30079;
(statearr_30106[(9)] = inst_30022__$1);

(statearr_30106[(20)] = inst_30021__$1);

(statearr_30106[(11)] = inst_30020__$1);

(statearr_30106[(21)] = inst_30019__$1);

(statearr_30106[(22)] = inst_30034);

return statearr_30106;
})();
var statearr_30107_30181 = state_30079__$1;
(statearr_30107_30181[(2)] = null);

(statearr_30107_30181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (40))){
var inst_30047 = (state_30079[(23)]);
var inst_30051 = done.call(null,null);
var inst_30052 = cljs.core.async.untap_STAR_.call(null,m,inst_30047);
var state_30079__$1 = (function (){var statearr_30108 = state_30079;
(statearr_30108[(24)] = inst_30051);

return statearr_30108;
})();
var statearr_30109_30182 = state_30079__$1;
(statearr_30109_30182[(2)] = inst_30052);

(statearr_30109_30182[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (33))){
var inst_30038 = (state_30079[(25)]);
var inst_30040 = cljs.core.chunked_seq_QMARK_.call(null,inst_30038);
var state_30079__$1 = state_30079;
if(inst_30040){
var statearr_30110_30183 = state_30079__$1;
(statearr_30110_30183[(1)] = (36));

} else {
var statearr_30111_30184 = state_30079__$1;
(statearr_30111_30184[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (13))){
var inst_29968 = (state_30079[(26)]);
var inst_29971 = cljs.core.async.close_BANG_.call(null,inst_29968);
var state_30079__$1 = state_30079;
var statearr_30112_30185 = state_30079__$1;
(statearr_30112_30185[(2)] = inst_29971);

(statearr_30112_30185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (22))){
var inst_29991 = (state_30079[(8)]);
var inst_29994 = cljs.core.async.close_BANG_.call(null,inst_29991);
var state_30079__$1 = state_30079;
var statearr_30113_30186 = state_30079__$1;
(statearr_30113_30186[(2)] = inst_29994);

(statearr_30113_30186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (36))){
var inst_30038 = (state_30079[(25)]);
var inst_30042 = cljs.core.chunk_first.call(null,inst_30038);
var inst_30043 = cljs.core.chunk_rest.call(null,inst_30038);
var inst_30044 = cljs.core.count.call(null,inst_30042);
var inst_30019 = inst_30043;
var inst_30020 = inst_30042;
var inst_30021 = inst_30044;
var inst_30022 = (0);
var state_30079__$1 = (function (){var statearr_30114 = state_30079;
(statearr_30114[(9)] = inst_30022);

(statearr_30114[(20)] = inst_30021);

(statearr_30114[(11)] = inst_30020);

(statearr_30114[(21)] = inst_30019);

return statearr_30114;
})();
var statearr_30115_30187 = state_30079__$1;
(statearr_30115_30187[(2)] = null);

(statearr_30115_30187[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (41))){
var inst_30038 = (state_30079[(25)]);
var inst_30054 = (state_30079[(2)]);
var inst_30055 = cljs.core.next.call(null,inst_30038);
var inst_30019 = inst_30055;
var inst_30020 = null;
var inst_30021 = (0);
var inst_30022 = (0);
var state_30079__$1 = (function (){var statearr_30116 = state_30079;
(statearr_30116[(9)] = inst_30022);

(statearr_30116[(20)] = inst_30021);

(statearr_30116[(11)] = inst_30020);

(statearr_30116[(21)] = inst_30019);

(statearr_30116[(27)] = inst_30054);

return statearr_30116;
})();
var statearr_30117_30188 = state_30079__$1;
(statearr_30117_30188[(2)] = null);

(statearr_30117_30188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (43))){
var state_30079__$1 = state_30079;
var statearr_30118_30189 = state_30079__$1;
(statearr_30118_30189[(2)] = null);

(statearr_30118_30189[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (29))){
var inst_30063 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30119_30190 = state_30079__$1;
(statearr_30119_30190[(2)] = inst_30063);

(statearr_30119_30190[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (44))){
var inst_30072 = (state_30079[(2)]);
var state_30079__$1 = (function (){var statearr_30120 = state_30079;
(statearr_30120[(28)] = inst_30072);

return statearr_30120;
})();
var statearr_30121_30191 = state_30079__$1;
(statearr_30121_30191[(2)] = null);

(statearr_30121_30191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (6))){
var inst_30011 = (state_30079[(29)]);
var inst_30010 = cljs.core.deref.call(null,cs);
var inst_30011__$1 = cljs.core.keys.call(null,inst_30010);
var inst_30012 = cljs.core.count.call(null,inst_30011__$1);
var inst_30013 = cljs.core.reset_BANG_.call(null,dctr,inst_30012);
var inst_30018 = cljs.core.seq.call(null,inst_30011__$1);
var inst_30019 = inst_30018;
var inst_30020 = null;
var inst_30021 = (0);
var inst_30022 = (0);
var state_30079__$1 = (function (){var statearr_30122 = state_30079;
(statearr_30122[(29)] = inst_30011__$1);

(statearr_30122[(9)] = inst_30022);

(statearr_30122[(20)] = inst_30021);

(statearr_30122[(11)] = inst_30020);

(statearr_30122[(30)] = inst_30013);

(statearr_30122[(21)] = inst_30019);

return statearr_30122;
})();
var statearr_30123_30192 = state_30079__$1;
(statearr_30123_30192[(2)] = null);

(statearr_30123_30192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (28))){
var inst_30038 = (state_30079[(25)]);
var inst_30019 = (state_30079[(21)]);
var inst_30038__$1 = cljs.core.seq.call(null,inst_30019);
var state_30079__$1 = (function (){var statearr_30124 = state_30079;
(statearr_30124[(25)] = inst_30038__$1);

return statearr_30124;
})();
if(inst_30038__$1){
var statearr_30125_30193 = state_30079__$1;
(statearr_30125_30193[(1)] = (33));

} else {
var statearr_30126_30194 = state_30079__$1;
(statearr_30126_30194[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (25))){
var inst_30022 = (state_30079[(9)]);
var inst_30021 = (state_30079[(20)]);
var inst_30024 = (inst_30022 < inst_30021);
var inst_30025 = inst_30024;
var state_30079__$1 = state_30079;
if(cljs.core.truth_(inst_30025)){
var statearr_30127_30195 = state_30079__$1;
(statearr_30127_30195[(1)] = (27));

} else {
var statearr_30128_30196 = state_30079__$1;
(statearr_30128_30196[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (34))){
var state_30079__$1 = state_30079;
var statearr_30129_30197 = state_30079__$1;
(statearr_30129_30197[(2)] = null);

(statearr_30129_30197[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (17))){
var state_30079__$1 = state_30079;
var statearr_30130_30198 = state_30079__$1;
(statearr_30130_30198[(2)] = null);

(statearr_30130_30198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (3))){
var inst_30077 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30079__$1,inst_30077);
} else {
if((state_val_30080 === (12))){
var inst_30006 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30131_30199 = state_30079__$1;
(statearr_30131_30199[(2)] = inst_30006);

(statearr_30131_30199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (2))){
var state_30079__$1 = state_30079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30079__$1,(4),ch);
} else {
if((state_val_30080 === (23))){
var state_30079__$1 = state_30079;
var statearr_30132_30200 = state_30079__$1;
(statearr_30132_30200[(2)] = null);

(statearr_30132_30200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (35))){
var inst_30061 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30133_30201 = state_30079__$1;
(statearr_30133_30201[(2)] = inst_30061);

(statearr_30133_30201[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (19))){
var inst_29978 = (state_30079[(7)]);
var inst_29982 = cljs.core.chunk_first.call(null,inst_29978);
var inst_29983 = cljs.core.chunk_rest.call(null,inst_29978);
var inst_29984 = cljs.core.count.call(null,inst_29982);
var inst_29956 = inst_29983;
var inst_29957 = inst_29982;
var inst_29958 = inst_29984;
var inst_29959 = (0);
var state_30079__$1 = (function (){var statearr_30134 = state_30079;
(statearr_30134[(13)] = inst_29956);

(statearr_30134[(14)] = inst_29959);

(statearr_30134[(15)] = inst_29958);

(statearr_30134[(17)] = inst_29957);

return statearr_30134;
})();
var statearr_30135_30202 = state_30079__$1;
(statearr_30135_30202[(2)] = null);

(statearr_30135_30202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (11))){
var inst_29956 = (state_30079[(13)]);
var inst_29978 = (state_30079[(7)]);
var inst_29978__$1 = cljs.core.seq.call(null,inst_29956);
var state_30079__$1 = (function (){var statearr_30136 = state_30079;
(statearr_30136[(7)] = inst_29978__$1);

return statearr_30136;
})();
if(inst_29978__$1){
var statearr_30137_30203 = state_30079__$1;
(statearr_30137_30203[(1)] = (16));

} else {
var statearr_30138_30204 = state_30079__$1;
(statearr_30138_30204[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (9))){
var inst_30008 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30139_30205 = state_30079__$1;
(statearr_30139_30205[(2)] = inst_30008);

(statearr_30139_30205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (5))){
var inst_29954 = cljs.core.deref.call(null,cs);
var inst_29955 = cljs.core.seq.call(null,inst_29954);
var inst_29956 = inst_29955;
var inst_29957 = null;
var inst_29958 = (0);
var inst_29959 = (0);
var state_30079__$1 = (function (){var statearr_30140 = state_30079;
(statearr_30140[(13)] = inst_29956);

(statearr_30140[(14)] = inst_29959);

(statearr_30140[(15)] = inst_29958);

(statearr_30140[(17)] = inst_29957);

return statearr_30140;
})();
var statearr_30141_30206 = state_30079__$1;
(statearr_30141_30206[(2)] = null);

(statearr_30141_30206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (14))){
var state_30079__$1 = state_30079;
var statearr_30142_30207 = state_30079__$1;
(statearr_30142_30207[(2)] = null);

(statearr_30142_30207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (45))){
var inst_30069 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30143_30208 = state_30079__$1;
(statearr_30143_30208[(2)] = inst_30069);

(statearr_30143_30208[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (26))){
var inst_30011 = (state_30079[(29)]);
var inst_30065 = (state_30079[(2)]);
var inst_30066 = cljs.core.seq.call(null,inst_30011);
var state_30079__$1 = (function (){var statearr_30144 = state_30079;
(statearr_30144[(31)] = inst_30065);

return statearr_30144;
})();
if(inst_30066){
var statearr_30145_30209 = state_30079__$1;
(statearr_30145_30209[(1)] = (42));

} else {
var statearr_30146_30210 = state_30079__$1;
(statearr_30146_30210[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (16))){
var inst_29978 = (state_30079[(7)]);
var inst_29980 = cljs.core.chunked_seq_QMARK_.call(null,inst_29978);
var state_30079__$1 = state_30079;
if(inst_29980){
var statearr_30147_30211 = state_30079__$1;
(statearr_30147_30211[(1)] = (19));

} else {
var statearr_30148_30212 = state_30079__$1;
(statearr_30148_30212[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (38))){
var inst_30058 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30149_30213 = state_30079__$1;
(statearr_30149_30213[(2)] = inst_30058);

(statearr_30149_30213[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (30))){
var state_30079__$1 = state_30079;
var statearr_30150_30214 = state_30079__$1;
(statearr_30150_30214[(2)] = null);

(statearr_30150_30214[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (10))){
var inst_29959 = (state_30079[(14)]);
var inst_29957 = (state_30079[(17)]);
var inst_29967 = cljs.core._nth.call(null,inst_29957,inst_29959);
var inst_29968 = cljs.core.nth.call(null,inst_29967,(0),null);
var inst_29969 = cljs.core.nth.call(null,inst_29967,(1),null);
var state_30079__$1 = (function (){var statearr_30151 = state_30079;
(statearr_30151[(26)] = inst_29968);

return statearr_30151;
})();
if(cljs.core.truth_(inst_29969)){
var statearr_30152_30215 = state_30079__$1;
(statearr_30152_30215[(1)] = (13));

} else {
var statearr_30153_30216 = state_30079__$1;
(statearr_30153_30216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (18))){
var inst_30004 = (state_30079[(2)]);
var state_30079__$1 = state_30079;
var statearr_30154_30217 = state_30079__$1;
(statearr_30154_30217[(2)] = inst_30004);

(statearr_30154_30217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (42))){
var state_30079__$1 = state_30079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30079__$1,(45),dchan);
} else {
if((state_val_30080 === (37))){
var inst_29947 = (state_30079[(10)]);
var inst_30047 = (state_30079[(23)]);
var inst_30038 = (state_30079[(25)]);
var inst_30047__$1 = cljs.core.first.call(null,inst_30038);
var inst_30048 = cljs.core.async.put_BANG_.call(null,inst_30047__$1,inst_29947,done);
var state_30079__$1 = (function (){var statearr_30155 = state_30079;
(statearr_30155[(23)] = inst_30047__$1);

return statearr_30155;
})();
if(cljs.core.truth_(inst_30048)){
var statearr_30156_30218 = state_30079__$1;
(statearr_30156_30218[(1)] = (39));

} else {
var statearr_30157_30219 = state_30079__$1;
(statearr_30157_30219[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30080 === (8))){
var inst_29959 = (state_30079[(14)]);
var inst_29958 = (state_30079[(15)]);
var inst_29961 = (inst_29959 < inst_29958);
var inst_29962 = inst_29961;
var state_30079__$1 = state_30079;
if(cljs.core.truth_(inst_29962)){
var statearr_30158_30220 = state_30079__$1;
(statearr_30158_30220[(1)] = (10));

} else {
var statearr_30159_30221 = state_30079__$1;
(statearr_30159_30221[(1)] = (11));

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
});})(c__28844__auto___30167,cs,m,dchan,dctr,done))
;
return ((function (switch__28732__auto__,c__28844__auto___30167,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28733__auto__ = null;
var cljs$core$async$mult_$_state_machine__28733__auto____0 = (function (){
var statearr_30163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30163[(0)] = cljs$core$async$mult_$_state_machine__28733__auto__);

(statearr_30163[(1)] = (1));

return statearr_30163;
});
var cljs$core$async$mult_$_state_machine__28733__auto____1 = (function (state_30079){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_30079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e30164){if((e30164 instanceof Object)){
var ex__28736__auto__ = e30164;
var statearr_30165_30222 = state_30079;
(statearr_30165_30222[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30223 = state_30079;
state_30079 = G__30223;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28733__auto__ = function(state_30079){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28733__auto____1.call(this,state_30079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28733__auto____0;
cljs$core$async$mult_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28733__auto____1;
return cljs$core$async$mult_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___30167,cs,m,dchan,dctr,done))
})();
var state__28846__auto__ = (function (){var statearr_30166 = f__28845__auto__.call(null);
(statearr_30166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___30167);

return statearr_30166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___30167,cs,m,dchan,dctr,done))
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
var args30224 = [];
var len__25923__auto___30227 = arguments.length;
var i__25924__auto___30228 = (0);
while(true){
if((i__25924__auto___30228 < len__25923__auto___30227)){
args30224.push((arguments[i__25924__auto___30228]));

var G__30229 = (i__25924__auto___30228 + (1));
i__25924__auto___30228 = G__30229;
continue;
} else {
}
break;
}

var G__30226 = args30224.length;
switch (G__30226) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30224.length)].join('')));

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
var len__25923__auto___30241 = arguments.length;
var i__25924__auto___30242 = (0);
while(true){
if((i__25924__auto___30242 < len__25923__auto___30241)){
args__25930__auto__.push((arguments[i__25924__auto___30242]));

var G__30243 = (i__25924__auto___30242 + (1));
i__25924__auto___30242 = G__30243;
continue;
} else {
}
break;
}

var argseq__25931__auto__ = ((((3) < args__25930__auto__.length))?(new cljs.core.IndexedSeq(args__25930__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25931__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30235){
var map__30236 = p__30235;
var map__30236__$1 = ((((!((map__30236 == null)))?((((map__30236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30236):map__30236);
var opts = map__30236__$1;
var statearr_30238_30244 = state;
(statearr_30238_30244[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__30236,map__30236__$1,opts){
return (function (val){
var statearr_30239_30245 = state;
(statearr_30239_30245[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30236,map__30236__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_30240_30246 = state;
(statearr_30240_30246[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30231){
var G__30232 = cljs.core.first.call(null,seq30231);
var seq30231__$1 = cljs.core.next.call(null,seq30231);
var G__30233 = cljs.core.first.call(null,seq30231__$1);
var seq30231__$2 = cljs.core.next.call(null,seq30231__$1);
var G__30234 = cljs.core.first.call(null,seq30231__$2);
var seq30231__$3 = cljs.core.next.call(null,seq30231__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30232,G__30233,G__30234,seq30231__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30412 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30413){
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
this.meta30413 = meta30413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30414,meta30413__$1){
var self__ = this;
var _30414__$1 = this;
return (new cljs.core.async.t_cljs$core$async30412(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30413__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30414){
var self__ = this;
var _30414__$1 = this;
return self__.meta30413;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30412.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30412.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30413","meta30413",-1852191053,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30412";

cljs.core.async.t_cljs$core$async30412.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30412");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30412 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30412(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30413){
return (new cljs.core.async.t_cljs$core$async30412(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30413));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30412(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28844__auto___30577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___30577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___30577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30514){
var state_val_30515 = (state_30514[(1)]);
if((state_val_30515 === (7))){
var inst_30430 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30516_30578 = state_30514__$1;
(statearr_30516_30578[(2)] = inst_30430);

(statearr_30516_30578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (20))){
var inst_30442 = (state_30514[(7)]);
var state_30514__$1 = state_30514;
var statearr_30517_30579 = state_30514__$1;
(statearr_30517_30579[(2)] = inst_30442);

(statearr_30517_30579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (27))){
var state_30514__$1 = state_30514;
var statearr_30518_30580 = state_30514__$1;
(statearr_30518_30580[(2)] = null);

(statearr_30518_30580[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (1))){
var inst_30418 = (state_30514[(8)]);
var inst_30418__$1 = calc_state.call(null);
var inst_30420 = (inst_30418__$1 == null);
var inst_30421 = cljs.core.not.call(null,inst_30420);
var state_30514__$1 = (function (){var statearr_30519 = state_30514;
(statearr_30519[(8)] = inst_30418__$1);

return statearr_30519;
})();
if(inst_30421){
var statearr_30520_30581 = state_30514__$1;
(statearr_30520_30581[(1)] = (2));

} else {
var statearr_30521_30582 = state_30514__$1;
(statearr_30521_30582[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (24))){
var inst_30474 = (state_30514[(9)]);
var inst_30488 = (state_30514[(10)]);
var inst_30465 = (state_30514[(11)]);
var inst_30488__$1 = inst_30465.call(null,inst_30474);
var state_30514__$1 = (function (){var statearr_30522 = state_30514;
(statearr_30522[(10)] = inst_30488__$1);

return statearr_30522;
})();
if(cljs.core.truth_(inst_30488__$1)){
var statearr_30523_30583 = state_30514__$1;
(statearr_30523_30583[(1)] = (29));

} else {
var statearr_30524_30584 = state_30514__$1;
(statearr_30524_30584[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (4))){
var inst_30433 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30433)){
var statearr_30525_30585 = state_30514__$1;
(statearr_30525_30585[(1)] = (8));

} else {
var statearr_30526_30586 = state_30514__$1;
(statearr_30526_30586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (15))){
var inst_30459 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30459)){
var statearr_30527_30587 = state_30514__$1;
(statearr_30527_30587[(1)] = (19));

} else {
var statearr_30528_30588 = state_30514__$1;
(statearr_30528_30588[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (21))){
var inst_30464 = (state_30514[(12)]);
var inst_30464__$1 = (state_30514[(2)]);
var inst_30465 = cljs.core.get.call(null,inst_30464__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30466 = cljs.core.get.call(null,inst_30464__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30467 = cljs.core.get.call(null,inst_30464__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30514__$1 = (function (){var statearr_30529 = state_30514;
(statearr_30529[(11)] = inst_30465);

(statearr_30529[(13)] = inst_30466);

(statearr_30529[(12)] = inst_30464__$1);

return statearr_30529;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30514__$1,(22),inst_30467);
} else {
if((state_val_30515 === (31))){
var inst_30496 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30496)){
var statearr_30530_30589 = state_30514__$1;
(statearr_30530_30589[(1)] = (32));

} else {
var statearr_30531_30590 = state_30514__$1;
(statearr_30531_30590[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (32))){
var inst_30473 = (state_30514[(14)]);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30514__$1,(35),out,inst_30473);
} else {
if((state_val_30515 === (33))){
var inst_30464 = (state_30514[(12)]);
var inst_30442 = inst_30464;
var state_30514__$1 = (function (){var statearr_30532 = state_30514;
(statearr_30532[(7)] = inst_30442);

return statearr_30532;
})();
var statearr_30533_30591 = state_30514__$1;
(statearr_30533_30591[(2)] = null);

(statearr_30533_30591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (13))){
var inst_30442 = (state_30514[(7)]);
var inst_30449 = inst_30442.cljs$lang$protocol_mask$partition0$;
var inst_30450 = (inst_30449 & (64));
var inst_30451 = inst_30442.cljs$core$ISeq$;
var inst_30452 = (inst_30450) || (inst_30451);
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30452)){
var statearr_30534_30592 = state_30514__$1;
(statearr_30534_30592[(1)] = (16));

} else {
var statearr_30535_30593 = state_30514__$1;
(statearr_30535_30593[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (22))){
var inst_30473 = (state_30514[(14)]);
var inst_30474 = (state_30514[(9)]);
var inst_30472 = (state_30514[(2)]);
var inst_30473__$1 = cljs.core.nth.call(null,inst_30472,(0),null);
var inst_30474__$1 = cljs.core.nth.call(null,inst_30472,(1),null);
var inst_30475 = (inst_30473__$1 == null);
var inst_30476 = cljs.core._EQ_.call(null,inst_30474__$1,change);
var inst_30477 = (inst_30475) || (inst_30476);
var state_30514__$1 = (function (){var statearr_30536 = state_30514;
(statearr_30536[(14)] = inst_30473__$1);

(statearr_30536[(9)] = inst_30474__$1);

return statearr_30536;
})();
if(cljs.core.truth_(inst_30477)){
var statearr_30537_30594 = state_30514__$1;
(statearr_30537_30594[(1)] = (23));

} else {
var statearr_30538_30595 = state_30514__$1;
(statearr_30538_30595[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (36))){
var inst_30464 = (state_30514[(12)]);
var inst_30442 = inst_30464;
var state_30514__$1 = (function (){var statearr_30539 = state_30514;
(statearr_30539[(7)] = inst_30442);

return statearr_30539;
})();
var statearr_30540_30596 = state_30514__$1;
(statearr_30540_30596[(2)] = null);

(statearr_30540_30596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (29))){
var inst_30488 = (state_30514[(10)]);
var state_30514__$1 = state_30514;
var statearr_30541_30597 = state_30514__$1;
(statearr_30541_30597[(2)] = inst_30488);

(statearr_30541_30597[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (6))){
var state_30514__$1 = state_30514;
var statearr_30542_30598 = state_30514__$1;
(statearr_30542_30598[(2)] = false);

(statearr_30542_30598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (28))){
var inst_30484 = (state_30514[(2)]);
var inst_30485 = calc_state.call(null);
var inst_30442 = inst_30485;
var state_30514__$1 = (function (){var statearr_30543 = state_30514;
(statearr_30543[(15)] = inst_30484);

(statearr_30543[(7)] = inst_30442);

return statearr_30543;
})();
var statearr_30544_30599 = state_30514__$1;
(statearr_30544_30599[(2)] = null);

(statearr_30544_30599[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (25))){
var inst_30510 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30545_30600 = state_30514__$1;
(statearr_30545_30600[(2)] = inst_30510);

(statearr_30545_30600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (34))){
var inst_30508 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30546_30601 = state_30514__$1;
(statearr_30546_30601[(2)] = inst_30508);

(statearr_30546_30601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (17))){
var state_30514__$1 = state_30514;
var statearr_30547_30602 = state_30514__$1;
(statearr_30547_30602[(2)] = false);

(statearr_30547_30602[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (3))){
var state_30514__$1 = state_30514;
var statearr_30548_30603 = state_30514__$1;
(statearr_30548_30603[(2)] = false);

(statearr_30548_30603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (12))){
var inst_30512 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30514__$1,inst_30512);
} else {
if((state_val_30515 === (2))){
var inst_30418 = (state_30514[(8)]);
var inst_30423 = inst_30418.cljs$lang$protocol_mask$partition0$;
var inst_30424 = (inst_30423 & (64));
var inst_30425 = inst_30418.cljs$core$ISeq$;
var inst_30426 = (inst_30424) || (inst_30425);
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30426)){
var statearr_30549_30604 = state_30514__$1;
(statearr_30549_30604[(1)] = (5));

} else {
var statearr_30550_30605 = state_30514__$1;
(statearr_30550_30605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (23))){
var inst_30473 = (state_30514[(14)]);
var inst_30479 = (inst_30473 == null);
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30479)){
var statearr_30551_30606 = state_30514__$1;
(statearr_30551_30606[(1)] = (26));

} else {
var statearr_30552_30607 = state_30514__$1;
(statearr_30552_30607[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (35))){
var inst_30499 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
if(cljs.core.truth_(inst_30499)){
var statearr_30553_30608 = state_30514__$1;
(statearr_30553_30608[(1)] = (36));

} else {
var statearr_30554_30609 = state_30514__$1;
(statearr_30554_30609[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (19))){
var inst_30442 = (state_30514[(7)]);
var inst_30461 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30442);
var state_30514__$1 = state_30514;
var statearr_30555_30610 = state_30514__$1;
(statearr_30555_30610[(2)] = inst_30461);

(statearr_30555_30610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (11))){
var inst_30442 = (state_30514[(7)]);
var inst_30446 = (inst_30442 == null);
var inst_30447 = cljs.core.not.call(null,inst_30446);
var state_30514__$1 = state_30514;
if(inst_30447){
var statearr_30556_30611 = state_30514__$1;
(statearr_30556_30611[(1)] = (13));

} else {
var statearr_30557_30612 = state_30514__$1;
(statearr_30557_30612[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (9))){
var inst_30418 = (state_30514[(8)]);
var state_30514__$1 = state_30514;
var statearr_30558_30613 = state_30514__$1;
(statearr_30558_30613[(2)] = inst_30418);

(statearr_30558_30613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (5))){
var state_30514__$1 = state_30514;
var statearr_30559_30614 = state_30514__$1;
(statearr_30559_30614[(2)] = true);

(statearr_30559_30614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (14))){
var state_30514__$1 = state_30514;
var statearr_30560_30615 = state_30514__$1;
(statearr_30560_30615[(2)] = false);

(statearr_30560_30615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (26))){
var inst_30474 = (state_30514[(9)]);
var inst_30481 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30474);
var state_30514__$1 = state_30514;
var statearr_30561_30616 = state_30514__$1;
(statearr_30561_30616[(2)] = inst_30481);

(statearr_30561_30616[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (16))){
var state_30514__$1 = state_30514;
var statearr_30562_30617 = state_30514__$1;
(statearr_30562_30617[(2)] = true);

(statearr_30562_30617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (38))){
var inst_30504 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30563_30618 = state_30514__$1;
(statearr_30563_30618[(2)] = inst_30504);

(statearr_30563_30618[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (30))){
var inst_30474 = (state_30514[(9)]);
var inst_30465 = (state_30514[(11)]);
var inst_30466 = (state_30514[(13)]);
var inst_30491 = cljs.core.empty_QMARK_.call(null,inst_30465);
var inst_30492 = inst_30466.call(null,inst_30474);
var inst_30493 = cljs.core.not.call(null,inst_30492);
var inst_30494 = (inst_30491) && (inst_30493);
var state_30514__$1 = state_30514;
var statearr_30564_30619 = state_30514__$1;
(statearr_30564_30619[(2)] = inst_30494);

(statearr_30564_30619[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (10))){
var inst_30418 = (state_30514[(8)]);
var inst_30438 = (state_30514[(2)]);
var inst_30439 = cljs.core.get.call(null,inst_30438,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30440 = cljs.core.get.call(null,inst_30438,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30441 = cljs.core.get.call(null,inst_30438,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30442 = inst_30418;
var state_30514__$1 = (function (){var statearr_30565 = state_30514;
(statearr_30565[(16)] = inst_30441);

(statearr_30565[(17)] = inst_30440);

(statearr_30565[(7)] = inst_30442);

(statearr_30565[(18)] = inst_30439);

return statearr_30565;
})();
var statearr_30566_30620 = state_30514__$1;
(statearr_30566_30620[(2)] = null);

(statearr_30566_30620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (18))){
var inst_30456 = (state_30514[(2)]);
var state_30514__$1 = state_30514;
var statearr_30567_30621 = state_30514__$1;
(statearr_30567_30621[(2)] = inst_30456);

(statearr_30567_30621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (37))){
var state_30514__$1 = state_30514;
var statearr_30568_30622 = state_30514__$1;
(statearr_30568_30622[(2)] = null);

(statearr_30568_30622[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30515 === (8))){
var inst_30418 = (state_30514[(8)]);
var inst_30435 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30418);
var state_30514__$1 = state_30514;
var statearr_30569_30623 = state_30514__$1;
(statearr_30569_30623[(2)] = inst_30435);

(statearr_30569_30623[(1)] = (10));


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
});})(c__28844__auto___30577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28732__auto__,c__28844__auto___30577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28733__auto__ = null;
var cljs$core$async$mix_$_state_machine__28733__auto____0 = (function (){
var statearr_30573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30573[(0)] = cljs$core$async$mix_$_state_machine__28733__auto__);

(statearr_30573[(1)] = (1));

return statearr_30573;
});
var cljs$core$async$mix_$_state_machine__28733__auto____1 = (function (state_30514){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_30514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e30574){if((e30574 instanceof Object)){
var ex__28736__auto__ = e30574;
var statearr_30575_30624 = state_30514;
(statearr_30575_30624[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30625 = state_30514;
state_30514 = G__30625;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28733__auto__ = function(state_30514){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28733__auto____1.call(this,state_30514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28733__auto____0;
cljs$core$async$mix_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28733__auto____1;
return cljs$core$async$mix_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___30577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28846__auto__ = (function (){var statearr_30576 = f__28845__auto__.call(null);
(statearr_30576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___30577);

return statearr_30576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___30577,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args30626 = [];
var len__25923__auto___30629 = arguments.length;
var i__25924__auto___30630 = (0);
while(true){
if((i__25924__auto___30630 < len__25923__auto___30629)){
args30626.push((arguments[i__25924__auto___30630]));

var G__30631 = (i__25924__auto___30630 + (1));
i__25924__auto___30630 = G__30631;
continue;
} else {
}
break;
}

var G__30628 = args30626.length;
switch (G__30628) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30626.length)].join('')));

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
var args30634 = [];
var len__25923__auto___30759 = arguments.length;
var i__25924__auto___30760 = (0);
while(true){
if((i__25924__auto___30760 < len__25923__auto___30759)){
args30634.push((arguments[i__25924__auto___30760]));

var G__30761 = (i__25924__auto___30760 + (1));
i__25924__auto___30760 = G__30761;
continue;
} else {
}
break;
}

var G__30636 = args30634.length;
switch (G__30636) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30634.length)].join('')));

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
return (function (p1__30633_SHARP_){
if(cljs.core.truth_(p1__30633_SHARP_.call(null,topic))){
return p1__30633_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30633_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24848__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30637 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30638){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30638 = meta30638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30639,meta30638__$1){
var self__ = this;
var _30639__$1 = this;
return (new cljs.core.async.t_cljs$core$async30637(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30638__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30639){
var self__ = this;
var _30639__$1 = this;
return self__.meta30638;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30637.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30638","meta30638",21286449,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30637";

cljs.core.async.t_cljs$core$async30637.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async30637");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30637 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30638){
return (new cljs.core.async.t_cljs$core$async30637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30638));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30637(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28844__auto___30763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___30763,mults,ensure_mult,p){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___30763,mults,ensure_mult,p){
return (function (state_30711){
var state_val_30712 = (state_30711[(1)]);
if((state_val_30712 === (7))){
var inst_30707 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30713_30764 = state_30711__$1;
(statearr_30713_30764[(2)] = inst_30707);

(statearr_30713_30764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (20))){
var state_30711__$1 = state_30711;
var statearr_30714_30765 = state_30711__$1;
(statearr_30714_30765[(2)] = null);

(statearr_30714_30765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (1))){
var state_30711__$1 = state_30711;
var statearr_30715_30766 = state_30711__$1;
(statearr_30715_30766[(2)] = null);

(statearr_30715_30766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (24))){
var inst_30690 = (state_30711[(7)]);
var inst_30699 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30690);
var state_30711__$1 = state_30711;
var statearr_30716_30767 = state_30711__$1;
(statearr_30716_30767[(2)] = inst_30699);

(statearr_30716_30767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (4))){
var inst_30642 = (state_30711[(8)]);
var inst_30642__$1 = (state_30711[(2)]);
var inst_30643 = (inst_30642__$1 == null);
var state_30711__$1 = (function (){var statearr_30717 = state_30711;
(statearr_30717[(8)] = inst_30642__$1);

return statearr_30717;
})();
if(cljs.core.truth_(inst_30643)){
var statearr_30718_30768 = state_30711__$1;
(statearr_30718_30768[(1)] = (5));

} else {
var statearr_30719_30769 = state_30711__$1;
(statearr_30719_30769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (15))){
var inst_30684 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30720_30770 = state_30711__$1;
(statearr_30720_30770[(2)] = inst_30684);

(statearr_30720_30770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (21))){
var inst_30704 = (state_30711[(2)]);
var state_30711__$1 = (function (){var statearr_30721 = state_30711;
(statearr_30721[(9)] = inst_30704);

return statearr_30721;
})();
var statearr_30722_30771 = state_30711__$1;
(statearr_30722_30771[(2)] = null);

(statearr_30722_30771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (13))){
var inst_30666 = (state_30711[(10)]);
var inst_30668 = cljs.core.chunked_seq_QMARK_.call(null,inst_30666);
var state_30711__$1 = state_30711;
if(inst_30668){
var statearr_30723_30772 = state_30711__$1;
(statearr_30723_30772[(1)] = (16));

} else {
var statearr_30724_30773 = state_30711__$1;
(statearr_30724_30773[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (22))){
var inst_30696 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30696)){
var statearr_30725_30774 = state_30711__$1;
(statearr_30725_30774[(1)] = (23));

} else {
var statearr_30726_30775 = state_30711__$1;
(statearr_30726_30775[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (6))){
var inst_30692 = (state_30711[(11)]);
var inst_30642 = (state_30711[(8)]);
var inst_30690 = (state_30711[(7)]);
var inst_30690__$1 = topic_fn.call(null,inst_30642);
var inst_30691 = cljs.core.deref.call(null,mults);
var inst_30692__$1 = cljs.core.get.call(null,inst_30691,inst_30690__$1);
var state_30711__$1 = (function (){var statearr_30727 = state_30711;
(statearr_30727[(11)] = inst_30692__$1);

(statearr_30727[(7)] = inst_30690__$1);

return statearr_30727;
})();
if(cljs.core.truth_(inst_30692__$1)){
var statearr_30728_30776 = state_30711__$1;
(statearr_30728_30776[(1)] = (19));

} else {
var statearr_30729_30777 = state_30711__$1;
(statearr_30729_30777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (25))){
var inst_30701 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30730_30778 = state_30711__$1;
(statearr_30730_30778[(2)] = inst_30701);

(statearr_30730_30778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (17))){
var inst_30666 = (state_30711[(10)]);
var inst_30675 = cljs.core.first.call(null,inst_30666);
var inst_30676 = cljs.core.async.muxch_STAR_.call(null,inst_30675);
var inst_30677 = cljs.core.async.close_BANG_.call(null,inst_30676);
var inst_30678 = cljs.core.next.call(null,inst_30666);
var inst_30652 = inst_30678;
var inst_30653 = null;
var inst_30654 = (0);
var inst_30655 = (0);
var state_30711__$1 = (function (){var statearr_30731 = state_30711;
(statearr_30731[(12)] = inst_30653);

(statearr_30731[(13)] = inst_30652);

(statearr_30731[(14)] = inst_30677);

(statearr_30731[(15)] = inst_30654);

(statearr_30731[(16)] = inst_30655);

return statearr_30731;
})();
var statearr_30732_30779 = state_30711__$1;
(statearr_30732_30779[(2)] = null);

(statearr_30732_30779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (3))){
var inst_30709 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30711__$1,inst_30709);
} else {
if((state_val_30712 === (12))){
var inst_30686 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30733_30780 = state_30711__$1;
(statearr_30733_30780[(2)] = inst_30686);

(statearr_30733_30780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (2))){
var state_30711__$1 = state_30711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30711__$1,(4),ch);
} else {
if((state_val_30712 === (23))){
var state_30711__$1 = state_30711;
var statearr_30734_30781 = state_30711__$1;
(statearr_30734_30781[(2)] = null);

(statearr_30734_30781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (19))){
var inst_30692 = (state_30711[(11)]);
var inst_30642 = (state_30711[(8)]);
var inst_30694 = cljs.core.async.muxch_STAR_.call(null,inst_30692);
var state_30711__$1 = state_30711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30711__$1,(22),inst_30694,inst_30642);
} else {
if((state_val_30712 === (11))){
var inst_30652 = (state_30711[(13)]);
var inst_30666 = (state_30711[(10)]);
var inst_30666__$1 = cljs.core.seq.call(null,inst_30652);
var state_30711__$1 = (function (){var statearr_30735 = state_30711;
(statearr_30735[(10)] = inst_30666__$1);

return statearr_30735;
})();
if(inst_30666__$1){
var statearr_30736_30782 = state_30711__$1;
(statearr_30736_30782[(1)] = (13));

} else {
var statearr_30737_30783 = state_30711__$1;
(statearr_30737_30783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (9))){
var inst_30688 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30738_30784 = state_30711__$1;
(statearr_30738_30784[(2)] = inst_30688);

(statearr_30738_30784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (5))){
var inst_30649 = cljs.core.deref.call(null,mults);
var inst_30650 = cljs.core.vals.call(null,inst_30649);
var inst_30651 = cljs.core.seq.call(null,inst_30650);
var inst_30652 = inst_30651;
var inst_30653 = null;
var inst_30654 = (0);
var inst_30655 = (0);
var state_30711__$1 = (function (){var statearr_30739 = state_30711;
(statearr_30739[(12)] = inst_30653);

(statearr_30739[(13)] = inst_30652);

(statearr_30739[(15)] = inst_30654);

(statearr_30739[(16)] = inst_30655);

return statearr_30739;
})();
var statearr_30740_30785 = state_30711__$1;
(statearr_30740_30785[(2)] = null);

(statearr_30740_30785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (14))){
var state_30711__$1 = state_30711;
var statearr_30744_30786 = state_30711__$1;
(statearr_30744_30786[(2)] = null);

(statearr_30744_30786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (16))){
var inst_30666 = (state_30711[(10)]);
var inst_30670 = cljs.core.chunk_first.call(null,inst_30666);
var inst_30671 = cljs.core.chunk_rest.call(null,inst_30666);
var inst_30672 = cljs.core.count.call(null,inst_30670);
var inst_30652 = inst_30671;
var inst_30653 = inst_30670;
var inst_30654 = inst_30672;
var inst_30655 = (0);
var state_30711__$1 = (function (){var statearr_30745 = state_30711;
(statearr_30745[(12)] = inst_30653);

(statearr_30745[(13)] = inst_30652);

(statearr_30745[(15)] = inst_30654);

(statearr_30745[(16)] = inst_30655);

return statearr_30745;
})();
var statearr_30746_30787 = state_30711__$1;
(statearr_30746_30787[(2)] = null);

(statearr_30746_30787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (10))){
var inst_30653 = (state_30711[(12)]);
var inst_30652 = (state_30711[(13)]);
var inst_30654 = (state_30711[(15)]);
var inst_30655 = (state_30711[(16)]);
var inst_30660 = cljs.core._nth.call(null,inst_30653,inst_30655);
var inst_30661 = cljs.core.async.muxch_STAR_.call(null,inst_30660);
var inst_30662 = cljs.core.async.close_BANG_.call(null,inst_30661);
var inst_30663 = (inst_30655 + (1));
var tmp30741 = inst_30653;
var tmp30742 = inst_30652;
var tmp30743 = inst_30654;
var inst_30652__$1 = tmp30742;
var inst_30653__$1 = tmp30741;
var inst_30654__$1 = tmp30743;
var inst_30655__$1 = inst_30663;
var state_30711__$1 = (function (){var statearr_30747 = state_30711;
(statearr_30747[(12)] = inst_30653__$1);

(statearr_30747[(13)] = inst_30652__$1);

(statearr_30747[(17)] = inst_30662);

(statearr_30747[(15)] = inst_30654__$1);

(statearr_30747[(16)] = inst_30655__$1);

return statearr_30747;
})();
var statearr_30748_30788 = state_30711__$1;
(statearr_30748_30788[(2)] = null);

(statearr_30748_30788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (18))){
var inst_30681 = (state_30711[(2)]);
var state_30711__$1 = state_30711;
var statearr_30749_30789 = state_30711__$1;
(statearr_30749_30789[(2)] = inst_30681);

(statearr_30749_30789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30712 === (8))){
var inst_30654 = (state_30711[(15)]);
var inst_30655 = (state_30711[(16)]);
var inst_30657 = (inst_30655 < inst_30654);
var inst_30658 = inst_30657;
var state_30711__$1 = state_30711;
if(cljs.core.truth_(inst_30658)){
var statearr_30750_30790 = state_30711__$1;
(statearr_30750_30790[(1)] = (10));

} else {
var statearr_30751_30791 = state_30711__$1;
(statearr_30751_30791[(1)] = (11));

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
});})(c__28844__auto___30763,mults,ensure_mult,p))
;
return ((function (switch__28732__auto__,c__28844__auto___30763,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_30755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30755[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_30755[(1)] = (1));

return statearr_30755;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_30711){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_30711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e30756){if((e30756 instanceof Object)){
var ex__28736__auto__ = e30756;
var statearr_30757_30792 = state_30711;
(statearr_30757_30792[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30793 = state_30711;
state_30711 = G__30793;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_30711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_30711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___30763,mults,ensure_mult,p))
})();
var state__28846__auto__ = (function (){var statearr_30758 = f__28845__auto__.call(null);
(statearr_30758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___30763);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___30763,mults,ensure_mult,p))
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
var args30794 = [];
var len__25923__auto___30797 = arguments.length;
var i__25924__auto___30798 = (0);
while(true){
if((i__25924__auto___30798 < len__25923__auto___30797)){
args30794.push((arguments[i__25924__auto___30798]));

var G__30799 = (i__25924__auto___30798 + (1));
i__25924__auto___30798 = G__30799;
continue;
} else {
}
break;
}

var G__30796 = args30794.length;
switch (G__30796) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30794.length)].join('')));

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
var args30801 = [];
var len__25923__auto___30804 = arguments.length;
var i__25924__auto___30805 = (0);
while(true){
if((i__25924__auto___30805 < len__25923__auto___30804)){
args30801.push((arguments[i__25924__auto___30805]));

var G__30806 = (i__25924__auto___30805 + (1));
i__25924__auto___30805 = G__30806;
continue;
} else {
}
break;
}

var G__30803 = args30801.length;
switch (G__30803) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30801.length)].join('')));

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
var args30808 = [];
var len__25923__auto___30879 = arguments.length;
var i__25924__auto___30880 = (0);
while(true){
if((i__25924__auto___30880 < len__25923__auto___30879)){
args30808.push((arguments[i__25924__auto___30880]));

var G__30881 = (i__25924__auto___30880 + (1));
i__25924__auto___30880 = G__30881;
continue;
} else {
}
break;
}

var G__30810 = args30808.length;
switch (G__30810) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30808.length)].join('')));

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
var c__28844__auto___30883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___30883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___30883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30849){
var state_val_30850 = (state_30849[(1)]);
if((state_val_30850 === (7))){
var state_30849__$1 = state_30849;
var statearr_30851_30884 = state_30849__$1;
(statearr_30851_30884[(2)] = null);

(statearr_30851_30884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (1))){
var state_30849__$1 = state_30849;
var statearr_30852_30885 = state_30849__$1;
(statearr_30852_30885[(2)] = null);

(statearr_30852_30885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (4))){
var inst_30813 = (state_30849[(7)]);
var inst_30815 = (inst_30813 < cnt);
var state_30849__$1 = state_30849;
if(cljs.core.truth_(inst_30815)){
var statearr_30853_30886 = state_30849__$1;
(statearr_30853_30886[(1)] = (6));

} else {
var statearr_30854_30887 = state_30849__$1;
(statearr_30854_30887[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (15))){
var inst_30845 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30855_30888 = state_30849__$1;
(statearr_30855_30888[(2)] = inst_30845);

(statearr_30855_30888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (13))){
var inst_30838 = cljs.core.async.close_BANG_.call(null,out);
var state_30849__$1 = state_30849;
var statearr_30856_30889 = state_30849__$1;
(statearr_30856_30889[(2)] = inst_30838);

(statearr_30856_30889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (6))){
var state_30849__$1 = state_30849;
var statearr_30857_30890 = state_30849__$1;
(statearr_30857_30890[(2)] = null);

(statearr_30857_30890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (3))){
var inst_30847 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30849__$1,inst_30847);
} else {
if((state_val_30850 === (12))){
var inst_30835 = (state_30849[(8)]);
var inst_30835__$1 = (state_30849[(2)]);
var inst_30836 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30835__$1);
var state_30849__$1 = (function (){var statearr_30858 = state_30849;
(statearr_30858[(8)] = inst_30835__$1);

return statearr_30858;
})();
if(cljs.core.truth_(inst_30836)){
var statearr_30859_30891 = state_30849__$1;
(statearr_30859_30891[(1)] = (13));

} else {
var statearr_30860_30892 = state_30849__$1;
(statearr_30860_30892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (2))){
var inst_30812 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30813 = (0);
var state_30849__$1 = (function (){var statearr_30861 = state_30849;
(statearr_30861[(9)] = inst_30812);

(statearr_30861[(7)] = inst_30813);

return statearr_30861;
})();
var statearr_30862_30893 = state_30849__$1;
(statearr_30862_30893[(2)] = null);

(statearr_30862_30893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (11))){
var inst_30813 = (state_30849[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30849,(10),Object,null,(9));
var inst_30822 = chs__$1.call(null,inst_30813);
var inst_30823 = done.call(null,inst_30813);
var inst_30824 = cljs.core.async.take_BANG_.call(null,inst_30822,inst_30823);
var state_30849__$1 = state_30849;
var statearr_30863_30894 = state_30849__$1;
(statearr_30863_30894[(2)] = inst_30824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (9))){
var inst_30813 = (state_30849[(7)]);
var inst_30826 = (state_30849[(2)]);
var inst_30827 = (inst_30813 + (1));
var inst_30813__$1 = inst_30827;
var state_30849__$1 = (function (){var statearr_30864 = state_30849;
(statearr_30864[(10)] = inst_30826);

(statearr_30864[(7)] = inst_30813__$1);

return statearr_30864;
})();
var statearr_30865_30895 = state_30849__$1;
(statearr_30865_30895[(2)] = null);

(statearr_30865_30895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (5))){
var inst_30833 = (state_30849[(2)]);
var state_30849__$1 = (function (){var statearr_30866 = state_30849;
(statearr_30866[(11)] = inst_30833);

return statearr_30866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30849__$1,(12),dchan);
} else {
if((state_val_30850 === (14))){
var inst_30835 = (state_30849[(8)]);
var inst_30840 = cljs.core.apply.call(null,f,inst_30835);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30849__$1,(16),out,inst_30840);
} else {
if((state_val_30850 === (16))){
var inst_30842 = (state_30849[(2)]);
var state_30849__$1 = (function (){var statearr_30867 = state_30849;
(statearr_30867[(12)] = inst_30842);

return statearr_30867;
})();
var statearr_30868_30896 = state_30849__$1;
(statearr_30868_30896[(2)] = null);

(statearr_30868_30896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (10))){
var inst_30817 = (state_30849[(2)]);
var inst_30818 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30849__$1 = (function (){var statearr_30869 = state_30849;
(statearr_30869[(13)] = inst_30817);

return statearr_30869;
})();
var statearr_30870_30897 = state_30849__$1;
(statearr_30870_30897[(2)] = inst_30818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30849__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (8))){
var inst_30831 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30871_30898 = state_30849__$1;
(statearr_30871_30898[(2)] = inst_30831);

(statearr_30871_30898[(1)] = (5));


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
});})(c__28844__auto___30883,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28732__auto__,c__28844__auto___30883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_30875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30875[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_30875[(1)] = (1));

return statearr_30875;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_30849){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_30849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e30876){if((e30876 instanceof Object)){
var ex__28736__auto__ = e30876;
var statearr_30877_30899 = state_30849;
(statearr_30877_30899[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30900 = state_30849;
state_30849 = G__30900;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_30849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_30849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___30883,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28846__auto__ = (function (){var statearr_30878 = f__28845__auto__.call(null);
(statearr_30878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___30883);

return statearr_30878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___30883,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30902 = [];
var len__25923__auto___30960 = arguments.length;
var i__25924__auto___30961 = (0);
while(true){
if((i__25924__auto___30961 < len__25923__auto___30960)){
args30902.push((arguments[i__25924__auto___30961]));

var G__30962 = (i__25924__auto___30961 + (1));
i__25924__auto___30961 = G__30962;
continue;
} else {
}
break;
}

var G__30904 = args30902.length;
switch (G__30904) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30902.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28844__auto___30964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___30964,out){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___30964,out){
return (function (state_30936){
var state_val_30937 = (state_30936[(1)]);
if((state_val_30937 === (7))){
var inst_30915 = (state_30936[(7)]);
var inst_30916 = (state_30936[(8)]);
var inst_30915__$1 = (state_30936[(2)]);
var inst_30916__$1 = cljs.core.nth.call(null,inst_30915__$1,(0),null);
var inst_30917 = cljs.core.nth.call(null,inst_30915__$1,(1),null);
var inst_30918 = (inst_30916__$1 == null);
var state_30936__$1 = (function (){var statearr_30938 = state_30936;
(statearr_30938[(7)] = inst_30915__$1);

(statearr_30938[(9)] = inst_30917);

(statearr_30938[(8)] = inst_30916__$1);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30918)){
var statearr_30939_30965 = state_30936__$1;
(statearr_30939_30965[(1)] = (8));

} else {
var statearr_30940_30966 = state_30936__$1;
(statearr_30940_30966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (1))){
var inst_30905 = cljs.core.vec.call(null,chs);
var inst_30906 = inst_30905;
var state_30936__$1 = (function (){var statearr_30941 = state_30936;
(statearr_30941[(10)] = inst_30906);

return statearr_30941;
})();
var statearr_30942_30967 = state_30936__$1;
(statearr_30942_30967[(2)] = null);

(statearr_30942_30967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (4))){
var inst_30906 = (state_30936[(10)]);
var state_30936__$1 = state_30936;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30936__$1,(7),inst_30906);
} else {
if((state_val_30937 === (6))){
var inst_30932 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30943_30968 = state_30936__$1;
(statearr_30943_30968[(2)] = inst_30932);

(statearr_30943_30968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (3))){
var inst_30934 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30936__$1,inst_30934);
} else {
if((state_val_30937 === (2))){
var inst_30906 = (state_30936[(10)]);
var inst_30908 = cljs.core.count.call(null,inst_30906);
var inst_30909 = (inst_30908 > (0));
var state_30936__$1 = state_30936;
if(cljs.core.truth_(inst_30909)){
var statearr_30945_30969 = state_30936__$1;
(statearr_30945_30969[(1)] = (4));

} else {
var statearr_30946_30970 = state_30936__$1;
(statearr_30946_30970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (11))){
var inst_30906 = (state_30936[(10)]);
var inst_30925 = (state_30936[(2)]);
var tmp30944 = inst_30906;
var inst_30906__$1 = tmp30944;
var state_30936__$1 = (function (){var statearr_30947 = state_30936;
(statearr_30947[(11)] = inst_30925);

(statearr_30947[(10)] = inst_30906__$1);

return statearr_30947;
})();
var statearr_30948_30971 = state_30936__$1;
(statearr_30948_30971[(2)] = null);

(statearr_30948_30971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (9))){
var inst_30916 = (state_30936[(8)]);
var state_30936__$1 = state_30936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30936__$1,(11),out,inst_30916);
} else {
if((state_val_30937 === (5))){
var inst_30930 = cljs.core.async.close_BANG_.call(null,out);
var state_30936__$1 = state_30936;
var statearr_30949_30972 = state_30936__$1;
(statearr_30949_30972[(2)] = inst_30930);

(statearr_30949_30972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (10))){
var inst_30928 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30950_30973 = state_30936__$1;
(statearr_30950_30973[(2)] = inst_30928);

(statearr_30950_30973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30937 === (8))){
var inst_30915 = (state_30936[(7)]);
var inst_30917 = (state_30936[(9)]);
var inst_30916 = (state_30936[(8)]);
var inst_30906 = (state_30936[(10)]);
var inst_30920 = (function (){var cs = inst_30906;
var vec__30911 = inst_30915;
var v = inst_30916;
var c = inst_30917;
return ((function (cs,vec__30911,v,c,inst_30915,inst_30917,inst_30916,inst_30906,state_val_30937,c__28844__auto___30964,out){
return (function (p1__30901_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30901_SHARP_);
});
;})(cs,vec__30911,v,c,inst_30915,inst_30917,inst_30916,inst_30906,state_val_30937,c__28844__auto___30964,out))
})();
var inst_30921 = cljs.core.filterv.call(null,inst_30920,inst_30906);
var inst_30906__$1 = inst_30921;
var state_30936__$1 = (function (){var statearr_30951 = state_30936;
(statearr_30951[(10)] = inst_30906__$1);

return statearr_30951;
})();
var statearr_30952_30974 = state_30936__$1;
(statearr_30952_30974[(2)] = null);

(statearr_30952_30974[(1)] = (2));


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
});})(c__28844__auto___30964,out))
;
return ((function (switch__28732__auto__,c__28844__auto___30964,out){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_30956 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30956[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_30956[(1)] = (1));

return statearr_30956;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_30936){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_30936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e30957){if((e30957 instanceof Object)){
var ex__28736__auto__ = e30957;
var statearr_30958_30975 = state_30936;
(statearr_30958_30975[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30976 = state_30936;
state_30936 = G__30976;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_30936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_30936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___30964,out))
})();
var state__28846__auto__ = (function (){var statearr_30959 = f__28845__auto__.call(null);
(statearr_30959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___30964);

return statearr_30959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___30964,out))
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
var args30977 = [];
var len__25923__auto___31026 = arguments.length;
var i__25924__auto___31027 = (0);
while(true){
if((i__25924__auto___31027 < len__25923__auto___31026)){
args30977.push((arguments[i__25924__auto___31027]));

var G__31028 = (i__25924__auto___31027 + (1));
i__25924__auto___31027 = G__31028;
continue;
} else {
}
break;
}

var G__30979 = args30977.length;
switch (G__30979) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30977.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28844__auto___31030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___31030,out){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___31030,out){
return (function (state_31003){
var state_val_31004 = (state_31003[(1)]);
if((state_val_31004 === (7))){
var inst_30985 = (state_31003[(7)]);
var inst_30985__$1 = (state_31003[(2)]);
var inst_30986 = (inst_30985__$1 == null);
var inst_30987 = cljs.core.not.call(null,inst_30986);
var state_31003__$1 = (function (){var statearr_31005 = state_31003;
(statearr_31005[(7)] = inst_30985__$1);

return statearr_31005;
})();
if(inst_30987){
var statearr_31006_31031 = state_31003__$1;
(statearr_31006_31031[(1)] = (8));

} else {
var statearr_31007_31032 = state_31003__$1;
(statearr_31007_31032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (1))){
var inst_30980 = (0);
var state_31003__$1 = (function (){var statearr_31008 = state_31003;
(statearr_31008[(8)] = inst_30980);

return statearr_31008;
})();
var statearr_31009_31033 = state_31003__$1;
(statearr_31009_31033[(2)] = null);

(statearr_31009_31033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (4))){
var state_31003__$1 = state_31003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31003__$1,(7),ch);
} else {
if((state_val_31004 === (6))){
var inst_30998 = (state_31003[(2)]);
var state_31003__$1 = state_31003;
var statearr_31010_31034 = state_31003__$1;
(statearr_31010_31034[(2)] = inst_30998);

(statearr_31010_31034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (3))){
var inst_31000 = (state_31003[(2)]);
var inst_31001 = cljs.core.async.close_BANG_.call(null,out);
var state_31003__$1 = (function (){var statearr_31011 = state_31003;
(statearr_31011[(9)] = inst_31000);

return statearr_31011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31003__$1,inst_31001);
} else {
if((state_val_31004 === (2))){
var inst_30980 = (state_31003[(8)]);
var inst_30982 = (inst_30980 < n);
var state_31003__$1 = state_31003;
if(cljs.core.truth_(inst_30982)){
var statearr_31012_31035 = state_31003__$1;
(statearr_31012_31035[(1)] = (4));

} else {
var statearr_31013_31036 = state_31003__$1;
(statearr_31013_31036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (11))){
var inst_30980 = (state_31003[(8)]);
var inst_30990 = (state_31003[(2)]);
var inst_30991 = (inst_30980 + (1));
var inst_30980__$1 = inst_30991;
var state_31003__$1 = (function (){var statearr_31014 = state_31003;
(statearr_31014[(10)] = inst_30990);

(statearr_31014[(8)] = inst_30980__$1);

return statearr_31014;
})();
var statearr_31015_31037 = state_31003__$1;
(statearr_31015_31037[(2)] = null);

(statearr_31015_31037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (9))){
var state_31003__$1 = state_31003;
var statearr_31016_31038 = state_31003__$1;
(statearr_31016_31038[(2)] = null);

(statearr_31016_31038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (5))){
var state_31003__$1 = state_31003;
var statearr_31017_31039 = state_31003__$1;
(statearr_31017_31039[(2)] = null);

(statearr_31017_31039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (10))){
var inst_30995 = (state_31003[(2)]);
var state_31003__$1 = state_31003;
var statearr_31018_31040 = state_31003__$1;
(statearr_31018_31040[(2)] = inst_30995);

(statearr_31018_31040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31004 === (8))){
var inst_30985 = (state_31003[(7)]);
var state_31003__$1 = state_31003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31003__$1,(11),out,inst_30985);
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
});})(c__28844__auto___31030,out))
;
return ((function (switch__28732__auto__,c__28844__auto___31030,out){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_31022 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31022[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_31022[(1)] = (1));

return statearr_31022;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_31003){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_31003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e31023){if((e31023 instanceof Object)){
var ex__28736__auto__ = e31023;
var statearr_31024_31041 = state_31003;
(statearr_31024_31041[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31042 = state_31003;
state_31003 = G__31042;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_31003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_31003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___31030,out))
})();
var state__28846__auto__ = (function (){var statearr_31025 = f__28845__auto__.call(null);
(statearr_31025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___31030);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___31030,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31050 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31050 = (function (map_LT_,f,ch,meta31051){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31051 = meta31051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31052,meta31051__$1){
var self__ = this;
var _31052__$1 = this;
return (new cljs.core.async.t_cljs$core$async31050(self__.map_LT_,self__.f,self__.ch,meta31051__$1));
});

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31052){
var self__ = this;
var _31052__$1 = this;
return self__.meta31051;
});

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31053 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31053 = (function (map_LT_,f,ch,meta31051,_,fn1,meta31054){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta31051 = meta31051;
this._ = _;
this.fn1 = fn1;
this.meta31054 = meta31054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31055,meta31054__$1){
var self__ = this;
var _31055__$1 = this;
return (new cljs.core.async.t_cljs$core$async31053(self__.map_LT_,self__.f,self__.ch,self__.meta31051,self__._,self__.fn1,meta31054__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31055){
var self__ = this;
var _31055__$1 = this;
return self__.meta31054;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31053.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31053.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31043_SHARP_){
return f1.call(null,(((p1__31043_SHARP_ == null))?null:self__.f.call(null,p1__31043_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31053.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31051","meta31051",846470287,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31050","cljs.core.async/t_cljs$core$async31050",600338519,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31054","meta31054",-154407141,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31053.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31053";

cljs.core.async.t_cljs$core$async31053.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31053");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31053 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31053(map_LT___$1,f__$1,ch__$1,meta31051__$1,___$2,fn1__$1,meta31054){
return (new cljs.core.async.t_cljs$core$async31053(map_LT___$1,f__$1,ch__$1,meta31051__$1,___$2,fn1__$1,meta31054));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31053(self__.map_LT_,self__.f,self__.ch,self__.meta31051,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31051","meta31051",846470287,null)], null);
});

cljs.core.async.t_cljs$core$async31050.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31050";

cljs.core.async.t_cljs$core$async31050.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31050");
});

cljs.core.async.__GT_t_cljs$core$async31050 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31050(map_LT___$1,f__$1,ch__$1,meta31051){
return (new cljs.core.async.t_cljs$core$async31050(map_LT___$1,f__$1,ch__$1,meta31051));
});

}

return (new cljs.core.async.t_cljs$core$async31050(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31059 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31059 = (function (map_GT_,f,ch,meta31060){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta31060 = meta31060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31061,meta31060__$1){
var self__ = this;
var _31061__$1 = this;
return (new cljs.core.async.t_cljs$core$async31059(self__.map_GT_,self__.f,self__.ch,meta31060__$1));
});

cljs.core.async.t_cljs$core$async31059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31061){
var self__ = this;
var _31061__$1 = this;
return self__.meta31060;
});

cljs.core.async.t_cljs$core$async31059.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31059.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31059.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31060","meta31060",1160880378,null)], null);
});

cljs.core.async.t_cljs$core$async31059.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31059";

cljs.core.async.t_cljs$core$async31059.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31059");
});

cljs.core.async.__GT_t_cljs$core$async31059 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31059(map_GT___$1,f__$1,ch__$1,meta31060){
return (new cljs.core.async.t_cljs$core$async31059(map_GT___$1,f__$1,ch__$1,meta31060));
});

}

return (new cljs.core.async.t_cljs$core$async31059(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31065 = (function (filter_GT_,p,ch,meta31066){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta31066 = meta31066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31067,meta31066__$1){
var self__ = this;
var _31067__$1 = this;
return (new cljs.core.async.t_cljs$core$async31065(self__.filter_GT_,self__.p,self__.ch,meta31066__$1));
});

cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31067){
var self__ = this;
var _31067__$1 = this;
return self__.meta31066;
});

cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async31065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31066","meta31066",2019140124,null)], null);
});

cljs.core.async.t_cljs$core$async31065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31065";

cljs.core.async.t_cljs$core$async31065.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__,opt__25456__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"cljs.core.async/t_cljs$core$async31065");
});

cljs.core.async.__GT_t_cljs$core$async31065 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31065(filter_GT___$1,p__$1,ch__$1,meta31066){
return (new cljs.core.async.t_cljs$core$async31065(filter_GT___$1,p__$1,ch__$1,meta31066));
});

}

return (new cljs.core.async.t_cljs$core$async31065(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args31068 = [];
var len__25923__auto___31112 = arguments.length;
var i__25924__auto___31113 = (0);
while(true){
if((i__25924__auto___31113 < len__25923__auto___31112)){
args31068.push((arguments[i__25924__auto___31113]));

var G__31114 = (i__25924__auto___31113 + (1));
i__25924__auto___31113 = G__31114;
continue;
} else {
}
break;
}

var G__31070 = args31068.length;
switch (G__31070) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31068.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28844__auto___31116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___31116,out){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___31116,out){
return (function (state_31091){
var state_val_31092 = (state_31091[(1)]);
if((state_val_31092 === (7))){
var inst_31087 = (state_31091[(2)]);
var state_31091__$1 = state_31091;
var statearr_31093_31117 = state_31091__$1;
(statearr_31093_31117[(2)] = inst_31087);

(statearr_31093_31117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (1))){
var state_31091__$1 = state_31091;
var statearr_31094_31118 = state_31091__$1;
(statearr_31094_31118[(2)] = null);

(statearr_31094_31118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (4))){
var inst_31073 = (state_31091[(7)]);
var inst_31073__$1 = (state_31091[(2)]);
var inst_31074 = (inst_31073__$1 == null);
var state_31091__$1 = (function (){var statearr_31095 = state_31091;
(statearr_31095[(7)] = inst_31073__$1);

return statearr_31095;
})();
if(cljs.core.truth_(inst_31074)){
var statearr_31096_31119 = state_31091__$1;
(statearr_31096_31119[(1)] = (5));

} else {
var statearr_31097_31120 = state_31091__$1;
(statearr_31097_31120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (6))){
var inst_31073 = (state_31091[(7)]);
var inst_31078 = p.call(null,inst_31073);
var state_31091__$1 = state_31091;
if(cljs.core.truth_(inst_31078)){
var statearr_31098_31121 = state_31091__$1;
(statearr_31098_31121[(1)] = (8));

} else {
var statearr_31099_31122 = state_31091__$1;
(statearr_31099_31122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (3))){
var inst_31089 = (state_31091[(2)]);
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31091__$1,inst_31089);
} else {
if((state_val_31092 === (2))){
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31091__$1,(4),ch);
} else {
if((state_val_31092 === (11))){
var inst_31081 = (state_31091[(2)]);
var state_31091__$1 = state_31091;
var statearr_31100_31123 = state_31091__$1;
(statearr_31100_31123[(2)] = inst_31081);

(statearr_31100_31123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (9))){
var state_31091__$1 = state_31091;
var statearr_31101_31124 = state_31091__$1;
(statearr_31101_31124[(2)] = null);

(statearr_31101_31124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (5))){
var inst_31076 = cljs.core.async.close_BANG_.call(null,out);
var state_31091__$1 = state_31091;
var statearr_31102_31125 = state_31091__$1;
(statearr_31102_31125[(2)] = inst_31076);

(statearr_31102_31125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (10))){
var inst_31084 = (state_31091[(2)]);
var state_31091__$1 = (function (){var statearr_31103 = state_31091;
(statearr_31103[(8)] = inst_31084);

return statearr_31103;
})();
var statearr_31104_31126 = state_31091__$1;
(statearr_31104_31126[(2)] = null);

(statearr_31104_31126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31092 === (8))){
var inst_31073 = (state_31091[(7)]);
var state_31091__$1 = state_31091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31091__$1,(11),out,inst_31073);
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
});})(c__28844__auto___31116,out))
;
return ((function (switch__28732__auto__,c__28844__auto___31116,out){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_31108 = [null,null,null,null,null,null,null,null,null];
(statearr_31108[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_31108[(1)] = (1));

return statearr_31108;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_31091){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_31091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e31109){if((e31109 instanceof Object)){
var ex__28736__auto__ = e31109;
var statearr_31110_31127 = state_31091;
(statearr_31110_31127[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31128 = state_31091;
state_31091 = G__31128;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_31091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_31091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___31116,out))
})();
var state__28846__auto__ = (function (){var statearr_31111 = f__28845__auto__.call(null);
(statearr_31111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___31116);

return statearr_31111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___31116,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args31129 = [];
var len__25923__auto___31132 = arguments.length;
var i__25924__auto___31133 = (0);
while(true){
if((i__25924__auto___31133 < len__25923__auto___31132)){
args31129.push((arguments[i__25924__auto___31133]));

var G__31134 = (i__25924__auto___31133 + (1));
i__25924__auto___31133 = G__31134;
continue;
} else {
}
break;
}

var G__31131 = args31129.length;
switch (G__31131) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31129.length)].join('')));

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
var c__28844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto__){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto__){
return (function (state_31301){
var state_val_31302 = (state_31301[(1)]);
if((state_val_31302 === (7))){
var inst_31297 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
var statearr_31303_31344 = state_31301__$1;
(statearr_31303_31344[(2)] = inst_31297);

(statearr_31303_31344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (20))){
var inst_31267 = (state_31301[(7)]);
var inst_31278 = (state_31301[(2)]);
var inst_31279 = cljs.core.next.call(null,inst_31267);
var inst_31253 = inst_31279;
var inst_31254 = null;
var inst_31255 = (0);
var inst_31256 = (0);
var state_31301__$1 = (function (){var statearr_31304 = state_31301;
(statearr_31304[(8)] = inst_31255);

(statearr_31304[(9)] = inst_31278);

(statearr_31304[(10)] = inst_31256);

(statearr_31304[(11)] = inst_31254);

(statearr_31304[(12)] = inst_31253);

return statearr_31304;
})();
var statearr_31305_31345 = state_31301__$1;
(statearr_31305_31345[(2)] = null);

(statearr_31305_31345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (1))){
var state_31301__$1 = state_31301;
var statearr_31306_31346 = state_31301__$1;
(statearr_31306_31346[(2)] = null);

(statearr_31306_31346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (4))){
var inst_31242 = (state_31301[(13)]);
var inst_31242__$1 = (state_31301[(2)]);
var inst_31243 = (inst_31242__$1 == null);
var state_31301__$1 = (function (){var statearr_31307 = state_31301;
(statearr_31307[(13)] = inst_31242__$1);

return statearr_31307;
})();
if(cljs.core.truth_(inst_31243)){
var statearr_31308_31347 = state_31301__$1;
(statearr_31308_31347[(1)] = (5));

} else {
var statearr_31309_31348 = state_31301__$1;
(statearr_31309_31348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (15))){
var state_31301__$1 = state_31301;
var statearr_31313_31349 = state_31301__$1;
(statearr_31313_31349[(2)] = null);

(statearr_31313_31349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (21))){
var state_31301__$1 = state_31301;
var statearr_31314_31350 = state_31301__$1;
(statearr_31314_31350[(2)] = null);

(statearr_31314_31350[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (13))){
var inst_31255 = (state_31301[(8)]);
var inst_31256 = (state_31301[(10)]);
var inst_31254 = (state_31301[(11)]);
var inst_31253 = (state_31301[(12)]);
var inst_31263 = (state_31301[(2)]);
var inst_31264 = (inst_31256 + (1));
var tmp31310 = inst_31255;
var tmp31311 = inst_31254;
var tmp31312 = inst_31253;
var inst_31253__$1 = tmp31312;
var inst_31254__$1 = tmp31311;
var inst_31255__$1 = tmp31310;
var inst_31256__$1 = inst_31264;
var state_31301__$1 = (function (){var statearr_31315 = state_31301;
(statearr_31315[(8)] = inst_31255__$1);

(statearr_31315[(14)] = inst_31263);

(statearr_31315[(10)] = inst_31256__$1);

(statearr_31315[(11)] = inst_31254__$1);

(statearr_31315[(12)] = inst_31253__$1);

return statearr_31315;
})();
var statearr_31316_31351 = state_31301__$1;
(statearr_31316_31351[(2)] = null);

(statearr_31316_31351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (22))){
var state_31301__$1 = state_31301;
var statearr_31317_31352 = state_31301__$1;
(statearr_31317_31352[(2)] = null);

(statearr_31317_31352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (6))){
var inst_31242 = (state_31301[(13)]);
var inst_31251 = f.call(null,inst_31242);
var inst_31252 = cljs.core.seq.call(null,inst_31251);
var inst_31253 = inst_31252;
var inst_31254 = null;
var inst_31255 = (0);
var inst_31256 = (0);
var state_31301__$1 = (function (){var statearr_31318 = state_31301;
(statearr_31318[(8)] = inst_31255);

(statearr_31318[(10)] = inst_31256);

(statearr_31318[(11)] = inst_31254);

(statearr_31318[(12)] = inst_31253);

return statearr_31318;
})();
var statearr_31319_31353 = state_31301__$1;
(statearr_31319_31353[(2)] = null);

(statearr_31319_31353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (17))){
var inst_31267 = (state_31301[(7)]);
var inst_31271 = cljs.core.chunk_first.call(null,inst_31267);
var inst_31272 = cljs.core.chunk_rest.call(null,inst_31267);
var inst_31273 = cljs.core.count.call(null,inst_31271);
var inst_31253 = inst_31272;
var inst_31254 = inst_31271;
var inst_31255 = inst_31273;
var inst_31256 = (0);
var state_31301__$1 = (function (){var statearr_31320 = state_31301;
(statearr_31320[(8)] = inst_31255);

(statearr_31320[(10)] = inst_31256);

(statearr_31320[(11)] = inst_31254);

(statearr_31320[(12)] = inst_31253);

return statearr_31320;
})();
var statearr_31321_31354 = state_31301__$1;
(statearr_31321_31354[(2)] = null);

(statearr_31321_31354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (3))){
var inst_31299 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31301__$1,inst_31299);
} else {
if((state_val_31302 === (12))){
var inst_31287 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
var statearr_31322_31355 = state_31301__$1;
(statearr_31322_31355[(2)] = inst_31287);

(statearr_31322_31355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (2))){
var state_31301__$1 = state_31301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31301__$1,(4),in$);
} else {
if((state_val_31302 === (23))){
var inst_31295 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
var statearr_31323_31356 = state_31301__$1;
(statearr_31323_31356[(2)] = inst_31295);

(statearr_31323_31356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (19))){
var inst_31282 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
var statearr_31324_31357 = state_31301__$1;
(statearr_31324_31357[(2)] = inst_31282);

(statearr_31324_31357[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (11))){
var inst_31267 = (state_31301[(7)]);
var inst_31253 = (state_31301[(12)]);
var inst_31267__$1 = cljs.core.seq.call(null,inst_31253);
var state_31301__$1 = (function (){var statearr_31325 = state_31301;
(statearr_31325[(7)] = inst_31267__$1);

return statearr_31325;
})();
if(inst_31267__$1){
var statearr_31326_31358 = state_31301__$1;
(statearr_31326_31358[(1)] = (14));

} else {
var statearr_31327_31359 = state_31301__$1;
(statearr_31327_31359[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (9))){
var inst_31289 = (state_31301[(2)]);
var inst_31290 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31301__$1 = (function (){var statearr_31328 = state_31301;
(statearr_31328[(15)] = inst_31289);

return statearr_31328;
})();
if(cljs.core.truth_(inst_31290)){
var statearr_31329_31360 = state_31301__$1;
(statearr_31329_31360[(1)] = (21));

} else {
var statearr_31330_31361 = state_31301__$1;
(statearr_31330_31361[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (5))){
var inst_31245 = cljs.core.async.close_BANG_.call(null,out);
var state_31301__$1 = state_31301;
var statearr_31331_31362 = state_31301__$1;
(statearr_31331_31362[(2)] = inst_31245);

(statearr_31331_31362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (14))){
var inst_31267 = (state_31301[(7)]);
var inst_31269 = cljs.core.chunked_seq_QMARK_.call(null,inst_31267);
var state_31301__$1 = state_31301;
if(inst_31269){
var statearr_31332_31363 = state_31301__$1;
(statearr_31332_31363[(1)] = (17));

} else {
var statearr_31333_31364 = state_31301__$1;
(statearr_31333_31364[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (16))){
var inst_31285 = (state_31301[(2)]);
var state_31301__$1 = state_31301;
var statearr_31334_31365 = state_31301__$1;
(statearr_31334_31365[(2)] = inst_31285);

(statearr_31334_31365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31302 === (10))){
var inst_31256 = (state_31301[(10)]);
var inst_31254 = (state_31301[(11)]);
var inst_31261 = cljs.core._nth.call(null,inst_31254,inst_31256);
var state_31301__$1 = state_31301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31301__$1,(13),out,inst_31261);
} else {
if((state_val_31302 === (18))){
var inst_31267 = (state_31301[(7)]);
var inst_31276 = cljs.core.first.call(null,inst_31267);
var state_31301__$1 = state_31301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31301__$1,(20),out,inst_31276);
} else {
if((state_val_31302 === (8))){
var inst_31255 = (state_31301[(8)]);
var inst_31256 = (state_31301[(10)]);
var inst_31258 = (inst_31256 < inst_31255);
var inst_31259 = inst_31258;
var state_31301__$1 = state_31301;
if(cljs.core.truth_(inst_31259)){
var statearr_31335_31366 = state_31301__$1;
(statearr_31335_31366[(1)] = (10));

} else {
var statearr_31336_31367 = state_31301__$1;
(statearr_31336_31367[(1)] = (11));

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
});})(c__28844__auto__))
;
return ((function (switch__28732__auto__,c__28844__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28733__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28733__auto____0 = (function (){
var statearr_31340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31340[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28733__auto__);

(statearr_31340[(1)] = (1));

return statearr_31340;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28733__auto____1 = (function (state_31301){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_31301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e31341){if((e31341 instanceof Object)){
var ex__28736__auto__ = e31341;
var statearr_31342_31368 = state_31301;
(statearr_31342_31368[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31369 = state_31301;
state_31301 = G__31369;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28733__auto__ = function(state_31301){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28733__auto____1.call(this,state_31301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28733__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28733__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto__))
})();
var state__28846__auto__ = (function (){var statearr_31343 = f__28845__auto__.call(null);
(statearr_31343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto__);

return statearr_31343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto__))
);

return c__28844__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args31370 = [];
var len__25923__auto___31373 = arguments.length;
var i__25924__auto___31374 = (0);
while(true){
if((i__25924__auto___31374 < len__25923__auto___31373)){
args31370.push((arguments[i__25924__auto___31374]));

var G__31375 = (i__25924__auto___31374 + (1));
i__25924__auto___31374 = G__31375;
continue;
} else {
}
break;
}

var G__31372 = args31370.length;
switch (G__31372) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31370.length)].join('')));

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
var args31377 = [];
var len__25923__auto___31380 = arguments.length;
var i__25924__auto___31381 = (0);
while(true){
if((i__25924__auto___31381 < len__25923__auto___31380)){
args31377.push((arguments[i__25924__auto___31381]));

var G__31382 = (i__25924__auto___31381 + (1));
i__25924__auto___31381 = G__31382;
continue;
} else {
}
break;
}

var G__31379 = args31377.length;
switch (G__31379) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31377.length)].join('')));

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
var args31384 = [];
var len__25923__auto___31435 = arguments.length;
var i__25924__auto___31436 = (0);
while(true){
if((i__25924__auto___31436 < len__25923__auto___31435)){
args31384.push((arguments[i__25924__auto___31436]));

var G__31437 = (i__25924__auto___31436 + (1));
i__25924__auto___31436 = G__31437;
continue;
} else {
}
break;
}

var G__31386 = args31384.length;
switch (G__31386) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31384.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28844__auto___31439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___31439,out){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___31439,out){
return (function (state_31410){
var state_val_31411 = (state_31410[(1)]);
if((state_val_31411 === (7))){
var inst_31405 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31412_31440 = state_31410__$1;
(statearr_31412_31440[(2)] = inst_31405);

(statearr_31412_31440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (1))){
var inst_31387 = null;
var state_31410__$1 = (function (){var statearr_31413 = state_31410;
(statearr_31413[(7)] = inst_31387);

return statearr_31413;
})();
var statearr_31414_31441 = state_31410__$1;
(statearr_31414_31441[(2)] = null);

(statearr_31414_31441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (4))){
var inst_31390 = (state_31410[(8)]);
var inst_31390__$1 = (state_31410[(2)]);
var inst_31391 = (inst_31390__$1 == null);
var inst_31392 = cljs.core.not.call(null,inst_31391);
var state_31410__$1 = (function (){var statearr_31415 = state_31410;
(statearr_31415[(8)] = inst_31390__$1);

return statearr_31415;
})();
if(inst_31392){
var statearr_31416_31442 = state_31410__$1;
(statearr_31416_31442[(1)] = (5));

} else {
var statearr_31417_31443 = state_31410__$1;
(statearr_31417_31443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (6))){
var state_31410__$1 = state_31410;
var statearr_31418_31444 = state_31410__$1;
(statearr_31418_31444[(2)] = null);

(statearr_31418_31444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (3))){
var inst_31407 = (state_31410[(2)]);
var inst_31408 = cljs.core.async.close_BANG_.call(null,out);
var state_31410__$1 = (function (){var statearr_31419 = state_31410;
(statearr_31419[(9)] = inst_31407);

return statearr_31419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31410__$1,inst_31408);
} else {
if((state_val_31411 === (2))){
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31410__$1,(4),ch);
} else {
if((state_val_31411 === (11))){
var inst_31390 = (state_31410[(8)]);
var inst_31399 = (state_31410[(2)]);
var inst_31387 = inst_31390;
var state_31410__$1 = (function (){var statearr_31420 = state_31410;
(statearr_31420[(10)] = inst_31399);

(statearr_31420[(7)] = inst_31387);

return statearr_31420;
})();
var statearr_31421_31445 = state_31410__$1;
(statearr_31421_31445[(2)] = null);

(statearr_31421_31445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (9))){
var inst_31390 = (state_31410[(8)]);
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31410__$1,(11),out,inst_31390);
} else {
if((state_val_31411 === (5))){
var inst_31387 = (state_31410[(7)]);
var inst_31390 = (state_31410[(8)]);
var inst_31394 = cljs.core._EQ_.call(null,inst_31390,inst_31387);
var state_31410__$1 = state_31410;
if(inst_31394){
var statearr_31423_31446 = state_31410__$1;
(statearr_31423_31446[(1)] = (8));

} else {
var statearr_31424_31447 = state_31410__$1;
(statearr_31424_31447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (10))){
var inst_31402 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31425_31448 = state_31410__$1;
(statearr_31425_31448[(2)] = inst_31402);

(statearr_31425_31448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (8))){
var inst_31387 = (state_31410[(7)]);
var tmp31422 = inst_31387;
var inst_31387__$1 = tmp31422;
var state_31410__$1 = (function (){var statearr_31426 = state_31410;
(statearr_31426[(7)] = inst_31387__$1);

return statearr_31426;
})();
var statearr_31427_31449 = state_31410__$1;
(statearr_31427_31449[(2)] = null);

(statearr_31427_31449[(1)] = (2));


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
});})(c__28844__auto___31439,out))
;
return ((function (switch__28732__auto__,c__28844__auto___31439,out){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_31431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31431[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_31431[(1)] = (1));

return statearr_31431;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_31410){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_31410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e31432){if((e31432 instanceof Object)){
var ex__28736__auto__ = e31432;
var statearr_31433_31450 = state_31410;
(statearr_31433_31450[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31451 = state_31410;
state_31410 = G__31451;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_31410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_31410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___31439,out))
})();
var state__28846__auto__ = (function (){var statearr_31434 = f__28845__auto__.call(null);
(statearr_31434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___31439);

return statearr_31434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___31439,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31452 = [];
var len__25923__auto___31522 = arguments.length;
var i__25924__auto___31523 = (0);
while(true){
if((i__25924__auto___31523 < len__25923__auto___31522)){
args31452.push((arguments[i__25924__auto___31523]));

var G__31524 = (i__25924__auto___31523 + (1));
i__25924__auto___31523 = G__31524;
continue;
} else {
}
break;
}

var G__31454 = args31452.length;
switch (G__31454) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31452.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28844__auto___31526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___31526,out){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___31526,out){
return (function (state_31492){
var state_val_31493 = (state_31492[(1)]);
if((state_val_31493 === (7))){
var inst_31488 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31494_31527 = state_31492__$1;
(statearr_31494_31527[(2)] = inst_31488);

(statearr_31494_31527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (1))){
var inst_31455 = (new Array(n));
var inst_31456 = inst_31455;
var inst_31457 = (0);
var state_31492__$1 = (function (){var statearr_31495 = state_31492;
(statearr_31495[(7)] = inst_31456);

(statearr_31495[(8)] = inst_31457);

return statearr_31495;
})();
var statearr_31496_31528 = state_31492__$1;
(statearr_31496_31528[(2)] = null);

(statearr_31496_31528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (4))){
var inst_31460 = (state_31492[(9)]);
var inst_31460__$1 = (state_31492[(2)]);
var inst_31461 = (inst_31460__$1 == null);
var inst_31462 = cljs.core.not.call(null,inst_31461);
var state_31492__$1 = (function (){var statearr_31497 = state_31492;
(statearr_31497[(9)] = inst_31460__$1);

return statearr_31497;
})();
if(inst_31462){
var statearr_31498_31529 = state_31492__$1;
(statearr_31498_31529[(1)] = (5));

} else {
var statearr_31499_31530 = state_31492__$1;
(statearr_31499_31530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (15))){
var inst_31482 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31500_31531 = state_31492__$1;
(statearr_31500_31531[(2)] = inst_31482);

(statearr_31500_31531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (13))){
var state_31492__$1 = state_31492;
var statearr_31501_31532 = state_31492__$1;
(statearr_31501_31532[(2)] = null);

(statearr_31501_31532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (6))){
var inst_31457 = (state_31492[(8)]);
var inst_31478 = (inst_31457 > (0));
var state_31492__$1 = state_31492;
if(cljs.core.truth_(inst_31478)){
var statearr_31502_31533 = state_31492__$1;
(statearr_31502_31533[(1)] = (12));

} else {
var statearr_31503_31534 = state_31492__$1;
(statearr_31503_31534[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (3))){
var inst_31490 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31492__$1,inst_31490);
} else {
if((state_val_31493 === (12))){
var inst_31456 = (state_31492[(7)]);
var inst_31480 = cljs.core.vec.call(null,inst_31456);
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31492__$1,(15),out,inst_31480);
} else {
if((state_val_31493 === (2))){
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31492__$1,(4),ch);
} else {
if((state_val_31493 === (11))){
var inst_31472 = (state_31492[(2)]);
var inst_31473 = (new Array(n));
var inst_31456 = inst_31473;
var inst_31457 = (0);
var state_31492__$1 = (function (){var statearr_31504 = state_31492;
(statearr_31504[(7)] = inst_31456);

(statearr_31504[(8)] = inst_31457);

(statearr_31504[(10)] = inst_31472);

return statearr_31504;
})();
var statearr_31505_31535 = state_31492__$1;
(statearr_31505_31535[(2)] = null);

(statearr_31505_31535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (9))){
var inst_31456 = (state_31492[(7)]);
var inst_31470 = cljs.core.vec.call(null,inst_31456);
var state_31492__$1 = state_31492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31492__$1,(11),out,inst_31470);
} else {
if((state_val_31493 === (5))){
var inst_31456 = (state_31492[(7)]);
var inst_31457 = (state_31492[(8)]);
var inst_31460 = (state_31492[(9)]);
var inst_31465 = (state_31492[(11)]);
var inst_31464 = (inst_31456[inst_31457] = inst_31460);
var inst_31465__$1 = (inst_31457 + (1));
var inst_31466 = (inst_31465__$1 < n);
var state_31492__$1 = (function (){var statearr_31506 = state_31492;
(statearr_31506[(12)] = inst_31464);

(statearr_31506[(11)] = inst_31465__$1);

return statearr_31506;
})();
if(cljs.core.truth_(inst_31466)){
var statearr_31507_31536 = state_31492__$1;
(statearr_31507_31536[(1)] = (8));

} else {
var statearr_31508_31537 = state_31492__$1;
(statearr_31508_31537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (14))){
var inst_31485 = (state_31492[(2)]);
var inst_31486 = cljs.core.async.close_BANG_.call(null,out);
var state_31492__$1 = (function (){var statearr_31510 = state_31492;
(statearr_31510[(13)] = inst_31485);

return statearr_31510;
})();
var statearr_31511_31538 = state_31492__$1;
(statearr_31511_31538[(2)] = inst_31486);

(statearr_31511_31538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (10))){
var inst_31476 = (state_31492[(2)]);
var state_31492__$1 = state_31492;
var statearr_31512_31539 = state_31492__$1;
(statearr_31512_31539[(2)] = inst_31476);

(statearr_31512_31539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31493 === (8))){
var inst_31456 = (state_31492[(7)]);
var inst_31465 = (state_31492[(11)]);
var tmp31509 = inst_31456;
var inst_31456__$1 = tmp31509;
var inst_31457 = inst_31465;
var state_31492__$1 = (function (){var statearr_31513 = state_31492;
(statearr_31513[(7)] = inst_31456__$1);

(statearr_31513[(8)] = inst_31457);

return statearr_31513;
})();
var statearr_31514_31540 = state_31492__$1;
(statearr_31514_31540[(2)] = null);

(statearr_31514_31540[(1)] = (2));


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
});})(c__28844__auto___31526,out))
;
return ((function (switch__28732__auto__,c__28844__auto___31526,out){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_31518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31518[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_31518[(1)] = (1));

return statearr_31518;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_31492){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_31492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e31519){if((e31519 instanceof Object)){
var ex__28736__auto__ = e31519;
var statearr_31520_31541 = state_31492;
(statearr_31520_31541[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31542 = state_31492;
state_31492 = G__31542;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_31492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_31492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___31526,out))
})();
var state__28846__auto__ = (function (){var statearr_31521 = f__28845__auto__.call(null);
(statearr_31521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___31526);

return statearr_31521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___31526,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31543 = [];
var len__25923__auto___31617 = arguments.length;
var i__25924__auto___31618 = (0);
while(true){
if((i__25924__auto___31618 < len__25923__auto___31617)){
args31543.push((arguments[i__25924__auto___31618]));

var G__31619 = (i__25924__auto___31618 + (1));
i__25924__auto___31618 = G__31619;
continue;
} else {
}
break;
}

var G__31545 = args31543.length;
switch (G__31545) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31543.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28844__auto___31621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___31621,out){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___31621,out){
return (function (state_31587){
var state_val_31588 = (state_31587[(1)]);
if((state_val_31588 === (7))){
var inst_31583 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31589_31622 = state_31587__$1;
(statearr_31589_31622[(2)] = inst_31583);

(statearr_31589_31622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (1))){
var inst_31546 = [];
var inst_31547 = inst_31546;
var inst_31548 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31587__$1 = (function (){var statearr_31590 = state_31587;
(statearr_31590[(7)] = inst_31547);

(statearr_31590[(8)] = inst_31548);

return statearr_31590;
})();
var statearr_31591_31623 = state_31587__$1;
(statearr_31591_31623[(2)] = null);

(statearr_31591_31623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (4))){
var inst_31551 = (state_31587[(9)]);
var inst_31551__$1 = (state_31587[(2)]);
var inst_31552 = (inst_31551__$1 == null);
var inst_31553 = cljs.core.not.call(null,inst_31552);
var state_31587__$1 = (function (){var statearr_31592 = state_31587;
(statearr_31592[(9)] = inst_31551__$1);

return statearr_31592;
})();
if(inst_31553){
var statearr_31593_31624 = state_31587__$1;
(statearr_31593_31624[(1)] = (5));

} else {
var statearr_31594_31625 = state_31587__$1;
(statearr_31594_31625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (15))){
var inst_31577 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31595_31626 = state_31587__$1;
(statearr_31595_31626[(2)] = inst_31577);

(statearr_31595_31626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (13))){
var state_31587__$1 = state_31587;
var statearr_31596_31627 = state_31587__$1;
(statearr_31596_31627[(2)] = null);

(statearr_31596_31627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (6))){
var inst_31547 = (state_31587[(7)]);
var inst_31572 = inst_31547.length;
var inst_31573 = (inst_31572 > (0));
var state_31587__$1 = state_31587;
if(cljs.core.truth_(inst_31573)){
var statearr_31597_31628 = state_31587__$1;
(statearr_31597_31628[(1)] = (12));

} else {
var statearr_31598_31629 = state_31587__$1;
(statearr_31598_31629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (3))){
var inst_31585 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31587__$1,inst_31585);
} else {
if((state_val_31588 === (12))){
var inst_31547 = (state_31587[(7)]);
var inst_31575 = cljs.core.vec.call(null,inst_31547);
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31587__$1,(15),out,inst_31575);
} else {
if((state_val_31588 === (2))){
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31587__$1,(4),ch);
} else {
if((state_val_31588 === (11))){
var inst_31551 = (state_31587[(9)]);
var inst_31555 = (state_31587[(10)]);
var inst_31565 = (state_31587[(2)]);
var inst_31566 = [];
var inst_31567 = inst_31566.push(inst_31551);
var inst_31547 = inst_31566;
var inst_31548 = inst_31555;
var state_31587__$1 = (function (){var statearr_31599 = state_31587;
(statearr_31599[(11)] = inst_31567);

(statearr_31599[(12)] = inst_31565);

(statearr_31599[(7)] = inst_31547);

(statearr_31599[(8)] = inst_31548);

return statearr_31599;
})();
var statearr_31600_31630 = state_31587__$1;
(statearr_31600_31630[(2)] = null);

(statearr_31600_31630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (9))){
var inst_31547 = (state_31587[(7)]);
var inst_31563 = cljs.core.vec.call(null,inst_31547);
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31587__$1,(11),out,inst_31563);
} else {
if((state_val_31588 === (5))){
var inst_31551 = (state_31587[(9)]);
var inst_31555 = (state_31587[(10)]);
var inst_31548 = (state_31587[(8)]);
var inst_31555__$1 = f.call(null,inst_31551);
var inst_31556 = cljs.core._EQ_.call(null,inst_31555__$1,inst_31548);
var inst_31557 = cljs.core.keyword_identical_QMARK_.call(null,inst_31548,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31558 = (inst_31556) || (inst_31557);
var state_31587__$1 = (function (){var statearr_31601 = state_31587;
(statearr_31601[(10)] = inst_31555__$1);

return statearr_31601;
})();
if(cljs.core.truth_(inst_31558)){
var statearr_31602_31631 = state_31587__$1;
(statearr_31602_31631[(1)] = (8));

} else {
var statearr_31603_31632 = state_31587__$1;
(statearr_31603_31632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (14))){
var inst_31580 = (state_31587[(2)]);
var inst_31581 = cljs.core.async.close_BANG_.call(null,out);
var state_31587__$1 = (function (){var statearr_31605 = state_31587;
(statearr_31605[(13)] = inst_31580);

return statearr_31605;
})();
var statearr_31606_31633 = state_31587__$1;
(statearr_31606_31633[(2)] = inst_31581);

(statearr_31606_31633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (10))){
var inst_31570 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31607_31634 = state_31587__$1;
(statearr_31607_31634[(2)] = inst_31570);

(statearr_31607_31634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31588 === (8))){
var inst_31551 = (state_31587[(9)]);
var inst_31555 = (state_31587[(10)]);
var inst_31547 = (state_31587[(7)]);
var inst_31560 = inst_31547.push(inst_31551);
var tmp31604 = inst_31547;
var inst_31547__$1 = tmp31604;
var inst_31548 = inst_31555;
var state_31587__$1 = (function (){var statearr_31608 = state_31587;
(statearr_31608[(7)] = inst_31547__$1);

(statearr_31608[(8)] = inst_31548);

(statearr_31608[(14)] = inst_31560);

return statearr_31608;
})();
var statearr_31609_31635 = state_31587__$1;
(statearr_31609_31635[(2)] = null);

(statearr_31609_31635[(1)] = (2));


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
});})(c__28844__auto___31621,out))
;
return ((function (switch__28732__auto__,c__28844__auto___31621,out){
return (function() {
var cljs$core$async$state_machine__28733__auto__ = null;
var cljs$core$async$state_machine__28733__auto____0 = (function (){
var statearr_31613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31613[(0)] = cljs$core$async$state_machine__28733__auto__);

(statearr_31613[(1)] = (1));

return statearr_31613;
});
var cljs$core$async$state_machine__28733__auto____1 = (function (state_31587){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_31587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e31614){if((e31614 instanceof Object)){
var ex__28736__auto__ = e31614;
var statearr_31615_31636 = state_31587;
(statearr_31615_31636[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31637 = state_31587;
state_31587 = G__31637;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
cljs$core$async$state_machine__28733__auto__ = function(state_31587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28733__auto____1.call(this,state_31587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28733__auto____0;
cljs$core$async$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28733__auto____1;
return cljs$core$async$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___31621,out))
})();
var state__28846__auto__ = (function (){var statearr_31616 = f__28845__auto__.call(null);
(statearr_31616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___31621);

return statearr_31616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___31621,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1538702792485