const { spec } = require('pactum')

it('Deve adicionar um produto', async () => {
    await spec()
        .post('http://lojaebac.ebaconline.art.br/graphql')
        .withGraphQLQuery(`mutation AddProduct($name: String, $categories: [CategoryInput], $description: String, $price: Float) {
  addProduct(name: $name, categories: $categories, description: $description, price: $price) {
    name
    categories {
      name
    }
    description
    price
  }
}`)
        .withGraphQLVariables({
            "name": "livro 2",
            "categories": [
                {
                    "name": "livros infantis"
                }
            ],
            "description": "um livro infantil",
            "price": 350
        })
        .expectStatus(200)
});