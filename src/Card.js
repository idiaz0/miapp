import userImage from './UserImage.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(){
    return(
        <div className="CardDiv">
            <h4>Title</h4>
            <label>New movie</label>
            <img className="image" alt='test' src={userImage} />
            <hr/>
            <button className="btn btn-primary bg-info">Click</button>
        </div>
    );
}

export default Card;