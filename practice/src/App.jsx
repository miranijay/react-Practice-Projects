import ReactDOM from 'react-dom/client'
import Accordian  from './components/accordian/index.jsx'
import Randomcolor from './components/random-color/index.jsx'
import StarRating from './components/star_rating/index.jsx'

export default function App() {

    return (
            <div className='App'>

                <Accordian />

                <Randomcolor />

                <StarRating />


            </div>
    )
}


