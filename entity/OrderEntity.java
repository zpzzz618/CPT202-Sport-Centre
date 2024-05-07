package com.ming.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

/**
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2024-04-08 12:16:45
 */
@Data
@TableName("tb_order")
public class OrderEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     *
     */
    private Long id;
    /**
     * 优惠券
     */
    private Long discountId;
    /**
     * 支付方式
     */
    private String payType;
    /**
     * 订单创建时间
     */
    private Date createTime;
    /**
     * 使用时间
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date useDate;
    /**
     * 1可用2 不可以
     */
    private Integer available;

    private String court;
    private String time;
    private String price;
    private Integer num;
    private String type;
    private String userName;


}
