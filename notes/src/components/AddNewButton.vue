<template>
  <button @click="addNote" class="new-note-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg></button>  
</template>

<script>
export default{
    name: "AddNewButton",
    methods: {
        addNote(){
            this.$emit('addNote');
        }
    }
}
</script>

<style lang="scss" scoped>
.new-note-btn {
    height: 40%;
    line-height: 40%;
    width: 5%;
    display: block;
    margin: 20px auto 50px;
    background-color: #e414b7;
    padding: 2px 2px;
    border-radius: 50% solid #000;
    font-size: 30px;
    outline: 0;
    transition: all 0.3s;
    cursor: pointer;
    font-family: 'Caveat', cursive;
    z-index: 998;

    &:hover {
      box-shadow: 0 5px 7px rgba(0, 0, 0, 0.1);
    }

    &:active {
      position: relative;
      top: 1px;
    }
  }
</style>

