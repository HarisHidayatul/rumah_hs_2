
<template>
    <div class="textbox-container">
      <label :for="id" :style="labelStyle">{{ label }}</label>
      <input 
        :id="id"
        :name="name"
        type="text" 
        :style="inputStyle" 
        :placeholder="placeholder"
        @mouseover="hovered = true" 
        @mouseleave="hovered = false"
        @focus="hovered = true"
        @blur="hovered = false"
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
    </div>
    <div 
        class="list-textbox-data"
        style="listInputStyle"
    >
        <ul>Item 1</ul>
        <ul>Item 2</ul>
        <ul>Item 3</ul>
        <ul>Item 4</ul>
    </div>
  </template>
  
  <style scoped>
  .list-textbox-data{
    margin-top: 5px;
    background-color: aqua;
  }
  .list-textbox-data ul{
    /* background-color: blue; */
  }
  .textbox-container {
    display: flex;
    flex-direction: column;
    width: 100%; /* Mengisi parent secara default */
  }
  
  input {
    box-sizing: border-box;
    padding: 0 10px;
    border: 1px solid #ccc;
    outline: none;
    transition: all 0.3s ease;
  }
  
  input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  label {
    margin-bottom: 5px;
    display: block;
    transition: color 0.3s ease;
  }
  </style>
  
  <script>
  export default {
    name: 'SearchTextboxWithLabel',
    props: {
      label: {
        type: String,
        default: 'Label',
      },
      width: {
        type: String,
        default: '100%', // Default width is full parent
      },
      height: {
        type: String,
        default: '50px', // Default height is 50px
      },
      id: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: 'Masukkan Pencarian Disini', // Default placeholder text
      },
    },
    data() {
      return {
        hovered: false, // State untuk hover
      };
    },
    computed: {
      inputStyle() {
        return {
          width: this.width,
          height: this.height,
          borderRadius: `calc(${this.height} * 0.15)`, // 15% dari height
          fontSize: `calc(${this.height} * 0.4)`, // 30% dari height
        };
      },
      labelStyle() {
        return {
          fontSize: `calc(${this.height} * 0.4)`, // 30% dari height
        };
      },
      listInputStyle(){
        return {
          width: this.width,
          height: this.height,
          borderRadius: `calc(${this.height} * 2)`, // 15% dari height
          fontSize: `calc(${this.height} * 0.4)`, // 30% dari height
        };
      }
    },
  }
  </script>