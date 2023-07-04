package com.glp.brand.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.glp.brand.dto.LogDTO;

@Mapper
public interface LogMapper {
    List<LogDTO> getLogs();
}