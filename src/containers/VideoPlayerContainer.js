import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = state => ({
  video: state.currentVideo,
});

const mapDispatchToState = dispatch => ({});

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToState)(VideoPlayer);

export default VideoPlayerContainer;
