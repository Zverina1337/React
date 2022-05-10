import Header from "./components/header/Header"
import ProfileBlock from "./components/profile_block/ProfileBlock"
import SearchBlock from "./components/search_block/SearchBlock"
import EventBlock from "./components/event_block/EventBlock"
import Categories from "./components/categories/Categories"
import Posts from "./components/content/Posts"
import ExploreEvents from "./components/explore_events/ExploreEvents"
import PeoplesBlock from "./components/peoples_block/PeoplesBlock"
import WeatherBlock from "./components/weather_block/WeatherBlock"
import NewsBlock from "./components/news_block/NewsBlock"
import Footer from "./components/footer/Footer"
import "./css/App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProfileBlock />
        <SearchBlock />
        <EventBlock />
        <Categories /> 
        <Posts />
        <ExploreEvents />
        <PeoplesBlock />
        <WeatherBlock />
        <NewsBlock /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
