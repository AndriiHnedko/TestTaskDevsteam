import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import connect from 'react-redux/lib/connect/connect';

class ImageFull extends React.PureComponent {
  _imageSize = () => {
    const { props } = this;
    const windowWidth = Dimensions.get('window').width;
    const correlationSize = props.photo.width / windowWidth;
    const adaptiveHeight = Math.floor(props.photo.height / correlationSize);
    return { width: `100%`, height: adaptiveHeight };
  };

  render() {
    const { props } = this;
    const imageSize = this._imageSize();
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image
          source={{ uri: props.photo.urls.regular }}
          style={{ ...imageSize }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  photo: state.posts.photo,
});

export default connect(mapStateToProps)(ImageFull);
