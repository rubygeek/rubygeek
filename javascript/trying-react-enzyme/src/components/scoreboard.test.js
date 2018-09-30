/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/
import React from 'react';
import { shallow } from 'enzyme';
import Scoreboard from "./scoreboard"

beforeEach(() => {
});


it('renders finds 2 scores', () => {
    const mountedScoreboard = shallow(<Scoreboard />);
    const scores = mountedScoreboard.find("li");
    expect(scores.length).toBe(2);
});

it('first score value is correct', () => {
    const mountedScoreboard = shallow(<Scoreboard />);
    const scores = mountedScoreboard.find("li");
    expect(scores.first().text()).toBe(" Score 1 ");
});
