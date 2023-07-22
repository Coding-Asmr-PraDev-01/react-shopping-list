const Item = ({ ind, item, handleDelete }) => {
  return (
    <div>
      <li className="list-item">{item}</li>
      <button
        className="delete-btn"
        type="button"
        onClick={() => handleDelete(ind)}
      >
        X
      </button>
    </div>
  );
};

export default Item;
