import React from 'react';
import PlayersStore from '../stores/PlayersStore';
import PlayerEntry from './PlayerEntry';
import Header from './Header';

const store = new PlayersStore();

const Bowlf = () => <Header><PlayerEntry store={store} /></Header>;

export default Bowlf;
