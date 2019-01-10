<template>
    <v-app>
        <v-container fluid fill-height class="container-background">
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-flex xs8 offset-xs2 sm8 offset-sm2 md6 offset-md3 mb-5>
                        <v-img src="http://bds.gdcvn.com/wp-content/uploads/2018/05/logo.png"></v-img>
                    </v-flex>
                    <v-card class="elevation-0 border-radius">
                        <v-form @submit.prevent="login">
                            <v-toolbar dark color="primary card-title">
                                <h4 v-if="authErrors.has('invalid_credentials')" v-text="authErrors.get('invalid_credentials')"></h4>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                    <v-text-field
                                        v-validate="'required|email'"
                                        :error-messages="errors.collect('email')"
                                        data-vv-name="email"
                                        required
                                        append-icon="person"
                                        name="email"
                                        label="Email"
                                        type="text"
                                        v-model="email">
                                    </v-text-field>
                                    <v-text-field
                                        v-validate="'required'"
                                        :error-messages="errors.collect('password')"
                                        data-vv-name="password"
                                        required
                                        append-icon="lock"
                                        name="password"
                                        label="Password"
                                        type="password"
                                        v-model="password">
                                    </v-text-field>
                                    <v-checkbox :label="rememberMe" v-model="checkbox1"></v-checkbox>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" type="submit">Login</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    // import { validationMixin } from 'vuelidate'
    // import { required, email } from 'vuelidate/lib/validators'

    export default {
        $_veeValidate: {
            validator: 'new'
        },

        data(){
            return {
                checkbox1: true,
                remember:false,
                email: '',
                password: '',
                rememberMe: "Remember Me",
                dictionary: {
                    attributes: {
                        email: 'Email',
                        password: 'Password'
                        // custom attributes
                    },
                    // custom: {
                    //     name: {
                    //         required: () => 'Name can not be empty',
                    //         max: 'The name field may not be greater than 10 characters'
                    //         // custom messages
                    //     },
                    //     select: {
                    //         required: 'Select field is required'
                    //     }
                    // }
                }
            }
        },
        computed: {
            authErrors(){
                return this.$store.getters.authErrors
            },
        },
        mounted () {
            this.$validator.localize('en', this.dictionary)
        },
        methods: {
            login: function () {
                this.$validator.validateAll().then(result => {
                    if(result) {
                        const { email, password, remember } = this

                        this.$store.dispatch('authRequest', { email, password, remember })
                            .then(() => {
                                this.$router.push('/dashboard')
                            })
                    }
                })

            },
        },
    }
</script>

<style>
    .v-label {
        margin: 0;
    }

    .border-radius {
        border-radius: 5px;
    }

    .card-title {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

</style>