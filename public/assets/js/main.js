const canvas = document.getElementById('main_canvas');

const engine = new BABYLON.Engine(canvas, true);

function createScene() {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 3, 0), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

	const floor = BABYLON.MeshBuilder.CreatePlane('floor', {
		size: 10
	}, scene);
    floor.position = new BABYLON.Vector3(0, 0, 0);
	floor.rotation = new BABYLON.Vector3(90*Math.PI/180, 0, 0);
	
	const roof = BABYLON.MeshBuilder.CreatePlane('roof', {
		size: 10
	}, scene);
    roof.position = new BABYLON.Vector3(0, 6.5, 0);
	roof.rotation = new BABYLON.Vector3(270*Math.PI/180, 0, 0);
	
	const wall1 = BABYLON.MeshBuilder.CreateBox('wall1', {
        size: 6.5
    }, scene);
	wall1.scaling = new BABYLON.Vector3(0.05, 1, 1.54)
	wall1.position = new BABYLON.Vector3(4.9, 3.25, 0);
	wall1.rotation = new BABYLON.Vector3(0*Math.PI/180, 0, 0);
	
    /*const box = BABYLON.MeshBuilder.CreateBox('box', {
        size: 1
    }, scene);

    const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {
        segments: 32,
        diameter: 2
    }, scene);
    sphere.position = new BABYLON.Vector3(3, 0, 0);

    const plane = BABYLON.MeshBuilder.CreatePlane('plane', {}, scene);
    plane.position = new BABYLON.Vector3(-3, 0, 0);*/

    return scene;
}

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});
