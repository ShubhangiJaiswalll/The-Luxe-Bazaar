function Profile({ user }) {
  return (
    <section className="section profile-page">
      <div className="section-header">
        <p className="eyebrow">Your Luxe Space</p>
        <h2>My Profile</h2>
        <p>Manage your account, orders and saved details.</p>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <div className="profile-avatar">
            {user?.name?.charAt(0)?.toUpperCase() || "L"}
          </div>

          <h3>{user?.name || "Luxe User"}</h3>
          <p>{user?.email || "Login to see your details"}</p>
        </div>

        <div className="profile-card">
          <h3>Account Details</h3>
          <p><strong>Name:</strong> {user?.name || "Not available"}</p>
          <p><strong>Email:</strong> {user?.email || "Not available"}</p>
          <p><strong>Role:</strong> {user?.role || "Customer"}</p>
        </div>

        <div className="profile-card">
          <h3>My Orders</h3>
          <p>No orders yet. Your Luxe purchases will appear here.</p>
        </div>

        <div className="profile-card">
          <h3>Saved Address</h3>
          <p>No saved address added yet.</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;