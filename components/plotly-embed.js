const React = require('react');

class PlotlyEmbed extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    console.log("SHOW", this.props.showlink)
    var showLink = "?showlink=" + (this.props.showlink ? true : false)
    return (
      <iframe 
        scrolling={"no"}
        style={{border:"none"}}
        seamless={"seamless"}
        src={this.props.link + showLink}
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}

module.exports = PlotlyEmbed;
