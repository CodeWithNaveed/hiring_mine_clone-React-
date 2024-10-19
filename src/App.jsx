import './App.css';
import styled from 'styled-components';
import Navbar from './components/navbar';
import Head from './components/head';

function App() {
  return (
    <Container>
      <Navbar />
      <Head />
      
      
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding-bottom: 20px;
  margin-top: 16px;
`
