'use strict';

import React from 'react';
import ReactNative from 'react-native';

const {
  Image,
  TouchableOpacity
} = ReactNative;

const ActionButton = ({isShowingPlayer, isPlaying, showMusicPlayer, playCurrentMusic, pauseCurrentMusic}) => {
  console.log(1212, isShowingPlayer, isPlaying, showMusicPlayer, playCurrentMusic, pauseCurrentMusic);
  let icon = isShowingPlayer ? isPlaying ? require('../../asset/pause.png') : require('../../asset/play.png') : require('../../asset/music.png');
  let callback = isShowingPlayer ? isPlaying ? pauseCurrentMusic : playCurrentMusic : showMusicPlayer.bind(null, true);

  return (
    <TouchableOpacity activeOpacity={1} style={{width: 60, height: 60, borderRadius: 30, backgroundColor: `#ee9459`}} onPress={callback}>
      <Image style={{alignSelf: 'center', marginTop: 5, tintColor: '#fbeacf'}} source={icon} />
    </TouchableOpacity>
  )
};

export default ActionButton;