import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import Welcome from "./screens/welcome/welcome";
import PlayerInfo from "./screens/playerInfo/playerInfo";
import Accessibility from "./screens/accessibility/accessibility";
import Character from "./screens/character/character";
import Ready from "./screens/ready/ready";
import TermsConditions from "./screens/termsConditions/termsConditions";
import GameMenu from "./screens/gameMenu/gameMenu";
import FactFormat from "./components/fact/factFormat";
import SectionOneQuiz from "./components/quiz/quizzes/sectionOne/sectionOneQuiz";
import SectionTwoQuiz from "./components/quiz/quizzes/sectionTwo/sectionTwoQuiz";
import SectionOneFact from "./components/fact/facts/sectionOne/sectionOneFact";
import SectionThreeQuiz from "./components/quiz/quizzes/sectionThree/sectionThreeQuiz";
import SectionFourQuiz from "./components/quiz/quizzes/sectionFour/sectionFourQuiz";
import SectionFiveQuiz from "./components/quiz/quizzes/sectionFive/sectionFiveQuiz";
import SectionSevenQuiz from "./components/quiz/quizzes/sectionSeven/sectionSevenQuiz";
import SectionNineQuiz from "./components/quiz/quizzes/sectionNine/sectionNineQuiz";
import SectionSixQuiz from "./components/quiz/quizzes/sectionSix/sectionSixQuiz";
import SectionEightQuiz from "./components/quiz/quizzes/sectionEight/sectionEightQuiz";
import SectionTwoFact from "./components/fact/facts/sectionTwo/sectionTwoFact";
import SectionThreeFact from "./components/fact/facts/sectionThree/sectionThreeFact";
import SectionFourFact from "./components/fact/facts/sectionFour/sectionFourFact";
import SectionFiveFact from "./components/fact/facts/sectionFive/sectionFiveFact";
import SectionSixFact from "./components/fact/facts/sectionSix/sectionSixFact";
import SectionSevenFact from "./components/fact/facts/sectionSeven/sectionSevenFact";
import SectionNineFact from "./components/fact/facts/sectionNine/sectionNineFact";
import SectionEightFact from "./components/fact/facts/sectionEight/sectionEightFact";
import GameGuide from "./screens/gameGuide/gameGuide";
import SectionOnePic from "./components/picture/pictures/sectionOnePic";

class App extends Component {
    render() {
          return (
              // <DeviceOrientation lockOrientation={'portrait'}>
              //      <Orientation orientation='portrait' alwaysRender={false}>
                      <BrowserRouter>
                          <div className="container">
                              <Switch>
                                  <div>
                                      <div>
                                          <Route path="/" exact={true} component={Welcome}/>
                                      </div>
                                      <div>
                                          <Route path="/info" component={PlayerInfo}/>
                                      </div>
                                      <div>
                                          <Route path="/accessibility" component={Accessibility}/>
                                      </div>
                                      <div>
                                          <Route path="/character" component={Character}/>
                                      </div>
                                      <div>
                                          <Route path="/ready" component={Ready}/>
                                      </div>
                                      <div>
                                          <Route path="/ts-and-cs" component={TermsConditions} />
                                      </div>
                                      <div>
                                          <Route path="/game-menu" component={GameMenu}/>
                                      </div>
                                      {/* Quiz Pages */}
                                      <div>
                                          <Route path="/section-one-quiz" component={SectionOneQuiz} />
                                      </div>
                                      <div>
                                          <Route path="/section-two-quiz" component={SectionTwoQuiz} />
                                      </div>
                                      <div>
                                          <Route path="/section-three-quiz" component={SectionThreeQuiz} />
                                      </div>
                                      <div>
                                          <Route path="/section-four-quiz" component={SectionFourQuiz} />
                                      </div>
                                      <div>
                                          <Route path="/section-five-quiz" component={SectionFiveQuiz} />
                                      </div>
                                      <div>
                                          <Route path="/section-six-quiz" component={SectionSixQuiz} />
                                      </div>
                                      <div>
                                          <Route path="/section-seven-quiz" component={SectionSevenQuiz} />
                                      </div>
                                      <div>
                                          <Route path="/section-eight-quiz" component={SectionEightQuiz} />
                                      </div>
                                      <div>
                                          <Route path="/section-nine-quiz" component={SectionNineQuiz} />
                                      </div>
                                      {/* End of Quiz Pages */}
                                      {/* Fact Pages */}
                                      <div>
                                          <Route path="/section-one-fact" component={SectionOneFact} />
                                      </div>
                                      <div>
                                          <Route path="/section-two-fact" component={SectionTwoFact} />
                                      </div>
                                      <div>
                                          <Route path="/section-three-fact" component={SectionThreeFact} />
                                      </div>
                                      <div>
                                          <Route path="/section-four-fact" component={SectionFourFact} />
                                      </div>
                                      <div>
                                          <Route path="/section-five-fact" component={SectionFiveFact} />
                                      </div>
                                      <div>
                                          <Route path="/section-six-fact" component={SectionSixFact} />
                                      </div>
                                      <div>
                                          <Route path="/section-seven-fact" component={SectionSevenFact} />
                                      </div>
                                      <div>
                                          <Route path="/section-eight-fact" component={SectionEightFact} />
                                      </div>
                                      <div>
                                          <Route path="/section-nine-fact" component={SectionNineFact} />
                                      </div>
                                      {/* End of Fact Pages */}

                                      {/* Picture Pages */}
                                      <div>
                                          <Route path="/section-one-pic" component={SectionOnePic} />
                                      </div>
                                      {/* End of Picture Pages */}

                                      <div>
                                          <Route path="/fact" component={FactFormat} />
                                      </div>
                                      <div>
                                          <Route path="/user-guide" component={GameGuide} />
                                      </div>
                                  </div>
                              </Switch>
                          </div>
                      </BrowserRouter>
                   // </Orientation>
                   // <Orientation orientation='landscape' alwaysRender={false} className="locked">
                   //     <div>
                   //         <p>Please rotate your device</p>
                   //     </div>
                   // </Orientation>
              // </DeviceOrientation>


          );
    }

}

export default App;
