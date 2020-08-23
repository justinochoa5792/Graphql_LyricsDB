import React, { Component } from "react";

class LyricList extends Component {
  onLike(id) {
    console.log("thumbs up");
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i onClick={() => this.onLike(id)} className="material-icons">
            thumb_up
          </i>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="collection">{this.renderLyrics()}</ul>
      </div>
    );
  }
}

export default LyricList;
