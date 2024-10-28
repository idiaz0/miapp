import userImage from './UserImage.png'
import './App.css';

function Card(){
    return(
        <div className="CardDiv">
            <h4>Title</h4>
            <label>New movie</label>
            <img className="image" src={userImage} />
        </div>
    );
}

export default Card;