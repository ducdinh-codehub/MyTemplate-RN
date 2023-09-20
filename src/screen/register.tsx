import {TextInput, StyleSheet, Dimensions, Button, Alert} from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';
import {auth} from '../../Firebase/firebase';
import {useState} from 'react';
const Register = (props?: any) => {
  const [name, setName] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const signin = () => {
    if (name && gmail && password && password2) {
      if (password !== password2) {
        Alert.alert('Thông báo hệ thống', 'Mật khẩu nhập lại không trùng');
      } else {
        auth
          .createUserWithEmailAndPassword(gmail, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            Alert.alert('Thông báo hệ thống', 'Tạo tài khoản thành công');
            props.setHaveAccount(true);
            props.setCreateAccountSuccess(true);
          })
          .catch(error =>
            Alert.alert(
              'Thông báo hệ thống',
              'Có lỗi xảy ra trong quá trình tạo tài khoản',
            ),
          );
      }
    }
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={styles.registerSectionStyle}>
        <Text style={styles.registerTitleStyle}>REGISTER</Text>
        <View style={styles.breakComponent25} />
        <TextInput
          autoCapitalize="none"
          style={styles.textInputStyle}
          placeholder="Your name..."
          onChangeText={setName}
        />
        <View style={styles.breakComponent25} />
        <TextInput
          autoCapitalize="none"
          style={styles.textInputStyle}
          placeholder="Your Gmail..."
          onChangeText={setGmail}
        />
        <View style={styles.breakComponent25} />
        <TextInput
          autoCapitalize="none"
          style={styles.textInputStyle}
          placeholder="Your Password..."
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <View style={styles.breakComponent25} />
        <TextInput
          autoCapitalize="none"
          style={styles.textInputStyle}
          placeholder="Your Password again..."
          secureTextEntry={true}
          onChangeText={setPassword2}
        />
        <View style={styles.buttonSectionStyle}>
          <Button
            title="Huỷ"
            onPress={() => {
              props.setHaveAccount(true);
            }}
          />
          <Button title="Đăng kí" onPress={signin} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerSectionStyle: {
    backgroundColor: Colors.grey70,
    height: '50%',
    width: Dimensions.get('window').width - 15,
    marginTop: '50%',
    alignItems: 'center',
    borderBottomLeftRadius: 35,
  },
  registerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.blue20,
  },
  textInputStyle: {
    borderWidth: 1,
    backgroundColor: Colors.grey60,
    borderColor: Colors.grey50,
    borderRadius: 15,
    height: 55,
    width: Dimensions.get('window').width - 50,
  },
  breakComponent25: {
    marginBottom: 15,
  },
  buttonSectionStyle: {
    flexDirection: 'row',
  },
});

export default Register;
