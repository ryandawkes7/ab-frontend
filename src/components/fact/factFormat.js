// import React, {Component} from 'react';
// import './factFormat.css';
// import { Link } from 'react-router-dom';
// import KiteImg from './assets/fact-image.svg';
//
// export default class FactFormat extends Component {
//
//     state = {
//         facts: [
//             {
//                 id: 1,
//                 text: "Bristol Boxkite worked by producing lift and drag forces with its wings. Just like the kites you can fly in the air!"
//             }
//         ]
//     }
//
//     render () {
//         return (
//             <div className="container fact-container">
//                 {/* Inner Container Section */}
//                 <div className="inner-container fact-inner-container">
//                     <h2>Did you know?</h2> {/* Title Section */}
//
//                     {/* FactFormat Image Section */}
//                     <div className="fact-image">
//                         <img src={KiteImg} alt="" />
//                     </div>
//                     {/* End of FactFormat Image Section */}
//
//                     {/* FactFormat Description Section */}
//                     <div className="fact-description">
//                         <p>{this.state.facts[0].text}</p>
//                     </div>
//                     {/* End of FactFormat Description Section */}
//
//                     {/* Confirmation Button */}
//                     <Link to='/game-menu' className="basic-btn fact-button">
//                         <h3>OK</h3>
//                     </Link>
//                     {/* End of Confirmation Button */}
//
//                 </div>
//                 {/* End of Inner Container Section */}
//             </div>
//         );
//     }
// }

import React, {Component} from 'react';
import './factFormat.css';
import { Link } from 'react-router-dom';
import KiteImg from './assets/fact-image.svg';

class FactComponent extends Component{
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.props.onNextButton(e.target.value);
    }

    render () {
        const fact = this.props.fact;

        return(
            <div>
                { fact.options.map(next => {
                    return(
                        <div className="inner-container fact-inner-container">
                            <h1>{next.number}</h1>
                            <h2>Did You Know?</h2>

                            <div className="fact-image">
                                <img src={KiteImg} alt="" />
                            </div>

                            <div className="fact-description" value={next.text}>
                                <p>{next.text}</p>
                            </div>
                            <Link
                                to='/game-menu'
                                className="basic-btn fact-button"
                                onClick={this.handleChange}
                                name={fact.id}
                                value={next.id}
                            >
                                <h3>Next</h3>
                            </Link>
                        </div>
                    )
                })}
            </div>

                // {/*<h1>{fact.number}</h1>*/}
                // {/*<h2>Did you know?</h2> /!* Title Section *!/*/}
                //
                // {/*/!* FactFormat Image Section *!/*/}
                // {/*<div className="fact-image">*/}
                // {/*    <img src={KiteImg} alt="" />*/}
                // {/*</div>*/}
                // {/*/!* End of FactFormat Image Section *!/*/}
                //
                // {/*/!* FactFormat Description Section *!/*/}
                // {/*<div*/}
                // {/*    className="fact-description"*/}
                // {/*>*/}
                // {/*    <p>{fact.text}</p>*/}
                // {/*</div>*/}
                // {/* End of FactFormat Description Section */}
                //
                // {/* Confirmation Button */}
                //
                // {/* End of Confirmation Button */}
        )
    }
}

export default class FactFormat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            current: 1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState((prevState) => ({
            current: prevState.current + 1
        }))
    }

    render () {
        const facts = this.props.facts;

        console.log(facts)
        return (
            <div className="container fact-container">

                {this.state.current <= facts.length &&
                    <FactComponent
                        fact={facts[this.state.current - 1]}
                        onNextButton={this.handleChange}
                    />
                }

                {this.state.current > facts.length &&
                    <Link to="/game-menu" className="basic-btn">
                        <h3>Return to Menu</h3>
                    </Link>
                }
            </div>
        );
    }
}
