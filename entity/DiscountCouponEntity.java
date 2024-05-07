package com.ming.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import lombok.Data;

/**
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2024-04-08 12:16:45
 */
@Data
@TableName("tb_discount_coupon")
public class DiscountCouponEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     *
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    /**
     * 优惠券名称
     */
    private String name;
    /**
     * 开始时间
     */
    private Date startTime;
    /**
     * 结束时间
     */
    private Date endTime;
    /**
     *
     */
    private Date createTime;
    /**
     * 1可用2 不可用
     */
    private Integer available;
    /**
     * 场馆类型
     */
    private String type;


    private BigDecimal price;

    private BigDecimal discount;
}
