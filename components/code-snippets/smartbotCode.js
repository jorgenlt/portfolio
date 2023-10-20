export const smartbotCode1 = `
// src/features/chat/chatSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fetchChatCompletion from '../../api/api'
import uuid from 'react-native-uuid'

const initialState = {
  conversations: {},
  currentId: null,
  status: 'idle',
  error: null
};

// Get chat completion from ChatGPT (OpenAI) using async thunk
export const getChatResponseThunk = createAsyncThunk(
  'chat/getResponse',
  async (message, { getState }) => {
    const { chat: { currentId, conversations } } = getState();

    if (currentId) {
      const context = conversations[currentId].messages;
  
      try {
        const response = await fetchChatCompletion(context, message);
        return response;
      } catch (error) {
        return Promise.reject(error.message);
      };
    };
  }
);

// Chat slice of the Redux store
export const chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addConversation: state => {
      const id = uuid.v4();

      state.currentId = id;
      state.conversations[id] = {
        created: Date.now(),
        messages: [{"content": "Hello! How can I assist you today?", "role": "assistant"}]
      };
    },
    updateMessages: (state, action) => {
      const { currentId } = state;
      const message = action.payload;

      if (currentId) {
        state.conversations[currentId]?.messages.push(message);
      }
    },
    deleteConversation: (state, action) => {
      const id = action.payload;

      delete state.conversations[id];

      state.currentId = null;
    },
    deleteConversations: state => {
      state.conversations = {};
      state.currentId = null;
    },
    updateCurrentId: (state, action) => {
      state.currentId = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      // Case when fetching chat response is pending
      .addCase(getChatResponseThunk.pending, state => {
        state.status = 'loading';
      })
      // Case where getting chat response is successful (fulfilled)
      .addCase(getChatResponseThunk.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'idle';

        const { currentId } = state;
        const { content, role } = action.payload;

        if (currentId && content && role) {
          const message = {
            content,
            role
          };
          
          // Push the fetched message into the messages of current conversation
          state.conversations[currentId]?.messages.push(message);
        };
      })
      // Case where getting chat response failed
      .addCase(getChatResponseThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { 
  updateMessages,
  deleteConversation, 
  deleteConversations,
  addConversation,
  updateCurrentId
} = chat.actions

export default chat.reducer;
`;

export const smartbotCode2 = `
// src/api/api.js

import axios from 'axios';

// Setting up api key, base url and model info
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const url = 'https://api.openai.com/v1/chat/completions';
const model = 'gpt-3.5-turbo';
// const model = 'gpt-4';

// Fetch chat completion with the axios library.
async function fetchChatCompletion(context, prompt) {

  const userMessage = {
    role: 'user',
    content: prompt
  };

  const requestBody = {
    model: model,
    messages: [
      ...context, 
      userMessage
    ]
  };

  const config = {
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await axios.post(url, requestBody, config);

    const role = response.data.choices[0].message.role;
    const content = response.data.choices[0].message.content;

    return {
      role,
      content
    }
    
  } catch (error) {
    console.error('Error in fetchChatCompletion:', error.message || error.response.data.error?.message);
    throw error;
  }
}

export default fetchChatCompletion;
`;

export const smartbotCode3 = `
// App.js

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import { store, persistor } from './src/app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import Chat from './src/features/chat/Chat'
import Conversations from './src/features/chat/Conversations'
import Settings from './src/components/Settings'
import NewChat from './src/features/chat/NewChat'
import { colors, navTheme, base } from './src/styles/colors'

// Navigation
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar 
        backgroundColor={base.statusBarBg}
        // barStyle='light-content'
        style="light"
      />
      <PersistGate 
        loading={<Text>Loading...</Text>} 
        persistor={persistor} 
      >
        <NavigationContainer theme={navTheme} >
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: true,
              tabBarShowLabel: true,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Chat') {
                  iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
                } else if (route.name === 'Conversations') {
                  iconName = focused ? 'list' : 'list-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                } else if (route.name === 'New Chat') {
                  iconName = focused ? 'add' : 'add-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: navTheme.tabBarActiveTintColor,
              tabBarInactiveTintColor: navTheme.tabBarInactiveTintColor,
            })}
          >
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Conversations" component={Conversations} />
            <Tab.Screen name="New Chat" component={NewChat}/>
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
`;

export const smartbotCode4 = `
// src/features/chat/Messages.js

import { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView,
  Pressable,
  Share,
  Alert
} from 'react-native'
import { Audio } from 'expo-av';
import * as Clipboard from 'expo-clipboard'
import { format } from 'date-fns'
import uuid from 'react-native-uuid'
import { colors, chat, base } from '../../styles/colors'
import { Flow } from 'react-native-animated-spinkit'

const Messages = () => {
  const [typingSound, setTypingSound] = useState();

  const { currentId, conversations, error, status } = useSelector(state => state.chat);
  const messages = conversations[currentId]?.messages;
  const date = conversations[currentId]?.created;

  let formatedDate;

  if (date) {
    formatedDate = format(date, 'LLLL d, y');
  }
  
  // Function to copy text(messages) to clipboard.
  const handleCopyToClipboard = async text => {
    await Clipboard.setStringAsync(text);
    Alert.alert('', 'Copied to Clipboard.')
  };

  // Share message
  const handleShare = async message => {
    try {
      const result = await Share.share({
        message:
          message,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  
  // Creating the message elements to render in the ScrollView.
  let messageElements;

  if (messages) {
    messageElements = messages.map(message => {
      return (
        <View 
        style={message.role === 'assistant' ? styles.messageWrapperAssistant : styles.messageWrapperUser} 
        key={uuid.v4()} 
        >
          <Pressable 
            style={message.role === 'assistant' ? styles.messageAssistant : styles.messageUser}
            onLongPress={() => handleShare(message.content)}
            onPress={() => handleCopyToClipboard(message.content)}
          >
            <Text>
              {message.content}
            </Text>
          </Pressable>
        </View>
      )
    });
  }
  
  // Ref for ScrollView
  const scrollRef = useRef();

  // Sound effects
  // Load sound when component mounts
  useEffect(() => {
    async function loadTypingSound() {
      const { sound } = await Audio.Sound.createAsync(require('../../../assets/typing.mp3'));
      setTypingSound(sound);
    }

    loadTypingSound();

     // Cleanup
     return typingSound ? () => {
      typingSound.unloadAsync(); 
    } : undefined;
  }, []);

  // Function to play sound
  const playTypingSound = async () => {
    if (typingSound) {
      await typingSound.replayAsync();
    }
  };

  // Play typing sound when status is 'loading'
  useEffect(() => {
    if (status === 'loading') {
      playTypingSound();
    } else if (typingSound && status === 'idle') {
      // Stop typing sound
      typingSound.stopAsync();
    }
  }, [status])

  return (
    <>
      <ScrollView 
        contentContainerStyle={styles.messagesWrapper}
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd({ animated: false })}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.date}>
          <Text style={styles.dateText}>{formatedDate}</Text>
        </View>

        {messageElements}

        {
          status === 'loading' && 
          <View style={styles.messageWrapperAssistant}>
            <View style={styles.flowLoader}>
              <Flow size={30} color='#202020'  />
            </View>
          </View>
        }
      </ScrollView>
      {error && <Text>{error}</Text>}
    </>
  )
}

export default Messages

const styles = StyleSheet.create({
  messagesWrapper: {
    paddingHorizontal: 5,
    paddingBottom: 20,
    width: '100%'
  },
  messageWrapperUser: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%'
  },
  messageWrapperAssistant: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  messageUser: {
    backgroundColor: chat.messageUserBg,
    color: colors.text,
    borderRadius: 20,
    borderTopRightRadius: 2,
    padding: 10,
    maxWidth: '90%',
  },
  messageAssistant: {
    backgroundColor: chat.messageAssistantBg,
    color: colors.text,
    borderRadius: 20,
    borderTopLeftRadius: 2,
    padding: 10,
    maxWidth: '90%'
  },
  noMessagesWrapper: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noMessages: {
    fontSize: 18
  },
  flowLoader: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: chat.messageAssistantBg,
    color: base.loader,
    borderRadius: 20,
    borderTopLeftRadius: 2,
  },
  date: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },
  dateText: {
    color: colors.gray,
  }
})
`;

export const smartbotCode5 = `
├── App.js
└── src
    ├── api
    │   └── api.js
    ├── app
    │   └── store.js
    ├── common
    │   └── utils
    │       ├── capitalizeFirstWord.js
    │       └── findObject.js
    ├── components
    │   └── Settings.js
    ├── features
    │   └── chat
    │       ├── ChatInput.js
    │       ├── Chat.js
    │       ├── chatSlice.js
    │       ├── Conversations.js
    │       ├── Messages.js
    │       └── NewChat.js
    └── styles
        └── colors.js
`;
