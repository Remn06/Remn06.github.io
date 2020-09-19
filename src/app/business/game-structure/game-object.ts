import { Exclude, Expose, Transform as TransformAttr, Type } from 'class-transformer';
import { Transform } from './transform';
import { GameComponent } from '../game-components/core/base/game-component';
import { ComponentBuilder } from '../game-loader/component-builder';

@Exclude()
export class GameObject {

	@Expose()
	public name: string = null;

	@Expose()
	@TransformAttr(value => ComponentBuilder.build(value), {toClassOnly: true})
	public components: GameComponent[] = [];

	@Expose()
	@Type(() => Transform)
	public transform: Transform = new Transform();

	@Expose()
	@Type(() => GameObject)
	public children: GameObject[] = [];

	@Expose()
	@Type(() => GameObject)
	public parent: GameObject = null;

	@Expose()
	public text: string;

	@Expose()
	public active: boolean;

	@Expose()
	public paused: boolean;

	constructor() {
	}

	public getComponent(componentName: string): GameComponent {
		return this.components.find((c) => c.name === componentName);
	}

	start(): void {
		this.components.forEach(
			(component) => {
				component.start();
			}
		);

		this.children.forEach((ch) => {
			ch.start();
		});
	}

	draw() {
		if (!this.active) {
			return;
		}

		this.components.forEach(
			(component) => {
				if (!component.active) {
					return;
				}
				component.draw();
			}
		);

		this.children.forEach((ch) => {
			ch.draw();
		});
	}

	update() {
		if (!this.active || this.paused) {
			return;
		}

		this.components.forEach(
			(component) => {
				if (!component.active) {
					return;
				}
				component.update();
			}
		);

		this.children.forEach((ch) => {
			ch.update();
		});
	}

	destroy() {
		this.components.forEach(
			(component) => {
				component.destroy();
			}
		);

		this.children.forEach((ch) => {
			ch.destroy();
		});
	}
}
