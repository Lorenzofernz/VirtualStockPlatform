package com.LafTech.demo.model;

import java.util.List;

public class StockData {
    private String symbol;
    private double price;
    private String date;

    // Constructor
    public StockData(String symbol, double price, String date) {
        this.symbol = symbol;
        this.price = price;
        this.date = date;
    }

    // Getters and Setters
    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}