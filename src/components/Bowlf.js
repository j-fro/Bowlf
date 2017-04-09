import React from 'react';
import PlayerEntry from './PlayerEntry';
import Header from './Header';

const players = [{ name: 'Jimmy' }];

const Bowlf = () => <Header><PlayerEntry players={players} /></Header>;

export default Bowlf;
