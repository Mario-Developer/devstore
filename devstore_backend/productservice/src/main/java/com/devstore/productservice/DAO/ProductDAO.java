package com.devstore.productservice.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devstore.productservice.model.Product;

public interface ProductDAO extends JpaRepository<Product, Long>{

}
