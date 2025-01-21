import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function handleClick(scaleValue, careType) {
	const mapping_scale_value = {
		1: 'peu',
		2: 'modérément',
		3: 'beaucoup'
	}
	alert(
		`Cette plante requiert ${mapping_scale_value[scaleValue]} ${
			careType === 'light' ? 'de lumière' : "d'arrosage"
		}`
	)

}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => handleClick(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale