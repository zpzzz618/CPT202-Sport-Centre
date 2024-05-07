package com.ming.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;

/**
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2024-04-08 12:16:45
 */
@Data
@TableName("tb_community")
public class CommunityEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     *
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    /**
     *
     */
    private String userName;
    /**
     * 意见
     */
    private String opinion;
    /**
     * 场馆类型
     */
    private String type;
    /**
     *
     */
    private Double score;

    private Integer likeCount;

    private Integer like;

    private Integer experience;
    private Integer environment;
    private Integer facilities;
    private Integer service;

}
