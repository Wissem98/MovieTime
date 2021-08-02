<template>
  <div padding>
   

    <v-text-field   @input="onChange" v-model="userInput"
            class="input"
     
              solo-inverted
              >
          <template v-slot:label>
            Search for a <strong>movie</strong> here! <v-icon style="vertical-align: middle">
              mdi-magnify
            </v-icon>
          </template>
        </v-text-field>
<div class="pad">
<v-btn
        class="mx-2"
        fab
        dark
        color="teal"
        @click="handleSubmit" type="submit" value="SEARCH"
      >
        <v-icon dark>
          mdi-magnify
        </v-icon>
      </v-btn>
</div>

    <card class="suggestions-card" v-if="filteredSuggestions.length">
     
     

 <v-card
      class="mx-auto"
      max-width="400"
      
    >
      <v-list>
        <v-list-item-group
          v-model="model"
          mandatory
          color="indigo"
        >
          <v-list-item
         
           v-for="(s,i) in filteredSuggestions" :key="i" @click="selected(s)">
          
             <text-highlight :queries=userInput>{{s[optionsKey]}}</text-highlight>  
  
           
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
      

        
    </card>
    
  </div>
</template>

<script>
import useAutoComplete from "../useAutoComplete";
import TextHighlight from 'vue-text-highlight';
export default {
  name: "AutoComplete",
   components: {TextHighlight },
  props: {
    msg: String,
    options: Array,
    optionsKey: String,
  },
  setup({ options, optionsKey }, {emit}) {
    return {
      handleSubmit(event) {
          event.preventDefault();
          emit('search', this.userInput);
        },
      ...useAutoComplete(options, optionsKey)
    };
  },
  data() {
    return {};
  },
  methods: {
    doSave: function(_clear) {
      if (_clear) {
        this.$emit("save-option", {});
        this.userInput = "";
      } else {
        this.$emit("save-option", this.selectedItem);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: sans-serif;
}

.table{margin-left: 125px;}
tr { 
  border: solid;
  border-width: 1px 0;
}
input {
  border: 1px solid #999;
  padding: 0.5rem;
  width: 400px;
  margin-top: -40px;
 
}
.dd{background: black;}
.suggestions-card {
  margin-top: 0;
  padding-left: 0px;
  margin-left: 0px;
  background: rebeccapurple;
  min-width: 200px;
  min-height: 500px;
  
}
.pad{
margin-left: 399px;}

.mx-2{margin-top: -130px;
margin-left: 123px;}
.v-list{
  height:200px;/* or any height you want */
  overflow-y:auto;
  margin-top: -52px;
 
}

</style>
