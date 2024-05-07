package com.ming.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ming.entity.UserSecurityQuestionEntity;
import com.ming.mapper.UserSecurityQuestionDao;
import com.ming.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("question")
public class UserSecurityQuestionController {

    @Autowired
    private UserSecurityQuestionDao userSecurityQuestionDao;

    /**
     * 保存密保
     *
     * @param json
     * @return
     */
    @RequestMapping("save")
    public ResponseVO save(@RequestBody JSONObject json) {
        List<UserSecurityQuestionEntity> list = json.getJSONArray("list").toJavaList(UserSecurityQuestionEntity.class);
        String userName = json.getString("userName");
        if (!list.isEmpty()) {
            QueryWrapper<UserSecurityQuestionEntity> queryWrapper = new QueryWrapper<>();
            queryWrapper.eq("user_name", userName);
            userSecurityQuestionDao.delete(queryWrapper);
            for (UserSecurityQuestionEntity userSecurityQuestionEntity : list) {
                userSecurityQuestionEntity.setUserName(userName);
                userSecurityQuestionDao.insert(userSecurityQuestionEntity);
            }
            return ResponseVO.success();
        } else {
            return ResponseVO.fail("No security question!");
        }

    }

    /**
     * 查询
     *
     * @param userSecurityQuestion
     * @return
     */
    @RequestMapping("find")
    public ResponseVO find(@RequestBody UserSecurityQuestionEntity userSecurityQuestion) {
        QueryWrapper<UserSecurityQuestionEntity> queryWrapper = new QueryWrapper<>(userSecurityQuestion);
        List<UserSecurityQuestionEntity> userSecurityQuestionEntities = userSecurityQuestionDao.selectList(queryWrapper);
        return ResponseVO.success().add("list", userSecurityQuestionEntities);
    }


}
