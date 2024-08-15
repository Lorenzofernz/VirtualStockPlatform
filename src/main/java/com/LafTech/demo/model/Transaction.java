package com.LafTech.demo.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio;  // Link to the portfolio

    @ManyToOne
    @JoinColumn(name = "stock_id")
    private Stock stock;  // Link to the stock being traded

    private int quantity;
    private Double pricePerUnit;
    private LocalDateTime transactionDate;
    private String transactionType; // e.g., "BUY" or "SELL"

    // Getters and Setters
    // ...
}
