const { spec } = require('pactum')

it('Deve editar categoria do produto', async () => {
    await spec()
        .put('http://lojaebac.ebaconline.art.br/graphql')
        .withGraphQLQuery(`
    utation EditCategory($editCategoryId: ID!, $name: String, $photo: String) {
  editCategory(id: $editCategoryId, name: $name, photo: $photo) {
    name
    photo
  }
}
  `)
        .withGraphQLVariables({
            name: "livros infantis de ratinho",
            photo: "any"
        })

});