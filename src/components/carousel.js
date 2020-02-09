import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      interval: null,
      length: null
    };
  }

  componentDidMount() {
    if (this.state.length === null && this.props.children) {
      this.setState({
        length: this.props.children.length
      });
    }
    this.startAutoSlide();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  startAutoSlide() {
    const interval = setInterval(() => {
      this.setState({
        currentIndex: (this.state.currentIndex + 1) % (this.state.length || 1)
      });
    }, 5000);
    this.setState({
      interval
    });
  }

  transformProperty = index => {
    return {
      transform: `translate(-${index}00%, 0)`
    };
  };

  toIndex = i => {
    this.setState({
      currentIndex: i
    });
  };

  handleClick = i => {
    this.toIndex(i);
    clearInterval(this.state.interval);
    this.startAutoSlide();
  };

  render() {
    const { children, isFullSize } = this.props;
    const currentIndex = this.state.currentIndex;
    const indicatorStyle = isFullSize
      ? {
          position: 'absolute',
          bottom: 0
        }
      : {};

    return (
      <div className="carousel">
        <div className="carousel_container">
          <div
            className="carousel_itemWrapper"
            style={this.transformProperty(currentIndex)}
          >
            {children}
          </div>
          <div className="carousel_indicator" style={indicatorStyle}>
            {children &&
              children.map((item, i) => {
                return (
                  <span
                    className={`indicator ${
                      currentIndex === i ? 'active' : ''
                    }`}
                    onClick={() => {
                      this.handleClick(i);
                    }}
                    data-carousel={i}
                    key={i}
                  ></span>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
