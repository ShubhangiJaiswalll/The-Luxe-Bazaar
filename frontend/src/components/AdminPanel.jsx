import { useState } from "react";
import toast from "react-hot-toast";
import API from "../api/api";

function AdminPanel({ productList, setProductList }) {
  const emptyForm = {
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
  };

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];

    if (!imageFile) return;

    const uploadData = new FormData();
    uploadData.append("image", imageFile);

    try {
      const { data } = await API.post("/upload", uploadData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setForm({ ...form, image: data.imageUrl });
      setPreview(data.imageUrl);

      toast.success("Image uploaded");
    } catch (error) {
      toast.error("Image upload failed");
    }
  };

  const saveProduct = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        const { data } = await API.put(`/products/${editingId}`, form);

        setProductList((prev) =>
          prev.map((item) => (item._id === editingId ? data : item))
        );

        toast.success("Product updated successfully");
      } else {
        const { data } = await API.post("/products", form);

        setProductList((prev) => [data, ...prev]);

        toast.success("Product added successfully");
      }

      setForm(emptyForm);
      setEditingId(null);
      setPreview("");
    } catch (error) {
      toast.error("Failed to save product");
    }
  };

  const editProduct = (product) => {
    setEditingId(product._id);

    setForm({
      name: product.name,
      category: product.category,
      price: product.price,
      originalPrice: product.originalPrice,
      rating: product.rating,
      reviews: product.reviews,
      badge: product.badge,
      image: product.image,
      stock: product.stock,
      description: product.description,
    });

    setPreview(product.image);

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const deleteProduct = async (id) => {
    if (!confirm("Delete this product?")) return;

    try {
      await API.delete(`/products/${id}`);

      setProductList((prev) => prev.filter((item) => item._id !== id));

      toast.success("Product deleted");
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <section className="admin-section">
      <div className="section-header">
        <p>ADMIN</p>
        <h2>{editingId ? "Edit Product" : "Add New Product"}</h2>
      </div>

      <form className="admin-form" onSubmit={saveProduct}>
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="originalPrice"
          type="number"
          placeholder="Original Price"
          value={form.originalPrice}
          onChange={handleChange}
          required
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
        />

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

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {preview && (
          <img className="admin-preview" src={preview} alt="Product Preview" />
        )}

        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">
          {editingId ? "Update Product" : "Add Product"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm(emptyForm);
              setPreview("");
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div className="admin-list">
        {productList.map((product) => (
          <div className="admin-product" key={product._id}>
            <img src={product.image} alt={product.name} />

            <div>
              <h4>{product.name}</h4>
              <p>₹{product.price}</p>
            </div>

            <button onClick={() => editProduct(product)}>Edit</button>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminPanel;