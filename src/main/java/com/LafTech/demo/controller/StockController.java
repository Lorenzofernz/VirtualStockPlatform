package com.LafTech.demo.controller;

import com.LafTech.demo.model.StockData;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StockController {

    @GetMapping("/api/stock")
    public StockData getStockData() {
        // Return some example data for now
        return new StockData("TSLA", 780.00, "2024-08-18");
    }
}

