package com.ming.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ming.entity.UserEntity;
import com.ming.entity.UserLoginHisEntity;
import com.ming.mapper.UserDao;
import com.ming.mapper.UserLoginHisDao;
import com.ming.utils.HttpServletUtil;
import com.ming.utils.ResponseVO;
import com.ming.utils.SendEmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@RestController
public class LoginController {

    @Autowired
    private UserDao userDao;
    @Autowired
    private UserLoginHisDao userLoginHisDao;

    @RequestMapping("login")
    public ResponseVO login(@RequestBody UserEntity userEntity) {
        HttpServletRequest request = HttpServletUtil.getRequest();

        QueryWrapper<UserEntity> wrapper = new QueryWrapper<>();
        wrapper.eq("user_name", userEntity.getUserName())
                .eq("password", userEntity.getPassword());
        UserEntity user = userDao.selectOne(wrapper);
        if (null != user) {
            UserLoginHisEntity userLoginHis = new UserLoginHisEntity();
            userLoginHis.setUserName(userEntity.getUserName());
            userLoginHis.setIp(request.getRemoteAddr());
            userLoginHis.setDateTime(new Date());
            userLoginHisDao.insert(userLoginHis);
            return ResponseVO.success().add("user", user);
        }
        return ResponseVO.fail("Incorrect username or password");
    }

    @RequestMapping("logout")
    public ResponseVO logout() {
        return ResponseVO.success();
    }

    @RequestMapping("forget")
    public ResponseVO forget(@RequestBody UserEntity userEntity) {
        // TODO 找回密码的地址
        String content = "Please click on the link: http://127.0.0.1:9012/login/html/resetPassword.html?username=" + userEntity.getUserName() +" to reset the password";
        SendEmail.send("Retrieve password", content, userEntity.getEmail());
        return ResponseVO.success();
    }

}
