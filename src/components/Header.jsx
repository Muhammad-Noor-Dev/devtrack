
function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="brand-logo">D</div>
        <div>
          <h1>DevTrack</h1>
          <p>Job Application Manager</p>
        </div>
      </div>

      <div className="header-right">
        <span className="online-indicator"></span>
        <span>Personal Workspace</span>
      </div>
    </header>
  );
}

export default Header;
