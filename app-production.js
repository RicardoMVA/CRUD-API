!function(e){var r={};function n(t){if(r[t])return r[t].exports;var u=r[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)n.d(t,u,function(r){return e[r]}.bind(null,u));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=2)}([function(e,r){e.exports=require("express")},function(e,r){e.exports=require("mongoose")},function(e,r,n){n(3),e.exports=n(4)},function(e,r){e.exports=require("babel-polyfill")},function(e,r,n){"use strict";var t=d(n(0)),u=d(n(5)),o=d(n(1)),i=d(n(6)),s=d(n(7));function d(e){return e&&e.__esModule?e:{default:e}}var a=(0,t.default)();s.default.config(),a.set("view engine","ejs"),a.use(u.default.urlencoded({extended:!0})),a.use((0,i.default)("_method")),a.use(t.default.static(__dirname+"/public")),o.default.set("useCreateIndex",!0),o.default.set("useFindAndModify",!1);var c=process.env.DATABASEURL||"mongodb://localhost/user";o.default.connect(c,{useNewUrlParser:!0}),a.use(n(8)),a.listen(process.env.PORT||3e3,function(){console.log("Server running on localhost:3000")})},function(e,r){e.exports=require("body-parser")},function(e,r){e.exports=require("method-override")},function(e,r){e.exports=require("dotenv")},function(e,r,n){"use strict";var t=i(n(0)),u=i(n(9)),o=n(10);function i(e){return e&&e.__esModule?e:{default:e}}var s=t.default.Router();s.get("/",function(e,r){r.render("index")}),s.get("/users/new",function(e,r){r.render("new")}),s.post("/users",function(e,r){u.default.create(e.body.user,function(e,n){e?(0,o.checkErrorType)(r,e):r.redirect("/users")})}),s.get("/users",function(e,r){u.default.find({},function(e,n){e?(0,o.checkErrorType)(r,e):r.render("read",{users:n})})}),s.get("/users/:id",function(e,r){u.default.findById(e.params.id,function(e,n){e?(0,o.checkErrorType)(r,e):r.render("show",{user:n})})}),s.get("/api/users",function(e,r){u.default.find({},function(e,n){e?(console.log(e),r.json(e)):r.json(n)})}),s.get("/api/users/:id",function(e,r){u.default.findById(e.params.id,function(e,n){e?(console.log(e),r.json(e)):r.json(n)})}),s.get("/users/:id/edit",function(e,r){u.default.findById(e.params.id,function(e,n){e?(0,o.checkErrorType)(r,e):r.render("edit",{user:n})})}),s.put("/users/:id",function(e,r){u.default.findByIdAndUpdate(e.params.id,e.body.user,function(n,t){n?(0,o.checkErrorType)(r,n):r.redirect("/users/"+e.params.id)})}),s.delete("/users/:id",function(e,r){u.default.findByIdAndRemove(e.params.id,function(e){e?(0,o.checkErrorType)(r,e):r.redirect("/users")})}),e.exports=s},function(e,r,n){"use strict";var t,u=n(1),o=(t=u)&&t.__esModule?t:{default:t};var i=new u.Schema({name:{type:String,unique:!0,required:[!0,"is required"]},email:{type:String,unique:!0,required:[!0,"is required"],validate:{validator:function(e){return/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},message:"Invalid email"}},memberSince:{type:Date,default:Date.now}});e.exports=o.default.model("User",i)},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.checkErrorType=function(e,r){if(console.log(r),11e3===r.code)e.render("error",{error:"User validation failed: email and user must be unique"});else{var n=r.message;e.render("error",{error:n})}}}]);
//# sourceMappingURL=app-production.js.map