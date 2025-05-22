import Sequelize, { Model } from "sequelize";

class Product extends Model {
	static init(sequelize) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		super.init(
			{
				name: Sequelize.STRING,
				price: Sequelize.DECIMAL, // Usando DECIMAL para preços, o que é mais adequado para valores monetários.
				category_id: Sequelize.INTEGER, // Mudando para `category_id` para refletir a chave estrangeira corretamente.
				path: Sequelize.STRING,
				offer: Sequelize.BOOLEAN,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `http://localhost:3001/product-file/${this.path}`;
					},
				},
			},
			{
				sequelize,
			},
		);

		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		return this;
	}

	static associate(models) {
		// biome-ignore lint/complexity/noThisInStatic: <explanation>
		this.belongsTo(models.Category, {
			foreignKey: "category_id", // Garantindo que o nome da chave estrangeira corresponda ao que foi definido.
			as: "category", // Alias para a associação
		});
	}
}

export default Product;
