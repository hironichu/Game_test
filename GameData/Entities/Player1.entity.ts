// const playerSkin = '/assets/tileset/player.png';
// const states = [
// 	{
// 		name: "idle",
// 		line: 2,
// 		frames: 1,
// 	},
// 	{
// 		name: "up",
// 		line: 8,
// 		frames: 7
// 	},
// 	{
// 		name: "down",
// 		line: 10,
// 		frames: 7
// 	},
// 	{
// 		name: "left",
// 		line: 9,
// 		frames: 7
// 	},
// 	{
// 		name: "right",
// 		line: 11,
// 		frames: 7
// 	}
// ]
// const loadsprite = (image, states) => {
// 	const animations = []
// 	states.forEach((state, index) => {
// 		const frames = { loc: [] };
// 		for (let i = 0; i < state.frames; i++) {
// 			frames.loc.push({x: i * 64, y: state.line * 64 });
// 		};
// 		animations[state.name] = frames;
// 	})
// 	//generate a canvas based on the image
// 	let canvas = document.createElement('canvas');
// 	canvas.width = image.width;
// 	canvas.height = image.height;
// 	let ctx = canvas.getContext('2d');
// 	ctx.drawImage(image, 0, 0);
// 	const sprite = {
// 		image: image,
// 		canvas: ctx.canvas,
// 		animations: animations,
// 		defaultAnimation: "idle",
// 		animation_step: 64,
// 		hitbox: {type: 'square', x: 20, y: 32, width: 24, height: 32},
// 		size: [48, 64]
// 	}
// 	ctx = null;
// 	canvas = null
// 	return sprite;
// }

// const loadEntity =  (skin) => {
// 	return new Promise((resolve, reject) => {
// 		const img = new Image()
// 		img.src = skin
// 		img.onload = () => resolve(loadsprite(img, states))
// 		img.onerror = () => reject(`Error Skinload (Player)`)
// 	})
// }

// const Player =  loadEntity(playerSkin)

// export {Player}
