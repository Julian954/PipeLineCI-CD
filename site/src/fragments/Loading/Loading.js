import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.module.css';

export default class Loading extends Component {
  static propTypes = {
    className: PropTypes.string, // Valida que 'className' sea una cadena opcional
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <div className={this.props.className}>
        <div className={styles.container}>

          <img
            draggable={false}
            alt={`Loading`}
            src={
              'https://s3.amazonaws.com/dashboard.serverless.com/images/icon-serverless-framework.png'
            }
          />

          <p>loading...</p>

        </div>
      </div>
    );
  }
}
