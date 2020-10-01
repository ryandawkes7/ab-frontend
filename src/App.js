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
import GenericQuiz from "./components/quiz/genericQuiz/genericQuiz";
import Fact from "./components/fact/fact";
import Map from "./components/map/map";
import MapTest from "./components/mapTest/mapTest";

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
                              <div>
                                  <Route path="/quiz" component={GenericQuiz} />
                              </div>
                              <div>
                                  <Route path="/fact" component={Fact} />
                              </div>
                              <div>
                                  <Route exact path="/test-map" component={MapTest} />
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
