package com.com.PhoneSpec;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StartController {

        @GetMapping("/")
        public String index() {
                return "Hello World! Hello Spring Boot!";
        }

}