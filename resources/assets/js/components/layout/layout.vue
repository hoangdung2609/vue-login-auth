<template>
    <v-app>
        <toolbar></toolbar>
            <v-layout>
                <v-flex xs2>
                    <navbar-component></navbar-component>
                </v-flex>
                <v-flex xs10 class="main">
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

<style>
    .main {
        padding: 15px;
    }
</style>
