import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function Categories({ categoriesSelected, updateCategoriesSelected }) {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div className="lmj-categories">
            <select
                value={categoriesSelected}
                onChange={(e) => updateCategoriesSelected(e.target.value)}
            >
                <option value="">-- Toutes les catégories --</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
            <button onClick={() => updateCategoriesSelected('')}>
                Réinitialiser
            </button>
        </div>
    )
}

export default Categories
