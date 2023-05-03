const Tour = ({ id, title, date, image, text, location, duration, price }) => {
    return (
        <article className="tour-card" key={id}>
            <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                <p>
                    <span><i className="fas fa-map"></i></span> {location}
                </p>
                <p>{duration} days</p>
                <p>from ${price}</p>
                </div>
            </div>
        </article>
    );
}

export default Tour;