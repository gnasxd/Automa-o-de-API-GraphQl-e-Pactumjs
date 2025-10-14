const { spec } = require('pactum');

it('Deve adicionar uma nova categoria no site ebac', async () => {
  await spec()
    .post('http://lojaebac.ebaconline.art.br/graphql')
    .withGraphQLQuery(`
mutation AddCategory($name: String, $photo: String) {
  addCategory(name: $name, photo: $photo) {
    name
    photo
  }
}
  `)
    .withGraphQLVariables({
      name: "livros infantis 2",
      photo: "any"
    })
    .expectStatus(200)

});