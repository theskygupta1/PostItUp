import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import CreatePost from './components/createPost';
import PostList from './components/postList'
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
  const [selectedTab, setSelectedTab] = useState('Home');


  return (
    <PostListProvider>
      <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">
        <Header></Header>
        {selectedTab==='Home'? <PostList></PostList>:<CreatePost></CreatePost>}
        <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
