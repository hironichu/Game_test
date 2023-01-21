// const skin = '/assets/tileset/Tileeset_props.png';

// const props = [
// 	{
// 		name: 'box',
// 		x: 160,
// 		y: 18,
// 		width: 32,
// 		height: 46,
// 		type: 'solid',
// 		weight: 20,
// 		movable: true,
// 		hitbox: {type: 'square', x: 0, y: 23, width: 32, height: 28}
// 	},
// 	{
// 		name: 'barrel',
// 		x: 162,
// 		y: 152,
// 		width: 28,
// 		height: 38,
// 		type: 'solid',
// 		weight: 50,
// 		movable: true,
// 		hitbox: {type: 'circle', x: 0, y: 38, width: 28, height: 16}
// 	},
// 	{
// 		name: 'gravecross',
// 		x: 227,
// 		y: 303,
// 		width: 26,
// 		height: 40,
// 		type: 'solid',
// 		weight: 1,
// 		movable: false,
// 		hitbox: {type: 'square', x: 13, y: 40, width: 13, height: 20}
// 	}
// ];
// const loadsprites = (image, props) => {
// 	const propslist = []
// 	props.forEach((prop, index) => {
// 		let canvastmp = document.createElement('canvas')
// 		canvastmp.width = prop.width
// 		canvastmp.height = prop.height
// 		let ctx = canvastmp.getContext('2d')
// 		ctx.drawImage(image, prop.x, prop.y, prop.width, prop.height, 0, 0, prop.width, prop.height)
// 		propslist[index] = {
// 			name: prop.name,
// 			x: prop.x,
// 			y: prop.y,
// 			type:  prop.type,
// 			width: prop.width,
// 			hitbox: prop.hitbox,
// 			height: prop.height,
// 			weight: prop.weight,
// 			movable: prop.movable,
// 			sprite: canvastmp
// 		}
// 		ctx = null
// 		canvastmp = null
// 	})

// 	return propslist;
// }

// const loadProps =  (skin) => {
// 	return new Promise((resolve, reject) => {
// 		const img = new Image()
// 		img.src = skin
// 		img.onload = () => resolve(loadsprites(img, props))
// 		img.onerror = () => reject(`Error Skinload`)
// 	})
// }

// const Props = loadProps(skin)

// export {Props}
