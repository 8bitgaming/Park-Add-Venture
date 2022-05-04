import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MyParks from "./pages/MyParks"
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Donation from "./components/PayPal";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/myparks" element={<MyParks />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Signup" element={<SignupForm />} />
          <Route path="/donation" element={<Donation />} />
          {/* <Route path="/myparks:id" element={<MyParks />} /> REPLACE WITH :ID VERSION ONCE GRAPHQL IN PLACE*/}
        </Routes>
        
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
