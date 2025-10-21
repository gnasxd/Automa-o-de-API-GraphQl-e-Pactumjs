const { spec } = require('pactum')

it('Deve deletar uma categoria existente', async () => {
    await spec()
        .post('http://lojaebac.ebaconline.art.br/graphql')
        .withGraphQLQuery(`mutation DeleteCategory($deleteCategoryId: ID!) {
  deleteCategory(id: $deleteCategoryId) {
    id
    name
  }
}`)
        .withGraphQLVariables({
            deleteCategoryId: "1",
            nome: "livros infantis de ratinho"
        })
        .expectStatus(200)
        .expectJsonLike({
            data: {
                deleteCategory: {
                    id: "1",
                    nome: "livros infantis de ratinho"
                }
            }
        })
});