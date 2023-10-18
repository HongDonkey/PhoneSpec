package com.com.PhoneSpec;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StartController {

        @GetMapping("/api/hello")
        public String hello() {
                return "Hello World! Hello Spring Boot and Hello React!";
        }
        
        @GetMapping("/main")
        public List<String> main() {
                return Arrays.asList("main", "is it main?");
        }

}