<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>     -->
<template>
<SearchTextboxWithLabel></SearchTextboxWithLabel>
<TextboxWithLabel></TextboxWithLabel>
<h1>Test</h1>
</template>

<script>
import SearchTextboxWithLabel from './components/sub_components/search_textbox_label.vue'
import TextboxWithLabel from './components/sub_components/textbox_label.vue'
export default {
  name: 'App',
  components: {
    SearchTextboxWithLabel,
    TextboxWithLabel
  }
}
</script>