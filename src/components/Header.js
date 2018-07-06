import React, { } from 'react';
import
{
  Text,
  View,
} from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

export default Header;


//Styling
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    elevation: 3,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
