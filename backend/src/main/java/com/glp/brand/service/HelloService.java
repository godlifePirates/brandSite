package com.glp.brand.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.glp.brand.controller.HelloController;
import com.glp.brand.dto.LogDTO;
import com.glp.brand.mapper.LogMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HelloService {
    private Logger logger = LoggerFactory.getLogger(HelloService.class);

    private final LogMapper logMapper;

    public List<LogDTO> getHello() {
        logger.info("get Hello Service");
        List<LogDTO> logDTOList = logMapper.getLogs();

        return logDTOList;
    }
}
