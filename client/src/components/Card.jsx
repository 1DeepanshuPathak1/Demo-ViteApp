function Card({ title, image, children }) {
    return (
      <div className="card">
        {image && (
          <div className="card-image">
            <img src={image} alt={title || 'Card image'} />
          </div>
        )}
        
        <div className="card-content">
          {title && <h3 className="card-title">{title}</h3>}
          <div className="card-body">
            {children}
          </div>
        </div>
      </div>
    )
  }
  
  export default Card