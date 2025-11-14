export const NewsNav = ({ setCategory }) => {
  return (
    <>
      <nav className="nav justify-content-end bg-dark p-2">
        <h3 className="text-white me-auto px-3">News-APP</h3>

        <li className="nav-item">
          <div className="nav-link text-white" style={{cursor: "pointer"}} onClick={() => setCategory("technology")}>
            Technology
          </div>
        </li>

        <li className="nav-item" style={{cursor: "pointer"}}>
          <div className="nav-link text-white" onClick={() => setCategory("entertainment")}>
            Entertainment
          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link text-white" style={{cursor: "pointer"}} onClick={() => setCategory("business")}>
            Business
          </div>
        </li>

        <li className="nav-item">
          <div className="nav-link text-white" style={{cursor: "pointer"}} onClick={() => setCategory("health")}>
            Health
          </div>
        </li>
      </nav>
    </>
  );
};
