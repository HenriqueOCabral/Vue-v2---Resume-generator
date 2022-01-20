<template>
    <select v-bind:name="name" v-bind:id="idName" v-bind:class="className" v-on:change="onChangeCallback" v-model="fieldValue" v-bind:required="required">
        <option :value="item.value" v-for="item in items" :key="item.value">{{item.text}}</option>
    </select>
</template>

<script>
    export default {
        name: "Select",
        props:{
            name: String,
            idName: String,
            className: String,
            value: Number,
            values: Array,
            options: Array,
            onChange: {type: Function, default: null},
            required: {type: Boolean, default: false}
        },
        data () {
            return {
                items: [],
                fieldValue: this.value
            }
        },
        created (){
            this.processItems();
        },
        watch: { 
            // eslint-disable-next-line no-unused-vars
            values: function(newVal, oldVal) {
                this.processItems();
            },
            // eslint-disable-next-line no-unused-vars
            value: function(newVal, oldVal){
                this.fieldValue = this.value;
            }
        },
        methods: {
            processItems () {
                this.items = [];
                // console.log(this.values, this.options, this.name);
                for (let index = 0; index < this.values.length; index++) {
                    this.items.push({value: this.values[index], text: this.options[index]});
                }
            },
            onChangeCallback () {
                if(this.onChange != null){
                    this.onChange(this.fieldValue);
                }
            }
        }
    }
</script>

<style>
select {
    border: 0.8px solid #DDDDDD;
    border-radius: 4px;
    padding: 10px;
}
</style>