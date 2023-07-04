package com.glp.brand.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.glp.brand.dto.LogDTO;
import com.glp.brand.service.HelloService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class HelloController {
    private Logger logger = LoggerFactory.getLogger(HelloController.class);

    private final HelloService helloService;

    @GetMapping("")
    public List<LogDTO> getHello(){
        logger.info("get Hello Controller");
        return helloService.getHello();
    }
    @GetMapping("/html")
    public String getHtml(){
        return "<h1>HELLO WORLD!</h1>";
    }
    @GetMapping("/alert")
    public String getAlert(){
        return "<h1>HELLO WORLD!</h1>";
    }
    @PostMapping("/")
    public List<LogDTO> getHelloPost(){
        return helloService.getHello();
    }

}
