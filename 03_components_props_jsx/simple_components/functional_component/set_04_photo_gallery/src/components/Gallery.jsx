function Gallery({fileName}){
  return (
    <div className="gallery">
      <div>
        <img src={`images/${fileName}`} alt={fileName} />
      </div>
      <div>
        <h3>Image Title : {fileName.split(".")[0]}</h3>
        <p>File Type : image/{fileName.split(".")[1]}</p>
      </div>
    </div>
  )
}

export default Gallery;