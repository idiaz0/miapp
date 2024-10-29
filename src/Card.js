import userImage from './UserImage.png'
import './App.css';

function Card(){
    return(
        <div className="CardDiv">
            <h4>Title</h4>
            <label>New movie</label>
            <img className="image" alt='test' src={userImage} />
        </div>
    );
}

export default Card;