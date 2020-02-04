package com.example.Testsite;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class DemoController {


    @RequestMapping(value="/pass")
    public String pass(@RequestParam(value="request", 
        defaultValue ="테스트용입니다." ) String request) {
        return request;
    }
    
}
