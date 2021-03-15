import { Exclude } from 'class-transformer';
import { GameComponent } from '../../../../business/game-components/core/base/game-component';
import { VMath } from '../../../../business/common/v-math';
import { HtmlRendererGameComponent } from '../../../../business/game-components/core/html-renderer-game-component/html-renderer-game-component';
import { Timer } from '../../../../business/common/timer';
import { GameObjectCollection } from '../../../../business/core/game-object-collection';
import { MathScoreCounterComponent } from './math-score-counter-component';

enum MathQuestion {
	None= 'None',
	WaitingAnswer = 'WaitingAnswer',
	DisplayingCorrect = 'DisplayingCorrect'
}

const answersMap = new Map([
	['sin(0°)', '0'], ['sin(30°)', '1/2'], ['sin(45°)', '√2/2'], ['sin(60°)', '√3/2'], ['sin(90°)', '1'], ['sin(180°)', '0'],
	['cos(0°)', '1'], ['cos(30°)', '√3/2'], ['cos(45°)', '√2/2'], ['cos(60°)', '1/2'], ['cos(90°)', '0'], ['cos(180°)', '-1'],
	['tg(0°)', '0'], ['tg(30°)', '√3/3'], ['tg(45°)', '1'], ['tg(60°)', '√3'], ['tg(90°)', '--'], ['tg(180°)', '0'],
	['ctg(0°)', '--'], ['ctg(30°)', '√3'], ['ctg(45°)', '1'], ['ctg(60°)', '√3/3'], ['ctg(90°)', '0'], ['ctg(180°)', '--']
]);

@Exclude()
export class MathQuestionComponent extends GameComponent  {

	public name = MathQuestionComponent.name;

	private currentQuestion = '';
	private currentState = MathQuestion.None;
	private allQuestions = Array.from(answersMap.keys());
	private result = '';
	private waitingTime = 0;
	private renderer: HtmlRendererGameComponent;
	private mathScoreCounterComponent: MathScoreCounterComponent;
	private css = '';

	public start(): void {
		const mathScore = GameObjectCollection.findDescendantByName('mathScore', GameObjectCollection.root(this.gameObject));
		this.mathScoreCounterComponent = mathScore.getComponent<MathScoreCounterComponent>(MathScoreCounterComponent.name);
		const mathQuestion = GameObjectCollection.findDescendantByName('mathQuestion', GameObjectCollection.root(this.gameObject));
		this.renderer = mathQuestion.getComponent<HtmlRendererGameComponent>(HtmlRendererGameComponent.name);
		this.setQuestion();
	}

	public draw(): void {
		this.gameObject.text = `${this.currentQuestion}${this.result}`;
	}

	public update(): void {
		if (this.currentState === MathQuestion.DisplayingCorrect && this.waitingTime < Timer.getTime()) {
			this.setQuestion();
		}
		this.renderer.addAdditionalCss(this.css);
	}

	public destroy(): void {
	}

	public answer(answer: string): void {
		if (this.currentState !== MathQuestion.WaitingAnswer) {
			return;
		}

		if (answersMap.get(this.currentQuestion) === answer) {
			this.result = ` ${answer} Верно!!!`;
			this.css = 'color: #0F0';
			this.mathScoreCounterComponent.incrementScore();
		} else {
			this.result = ` Правильный ответ: ${answersMap.get(this.currentQuestion)}`;
			this.css = 'color: #F00';
		}
		this.currentState = MathQuestion.DisplayingCorrect;
		this.waitingTime = Timer.getTime() + 5000;
	}

	private setQuestion(): void {
		const index = VMath.randIntMaxIncluded(0, this.allQuestions.length - 1);
		this.currentQuestion = this.allQuestions[index];
		this.currentState = MathQuestion.WaitingAnswer;
		this.css = 'color: #000';
		this.result = '';
	}
}
