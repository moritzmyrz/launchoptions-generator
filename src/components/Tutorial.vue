<template>
    <div id="content1">
        <h2>
            How to Set Launch Options
        </h2>
        <v-stepper dark non-linear show v-model="e1">
            <v-stepper-header>
                <v-stepper-step step="1" :complete="e1" color="amber darken-2">Open Properties</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2" color="amber darken-2">Set Launch Options</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1" id="step1">
                    <img src="https://totalcsgo.com/blog/images/csgo-properties.png" alt="Thankfully, setting up launch options via Steam is very straightforward. Open Steam, pick Library, right-click Counter-Strike: Global Offensive, and then click Properties." id="img1">
                    <p>Thankfully, setting up launch options via Steam is very straightforward. Open Steam, pick Library, right-click Counter-Strike: Global Offensive, and then click Properties.</p>
                    <v-btn
                        elevation="7"
                        medium
                        raised
                        id="nextBtn"
                        color="green darken-1"
                        @click="e1 = 2"
                    >
                        Next<v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-stepper-content>
                <v-stepper-content step="2" id="step2">
                    <img src="https://totalcsgo.com/blog/images/csgo-launch-options.png" alt="Then to open the Launch Options window, press 'Set Launch Options...'" id="img2">
                    <p>To copy your launch options, click your launch options above to copy them.</p>
                    <p>Then to open the Launch Options window, press 'Set Launch Options...'</p>
                    <p>Paste your launch options in, and click OK.</p>
                    <v-btn
                        elevation="7"
                        medium
                        raised
                        id="nextBtn"
                        color="red darken-1"
                        @click="e1 = 1"
                    >
                        <v-icon>mdi-chevron-left</v-icon>Previous
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            e1: 1
        }
    }
}
</script>

<style scoped>
#content1 {
    background: #22223B;
    width: 70%;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 2em;
    text-align: left;
}

#content1 > h2 {
    color: white;
    text-align: center;
    font-size: 36px;
}

#nextBtn {
    align-self: center;
    justify-self: center;
}

#step1, #step2 {
    color: white;
}
#list > li::marker {
    margin-left: 3em;
}
@media screen and (max-width: 1500px) {
    #content1 {
        width: 90%;
    }
}
@media screen and (min-width: 1400px) {
    #img1, #img2 {
        float: left;
        margin-right: 1em;
    }
}
.theme--dark.v-stepper {
    background: #3B3E54;
}
#img1, #img2 {
    max-width: 100%;
    max-height: 100%;
}
</style>