import { SimpleMoveGameComponent } from '../../user/simple-move-game-component';
import { HtmlRendererGameComponent } from '../html-renderer-game-component/html-renderer-game-component';
import { ShiftRightComponent } from '../../user/shift-right.component';
import { ResetToLeftComponent } from '../../user/reset-to-left.component';
import { RotateComponent } from '../../user/rotate.component';
import { ShowHideGameObjectComponent } from '../../user/show-hide-game-object-component';
import { TestOneComponent } from '../../user/test-one-component';

export class ComponentsRegistry {
	public static registry = new Map<string, () => any>();
}

ComponentsRegistry.registry.set(ShiftRightComponent.name, () => ShiftRightComponent);
ComponentsRegistry.registry.set('SimpleMoveGameComponent', () => SimpleMoveGameComponent);
ComponentsRegistry.registry.set('HtmlRendererGameComponent', () => HtmlRendererGameComponent);
ComponentsRegistry.registry.set('ResetToLeftComponent', () => ResetToLeftComponent);
ComponentsRegistry.registry.set('RotateComponent', () => RotateComponent);
ComponentsRegistry.registry.set('ShowHideGameObjectComponent', () => ShowHideGameObjectComponent);
ComponentsRegistry.registry.set('TestOneComponent', () => TestOneComponent);



