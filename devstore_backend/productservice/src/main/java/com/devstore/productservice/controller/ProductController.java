package com.devstore.productservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devstore.productservice.model.Product;
import com.devstore.productservice.service.ProductService;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/findAll")
	public List<Product> findAll(){
		return this.productService.findAll();
	}
	
	@PostMapping("/save")
	public Product save(@RequestBody Product product) {
		return this.productService.save(product);
	}
	
	@DeleteMapping("/{id}")
	public void deleteById(@PathVariable Long id) {
		this.productService.deleteById(id);
	}
	
	@GetMapping("/{id}")
	public Product findById(@PathVariable Long id) {
		return this.productService.findById(id);
	}
	

}
