import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setPhoto } from '../../redux/reducers/Posts';

class PostItem extends React.PureComponent {
  _onPressItem = () => {
    const { props } = this;
    props.setPhoto(props.post);
    props.navigation.navigate('ImageFull');
  };

  render() {
    const { props } = this;
    return (
      <TouchableOpacity
        onPress={this._onPressItem}
        style={styles.itemContainer}>
        <Image
          source={{ uri: props.post.urls.thumb }}
          style={styles.iconPicture}
        />

        <View style={styles.textInfo}>
          <Text style={styles.author}>{props.post.user.name}</Text>
          <Text style={styles.descriptionParagraph}>
            {props.post.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 100,
  },
  iconPicture: {
    flex: 1,
  },
  textInfo: {
    flex: 2,
    marginLeft: 5,
    marginRight: 10,
  },
  author: {
    flex: 1,
    fontSize: 30,
  },
  descriptionParagraph: {
    flex: 2,
    fontSize: 15,
  },
});

export default connect(null, { setPhoto })(PostItem);
