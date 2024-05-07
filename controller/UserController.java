package com.ming.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.ming.entity.UserEntity;
import com.ming.mapper.UserDao;
import com.ming.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserDao userDao;

    /**
     * 查询全部
     *
     * @param userEntity
     * @return
     */
    @RequestMapping("find")
    public ResponseVO find(@RequestBody UserEntity userEntity) {
        QueryWrapper<UserEntity> queryWrapper = new QueryWrapper<>(userEntity);
        List<UserEntity> userEntities = userDao.selectList(queryWrapper);
        return ResponseVO.success().add("list", userEntities);
    }

    /**
     * 查询详情
     *
     * @param userEntity
     * @return
     */
    @RequestMapping("findByName")
    public ResponseVO findByName(@RequestBody UserEntity userEntity) {
        QueryWrapper<UserEntity> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name", userEntity.getUserName());
        UserEntity user = userDao.selectOne(queryWrapper);
        return ResponseVO.success().add("user", user);
    }

    /**
     * 修改
     *
     * @param userEntity
     * @return
     */
    @RequestMapping("update")
    public ResponseVO updateUser(@RequestBody UserEntity userEntity) {
        int i = userDao.updateById(userEntity);
        if (i > 0) {
            return ResponseVO.success();
        } else {
            return ResponseVO.fail();
        }
    }

    /**
     * 修改
     *
     * @param userEntity
     * @return
     */
    @RequestMapping("resave")
    public ResponseVO resave(@RequestBody UserEntity userEntity) {
        UserEntity userEntity1 = userDao.selectById(userEntity.getUserName());
        if (null == userEntity1) {
            userDao.insert(userEntity);
        } else {
            userDao.updateById(userEntity);
        }
        return ResponseVO.success();
    }

    /**
     * 修改
     *
     * @param json
     * @return
     */
    @RequestMapping("updatePassword")
    public ResponseVO updatePassword(@RequestBody JSONObject json) {
        UserEntity userEntity = json.toJavaObject(UserEntity.class);
        String oldPwd = json.getString("oldPwd");
        QueryWrapper<UserEntity> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("password", oldPwd);
        queryWrapper.eq("user_name", userEntity.getUserName());
        UserEntity userEntity1 = userDao.selectOne(queryWrapper);
        if (null == userEntity1) {
            return ResponseVO.fail("Original password incorrect");
        }
        UpdateWrapper<UserEntity> wrapper = new UpdateWrapper<>();
        wrapper.eq("password", oldPwd)
                .eq("user_name", userEntity.getUserName());
        UserEntity user = new UserEntity();
        user.setPassword(userEntity.getPassword());
        int i = userDao.update(user, wrapper);
        if (i > 0) {
            return ResponseVO.success();
        } else {
            return ResponseVO.fail();
        }
    }


    /**
     * 保存
     *
     * @param userEntity
     * @return
     */
    @RequestMapping("save")
    public ResponseVO saveUser(@RequestBody UserEntity userEntity) {
        QueryWrapper<UserEntity> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_name", userEntity.getUserName());
        UserEntity userEntity1 = userDao.selectOne(queryWrapper);
        QueryWrapper<UserEntity> queryWrapper1 = new QueryWrapper<>();
        queryWrapper1.eq("email", userEntity.getEmail());
        UserEntity userEntity2 = userDao.selectOne(queryWrapper1);
        if(null != userEntity1){
            return ResponseVO.fail("The user name has been registered!");
        }
        if(null != userEntity2){
            return ResponseVO.fail("The email has been registered!");
        }

        int i = userDao.insert(userEntity);
        if (i > 0) {
            return ResponseVO.success();
        } else {
            return ResponseVO.fail();
        }
    }


}
