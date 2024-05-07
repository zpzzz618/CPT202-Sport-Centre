package com.ming.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author The-One
 */
@Data
@TableName("tb_product")
public class ProductEntity {
    private Long id;
    private String product;
    private Integer num;
    private Integer court;
    private Integer available;
}
