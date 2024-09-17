package com.devstore.productservice.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devstore.productservice.DAO.ProductDAO;
import com.devstore.productservice.model.Product;
import com.devstore.productservice.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductDAO productDAO;

	@Override
	public List<Product> findAll() {
		return this.productDAO.findAll();
	}

	@Override
	public Product save(Product product) {
		return this.productDAO.save(product);
	}

	@Override
	public void deleteById(Long id) {
		this.productDAO.deleteById(id);

	}

	@Override
	public Product findById(Long id) {
		return this.productDAO.findById(id).orElse(null);
	}

}
