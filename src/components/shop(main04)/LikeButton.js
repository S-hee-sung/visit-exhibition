import React from "react";
import { FavoriteBorder, Favorite } from '@mui/icons-material';

class LikeButton extends React.Component {
  state = {
    isChecked: false,
  };

  onClick = () => {
    this.state.isChecked ?
      this.setState({
        isChecked: false,
        notice: '',
      })
      :
      this.setState({
        isChecked: true,
      });
  }

  render() {
    return (
      <>
        <div className="icons-list">
          {this.state.isChecked ?
          <Favorite style={{ color: '#FFC3C3', fontSize: '20px' }} onClick={this.onClick}/>
          :
          <FavoriteBorder style={{ color: '#FFC3C3', fontSize: '20px' }} onClick={this.onClick}/>}
          <h3>{this.state.notice}</h3>
        </div>
      </>
    )
  }
};

export default LikeButton;