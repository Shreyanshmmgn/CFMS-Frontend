// import "./../../css/PublicChit.css";
// import pic from "./../../pics/img_avatar.png"
import image3 from "./../../pics/feature-demo-imgg656.jpg";
import image4 from "./../../pics/Blog-Chit-Interest-min.jpg";
import image5 from "./../../pics/money-safe_Mutual-Fund.jpg";
import image6 from "./../../pics/team-3.jpg";


const PublicChit = () => {
  return (
<section className="pt-5 pb-5">
  <div className="container">
  <h3  style={{color:"#1a237e"}} className="mb-3">Bored investing in Private Clubs? <strong>JOIN PUBLIC CLUBS</strong></h3>
    <div className="row">
        <div className="col-6">
            
        </div>
        
        <div className="col-6 text-right">
            <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i className="fa fa-arrow-left"></i>
            </a>
            <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i className="fa fa-arrow-right"></i>
            </a>
        </div>
        <div className="col-12">
            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}} className="img-fluid" alt="100%x280" src={image3}/>
                                    <div className="card-body">
                                        <h4 style={{color:"#5d4037"}} className="card-title"><strong>Best Shyam Club in Delhi</strong></h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}} className="img-fluid" alt="100%x280" src={image4}/>
                                    <div className="card-body">
                                        <h4 style={{color:"#5d4037"}} className="card-title"><strong>Best Shreyansh Club in Pune</strong></h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}} className="img-fluid" alt="100%x280" src={image5} height="100px"/>
                                    <div className="card-body">
                                        <h4 style={{color:"#5d4037"}} className="card-title"><strong>Best Yogesh Club in Pune</strong></h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}} className="img-fluid" alt="100%x280" src={image6}/>
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}} className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}}  className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <div className="row">

                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>
</section>
  );
}

export default PublicChit;
