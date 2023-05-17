import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing'
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const ONE_SECOND_IN_MS = 1000;
var PATTERN;
if (Platform.OS === 'android') {
  PATTERN = [
    0,
    400,
    500,
    400,
    500,
    400
  ]
} else if (Platform.OS === 'ios') {
  PATTERN = [
    500,
    500,
    500
  ]
}

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [paused, setPaused] = useState(true);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setPaused(true);
    setProgress(1);
    onTimerEnd(focusSubject);
    //clearSubject();
    reset();
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={paused}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={{paddingTop: spacing.xxl}}>
          <Text style={styles.title}>Current Focus</Text>
          <Text style={styles.task}>{focusSubject.toUpperCase()}</Text>
        </View>
      </View>
      <View>
        <ProgressBar
          progress={progress}
          color={colors.white}
          style={{height: spacing.sm}}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing changeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={paused ? 'start' : 'pause'}
          onPress={() => {setPaused(!paused)}}/>
      </View>
      <View style={styles.cancelWrapper}>
        <RoundedButton
          title="-"
          size={50}
          onPress={()=>clearSubject()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: colors.lightGreen
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15
  },
  cancelWrapper: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
  }
});