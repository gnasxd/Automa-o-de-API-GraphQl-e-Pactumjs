const { spec } = require('pactum');
const { setDefaultExpectStatus } = require('pactum/src/exports/response');

it('Deve deletar um produto', async () => {
    await spec()
        .post('http://lojaebac.ebaconline.art.br/graphql')
        .withGraphQLQuery(`mutation DeleteProduct($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId) {
    name
    categories {
      name
    }
    description
    price
  }
}`)
        .withGraphQLVariables({
            deleteProductId: "1",
            name: "livro infantis 2",
            categories: [
                {
                    name: "livros infantis"
                }
            ],
            description: "um livro infantil sobre patos",
            price: 300
        })
        .expectStatus(200)
        .expectJsonLike({
            data: {
                deleteProductId: "1",
                name: "livro infantis 2",
                categories: [
                    {
                        name: "livros infantis"
                    }
                ],
                description: "um livro infantil sobre patos",
                price: 300
            }
        })
});