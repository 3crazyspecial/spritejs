(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{562:function(n,e,s){"use strict";s.r(e),e.default="const {Scene} = spritejs;\nconst {Mesh3d, shaders} = spritejs.ext3d;\nconst container = document.getElementById('container');\nconst scene = new Scene({\n  container,\n  displayRatio: 2,\n});\nconst layer = scene.layer3d('fglayer', {\n  camera: {\n    fov: 45,\n    pos: [-2, 2, 2],\n  },\n  directionalLight: [0.5, 1.0, -0.3, 0.15],\n});\n\nconst program = layer.createProgram(shaders.NORMAL);\n\nconst model = layer.loadModel('https://s2.ssl.qhres.com/static/bf607b5f64a91492.json');\nconst macow = new Mesh3d(program, {model});\nlayer.append(macow);\nlayer.setOrbit({target: [0, 0.7, 0]});"}}]);