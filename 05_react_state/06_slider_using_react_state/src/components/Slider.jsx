function Slider({ pictureObj }) {
  return (
    <div className="slider">
      <div className="picture-handler">
        <div className="picture"></div>
        <div className="slide-indicator">
          {
            pictureObj.map(pic => {
              return 
            })
          }
        </div>
      </div>
      <div className="slide-handler-btns"></div>
    </div>
  );
}

export default Slider;
