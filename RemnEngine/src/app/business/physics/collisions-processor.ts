import { GameObject } from '../game-structure/game-object';

export class CollisionsProcessor {
	public static checkCollisions(rootGameObject: GameObject): void { /*
		let intersectObjects: IntersectObject[] = [];
		for(let i = 0; i < this.gameObjects.length; i++){
			if(this.gameObjects[i] instanceof IntersectObject){
				intersectObjects.push(this.gameObjects[i] as IntersectObject);
			}
		}

		let result: GameObject[] = [];
		for(let i = 0; i < intersectObjects.length; i++) {
			let intersectObject = intersectObjects[i];
			for(let t = i + 1; t < intersectObjects.length; t++) {
				let intersectObject1 = intersectObjects[t];
				if(intersectObject.checkCollision === false || intersectObject1.checkCollision === false) {
					continue;
				}
				if( intersectObject.intersects(intersectObject1) || intersectObject1.intersects(intersectObject) ) {
					result.push(intersectObject1);
					result.push(intersectObject);
					this.objectsCollide(intersectObject, intersectObject1);
				}
			}
		}

		for(let i = 0; i < result.length; i++){
			GameManager.instance().removeGameObject(result[i]);

			let animatedObject = new AnimatedObject('./img/explosion-sprite.png', 100, 100, 74, 9, 1000, true, () => {
				this.removeGameObject(animatedObject);
			});
			animatedObject.transform.left = result[i].transform.left;
			animatedObject.transform.top = result[i].transform.top;
			animatedObject.transform.width = 25;
			animatedObject.transform.height = 25;
			this.addGameObject(animatedObject);
		}

		this.restoreAsteroidsAmount(result);
		this.checkIfCruiserDeleted(result);*/
	}
}
