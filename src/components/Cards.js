import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                        <ul className="cards__items"> 
                            <CardItem 
                                src="https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?cs=srgb&dl=pexels-pixabay-355321.jpg&fm=jpg"
                                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                                label="Adventure"
                                path="/services"
                            />
                            <CardItem 
                                src="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-931018.jpg&fm=jpg"
                                text="Travel through the Islands of Bali in private cruise"
                                label="Luxury"
                                path="/services"
                            />
                        </ul>
                        <ul className="cards__items"> 
                            <CardItem 
                                src="https://images.pexels.com/photos/5256400/pexels-photo-5256400.jpeg?cs=srgb&dl=pexels-emma-li-5256400.jpg&fm=jpg"
                                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                                label="Mystery"
                                path="/services"
                            />
                            <CardItem 
                                src="https://images.pexels.com/photos/1416900/pexels-photo-1416900.jpeg?cs=srgb&dl=pexels-rasik-1416900.jpg&fm=jpg"
                                text="Experience Football on Top of the Himilayan Mountains"
                                label="Adventure"
                                path="/product"
                            />
                             <CardItem 
                                src="https://images.pexels.com/photos/1703312/pexels-photo-1703312.jpeg?cs=srgb&dl=pexels-tom%C3%A1%C5%A1-mal%C3%ADk-1703312.jpg&fm=jpg"
                                text="Ride through the Sahara Desert on a guided camel tour"
                                label="Adrenaline"
                                path="/sign-up"
                            />
                        </ul>
                </div>
            </div>
        </div>
        
    )
}

export default Cards
