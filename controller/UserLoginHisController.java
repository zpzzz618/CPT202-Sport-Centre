package com.ming.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ming.entity.UserLoginHisEntity;
import com.ming.mapper.UserLoginHisDao;
import com.ming.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("userLoginHis")
public class UserLoginHisController {

    @Autowired
    private UserLoginHisDao userLoginHisDao;

    @RequestMapping("find")
    public ResponseVO find(@RequestBody UserLoginHisEntity userLoginHis) {
        QueryWrapper<UserLoginHisEntity> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name", userLoginHis.getUserName());
        queryWrapper.orderByDesc("date_time"); // 添加时间降序排序
        List<UserLoginHisEntity> userLoginHisEntities = userLoginHisDao.selectList(queryWrapper);
        return ResponseVO.success().add("list", userLoginHisEntities);
    }

    @RequestMapping("save")
    public ResponseVO save(@RequestBody UserLoginHisEntity userLoginHis) {
        userLoginHis.setDateTime(new Date());
        userLoginHisDao.insert(userLoginHis);
        return ResponseVO.success();
    }
}
