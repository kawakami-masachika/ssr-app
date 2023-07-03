package com.example.web.studygroup.component.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.web.studygroup.component.facade.user.UserFacade;

@RestController
public class UserController {

  @Autowired
  private UserFacade facade;

  @GetMapping("/users")
  public String getUser() {
    return facade.getUsers();
  }

  @GetMapping("/user/:id")
  public String getUserById() {
    return facade.getUserById();
  }
}
