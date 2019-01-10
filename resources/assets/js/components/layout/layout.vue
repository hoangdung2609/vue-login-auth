<template>
    <v-app>
        <toolbar></toolbar>

            <v-layout>
                <v-flex xs2>
                    <navbar-component></navbar-component>
                </v-flex>
                <v-flex xs10 pa-15>
                    <router-view></router-view>
                </v-flex>
            </v-layout>

    </v-app>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
