import React from 'react';
import Introduction from './Introduction';
import { introduction as introductionData } from '../../data';

export default function (props) {
  return (
    <Introduction {...introductionData} {...props} />
  );
}