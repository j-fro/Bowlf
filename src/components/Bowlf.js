// @flow
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import { main } from '../config/routes';
import GameStore from '../stores/GameStore';
import PlayerEntry from './PlayerEntry';
import ScoreKeeping from './ScoreKeeping';

const store = new GameStore();

const Bowlf = () => {
  const Nav = StackNavigator({
    [main.playerEntry]: { screen: PlayerEntry },
    [main.scoreKeeping]: { screen: ScoreKeeping },
  });
  return <Provider store={store}><Nav /></Provider>;
};

export default Bowlf;
