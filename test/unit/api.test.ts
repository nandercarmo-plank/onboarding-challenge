describe('Number Operations', () => {
	test('1 plus 1 should be equal to 2', () => {
		const a = 1;
		const b = 1;
		expect(a + b).toBe(2);
	});

	test('5 plus 6 should not be equal to 10', () => {
		const a = 5;
		const b = 6;
		expect(a + b).not.toBe(10);
	});
});

describe('Other matcher methods', () => {
	test('the variable should be undefined', () => {
		let a;
		expect(a).toBeUndefined();
	});

	test('the variable should not be undefined', () => {
		const a = 1;
		expect(a).not.toBeUndefined();
	});

	test('the shop list should contain PS4', () => {
		const shopList = ["PS1", "PS3", "PS4", "PS5"];
		expect(shopList).toContain("PS4");
	});

	test('the shop list should not contain PS2', () => {
		const shopList = ["PS1", "PS3", "PS5"];
		expect(shopList).not.toContain("PS2");
	});
});