import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/geethujp/bookLister/master/bookList.json';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBook}
        style={styles.listView}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading books...
        </Text>
      </View>
    );
  }

  renderBook(book) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: book.image}}
           style={{width: 80, height: 100}}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{book.name}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    margin: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  rightContainer: {
    flex: 1,
    justifyContent:'center',
    marginRight:10,
    marginLeft:10,
      },
  title: {
    fontSize: 16,
    color:'#424211',
    marginBottom: 8,
  },
  year: {
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
  },
});
