import React from 'react';
import PersonalCard from './PersonalCard';
import classes from './PersonalCard.styles';
import Styles from '../Styles';
import { personal as personalData } from '../../data';

export default function (props) {
  return (
    <Styles classes={classes} {...personalData} {...props}>
      <PersonalCard />
    </Styles>
  )
}