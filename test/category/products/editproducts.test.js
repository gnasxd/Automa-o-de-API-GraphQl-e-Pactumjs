const { spec } = require('pactum')

it('Editar um produto adicionado ', async () => {
    await spec()
        .put('http://lojaebac.ebaconline.art.br/graphql')
        .withGraphQLQuery(`mutation EditProduct($editProductId: ID!, $name: String, $categories: [CategoryInput], $description: String, $price: Float) {
  editProduct(id: $editProductId, name: $name, categories: $categories, description: $description, price: $price) {
    name
    categories {
      name
    }
    description
    price
  }
}`)
        .withGraphQLVariables({
            "editProductId": null,
            "name": "livro infantis 2",
            "categories": [
                {
                    "name": "livros infantis"
                }
            ],
            "description": "um livro infantil sobre patos",
            "price": 300
        })
});