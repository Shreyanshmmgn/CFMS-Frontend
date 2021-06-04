import "./../../css/PublicChit.css";
import pic from "./../../pics/img_avatar.png"

function PublicChit() {
  return (
    <div>
      <div className="row3">
        <div className="column3">
          <div className="card3">
          <img style={{width:'100%'}} src={pic} alt="Avatar"/>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column3">
          <div className="card3">
          <img style={{width:'100%'}} src={pic} alt="Avatar"/>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column3">
          <div className="card3">
          <img style={{width:'100%'}} src={pic} alt="Avatar"/>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column3">
          <div className="card3">
          <img style={{width:'100%'}} src={pic} alt="Avatar"/>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicChit;
