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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34828_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34828_SHARP_));
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
var seq__34833 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34834 = null;
var count__34835 = (0);
var i__34836 = (0);
while(true){
if((i__34836 < count__34835)){
var n = cljs.core._nth.call(null,chunk__34834,i__34836);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34837 = seq__34833;
var G__34838 = chunk__34834;
var G__34839 = count__34835;
var G__34840 = (i__34836 + (1));
seq__34833 = G__34837;
chunk__34834 = G__34838;
count__34835 = G__34839;
i__34836 = G__34840;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34833);
if(temp__4657__auto__){
var seq__34833__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34833__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34833__$1);
var G__34841 = cljs.core.chunk_rest.call(null,seq__34833__$1);
var G__34842 = c__25659__auto__;
var G__34843 = cljs.core.count.call(null,c__25659__auto__);
var G__34844 = (0);
seq__34833 = G__34841;
chunk__34834 = G__34842;
count__34835 = G__34843;
i__34836 = G__34844;
continue;
} else {
var n = cljs.core.first.call(null,seq__34833__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34845 = cljs.core.next.call(null,seq__34833__$1);
var G__34846 = null;
var G__34847 = (0);
var G__34848 = (0);
seq__34833 = G__34845;
chunk__34834 = G__34846;
count__34835 = G__34847;
i__34836 = G__34848;
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

var seq__34899_34910 = cljs.core.seq.call(null,deps);
var chunk__34900_34911 = null;
var count__34901_34912 = (0);
var i__34902_34913 = (0);
while(true){
if((i__34902_34913 < count__34901_34912)){
var dep_34914 = cljs.core._nth.call(null,chunk__34900_34911,i__34902_34913);
topo_sort_helper_STAR_.call(null,dep_34914,(depth + (1)),state);

var G__34915 = seq__34899_34910;
var G__34916 = chunk__34900_34911;
var G__34917 = count__34901_34912;
var G__34918 = (i__34902_34913 + (1));
seq__34899_34910 = G__34915;
chunk__34900_34911 = G__34916;
count__34901_34912 = G__34917;
i__34902_34913 = G__34918;
continue;
} else {
var temp__4657__auto___34919 = cljs.core.seq.call(null,seq__34899_34910);
if(temp__4657__auto___34919){
var seq__34899_34920__$1 = temp__4657__auto___34919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34899_34920__$1)){
var c__25659__auto___34921 = cljs.core.chunk_first.call(null,seq__34899_34920__$1);
var G__34922 = cljs.core.chunk_rest.call(null,seq__34899_34920__$1);
var G__34923 = c__25659__auto___34921;
var G__34924 = cljs.core.count.call(null,c__25659__auto___34921);
var G__34925 = (0);
seq__34899_34910 = G__34922;
chunk__34900_34911 = G__34923;
count__34901_34912 = G__34924;
i__34902_34913 = G__34925;
continue;
} else {
var dep_34926 = cljs.core.first.call(null,seq__34899_34920__$1);
topo_sort_helper_STAR_.call(null,dep_34926,(depth + (1)),state);

var G__34927 = cljs.core.next.call(null,seq__34899_34920__$1);
var G__34928 = null;
var G__34929 = (0);
var G__34930 = (0);
seq__34899_34910 = G__34927;
chunk__34900_34911 = G__34928;
count__34901_34912 = G__34929;
i__34902_34913 = G__34930;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34903){
var vec__34907 = p__34903;
var seq__34908 = cljs.core.seq.call(null,vec__34907);
var first__34909 = cljs.core.first.call(null,seq__34908);
var seq__34908__$1 = cljs.core.next.call(null,seq__34908);
var x = first__34909;
var xs = seq__34908__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34907,seq__34908,first__34909,seq__34908__$1,x,xs,get_deps__$1){
return (function (p1__34849_SHARP_){
return clojure.set.difference.call(null,p1__34849_SHARP_,x);
});})(vec__34907,seq__34908,first__34909,seq__34908__$1,x,xs,get_deps__$1))
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
var seq__34943 = cljs.core.seq.call(null,provides);
var chunk__34944 = null;
var count__34945 = (0);
var i__34946 = (0);
while(true){
if((i__34946 < count__34945)){
var prov = cljs.core._nth.call(null,chunk__34944,i__34946);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34947_34955 = cljs.core.seq.call(null,requires);
var chunk__34948_34956 = null;
var count__34949_34957 = (0);
var i__34950_34958 = (0);
while(true){
if((i__34950_34958 < count__34949_34957)){
var req_34959 = cljs.core._nth.call(null,chunk__34948_34956,i__34950_34958);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34959,prov);

var G__34960 = seq__34947_34955;
var G__34961 = chunk__34948_34956;
var G__34962 = count__34949_34957;
var G__34963 = (i__34950_34958 + (1));
seq__34947_34955 = G__34960;
chunk__34948_34956 = G__34961;
count__34949_34957 = G__34962;
i__34950_34958 = G__34963;
continue;
} else {
var temp__4657__auto___34964 = cljs.core.seq.call(null,seq__34947_34955);
if(temp__4657__auto___34964){
var seq__34947_34965__$1 = temp__4657__auto___34964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34947_34965__$1)){
var c__25659__auto___34966 = cljs.core.chunk_first.call(null,seq__34947_34965__$1);
var G__34967 = cljs.core.chunk_rest.call(null,seq__34947_34965__$1);
var G__34968 = c__25659__auto___34966;
var G__34969 = cljs.core.count.call(null,c__25659__auto___34966);
var G__34970 = (0);
seq__34947_34955 = G__34967;
chunk__34948_34956 = G__34968;
count__34949_34957 = G__34969;
i__34950_34958 = G__34970;
continue;
} else {
var req_34971 = cljs.core.first.call(null,seq__34947_34965__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34971,prov);

var G__34972 = cljs.core.next.call(null,seq__34947_34965__$1);
var G__34973 = null;
var G__34974 = (0);
var G__34975 = (0);
seq__34947_34955 = G__34972;
chunk__34948_34956 = G__34973;
count__34949_34957 = G__34974;
i__34950_34958 = G__34975;
continue;
}
} else {
}
}
break;
}

var G__34976 = seq__34943;
var G__34977 = chunk__34944;
var G__34978 = count__34945;
var G__34979 = (i__34946 + (1));
seq__34943 = G__34976;
chunk__34944 = G__34977;
count__34945 = G__34978;
i__34946 = G__34979;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34943);
if(temp__4657__auto__){
var seq__34943__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34943__$1)){
var c__25659__auto__ = cljs.core.chunk_first.call(null,seq__34943__$1);
var G__34980 = cljs.core.chunk_rest.call(null,seq__34943__$1);
var G__34981 = c__25659__auto__;
var G__34982 = cljs.core.count.call(null,c__25659__auto__);
var G__34983 = (0);
seq__34943 = G__34980;
chunk__34944 = G__34981;
count__34945 = G__34982;
i__34946 = G__34983;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34943__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34951_34984 = cljs.core.seq.call(null,requires);
var chunk__34952_34985 = null;
var count__34953_34986 = (0);
var i__34954_34987 = (0);
while(true){
if((i__34954_34987 < count__34953_34986)){
var req_34988 = cljs.core._nth.call(null,chunk__34952_34985,i__34954_34987);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34988,prov);

var G__34989 = seq__34951_34984;
var G__34990 = chunk__34952_34985;
var G__34991 = count__34953_34986;
var G__34992 = (i__34954_34987 + (1));
seq__34951_34984 = G__34989;
chunk__34952_34985 = G__34990;
count__34953_34986 = G__34991;
i__34954_34987 = G__34992;
continue;
} else {
var temp__4657__auto___34993__$1 = cljs.core.seq.call(null,seq__34951_34984);
if(temp__4657__auto___34993__$1){
var seq__34951_34994__$1 = temp__4657__auto___34993__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34951_34994__$1)){
var c__25659__auto___34995 = cljs.core.chunk_first.call(null,seq__34951_34994__$1);
var G__34996 = cljs.core.chunk_rest.call(null,seq__34951_34994__$1);
var G__34997 = c__25659__auto___34995;
var G__34998 = cljs.core.count.call(null,c__25659__auto___34995);
var G__34999 = (0);
seq__34951_34984 = G__34996;
chunk__34952_34985 = G__34997;
count__34953_34986 = G__34998;
i__34954_34987 = G__34999;
continue;
} else {
var req_35000 = cljs.core.first.call(null,seq__34951_34994__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35000,prov);

var G__35001 = cljs.core.next.call(null,seq__34951_34994__$1);
var G__35002 = null;
var G__35003 = (0);
var G__35004 = (0);
seq__34951_34984 = G__35001;
chunk__34952_34985 = G__35002;
count__34953_34986 = G__35003;
i__34954_34987 = G__35004;
continue;
}
} else {
}
}
break;
}

var G__35005 = cljs.core.next.call(null,seq__34943__$1);
var G__35006 = null;
var G__35007 = (0);
var G__35008 = (0);
seq__34943 = G__35005;
chunk__34944 = G__35006;
count__34945 = G__35007;
i__34946 = G__35008;
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
var seq__35013_35017 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35014_35018 = null;
var count__35015_35019 = (0);
var i__35016_35020 = (0);
while(true){
if((i__35016_35020 < count__35015_35019)){
var ns_35021 = cljs.core._nth.call(null,chunk__35014_35018,i__35016_35020);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35021);

var G__35022 = seq__35013_35017;
var G__35023 = chunk__35014_35018;
var G__35024 = count__35015_35019;
var G__35025 = (i__35016_35020 + (1));
seq__35013_35017 = G__35022;
chunk__35014_35018 = G__35023;
count__35015_35019 = G__35024;
i__35016_35020 = G__35025;
continue;
} else {
var temp__4657__auto___35026 = cljs.core.seq.call(null,seq__35013_35017);
if(temp__4657__auto___35026){
var seq__35013_35027__$1 = temp__4657__auto___35026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35013_35027__$1)){
var c__25659__auto___35028 = cljs.core.chunk_first.call(null,seq__35013_35027__$1);
var G__35029 = cljs.core.chunk_rest.call(null,seq__35013_35027__$1);
var G__35030 = c__25659__auto___35028;
var G__35031 = cljs.core.count.call(null,c__25659__auto___35028);
var G__35032 = (0);
seq__35013_35017 = G__35029;
chunk__35014_35018 = G__35030;
count__35015_35019 = G__35031;
i__35016_35020 = G__35032;
continue;
} else {
var ns_35033 = cljs.core.first.call(null,seq__35013_35027__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35033);

var G__35034 = cljs.core.next.call(null,seq__35013_35027__$1);
var G__35035 = null;
var G__35036 = (0);
var G__35037 = (0);
seq__35013_35017 = G__35034;
chunk__35014_35018 = G__35035;
count__35015_35019 = G__35036;
i__35016_35020 = G__35037;
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
var G__35038__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35039__i = 0, G__35039__a = new Array(arguments.length -  0);
while (G__35039__i < G__35039__a.length) {G__35039__a[G__35039__i] = arguments[G__35039__i + 0]; ++G__35039__i;}
  args = new cljs.core.IndexedSeq(G__35039__a,0);
} 
return G__35038__delegate.call(this,args);};
G__35038.cljs$lang$maxFixedArity = 0;
G__35038.cljs$lang$applyTo = (function (arglist__35040){
var args = cljs.core.seq(arglist__35040);
return G__35038__delegate(args);
});
G__35038.cljs$core$IFn$_invoke$arity$variadic = G__35038__delegate;
return G__35038;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35041 = cljs.core._EQ_;
var expr__35042 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35041.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35042))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35041,expr__35042){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35041,expr__35042))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35041,expr__35042){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35044){if((e35044 instanceof Error)){
var e = e35044;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35044;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35041,expr__35042))
} else {
if(cljs.core.truth_(pred__35041.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35042))){
return ((function (pred__35041,expr__35042){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35041,expr__35042){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35041,expr__35042))
);

return deferred.addErrback(((function (deferred,pred__35041,expr__35042){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35041,expr__35042))
);
});
;})(pred__35041,expr__35042))
} else {
if(cljs.core.truth_(pred__35041.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35042))){
return ((function (pred__35041,expr__35042){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35045){if((e35045 instanceof Error)){
var e = e35045;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35045;

}
}})());
});
;})(pred__35041,expr__35042))
} else {
return ((function (pred__35041,expr__35042){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35041,expr__35042))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35046,callback){
var map__35049 = p__35046;
var map__35049__$1 = ((((!((map__35049 == null)))?((((map__35049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35049):map__35049);
var file_msg = map__35049__$1;
var request_url = cljs.core.get.call(null,map__35049__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35049,map__35049__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35049,map__35049__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto__){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto__){
return (function (state_35073){
var state_val_35074 = (state_35073[(1)]);
if((state_val_35074 === (7))){
var inst_35069 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35075_35095 = state_35073__$1;
(statearr_35075_35095[(2)] = inst_35069);

(statearr_35075_35095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (1))){
var state_35073__$1 = state_35073;
var statearr_35076_35096 = state_35073__$1;
(statearr_35076_35096[(2)] = null);

(statearr_35076_35096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (4))){
var inst_35053 = (state_35073[(7)]);
var inst_35053__$1 = (state_35073[(2)]);
var state_35073__$1 = (function (){var statearr_35077 = state_35073;
(statearr_35077[(7)] = inst_35053__$1);

return statearr_35077;
})();
if(cljs.core.truth_(inst_35053__$1)){
var statearr_35078_35097 = state_35073__$1;
(statearr_35078_35097[(1)] = (5));

} else {
var statearr_35079_35098 = state_35073__$1;
(statearr_35079_35098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (6))){
var state_35073__$1 = state_35073;
var statearr_35080_35099 = state_35073__$1;
(statearr_35080_35099[(2)] = null);

(statearr_35080_35099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (3))){
var inst_35071 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35073__$1,inst_35071);
} else {
if((state_val_35074 === (2))){
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35073__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35074 === (11))){
var inst_35065 = (state_35073[(2)]);
var state_35073__$1 = (function (){var statearr_35081 = state_35073;
(statearr_35081[(8)] = inst_35065);

return statearr_35081;
})();
var statearr_35082_35100 = state_35073__$1;
(statearr_35082_35100[(2)] = null);

(statearr_35082_35100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (9))){
var inst_35057 = (state_35073[(9)]);
var inst_35059 = (state_35073[(10)]);
var inst_35061 = inst_35059.call(null,inst_35057);
var state_35073__$1 = state_35073;
var statearr_35083_35101 = state_35073__$1;
(statearr_35083_35101[(2)] = inst_35061);

(statearr_35083_35101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (5))){
var inst_35053 = (state_35073[(7)]);
var inst_35055 = figwheel.client.file_reloading.blocking_load.call(null,inst_35053);
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35073__$1,(8),inst_35055);
} else {
if((state_val_35074 === (10))){
var inst_35057 = (state_35073[(9)]);
var inst_35063 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35057);
var state_35073__$1 = state_35073;
var statearr_35084_35102 = state_35073__$1;
(statearr_35084_35102[(2)] = inst_35063);

(statearr_35084_35102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (8))){
var inst_35053 = (state_35073[(7)]);
var inst_35059 = (state_35073[(10)]);
var inst_35057 = (state_35073[(2)]);
var inst_35058 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35059__$1 = cljs.core.get.call(null,inst_35058,inst_35053);
var state_35073__$1 = (function (){var statearr_35085 = state_35073;
(statearr_35085[(9)] = inst_35057);

(statearr_35085[(10)] = inst_35059__$1);

return statearr_35085;
})();
if(cljs.core.truth_(inst_35059__$1)){
var statearr_35086_35103 = state_35073__$1;
(statearr_35086_35103[(1)] = (9));

} else {
var statearr_35087_35104 = state_35073__$1;
(statearr_35087_35104[(1)] = (10));

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
});})(c__28844__auto__))
;
return ((function (switch__28732__auto__,c__28844__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28733__auto__ = null;
var figwheel$client$file_reloading$state_machine__28733__auto____0 = (function (){
var statearr_35091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35091[(0)] = figwheel$client$file_reloading$state_machine__28733__auto__);

(statearr_35091[(1)] = (1));

return statearr_35091;
});
var figwheel$client$file_reloading$state_machine__28733__auto____1 = (function (state_35073){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_35073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e35092){if((e35092 instanceof Object)){
var ex__28736__auto__ = e35092;
var statearr_35093_35105 = state_35073;
(statearr_35093_35105[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35106 = state_35073;
state_35073 = G__35106;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28733__auto__ = function(state_35073){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28733__auto____1.call(this,state_35073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28733__auto____0;
figwheel$client$file_reloading$state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28733__auto____1;
return figwheel$client$file_reloading$state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto__))
})();
var state__28846__auto__ = (function (){var statearr_35094 = f__28845__auto__.call(null);
(statearr_35094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto__);

return statearr_35094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto__))
);

return c__28844__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35107,callback){
var map__35110 = p__35107;
var map__35110__$1 = ((((!((map__35110 == null)))?((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var file_msg = map__35110__$1;
var namespace = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35110,map__35110__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35110,map__35110__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35112){
var map__35115 = p__35112;
var map__35115__$1 = ((((!((map__35115 == null)))?((((map__35115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35115):map__35115);
var file_msg = map__35115__$1;
var namespace = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35117){
var map__35120 = p__35117;
var map__35120__$1 = ((((!((map__35120 == null)))?((((map__35120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35120):map__35120);
var file_msg = map__35120__$1;
var namespace = cljs.core.get.call(null,map__35120__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35122,callback){
var map__35125 = p__35122;
var map__35125__$1 = ((((!((map__35125 == null)))?((((map__35125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35125):map__35125);
var file_msg = map__35125__$1;
var request_url = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35125__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28844__auto___35229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto___35229,out){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto___35229,out){
return (function (state_35211){
var state_val_35212 = (state_35211[(1)]);
if((state_val_35212 === (1))){
var inst_35185 = cljs.core.seq.call(null,files);
var inst_35186 = cljs.core.first.call(null,inst_35185);
var inst_35187 = cljs.core.next.call(null,inst_35185);
var inst_35188 = files;
var state_35211__$1 = (function (){var statearr_35213 = state_35211;
(statearr_35213[(7)] = inst_35187);

(statearr_35213[(8)] = inst_35188);

(statearr_35213[(9)] = inst_35186);

return statearr_35213;
})();
var statearr_35214_35230 = state_35211__$1;
(statearr_35214_35230[(2)] = null);

(statearr_35214_35230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (2))){
var inst_35188 = (state_35211[(8)]);
var inst_35194 = (state_35211[(10)]);
var inst_35193 = cljs.core.seq.call(null,inst_35188);
var inst_35194__$1 = cljs.core.first.call(null,inst_35193);
var inst_35195 = cljs.core.next.call(null,inst_35193);
var inst_35196 = (inst_35194__$1 == null);
var inst_35197 = cljs.core.not.call(null,inst_35196);
var state_35211__$1 = (function (){var statearr_35215 = state_35211;
(statearr_35215[(11)] = inst_35195);

(statearr_35215[(10)] = inst_35194__$1);

return statearr_35215;
})();
if(inst_35197){
var statearr_35216_35231 = state_35211__$1;
(statearr_35216_35231[(1)] = (4));

} else {
var statearr_35217_35232 = state_35211__$1;
(statearr_35217_35232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (3))){
var inst_35209 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35211__$1,inst_35209);
} else {
if((state_val_35212 === (4))){
var inst_35194 = (state_35211[(10)]);
var inst_35199 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35194);
var state_35211__$1 = state_35211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35211__$1,(7),inst_35199);
} else {
if((state_val_35212 === (5))){
var inst_35205 = cljs.core.async.close_BANG_.call(null,out);
var state_35211__$1 = state_35211;
var statearr_35218_35233 = state_35211__$1;
(statearr_35218_35233[(2)] = inst_35205);

(statearr_35218_35233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (6))){
var inst_35207 = (state_35211[(2)]);
var state_35211__$1 = state_35211;
var statearr_35219_35234 = state_35211__$1;
(statearr_35219_35234[(2)] = inst_35207);

(statearr_35219_35234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35212 === (7))){
var inst_35195 = (state_35211[(11)]);
var inst_35201 = (state_35211[(2)]);
var inst_35202 = cljs.core.async.put_BANG_.call(null,out,inst_35201);
var inst_35188 = inst_35195;
var state_35211__$1 = (function (){var statearr_35220 = state_35211;
(statearr_35220[(12)] = inst_35202);

(statearr_35220[(8)] = inst_35188);

return statearr_35220;
})();
var statearr_35221_35235 = state_35211__$1;
(statearr_35221_35235[(2)] = null);

(statearr_35221_35235[(1)] = (2));


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
});})(c__28844__auto___35229,out))
;
return ((function (switch__28732__auto__,c__28844__auto___35229,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto____0 = (function (){
var statearr_35225 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35225[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto__);

(statearr_35225[(1)] = (1));

return statearr_35225;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto____1 = (function (state_35211){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_35211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e35226){if((e35226 instanceof Object)){
var ex__28736__auto__ = e35226;
var statearr_35227_35236 = state_35211;
(statearr_35227_35236[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35237 = state_35211;
state_35211 = G__35237;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto__ = function(state_35211){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto____1.call(this,state_35211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto___35229,out))
})();
var state__28846__auto__ = (function (){var statearr_35228 = f__28845__auto__.call(null);
(statearr_35228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto___35229);

return statearr_35228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto___35229,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35238,opts){
var map__35242 = p__35238;
var map__35242__$1 = ((((!((map__35242 == null)))?((((map__35242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35242):map__35242);
var eval_body__$1 = cljs.core.get.call(null,map__35242__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35242__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35244){var e = e35244;
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
return (function (p1__35245_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35245_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35254){
var vec__35255 = p__35254;
var k = cljs.core.nth.call(null,vec__35255,(0),null);
var v = cljs.core.nth.call(null,vec__35255,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35258){
var vec__35259 = p__35258;
var k = cljs.core.nth.call(null,vec__35259,(0),null);
var v = cljs.core.nth.call(null,vec__35259,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35265,p__35266){
var map__35513 = p__35265;
var map__35513__$1 = ((((!((map__35513 == null)))?((((map__35513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35513):map__35513);
var opts = map__35513__$1;
var before_jsload = cljs.core.get.call(null,map__35513__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35513__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35513__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35514 = p__35266;
var map__35514__$1 = ((((!((map__35514 == null)))?((((map__35514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35514):map__35514);
var msg = map__35514__$1;
var files = cljs.core.get.call(null,map__35514__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35514__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35514__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28845__auto__ = (function (){var switch__28732__auto__ = ((function (c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35667){
var state_val_35668 = (state_35667[(1)]);
if((state_val_35668 === (7))){
var inst_35531 = (state_35667[(7)]);
var inst_35529 = (state_35667[(8)]);
var inst_35530 = (state_35667[(9)]);
var inst_35528 = (state_35667[(10)]);
var inst_35536 = cljs.core._nth.call(null,inst_35529,inst_35531);
var inst_35537 = figwheel.client.file_reloading.eval_body.call(null,inst_35536,opts);
var inst_35538 = (inst_35531 + (1));
var tmp35669 = inst_35529;
var tmp35670 = inst_35530;
var tmp35671 = inst_35528;
var inst_35528__$1 = tmp35671;
var inst_35529__$1 = tmp35669;
var inst_35530__$1 = tmp35670;
var inst_35531__$1 = inst_35538;
var state_35667__$1 = (function (){var statearr_35672 = state_35667;
(statearr_35672[(7)] = inst_35531__$1);

(statearr_35672[(8)] = inst_35529__$1);

(statearr_35672[(9)] = inst_35530__$1);

(statearr_35672[(10)] = inst_35528__$1);

(statearr_35672[(11)] = inst_35537);

return statearr_35672;
})();
var statearr_35673_35759 = state_35667__$1;
(statearr_35673_35759[(2)] = null);

(statearr_35673_35759[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (20))){
var inst_35571 = (state_35667[(12)]);
var inst_35579 = figwheel.client.file_reloading.sort_files.call(null,inst_35571);
var state_35667__$1 = state_35667;
var statearr_35674_35760 = state_35667__$1;
(statearr_35674_35760[(2)] = inst_35579);

(statearr_35674_35760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (27))){
var state_35667__$1 = state_35667;
var statearr_35675_35761 = state_35667__$1;
(statearr_35675_35761[(2)] = null);

(statearr_35675_35761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (1))){
var inst_35520 = (state_35667[(13)]);
var inst_35517 = before_jsload.call(null,files);
var inst_35518 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35519 = (function (){return ((function (inst_35520,inst_35517,inst_35518,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35262_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35262_SHARP_);
});
;})(inst_35520,inst_35517,inst_35518,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35520__$1 = cljs.core.filter.call(null,inst_35519,files);
var inst_35521 = cljs.core.not_empty.call(null,inst_35520__$1);
var state_35667__$1 = (function (){var statearr_35676 = state_35667;
(statearr_35676[(14)] = inst_35517);

(statearr_35676[(13)] = inst_35520__$1);

(statearr_35676[(15)] = inst_35518);

return statearr_35676;
})();
if(cljs.core.truth_(inst_35521)){
var statearr_35677_35762 = state_35667__$1;
(statearr_35677_35762[(1)] = (2));

} else {
var statearr_35678_35763 = state_35667__$1;
(statearr_35678_35763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (24))){
var state_35667__$1 = state_35667;
var statearr_35679_35764 = state_35667__$1;
(statearr_35679_35764[(2)] = null);

(statearr_35679_35764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (39))){
var inst_35621 = (state_35667[(16)]);
var state_35667__$1 = state_35667;
var statearr_35680_35765 = state_35667__$1;
(statearr_35680_35765[(2)] = inst_35621);

(statearr_35680_35765[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (46))){
var inst_35662 = (state_35667[(2)]);
var state_35667__$1 = state_35667;
var statearr_35681_35766 = state_35667__$1;
(statearr_35681_35766[(2)] = inst_35662);

(statearr_35681_35766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (4))){
var inst_35565 = (state_35667[(2)]);
var inst_35566 = cljs.core.List.EMPTY;
var inst_35567 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35566);
var inst_35568 = (function (){return ((function (inst_35565,inst_35566,inst_35567,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35263_SHARP_){
var and__24836__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35263_SHARP_);
if(cljs.core.truth_(and__24836__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35263_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35263_SHARP_)));
} else {
return and__24836__auto__;
}
});
;})(inst_35565,inst_35566,inst_35567,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35569 = cljs.core.filter.call(null,inst_35568,files);
var inst_35570 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35571 = cljs.core.concat.call(null,inst_35569,inst_35570);
var state_35667__$1 = (function (){var statearr_35682 = state_35667;
(statearr_35682[(12)] = inst_35571);

(statearr_35682[(17)] = inst_35565);

(statearr_35682[(18)] = inst_35567);

return statearr_35682;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35683_35767 = state_35667__$1;
(statearr_35683_35767[(1)] = (16));

} else {
var statearr_35684_35768 = state_35667__$1;
(statearr_35684_35768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (15))){
var inst_35555 = (state_35667[(2)]);
var state_35667__$1 = state_35667;
var statearr_35685_35769 = state_35667__$1;
(statearr_35685_35769[(2)] = inst_35555);

(statearr_35685_35769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (21))){
var inst_35581 = (state_35667[(19)]);
var inst_35581__$1 = (state_35667[(2)]);
var inst_35582 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35581__$1);
var state_35667__$1 = (function (){var statearr_35686 = state_35667;
(statearr_35686[(19)] = inst_35581__$1);

return statearr_35686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35667__$1,(22),inst_35582);
} else {
if((state_val_35668 === (31))){
var inst_35665 = (state_35667[(2)]);
var state_35667__$1 = state_35667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35667__$1,inst_35665);
} else {
if((state_val_35668 === (32))){
var inst_35621 = (state_35667[(16)]);
var inst_35626 = inst_35621.cljs$lang$protocol_mask$partition0$;
var inst_35627 = (inst_35626 & (64));
var inst_35628 = inst_35621.cljs$core$ISeq$;
var inst_35629 = (inst_35627) || (inst_35628);
var state_35667__$1 = state_35667;
if(cljs.core.truth_(inst_35629)){
var statearr_35687_35770 = state_35667__$1;
(statearr_35687_35770[(1)] = (35));

} else {
var statearr_35688_35771 = state_35667__$1;
(statearr_35688_35771[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (40))){
var inst_35642 = (state_35667[(20)]);
var inst_35641 = (state_35667[(2)]);
var inst_35642__$1 = cljs.core.get.call(null,inst_35641,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35643 = cljs.core.get.call(null,inst_35641,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35644 = cljs.core.not_empty.call(null,inst_35642__$1);
var state_35667__$1 = (function (){var statearr_35689 = state_35667;
(statearr_35689[(20)] = inst_35642__$1);

(statearr_35689[(21)] = inst_35643);

return statearr_35689;
})();
if(cljs.core.truth_(inst_35644)){
var statearr_35690_35772 = state_35667__$1;
(statearr_35690_35772[(1)] = (41));

} else {
var statearr_35691_35773 = state_35667__$1;
(statearr_35691_35773[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (33))){
var state_35667__$1 = state_35667;
var statearr_35692_35774 = state_35667__$1;
(statearr_35692_35774[(2)] = false);

(statearr_35692_35774[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (13))){
var inst_35541 = (state_35667[(22)]);
var inst_35545 = cljs.core.chunk_first.call(null,inst_35541);
var inst_35546 = cljs.core.chunk_rest.call(null,inst_35541);
var inst_35547 = cljs.core.count.call(null,inst_35545);
var inst_35528 = inst_35546;
var inst_35529 = inst_35545;
var inst_35530 = inst_35547;
var inst_35531 = (0);
var state_35667__$1 = (function (){var statearr_35693 = state_35667;
(statearr_35693[(7)] = inst_35531);

(statearr_35693[(8)] = inst_35529);

(statearr_35693[(9)] = inst_35530);

(statearr_35693[(10)] = inst_35528);

return statearr_35693;
})();
var statearr_35694_35775 = state_35667__$1;
(statearr_35694_35775[(2)] = null);

(statearr_35694_35775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (22))){
var inst_35581 = (state_35667[(19)]);
var inst_35585 = (state_35667[(23)]);
var inst_35584 = (state_35667[(24)]);
var inst_35589 = (state_35667[(25)]);
var inst_35584__$1 = (state_35667[(2)]);
var inst_35585__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35584__$1);
var inst_35586 = (function (){var all_files = inst_35581;
var res_SINGLEQUOTE_ = inst_35584__$1;
var res = inst_35585__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35581,inst_35585,inst_35584,inst_35589,inst_35584__$1,inst_35585__$1,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35264_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35264_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35581,inst_35585,inst_35584,inst_35589,inst_35584__$1,inst_35585__$1,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35587 = cljs.core.filter.call(null,inst_35586,inst_35584__$1);
var inst_35588 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35589__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35588);
var inst_35590 = cljs.core.not_empty.call(null,inst_35589__$1);
var state_35667__$1 = (function (){var statearr_35695 = state_35667;
(statearr_35695[(23)] = inst_35585__$1);

(statearr_35695[(24)] = inst_35584__$1);

(statearr_35695[(25)] = inst_35589__$1);

(statearr_35695[(26)] = inst_35587);

return statearr_35695;
})();
if(cljs.core.truth_(inst_35590)){
var statearr_35696_35776 = state_35667__$1;
(statearr_35696_35776[(1)] = (23));

} else {
var statearr_35697_35777 = state_35667__$1;
(statearr_35697_35777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (36))){
var state_35667__$1 = state_35667;
var statearr_35698_35778 = state_35667__$1;
(statearr_35698_35778[(2)] = false);

(statearr_35698_35778[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (41))){
var inst_35642 = (state_35667[(20)]);
var inst_35646 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35647 = cljs.core.map.call(null,inst_35646,inst_35642);
var inst_35648 = cljs.core.pr_str.call(null,inst_35647);
var inst_35649 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35648)].join('');
var inst_35650 = figwheel.client.utils.log.call(null,inst_35649);
var state_35667__$1 = state_35667;
var statearr_35699_35779 = state_35667__$1;
(statearr_35699_35779[(2)] = inst_35650);

(statearr_35699_35779[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (43))){
var inst_35643 = (state_35667[(21)]);
var inst_35653 = (state_35667[(2)]);
var inst_35654 = cljs.core.not_empty.call(null,inst_35643);
var state_35667__$1 = (function (){var statearr_35700 = state_35667;
(statearr_35700[(27)] = inst_35653);

return statearr_35700;
})();
if(cljs.core.truth_(inst_35654)){
var statearr_35701_35780 = state_35667__$1;
(statearr_35701_35780[(1)] = (44));

} else {
var statearr_35702_35781 = state_35667__$1;
(statearr_35702_35781[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (29))){
var inst_35581 = (state_35667[(19)]);
var inst_35585 = (state_35667[(23)]);
var inst_35584 = (state_35667[(24)]);
var inst_35589 = (state_35667[(25)]);
var inst_35621 = (state_35667[(16)]);
var inst_35587 = (state_35667[(26)]);
var inst_35617 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35620 = (function (){var all_files = inst_35581;
var res_SINGLEQUOTE_ = inst_35584;
var res = inst_35585;
var files_not_loaded = inst_35587;
var dependencies_that_loaded = inst_35589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35581,inst_35585,inst_35584,inst_35589,inst_35621,inst_35587,inst_35617,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35619){
var map__35703 = p__35619;
var map__35703__$1 = ((((!((map__35703 == null)))?((((map__35703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35703):map__35703);
var namespace = cljs.core.get.call(null,map__35703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35581,inst_35585,inst_35584,inst_35589,inst_35621,inst_35587,inst_35617,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35621__$1 = cljs.core.group_by.call(null,inst_35620,inst_35587);
var inst_35623 = (inst_35621__$1 == null);
var inst_35624 = cljs.core.not.call(null,inst_35623);
var state_35667__$1 = (function (){var statearr_35705 = state_35667;
(statearr_35705[(28)] = inst_35617);

(statearr_35705[(16)] = inst_35621__$1);

return statearr_35705;
})();
if(inst_35624){
var statearr_35706_35782 = state_35667__$1;
(statearr_35706_35782[(1)] = (32));

} else {
var statearr_35707_35783 = state_35667__$1;
(statearr_35707_35783[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (44))){
var inst_35643 = (state_35667[(21)]);
var inst_35656 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35643);
var inst_35657 = cljs.core.pr_str.call(null,inst_35656);
var inst_35658 = [cljs.core.str("not required: "),cljs.core.str(inst_35657)].join('');
var inst_35659 = figwheel.client.utils.log.call(null,inst_35658);
var state_35667__$1 = state_35667;
var statearr_35708_35784 = state_35667__$1;
(statearr_35708_35784[(2)] = inst_35659);

(statearr_35708_35784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (6))){
var inst_35562 = (state_35667[(2)]);
var state_35667__$1 = state_35667;
var statearr_35709_35785 = state_35667__$1;
(statearr_35709_35785[(2)] = inst_35562);

(statearr_35709_35785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (28))){
var inst_35587 = (state_35667[(26)]);
var inst_35614 = (state_35667[(2)]);
var inst_35615 = cljs.core.not_empty.call(null,inst_35587);
var state_35667__$1 = (function (){var statearr_35710 = state_35667;
(statearr_35710[(29)] = inst_35614);

return statearr_35710;
})();
if(cljs.core.truth_(inst_35615)){
var statearr_35711_35786 = state_35667__$1;
(statearr_35711_35786[(1)] = (29));

} else {
var statearr_35712_35787 = state_35667__$1;
(statearr_35712_35787[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (25))){
var inst_35585 = (state_35667[(23)]);
var inst_35601 = (state_35667[(2)]);
var inst_35602 = cljs.core.not_empty.call(null,inst_35585);
var state_35667__$1 = (function (){var statearr_35713 = state_35667;
(statearr_35713[(30)] = inst_35601);

return statearr_35713;
})();
if(cljs.core.truth_(inst_35602)){
var statearr_35714_35788 = state_35667__$1;
(statearr_35714_35788[(1)] = (26));

} else {
var statearr_35715_35789 = state_35667__$1;
(statearr_35715_35789[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (34))){
var inst_35636 = (state_35667[(2)]);
var state_35667__$1 = state_35667;
if(cljs.core.truth_(inst_35636)){
var statearr_35716_35790 = state_35667__$1;
(statearr_35716_35790[(1)] = (38));

} else {
var statearr_35717_35791 = state_35667__$1;
(statearr_35717_35791[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (17))){
var state_35667__$1 = state_35667;
var statearr_35718_35792 = state_35667__$1;
(statearr_35718_35792[(2)] = recompile_dependents);

(statearr_35718_35792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (3))){
var state_35667__$1 = state_35667;
var statearr_35719_35793 = state_35667__$1;
(statearr_35719_35793[(2)] = null);

(statearr_35719_35793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (12))){
var inst_35558 = (state_35667[(2)]);
var state_35667__$1 = state_35667;
var statearr_35720_35794 = state_35667__$1;
(statearr_35720_35794[(2)] = inst_35558);

(statearr_35720_35794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (2))){
var inst_35520 = (state_35667[(13)]);
var inst_35527 = cljs.core.seq.call(null,inst_35520);
var inst_35528 = inst_35527;
var inst_35529 = null;
var inst_35530 = (0);
var inst_35531 = (0);
var state_35667__$1 = (function (){var statearr_35721 = state_35667;
(statearr_35721[(7)] = inst_35531);

(statearr_35721[(8)] = inst_35529);

(statearr_35721[(9)] = inst_35530);

(statearr_35721[(10)] = inst_35528);

return statearr_35721;
})();
var statearr_35722_35795 = state_35667__$1;
(statearr_35722_35795[(2)] = null);

(statearr_35722_35795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (23))){
var inst_35581 = (state_35667[(19)]);
var inst_35585 = (state_35667[(23)]);
var inst_35584 = (state_35667[(24)]);
var inst_35589 = (state_35667[(25)]);
var inst_35587 = (state_35667[(26)]);
var inst_35592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35594 = (function (){var all_files = inst_35581;
var res_SINGLEQUOTE_ = inst_35584;
var res = inst_35585;
var files_not_loaded = inst_35587;
var dependencies_that_loaded = inst_35589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35581,inst_35585,inst_35584,inst_35589,inst_35587,inst_35592,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35593){
var map__35723 = p__35593;
var map__35723__$1 = ((((!((map__35723 == null)))?((((map__35723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35723):map__35723);
var request_url = cljs.core.get.call(null,map__35723__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35581,inst_35585,inst_35584,inst_35589,inst_35587,inst_35592,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35595 = cljs.core.reverse.call(null,inst_35589);
var inst_35596 = cljs.core.map.call(null,inst_35594,inst_35595);
var inst_35597 = cljs.core.pr_str.call(null,inst_35596);
var inst_35598 = figwheel.client.utils.log.call(null,inst_35597);
var state_35667__$1 = (function (){var statearr_35725 = state_35667;
(statearr_35725[(31)] = inst_35592);

return statearr_35725;
})();
var statearr_35726_35796 = state_35667__$1;
(statearr_35726_35796[(2)] = inst_35598);

(statearr_35726_35796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (35))){
var state_35667__$1 = state_35667;
var statearr_35727_35797 = state_35667__$1;
(statearr_35727_35797[(2)] = true);

(statearr_35727_35797[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (19))){
var inst_35571 = (state_35667[(12)]);
var inst_35577 = figwheel.client.file_reloading.expand_files.call(null,inst_35571);
var state_35667__$1 = state_35667;
var statearr_35728_35798 = state_35667__$1;
(statearr_35728_35798[(2)] = inst_35577);

(statearr_35728_35798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (11))){
var state_35667__$1 = state_35667;
var statearr_35729_35799 = state_35667__$1;
(statearr_35729_35799[(2)] = null);

(statearr_35729_35799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (9))){
var inst_35560 = (state_35667[(2)]);
var state_35667__$1 = state_35667;
var statearr_35730_35800 = state_35667__$1;
(statearr_35730_35800[(2)] = inst_35560);

(statearr_35730_35800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (5))){
var inst_35531 = (state_35667[(7)]);
var inst_35530 = (state_35667[(9)]);
var inst_35533 = (inst_35531 < inst_35530);
var inst_35534 = inst_35533;
var state_35667__$1 = state_35667;
if(cljs.core.truth_(inst_35534)){
var statearr_35731_35801 = state_35667__$1;
(statearr_35731_35801[(1)] = (7));

} else {
var statearr_35732_35802 = state_35667__$1;
(statearr_35732_35802[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (14))){
var inst_35541 = (state_35667[(22)]);
var inst_35550 = cljs.core.first.call(null,inst_35541);
var inst_35551 = figwheel.client.file_reloading.eval_body.call(null,inst_35550,opts);
var inst_35552 = cljs.core.next.call(null,inst_35541);
var inst_35528 = inst_35552;
var inst_35529 = null;
var inst_35530 = (0);
var inst_35531 = (0);
var state_35667__$1 = (function (){var statearr_35733 = state_35667;
(statearr_35733[(7)] = inst_35531);

(statearr_35733[(8)] = inst_35529);

(statearr_35733[(9)] = inst_35530);

(statearr_35733[(10)] = inst_35528);

(statearr_35733[(32)] = inst_35551);

return statearr_35733;
})();
var statearr_35734_35803 = state_35667__$1;
(statearr_35734_35803[(2)] = null);

(statearr_35734_35803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (45))){
var state_35667__$1 = state_35667;
var statearr_35735_35804 = state_35667__$1;
(statearr_35735_35804[(2)] = null);

(statearr_35735_35804[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (26))){
var inst_35581 = (state_35667[(19)]);
var inst_35585 = (state_35667[(23)]);
var inst_35584 = (state_35667[(24)]);
var inst_35589 = (state_35667[(25)]);
var inst_35587 = (state_35667[(26)]);
var inst_35604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35606 = (function (){var all_files = inst_35581;
var res_SINGLEQUOTE_ = inst_35584;
var res = inst_35585;
var files_not_loaded = inst_35587;
var dependencies_that_loaded = inst_35589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35581,inst_35585,inst_35584,inst_35589,inst_35587,inst_35604,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35605){
var map__35736 = p__35605;
var map__35736__$1 = ((((!((map__35736 == null)))?((((map__35736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35736):map__35736);
var namespace = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35736__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35581,inst_35585,inst_35584,inst_35589,inst_35587,inst_35604,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35607 = cljs.core.map.call(null,inst_35606,inst_35585);
var inst_35608 = cljs.core.pr_str.call(null,inst_35607);
var inst_35609 = figwheel.client.utils.log.call(null,inst_35608);
var inst_35610 = (function (){var all_files = inst_35581;
var res_SINGLEQUOTE_ = inst_35584;
var res = inst_35585;
var files_not_loaded = inst_35587;
var dependencies_that_loaded = inst_35589;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35581,inst_35585,inst_35584,inst_35589,inst_35587,inst_35604,inst_35606,inst_35607,inst_35608,inst_35609,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35581,inst_35585,inst_35584,inst_35589,inst_35587,inst_35604,inst_35606,inst_35607,inst_35608,inst_35609,state_val_35668,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35611 = setTimeout(inst_35610,(10));
var state_35667__$1 = (function (){var statearr_35738 = state_35667;
(statearr_35738[(33)] = inst_35609);

(statearr_35738[(34)] = inst_35604);

return statearr_35738;
})();
var statearr_35739_35805 = state_35667__$1;
(statearr_35739_35805[(2)] = inst_35611);

(statearr_35739_35805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (16))){
var state_35667__$1 = state_35667;
var statearr_35740_35806 = state_35667__$1;
(statearr_35740_35806[(2)] = reload_dependents);

(statearr_35740_35806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (38))){
var inst_35621 = (state_35667[(16)]);
var inst_35638 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35621);
var state_35667__$1 = state_35667;
var statearr_35741_35807 = state_35667__$1;
(statearr_35741_35807[(2)] = inst_35638);

(statearr_35741_35807[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (30))){
var state_35667__$1 = state_35667;
var statearr_35742_35808 = state_35667__$1;
(statearr_35742_35808[(2)] = null);

(statearr_35742_35808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (10))){
var inst_35541 = (state_35667[(22)]);
var inst_35543 = cljs.core.chunked_seq_QMARK_.call(null,inst_35541);
var state_35667__$1 = state_35667;
if(inst_35543){
var statearr_35743_35809 = state_35667__$1;
(statearr_35743_35809[(1)] = (13));

} else {
var statearr_35744_35810 = state_35667__$1;
(statearr_35744_35810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (18))){
var inst_35575 = (state_35667[(2)]);
var state_35667__$1 = state_35667;
if(cljs.core.truth_(inst_35575)){
var statearr_35745_35811 = state_35667__$1;
(statearr_35745_35811[(1)] = (19));

} else {
var statearr_35746_35812 = state_35667__$1;
(statearr_35746_35812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (42))){
var state_35667__$1 = state_35667;
var statearr_35747_35813 = state_35667__$1;
(statearr_35747_35813[(2)] = null);

(statearr_35747_35813[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (37))){
var inst_35633 = (state_35667[(2)]);
var state_35667__$1 = state_35667;
var statearr_35748_35814 = state_35667__$1;
(statearr_35748_35814[(2)] = inst_35633);

(statearr_35748_35814[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35668 === (8))){
var inst_35528 = (state_35667[(10)]);
var inst_35541 = (state_35667[(22)]);
var inst_35541__$1 = cljs.core.seq.call(null,inst_35528);
var state_35667__$1 = (function (){var statearr_35749 = state_35667;
(statearr_35749[(22)] = inst_35541__$1);

return statearr_35749;
})();
if(inst_35541__$1){
var statearr_35750_35815 = state_35667__$1;
(statearr_35750_35815[(1)] = (10));

} else {
var statearr_35751_35816 = state_35667__$1;
(statearr_35751_35816[(1)] = (11));

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
});})(c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28732__auto__,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto____0 = (function (){
var statearr_35755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35755[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto__);

(statearr_35755[(1)] = (1));

return statearr_35755;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto____1 = (function (state_35667){
while(true){
var ret_value__28734__auto__ = (function (){try{while(true){
var result__28735__auto__ = switch__28732__auto__.call(null,state_35667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28735__auto__;
}
break;
}
}catch (e35756){if((e35756 instanceof Object)){
var ex__28736__auto__ = e35756;
var statearr_35757_35817 = state_35667;
(statearr_35757_35817[(5)] = ex__28736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35818 = state_35667;
state_35667 = G__35818;
continue;
} else {
return ret_value__28734__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto__ = function(state_35667){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto____1.call(this,state_35667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28733__auto__;
})()
;})(switch__28732__auto__,c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28846__auto__ = (function (){var statearr_35758 = f__28845__auto__.call(null);
(statearr_35758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28844__auto__);

return statearr_35758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28846__auto__);
});})(c__28844__auto__,map__35513,map__35513__$1,opts,before_jsload,on_jsload,reload_dependents,map__35514,map__35514__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28844__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35821,link){
var map__35824 = p__35821;
var map__35824__$1 = ((((!((map__35824 == null)))?((((map__35824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35824):map__35824);
var file = cljs.core.get.call(null,map__35824__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35824,map__35824__$1,file){
return (function (p1__35819_SHARP_,p2__35820_SHARP_){
if(cljs.core._EQ_.call(null,p1__35819_SHARP_,p2__35820_SHARP_)){
return p1__35819_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35824,map__35824__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35830){
var map__35831 = p__35830;
var map__35831__$1 = ((((!((map__35831 == null)))?((((map__35831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35831):map__35831);
var match_length = cljs.core.get.call(null,map__35831__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35831__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35826_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35826_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35833_SHARP_,p2__35834_SHARP_){
return cljs.core.assoc.call(null,p1__35833_SHARP_,cljs.core.get.call(null,p2__35834_SHARP_,key),p2__35834_SHARP_);
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
var loaded_f_datas_35835 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35835);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35835);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35836,p__35837){
var map__35842 = p__35836;
var map__35842__$1 = ((((!((map__35842 == null)))?((((map__35842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35842):map__35842);
var on_cssload = cljs.core.get.call(null,map__35842__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35843 = p__35837;
var map__35843__$1 = ((((!((map__35843 == null)))?((((map__35843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35843):map__35843);
var files_msg = map__35843__$1;
var files = cljs.core.get.call(null,map__35843__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1538702796151