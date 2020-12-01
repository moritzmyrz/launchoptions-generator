(function(e){function t(t){for(var a,s,l=t[0],r=t[1],c=t[2],h=0,u=[];h<l.length;h++)s=l[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,l=1;l<o.length;l++){var r=o[l];0!==i[r]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},i={app:0},n=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=r;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"35be":function(e,t,o){},"443d":function(e,t,o){"use strict";o("dc03")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("div",{attrs:{id:"app1"}},[o("h1",{attrs:{id:"title"}},[e._v(" CS: GO Launch Option Generator "),o("h3",[e._v(" by Moritz Myrseth ")])]),o("Content"),o("Tutorial")],1),o("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"pink darken-2",id:"contribute-btn",href:"https://github.com/moritzmyrz/launchoptions-generator",target:"_blank"}},[o("v-icon",{attrs:{dark:""}},[e._v(" mdi-github ")])],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"content"}},[[o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:e.copyDialog,callback:function(t){e.copyDialog=t},expression:"copyDialog"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[o("v-icon",{attrs:{color:"green accent-4",id:"copiedIcon"}},[e._v("mdi-check-circle")]),e._v(" Launch Options Copied ")],1),o("v-card-text",[e._v("Follow the tutorial below to enable your launch options.")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.copyDone}},[e._v(" OK ")])],1)],1)],1)],1)],0!=e.selected.length||0!=e.tickrate.length||0!=e.refresh.length||0!=e.exec.length||0!=e.fps_max.length||0!=e.threads.length||0!=e.lang.length||0!=e.width.length||0!=e.height.length||0!=e.y.length||0!=e.x.length||0!=e.r_dynamic?o("div",{attrs:{id:"result"},on:{click:e.copy}},[e._v(" "+e._s(e.selected.join(" "))+" "),0!=e.tickrate.length?o("span",[e._v(e._s(e.fixedTickrate))]):e._e(),0!=e.refresh.length?o("span",[e._v(e._s(e.fixedRefresh))]):e._e(),0!=e.exec.length?o("span",[e._v(e._s(e.fixedExec))]):e._e(),0!=e.fps_max.length?o("span",[e._v(e._s(e.fixedFps_max))]):e._e(),0!=e.threads.length?o("span",[e._v(e._s(e.fixedThreads))]):e._e(),0!=e.lang.length?o("span",[e._v(e._s(e.fixedLang))]):e._e(),0!=e.width.length?o("span",[e._v(e._s(e.fixedWidth))]):e._e(),0!=e.height.length?o("span",[e._v(e._s(e.fixedHeight))]):e._e(),0!=e.y.length?o("span",[e._v(e._s(e.fixedY))]):e._e(),0!=e.x.length?o("span",[e._v(e._s(e.fixedX))]):e._e(),0!=e.r_dynamic?o("span",[e._v(" +r_dynamic 0")]):e._e()]):o("div",{attrs:{id:"result"},on:{click:e.copy}},[e._v(" -example select your launch options below, and click me to copy! ")]),o("v-container",{staticClass:"boxes",attrs:{fluid:""}},[o("span",[o("v-checkbox",{attrs:{label:"fullscreen",disabled:e.selected.includes("-windowed"),value:"-fullscreen",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option forces CS:GO to start in fullscreen mode.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"windowed",disabled:e.selected.includes("-fullscreen"),value:"-windowed",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option forces CS:GO to start in windowed mode.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"noborder",value:"-noborder",disabled:e.selected.includes("-fullscreen"),dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option removes the border from windowed mode (i.e. there will be no Windows UI that usually shows the "X/Maximize/Minimize" buttons in the top right).')])])],1),o("span",[o("v-checkbox",{attrs:{label:"disable_d3d9ex",value:"-disable_d3d9ex",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option disables DirectX 9Ex.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"mat_disable_fancy_blending",value:"+mat_disable_fancy_blending 1",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option will "disable fancy blending" of textures, making your game\'s textures appear less detailed and more smooth. May increase FPS.')])])],1),o("span",[o("v-checkbox",{attrs:{label:"cl_forcepreload",value:"+cl_forcepreload 1",disabled:e.selected.includes("-nopreload"),dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This is actually a console command, but commonly mislabeled as a launch option. It will force you client to preload models.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"high",value:"-high",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option will make the CS:GO process run at "high priority" on your computer. Effectively, this means that CS:GO will take priority over other processes running on your computer at a lower priority.')])])],1),o("span",[o("v-checkbox",{attrs:{label:"r_emulate_g",value:"-r_emulate_g",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option only works for Windows - it will make the game emulate OpenGL, which can lead to an FPS boost.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"softparticlesdefaultoff",value:"-softparticlesdefaultoff",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option makes CS:GO render particles without feathering (scene depth blending).")])])],1),o("span",[o("v-checkbox",{attrs:{label:"nohltv",value:"-nohltv",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option turns off all Source TV features.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"console",value:"-console",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option makes the game start with the console opened.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"novid",value:"-novid",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option makes the game skip the Valve/CS:GO intro video when you load it up - i.e. you'll go straight to the game.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"nojoy",value:"-nojoy",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option makes the game drop all joystick support, which can decrease the amount of RAM it uses.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"limitvsconst",value:"-limitvsconst",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option limits hardware vertex shader constants to 256.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"forcenovsync",value:"-forcenovsync",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option forces CS:GO to not use VSync. VSync syncs the vertical refresh rate of your monitor with the FPS of your game. Whilst VSync can help prevent screen tearing and reduce power consumption, in most cases it will cause input lag, make your FPS seem slower, and cause other issues - i.e. the negatives will greatly outweigh the positives.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"violence_hblood",value:"+violence_hblood 0",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option removes blood from the game. Since the removal of the -lv (low violence) launch option, this launch option is your best bet at getting a game close to the low violence version.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"autoconfig",value:"-autoconfig",dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option will force your game to start up with the default configuration settings for the game - you can change the settings once the game has started, but when you restart with this launch option, they will be reset to default again.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"nopreload",value:"-nopreload",disabled:e.selected.includes("+cl_forcepreload 1"),dark:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option forces models not to be preloaded. Whilst this will have a different effect for every computer, chances are, this command will make games/maps load faster, but may cause worse performance during actual gameplay. This is because models not preloaded when the map/game is loading will need to be loaded at a later time, likely at the exact moment they are needed, and this will likely add extra latency. For example, if you have preloading disabled and enter an area of a map that requires you load a new model, you will need to wait for the game to load that model from your disk (slow) to memory/cache, adding latency - with preloading enabled, the model would already be in your memory, decreasing the amount of time it takes for the game to access and render that model.")])])],1),o("span",[o("v-checkbox",{attrs:{label:"r_dynamic 0",dark:""},model:{value:e.r_dynamic,callback:function(t){e.r_dynamic=t},expression:"r_dynamic"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('Like some other "launch options" in this list, this is a console command commonly mislabeled as a launch option. Use either "+r_dynamic 0" to disable dynamic lighting or "+r_dynamic 1" to enable it (default). Setting this to 0 can improve FPS slightly but will remove some lighting features from the game, like the flash from flashbangs when they are near smokes, which can cause the negatives of no dynamic lighting to outweigh the positives.')])])],1),o("span",{staticClass:"txt-input"},[o("v-combobox",{attrs:{dark:"",items:e.tickrates,label:"-tickrate "+e.tickrate,value:""},on:{input:e.updateData},model:{value:e.tickrate,callback:function(t){e.tickrate=t},expression:"tickrate"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option sets the tick rate of any server/single player game you run from your client to the number that you replace [tick rate] with ("-tickrate 128" recommended). In effect, any "Offline With Bots" games you play will be ran at this tickrate.')])])],1),o("span",{staticClass:"txt-input"},[o("v-combobox",{attrs:{dark:"",items:e.refreshrates,label:"-refresh "+e.refresh,value:""},on:{input:e.updateData},model:{value:e.refresh,callback:function(t){e.refresh=t},expression:"refresh"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('The -refresh launch option sets the refresh rate of your client: replace [refresh rate] with your desired refresh rate. The refresh rate (in hz) is how many times per second your monitor will update - at 60hz, your monitor is effectively showing 60 frames per second. For 144hz monitors, set this to "-refresh 144" so that your game refreshes 144 times a second.')])])],1),o("span",{staticClass:"txt-input"},[o("v-text-field",{attrs:{dark:"",label:"+exec "+(0!=e.exec.length?e.exec:"example")+".cfg",value:""},on:{input:e.updateData},model:{value:e.exec,callback:function(t){e.exec=t},expression:"exec"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option will execute all commands a specified file - replace [file name] with the name of the file you wish to execute (e.g. autoexec.cfg). The file should be placed in the "Steam\\SteamApps\\common\\Counter-Strike Global Offensive\\csgo\\cfg" folder.')])])],1),o("span",{staticClass:"txt-input"},[o("v-combobox",{attrs:{dark:"",items:e.framelimits,label:"+fps_max "+(0!=e.fps_max.length?e.fps_max:"0"),value:""},on:{input:e.updateData},model:{value:e.fps_max,callback:function(t){e.fps_max=t},expression:"fps_max"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option sets the maximum frames-per-second your game will run at. Replace [amount] with the amount you want to limit your game to. Setting it to 0 ("-fps_max 0") will remove any limit, making your game run at the highest FPS possible.')])])],1),o("span",{staticClass:"txt-input"},[o("v-combobox",{attrs:{items:e.sugthreads,dark:"",label:"-threads "+e.threads,value:""},on:{input:e.updateData},model:{value:e.threads,callback:function(t){e.threads=t},expression:"threads"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v("This launch option sets the amount of processor threads that CS:GO will use (e.g. -threads 4 will make CS:GO use 4 threads). We recommend that you do not use this launch option as it can cause instability and other problems - generally, CS:GO does a good job of managing its thread usage.")])])],1),o("span",{staticClass:"txt-input"},[o("v-combobox",{attrs:{items:e.languages,dark:"",label:"-language "+e.lang,value:""},on:{input:e.updateData},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option makes CS:GO start in the language that you replace [language name] with - e.g. "-language english" will make CS:GO start in English.')])])],1),o("span",{staticClass:"txt-input"},[o("v-text-field",{attrs:{dark:"",label:"-width "+e.width,value:"",disabled:e.selected.includes("-fullscreen")},on:{input:e.updateData},model:{value:e.width,callback:function(t){e.width=t},expression:"width"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option sets the width of your CS:GO window in pixels (e.g. "-width 1920").')])])],1),o("span",{staticClass:"txt-input"},[o("v-text-field",{attrs:{dark:"",label:"-height "+e.height,value:"",disabled:e.selected.includes("-fullscreen")},on:{input:e.updateData},model:{value:e.height,callback:function(t){e.height=t},expression:"height"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v(' This launch option sets the height of your CS:GO window in pixels (e.g. "-height 1080").')])])],1),o("span",{staticClass:"txt-input"},[o("v-text-field",{attrs:{dark:"",label:"-x "+e.x,value:"",disabled:e.selected.includes("-fullscreen")},on:{input:e.updateData},model:{value:e.x,callback:function(t){e.x=t},expression:"x"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option sets the position of your CS:GO window on the X axis of your monitor. In other words, this sets how far to the right of the left side of your screen CS:GO should be. For example "-x 100" would make CS:GO start 100 pixels away from the left side of your screen (there would be a 100 pixel gap between the left side of your screen and the CS:GO window).')])])],1),o("span",{staticClass:"txt-input"},[o("v-text-field",{attrs:{dark:"",label:"-y "+e.y,value:"",disabled:e.selected.includes("-fullscreen")},on:{input:e.updateData},model:{value:e.y,callback:function(t){e.y=t},expression:"y"}}),o("v-tooltip",{attrs:{bottom:"","max-width":"24em"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,i=t.attrs;return[o("v-icon",e._g(e._b({staticClass:"help-ico",attrs:{size:"20",color:"grey lighten-4"}},"v-icon",i,!1),a),[e._v("mdi-help-circle-outline")])]}}])},[o("span",[e._v('This launch option sets the position of your CS:GO window on the Y axis of your monitor. In other words, this sets how far down from the top of your screen CS:GO should be. For example "-y 100" would make CS:GO start 100 pixels down from the top of your screen (there would be a 100 pixel gap between the top of your screen and the CS:GO window).')])])],1)])],2)},l=[],r=(o("ac1f"),{data:function(){return{copyDialog:!1,result:"",tickrate:"",fixedTickrate:"",tickrates:["64","102.4","128"],refresh:"",fixedRefresh:"",refreshrates:["60","75","90","120","144","165","240","360"],exec:"",fixedExec:"",fps_max:"",fixedFps_max:"",framelimits:["0","60","120","144","165","240","300","360"],threads:"",fixedThreads:"",sugthreads:["2","4","6","8","12","24","32"],lang:"",fixedLang:"",languages:["english","czech","danish","dutch","finnish","french","german","hungarian","italian","japanese","korean","norwegian","polish","portuguese","romanian","russian"],width:"",fixedWidth:"",height:"",fixedHeight:"",x:"",fixedX:"",y:"",fixedY:"",r_dynamic:!1,fullscreen:!1,selected:[]}},methods:{updateData:function(){this.fixedTickrate=" -tickrate ".concat(this.tickrate),this.fixedRefresh=" -refresh ".concat(this.refresh),this.fixedFps_max=" +fps_max ".concat(this.fps_max),this.fixedThreads=" -threads ".concat(this.threads),this.fixedLang=" -language ".concat(this.lang),this.fixedWidth=" -width ".concat(this.width),this.fixedHeight=" -height ".concat(this.height),this.fixedX=" -x ".concat(this.x),this.fixedY=" -y ".concat(this.y),0==this.exec.length?this.fixedExec=" +exec example.cfg":this.fixedExec=" +exec ".concat(this.exec,".cfg")},copy:function(){var e=document.getElementById("result"),t=e.innerText;navigator.clipboard.writeText(t).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})),this.copyDialog=!0},copyDone:function(){var e=document.getElementById("content1");e.scrollIntoView({behavior:"smooth",block:"end"}),this.copyDialog=!1}}}),c=r,d=(o("c9e8"),o("2877")),h=o("6544"),u=o.n(h),p=o("8336"),v=o("b0af"),m=o("99d9"),f=o("ac7c"),g=o("2b5d"),b=o("a523"),_=o("169a"),y=o("132d"),x=o("0fd9"),k=o("2fa4"),w=o("8654"),S=o("3a2f"),C=Object(d["a"])(c,s,l,!1,null,"1c318420",null),O=C.exports;u()(C,{VBtn:p["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCheckbox:f["a"],VCombobox:g["a"],VContainer:b["a"],VDialog:_["a"],VIcon:y["a"],VRow:x["a"],VSpacer:k["a"],VTextField:w["a"],VTooltip:S["a"]});var T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"content1"}},[o("h2",[e._v(" How to Set Launch Options ")]),o("v-stepper",{attrs:{dark:"","non-linear":"",show:""},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[o("v-stepper-header",[o("v-stepper-step",{attrs:{step:"1",complete:e.e1,color:"amber darken-2"}},[e._v("Open Properties")]),o("v-divider"),o("v-stepper-step",{attrs:{step:"2",color:"amber darken-2"}},[e._v("Set Launch Options")])],1),o("v-stepper-items",[o("v-stepper-content",{attrs:{step:"1",id:"step1"}},[o("img",{attrs:{src:"https://totalcsgo.com/blog/images/csgo-properties.png",alt:"Thankfully, setting up launch options via Steam is very straightforward. Open Steam, pick Library, right-click Counter-Strike: Global Offensive, and then click Properties.",id:"img1"}}),o("p",[e._v("Thankfully, setting up launch options via Steam is very straightforward. Open Steam, pick Library, right-click Counter-Strike: Global Offensive, and then click Properties.")]),o("v-btn",{attrs:{elevation:"7",medium:"",raised:"",id:"nextBtn",color:"green darken-1"},on:{click:function(t){e.e1=2}}},[e._v(" Next"),o("v-icon",[e._v("mdi-chevron-right")])],1)],1),o("v-stepper-content",{attrs:{step:"2",id:"step2"}},[o("img",{attrs:{src:"https://totalcsgo.com/blog/images/csgo-launch-options.png",alt:"Then to open the Launch Options window, press 'Set Launch Options...'",id:"img2"}}),o("p",[e._v("To copy your launch options, click your launch options above to copy them.")]),o("p",[e._v("Then to open the Launch Options window, press 'Set Launch Options...'")]),o("p",[e._v("Paste your launch options in, and click OK.")]),o("v-btn",{attrs:{elevation:"7",medium:"",raised:"",id:"nextBtn",color:"red darken-1"},on:{click:function(t){e.e1=1}}},[o("v-icon",[e._v("mdi-chevron-left")]),e._v("Previous ")],1)],1)],1)],1)],1)},z=[],V={data:function(){return{e1:1}}},G=V,D=(o("443d"),o("ce7e")),j=o("7e85"),P=o("e516"),L=o("9c54"),F=o("56a4"),I=Object(d["a"])(G,T,z,!1,null,"6661abff",null),E=I.exports;u()(I,{VBtn:p["a"],VDivider:D["a"],VIcon:y["a"],VStepper:j["a"],VStepperContent:P["a"],VStepperHeader:L["a"],VStepperItems:L["b"],VStepperStep:F["a"]});var M={name:"App",metaInfo:{title:"CS: GO Launch Option Generator"},components:{Content:O,Tutorial:E}},W=M,B=(o("034f"),o("7496")),A=Object(d["a"])(W,i,n,!1,null,null,null),R=A.exports;u()(A,{VApp:B["a"],VBtn:p["a"],VIcon:y["a"]});var X=o("f309");a["a"].use(X["a"]);var H=new X["a"]({}),Y=o("58ca");a["a"].config.productionTip=!1,a["a"].use(Y["a"]),new a["a"]({vuetify:H,render:function(e){return e(R)}}).$mount("#app")},"85ec":function(e,t,o){},c9e8:function(e,t,o){"use strict";o("35be")},dc03:function(e,t,o){}});
//# sourceMappingURL=app.80aa60e8.js.map