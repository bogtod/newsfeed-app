import React from 'react';
import './css/index.css'
import Header from './components/header.js';
import FeedControl from './components/main/section/feedControl.js';
import FeedContent from './components/main/section/feedContent.js';
import ExchangeWidget from './components/main/aside/exchangeWidget.js';
import Footer from './components/footer.js';
import Clock from './components/test';

function App() {
  return (
    <div>

      <Clock />
    
      <Header />

      <main>

        <section id="feedWrap">
          <FeedControl />
          <FeedContent />
        </section>

        <aside id="widgetsWrap">
          <ExchangeWidget />
        </aside>

      </main>

      <Footer />

    </div>
    
  );
}

export default App;
