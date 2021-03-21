import React from 'react'
import Dashnav from '../components/dashnav';
import Campcard from '../components/campcard';
import api from '../utils/apiCalls';
// import Democarasol from '../components/caraso/l'


function DonationsCard(props) {
    let { name, credits, donationId }  = props;
    return (
        <div style={{
            margin: '1%',
            width: '1161.25px',
            height: '184.98px',
            background: '#F8F8F8',
            borderRadius: '15px',
            display: 'flex',
            alignContent: 'space-between',
        }}>
            {/*<div>*/}

            {/*</div>*/}
            {/*<div style={{backgroundColor: 'red'}}> X </div>*/}

<table style={{
    width: '100%',
    paddingLeft: '3%'
}}>
    <tr>
        <td>
            <div style={{fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '32px',
                lineHeight: '48px'}}> {name} </div>
            <div style={{fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '15px',
                lineHeight: '16px'}}> {donationId} </div>
        </td>
        <td>

            <div> <div style={{fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '100.0554px;',
                lineHeight: '50px'}}> {credits}
            </div>
                <div style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '20.2635px',
                    lineHeight: '91%',
                    color: '#4E1569'
                }}>
                    Socio <br/>
                    Credz
                </div>
            </div>
        </td>
    </tr>
</table>
        </div>
    )
}

class Landingpage extends React.Component {
    state = {
        donations: [],
        token: '',

    }
    constructor (props) {
        super(props)
    }

    updateDonations = async () => {
        let response = await api.FetchDonations(this.state.token);
        let data = response.data;
        console.log(data)
        this.setState({
            donations: data.slice(0,3)
        });
    }

    componentDidMount () {
        let token = localStorage.getItem("token")
        this.setState({
            token,
        }, async () => {
            await this.updateDonations()
        })

    }
    handleSubmit = async (e) => {
        e.preventDefault();
        let response = await api.CreateCampaign(this.state.token, this.state.tagline,
            this.state.desc, this.state.moneyRaised, this.state.title)
        if (response.code == 201) {
            alert("campaign created!")
        } else {
            alert("Campaign Creation Failed!")
        }
    }
    render () {
        return (
            <div>
                <Dashnav/>
                <div className="grid-set">
                    <div style={{
                        display: 'flex',
                        flex: 1,
                        minWidth: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: '900px',
                    }}>
                        <div style={{
                            display: "flex",
                            width: '85%',
                            flexDirection: 'column',
                            backgroundColor: 'blue',
                            background: '#FFFFFF',
                            border: '4px solid rgba(252, 123, 34, 0.15)',
                            boxSizing: 'border-box',
                            boxShadow: '1px 1px 14px rgba(247, 141, 29, 0.14)',
                            borderRadius: '21.0437px',
                            padding: '20px'
                        }}>
                            <div style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: '36px',
                                lineHeight: '54px',
                                color: '#F78D1D'
                            }}>Donations</div>
                            <div style={{
                                padding: '10px',
                                display: 'flex',
                                margin: '10px',
                                flexDirection: 'column'
                            }}>

                                {this.state.donations.map( (e, i) => {
                                    return (<DonationsCard key={i} name={e.User.userName} credits={e.amount} donationId={e.donationId} />)
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Landingpage