<template>
    <v-app>
        <v-container grid-list-xl text-xs-center>
            <v-layout row wrap>
                <!--<v-flex xs2 offset-xs5>-->
                <!--</v-flex>-->
                <v-flex xs2 offset-xs5 pb-5>
                    <v-img src="http://bds.gdcvn.com/wp-content/uploads/2018/05/logo.png"></v-img>
                </v-flex>
                <v-flex xs6 offset-xs3>
                    <form>
                        <v-text-field
                                v-model="email"
                                :error-messages="emailErrors"
                                label="Email"
                                required
                                @input="$v.email.$touch()"
                                @blur="$v.email.$touch()"
                        ></v-text-field>
                        <v-text-field
                                v-model="password"
                                :error-messages="passwordErrors"
                                label="Mật khẩu"
                                required
                                @input="$v.password.$touch()"
                                @blur="$v.password.$touch()"
                        ></v-text-field>
                        <v-checkbox
                                v-model="checkbox"
                                :error-messages="checkboxErrors"
                                label="Do you agree?"
                                required
                                @change="$v.checkbox.$touch()"
                                @blur="$v.checkbox.$touch()"
                        ></v-checkbox>

                        <v-btn @click="submit">submit</v-btn>
                        <v-btn @click="clear">clear</v-btn>
                </form>
                </v-flex>
        </v-layout>
        </v-container>
    </v-app>
    <!--<div class="auth-form text-center">-->
        <!--<form method="POST" v-on:submit.prevent="login">-->
            <!--<img class="mb-4" src="/img/logo.svg" alt="" width="300" height="72">-->

            <!--<p class="text-danger" v-if="authErrors.has('invalid_credentials')" v-text="authErrors.get('invalid_credentials')"></p>-->

            <!--<label for="email" class="sr-only">Email address</label>-->

            <!--<input type="email" id="email" class="form-control" placeholder="Email address" required autofocus v-model="email">-->

            <!--<label for="password" class="sr-only">Password</label>-->

            <!--<input type="password" id="password" class="form-control" placeholder="Password" required v-model="password">-->

            <!--<div class="checkbox mt-2">-->
                <!--<label>-->
                    <!--<input type="checkbox" value="remember" v-model="remember"> Remember me-->
                <!--</label>-->
            <!--</div>-->

            <!--<button class="btn btn-lg btn-primary btn-block mt-2 mb-2" type="submit">Sign in</button>-->

            <!--<router-link :to="{ name: 'password-email' }">Forgot Password</router-link>-->

            <!--<p>Don't have an account? <router-link :to="{ name: 'register' }">Register</router-link></p>-->

        <!--</form>-->
    <!--</div>-->
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        validations: {
            password: { required },
            email: { required, email },
            select: { required },
            checkbox: {
                checked (val) {
                    return val
                }
            }
        },
        data(){
            return {
                'remember':false,
                email: '',
                password: '',
                checkbox: false
            }
        },
        computed: {
            authErrors(){
                return this.$store.getters.authErrors
            },
            checkboxErrors () {
                const errors = []
                if (!this.$v.checkbox.$dirty) return errors
                !this.$v.checkbox.checked && errors.push('You must agree to continue!')
                return errors
            },
            passwordErrors () {
                const errors = []
                if (!this.$v.password.$dirty) return errors
                // !this.$v.password.maxLength && errors.push('Name must be at most 10 characters long')
                !this.$v.password.required && errors.push('Password is required.')
                return errors
            },
            emailErrors () {
                const errors = []
                if (!this.$v.email.$dirty) return errors
                !this.$v.email.email && errors.push('Must be valid e-mail')
                !this.$v.email.required && errors.push('E-mail is required')
                return errors
            }
        },
        methods: {
            login: function () {
                const { email, password, remember } = this

                this.$store.dispatch('authRequest', { email, password, remember })
                    .then(() => {
                        this.$router.push('/dashboard')
                    })

            },
            submit () {
                this.$v.$touch()
            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = false
            }
        },
    }
</script>
