function MyButton02({ count, onClick }) {
  return (
    <button className="btn btn-success" onClick={onClick}>
      Clicked me {count} times!
    </button>
  );
}

export default MyButton02;
