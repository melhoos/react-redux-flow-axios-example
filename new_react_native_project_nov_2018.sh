
echo "#####################"
echo "#   Pre-requisits   #"
echo "#####################"


echo "1. Node ( brew install node)"
echo "2. watchman [not required - very usefull] (brew install watchman)"
echo "3. React-native Client (npm install -g react-native-cli)"

echo "NB! If you do not have the pre-requisits, run the three lines above"
printf "\n\n\n\n"

#####################
#        Setup      #
#####################

project_name=HealthHub

react-native init $project_name

cd $project_name

npm install redux
npm install react-redux

# Clear APP.js and create empty styles.js in root
path_to_App_file="./App.js"
path_to_styles_file="./styles.js"

rm $path_to_App_file
touch $path_to_App_file
touch $path_to_styles_file

# Create folders and files for redux
path_to_actions=./src/redux/actions
path_to_constants=./src/redux/constants
path_to_reducers=./src/redux/reducers
path_to_store=./src/redux/store
path_to_images=./src/resources/images/
path_to_components=./src/components

mkdir -p $path_to_actions
mkdir -p $path_to_constants
mkdir -p $path_to_reducers
mkdir -p $path_to_store

mkdir -p $path_to_images
mkdir -p $path_to_components


path_to_actions_file="${path_to_actions}/actions.js"
path_to_constants_file="${path_to_constants}/constants.js"
path_to_reducers_file="${path_to_reducers}/reducers.js"
path_to_store_file="${path_to_store}/store.js"

path_to_counter_file="${path_to_components}/Counter.js"

touch $path_to_actions_file
touch $path_to_constants_file
touch $path_to_reducers_file
touch $path_to_store_file

touch $path_to_counter_file
# Fill actions.js
printf "\
import INCREMENT_COUNTER from '../constants/constants.js';\n\
export const incrementCounter = () => {\n\
    return {type: 'INCREMENT_COUNTER'};\n\
}\n\
export const deIncrementCounter = () => {\n\
    return {type: 'DEINCREMENT_COUNTER'};\n\
}\
" >> $path_to_actions_file

# Fill constants.js
printf "\
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';\n\
export const DEINCREMENT_COUNTER = 'DEINCREMENT_COUNTER';\
" >> $path_to_constants_file

# Fill reducer.js
printf "\
import { INCREMENT_COUNTER, DEINCREMENT_COUNTER } from '../constants/constants';\n\
const initialState = {\n\
    counter: 0\n\
}\n\
const rootReducer = (state = initialState, action) => {\n\
    switch (action.type) {\n\
        case INCREMENT_COUNTER:\n\
            return {...state, counter: state.counter + 1 };\n\
        case DEINCREMENT_COUNTER:\n\
            return {...state, counter: state.counter - 1 };\n\
        default:\n\
            return state;\n\
    };\n\
}\n\
export default rootReducer\
" >> $path_to_reducers_file

# Fill store.js
printf "\
import rootReducer from '../reducers/reducers.js';\n\
import { createStore } from 'redux';\n\
const store = createStore(rootReducer)\n\
export default store\
" >> $path_to_store_file

# Fill Counter.js
printf "\
import React, { Component } from 'react';\n\
import { connect } from 'react-redux'\n\
import {View, Text, Button, StyleSheet} from 'react-native';\n\
import { incrementCounter, deIncrementCounter } from '../redux/actions/actions'\n\
class Counter extends Component {\n\
    handleUp = () => {\n\
        this.props.incrementCounter();\n\
    }\n\
    handleDown = () => {\n\
        this.props.deIncrementCounter();\n\
    }\n\
    render() {\n\
        return (\n\
            <View style={{backgroundColor: 'pink'}}>\n\
                <Button color='green' title='UP!!' onPress={this.handleUp}/>\n\
                <Button color='green' title='DOWN!!' onPress={this.handleDown}/>\n\
                <Text style={styles.counterText}>{this.props.counter}</Text>\n\
            </View>\n\
        );\n\
    }\n\
}\n\
const styles = StyleSheet.create({\n\
  button: {\n\
    justifyContent: 'center',\n\
    alignItems: 'center',\n\
  },\n\
  counterText:{\n\
    color: 'red',\n\
    textAlign: 'center'\n\
  }\n\
});\n\
const mapDispatchToProps = {\n\
    incrementCounter,\n\
    deIncrementCounter\n\
}\n\
function mapStateToProps(state) {\n\
  return { counter: state.counter }\n\
}\n\
export default connect(mapStateToProps, mapDispatchToProps)(Counter)\
" >> $path_to_counter_file


# Fill App.js
printf "\
import React, {Component} from 'react';\n\
import {Platform, StyleSheet, Text, View} from 'react-native';\n\
import { Provider } from 'react-redux';\n\
import store from './src/redux/store/store.js';\n\
import styles from './styles.js'\n\
import Counter from './src/components/Counter.js'\n\
const instructions = Platform.select({\n\
  ios:\n\
    'Press Cmd+R to reload,' + 'Cmd+D or shake for dev menu',\n\
  android:\n\
    'Double tap R on your keyboard to reload,' +\n\
    'Shake or press menu button for dev menu',\n\
});\n\
type Props = {};\n\
export default class App extends Component<Props> {\n\
  render() {\n\
    return (\n\
      <Provider store={store}>\n\
        <View style={styles.container}>\n\
          <Text style={styles.welcome}>Welcome to React Native!</Text>\n\
          <Counter />\n\
          <Text style={styles.instructions}>To get started, edit App.js</Text>\n\
          <Text style={styles.instructions}>{instructions}</Text>\n\
        </View>\n\
      </Provider>\n\
    );\n\
  }\n\
}\
" >> $path_to_App_file

# Fill styles.js
printf "\
import {StyleSheet} from 'react-native';\n\
const styles = StyleSheet.create({\n\
  container: {\n\
    flex: 1,\n\
    justifyContent: 'center',\n\
    alignItems: 'center',\n\
    backgroundColor: '#F5FCFF',\n\
  },\n\
  welcome: {\n\
    fontSize: 20,\n\
    textAlign: 'center',\n\
    margin: 10,\n\
  },\n\
  instructions: {\n\
    textAlign: 'center',\n\
    color: '#333333',\n\
    marginBottom: 5,\n\
  },\n\
  welcomeButton: {\n\
      fontSize: 20,\n\
      color: '#00FF00',\n\
      marginBottom: 5,\n\
      backgroundColor: '#303030',\n\
  }\n\
});\n\
export default styles\
" >> $path_to_styles_file
