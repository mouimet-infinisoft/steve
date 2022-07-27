import React from 'react';
import { FadeInOutEffect } from './index.js';

export default {
  title: 'Components/FadeInOutEffect',
  component: FadeInOutEffect
};

const Template = () => (
  <FadeInOutEffect> <div style={{ width: 250, height: 250, border: "1px solid blue", color: "blue", backgroundColor: "pink" }}>Steeve</div></FadeInOutEffect>

);

export const Fader = Template.bind({});




