import React from 'react';
import Projects from './Projects';
import {projects as projectsData} from '../../data';

export default function (props) {
  return <Projects {...projectsData} {...props} />
}