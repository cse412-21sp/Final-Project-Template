const React = require('react');

class PlotlyEmbed extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <iframe 
        scrolling={"no"}
        style={{border:"none"}}
        seamless={"seamless"}
        src={this.props.link} 
        height={this.props.height} //"525" 
        width={this.props.width} //"100%"
      />
    );
  }
}

module.exports = PlotlyEmbed;
