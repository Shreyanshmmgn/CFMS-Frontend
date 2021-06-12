// import "./../../css/PublicChit.css";
// import pic from "./../../pics/img_avatar.png"
import image3 from "./../../pics/feature-demo-imgg656.jpg";
import image4 from "./../../pics/Blog-Chit-Interest-min.jpg";
import image5 from "./../../pics/money-safe_Mutual-Fund.jpg";
import image6 from "./../../pics/team-3.jpg";


// import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const PublicChit = () => {

    const theme = useTheme();
  
    const data = {
      datasets: [
        {
          backgroundColor: colors.indigo[500],
          data: [18, 5, 19, 27, 29, 19, 20],
          label: 'This year'
        },
        {
          backgroundColor: colors.grey[200],
          data: [11, 20, 12, 29, 30, 25, 13],
          label: 'Last year'
        }
      ],
      labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
    };
  
    const options = {
      animation: false,
      cornerRadius: 20,
      layout: { padding: 0 },
      legend: { display: false },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            barThickness: 12,
            maxBarThickness: 10,
            barPercentage: 0.5,
            categoryPercentage: 0.5,
            ticks: {
              fontColor: theme.palette.text.secondary
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              fontColor: theme.palette.text.secondary,
              beginAtZero: true,
              min: 0
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: theme.palette.divider,
              drawBorder: false,
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
              zeroLineColor: theme.palette.divider
            }
          }
        ]
      },
      tooltips: {
        backgroundColor: theme.palette.background.paper,
        bodyFontColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        enabled: true,
        footerFontColor: theme.palette.text.secondary,
        intersect: false,
        mode: 'index',
        titleFontColor: theme.palette.text.primary
      }
    };
  return (
      <div>
<section className="pt-5 pb-5">
  <div className="container">
  <h3  style={{color:"#1a237e"}} className="mb-3"><strong>JOIN PUBLIC CLUBS</strong></h3>
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
                                        <h4 style={{color:"#5d4037"}} className="card-title"><strong> GURU NANAK CHIT FUND PVT LTD
</strong></h4>
                                        <p className="card-text">5-8, FIRST FLOOR CHANDA NAGAR HYDERABAD Andhra Pradesh INDIA</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}} className="img-fluid" alt="100%x280" src={image4}/>
                                    <div className="card-body">
                                        <h4 style={{color:"#5d4037"}} className="card-title"><strong>CHAITANYA CHIT FUNDS PVT LTD</strong></h4>
                                        <p className="card-text"> FLAT NO 37 VIJAYA NAGAR COLONY Andhra Pradesh INDIA 520007
</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}} className="img-fluid" alt="100%x280" src={image5} height="100px"/>
                                    <div className="card-body">
                                        <h4 style={{color:"#5d4037"}} className="card-title"><strong>SHRIRAM CHITS PVT LTD</strong></h4>
                                        <p className="card-text"> NO.44, SAROJINI DEVI ROAD, SECUNDERABAD-500 003 Andhra Pradesh INDIA</p>

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
                                        <h4 style={{color:"#5d4037"}} className="card-title"><strong>SIRI MEGHANA CHITS PRIVATE LIMITED</strong></h4>
                                        <p className="card-text"> H.NO. 1-3-385 GODOWN ROAD KORATLA Andhra Pradesh INDIA
</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}} className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"/>
                                    <div className="card-body">
                                        <h4 style={{color:"#5d4037"}} className="card-title"><strong>CATHOLIC UNION CHITTIES LTD</strong></h4>
                                        <p className="card-text">BUILDING NO 754 11MALA TRICHUR</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <img style={{height:"330px"}}  className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"/>
                                    <div className="card-body">
                                        <h4 style={{color:"#5d4037"}} className="card-title"><strong>THE SAVINGS TRUST LTD</strong></h4>
                                        <p className="card-text">76GIRI NAGAR - ERNAKULAM</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
{/* <Card {...props}>
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
          >
            Last 7 days
          </Button>
        )}
        title="Latest Sales"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card> */}
</div>
  );
};

export default PublicChit;
