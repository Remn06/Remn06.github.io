//False - Heads; True - Tails

function experimentSeries(numberOfExperiments, showLog) {
	let twoHeads = 0;
	let oneHead = 0;
	let zeroHeads = 0;

	for (let i = 0; i < numberOfExperiments; i++) {
		let coinOne = Math.round(Math.random() * 10) > 5;
		let coinTwo = Math.round(Math.random() * 10) > 5;

		if (coinOne === false && coinTwo === false) {
			twoHeads++;
		} else if (coinOne === false || coinTwo === false) {
			oneHead++;
		} else {
			zeroHeads++;
		}

		if (showLog === true) {
			console.log('Experiment number:', i, 'coinOne:', coinOne, 'coinTwo:', coinTwo);
		}
	}
	return {
		"twoHeads": twoHeads,
		"oneHead": oneHead,
		"zeroHeads": zeroHeads,
		"twoHeadsFrequency": frequency(twoHeads, numberOfExperiments),
		"oneHeadFrequency": frequency(oneHead, numberOfExperiments),
		"zeroHeadsFrequency": frequency(zeroHeads, numberOfExperiments),
		"numberOfExperiments": numberOfExperiments

	};
}

function log(series) {
	console.log('--------------------------------------------------');

	let twoHeads = '';
	for(let i = 0; i < series.length; i++) {
		twoHeads += series[i].twoHeads + ' / ' + series[i].twoHeadsFrequency + '\t|';
	}

	console.log('| Two heads  | ' + twoHeads);

	let oneHead = '';
	for(let i = 0; i < series.length; i++) {
		oneHead += series[i].oneHead + ' / ' + series[i].oneHeadFrequency + '\t|';
	}

	console.log('| One head   | ' + oneHead);

	let zeroHeads = '';
	for(let i = 0; i < series.length; i++) {
		zeroHeads+= series[i].zeroHeads + ' / ' + series[i].zeroHeadsFrequency + '\t|';
	}

	console.log('| Zero heads | ' + zeroHeads);

	console.log('--------------------------------------------------');
}

function frequency(occurrences, numberOfSeries) {
	return occurrences / numberOfSeries;
}

let experiments = [10, 20, 50, 150];
let results = [];
for(let i = 0; i < experiments.length; i++) {
	let series = experimentSeries(experiments[i], false);
	results.push(series);
}

log(results);
