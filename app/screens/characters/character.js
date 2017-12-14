import React from 'react';
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  RkCard,
  RkText,
  RkStyleSheet
} from 'react-native-ui-kitten';
import {data} from '../../data';
let moment = require('moment');


export class Character extends React.Component {
  static navigationOptions = {
    title: 'Character'
  };

  constructor(props) {
    super(props);
    let {params} = this.props.navigation.state;
    let id = params ? params.id : 1;

    this.data = data.getCharacter(id);
    console.log('photo: ', this.data.photo);
  }

  render() {
    const randVal = Math.random();
    return (
      <ScrollView style={styles.root}>
        <RkCard rkType='character'>

          <View rkCardHeader>
            <View style={{flex: 1, alignSelf: 'center'}}>
              <RkText style={[styles.title, {textAlign: 'center'}]} rkType='header1'>{this.data.header}</RkText>
              { this.data.time ?
              <RkText rkType='secondary1 hintColor' style={{textAlign: 'center'}}>{moment().add(this.data.time, 'seconds').fromNow()}</RkText>
              :
              <RkText rkType='secondary1 hintColor' style={{textAlign: 'center'}}>{this.data.subheader}</RkText>
              }
            </View>

            <Image style={{width: 230 / 2, height: 335 / 2}} source={this.data.photo}/>

          </View>
          <View rkCardContent>
            <View>
              <RkText rkType='primary3 bigLine'>{this.data.text}</RkText>
            </View>
          </View>
          <View rkCardFooter>
            {/* <SocialBar/> */}
          </View>
        </RkCard>
      </ScrollView>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  title: {
    marginBottom: 5,
  },
}));