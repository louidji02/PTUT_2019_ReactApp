import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';

//Images 
//import avatarButton from "..\\assets\\images\\viewSignIn\\avatarButton.PNG"


class viewSignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: null,
      jobList: [{
        value: 'Sans emploi',
      }, {
        value: 'Ingénieur',
      }, {
        value: 'Cheminot',
      }],
    }
  }

  
    render() {
      return ( 
        <View style={styles.view}>
          <TouchableOpacity name="avatarButton" title="Avatar" style={styles.avatar}><Image
            source={require('./../assets/avatarButton.png')}
          /></TouchableOpacity>

          {/* selection du genre */}
          <Button name="genderM" title="Homme"></Button>
          <Button name="genderF" title="Femme"></Button>
          <Button name="genderO" title="Non renseigné"></Button>

          {/* Age */}
          <DatePicker
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY"
            confirmBtnText="Ok"
            cancelBtnText="Anuler"
            onDateChange={(date) => {this.setState({date: date})}}
            style={styles.datePicker}
          />
          <Dropdown
            label='Métier'
            data = {this.state.jobList}
            style = {styles.dropdown}
          />

          
          <TouchableOpacity 
            name="nextButton" 
            title="Suivant >" 
            style={styles.nextButton}
            onPress={() => this.props.navigation.navigate("ViewSetting")}>
              <Text style={styles.text}>Suivant ></Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
   
  const styles = StyleSheet.create({
    avatar: {
      alignContent: 'center',
    },
    view: {
      flex: 1,
      padding: 60,
      backgroundColor: '#105AA6',
      justifyContent: "center",
      alignItems: "center",
    },
    dropdown: {
      backgroundColor: '#E5E5E5',
      flexDirection: "row",
      width: 300,
    },
    nextButton: {
      backgroundColor: 'red',
      justifyContent: "center"
    },
    text: {
      textAlign: "center",
    },
    datePicker: {
      backgroundColor: "#E5E5E5",
      
    }
  });

  export default viewSignIn