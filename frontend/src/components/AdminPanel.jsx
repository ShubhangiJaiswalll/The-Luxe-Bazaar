import { useState } from "react";
import toast from "react-hot-toast";
import API from "../api/api";

function AdminPanel({ setProductList }) {
  const [form, setForm] = useState({
    name: "",
    category: "Fashion",
    price: "",
    originalPrice: "",
    rating: 4.8,
    reviews: 100,
    badge: "NEW",
    image: "",
    stock: 10,
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/products", form);

      setProductList((prev) => [data, ...prev]);

      toast.success("Product added successfully");
      setForm({
        name: "",
        category: "Fashion",
        price: "",
        originalPrice: "",
        rating: 4.8,
        reviews: 100,
        badge: "NEW",
        image: "",
        stock: 10,
        description: "",
      });
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <section className="admin-section">
      <div className="section-header">
        <p>ADMIN</p>
        <h2>Add New Product</h2>
      </div>

      <form className="admin-form" onSubmit={addProduct}>
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
        <input name="image" placeholder="Image Path e.g. /products/sample.jpeg" value={form.image} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="originalPrice" type="number" placeholder="Original Price" value={form.originalPrice} onChange={handleChange} required />

        <select name="category" value={form.category} onChange={handleChange}>
          <option>Fashion</option>
          <option>Beauty & Skincare</option>
          <option>Accessories</option>
        </select>

        <select name="badge" value={form.badge} onChange={handleChange}>
          <option>NEW</option>
          <option>BESTSELLER</option>
          <option>TRENDING</option>
          <option>HOT</option>
          <option>PREMIUM</option>
        </select>

        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}

export default AdminPanel;