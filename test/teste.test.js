const axios = require('axios');

describe('Jest run test', () => {
    it("should return true when 2 + 2 equals 4", () => {
        const soma = 2 + 2;
        expect(soma).toBe(4);
    });

    it("get name from a simple endpoint", async () => {
        const response = await axios.get('http://localhost:4000/nome');
        expect(response.status).toBe(200);
        expect(response.data).toBe("Danilo Emanuel");
    });

    it("get name from GraphQL", async () => {
        const query = {
          query: `
            query {
              meuNome
            }
          `
        };
    
        const response = await axios.post('http://localhost:4000/graphql', query, {
          headers: { 'Content-Type': 'application/json' }
        });    
        const nomeDoGraphQL = response.data.data.meuNome;
        expect(response.status).toBe(200);
        expect(nomeDoGraphQL).toBe("Danilo Emanuel");
    });
});