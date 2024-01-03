import {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateTimePickerScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [SelectedDate, setSelectedDate] = useState('Select Date');
  const [SelectedTime, setSelectedTime] = useState('Select Time');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    setCurrentDate(
      date +
        '/' +
        month +
        '/' +
        year +
        ' ' +
        hours +
        ':' +
        minutes +
        ':' +
        seconds,
    );
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = date => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = date => {
    const time = new Date(date);
    const x = time.toLocaleTimeString();
    setSelectedTime(x);
    hideTimePicker();
  };

  return (
    <View style={styled.first}>
      <TouchableOpacity
        style={styled.second}
        onPress={() => {
          showDatePicker();
        }}>
        <Text>{SelectedDate}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styled.second, {marginTop: 50}]}
        onPress={() => {
          showTimePicker();
        }}>
        <Text>{SelectedTime}</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 20}}>{currentDate}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  first: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  second: {
    width: '50%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DateTimePickerScreen;
