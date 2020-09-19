import { Exclude, Expose, Type } from 'class-transformer';
import { GameObject } from './game-object';

@Exclude()
export class GameScene {
  @Expose()
  public name: string;
  @Expose()
  @Type(() => GameObject)
  public rootGameObject: GameObject;

  constructor(name: string, gameObject: GameObject) {
  	this.name = name;
  	this.rootGameObject = gameObject;
  }
}
