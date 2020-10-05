import React from 'react';
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
import SectionOneQuiz from "./components/quiz/quizzes/sectionOneQuiz";
import SectionTwoQuiz from "./components/quiz/quizzes/sectionTwoQuiz";
import SectionOneFact from "./components/fact/facts/sectionOneFact";

function App() {
  return (
      // <DeviceOrientation lockOrientation={'portrait'}>
      //     <Orientation orientation='portrait' alwaysRender={false}>
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
                                  <Route path="/section-one" component={SectionOneQuiz} />
                              </div>
                              <div>
                                  <Route path="/section-two" component={SectionTwoQuiz} />
                              </div>
                              {/* End of Quiz Pages */}
                              {/* Fact Pages */}
                              <div>
                                  <Route path="/section-one-fact" component={SectionOneFact} />
                              </div>
                              {/* End of Fact Pages */}

                              <div>
                                  <Route path="/fact" component={FactFormat} />
                              </div>
                          </div>
                      </Switch>
                  </div>
              </BrowserRouter>
      //     </Orientation>
      //     <Orientation orientation='landscape' alwaysRender={false} className="locked">
      //         <div>
      //             <p>Please rotate your device</p>
      //         </div>
      //     </Orientation>
      // </DeviceOrientation>


  );
}

export default App;
