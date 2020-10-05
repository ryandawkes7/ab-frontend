import React, {Component} from "react";
import FactFormat from "../factFormat";

const Facts = [
    {
        id: 1,
        text: 'Bristol Boxkite worked by producing lift and drag forces with its wings. Just like the kites you can fly in the air!',
    },
    {
        id: 2,
        text: 'Bristol Aerospace Museum was established in 2017!'
    },
]

class SectionOneFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionOneFact;
