import React, {Component} from "react";
import FactFormat from "../../factFormat";

import FactOne from './assets/factOne.svg'; import FactTwo from './assets/factTwo.svg'; import FactThree from './assets/factThree.svg';

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'Britain knew the Second World War was coming and warned important industries. BAC started moving its workers to secret places across Bristol a month before the war officially began.',
                number: 'Fact 1 of 3',
                image: FactOne
            },
        ],
    },
    {
        options: [
            {
                id: 2,
                text: 'During WWII Germany tried to bomb important factories around the UK. To protect their workers, companies sent lots of them to work in secret and unexpected places around the city instead of in the main factory.',
                number: 'Fact 2 of 3',
                image: FactTwo
            },
        ]
    },
    {
        options: [
            {
                id: 3,
                text: 'Dispersal sites were usually placed in repurposed factories around the country but would you expect some people were designing planes in a swimming pool?',
                number: 'Fact 3 of 3',
                image: FactThree
            },
        ]
    },
]

class SectionFourFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionFourFact;
