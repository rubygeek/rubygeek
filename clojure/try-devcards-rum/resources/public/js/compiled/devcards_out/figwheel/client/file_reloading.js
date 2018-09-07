// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24848__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24848__auto__){
return or__24848__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24848__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34804_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34804_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34809 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34810 = null;
var count__34811 = (0);
var i__34812 = (0);
while(true){
if((i__34812 < count__34811)){
var n = cljs.core._nth.call(null,chunk__34810,i__34812);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34813 = seq__34809;
var G__34814 = chunk__34810;
var G__34815 = count__34811;
var G__34816 = (i__34812 + (1));
seq__34809 = G__34813;
chunk__34810 = G__34814;
count__34811 = G__34815;
i__34812 = G__34816;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34809);
if(temp__4657__auto__){
var seq__34809__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34809__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34809__$1);
var G__34817 = cljs.core.chunk_rest.call(null,seq__34809__$1);
var G__34818 = c__25659__auto__;
var G__34819 = cljs.core.count.call(null,c__25659__auto__);
var G__34820 = (0);
seq__34809 = G__34817;
chunk__34810 = G__34818;
count__34811 = G__34819;
i__34812 = G__34820;
continue;
} else {
var n = cljs.core.first.call(null,seq__34809__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34821 = cljs.core.next.call(null,seq__34809__$1);
var G__34822 = null;
var G__34823 = (0);
var G__34824 = (0);
seq__34809 = G__34821;
chunk__34810 = G__34822;
count__34811 = G__34823;
i__34812 = G__34824;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34875_34886 = cljs.core.seq.call(null,deps);
var chunk__34876_34887 = null;
var count__34877_34888 = (0);
var i__34878_34889 = (0);
while(true){
if((i__34878_34889 < count__34877_34888)){
var dep_34890 = cljs.core._nth.call(null,chunk__34876_34887,i__34878_34889);
topo_sort_helper_STAR_.call(null,dep_34890,(depth + (1)),state);

var G__34891 = seq__34875_34886;
var G__34892 = chunk__34876_34887;
var G__34893 = count__34877_34888;
var G__34894 = (i__34878_34889 + (1));
seq__34875_34886 = G__34891;
chunk__34876_34887 = G__34892;
count__34877_34888 = G__34893;
i__34878_34889 = G__34894;
continue;
} else {
var temp__4657__auto___34895 = cljs.core.seq.call(null,seq__34875_34886);
if(temp__4657__auto___34895){
var seq__34875_34896__$1 = temp__4657__auto___34895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34875_34896__$1)){
var c__25659__auto___34897 = cljs.core.chunk_first.call(null,seq__34875_34896__$1);
var G__34898 = cljs.core.chunk_rest.call(null,seq__34875_34896__$1);
var G__34899 = c__25659__auto___34897;
var G__34900 = cljs.core.count.call(null,c__25659__auto___34897);
var G__34901 = (0);
seq__34875_34886 = G__34898;
chunk__34876_34887 = G__34899;
count__34877_34888 = G__34900;
i__34878_34889 = G__34901;
continue;
} else {
var dep_34902 = cljs.core.first.call(null,seq__34875_34896__$1);
topo_sort_helper_STAR_.call(null,dep_34902,(depth + (1)),state);

var G__34903 = cljs.core.next.call(null,seq__34875_34896__$1);
var G__34904 = null;
var G__34905 = (0);
var G__34906 = (0);
seq__34875_34886 = G__34903;
chunk__34876_34887 = G__34904;
count__34877_34888 = G__34905;
i__34878_34889 = G__34906;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34879){
var vec__34883 = p__34879;
var seq__34884 = cljs.core.seq.call(null,vec__34883);
var first__34885 = cljs.core.first.call(null,seq__34884);
var seq__34884__$1 = cljs.core.next.call(null,seq__34884);
var x = first__34885;
var xs = seq__34884__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34883,seq__34884,first__34885,seq__34884__$1,x,xs,get_deps__$1){
return (function (p1__34825_SHARP_){
return clojure.set.difference.call(null,p1__34825_SHARP_,x);
});})(vec__34883,seq__34884,first__34885,seq__34884__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34919 = cljs.core.seq.call(null,provides);
var chunk__34920 = null;
var count__34921 = (0);
var i__34922 = (0);
while(true){
if((i__34922 < count__34921)){
var prov = cljs.core._nth.call(null,chunk__34920,i__34922);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34923_34931 = cljs.core.seq.call(null,requires);
var chunk__34924_34932 = null;
var count__34925_34933 = (0);
var i__34926_34934 = (0);
while(true){
if((i__34926_34934 < count__34925_34933)){
var req_34935 = cljs.core._nth.call(null,chunk__34924_34932,i__34926_34934);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34935,prov);

var G__34936 = seq__34923_34931;
var G__34937 = chunk__34924_34932;
var G__34938 = count__34925_34933;
var G__34939 = (i__34926_34934 + (1));
seq__34923_34931 = G__34936;
chunk__34924_34932 = G__34937;
count__34925_34933 = G__34938;
i__34926_34934 = G__34939;
continue;
} else {
var temp__4657__auto___34940 = cljs.core.seq.call(null,seq__34923_34931);
if(temp__4657__auto___34940){
var seq__34923_34941__$1 = temp__4657__auto___34940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34923_34941__$1)){
var c__25659__auto___34942 = cljs.core.chunk_first.call(null,seq__34923_34941__$1);
var G__34943 = cljs.core.chunk_rest.call(null,seq__34923_34941__$1);
var G__34944 = c__25659__auto___34942;
var G__34945 = cljs.core.count.call(null,c__25659__auto___34942);
var G__34946 = (0);
seq__34923_34931 = G__34943;
chunk__34924_34932 = G__34944;
count__34925_34933 = G__34945;
i__34926_34934 = G__34946;
continue;
} else {
var req_34947 = cljs.core.first.call(null,seq__34923_34941__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34947,prov);

var G__34948 = cljs.core.next.call(null,seq__34923_34941__$1);
var G__34949 = null;
var G__34950 = (0);
var G__34951 = (0);
seq__34923_34931 = G__34948;
chunk__34924_34932 = G__34949;
count__34925_34933 = G__34950;
i__34926_34934 = G__34951;
continue;
}
} else {
}
}
break;
}

var G__34952 = seq__34919;
var G__34953 = chunk__34920;
var G__34954 = count__34921;
var G__34955 = (i__34922 + (1));
seq__34919 = G__34952;
chunk__34920 = G__34953;
count__34921 = G__34954;
i__34922 = G__34955;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34919);
if(temp__4657__auto__){
var seq__34919__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34919__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34919__$1);
var G__34956 = cljs.core.chunk_rest.call(null,seq__34919__$1);
var G__34957 = c__25659__auto__;
var G__34958 = cljs.core.count.call(null,c__25659__auto__);
var G__34959 = (0);
seq__34919 = G__34956;
chunk__34920 = G__34957;
count__34921 = G__34958;
i__34922 = G__34959;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34919__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34927_34960 = cljs.core.seq.call(null,requires);
var chunk__34928_34961 = null;
var count__34929_34962 = (0);
var i__34930_34963 = (0);
while(true){
if((i__34930_34963 < count__34929_34962)){
var req_34964 = cljs.core._nth.call(null,chunk__34928_34961,i__34930_34963);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34964,prov);

var G__34965 = seq__34927_34960;
var G__34966 = chunk__34928_34961;
var G__34967 = count__34929_34962;
var G__34968 = (i__34930_34963 + (1));
seq__34927_34960 = G__34965;
chunk__34928_34961 = G__34966;
count__34929_34962 = G__34967;
i__34930_34963 = G__34968;
continue;
} else {
var temp__4657__auto___34969__$1 = cljs.core.seq.call(null,seq__34927_34960);
if(temp__4657__auto___34969__$1){
var seq__34927_34970__$1 = temp__4657__auto___34969__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34927_34970__$1)){
var c__25659__auto___34971 = cljs.core.chunk_first.call(null,seq__34927_34970__$1);
var G__34972 = cljs.core.chunk_rest.call(null,seq__34927_34970__$1);
var G__34973 = c__25659__auto___34971;
var G__34974 = cljs.core.count.call(null,c__25659__auto___34971);
var G__34975 = (0);
seq__34927_34960 = G__34972;
chunk__34928_34961 = G__34973;
count__34929_34962 = G__34974;
i__34930_34963 = G__34975;
continue;
} else {
var req_34976 = cljs.core.first.call(null,seq__34927_34970__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34976,prov);

var G__34977 = cljs.core.next.call(null,seq__34927_34970__$1);
var G__34978 = null;
var G__34979 = (0);
var G__34980 = (0);
seq__34927_34960 = G__34977;
chunk__34928_34961 = G__34978;
count__34929_34962 = G__34979;
i__34930_34963 = G__34980;
continue;
}
} else {
}
}
break;
}

var G__34981 = cljs.core.next.call(null,seq__34919__$1);
var G__34982 = null;
var G__34983 = (0);
var G__34984 = (0);
seq__34919 = G__34981;
chunk__34920 = G__34982;
count__34921 = G__34983;
i__34922 = G__34984;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34989_34993 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34990_34994 = null;
var count__34991_34995 = (0);
var i__34992_34996 = (0);
while(true){
if((i__34992_34996 < count__34991_34995)){
var ns_34997 = cljs.core._nth.call(null,chunk__34990_34994,i__34992_34996);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34997);

var G__34998 = seq__34989_34993;
var G__34999 = chunk__34990_34994;
var G__35000 = count__34991_34995;
var G__35001 = (i__34992_34996 + (1));
seq__34989_34993 = G__34998;
chunk__34990_34994 = G__34999;
count__34991_34995 = G__35000;
i__34992_34996 = G__35001;
continue;
} else {
var temp__4657__auto___35002 = cljs.core.seq.call(null,seq__34989_34993);
if(temp__4657__auto___35002){
var seq__34989_35003__$1 = temp__4657__auto___35002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34989_35003__$1)){
var c__25659__auto___35004 = cljs.core.chunk_first.call(null,seq__34989_35003__$1);
var G__35005 = cljs.core.chunk_rest.call(null,seq__34989_35003__$1);
var G__35006 = c__25659__auto___35004;
var G__35007 = cljs.core.count.call(null,c__25659__auto___35004);
var G__35008 = (0);
seq__34989_34993 = G__35005;
chunk__34990_34994 = G__35006;
count__34991_34995 = G__35007;
i__34992_34996 = G__35008;
continue;
} else {
var ns_35009 = cljs.core.first.call(null,seq__34989_35003__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35009);

var G__35010 = cljs.core.next.call(null,seq__34989_35003__$1);
var G__35011 = null;
var G__35012 = (0);
var G__35013 = (0);
seq__34989_34993 = G__35010;
chunk__34990_34994 = G__35011;
count__34991_34995 = G__35012;
i__34992_34996 = G__35013;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24848__auto__ = goog.require__;
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35014__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35015__i = 0, G__35015__a = new Array(arguments.length -  0);
while (G__35015__i < G__35015__a.length) {G__35015__a[G__35015__i] = arguments[G__35015__i + 0]; ++G__35015__i;}
  args = new cljs.core.IndexedSeq(G__35015__a,0);
} 
return G__35014__delegate.call(this,args);};
G__35014.cljs$lang$maxFixedArity = 0;
G__35014.cljs$lang$applyTo = (function (arglist__35016){
var args = cljs.core.seq(arglist__35016);
return G__35014__delegate(args);
});
G__35014.cljs$core$IFn$_invoke$arity$variadic = G__35014__delegate;
return G__35014;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35017 = cljs.core._EQ_;
var expr__35018 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35017.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35018))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35017,expr__35018){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35017,expr__35018))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35017,expr__35018){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35020){if((e35020 instanceof Error)){
var e = e35020;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35020;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35017,expr__35018))
} else {
if(cljs.core.truth_(pred__35017.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35018))){
return ((function (pred__35017,expr__35018){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35017,expr__35018){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35017,expr__35018))
);

return deferred.addErrback(((function (deferred,pred__35017,expr__35018){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35017,expr__35018))
);
});
;})(pred__35017,expr__35018))
} else {
if(cljs.core.truth_(pred__35017.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35018))){
return ((function (pred__35017,expr__35018){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35021){if((e35021 instanceof Error)){
var e = e35021;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35021;

}
}})());
});
;})(pred__35017,expr__35018))
} else {
return ((function (pred__35017,expr__35018){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35017,expr__35018))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35022,callback){
var map__35025 = p__35022;
var map__35025__$1 = ((((!((map__35025 == null)))?((((map__35025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35025):map__35025);
var file_msg = map__35025__$1;
var request_url = cljs.core.get.call(null,map__35025__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35025,map__35025__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35025,map__35025__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__){
return (function (state_35049){
var state_val_35050 = (state_35049[(1)]);
if((state_val_35050 === (7))){
var inst_35045 = (state_35049[(2)]);
var state_35049__$1 = state_35049;
var statearr_35051_35071 = state_35049__$1;
(statearr_35051_35071[(2)] = inst_35045);

(statearr_35051_35071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (1))){
var state_35049__$1 = state_35049;
var statearr_35052_35072 = state_35049__$1;
(statearr_35052_35072[(2)] = null);

(statearr_35052_35072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (4))){
var inst_35029 = (state_35049[(7)]);
var inst_35029__$1 = (state_35049[(2)]);
var state_35049__$1 = (function (){var statearr_35053 = state_35049;
(statearr_35053[(7)] = inst_35029__$1);

return statearr_35053;
})();
if(cljs.core.truth_(inst_35029__$1)){
var statearr_35054_35073 = state_35049__$1;
(statearr_35054_35073[(1)] = (5));

} else {
var statearr_35055_35074 = state_35049__$1;
(statearr_35055_35074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (6))){
var state_35049__$1 = state_35049;
var statearr_35056_35075 = state_35049__$1;
(statearr_35056_35075[(2)] = null);

(statearr_35056_35075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (3))){
var inst_35047 = (state_35049[(2)]);
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35049__$1,inst_35047);
} else {
if((state_val_35050 === (2))){
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35049__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35050 === (11))){
var inst_35041 = (state_35049[(2)]);
var state_35049__$1 = (function (){var statearr_35057 = state_35049;
(statearr_35057[(8)] = inst_35041);

return statearr_35057;
})();
var statearr_35058_35076 = state_35049__$1;
(statearr_35058_35076[(2)] = null);

(statearr_35058_35076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (9))){
var inst_35033 = (state_35049[(9)]);
var inst_35035 = (state_35049[(10)]);
var inst_35037 = inst_35035.call(null,inst_35033);
var state_35049__$1 = state_35049;
var statearr_35059_35077 = state_35049__$1;
(statearr_35059_35077[(2)] = inst_35037);

(statearr_35059_35077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (5))){
var inst_35029 = (state_35049[(7)]);
var inst_35031 = figwheel.client.file_reloading.blocking_load.call(null,inst_35029);
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35049__$1,(8),inst_35031);
} else {
if((state_val_35050 === (10))){
var inst_35033 = (state_35049[(9)]);
var inst_35039 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35033);
var state_35049__$1 = state_35049;
var statearr_35060_35078 = state_35049__$1;
(statearr_35060_35078[(2)] = inst_35039);

(statearr_35060_35078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (8))){
var inst_35035 = (state_35049[(10)]);
var inst_35029 = (state_35049[(7)]);
var inst_35033 = (state_35049[(2)]);
var inst_35034 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35035__$1 = cljs.core.get.call(null,inst_35034,inst_35029);
var state_35049__$1 = (function (){var statearr_35061 = state_35049;
(statearr_35061[(9)] = inst_35033);

(statearr_35061[(10)] = inst_35035__$1);

return statearr_35061;
})();
if(cljs.core.truth_(inst_35035__$1)){
var statearr_35062_35079 = state_35049__$1;
(statearr_35062_35079[(1)] = (9));

} else {
var statearr_35063_35080 = state_35049__$1;
(statearr_35063_35080[(1)] = (10));

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
});})(c__28805__auto__))
;
return ((function (switch__28693__auto__,c__28805__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28694__auto__ = null;
var figwheel$client$file_reloading$state_machine__28694__auto____0 = (function (){
var statearr_35067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35067[(0)] = figwheel$client$file_reloading$state_machine__28694__auto__);

(statearr_35067[(1)] = (1));

return statearr_35067;
});
var figwheel$client$file_reloading$state_machine__28694__auto____1 = (function (state_35049){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_35049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e35068){if((e35068 instanceof Object)){
var ex__28697__auto__ = e35068;
var statearr_35069_35081 = state_35049;
(statearr_35069_35081[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35082 = state_35049;
state_35049 = G__35082;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28694__auto__ = function(state_35049){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28694__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28694__auto____1.call(this,state_35049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28694__auto____0;
figwheel$client$file_reloading$state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28694__auto____1;
return figwheel$client$file_reloading$state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__))
})();
var state__28807__auto__ = (function (){var statearr_35070 = f__28806__auto__.call(null);
(statearr_35070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_35070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__))
);

return c__28805__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35083,callback){
var map__35086 = p__35083;
var map__35086__$1 = ((((!((map__35086 == null)))?((((map__35086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35086):map__35086);
var file_msg = map__35086__$1;
var namespace = cljs.core.get.call(null,map__35086__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35086,map__35086__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35086,map__35086__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35088){
var map__35091 = p__35088;
var map__35091__$1 = ((((!((map__35091 == null)))?((((map__35091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35091):map__35091);
var file_msg = map__35091__$1;
var namespace = cljs.core.get.call(null,map__35091__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35093){
var map__35096 = p__35093;
var map__35096__$1 = ((((!((map__35096 == null)))?((((map__35096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35096):map__35096);
var file_msg = map__35096__$1;
var namespace = cljs.core.get.call(null,map__35096__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24836__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24836__auto__){
var or__24848__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto__)){
return or__24848__auto__;
} else {
var or__24848__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24848__auto____$1)){
return or__24848__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24836__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35098,callback){
var map__35101 = p__35098;
var map__35101__$1 = ((((!((map__35101 == null)))?((((map__35101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35101):map__35101);
var file_msg = map__35101__$1;
var request_url = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28805__auto___35205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto___35205,out){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto___35205,out){
return (function (state_35187){
var state_val_35188 = (state_35187[(1)]);
if((state_val_35188 === (1))){
var inst_35161 = cljs.core.seq.call(null,files);
var inst_35162 = cljs.core.first.call(null,inst_35161);
var inst_35163 = cljs.core.next.call(null,inst_35161);
var inst_35164 = files;
var state_35187__$1 = (function (){var statearr_35189 = state_35187;
(statearr_35189[(7)] = inst_35162);

(statearr_35189[(8)] = inst_35164);

(statearr_35189[(9)] = inst_35163);

return statearr_35189;
})();
var statearr_35190_35206 = state_35187__$1;
(statearr_35190_35206[(2)] = null);

(statearr_35190_35206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (2))){
var inst_35164 = (state_35187[(8)]);
var inst_35170 = (state_35187[(10)]);
var inst_35169 = cljs.core.seq.call(null,inst_35164);
var inst_35170__$1 = cljs.core.first.call(null,inst_35169);
var inst_35171 = cljs.core.next.call(null,inst_35169);
var inst_35172 = (inst_35170__$1 == null);
var inst_35173 = cljs.core.not.call(null,inst_35172);
var state_35187__$1 = (function (){var statearr_35191 = state_35187;
(statearr_35191[(10)] = inst_35170__$1);

(statearr_35191[(11)] = inst_35171);

return statearr_35191;
})();
if(inst_35173){
var statearr_35192_35207 = state_35187__$1;
(statearr_35192_35207[(1)] = (4));

} else {
var statearr_35193_35208 = state_35187__$1;
(statearr_35193_35208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (3))){
var inst_35185 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35187__$1,inst_35185);
} else {
if((state_val_35188 === (4))){
var inst_35170 = (state_35187[(10)]);
var inst_35175 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35170);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35187__$1,(7),inst_35175);
} else {
if((state_val_35188 === (5))){
var inst_35181 = cljs.core.async.close_BANG_.call(null,out);
var state_35187__$1 = state_35187;
var statearr_35194_35209 = state_35187__$1;
(statearr_35194_35209[(2)] = inst_35181);

(statearr_35194_35209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (6))){
var inst_35183 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35195_35210 = state_35187__$1;
(statearr_35195_35210[(2)] = inst_35183);

(statearr_35195_35210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (7))){
var inst_35171 = (state_35187[(11)]);
var inst_35177 = (state_35187[(2)]);
var inst_35178 = cljs.core.async.put_BANG_.call(null,out,inst_35177);
var inst_35164 = inst_35171;
var state_35187__$1 = (function (){var statearr_35196 = state_35187;
(statearr_35196[(8)] = inst_35164);

(statearr_35196[(12)] = inst_35178);

return statearr_35196;
})();
var statearr_35197_35211 = state_35187__$1;
(statearr_35197_35211[(2)] = null);

(statearr_35197_35211[(1)] = (2));


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
});})(c__28805__auto___35205,out))
;
return ((function (switch__28693__auto__,c__28805__auto___35205,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto____0 = (function (){
var statearr_35201 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35201[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto__);

(statearr_35201[(1)] = (1));

return statearr_35201;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto____1 = (function (state_35187){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_35187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e35202){if((e35202 instanceof Object)){
var ex__28697__auto__ = e35202;
var statearr_35203_35212 = state_35187;
(statearr_35203_35212[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35213 = state_35187;
state_35187 = G__35213;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto__ = function(state_35187){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto____1.call(this,state_35187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto___35205,out))
})();
var state__28807__auto__ = (function (){var statearr_35204 = f__28806__auto__.call(null);
(statearr_35204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto___35205);

return statearr_35204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto___35205,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35214,opts){
var map__35218 = p__35214;
var map__35218__$1 = ((((!((map__35218 == null)))?((((map__35218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35218):map__35218);
var eval_body__$1 = cljs.core.get.call(null,map__35218__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35218__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24836__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24836__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24836__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35220){var e = e35220;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35221_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35221_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35230){
var vec__35231 = p__35230;
var k = cljs.core.nth.call(null,vec__35231,(0),null);
var v = cljs.core.nth.call(null,vec__35231,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35234){
var vec__35235 = p__35234;
var k = cljs.core.nth.call(null,vec__35235,(0),null);
var v = cljs.core.nth.call(null,vec__35235,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35241,p__35242){
var map__35489 = p__35241;
var map__35489__$1 = ((((!((map__35489 == null)))?((((map__35489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35489):map__35489);
var opts = map__35489__$1;
var before_jsload = cljs.core.get.call(null,map__35489__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35489__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35489__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35490 = p__35242;
var map__35490__$1 = ((((!((map__35490 == null)))?((((map__35490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35490):map__35490);
var msg = map__35490__$1;
var files = cljs.core.get.call(null,map__35490__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35490__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35490__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28806__auto__ = (function (){var switch__28693__auto__ = ((function (c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35643){
var state_val_35644 = (state_35643[(1)]);
if((state_val_35644 === (7))){
var inst_35507 = (state_35643[(7)]);
var inst_35506 = (state_35643[(8)]);
var inst_35504 = (state_35643[(9)]);
var inst_35505 = (state_35643[(10)]);
var inst_35512 = cljs.core._nth.call(null,inst_35505,inst_35507);
var inst_35513 = figwheel.client.file_reloading.eval_body.call(null,inst_35512,opts);
var inst_35514 = (inst_35507 + (1));
var tmp35645 = inst_35506;
var tmp35646 = inst_35504;
var tmp35647 = inst_35505;
var inst_35504__$1 = tmp35646;
var inst_35505__$1 = tmp35647;
var inst_35506__$1 = tmp35645;
var inst_35507__$1 = inst_35514;
var state_35643__$1 = (function (){var statearr_35648 = state_35643;
(statearr_35648[(7)] = inst_35507__$1);

(statearr_35648[(8)] = inst_35506__$1);

(statearr_35648[(9)] = inst_35504__$1);

(statearr_35648[(10)] = inst_35505__$1);

(statearr_35648[(11)] = inst_35513);

return statearr_35648;
})();
var statearr_35649_35735 = state_35643__$1;
(statearr_35649_35735[(2)] = null);

(statearr_35649_35735[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (20))){
var inst_35547 = (state_35643[(12)]);
var inst_35555 = figwheel.client.file_reloading.sort_files.call(null,inst_35547);
var state_35643__$1 = state_35643;
var statearr_35650_35736 = state_35643__$1;
(statearr_35650_35736[(2)] = inst_35555);

(statearr_35650_35736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (27))){
var state_35643__$1 = state_35643;
var statearr_35651_35737 = state_35643__$1;
(statearr_35651_35737[(2)] = null);

(statearr_35651_35737[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (1))){
var inst_35496 = (state_35643[(13)]);
var inst_35493 = before_jsload.call(null,files);
var inst_35494 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35495 = (function (){return ((function (inst_35496,inst_35493,inst_35494,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35238_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35238_SHARP_);
});
;})(inst_35496,inst_35493,inst_35494,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35496__$1 = cljs.core.filter.call(null,inst_35495,files);
var inst_35497 = cljs.core.not_empty.call(null,inst_35496__$1);
var state_35643__$1 = (function (){var statearr_35652 = state_35643;
(statearr_35652[(14)] = inst_35493);

(statearr_35652[(13)] = inst_35496__$1);

(statearr_35652[(15)] = inst_35494);

return statearr_35652;
})();
if(cljs.core.truth_(inst_35497)){
var statearr_35653_35738 = state_35643__$1;
(statearr_35653_35738[(1)] = (2));

} else {
var statearr_35654_35739 = state_35643__$1;
(statearr_35654_35739[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (24))){
var state_35643__$1 = state_35643;
var statearr_35655_35740 = state_35643__$1;
(statearr_35655_35740[(2)] = null);

(statearr_35655_35740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (39))){
var inst_35597 = (state_35643[(16)]);
var state_35643__$1 = state_35643;
var statearr_35656_35741 = state_35643__$1;
(statearr_35656_35741[(2)] = inst_35597);

(statearr_35656_35741[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (46))){
var inst_35638 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35657_35742 = state_35643__$1;
(statearr_35657_35742[(2)] = inst_35638);

(statearr_35657_35742[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (4))){
var inst_35541 = (state_35643[(2)]);
var inst_35542 = cljs.core.List.EMPTY;
var inst_35543 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35542);
var inst_35544 = (function (){return ((function (inst_35541,inst_35542,inst_35543,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35239_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35239_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35239_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35239_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_35541,inst_35542,inst_35543,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35545 = cljs.core.filter.call(null,inst_35544,files);
var inst_35546 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35547 = cljs.core.concat.call(null,inst_35545,inst_35546);
var state_35643__$1 = (function (){var statearr_35658 = state_35643;
(statearr_35658[(12)] = inst_35547);

(statearr_35658[(17)] = inst_35543);

(statearr_35658[(18)] = inst_35541);

return statearr_35658;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35659_35743 = state_35643__$1;
(statearr_35659_35743[(1)] = (16));

} else {
var statearr_35660_35744 = state_35643__$1;
(statearr_35660_35744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (15))){
var inst_35531 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35661_35745 = state_35643__$1;
(statearr_35661_35745[(2)] = inst_35531);

(statearr_35661_35745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (21))){
var inst_35557 = (state_35643[(19)]);
var inst_35557__$1 = (state_35643[(2)]);
var inst_35558 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35557__$1);
var state_35643__$1 = (function (){var statearr_35662 = state_35643;
(statearr_35662[(19)] = inst_35557__$1);

return statearr_35662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35643__$1,(22),inst_35558);
} else {
if((state_val_35644 === (31))){
var inst_35641 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35643__$1,inst_35641);
} else {
if((state_val_35644 === (32))){
var inst_35597 = (state_35643[(16)]);
var inst_35602 = inst_35597.cljs$lang$protocol_mask$partition0$;
var inst_35603 = (inst_35602 & (64));
var inst_35604 = inst_35597.cljs$core$ISeq$;
var inst_35605 = (inst_35603) || (inst_35604);
var state_35643__$1 = state_35643;
if(cljs.core.truth_(inst_35605)){
var statearr_35663_35746 = state_35643__$1;
(statearr_35663_35746[(1)] = (35));

} else {
var statearr_35664_35747 = state_35643__$1;
(statearr_35664_35747[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (40))){
var inst_35618 = (state_35643[(20)]);
var inst_35617 = (state_35643[(2)]);
var inst_35618__$1 = cljs.core.get.call(null,inst_35617,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35619 = cljs.core.get.call(null,inst_35617,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35620 = cljs.core.not_empty.call(null,inst_35618__$1);
var state_35643__$1 = (function (){var statearr_35665 = state_35643;
(statearr_35665[(20)] = inst_35618__$1);

(statearr_35665[(21)] = inst_35619);

return statearr_35665;
})();
if(cljs.core.truth_(inst_35620)){
var statearr_35666_35748 = state_35643__$1;
(statearr_35666_35748[(1)] = (41));

} else {
var statearr_35667_35749 = state_35643__$1;
(statearr_35667_35749[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (33))){
var state_35643__$1 = state_35643;
var statearr_35668_35750 = state_35643__$1;
(statearr_35668_35750[(2)] = false);

(statearr_35668_35750[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (13))){
var inst_35517 = (state_35643[(22)]);
var inst_35521 = cljs.core.chunk_first.call(null,inst_35517);
var inst_35522 = cljs.core.chunk_rest.call(null,inst_35517);
var inst_35523 = cljs.core.count.call(null,inst_35521);
var inst_35504 = inst_35522;
var inst_35505 = inst_35521;
var inst_35506 = inst_35523;
var inst_35507 = (0);
var state_35643__$1 = (function (){var statearr_35669 = state_35643;
(statearr_35669[(7)] = inst_35507);

(statearr_35669[(8)] = inst_35506);

(statearr_35669[(9)] = inst_35504);

(statearr_35669[(10)] = inst_35505);

return statearr_35669;
})();
var statearr_35670_35751 = state_35643__$1;
(statearr_35670_35751[(2)] = null);

(statearr_35670_35751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (22))){
var inst_35557 = (state_35643[(19)]);
var inst_35560 = (state_35643[(23)]);
var inst_35561 = (state_35643[(24)]);
var inst_35565 = (state_35643[(25)]);
var inst_35560__$1 = (state_35643[(2)]);
var inst_35561__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35560__$1);
var inst_35562 = (function (){var all_files = inst_35557;
var res_SINGLEQUOTE_ = inst_35560__$1;
var res = inst_35561__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35557,inst_35560,inst_35561,inst_35565,inst_35560__$1,inst_35561__$1,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35240_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35240_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35557,inst_35560,inst_35561,inst_35565,inst_35560__$1,inst_35561__$1,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35563 = cljs.core.filter.call(null,inst_35562,inst_35560__$1);
var inst_35564 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35565__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35564);
var inst_35566 = cljs.core.not_empty.call(null,inst_35565__$1);
var state_35643__$1 = (function (){var statearr_35671 = state_35643;
(statearr_35671[(23)] = inst_35560__$1);

(statearr_35671[(26)] = inst_35563);

(statearr_35671[(24)] = inst_35561__$1);

(statearr_35671[(25)] = inst_35565__$1);

return statearr_35671;
})();
if(cljs.core.truth_(inst_35566)){
var statearr_35672_35752 = state_35643__$1;
(statearr_35672_35752[(1)] = (23));

} else {
var statearr_35673_35753 = state_35643__$1;
(statearr_35673_35753[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (36))){
var state_35643__$1 = state_35643;
var statearr_35674_35754 = state_35643__$1;
(statearr_35674_35754[(2)] = false);

(statearr_35674_35754[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (41))){
var inst_35618 = (state_35643[(20)]);
var inst_35622 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35623 = cljs.core.map.call(null,inst_35622,inst_35618);
var inst_35624 = cljs.core.pr_str.call(null,inst_35623);
var inst_35625 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35624)].join('');
var inst_35626 = figwheel.client.utils.log.call(null,inst_35625);
var state_35643__$1 = state_35643;
var statearr_35675_35755 = state_35643__$1;
(statearr_35675_35755[(2)] = inst_35626);

(statearr_35675_35755[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (43))){
var inst_35619 = (state_35643[(21)]);
var inst_35629 = (state_35643[(2)]);
var inst_35630 = cljs.core.not_empty.call(null,inst_35619);
var state_35643__$1 = (function (){var statearr_35676 = state_35643;
(statearr_35676[(27)] = inst_35629);

return statearr_35676;
})();
if(cljs.core.truth_(inst_35630)){
var statearr_35677_35756 = state_35643__$1;
(statearr_35677_35756[(1)] = (44));

} else {
var statearr_35678_35757 = state_35643__$1;
(statearr_35678_35757[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (29))){
var inst_35557 = (state_35643[(19)]);
var inst_35560 = (state_35643[(23)]);
var inst_35597 = (state_35643[(16)]);
var inst_35563 = (state_35643[(26)]);
var inst_35561 = (state_35643[(24)]);
var inst_35565 = (state_35643[(25)]);
var inst_35593 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35596 = (function (){var all_files = inst_35557;
var res_SINGLEQUOTE_ = inst_35560;
var res = inst_35561;
var files_not_loaded = inst_35563;
var dependencies_that_loaded = inst_35565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35557,inst_35560,inst_35597,inst_35563,inst_35561,inst_35565,inst_35593,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35595){
var map__35679 = p__35595;
var map__35679__$1 = ((((!((map__35679 == null)))?((((map__35679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35679):map__35679);
var namespace = cljs.core.get.call(null,map__35679__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35557,inst_35560,inst_35597,inst_35563,inst_35561,inst_35565,inst_35593,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35597__$1 = cljs.core.group_by.call(null,inst_35596,inst_35563);
var inst_35599 = (inst_35597__$1 == null);
var inst_35600 = cljs.core.not.call(null,inst_35599);
var state_35643__$1 = (function (){var statearr_35681 = state_35643;
(statearr_35681[(16)] = inst_35597__$1);

(statearr_35681[(28)] = inst_35593);

return statearr_35681;
})();
if(inst_35600){
var statearr_35682_35758 = state_35643__$1;
(statearr_35682_35758[(1)] = (32));

} else {
var statearr_35683_35759 = state_35643__$1;
(statearr_35683_35759[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (44))){
var inst_35619 = (state_35643[(21)]);
var inst_35632 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35619);
var inst_35633 = cljs.core.pr_str.call(null,inst_35632);
var inst_35634 = [cljs.core.str("not required: "),cljs.core.str(inst_35633)].join('');
var inst_35635 = figwheel.client.utils.log.call(null,inst_35634);
var state_35643__$1 = state_35643;
var statearr_35684_35760 = state_35643__$1;
(statearr_35684_35760[(2)] = inst_35635);

(statearr_35684_35760[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (6))){
var inst_35538 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35685_35761 = state_35643__$1;
(statearr_35685_35761[(2)] = inst_35538);

(statearr_35685_35761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (28))){
var inst_35563 = (state_35643[(26)]);
var inst_35590 = (state_35643[(2)]);
var inst_35591 = cljs.core.not_empty.call(null,inst_35563);
var state_35643__$1 = (function (){var statearr_35686 = state_35643;
(statearr_35686[(29)] = inst_35590);

return statearr_35686;
})();
if(cljs.core.truth_(inst_35591)){
var statearr_35687_35762 = state_35643__$1;
(statearr_35687_35762[(1)] = (29));

} else {
var statearr_35688_35763 = state_35643__$1;
(statearr_35688_35763[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (25))){
var inst_35561 = (state_35643[(24)]);
var inst_35577 = (state_35643[(2)]);
var inst_35578 = cljs.core.not_empty.call(null,inst_35561);
var state_35643__$1 = (function (){var statearr_35689 = state_35643;
(statearr_35689[(30)] = inst_35577);

return statearr_35689;
})();
if(cljs.core.truth_(inst_35578)){
var statearr_35690_35764 = state_35643__$1;
(statearr_35690_35764[(1)] = (26));

} else {
var statearr_35691_35765 = state_35643__$1;
(statearr_35691_35765[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (34))){
var inst_35612 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
if(cljs.core.truth_(inst_35612)){
var statearr_35692_35766 = state_35643__$1;
(statearr_35692_35766[(1)] = (38));

} else {
var statearr_35693_35767 = state_35643__$1;
(statearr_35693_35767[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (17))){
var state_35643__$1 = state_35643;
var statearr_35694_35768 = state_35643__$1;
(statearr_35694_35768[(2)] = recompile_dependents);

(statearr_35694_35768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (3))){
var state_35643__$1 = state_35643;
var statearr_35695_35769 = state_35643__$1;
(statearr_35695_35769[(2)] = null);

(statearr_35695_35769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (12))){
var inst_35534 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35696_35770 = state_35643__$1;
(statearr_35696_35770[(2)] = inst_35534);

(statearr_35696_35770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (2))){
var inst_35496 = (state_35643[(13)]);
var inst_35503 = cljs.core.seq.call(null,inst_35496);
var inst_35504 = inst_35503;
var inst_35505 = null;
var inst_35506 = (0);
var inst_35507 = (0);
var state_35643__$1 = (function (){var statearr_35697 = state_35643;
(statearr_35697[(7)] = inst_35507);

(statearr_35697[(8)] = inst_35506);

(statearr_35697[(9)] = inst_35504);

(statearr_35697[(10)] = inst_35505);

return statearr_35697;
})();
var statearr_35698_35771 = state_35643__$1;
(statearr_35698_35771[(2)] = null);

(statearr_35698_35771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (23))){
var inst_35557 = (state_35643[(19)]);
var inst_35560 = (state_35643[(23)]);
var inst_35563 = (state_35643[(26)]);
var inst_35561 = (state_35643[(24)]);
var inst_35565 = (state_35643[(25)]);
var inst_35568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35570 = (function (){var all_files = inst_35557;
var res_SINGLEQUOTE_ = inst_35560;
var res = inst_35561;
var files_not_loaded = inst_35563;
var dependencies_that_loaded = inst_35565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35557,inst_35560,inst_35563,inst_35561,inst_35565,inst_35568,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35569){
var map__35699 = p__35569;
var map__35699__$1 = ((((!((map__35699 == null)))?((((map__35699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35699):map__35699);
var request_url = cljs.core.get.call(null,map__35699__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35557,inst_35560,inst_35563,inst_35561,inst_35565,inst_35568,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35571 = cljs.core.reverse.call(null,inst_35565);
var inst_35572 = cljs.core.map.call(null,inst_35570,inst_35571);
var inst_35573 = cljs.core.pr_str.call(null,inst_35572);
var inst_35574 = figwheel.client.utils.log.call(null,inst_35573);
var state_35643__$1 = (function (){var statearr_35701 = state_35643;
(statearr_35701[(31)] = inst_35568);

return statearr_35701;
})();
var statearr_35702_35772 = state_35643__$1;
(statearr_35702_35772[(2)] = inst_35574);

(statearr_35702_35772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (35))){
var state_35643__$1 = state_35643;
var statearr_35703_35773 = state_35643__$1;
(statearr_35703_35773[(2)] = true);

(statearr_35703_35773[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (19))){
var inst_35547 = (state_35643[(12)]);
var inst_35553 = figwheel.client.file_reloading.expand_files.call(null,inst_35547);
var state_35643__$1 = state_35643;
var statearr_35704_35774 = state_35643__$1;
(statearr_35704_35774[(2)] = inst_35553);

(statearr_35704_35774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (11))){
var state_35643__$1 = state_35643;
var statearr_35705_35775 = state_35643__$1;
(statearr_35705_35775[(2)] = null);

(statearr_35705_35775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (9))){
var inst_35536 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35706_35776 = state_35643__$1;
(statearr_35706_35776[(2)] = inst_35536);

(statearr_35706_35776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (5))){
var inst_35507 = (state_35643[(7)]);
var inst_35506 = (state_35643[(8)]);
var inst_35509 = (inst_35507 < inst_35506);
var inst_35510 = inst_35509;
var state_35643__$1 = state_35643;
if(cljs.core.truth_(inst_35510)){
var statearr_35707_35777 = state_35643__$1;
(statearr_35707_35777[(1)] = (7));

} else {
var statearr_35708_35778 = state_35643__$1;
(statearr_35708_35778[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (14))){
var inst_35517 = (state_35643[(22)]);
var inst_35526 = cljs.core.first.call(null,inst_35517);
var inst_35527 = figwheel.client.file_reloading.eval_body.call(null,inst_35526,opts);
var inst_35528 = cljs.core.next.call(null,inst_35517);
var inst_35504 = inst_35528;
var inst_35505 = null;
var inst_35506 = (0);
var inst_35507 = (0);
var state_35643__$1 = (function (){var statearr_35709 = state_35643;
(statearr_35709[(7)] = inst_35507);

(statearr_35709[(8)] = inst_35506);

(statearr_35709[(9)] = inst_35504);

(statearr_35709[(10)] = inst_35505);

(statearr_35709[(32)] = inst_35527);

return statearr_35709;
})();
var statearr_35710_35779 = state_35643__$1;
(statearr_35710_35779[(2)] = null);

(statearr_35710_35779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (45))){
var state_35643__$1 = state_35643;
var statearr_35711_35780 = state_35643__$1;
(statearr_35711_35780[(2)] = null);

(statearr_35711_35780[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (26))){
var inst_35557 = (state_35643[(19)]);
var inst_35560 = (state_35643[(23)]);
var inst_35563 = (state_35643[(26)]);
var inst_35561 = (state_35643[(24)]);
var inst_35565 = (state_35643[(25)]);
var inst_35580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35582 = (function (){var all_files = inst_35557;
var res_SINGLEQUOTE_ = inst_35560;
var res = inst_35561;
var files_not_loaded = inst_35563;
var dependencies_that_loaded = inst_35565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35557,inst_35560,inst_35563,inst_35561,inst_35565,inst_35580,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35581){
var map__35712 = p__35581;
var map__35712__$1 = ((((!((map__35712 == null)))?((((map__35712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35712):map__35712);
var namespace = cljs.core.get.call(null,map__35712__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35712__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35557,inst_35560,inst_35563,inst_35561,inst_35565,inst_35580,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35583 = cljs.core.map.call(null,inst_35582,inst_35561);
var inst_35584 = cljs.core.pr_str.call(null,inst_35583);
var inst_35585 = figwheel.client.utils.log.call(null,inst_35584);
var inst_35586 = (function (){var all_files = inst_35557;
var res_SINGLEQUOTE_ = inst_35560;
var res = inst_35561;
var files_not_loaded = inst_35563;
var dependencies_that_loaded = inst_35565;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35557,inst_35560,inst_35563,inst_35561,inst_35565,inst_35580,inst_35582,inst_35583,inst_35584,inst_35585,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35557,inst_35560,inst_35563,inst_35561,inst_35565,inst_35580,inst_35582,inst_35583,inst_35584,inst_35585,state_val_35644,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35587 = setTimeout(inst_35586,(10));
var state_35643__$1 = (function (){var statearr_35714 = state_35643;
(statearr_35714[(33)] = inst_35580);

(statearr_35714[(34)] = inst_35585);

return statearr_35714;
})();
var statearr_35715_35781 = state_35643__$1;
(statearr_35715_35781[(2)] = inst_35587);

(statearr_35715_35781[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (16))){
var state_35643__$1 = state_35643;
var statearr_35716_35782 = state_35643__$1;
(statearr_35716_35782[(2)] = reload_dependents);

(statearr_35716_35782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (38))){
var inst_35597 = (state_35643[(16)]);
var inst_35614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35597);
var state_35643__$1 = state_35643;
var statearr_35717_35783 = state_35643__$1;
(statearr_35717_35783[(2)] = inst_35614);

(statearr_35717_35783[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (30))){
var state_35643__$1 = state_35643;
var statearr_35718_35784 = state_35643__$1;
(statearr_35718_35784[(2)] = null);

(statearr_35718_35784[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (10))){
var inst_35517 = (state_35643[(22)]);
var inst_35519 = cljs.core.chunked_seq_QMARK_.call(null,inst_35517);
var state_35643__$1 = state_35643;
if(inst_35519){
var statearr_35719_35785 = state_35643__$1;
(statearr_35719_35785[(1)] = (13));

} else {
var statearr_35720_35786 = state_35643__$1;
(statearr_35720_35786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (18))){
var inst_35551 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
if(cljs.core.truth_(inst_35551)){
var statearr_35721_35787 = state_35643__$1;
(statearr_35721_35787[(1)] = (19));

} else {
var statearr_35722_35788 = state_35643__$1;
(statearr_35722_35788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (42))){
var state_35643__$1 = state_35643;
var statearr_35723_35789 = state_35643__$1;
(statearr_35723_35789[(2)] = null);

(statearr_35723_35789[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (37))){
var inst_35609 = (state_35643[(2)]);
var state_35643__$1 = state_35643;
var statearr_35724_35790 = state_35643__$1;
(statearr_35724_35790[(2)] = inst_35609);

(statearr_35724_35790[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35644 === (8))){
var inst_35517 = (state_35643[(22)]);
var inst_35504 = (state_35643[(9)]);
var inst_35517__$1 = cljs.core.seq.call(null,inst_35504);
var state_35643__$1 = (function (){var statearr_35725 = state_35643;
(statearr_35725[(22)] = inst_35517__$1);

return statearr_35725;
})();
if(inst_35517__$1){
var statearr_35726_35791 = state_35643__$1;
(statearr_35726_35791[(1)] = (10));

} else {
var statearr_35727_35792 = state_35643__$1;
(statearr_35727_35792[(1)] = (11));

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
}
});})(c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28693__auto__,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto____0 = (function (){
var statearr_35731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35731[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto__);

(statearr_35731[(1)] = (1));

return statearr_35731;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto____1 = (function (state_35643){
while(true){
var ret_value__28695__auto__ = (function (){try{while(true){
var result__28696__auto__ = switch__28693__auto__.call(null,state_35643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28696__auto__;
}
break;
}
}catch (e35732){if((e35732 instanceof Object)){
var ex__28697__auto__ = e35732;
var statearr_35733_35793 = state_35643;
(statearr_35733_35793[(5)] = ex__28697__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35794 = state_35643;
state_35643 = G__35794;
continue;
} else {
return ret_value__28695__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto__ = function(state_35643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto____1.call(this,state_35643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28694__auto__;
})()
;})(switch__28693__auto__,c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28807__auto__ = (function (){var statearr_35734 = f__28806__auto__.call(null);
(statearr_35734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28805__auto__);

return statearr_35734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28807__auto__);
});})(c__28805__auto__,map__35489,map__35489__$1,opts,before_jsload,on_jsload,reload_dependents,map__35490,map__35490__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28805__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35797,link){
var map__35800 = p__35797;
var map__35800__$1 = ((((!((map__35800 == null)))?((((map__35800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35800):map__35800);
var file = cljs.core.get.call(null,map__35800__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35800,map__35800__$1,file){
return (function (p1__35795_SHARP_,p2__35796_SHARP_){
if(cljs.core._EQ_.call(null,p1__35795_SHARP_,p2__35796_SHARP_)){
return p1__35795_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35800,map__35800__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35806){
var map__35807 = p__35806;
var map__35807__$1 = ((((!((map__35807 == null)))?((((map__35807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35807):map__35807);
var match_length = cljs.core.get.call(null,map__35807__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35807__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35802_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35802_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35809_SHARP_,p2__35810_SHARP_){
return cljs.core.assoc.call(null,p1__35809_SHARP_,cljs.core.get.call(null,p2__35810_SHARP_,key),p2__35810_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35811 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35811);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35811);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35812,p__35813){
var map__35818 = p__35812;
var map__35818__$1 = ((((!((map__35818 == null)))?((((map__35818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35818):map__35818);
var on_cssload = cljs.core.get.call(null,map__35818__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35819 = p__35813;
var map__35819__$1 = ((((!((map__35819 == null)))?((((map__35819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35819):map__35819);
var files_msg = map__35819__$1;
var files = cljs.core.get.call(null,map__35819__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1533225035070