package com.LafTech.demo.model;

import jakarta.persistence.*;
import java.util.Set;

@Entity
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;  // Link to the User who owns the portfolio

    @OneToMany(mappedBy = "portfolio")
    private Set<Transaction> transactions;  // Link to transactions in this portfolio

    // Getters and Setters
    // ...
}

