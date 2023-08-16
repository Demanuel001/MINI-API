const axios = require('axios');

describe('Jest run test', () => {
    it("should return true when 2 + 2 equals 4", () => {
        const soma = 2 + 2;
        expect(soma).toBe(4);
    });

    it("must get the name from a simple endpoint", async () => {
        const response = await axios.get('http://localhost:4000/nome');
        expect(response.status).toBe(200);
        expect(response.data).toBe("Danilo Emanuel");
      });
});