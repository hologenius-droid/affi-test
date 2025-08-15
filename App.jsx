import React, { useState } from 'react'

export default function App() {
  const [face, setFace] = useState(null)
  const [product, setProduct] = useState(null)

  const handleFaceUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFace(URL.createObjectURL(file))
    }
  }

  const handleProductUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProduct(URL.createObjectURL(file))
    }
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>Affi Test - Generator</h1>
      <div>
        <label>Upload Foto Wajah:</label>
        <input type="file" accept="image/*" onChange={handleFaceUpload} />
      </div>
      <div>
        <label>Upload Foto Produk:</label>
        <input type="file" accept="image/*" onChange={handleProductUpload} />
      </div>

      <div style={{ marginTop: 20, display: 'flex', gap: 20 }}>
        {face && <img src={face} alt="Face" width="200" />}
        {product && <img src={product} alt="Product" width="200" />}
      </div>

      <p style={{ marginTop: 20 }}>Fitur lanjutan seperti hapus background & export akan ditambahkan.</p>
    </div>
  )
}
