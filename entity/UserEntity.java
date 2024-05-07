package com.ming.entity;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

/**
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2024-04-08 12:16:46
 */
@Data
@TableName("tb_user")
public class UserEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 用户名
     */
    @TableId
    private String userName;
    /**
     * 手机号
     */
    private String mobile;
    /**
     * 手机号
     */
    private String mobile2;
    /**
     * 邮箱
     */
    private String email;
    /**
     * 密码
     */
    private String password;
    /**
     * 昵称
     */
    private String nickName;
    /**
     * 年龄
     */
    private Integer age;
    /**
     * 性别
     */
    private String gender;
    /**
     * 学号
     */
    private String studentId;
    /**
     * 国家
     */
    private String country;
    /**
     * 城市
     */
    private String city;
    /**
     * 出生日期
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date dateBirth;
    /**
     * 身高
     */
    private Double height;
    /**
     * 体重
     */
    private Double weight;
    /**
     * bmi
     */
    private Double bmi;
    /**
     * 肺活量
     */
    private String vitalCapacity;
    /**
     * 健身目标
     */
    private String shortTermFitnessGoal;
    /**
     * 1是管理员 2 不是
     */
    private Integer isAdmin;

    private String idCard;

    private String school;

    private String address;

    private String longTermFitnessGoal;
    private String specialFitnessGoal;



}
