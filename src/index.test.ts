import { sum } from ".";

describe("sum", () => {
    it("should add numbers together", () => {
        const answer = sum(1, 2);
        expect(answer).toEqual(3);
    });
});
