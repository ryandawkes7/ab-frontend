import React, {Component} from "react";
import FactFormat from "../../factFormat";

import FactOne from './assets/factOne.svg'; import FactTwo from './assets/factTwo.svg'; import FactThree from './assets/factThree.svg';

const Facts = [
    {
        options: [
            {
                id: 1,
                text: 'The cockpits during WWI were so small that pilots could not wear parachutes, even if permitted. In fact, some generals forbid the use of parachutes because they believed it dampened the fighting spirit of the pilots. Luckily, times have changed.',
                number: 'Fact 1 of 3',
                image: FactOne
            },
        ],
    },
    {
        options: [
            {
                id: 2,
                text: 'Early aeroplanes were made from wood and fabric and caught fire easily so early pilots were as worried about fires as they were of crashing',
                number: 'Fact 2 of 3',
                image: FactTwo
            },
        ]
    },
    {
        options: [
            {
                id: 3,
                text: 'Pilots wore leather helmets like this to keep out the cold and the noise of their engine. Leather is warm, waterproof and also helps protect your head against fire.',
                number: 'Fact 3 of 3',
                image: FactThree
            },
        ]
    },
]

class SectionTwoFact extends Component {
    render () {
        return(
            <div>
                <FactFormat facts={Facts} />
            </div>
        )
    }
}

export default SectionTwoFact;
