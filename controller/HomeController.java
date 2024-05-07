package com.ming.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ming.entity.HomeEntity;
import com.ming.entity.HomeJjEntity;
import com.ming.mapper.HomeDao;
import com.ming.mapper.HomeJjDao;
import com.ming.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("home")
public class HomeController {

    @Autowired
    private HomeDao homeDao;
    @Autowired
    private HomeJjDao homeJjDao;

    /**
     * 首页
     * @return
     */
    @RequestMapping("index")
    private ResponseVO index() {
        List<HomeEntity> homeEntities = homeDao.selectList(new QueryWrapper<>());
        List<HomeJjEntity> homeJjEntities = homeJjDao.selectList(new QueryWrapper<>());
        return ResponseVO.success().add("home", homeEntities).add("home2", homeJjEntities);
    }

    /**
     * 首页轮播获取
     * @return
     */
    @RequestMapping("getHome")
    private ResponseVO getHome() {
        List<HomeEntity> homeEntities = homeDao.selectList(new QueryWrapper<>());
        return ResponseVO.success().add("home", homeEntities);
    }

    /**
     * 首页简介
     * @return
     */
    @RequestMapping("getHome2")
    private ResponseVO getHome2() {
        List<HomeJjEntity> homeEntities = homeJjDao.selectList(new QueryWrapper<>());
        return ResponseVO.success().add("home2", homeEntities);
    }

    /**
     * 修改轮播
     * @param homeEntity
     * @return
     */
    @RequestMapping("updateHome")
    private ResponseVO updateHome(@RequestBody HomeEntity homeEntity) {
        homeDao.updateById(homeEntity);
        return ResponseVO.success();
    }

    /**
     * 修改首页简介
     * @param homeJjEntity
     * @return
     */
    @RequestMapping("updateHome2")
    private ResponseVO updateHome2(@RequestBody HomeJjEntity homeJjEntity) {
        homeJjDao.updateById(homeJjEntity);
        return ResponseVO.success();
    }

}
