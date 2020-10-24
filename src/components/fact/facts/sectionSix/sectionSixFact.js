import React, {Component} from "react";
import FactFormat from "../../factFormat";

import FactOne from './assets/factOne.svg'; import FactTwo from './assets/factTwo.svg';

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Did you know that jet engines are used to power large ships as well as aeroplanes? The Royal Navy\'s Invincible Class Aircraft Carriers were powered by Olympus engines just like Concorde was.',
                number: 'Fact 1 of 2',
                image: FactOne
            },
        ],
    },
    {
        options: [
            {
                id: 2,
                text: 'People working in Filton have been part of over 60 different spacecraft projects including the Hubble Telescope and the Giotto probe which visited Halley\'s Comet.',
                number: 'Fact 2 of 2',
                image: FactTwo
            },
        ],
    },
]

class SectionSixFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionSixFact;
