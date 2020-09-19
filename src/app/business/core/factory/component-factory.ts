import { NameValuePair } from '../../common/name-value-pair';

export interface IClassStatic {
	new();
}

export class ComponentFactory {

	public static createComponent<T>(clazz: IClassStatic, params: NameValuePair[], active: boolean = true): T {
		const component = new clazz();
		(params || []).forEach((p) => {
			component[p.name] = p.value;
		});
		component.active = active;
		return component;
	}
}
