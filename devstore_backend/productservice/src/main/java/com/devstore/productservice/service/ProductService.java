package com.devstore.productservice.service;

import java.util.List;

import com.devstore.productservice.model.Product;

public interface ProductService {
	
	public List<Product> findAll();
	
	public Product save(Product product);
	
	public void deleteById(Long id);
	
	public Product findById(Long id);

}
