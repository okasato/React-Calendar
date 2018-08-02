import React, { Component } from 'react';
import Modal from 'react-modal';
import Typography from '@material-ui/core/Typography/Typography';
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

export default class ScheduleOfTheDay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='scheduleOfTheDay'>
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onRequestClose}
          style={customStyles}
          overlayClassName="Overlay"
        >
          <IconButton className='clear' onClick={this.props.onRequestClose}>
            <Icon>clear</Icon>
          </IconButton>
          <Typography variant="display1" gutterBottom>
            My Plans For Today
          </Typography>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary={this.props.scheduleOfTheDay} />
            </ListItem>
          </List>
        </Modal>
      </div>
    )
  }
} 