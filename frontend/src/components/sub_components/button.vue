<!-- 
------ Button Component ------

Komponen ini adalah sebuah tombol serbaguna yang dapat digunakan dalam berbagai konteks aplikasi Vue.js. 
Anda dapat menyesuaikan ukuran, warna, dan menangani interaksi pengguna seperti klik.

Contoh Penggunaan:
<ButtonComponent 
  width="120px" 
  height="40px" 
  color="var(--secondary-color)"
  @click="handleButtonClick"
>
  Text Button
</ButtonComponent>

Penjelasan Props:
1. `width` (String):
   - Lebar tombol yang dapat diatur dalam satuan apapun seperti `px`, `rem`, `%`, dll.
   - Contoh: "120px", "50%", "2rem".
   - Default: "auto".

2. `height` (String):
   - Tinggi tombol yang juga dapat diatur dalam satuan apapun seperti `px`, `rem`, `%`, dll.
   - Contoh: "40px", "100%", "3rem".
   - Default: "50px".

3. `color` (String):
   - Warna latar belakang tombol. Dapat menggunakan nama warna CSS, variabel CSS, atau nilai warna hex.
   - Contoh: "var(--secondary-color)", "#ff5733".
   - Default: "var(--primary-color)" (variabel warna global).

Event:
1. `@click`:
   - Event ini dipancarkan ketika tombol diklik. Anda dapat mendefinisikan aksi yang dilakukan saat tombol diklik menggunakan `@click`.
   - Contoh Penggunaan:
     <ButtonComponent 
       color="var(--secondary-color)"
       @click="handleButtonClick"
     >
       Secondary Button
     </ButtonComponent>

   - Fungsi `handleButtonClick` yang didefinisikan di parent component akan dipanggil setiap kali tombol diklik.
   - Contoh Implementasi di Parent Component:
     ```vue
     <script>
     export default {
       methods: {
         handleButtonClick() {
           alert('Tombol diklik!');
           // Anda dapat menambahkan aksi lain di sini
         }
       }
     }
     </script>
     ```

Fitur Lainnya:
1. `hover`:
   - Saat kursor mouse berada di atas tombol, warna latar belakang akan berubah menjadi putih dengan transisi halus (0.3 detik).
   - Anda tidak perlu menambahkan aturan CSS khusus untuk hover karena sudah ditangani di inline styles.

2. `borderRadius` dan `fontSize`:
   - `borderRadius` dihitung secara otomatis berdasarkan 15% dari tinggi tombol (`height`).
   - `fontSize` juga dihitung berdasarkan 30% dari tinggi tombol (`height`).

3. `slot`:
   - Anda dapat menempatkan teks atau elemen lain di dalam tombol menggunakan slot. Konten di dalam tag `<ButtonComponent>` akan ditampilkan di dalam tombol.

Komponen ini ideal untuk digunakan dalam situasi di mana Anda memerlukan tombol dengan penyesuaian yang fleksibel dan perlu menangani event klik dengan mudah. Pastikan untuk mendefinisikan metode untuk event klik di parent component yang menggunakan tombol ini.

-->

<template>
  <button 
    :class="{ 'hovered': hovered }"
    :style="buttonStyle"
    @mouseover="hovered = true" 
    @mouseleave="hovered = false"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    width: {
      type: String,
      default: 'auto',
    },
    height: {
      type: String,
      default: '50px',
    },
    color: {
      type: String,
      default: 'var(--primary-color)', // Warna default global
    },
  },
  data() {
    return {
      hovered: false, // State untuk hover
    };
  },
  computed: {
    borderRadius() {
      return `calc(${this.height} * 0.15)`; // Hitung 15% dari height
    },
    fontSize() {
      return `calc(${this.height} * 0.4)`; // Hitung 30% dari height
    },
    buttonStyle() {
      return {
        width: this.width,
        height: this.height,
        backgroundColor: this.hovered ? 'white' : this.getColor(),
        borderRadius: this.borderRadius,
        fontSize: this.fontSize,
        transition: 'background-color 0.3s ease', // Tambahkan transisi untuk hover
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit('click'); // Emit event click ke parent
    },
    getColor() {
      return this.color || 'var(--primary-color)';
    },
  },
}
</script>

<style scoped>
/* Tidak perlu menambahkan aturan hover di sini karena kita sudah menangani hover di inline styles */
</style>
