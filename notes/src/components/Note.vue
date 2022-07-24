<template>

    <!-- <div class="bloc-modal" v-if="revele">  -->

        <!-- <div class="overlay" v-on:click="toggleModal"></div> -->

    

         <!-- <div class="modal card">  -->

        <div class="tc-note">
            <div class="tc-note-header">
                <!-- <span v-on:@click="toggleModal" class="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
                </span> -->
                <span @click="deleteNote" class="tc-note-close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
                </span>
            </div>
            <h2>
            <div class="tc-note-title" contenteditable="" @blur="titleChanged">
                {{note.title}}
            </div>
           
            <div class="tc-note-body" contenteditable="" @blur="bodyChanged">
                {{note.body}}
            </div>
            </h2>
        </div>
    <!-- </div>
    </div> -->
</template>

<script>
export default{
    name: 'Modale',
    props: ['revele', 'toggleModal'],
    name: "Note",
    props: {
        note:{
            type: Object,
            required: true
        }
    },
    methods: {
        deleteNote(){
            this.$emit(event= 'deleteNote', this.note);
        },
        titleChanged($event){
            this.note.title = $event.target.innerHTML;
            this.$emit(event= 'noteUpdated', this.note)
        },
        bodyChanged($event){
            this.note.body = $event.target.innerHTML;
            this.$emit(event= 'noteUpdated', this.note)
        },
        noteUpdated(note){
         console.log(note);
     },
    }
}

</script>


<style lang="scss" scoped>

    .modal{
        float: center;
    }
    .bloc-modal{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }



  .tc-note {
      background-color: #f0c806;
      animation: 30000ms ease-in-out infinite color-change;
      border-radius: 8px;
      display:block;
      height:15em;
      width: 280px;
      margin: 0 10px 20px;
      -moz-box-shadow:5px 5px 7px rgba(33,33,33,1);
      -webkit-box-shadow: 5px 5px 7px rgba(33,33,33,.7);
      box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
      transition: all 0.5s;
      cursor: pointer;
      font-family: 'Shadows Into Light Two',arial,sans-serif, cursive;
      -webkit-transform:rotate(-6deg);
      -o-transform:rotate(-6deg);
      -moz-transform:rotate(-6deg);
      -moz-transition:-moz-transform .15s linear;
      -o-transition:-o-transform .15s linear;
      -webkit-transition:-webkit-transform .15s linear;
   

      .tc-note-header {
        padding: 10px 16px 0;

        .tc-note-close {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          line-height: 24px;
          text-align: center;
          transition: all 0.3s;

          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
          }

          &:focus {
            box-shadow: inset 2px 3px 0px rgba(0, 0, 0, 0.8);
          }
        }

        .tc-note-close {
          float: right;
        }
      }

      .tc-note-title,
      .tc-note-body {
        outline: 0;
       
      }

      .tc-note-title {
        font-size: 24px;
        padding: 10px 16px;
        font-weight: bold;
       
      }

      .tc-note-body {
        font-size: 20px;
        padding: 10px 16px 16px;
        
      }

      &:hover {
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
        -o-transform:rotate(4deg);
        -webkit-transform:rotate(4deg);
        -moz-transform:rotate(4deg);
      }
    }
    @keyframes color-change {
  0% {
    background-color: teal;
  }
  20% {
    background-color: gold;
  }
  40% {
    background-color: indianred;
  }
  60% {
    background-color: violet;
  }
  80% {
    background-color: orange;
  }
  100% {
    background-color: red;
  }
}

</style>
