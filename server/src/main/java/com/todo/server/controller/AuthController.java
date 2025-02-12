package com.todo.server.config;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@
@RestController
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody String username, @RequestBody String password) {
        if(username.equals("username") && password.equals("password")) {
            String jwtToken="123";
            return ResponseEntity.accepted().body(jwtToken);
        }
        return ResponseEntity.notFound().build();
    }
}