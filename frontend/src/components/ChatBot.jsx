import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#3BCBFF',
  headerFontColor: '#1A132F',
  headerFontSize: '15px',
  botBubbleColor: '#3BCBFF',
  botFontColor: '#1A132F',
  userBubbleColor: '#3BCBFF',
  userFontColor: '#1A132F',
};

function SimpleForm() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hello, I am a Chat Bot. What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
}

export default SimpleForm;