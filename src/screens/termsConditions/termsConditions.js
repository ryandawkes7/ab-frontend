import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './termsConditions.css';
import BackImg from "../../images/left-close.svg";
import Back from "../../components/backButton/back";

class TermsConditions extends Component {
    render () {
        return (
            <div className="container terms-container">
                <Back />

                <h2 style={{marginBottom: '2rem', marginTop: '2rem'}}>TERMS & CONDITIONS</h2>

                <div className="terms-conditions-container"> {/* Ts&Cs Info Section */}
                    <h4 style={{paddingBottom: '1rem'}}>Bristol Aerospace Museum</h4>
                    <p>
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers. <br/>
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers. <br/>
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers. <br/>
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers.
                        This is the place for terms and conditions and any further disclaimers. <br/>
                    </p>
                </div> {/* End of Ts&Cs Info Section */}

            </div>
        );
    }
}

export default TermsConditions;
