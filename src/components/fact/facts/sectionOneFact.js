import React, {Component} from "react";
import FactFormat from "../factFormat";

const Facts = [
        {
            options: [
                {
                    id: 1,
                    text: 'Most Bristol Boxkites were used to teach people to fly. When WWI broke out nearly half of the pilots had learned to fly in one!',
                    number: 'Fact 1 of 4',
                },
            ],
        },
        {
            options: [
                {
                    id: 2,
                    text: 'The first pilots had to be very brave, they had nothing to protect them except a warm coat and hat and a simple harness to stop them falling out of their seat.',
                    number: 'Fact 2 of 4',
                },
            ]
        },
        {
            options: [
                {
                    id: 3,
                    number: 'Fact 3 of 4',
                    text: 'The controls for the Boxkite were very simple. A stick to move the elevators on the wings and a pedal to move the rudders on the tail left and right.',
                },
            ]
        },
        {
            options: [
                {
                    id: 4,
                    number: 'Fact 4 of 4',
                    text: 'Bristol Boxkite worked by producing lift and drag forces with its wings. Just like kites you can fly in the air!',
                },
            ]
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
