import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {
    const [categoriesSelected, updateCategoriesSelected] = useState('') 

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    const filteredPlantList = categoriesSelected
        ? plantList.filter((plant) => plant.category === categoriesSelected)
        : plantList 

    return (
        <div className="lmj-shopping-list">
            <Categories
                categoriesSelected={categoriesSelected}
                updateCategoriesSelected={updateCategoriesSelected}
            />
            <ul className="lmj-plant-list">
                {filteredPlantList.map(({ id, cover, name, water, light, price }) => (
                    <div key={id}>
                        <PlantItem
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            price={price}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList
