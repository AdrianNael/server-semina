// (1) import package mongoose
const mongoose = require('mongoose');

// (2) ambil module model dan Schema dari package mongoose
const { model, Schema } = mongoose;

let categorySchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
      maxLength: [20, 'Panjang nama kategori maksimal 20 karakter'],
      required: [true, 'Nama kategori harus diisi'],
    },
  },
  { timestamps: true }
);

module.exports = model('Category', categorySchema);