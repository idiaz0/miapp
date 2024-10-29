import userImage from './UserImage.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Clickhandler(){
    return(alert("mesage testing react CI"));
}

const Test = ()=>{
    return(<h5 className="text-success" >const test app</h5>)
}

function Card(){
    return(
        <div className="CardDiv">
            <h4>Title</h4>
            <label>New movie</label>
            <img className="image" alt='test' src={userImage} />
            <hr/>
            <button onClick={Clickhandler} className="btn btn-primary bg-info">Click</button>
            <hr />
            <Test />
        </div>
    );
}

export default Card;