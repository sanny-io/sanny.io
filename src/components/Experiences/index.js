import React from 'react';
import Experiences from './Experiences';
import { experiences as experiencesData } from '../../data';

export default function (props) {
  return <Experiences {...experiencesData} {...props} />
}