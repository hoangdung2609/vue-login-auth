<template>
    <v-card>        
        <!-- <h3>{{ takeLeave }}</h3> -->
        <v-btn color="success" @click="showTakeLeave">showTakeLeave</v-btn>
        <!-- <v-card-title>
            Nutrition
            <v-spacer></v-spacer>
            <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            v-bind:headers="headers"
            v-bind:items="desserts"
            v-bind:search="search"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.calories }}</td>
                <td class="text-xs-right">{{ props.item.fat }}</td>
                <td class="text-xs-right">{{ props.item.carbs }}</td>
                <td class="text-xs-right">{{ props.item.protein }}</td>
                <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
            </v-alert>
        </v-data-table> -->
    </v-card>
</template>

<script>
    export default {
        data () {
            return {             
                // takeLeave: '',               
                search: '',                
            }
        },        
        created() {
            // takeLeave() {                
                // let id = this.$store.getters.getProfile.id

                console.log(this.$store.getters.getProfile)
                                
                this.$store.dispatch('takeLeaveRequest', { id: id })
                
                return this.$store.getters.getTakeLeave
            // }
        },
        methods: {
            showTakeLeave: function() {
                console.log(this.$store.getters.getTakeLeave)
            },
            // TakeLeave() 
            // {                
            //     let id = this.$store.getters.getProfile.id
            //     let results = ''

            //     this.$store.dispatch('takeLeaveRequest', {
            //         id: id
            //     })
            //     .then(response => (this.takeLeave = this.$store.getters.getTakeLeave))            
            // }
        }
    }
</script>