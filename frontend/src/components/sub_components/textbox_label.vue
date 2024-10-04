
<!-- 
------ TextboxWithLabel Component ------

Komponen ini adalah sebuah input text yang disertai dengan label dan placeholder, yang dapat digunakan secara fleksibel dalam aplikasi Vue.js.
Anda dapat menyesuaikan lebar, tinggi, label, id, name, placeholder, dan menangani interaksi pengguna seperti input.

Contoh Penggunaan:
<TextboxWithLabel 
  label="Nama"
  width="100%"
  height="50px"
  id="namaInput"
  name="nama"
  placeholder="Masukkan nama Anda"
  v-model="nama"
>
</TextboxWithLabel>

Penjelasan Props:
1. `label` (String):
   - Teks yang ditampilkan sebagai label untuk input text.
   - Default: "Label".

2. `width` (String):
   - Lebar input text yang dapat diatur dalam satuan apapun seperti `px`, `rem`, `%`, dll.
   - Contoh: "100%", "250px", "10rem".
   - Default: "100%" (mengisi parent).

3. `height` (String):
   - Tinggi input text yang juga dapat diatur dalam satuan apapun seperti `px`, `rem`, `%`, dll.
   - Contoh: "50px", "3rem".
   - Default: "50px".

4. `id` (String):
   - ID untuk elemen input, dapat digunakan untuk mengaitkan label dengan input dan keperluan lain.
   - Default: "" (kosong).

5. `name` (String):
   - Nama untuk elemen input, berguna untuk form submission.
   - Default: "" (kosong).

6. `value` (String):
   - Nilai yang akan ditampilkan di dalam input text. Dapat di-bind menggunakan `v-model` di parent component.
   - Default: "" (kosong).

7. `placeholder` (String):
   - Teks yang akan muncul di dalam input text sebelum pengguna memasukkan nilai.
   - Default: "Enter text here...".

Event:
1. `@input`:
   - Event ini dipancarkan setiap kali ada perubahan input di dalam textbox. Anda dapat menggunakannya dengan `v-model` di parent component untuk melakukan two-way binding.

Cara Penggunaan dan Pengambilan Nilai:
- Untuk mendapatkan nilai input dari textbox ini, Anda dapat menggunakan `v-model` pada saat pemanggilan komponen. Contoh:
  
  ```vue
  <template>
    <TextboxWithLabel 
      label="Nama"
      placeholder="Masukkan nama Anda"
      v-model="nama"
    />
    <p>Nama yang diinput: {{ nama }}</p>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nama: '', // Variabel untuk menyimpan nilai input dari textbox
      };
    },
  }
  </script>
--->

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
</template>

<style scoped>
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
  name: 'TextboxWithLabel',
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
      default: 'Enter text here...', // Default placeholder text
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
  },
}
</script>