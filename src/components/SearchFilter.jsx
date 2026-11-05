function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <section className="search-filter-section">
      <h2>Search & Filter</h2>

      <div className="search-filter">
        <div className="search-box">
          <label htmlFor="search">Search Applications</label>
          <input
            id="search"
            type="text"
            placeholder="Search by company or job title..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="filter-box">
          <label htmlFor="status-filter">Filter by Status</label>
          <select
            id="status-filter"
            value={selectedStatus}
            onChange={(event) => setSelectedStatus(event.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;