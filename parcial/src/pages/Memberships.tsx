import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import './styles/Memberships.css';

class Memberships extends Component {
    render() {
        return (
            <div className="memberships-page">
                <Navbar />
                <div className="memberships-container">
                    <div className="membership-tier gold">
                        <h2>Gold Membership</h2>
                        <p>Exclusive access to VIP fashion events, personalized shopping experiences, and private after-hours events. Members enjoy unlimited discounts, special deals on designer collections, and behind-the-scenes access to photo shoots and runway shows. Some perks include after-party invitations and priority seating at runway shows.</p>
                        <p>Price: $1,000/month</p>
                    </div>
                    <div className="membership-tier silver">
                        <h2>Silver Membership</h2>
                        <p>Access to selected fashion events and early-bird sales. Silver members also get priority access to limited collections, and invitations to semi-private events. Enjoy discounted personal styling sessions and free shipping on all purchases. Some members may gain access to insider trading and exclusive deals.</p>
                        <p>Price: $500/month</p>
                    </div>
                    <div className="membership-tier bronze">
                        <h2>Bronze Membership</h2>
                        <p>Basic membership includes entry to select events, standard discounts on fashion items, and early access to seasonal sales. Bronze members can participate in community activities and get occasional invites to small private gatherings and parties. Certain behind-the-scenes activities may include discreet opportunities.</p>
                        <p>Price: $200/month</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Memberships;
