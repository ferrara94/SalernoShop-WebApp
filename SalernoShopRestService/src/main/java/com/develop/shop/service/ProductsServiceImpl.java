package com.develop.shop.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.develop.shop.entity.Product;
import com.develop.shop.repository.ProductsRepository;

@Service
public class ProductsServiceImpl implements ProductsService {

	@Autowired
	ProductsRepository repo;
	
	@Override
	public List<Product> getProductsByFoodstuff(String foodstuff) {
		
		return repo.findByFoodstuff(foodstuff);
	}

	@Override
	public List<Product> getAllProducts() {
		
		return repo.findAll();
	}

	@Override
	public void populateDB() {
		
		List<Product> products = new LinkedList<>();
		
		String barilla = "Grano prodotto 100% da agricoltura italiana con "
				+ "strumenti innovativi e in totale sicurezza. Abbiamo "
				+ "fatto 100. Grano di qualità prodotto al 100% in Italia.";
		
		//pasta
		products.add( new Product("Barilla tortiglioni", "pasta", 1.89, barilla) );
		products.add( new Product("Barilla trofie", "pasta", 1.89, barilla) );
		products.add( new Product("Barilla whole", "pasta", 1.89, barilla) );

		String tuna = "Tonno appartenente a specie non sovrasfruttate "
				+ "e pescato con metodi sostenibili.";
		
		//fish
		products.add( new Product("Riomare tuna", "fish", 4.20, tuna) );
		products.add( new Product("Rizzoli tuna", "fish", 3.20, tuna) );
		
		String nutella = "nuova crema spalmabile al cioccolato di Baci Perugina. Con la sua "
				+ "inconfondibile granella di nocciole. Basta provarla per innamorarsi.";
		
		//chocolate
		products.add( new Product("Nutella 400gr", "chocolate", 5.99, nutella) );
		products.add( new Product("Nutella go", "chocolate", 2.00, nutella) );
		
		String water = "Acqua che ha origine dai ghiacciai del massiccio del Monte Rosa";
		
		//water
		products.add( new Product("volvic", "water", 0.99,water) );
		products.add( new Product("vichy", "water", 0.70,water) );
		
		repo.saveAll(products);
		
		
	}

	@Override
	public void addProduct(Product product) {
		repo.save(product);
	}

}
