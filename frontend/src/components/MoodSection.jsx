function MoodSection() {
  return (
    <section className="moods">
      <div className="section-header">
        <p>CURATED COLLECTIONS</p>
        <h2>Shop By Mood</h2>
      </div>

      <div className="mood-grid">
        <div className="mood-card">
          <h3>Soft Girl Edit</h3>
          <p>Pastels, skincare and everyday elegance.</p>
        </div>

        <div className="mood-card">
          <h3>Boss Babe Edit</h3>
          <p>Power dressing and statement essentials.</p>
        </div>

        <div className="mood-card">
          <h3>Desi Glow Edit</h3>
          <p>Modern desi fashion with timeless beauty.</p>
        </div>

        <div className="mood-card">
          <h3>Minimal Muse</h3>
          <p>Clean aesthetics and effortless luxury.</p>
        </div>
      </div>
    </section>
  );
}

export default MoodSection;