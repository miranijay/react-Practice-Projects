import ReactDOM from 'react-dom/client'
import Accordian  from './components/accordian/index.jsx'
import Randomcolor from './components/random-color/index.jsx'
import StarRating from './components/star_rating/index.jsx'
import ImageSlider from './components/image_slider/index.jsx'
import LoadMoreData from './components/load-more-data/index.jsx'
import TreeView from './components/tree_view/index.jsx'

export default function App() {

    return (
            <div className='App'>

                <Accordian />

                <Randomcolor />

                <StarRating stars={10}/>

                <ImageSlider 
                    url={"https://picsum.photos/v2/list"}
                    page={"1"}
                    limit={"10"}
                />

                <LoadMoreData />

                <TreeView />
            </div>
    )
}


