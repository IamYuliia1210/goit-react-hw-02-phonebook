import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Layout } from './Layout';

export class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <GlobalStyle />
        </Layout>
      </div>
    );
  }
}
