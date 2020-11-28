import React,{useState} from 'react'
import ImageUploading from 'react-images-uploading';

function ImageUpload() {

    const [images, setImages] = useState([]);
    const maxNumber = 69;
   
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    }

    return (
        <div className="container">
            <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                          <button
                            type="button"
                            className="btn btn-dark"
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                          Choose Image or Drop here
                          </button>
                          &nbsp;
                          
                          
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                            <br></br>
                              <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                <br></br>
                                  <button className="btn btn-dark" onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>

        </div>
    )
}

export default ImageUpload
