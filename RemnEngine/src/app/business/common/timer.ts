import { isNumber } from 'util';
import { Logger } from './logger';
import { Subject } from 'rxjs';

export class Timer {

	public static timerEvent: Subject<void> = new Subject();
	public static firsTimerIsActive = true;
	public static secondTimerIsActive = true;
	public static thirdTimerIsActive = true;

	private static isStarted = false;
	private static dividerValue = 1;
	private static intervalValue = 16;

	private static initialTimerValue = 0;
	private static lastTimerValue = 0;
	private static callsNumber = 0;
	private static callTime = 0;


	public static initialize() {
		Timer.initialTimerValue = Timer.getTime();
		// Timer.lastTimerValue = Timer.initialTimerValue;
		// Timer.callTime = Timer.initialTimerValue;
		Timer.start();
		setInterval(() => { Timer.intervalCallback(); }, Timer.intervalValue);
	}

	public static get started(): boolean {
		return Timer.isStarted;
	}

	public static get divider(): number {
		return Timer.dividerValue;
	}

	public static set divider(value: number) {
		if (!isNumber(value) || value <= 0) {
			Logger.warn(`Timer's divider value is invalid: ${value}`);
			return;
		}
		Timer.dividerValue = value;
	}

	public static get timeSinceStart(): number {
		return Timer.callTime - Timer.initialTimerValue;
	}

	// delta have to be in secs.
	public static get delta(): number {
		return (Timer.callTime - Timer.lastTimerValue) / 1000;
	}

	public static start(): void {
		Timer.isStarted = true;
		Timer.lastTimerValue = Timer.getTime();
		Timer.callTime = Timer.initialTimerValue;
	}

	public static stop(): void {
		Timer.isStarted = false;
	}

	public static getTime(): number {
		return Date.now();
	}

	private static intervalCallback(): void {
		Timer.callsNumber++;
		if (Timer.callTime % Timer.divider !== 0) {
			return;
		}

		Timer.lastTimerValue = Timer.callTime;
		Timer.callTime = Timer.getTime();
		this.timerEvent.next();
	}
}

Timer.initialize();
