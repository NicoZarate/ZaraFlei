// ==UserScript==
// @name        Super Commenter sarasa
// @namespace   ZaraFlei
// @description This script will allow you to comment one product of Falabella's page and see another comments.
// @include     http://www.falabella.com.ar/falabella-ar/product/*
// @version     0.1
// @grant       none
// ==/UserScript==

var idWithBlank = document.getElementById("skuIdPicker").textContent.split(":")[1]; //obtengo el id del producto y espacios en blanco
var idProducto = idWithBlank.replace(/\s+/g,""); // dejo el id del producto sin espacios en blanco

//var miForm = "<p><a href='javascript:void(0)' onclick='window.open(\"https:\/\/www.google.com.ar\/\",\"\",\"width=700,height=400,noresize\");'>Click para abrir la ventana emergente</a><br>";
//var miForm = "<p><a href='javascript:void(0)' onclick='window.open(\"http:\/\/localhost:3000\/?grupo=aves\",\"\",\"width=700,height=400,noresize\");'>Click para abrir la ventana emergente</a><br>";

//var miForm = "<p><a href='javascript:void(0)' onclick='window.open(\"http:\/\/localhost:3000\/?idProducto=idProducto\",\"\",\"width=700,height=400,noresize\");'>Click para abrir la ventana emergente</a><br>";
var miForm = "<p><a href='javascript:void(0)' onclick='window.open(\"http:\/\/localhost:3000\",\"\",\"width=700,height=400,noresize\");'>Click para abrir la ventana emergente</a><br>";

document.getElementById("contenedorBanner").innerHTML =miForm; //con esto inserto el form en un contenedor existente

