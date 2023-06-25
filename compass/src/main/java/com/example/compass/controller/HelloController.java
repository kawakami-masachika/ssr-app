package com.example.compass.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class HelloController {

  @GetMapping("/hello")
  public String index() {
    return "Greetings from Spring Boot!";
  }
}
