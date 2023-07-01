package com.example.application.studygroup.component.controller.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
  @GetMapping("/user")
  public String index() {
    return "Hello World";
  }
}
