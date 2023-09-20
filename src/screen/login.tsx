import {useState} from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {View, Text, Colors} from 'react-native-ui-lib';

const Login = (props: any) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    if (account && password) {
      props.setIsSignedIn(true);
    }
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={styles.loginSection}>
        <Text style={styles.loginTitleStyle}>LOGIN</Text>
        <View style={styles.breakComponent25} />
        <TextInput
          height={55}
          width={Dimensions.get('window').width - 50}
          style={styles.textInputStyle}
          placeholder="Tài khoản..."
          required
          onChangeText={setAccount}
        />
        <View style={styles.breakComponent25} />
        <TextInput
          height={55}
          width={Dimensions.get('window').width - 50}
          style={styles.textInputStyle}
          placeholder="Mật khẩu..."
          required
          onChangeText={setPassword}
        />
        <View style={styles.breakComponent25} />
        <View>
          <Button title="Đăng nhập" onPress={login} />
        </View>
      </View>
      <View style={styles.signinSection}>
        <View style={styles.breakComponent25} />
        <TouchableOpacity>
          <Text style={styles.signinTitleStyle}>
            Bạn đã có tài khoản chưa?/đăng kí ngay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginSection: {
    backgroundColor: Colors.grey70,
    height: '30%',
    width: Dimensions.get('window').width - 15,
    marginTop: '50%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 35,
  },
  breakComponent25: {
    marginBottom: 15,
  },
  textInputStyle: {
    borderWidth: 1,
    backgroundColor: Colors.grey60,
    borderColor: Colors.grey50,
    borderRadius: 15,
  },
  loginTitleStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.blue20,
  },
  signinSection: {
    backgroundColor: Colors.grey70,
    height: '25%',
    width: Dimensions.get('window').width,
    marginTop: '65%',
    alignItems: 'center',
    alignSelf: 'center',
    borderTopLeftRadius: 65,
  },
  signinTitleStyle: {
    color: Colors.blue20,
  },
});

export default Login;
