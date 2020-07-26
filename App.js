import 'react-native-gesture-handler'
import React from 'react'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Posts from './src/components/postsScreen/Posts'
import Images from './src/components/imageScreen/Images'
import {rootReducer} from './src/redux/reducer'
import {followPost} from './src/redux/saga'
import {loadPost} from './src/redux/action'

const saga = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(saga))
saga.run(followPost)
store.dispatch(loadPost())

const Stack = createStackNavigator()

const App = () => (
    <NavigationContainer>
        <Provider store={store}>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Posts'}
                    component={Posts}
                />
                <Stack.Screen
                    name={'Image'}
                    component={Images}
                />
            </Stack.Navigator>
        </Provider>
    </NavigationContainer>
)

export default App