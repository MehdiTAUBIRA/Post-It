<template>
   <div class="tc-notes-wrapper">
    <add-new-button @addNote="addNote"/>
    <div class="tc-notes">
        <!-- <div :key='index' v-for='(notes, index) in notes'>
            <h1>{{notes}}</h1> -->
        <Note v-for="(note, index) in notes" :key="index" :note="note" @deleteNote="deleteNote" @noteUpdated="noteUpdated"/>
    </div>
    <!-- <modal vbind:revele="revele" v-bind:toggleModal="toggleModal"></modal> -->
    <!-- <div v-on:click="toggleModal" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
    </div> -->
   </div> 

</template>

<script>
// import axios from 'axios'
import AddNewButton from './AddNewButton.vue';
import Note from "./Note";


export default{
    name: "NotesComponent",
  components: {Note, AddNewButton},
  
    data() {
        return {
            notes: [],
            revele: false
            
        }
    },
    mounted(){
        if (localStorage.notes){
            this.notes = JSON.parse(localStorage.notes);
        }
    },

    watch:{
        notes:{
            //handler= trappe pour intercepter l'acces a la valeur d'une propriété
            handler(newNotes){
                localStorage.notes = JSON.stringify(newNotes);
            },
            deep: true
        }
    },

    // mounted(){
    //     axios
    //     .get('http://5.135.119.239:3090/notes ')
    //     .then((reponse)=> {
    //         this.notes = reponse.data;
    //         console.log(this.notes)
    //     })
    // },

    methods: {
        toggleModal: function(){
            this.revele = !this.revele
        },

        addNote(){
            this.notes.push({title: '',body:''});
        },
        deleteNote(note){
           this.notes.splice(this.notes.indexOf(note),1); 
        },
         noteUpdated(note){
         console.log(note);
     }
    }
};
</script>

<style lang="scss" scoped>
.tc-notes-wrapper {
  

  .tc-notes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;

  
  }
}

</style>
<style>
html
{
background-color: #1fbfdb;
}
</style>