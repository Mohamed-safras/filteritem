import "./styles/filter.scss";
const Filter = ({ setChangeBrand, brand }) => {
  return (
    <div className="filter-container">
      <select
        className="filter-by-brand"
        name="filter-by-brand"
        id="filter-by-brand"
        onChange={(e) => setChangeBrand(e.target.value)}
      >
        {brand.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <select className="filter-by-brand" name="price" id="price">
        <option value="asnd">asnd</option>
        <option value="desn">desn</option>
      </select>
    </div>
  );
};

export default Filter;
