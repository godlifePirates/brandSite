package com.glp.brand.dto;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LogDTO {
    private int seq;
    private String description;
    private Timestamp createDate;
    private Timestamp updateDate;
}
