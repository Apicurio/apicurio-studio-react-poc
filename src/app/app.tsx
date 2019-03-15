import React, { Component } from 'react';
import { BackgroundImage, BackgroundImageSrc } from '@patternfly/react-core';
import xs from '@pf4-assets/images/pfbg_576.jpg';
import xs2x from '@pf4-assets/images/pfbg_576@2x.jpg';
import sm from '@pf4-assets/images/pfbg_768.jpg';
import sm2x from '@pf4-assets/images/pfbg_768@2x.jpg';
import lg from '@pf4-assets/images/pfbg_1200.jpg';
import filter from '@pf4-assets/images/background-filter.svg';

const images = {
  [BackgroundImageSrc.xs]: xs,
  [BackgroundImageSrc.xs2x]: xs2x,
  [BackgroundImageSrc.sm]: sm,
  [BackgroundImageSrc.sm2x]: sm2x,
  [BackgroundImageSrc.lg]: lg,
  [BackgroundImageSrc.filter]: `${filter}#image_overlay`
};

export default class App extends Component {
  public state = {
    isShowing: true
  };
  public render() {
    const { isShowing } = this.state;
    return (
      <React.Fragment>
        <BackgroundImage src={images} />
      </React.Fragment>
    );
  }
  private dismissNotification = () => {
    this.setState({ isShowing: false });
  };
}
