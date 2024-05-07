package com.ming.controller;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.ming.entity.CommunityEntity;
import com.ming.entity.CommunityLikeEntity;
import com.ming.mapper.CommunityDao;
import com.ming.mapper.CommunityLikeDao;
import com.ming.utils.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 社区
 */
@RestController
@RequestMapping("community")
public class CommunityController {

    @Autowired
    private CommunityDao communityDao;
    @Autowired
    private CommunityLikeDao communityLikeDao;

    /**
     * 查询
     *
     * @param communityEntity
     * @return
     */
    @RequestMapping("find")
    public ResponseVO find(@RequestBody CommunityEntity communityEntity) {
        List<CommunityEntity> communityEntities = communityDao.findInfo(communityEntity);
        return ResponseVO.success().add("list", communityEntities);
    }

    /**
     * 保存
     *
     * @param communityEntity
     * @return
     */
    @RequestMapping("save")
    public ResponseVO save(@RequestBody CommunityEntity communityEntity) {
        communityDao.insert(communityEntity);
        return ResponseVO.success();
    }

    /**
     * 保存
     *
     * @param communityLikeEntity
     * @return
     */
    @RequestMapping("saveLike")
    public ResponseVO saveLike(@RequestBody CommunityLikeEntity communityLikeEntity) {
        QueryWrapper<CommunityLikeEntity> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("community_id", communityLikeEntity.getCommunityId());
        queryWrapper.eq("user_name", communityLikeEntity.getUserName());
        List<CommunityLikeEntity> communityLikeEntities = communityLikeDao.selectList(queryWrapper);
        if (communityLikeEntities.isEmpty()) {
            communityLikeDao.insert(communityLikeEntity);
        } else {
            communityLikeDao.delete(queryWrapper);
        }
        return ResponseVO.success();
    }

    /**
     * 修改
     *
     * @param communityEntity
     * @return
     */
    @RequestMapping("update")
    public ResponseVO update(@RequestBody CommunityEntity communityEntity) {
        communityDao.updateById(communityEntity);
        return ResponseVO.success();
    }

    @RequestMapping("loadScore")
    public ResponseVO loadScore(@RequestBody CommunityEntity communityEntity) {
        JSONObject communityEntity1 = communityDao.loadScore(communityEntity.getType());
        QueryWrapper<CommunityEntity> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("type", communityEntity.getType());
        Integer integer = communityDao.selectCount(queryWrapper);
        return ResponseVO.success().add("communityEntity", communityEntity1).add("count", integer);
    }
}
