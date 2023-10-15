import PropTypes from "prop-types";
import "./Userele.css"

const Userele = (props) => {

    const { image, name, description } = props;

    return (
        <>
            <div className="user-card">
                <div className="user-image">
                    <img src={image} alt={name} />
                </div>
                <h2>{name}</h2>
                <p>{description}</p>
                <h3></h3>
            </div>
        </>
    )
}

Userele.propTypes = {
    image: PropTypes.string.isRequired, // Example: URL of the image
    name: PropTypes.string.isRequired,  // Example: User's name
    description: PropTypes.string.isRequired, // Example: User's description
};

export default Userele