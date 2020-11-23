<template>
    <div id="content">
        <template>
            <v-row justify="center">
                <v-dialog
                v-model="copyDialog"
                persistent
                max-width="400"
                >
                <v-card>
                    <v-card-title class="headline">
                        <v-icon color="green accent-4" id="copiedIcon">mdi-check-circle</v-icon>  Launch Options Copied
                    </v-card-title>
                    <v-card-text>Follow the tutorial below to enable your launch options.</v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="copyDone"
                    >
                        OK
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-row>
        </template>
        <div id="result" v-if="
        selected.length != 0 || 
        tickrate.length != 0 || 
        refresh.length != 0 || 
        exec.length != 0 || 
        fps_max.length != 0 || 
        threads.length != 0 ||
        lang.length != 0 || 
        width.length != 0 ||
        height.length != 0 || 
        y.length != 0 ||
        x.length != 0 ||
        r_dynamic != false
        " @click="copy"> 
            {{ selected.join(" ") }}
            <span v-if="tickrate.length != 0">{{fixedTickrate}}</span>
            <span v-if="refresh.length != 0">{{fixedRefresh}}</span>
            <span v-if="exec.length != 0">{{fixedExec}}</span>
            <span v-if="fps_max.length != 0">{{fixedFps_max}}</span>
            <span v-if="threads.length != 0">{{fixedThreads}}</span>
            <span v-if="lang.length != 0">{{fixedLang}}</span>
            <span v-if="width.length != 0">{{fixedWidth}}</span>
            <span v-if="height.length != 0">{{fixedHeight}}</span>
            <span v-if="y.length != 0">{{fixedY}}</span>
            <span v-if="x.length != 0">{{fixedX}}</span>
            <span v-if="r_dynamic != false"> +r_dynamic 0</span>

        </div>
        <div id="result" v-else @click="copy">
            -example select your launch options below, and click me to copy!
        </div>
        <v-container fluid class="boxes">
            <span>
                <v-checkbox v-model="selected" label="fullscreen" :disabled="selected.includes('-windowed')" value="-fullscreen" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option forces CS:GO to start in fullscreen mode.</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox v-model="selected" label="windowed" :disabled="selected.includes('-fullscreen')" value="-windowed" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option forces CS:GO to start in windowed mode.</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox v-model="selected" label="noborder" value="-noborder" :disabled="selected.includes('-fullscreen')" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option removes the border from windowed mode (i.e. there will be no Windows UI that usually shows the "X/Maximize/Minimize" buttons in the top right).</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox v-model="selected" label="disable_d3d9ex" value="-disable_d3d9ex" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option disables DirectX 9Ex.</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox v-model="selected" label="mat_disable_fancy_blending" value="+mat_disable_fancy_blending 1" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option will "disable fancy blending" of textures, making your game's textures appear less detailed and more smooth. May increase FPS.</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox v-model="selected" label="cl_forcepreload" value="+cl_forcepreload 1" :disabled="selected.includes('-nopreload')" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This is actually a console command, but commonly mislabeled as a launch option. It will force you client to preload models.</span>
                </v-tooltip>
            </span>

            <span>
                <v-checkbox v-model="selected" label="high" value="-high" dark ></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option will make the CS:GO process run at "high priority" on your computer. Effectively, this means that CS:GO will take priority over other processes running on your computer at a lower priority.</span>
                </v-tooltip>
            </span>

            <span>
                <v-checkbox v-model="selected" label="r_emulate_g" value="-r_emulate_g" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option only works for Windows - it will make the game emulate OpenGL, which can lead to an FPS boost.</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox v-model="selected" label="softparticlesdefaultoff" value="-softparticlesdefaultoff" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option makes CS:GO render particles without feathering (scene depth blending).</span>
                </v-tooltip>
            </span>

            <span>
                <v-checkbox v-model="selected" label="nohltv" value="-nohltv" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option turns off all Source TV features.</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox v-model="selected" label="console" value="-console" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option makes the game start with the console opened.</span>
                </v-tooltip>
            </span>
            
            <span>
                <v-checkbox v-model="selected" label="novid" value="-novid" dark ></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option makes the game skip the Valve/CS:GO intro video when you load it up - i.e. you'll go straight to the game.</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox v-model="selected" label="nojoy" value="-nojoy" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option makes the game drop all joystick support, which can decrease the amount of RAM it uses.</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox v-model="selected" label="limitvsconst" value="-limitvsconst" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option limits hardware vertex shader constants to 256.</span>
                </v-tooltip>
            </span>
            
            <span>
                <v-checkbox v-model="selected" label="forcenovsync" value="-forcenovsync" dark ></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option forces CS:GO to not use VSync. VSync syncs the vertical refresh rate of your monitor with the FPS of your game. Whilst VSync can help prevent screen tearing and reduce power consumption, in most cases it will cause input lag, make your FPS seem slower, and cause other issues - i.e. the negatives will greatly outweigh the positives.</span>
                </v-tooltip>
            </span>
            
            <span>
                <v-checkbox v-model="selected" label="violence_hblood" value="+violence_hblood 0" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option removes blood from the game. Since the removal of the -lv (low violence) launch option, this launch option is your best bet at getting a game close to the low violence version.</span>
                </v-tooltip>
            </span>
            
            <span>
                <v-checkbox v-model="selected" label="autoconfig" value="-autoconfig" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option will force your game to start up with the default configuration settings for the game - you can change the settings once the game has started, but when you restart with this launch option, they will be reset to default again.</span>
                </v-tooltip>
            </span>

            
            <span>
                <v-checkbox v-model="selected" label="nopreload" value="-nopreload" :disabled="selected.includes('+cl_forcepreload 1')" dark ></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option forces models not to be preloaded. Whilst this will have a different effect for every computer, chances are, this command will make games/maps load faster, but may cause worse performance during actual gameplay. This is because models not preloaded when the map/game is loading will need to be loaded at a later time, likely at the exact moment they are needed, and this will likely add extra latency. For example, if you have preloading disabled and enter an area of a map that requires you load a new model, you will need to wait for the game to load that model from your disk (slow) to memory/cache, adding latency - with preloading enabled, the model would already be in your memory, decreasing the amount of time it takes for the game to access and render that model.</span>
                </v-tooltip>
            </span>
            <span>
                <v-checkbox  v-model="r_dynamic" :label="`r_dynamic 0`" dark></v-checkbox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>Like some other "launch options" in this list, this is a console command commonly mislabeled as a launch option. Use either "+r_dynamic 0" to disable dynamic lighting or "+r_dynamic 1" to enable it (default). Setting this to 0 can improve FPS slightly but will remove some lighting features from the game, like the flash from flashbangs when they are near smokes, which can cause the negatives of no dynamic lighting to outweigh the positives.</span>
                </v-tooltip>
            </span>








            <span class="txt-input">
                <v-combobox v-model="tickrate" dark :items="tickrates" :label="`-tickrate ${tickrate}`" value="" @input="updateData" ></v-combobox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option sets the tick rate of any server/single player game you run from your client to the number that you replace [tick rate] with ("-tickrate 128" recommended). In effect, any "Offline With Bots" games you play will be ran at this tickrate.</span>
                </v-tooltip>
            </span>
            <span class="txt-input">
                <v-combobox v-model="refresh" dark :items="refreshrates" :label="`-refresh ${refresh}`" value="" @input="updateData" ></v-combobox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>The -refresh launch option sets the refresh rate of your client: replace [refresh rate] with your desired refresh rate. The refresh rate (in hz) is how many times per second your monitor will update - at 60hz, your monitor is effectively showing 60 frames per second. For 144hz monitors, set this to "-refresh 144" so that your game refreshes 144 times a second.</span>
                </v-tooltip>
            </span>
            <span class="txt-input">
                <v-text-field v-model="exec" dark :label="`+exec ${exec.length != 0 ? exec : 'example'}.cfg`" value="" @input="updateData" ></v-text-field>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option will execute all commands a specified file - replace [file name] with the name of the file you wish to execute (e.g. autoexec.cfg). The file should be placed in the "Steam\SteamApps\common\Counter-Strike Global Offensive\csgo\cfg" folder.</span>
                </v-tooltip>
            </span>
            
            <span class="txt-input">
                <v-combobox v-model="fps_max" dark :items="framelimits" :label="`+fps_max ${fps_max.length != 0 ? fps_max : '0'}`" value="" @input="updateData" ></v-combobox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option sets the maximum frames-per-second your game will run at. Replace [amount] with the amount you want to limit your game to. Setting it to 0 ("-fps_max 0") will remove any limit, making your game run at the highest FPS possible.</span>
                </v-tooltip>
            </span>
            <span class="txt-input">
                <v-combobox :items="sugthreads" v-model="threads" dark :label="`-threads ${threads}`" value="" @input="updateData" ></v-combobox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option sets the amount of processor threads that CS:GO will use (e.g. -threads 4 will make CS:GO use 4 threads). We recommend that you do not use this launch option as it can cause instability and other problems - generally, CS:GO does a good job of managing its thread usage.</span>
                </v-tooltip>
            </span>
            <span class="txt-input">
                <v-combobox :items="languages" v-model="lang" dark :label="`-language ${lang}`" value="" @input="updateData" ></v-combobox>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option makes CS:GO start in the language that you replace [language name] with - e.g. "-language english" will make CS:GO start in English.</span>
                </v-tooltip>
            </span>
            
            <span class="txt-input">
                <v-text-field v-model="width" dark :label="`-width ${width}`" value="" @input="updateData" :disabled="selected.includes('-fullscreen')" ></v-text-field>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option sets the width of your CS:GO window in pixels (e.g. "-width 1920").</span>
                </v-tooltip>
            </span>
            <span class="txt-input">
                <v-text-field v-model="height" dark :label="`-height ${height}`" value="" @input="updateData" :disabled="selected.includes('-fullscreen')" ></v-text-field>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>	This launch option sets the height of your CS:GO window in pixels (e.g. "-height 1080").</span>
                </v-tooltip>
            </span>
            
            <span class="txt-input">
                <v-text-field v-model="x" dark :label="`-x ${x}`" value="" @input="updateData" :disabled="selected.includes('-fullscreen')" ></v-text-field>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option sets the position of your CS:GO window on the X axis of your monitor. In other words, this sets how far to the right of the left side of your screen CS:GO should be. For example "-x 100" would make CS:GO start 100 pixels away from the left side of your screen (there would be a 100 pixel gap between the left side of your screen and the CS:GO window).</span>
                </v-tooltip>
            </span>
            
            <span class="txt-input">
                <v-text-field v-model="y" dark :label="`-y ${y}`" value="" @input="updateData" :disabled="selected.includes('-fullscreen')" ></v-text-field>
                <v-tooltip bottom max-width="24em">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon size="20" class="help-ico" color="grey lighten-4" v-bind="attrs" v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    <span>This launch option sets the position of your CS:GO window on the Y axis of your monitor. In other words, this sets how far down from the top of your screen CS:GO should be. For example "-y 100" would make CS:GO start 100 pixels down from the top of your screen (there would be a 100 pixel gap between the top of your screen and the CS:GO window).</span>
                </v-tooltip>
            </span>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            copyDialog: false,
            result: "",
            tickrate: "",
            fixedTickrate: "",
            tickrates: [
                "64",
                "102.4",
                "128"
            ],

            refresh: "",
            fixedRefresh: "",
            refreshrates: [
                "60",
                "75",
                "90",
                "120",
                "144",
                "165",
                "240",
                "360"
            ],

            exec: "",
            fixedExec: "",

            fps_max: "",
            fixedFps_max: "",
            framelimits: [
                "0",
                "60",
                "120",
                "144",
                "165",
                "240",
                "300",
                "360"
            ],

            threads: "",
            fixedThreads: "",
            sugthreads: [
                "2",
                "4",
                "6",
                "8",
                "12",
                "24",
                "32"
            ],

            lang: "",
            fixedLang: "",
            languages: [
                "english",
                "czech",
                "danish",
                "dutch",
                "finnish",
                "french",
                "german",
                "hungarian",
                "italian",
                "japanese",
                "korean",
                "norwegian",
                "polish",
                "portuguese",
                "romanian",
                "russian"
            ],

            width: "",
            fixedWidth: "",

            height: "",
            fixedHeight: "",

            x: "",
            fixedX: "",

            y: "",
            fixedY: "",

            r_dynamic: false,

            fullscreen: false,

            selected: []
        }
    },
    methods: {
        updateData () {
            this.fixedTickrate = ` -tickrate ${this.tickrate}`

            this.fixedRefresh = ` -refresh ${this.refresh}`

            this.fixedFps_max = ` +fps_max ${this.fps_max}`

            this.fixedThreads = ` -threads ${this.threads}`

            this.fixedLang = ` -language ${this.lang}`

            this.fixedWidth = ` -width ${this.width}`

            this.fixedHeight = ` -height ${this.height}`

            this.fixedX = ` -x ${this.x}`

            this.fixedY = ` -y ${this.y}`

            if (this.exec.length == 0)
                this.fixedExec = ` +exec example.cfg`
            else
                this.fixedExec = ` +exec ${this.exec}.cfg`
        },
        copy () {
            const result = document.getElementById("result");
            var text = result.innerText;
            navigator.clipboard.writeText(text).then(function() {
            console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
            console.error('Async: Could not copy text: ', err);
            });
            this.copyDialog = true
        },
        copyDone () {
            var elmnt = document.getElementById("content1");
            elmnt.scrollIntoView({behavior: 'smooth', block: 'end'});
            this.copyDialog = false;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#content {
    background: #22223B;
    width: 70%;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 2em;
    text-align: left;
    
}

.txt-input {
    width: 200px;
}

#result {
    background: #161627;
    border-radius: 7px;
    padding: 7px;
    color: white;
    font-family: 'Source Code Pro', monospace;
}

#result:hover {
    cursor: pointer;
}

#copiedIcon {
    margin-right: .5em;
}

.boxes {
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    place-items: center;
}

@media screen and (max-width: 1500px) {
    #content {
        width: 90%;
    }
    .boxes {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 1100px) {
    .boxes {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (max-width: 800px) {
    .boxes {
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 540px) {
    .boxes {
        grid-template-columns: 1fr;
    }
}

.boxes > span {
    display: flex;
    justify-items: center;
    justify-content: center;
}

.help-ico {
    margin-left: .3em;
}

</style>