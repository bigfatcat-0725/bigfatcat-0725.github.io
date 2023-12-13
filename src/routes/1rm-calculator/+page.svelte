<script>
	let category = 'squat';
	let inputKg = '';
	let count = '1';
	let result = '';

	const deadlift = {
		'1': '1.000',
		'2': '1.065',
		'3': '1.13',
		'4': '1.147',
		'5': '1.164',
		'6': '1.181',
		'7': '1.198',
		'8': '1.22',
		'9': '1.232',
		'10': '1.24'
	};

	const squat = {
		'1': '1.000',
		'2': '1.0475',
		'3': '1.13',
		'4': '1.1575',
		'5': '1.2',
		'6': '1.242',
		'7': '1.284',
		'8': '1.326',
		'9': '1.368',
		'10': '1.41'
	};

	const bench = {
		'1': '1.000',
		'2': '1.035',
		'3': '1.08',
		'4': '1.115',
		'5': '1.15',
		'6': '1.18',
		'7': '1.22',
		'8': '1.255',
		'9': '1.29',
		'10': '1.325'
	};

	// $: console.log(`${category} ${inputKg} ${count}`);

	// $: console.log(`result ${result}`);

	// 드롭다운 값이 변경될 때 호출되는 함수
	function handleDropdownChangeCount(event) {
		count = event.target.value;
	}

	function handleInputKg(event) {
		inputKg = event.target.value;
	}

	function handleDropdownChangeCategory(event) {
		category = event.target.value;
	}

	function calculate() {
		if (inputKg != '') {
			// console.log(`calculate ${category} ${count} ${inputKg}`);

			let rate;

			if (category == 'squat') {
				rate = squat[count] * 1;
			}
			if (category == 'deadlift') {
				rate = deadlift[count] * 1;
			}
			if (category == 'bench') {
				rate = bench[count] * 1;
			}

			let reInputKg = inputKg * 1;

			// console.log(`rate ${rate} ${reInputKg}`);

			result = reInputKg * rate;
		} else {
			alert('무게를 입력해주세요.');
		}
	}
</script>

<div id="frame">
	<div id="contents">
		<h1>간단한 1RM 계산기</h1>
		<p>- 위 계산기는 NSCA 공식을 따릅니다. -</p>
		<label for="dropdown">종목</label>
		<select id="dropdown" bind:value={category} on:change={handleDropdownChangeCategory}>
			<option value="squat">스쿼트</option>
			<option value="bench">벤치프레스</option>
			<option value="deadlift">데드리프트</option>
		</select>
		<label for="dropdown">무게</label>
		<input type="text" bind:value={inputKg} on:change={handleInputKg} placeholder="입력" />
		<label for="dropdown">반복횟수</label>
		<select id="dropdown" bind:value={count} on:change={handleDropdownChangeCount}>
			<option value="1">1회</option>
			<option value="2">2회</option>
			<option value="3">3회</option>
			<option value="4">4회</option>
			<option value="5">5회</option>
			<option value="6">6회</option>
			<option value="7">7회</option>
			<option value="8">8회</option>
			<option value="9">9화</option>
			<option value="10">10회</option>
		</select>
		<div id="calculate">
			<button on:click={calculate}>계산</button>
		</div>
		{#if result != ''}
			<div id="result">
				{#if category == 'squat'}
					<ul>
						<li>1RM - {(result / squat[1]).toFixed(1)}kg</li>
						<li>2RM - {(result / squat[2]).toFixed(1)}kg</li>
						<li>3RM - {(result / squat[3]).toFixed(1)}kg</li>
						<li>4RM - {(result / squat[4]).toFixed(1)}kg</li>
						<li>5RM - {(result / squat[5]).toFixed(1)}kg</li>
						<li>6RM - {(result / squat[6]).toFixed(1)}kg</li>
						<li>7RM - {(result / squat[7]).toFixed(1)}kg</li>
						<li>8RM - {(result / squat[8]).toFixed(1)}kg</li>
						<li>9RM - {(result / squat[9]).toFixed(1)}kg</li>
						<li>10RM - {(result / squat[10]).toFixed(1)}kg</li>
					</ul>
				{:else if category == 'bench'}
					<ul>
						<li>1RM - {(result / bench[1]).toFixed(1)}kg</li>
						<li>2RM - {(result / bench[2]).toFixed(1)}kg</li>
						<li>3RM - {(result / bench[3]).toFixed(1)}kg</li>
						<li>4RM - {(result / bench[4]).toFixed(1)}kg</li>
						<li>5RM - {(result / bench[5]).toFixed(1)}kg</li>
						<li>6RM - {(result / bench[6]).toFixed(1)}kg</li>
						<li>7RM - {(result / bench[7]).toFixed(1)}kg</li>
						<li>8RM - {(result / bench[8]).toFixed(1)}kg</li>
						<li>9RM - {(result / bench[9]).toFixed(1)}kg</li>
						<li>10RM - {(result / bench[10]).toFixed(1)}kg</li>
					</ul>
				{:else if category == 'deadlift'}
					<ul>
						<li>1RM - {(result / deadlift[1]).toFixed(1)}kg</li>
						<li>2RM - {(result / deadlift[2]).toFixed(1)}kg</li>
						<li>3RM - {(result / deadlift[3]).toFixed(1)}kg</li>
						<li>4RM - {(result / deadlift[4]).toFixed(1)}kg</li>
						<li>5RM - {(result / deadlift[5]).toFixed(1)}kg</li>
						<li>6RM - {(result / deadlift[6]).toFixed(1)}kg</li>
						<li>7RM - {(result / deadlift[7]).toFixed(1)}kg</li>
						<li>8RM - {(result / deadlift[8]).toFixed(1)}kg</li>
						<li>9RM - {(result / deadlift[9]).toFixed(1)}kg</li>
						<li>10RM - {(result / deadlift[10]).toFixed(1)}kg</li>
					</ul>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	@import '/static/reset.css';

	#frame {
		margin: auto;
		background-color: black;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	h1 {
		text-align: center;
		color: white;
		font-size: 3rem;
		font-weight: 700;
		margin-top: 50px;
	}

	p {
		margin-top: 20px;
		margin-bottom: 40px;
		text-align: center;
		color: white;
	}

	label {
		font-size: 1.25rem;
		margin-top: 20px;
		margin-bottom: 10px;
		display: block;
		color: white;
		text-align: center;
	}

	select {
		padding: 10px;
		font-size: 1rem;
		width: 200px;
		border: 1px solid #ddd;
		border-radius: 5px;
		background-color: #fff;
		color: #333;
	}

	/* 드롭다운 아이콘 숨기기 (모든 브라우저) */
	select {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-image: none; /* 기본 드롭다운 화살표 이미지 제거 */
	}

	input {
		padding: 10px;
		width: 178px;
		border: 1px solid #ddd;
		border-radius: 5px;
		background-color: #fff;
		color: #333;
		font-size: 1rem;
	}
	input::placeholder {
		color: #333;
	}

	button {
		width: 100px;
		height: 40px;
		margin-top: 40px;
		text-align: center;
		background-color: white;
		border: none;
		border-radius: 5px;
		font-size: 1rem;
	}

	ul {
		margin-top: 30px;
		margin-bottom: 50px;
	}

	li {
		color: white;
		font-size: 1.25rem;
		margin-bottom: 10px;
	}
</style>
